const { Event } = require('../models');
const axios = require('axios');

const createEvent = async (req, res) => {
  const { title, date, description } = req.body;
  try {
    const event = await Event.create({
      title,
      date,
      description,
      UserId: req.user.id,
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
      headers: { 'Authorization': `Bearer ${process.env.EVENTBRITE_TOKEN}` },
      params: {
        q: req?.query?.q || 'default_query',
        'location.address': req?.query?.location || 'default_location',
      },
    });
    const events = response.data.events;

    if (req) {
      res.json(events);
    } else {
      return events;
    }
  } catch (error) {
    if (req) {
      res.status(500).json({ error: error.message });
    } else {
      console.error('Error fetching Eventbrite events:', error);
      throw error;
    }
  }
};

const updateEvent = async (req, res) => {
  const { eventId } = req.params;
  const { title, date, description } = req.body;
  try {
    const event = await Event.findByPk(eventId);
    if (!event) return res.status(404).json({ message: 'Event not found' });

    if (event.UserId !== req.user.id) return res.status(403).json({ message: 'Unauthorized' });

    event.title = title;
    event.date = date;
    event.description = description;
    await event.save();

    res.json(event);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteEvent = async (req, res) => {
  const { eventId } = req.params;
  try {
    const event = await Event.findByPk(eventId);
    if (!event) return res.status(404).json({ message: 'Event not found' });

    if (event.UserId !== req.user.id) return res.status(403).json({ message: 'Unauthorized' });

    await event.destroy();
    res.json({ message: 'Event deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createEvent, getEvents, fetchEventbriteEvents, updateEvent, deleteEvent };


