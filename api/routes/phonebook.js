import express from "express";
import Phonebook from '../models/phonebook.model';

const router = express.Router();

router.route('/').get((req, res) => {
    Phonebook.find()
        .then(phonebook => res.json(phonebook))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const phoneNumber = req.body.phoneNumber;

    const newPhonebook = new Phonebook({
        firstName,
        lastName,
        phoneNumber,
    });

    newPhonebook.save()
        .then(() => res.json('Phonebook entry added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Phonebook.findById(req.params.id)
        .then(phonebook => res.json(phonebook))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Phonebook.findByIdAndDelete(req.params.id)
        .then(() => res.json('Phonebook entry deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});
