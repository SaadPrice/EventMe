const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const http = require('http');
const sequelize = require('./config/database');
const authRoutes = require('./routes/authRoutes');
const eventRoutes = require('./routes/eventRoutes');
const userRoutes = require('./routes/userRoutes');
const WebSocket = require('ws');
const cron = require('node-cron');

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;

// Create an HTTP server
const server = http.createServer(app);

// Initialize WebSocket server
const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
  console.log('New client connected');
  
  ws.on('message', (message) => {
    console.log('received: %s', message);
    ws.send(`Hello, you sent -> ${message}`);
  });

  ws.send('Hi there, I am a WebSocket server');

  ws.on('close', () => {
    console.log('Client disconnected');
  });
});

// Task scheduler to update Eventbrite data
const { fetchEventbriteEvents } = require('./controllers/eventController');

cron.schedule('0 0 * * *', async () => {
  try {
    await fetchEventbriteEvents();
    console.log('Eventbrite data updated');
  } catch (error) {
    console.error('Error updating Eventbrite data:', error);
  }
});

server.listen(PORT, async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connected');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
  console.log(`Server running on port ${PORT}`);
});
