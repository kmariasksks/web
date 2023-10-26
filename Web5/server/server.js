const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path'); 

const app = express();

app.use(bodyParser.json());
app.use(cors());

const ITEMS = [
    {
        imageSrc: 'images/desk11.jpg',
        title: 'School Desk',
        description: 'Flash Furniture Billie Hex Natural Collaborative Student Desk.',
        price: '3310'
    },
    {
        imageSrc: 'images/desk2.png',
        title: 'Coffee Table',
        description: 'Plank square coffee table.',
        price: '2100'
    },
    {
        imageSrc: 'images/desk3.jpg',
        title: 'Journal Desk',
        description: 'A coloured desktop flirts with a light steel frame in the design of the Journal desk.',
        price: '1999'
    },
    {
        imageSrc: 'images/desk4.jpg',
        title: 'Computer Desk',
        description: 'Computer Desk Cabinet, Charging Station & Message Board.',
        price: '3590'
    }
];

let itemsData = [...ITEMS];

//read
app.get('/', (req, res) => {
    res.sendFile(path.join('D:', 'Web5', 'index.html'));
});

app.get('/items', (req, res) => {
    res.json(itemsData);
});

//create
app.post('/items', (req, res) => {
    const newItem = req.body;
    itemsData.push(newItem);
    res.json(newItem);
});

app.use(express.static(path.join('D:', 'Web5')));

//update
app.put('/items/:index', (req, res) => {
    const index = req.params.index;
    if (index >= 0 && index < itemsData.length) {
        itemsData[index] = req.body;
        res.json(itemsData[index]);
    } else {
        res.status(400).json({ message: "Invalid index." });
    }
});

//delete
app.delete('/items/:index', (req, res) => {
    const index = req.params.index;
    if (index >= 0 && index < itemsData.length) {
        itemsData.splice(index, 1);
        res.json({ message: "Item deleted successfully!" });
    } else {
        res.status(400).json({ message: "Invalid index." });
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log('Server is running on port ${PORT}');
});

module.exports = app;
