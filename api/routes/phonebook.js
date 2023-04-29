import express from "express";
import Phonebook from '../models/phonebook.model.js';

const router = express.Router();

// Add contact
router.route('/').post((req, res) => {
    const { firstName, lastName, phoneNumber } = req.body

    const newPhonebook = new Phonebook({
        firstName,
        lastName,
        phoneNumber,
    });

    newPhonebook.save()
        .then(() => res.json('Phonebook entry added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Get all contacts
router.route('/').get((req, res) => {
    Phonebook.find()
        .then(phonebook => res.json(phonebook))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Get Single contact
router.route('/:id').get((req, res) => {
     Phonebook.findById(req.params.id)
        .then(phonebook => res.json(phonebook))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Edit Contact
router.route('/:id').patch((req, res) => {
    const { firstName, lastName, phoneNumber } = req.body;

    Phonebook.findOneAndUpdate(
        { _id: req.params.id },
        { firstName, lastName, phoneNumber },
        { new: true }
      )
        .then((updatedEntry) => res.json(updatedEntry))
        .catch((err) => res.status(400).json('Error: ' + err));
});

// Delete Contact
router.route('/:id').delete((req, res) => {
    Phonebook.findByIdAndDelete(req.params.id)
        .then(() => res.json('Phonebook entry deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

export default router;