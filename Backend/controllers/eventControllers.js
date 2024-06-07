const { Event } = require('../models');
const axios = require('axios');

const createEvent = async (req, res) => {
  const { title, date, description } = req.body;
  try {
    const event = await Event.create({
      title,
      date,
      description,
      UserId: req.user.id
    });
    res.status(201).json(event);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getEvents = async (req, res) => {
  try {
    const events = await Event.findAll({ where: { UserId: req.user.id } });
    res.json(events);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const fetchEventbriteEvents = async (req, res) => {
  try {
    const response = await axios.get('https://www.eventbriteapi.com/v3/events/search/', {
      headers: { 'Authorization': `Bearer ${process.env.EVENTBRITE_TOKEN}` }
    });
    res.json(response.data.events);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createEvent, getEvents, fetchEventbriteEvents };

