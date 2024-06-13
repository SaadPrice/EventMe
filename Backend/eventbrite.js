const Eventbrite = require('eventbrite');
const express = require('express');
const router = express.Router();

// Replace with your actual Eventbrite API token
const eventbriteToken = 'FSTTP3JVO5GUZ2TOHQ';

// Create an instance of the Eventbrite SDK
const sdk = Eventbrite({ token: eventbriteToken });

// Define routes to interact with Eventbrite API
router.get('/events', async (req, res) => {
  try {
    const events = await sdk.request('/events/search/', {
      'location.address': 'Charlotte, NC',
    });
    res.json(events);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
