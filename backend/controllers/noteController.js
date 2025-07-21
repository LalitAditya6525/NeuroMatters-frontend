const Note = require('../models/Note');

exports.createNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    const note = new Note({ userId: req.user.id, title, content });
    await note.save();
    res.status(201).json(note);
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

exports.getNotes = async (req, res) => {
  try {
    const notes = await Note.find({ userId: req.user.id }).sort({ createdAt: -1 });
    res.json(notes);
  } catch (err) {
    res.status(500).send('Server Error');
  }
};