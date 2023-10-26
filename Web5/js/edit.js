import { countTotalExpenses, searchItems, setCountButtonClicked } from './dom_util.js';

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('typeForm');
    const queryParams = new URLSearchParams(window.location.search);
    const itemIndex = parseInt(queryParams.get('itemIndex'));

    const saveButton = document.getElementById('save_button');
    let currentImageSrc; 
    fetch(`http://localhost:3000/items`)
        .then(response => response.json())
        .then(data => {
            const itemsData = data;
            const itemToEdit = itemsData[itemIndex];
            if (itemToEdit) {
                currentImageSrc = itemToEdit.imageSrc;
                const titleSelect = document.getElementById('title');
                titleSelect.value = itemToEdit.title;
                document.getElementById('description').value = itemToEdit.description;
                document.getElementById('price').value = itemToEdit.price;
            } else {
                console.log(`Invalid itemIndex: ${itemIndex}`);
            }
        })

    saveButton.addEventListener('click', function () {
        const title = document.getElementById('title').value;
        const description = document.getElementById('description').value;
        const price = document.getElementById('price').value;
        const errorMessage = document.getElementById('error_message');
        errorMessage.textContent = "";

        if (!title || !description || price === "" || price < 1) {
            errorMessage.textContent = "Заповніть поля коректно.";
            return;
        }

        const imageFilename = getTitleImageMapping(title);

        const updatedItem = {
            title: title,
            description: description,
            price: price
        };

        if (imageFilename) {
            updatedItem.imageSrc = `images/${imageFilename}`;
        } else {
            updatedItem.imageSrc = currentImageSrc;
        }

        fetch(`http://localhost:3000/items/${itemIndex}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedItem)
        })
        .then(response => response.json())
        .then(data => {
            window.location.href = 'http://127.0.0.1:3000/index.html';
        })
        .catch(error => {
            console.error("Error updating item: ", error);
        });
    });
});

function getTitleImageMapping(title) {
    switch (title) {
        case 'School Desk': return 'desk11.jpg';
        case 'Coffee Table': return 'desk2.png';
        case 'Journal Desk': return 'desk3.jpg';
        case 'Computer Desk': return 'desk4.jpg';
        default: return '';
    }
}
