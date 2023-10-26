import { toggleSort, searchItems, countTotalExpenses, setCountButtonClicked } from './dom_util.js';

// const itemsContainer = document.getElementById('assortment_container');

function createItem(imageSrc, title, description, price) {
    const itemBlock = document.createElement('div');
    itemBlock.classList.add('assortment__content');

    const image = document.createElement('img');
    image.classList.add('assortment__content-images');
    image.src = imageSrc;
    image.alt = '';

    const titleParagraph = document.createElement('p');
    titleParagraph.classList.add('assortment__content-pharagraph');
    titleParagraph.textContent = title;

    const descParagraph = document.createElement('p');
    descParagraph.classList.add('assortment__content-text');
    descParagraph.textContent = description;

    const priceDiv = document.createElement('div');
    priceDiv.classList.add('assortment__content-price');
    priceDiv.textContent = price;

    const editRemoveButtons = document.createElement('div');
    editRemoveButtons.classList.add('edit-remove__buttons');

    const editButton = document.createElement('input');
    editButton.classList.add('edit__button');
    editButton.type = 'button';
    editButton.value = 'Edit';

    const removeButton = document.createElement('input');
    removeButton.classList.add('remove__button');
    removeButton.type = 'button';
    removeButton.value = 'Remove';

    editRemoveButtons.appendChild(editButton);
    editRemoveButtons.appendChild(removeButton);

    itemBlock.appendChild(image);
    itemBlock.appendChild(titleParagraph);
    itemBlock.appendChild(descParagraph);
    itemBlock.appendChild(priceDiv);
    itemBlock.appendChild(editRemoveButtons);

    // editButton.addEventListener('click', function () {
    //     const itemData = { title, description, price };
    //     const queryParams = new URLSearchParams(itemData).toString();
    //     const editURL = `http://127.0.0.1:5501/edit.html?${queryParams}`;
    //     window.location.href = editURL;
    // });


    removeButton.addEventListener('click', function() {
        if (window.confirm('Are you sure you want to remove this item?')) {
            itemBlock.remove();

            const itemsData = JSON.parse(localStorage.getItem('itemsData'));
            itemsData.splice(index, 1);
            localStorage.setItem('itemsData', JSON.stringify(itemsData));
        }
    });
    

    // function validateData(title, description, price) {
    //     if (title === '' || description === '' || price === '' || isNaN(parseFloat(price))) {
    //         return false;
    //     }
    //     return true;
    // }

    return itemBlock;
}

// const itemsContainer = document.getElementById('assortment_container');

document.addEventListener('DOMContentLoaded', function () {
    const itemsContainer = document.getElementById('assortment_container');

const itemsData = JSON.parse(localStorage.getItem('itemsData')) || [
    {
        imageSrc: 'images/desk11.jpg',
        title: 'School Desk',
        description: 'Flash Furniture Billie Hex Natural Collaborative Student Desk.',
        price: '3310$'
    },

    {
        imageSrc: 'images/desk2.png',
        title: 'Coffee Table',
        description: 'Plank square coffee table.',
        price: '2100$'
    },

    {
        imageSrc: 'images/desk3.jpg',
        title: 'Journal Desk',
        description: 'A coloured desktop flirts with a light steel frame in the design of the Journal desk.',
        price: '1999$'
    },

    {
        imageSrc: 'images/desk4.jpg',
        title: 'Computer Desk',
        description: 'Computer Desk Cabinet, Charging Station & Message Board',
        price: '3590$'
    },

    {
        imageSrc: 'images/desk11.jpg',
        title: 'School Desk',
        description: 'Flash Furniture Billie Hex Natural Collaborative Student Desk.',
        price: '3000$'
    }

];

itemsData.forEach(item => {
    const newItem = createItem(item.imageSrc, item.title, item.description, item.price);
    itemsContainer.appendChild(newItem);
});

document.addEventListener('DOMContentLoaded', function () {
    const newItemData = JSON.parse(localStorage.getItem('newItemData'));

    if (newItemData) {
        const itemsContainer = document.getElementById('assortment_container');

        const newItem = createItem(newItemData.imageSrc, newItemData.title, newItemData.description, newItemData.price); 
        itemsContainer.appendChild(newItem);

        localStorage.removeItem('newItemData');
    }
});


document.addEventListener('DOMContentLoaded', function () {
    const editedData = JSON.parse(localStorage.getItem('editedData'));

    if (editedData) {
        const itemsContainer = document.getElementById('assortment_container');

        const items = itemsContainer.getElementsByClassName('assortment__content');
        for (let i = 0; i < items.length; i++) {
            const item = items[i];
            const index = item.getAttribute('data-index');

            if (index === editedData.index) {
                item.querySelector('.assortment__content-pharagraph').textContent = editedData.title;
                item.querySelector('.assortment__content-text').textContent = editedData.description;
                item.querySelector('.assortment__content-price').textContent = editedData.price;
                break;
            }
        }
    }
});

    const sortSwitch = document.getElementById('sort_switch');
    const searchButton = document.getElementById('header__search-button');
    const clearFindButton = document.getElementById('header__clear-button');
    const countButton = document.getElementById('manage__content-button');

    sortSwitch.addEventListener('change', toggleSort);
    searchButton.addEventListener('click', searchItems);

    clearFindButton.addEventListener('click', function () {
        document.getElementById('search_input').value = '';
        searchItems();
    });

    countButton.addEventListener('click', function () {
        setCountButtonClicked();
        countTotalExpenses();
    });

    countTotalExpenses();
});
