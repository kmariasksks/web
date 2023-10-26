let initialOrder = [];
let countButtonClicked = true; 

export function toggleSort() {
    const itemsContainer = document.getElementById('assortment_container');
    const sortSwitch = document.getElementById('sort_switch');
    let itemBlocks = Array.from(itemsContainer.querySelectorAll('.assortment__content'));

    if (initialOrder.length === 0) {
        initialOrder = [...itemBlocks];
    }

    if (sortSwitch.checked) {
        itemBlocks.sort((a, b) => {
            const priceA = parseFloat(a.querySelector('.assortment__content-price').textContent.replace('$', ''));
            const priceB = parseFloat(b.querySelector('.assortment__content-price').textContent.replace('$', ''));
            return priceB - priceA;
        });
    } else {
        itemBlocks = [...initialOrder];
    }

    itemsContainer.innerHTML = ''; // Clear the container before reappending items
    itemBlocks.forEach((item) => itemsContainer.appendChild(item));
}

export function searchItems() {
    const searchInput = document.getElementById('search_input').value.toLowerCase();
    const itemBlocks = Array.from(document.querySelectorAll('.assortment__content'));

    itemBlocks.forEach((item) => {
        const itemName = item.querySelector('.assortment__content-pharagraph').textContent.toLowerCase();
        const itemDescription = item.querySelector('.assortment__content-text').textContent.toLowerCase();

        item.style.display = (itemName.includes(searchInput) || itemDescription.includes(searchInput)) ? 'block' : 'none';
    });
}

let isCountButtonClicked = false;

export function countTotalExpenses() {
    const searchInput = document.getElementById('search_input');
    const isSearching = searchInput.value.trim() !== '';

    const itemBlocks = Array.from(document.querySelectorAll('.assortment__content'));
    let totalExpenses = 0;

    itemBlocks.forEach((item) => {
        if (!isSearching || item.style.display !== 'none') {
            const price = parseFloat(item.querySelector('.assortment__content-price').textContent.replace('$', ''));
            totalExpenses += price;
        }
    });

    if (isCountButtonClicked) {
        const countResultLabel = document.getElementById('manage__content-button-result');
        countResultLabel.textContent = `Total expenses: $${totalExpenses.toFixed(0)}`; // Added toFixed for cleaner formatting
    }
}

export function setCountButtonClicked() {
    isCountButtonClicked = true;
}