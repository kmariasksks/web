// import { toggleSort, searchItems, countTotalExpenses } from './dom_util.js';


// document.addEventListener('DOMContentLoaded', function () {
//     const sortSwitch = document.getElementById('sort_switch');
//     const searchButton = document.getElementById('search_button');
//     const clearFindButton = document.getElementById('clear_find_button');
//     const countButton = document.getElementById('count_button');

//     sortSwitch.addEventListener('change', toggleSort);

//     searchButton.addEventListener('click', searchItems);

//     clearFindButton.addEventListener('click', function () {
//         document.getElementById('search_input').value = '';
//         searchItems();
//     });

//     countButton.addEventListener('click', countTotalExpenses);
// });

// function createItem(imageSrc, title, description, price) {
//     const itemBlock = document.createElement('div');
//     itemBlock.classList.add('assortment__container');

//     const image1 = document.createElement('img');
//     image1.classList.add('desk1');
//     image1.src = imageSrc;
//     image1.alt = '';

//     const image2 = document.createElement('img');
//     image2.classList.add('desk2');
//     image2.src = imageSrc;
//     image2.alt = '';
    
//     const image3 = document.createElement('img');
//     image3.classList.add('desk3');
//     image3.src = imageSrc;
//     image3.alt = '';

//     const image4 = document.createElement('img');
//     image4.classList.add('desk4');
//     image4.src = imageSrc;
//     image4.alt = '';

//     const titleParagraph = document.createElement('p');
//     titleParagraph.classList.add('assortment__container-item1-pharagraph');
//     titleParagraph.textContent = title;

//     const descParagraph = document.createElement('p');
//     descParagraph.classList.add('assortment__container-item1-description');
//     descParagraph.textContent = description;

//     const priceDiv = document.createElement('div');
//     priceDiv.classList.add('assortment__container-item1-price');
//     priceDiv.textContent = price;

//     const editRemoveButtons = document.createElement('div');
//     editRemoveButtons.classList.add('assortment__container-item1-buttons');

//     const editButton = document.createElement('input');
//     editButton.classList.add('assortment__container-item1-edit');
//     editButton.type = 'button';
//     editButton.value = 'Edit';

//     const removeButton = document.createElement('input');
//     removeButton.classList.add('assortment__container-item1-remove');
//     removeButton.type = 'button';
//     removeButton.value = 'Remove';

//     editRemoveButtons.appendChild(editButton);
//     editRemoveButtons.appendChild(removeButton);

//     itemBlock.appendChild(image1);
//     itemBlock.appendChild(image2);
//     itemBlock.appendChild(image3);
//     itemBlock.appendChild(image4);
//     itemBlock.appendChild(titleParagraph);
//     itemBlock.appendChild(descParagraph);
//     itemBlock.appendChild(priceDiv);
//     itemBlock.appendChild(editRemoveButtons);

//     return itemBlock;
// }

// const itemsContainer = document.getElementById('items_container');

// const itemsData = [
//     {
//         imageSrc: './images/desk1.webp',
//         title: 'School Desk',
//         description: 'Flash Furniture Billie Hex Natural Collaborative Student Desk',
//         price: '3 310$'
//     },
//     {
//         imageSrc: './images/desk2.png',
//         title: 'Coffee Table',
//         description: 'Plank square coffee table.',
//         price: '2 100$'
//     },
//     {
//         imageSrc: './images/desk3.jpg',
//         title: 'Journal Desk',
//         description: 'A coloured desktop flirts with a light steel frame inthe design of the Journal desk.',
//         price: '1 999$'
//     },
//     {
//         imageSrc: './images/desk4.jpg',
//         title: 'Computer Desk',
//         description: 'Computer Desk Cabinet, Charging Station & Message Board',
//         price: '3 599$'
//     }
// ];

// itemsData.forEach(item => {
//     const newItem = createItem(item.imageSrc, item.title, item.description, item.price);
//     itemsContainer.appendChild(newItem);
// });

document.addEventListener('DOMContentLoaded', function() {
    const sortSwitch = document.getElementById('sort_switch');
    const itemsContainer = document.getElementById('assortment');

    // Функція для сортування
    function sortItemsByPrice() {
        const itemBlocks = Array.from(itemsContainer.querySelectorAll('.assortment__container'));

        itemBlocks.sort((a, b) => {
            const priceA = parseFloat(a.querySelector('.assortment__container-item1-price').textContent.replace('$', ''));
            const priceB = parseFloat(b.querySelector('.assortment__container-item1-price').textContent.replace('$', ''));
            return priceB - priceA;
        });

        // Очищаємо контейнер від елементів
        while (itemsContainer.firstChild) {
            itemsContainer.removeChild(itemsContainer.firstChild);
        }

        // Додаємо відсортовані елементи назад в контейнер
        itemBlocks.forEach((item) => itemsContainer.appendChild(item));
    }

    // Додаємо обробник події для перемикача
    sortSwitch.addEventListener('change', function() {
        if (sortSwitch.checked) {
            sortItemsByPrice();
        }
    });

    // Викликаємо функцію сортування за замовчуванням (якщо перемикач вже включений)
    if (sortSwitch.checked) {
        sortItemsByPrice();
    }
});
