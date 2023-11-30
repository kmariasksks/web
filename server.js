const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
const router = express.Router(); // Create a new router

app.use(bodyParser.json());
app.use(cors());

// Serve static files from the 'site' directory
app.use(express.static(path.join(__dirname, 'D:', 'web_lab6', 'site', 'public')));

const data = [
  {
    id: 1,
    // imageSrc: "src/pages/catalog/desksImages/compDesk1.jpg",
    type: "Computer Desk",
    description: "Solid Wood Corner Writing Desk Modern Tall Office Desk.",
    material: "Wood",
    price: 999,
},

{
    id: 2,
    // imageSrc: kitDesk1,
    type: "Kitchen Table",
    description: "Custom White Oak Dining Table Top With Wooden Legs.",
    material: "Wood",
    price: 2500,
},

{
    id: 3,
    // imageSrc: cofDesk1,
    type: "Coffee Table",
    description: "Parker Walnut & Marble Coffee Table.",
    material: "Wood",
    price: 1699,
},

{
    id: 4,
    // imageSrc: compDesk2,
    type: "Computer Desk",
    description: "Contemporary Writing Desk Rectangular Computer Desk.",
    material: "Glass",
    price: 2100,
},

{
    id: 5,
    // imageSrc: kitDesk2,
    type: "Kitchen Table",
    description: "Classic modern dining tables taht make every dinner.",
    material: "Wood",
    price: 850,
},

{
    id: 6,
    // imageSrc: cofDesk2,
    type: "Coffee Table",
    description: "Statement marble coffee tables, retro glass or vintage.",
    material: "Glass",
    price: 800,
},

{
    id: 7,
    // imageSrc: compDesk3,
    type: "Computer Desk",
    description: "Rectangle Office Desk Modern Style Computer Desk.",
    material: "Wood",
    price: 1830,
},

{
    id: 8,
    // imageSrc: kitDesk3,
    type: "Kitchen Table",
    description: "Faux Leather Dining Chairs Or Round Glass Dining Table.",
    material: "Glass",
    price: 1200,
},

{
    id: 9,
    // imageSrc: cofDesk3,
    type: "Coffee Table",
    description: "Coffee table is made of grade cherry wood, which is firm.",
    material: "Wood",
    price: 2050,
},
];

let itemsData = [...data];

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'D:', 'web_lab6', 'site', 'public', 'index.html'));
});


app.get('/get', (req, res) => {
  res.json(itemsData);
});

app.get('/desk/:deskId', (req, res) => {
    try {
      const deskId = parseInt(req.params.deskId, 10);
      const deskInfo = itemsData.find(item => item.id === deskId);
  
      if (deskInfo) {
        res.json(deskInfo);
      } else {
        res.status(404).json({ error: 'Item not found' });
      }
    } catch (error) {
      console.error('Error fetching desk info:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

app.use('/filtered', router);


router.get('/', (req, res) => {
    const { minPrice, maxPrice, type, material, searchInput, priceRange } = req.query;
    console.log('Received filters:', req.query);
    
    let result = data.filter(item => (
        (!minPrice || item.price >= parseInt(minPrice, 10)) &&
        (!maxPrice || item.price <= parseInt(maxPrice, 10)) &&
        (!type || item.type === type || type === 'Any') &&
        (!material || item.material === material || material === 'Any') &&
        (!searchInput || item.description.toLowerCase().includes(searchInput.toLowerCase()))
      ));
      

    // Additional filtering based on priceRange
    if (priceRange === '0-1000') {
      result = result.filter(item => item.price <= 1000);
    } else if (priceRange === '1000-2000') {
      result = result.filter(item => item.price > 1000 && item.price <= 2000);
    } else if (priceRange === '2000') {
      result = result.filter(item => item.price > 2000);
    }

    res.json(result);
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = { app, data };