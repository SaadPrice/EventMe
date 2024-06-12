const { Event } = require('../models');
const axios = require('axios');

const createEvent = async (req, res) => {
  const { title, date, location } = req.body;
  try {
    const event = await Event.create({
      title,
      date,
      location,
      UserId: req.user.id,
    });
    res.status(201).json(event);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create event' });
  }
};

const getEvents = async (req, res) => {
  try {
    const events = await Event.findAll({ where: { UserId: req.user.id } });
    res.json(events);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch events' });
  }
};

const fetchEventbriteEvents = async (req, res) => {
  try {
    const response = await axios.get('https://www.eventbriteapi.com/v3/events/search/', {
      headers: { 'Authorization': `Bearer ${process.env.EVENTBRITE_TOKEN}` },
      params: {
        q: req.query.q || 'default_query',
        'location.address': req.query.location || 'default_location',
      },
    });
    const events = response.data.events;

    res.json(events);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch Eventbrite events' });
  }
};

const updateEvent = async (req, res) => {
  const { eventId } = req.params;
  const { title, date, location } = req.body;
  try {
    const event = await Event.findByPk(eventId);
    if (!event) return res.status(404).json({ message: 'Event not found' });

    if (event.UserId !== req.user.id) return res.status(403).json({ message: 'Unauthorized' });

    event.title = title;
    event.date = date;
    event.location = location;
    await event.save();

    res.json(event);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to update event' });
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
    console.error(error);
    res.status(500).json({ error: 'Failed to delete event' });
  }
};

const insertEvents = async (req, res) => {
  try {
    const events = [
      {
        title: 'Godfrey',
        date: new Date('2024-06-09T18:00:00'),
        location: 'The Comedy Zone, Charlotte, NC',
      },
      {
        title: 'Bossman Dlow',
        date: new Date('2024-06-14T19:00:00'),
        location: 'The Fillmore, Charlotte, NC',
      },
      {
        title: 'Partynextdoor',
        date: new Date('2024-07-25T19:00:00'),
        location: 'The Fillmore, Charlotte, NC',
      },
    ];

    await Event.bulkCreate(events);

    res.status(201).json({ message: 'Events inserted successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to insert events' });
  }
};

module.exports = { createEvent, getEvents, fetchEventbriteEvents, updateEvent, deleteEvent, insertEvents };



