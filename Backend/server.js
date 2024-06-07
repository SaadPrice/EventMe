const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const sequelize = require('./config/database');
const authRoutes = require('./routes/authRoutes');
const eventRoutes = require('./routes/eventRoutes');
const cron = require('node-cron');
const { fetchEventbriteEvents } = require('./controllers/eventController');

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/events', eventRoutes);

const PORT = process.env.PORT || 5000;

// Schedule a cron job to run at midnight every day
cron.schedule('0 0 * * *', async () => {
  try {
    await fetchEventbriteEvents();
    console.log('Eventbrite data updated');
  } catch (error) {
    console.error('Error updating Eventbrite data:', error);
  }
});

app.listen(PORT, async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connected');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
  console.log(`Server running on port ${PORT}`);
});
