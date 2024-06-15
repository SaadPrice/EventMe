const Eventbrite = require('eventbrite').default;
const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const router = express.Router();

// Use the token from your .env file
const eventbriteToken = process.env.EVENTBRITE_OAUTH_TOKEN;

// Create an instance of the Eventbrite SDK
const sdk = Eventbrite({ token: eventbriteToken });

// Define routes to interact with Eventbrite API
router.get('/events', async (req, res) => {
  try {
    const events = await sdk.request('/events/search/', {
      'location.address': 'Charlotte, NC',
      q: 'music'
    });
    res.json(events.events);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;




