const Event = require('../models/Event');

exports.createEvent = async (req, res) => {
  try {
    const { title, description, date, location } = req.body;
    const event = await Event.create({ title, description, date, location });
    res.status(201).json({ event });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getEvents = async (req, res) => {
  try {
    const events = await Event.findAll();
    res.status(200).json({ events });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
