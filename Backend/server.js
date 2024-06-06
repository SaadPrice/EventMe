const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const sequelize = require('./config/database');
const authRoutes = require('./routes/authRoutes');
const eventRoutes = require('./routes/eventRoutes');
const WebSocket = require('ws');
const schedule = require('node-schedule');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/events', eventRoutes);

const PORT = process.env.PORT || 5000;

sequelize.sync().then(() => {
  const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });

  const wss = new WebSocket.Server({ server });

  wss.on('connection', (ws) => {
    ws.on('message', (message) => {
      console.log('received: %s', message);
    });

    ws.send('Connected to WebSocket server');
  });

  schedule.scheduleJob('* * * * *', () => {
    wss.clients.forEach(client => {
      if (client.readyState === WebSocket.OPEN) {
        client.send('Scheduled message: It is a new minute!');
      }
    });
  });
}).catch(err => {
  console.error('Unable to connect to the database:', err);
});
