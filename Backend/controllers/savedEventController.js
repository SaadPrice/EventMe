const { SavedEvent, Event } = require('../models');

const saveEvent = async (req, res) => {
  const { eventId } = req.body;
  try {
    const event = await Event.findByPk(eventId);
    if (!event) return res.status(404).json({ message: 'Event not found' });

    const savedEvent = await SavedEvent.create({
      EventId: eventId,
      UserId: req.user.id,
    });
    res.status(201).json(savedEvent);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getUserSavedEvents = async (req, res) => {
  try {
    const savedEvents = await SavedEvent.findAll({ where: { UserId: req.user.id }, include: Event });
    res.json(savedEvents);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteSavedEvent = async (req, res) => {
  const { savedEventId } = req.params;
  try {
    const savedEvent = await SavedEvent.findByPk(savedEventId);
    if (!savedEvent) return res.status(404).json({ message: 'Saved event not found' });

    if (savedEvent.UserId !== req.user.id) return res.status(403).json({ message: 'Unauthorized' });

    await savedEvent.destroy();
    res.json({ message: 'Saved event deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { saveEvent, getUserSavedEvents, deleteSavedEvent };


