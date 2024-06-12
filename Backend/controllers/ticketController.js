// backend/controllers/ticketController.js

const { Ticket, Event } = require('../models');

// Buy a ticket
const buyTicket = async (req, res) => {
  const { eventId, quantity } = req.body;
  try {
    const event = await Event.findByPk(eventId);
    if (!event) return res.status(404).json({ message: 'Event not found' });

    const ticket = await Ticket.create({
      status: 'purchased',
      purchaseDate: new Date(),
      EventId: eventId,
      UserId: req.user.id,
      quantity
    });

    res.status(201).json(ticket);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get tickets for the logged-in user
const getUserTickets = async (req, res) => {
  try {
    const tickets = await Ticket.findAll({
      where: { UserId: req.user.id },
      include: [{ model: Event }]
    });
    res.status(200).json(tickets);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a ticket
const deleteTicket = async (req, res) => {
  const { ticketId } = req.params;
  try {
    const ticket = await Ticket.findByPk(ticketId);
    if (!ticket) return res.status(404).json({ message: 'Ticket not found' });

    if (ticket.UserId !== req.user.id) return res.status(403).json({ message: 'Unauthorized' });

    await ticket.destroy();
    res.json({ message: 'Ticket deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { buyTicket, getUserTickets, deleteTicket };
