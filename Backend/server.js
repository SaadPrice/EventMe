const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');
const http = require('http');
const path = require('path');
const sequelize = require('./config/database');
const authRoutes = require('./routes/authRoutes');
const eventRoutes = require('./routes/eventRoutes');
const userRoutes = require('./routes/userRoutes');
const ticketRoutes = require('./routes/ticketRoutes');
const savedEventRoutes = require('./routes/savedEventRoutes');
const startWebSocketServer = require('./websocket'); // Import WebSocket server setup function
const cron = require('node-cron');
const eventbriteRoutes = require('./routes/eventbriteRoutes'); // Correct the import path

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/users', userRoutes);
app.use('/api/tickets', ticketRoutes);
app.use('/api/saved-events', savedEventRoutes);
app.use('/api/eventbrite', eventbriteRoutes); // Use Eventbrite routes

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, '../frontend/build')));

// Anything that doesn't match the above routes, send back index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/build/index.html'));
});

// Database connection
sequelize.sync()
  .then(() => console.log('Database connected'))
  .catch((err) => console.error('Database connection error:', err));

// Create HTTP server
const server = http.createServer(app);

// Start WebSocket server
startWebSocketServer(server);

// Start the server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// Example cron job setup (if needed)
cron.schedule('0 0 * * *', () => {
  console.log('Cron job running every day at midnight');
  // Add your cron job logic here
});
