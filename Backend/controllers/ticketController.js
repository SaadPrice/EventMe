const { Ticket, Event } = require('../models');

const buyTicket = async (req, res) => {
  const { eventId, quantity } = req.body;
  try {
    const event = await Event.findByPk(eventId);
    if (!event) return res.status(404).json({ message: 'Event not found' });

    const ticket = await Ticket.create({
      quantity,
      EventId: eventId,
      UserId: req.user.id,
    });
    res.status(201).json(ticket);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getUserTickets = async (req, res) => {
  try {
    const tickets = await Ticket.findAll({ where: { UserId: req.user.id }, include: Event });
    res.json(tickets);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { buyTicket, getUserTickets };
