// export function toggleSort() {
//     const itemsContainer = document.getElementById('assortment');
//     const sortSwitch = document.getElementById('sort_switch');
//     let itemBlocks = Array.from(itemsContainer.querySelectorAll('.assortment__container'));

//     if (initialOrder.length === 0) {
//         initialOrder = [...itemBlocks];
//     }

//     if (sortSwitch.checked) {
//         itemBlocks.sort((a, b) => {
//             const priceA = parseFloat(a.querySelector('.assortment__container-item1-price').textContent.replace('$', ''));
//             const priceB = parseFloat(b.querySelector('.assortment__container-item1-price').textContent.replace('$', ''));
//             return priceB - priceA;
//         });
//     } else {
//         itemBlocks = [...initialOrder];
//     }

//     while (itemsContainer.firstChild) {
//         itemsContainer.removeChild(itemsContainer.firstChild);
//     }

//     itemBlocks.forEach((item) => itemsContainer.appendChild(item));
// }

// export function searchItems() {
//     const searchInput = document.getElementById('input').value.toLowerCase();
//     const itemBlocks = Array.from(document.querySelectorAll('.assortment__container'));

//     itemBlocks.forEach((item) => {
//         const itemName = item.querySelector('.assortment__container-item1-pharagraph').textContent.toLowerCase();
//         if (itemName.includes(searchInput)) {
//             item.style.display = 'block';
//         } else {
//             item.style.display = 'none';
//         }
//     });
// }

// export function countTotalExpenses() {
//     const itemBlocks = document.querySelectorAll('.assortment__container');
//     let totalExpenses = 0;

//     itemBlocks.forEach((item) => {
//         const price = parseFloat(item.querySelector('.assortment__container-item1-price').textContent.replace('$', ''));
//         totalExpenses += price;
//     });

//     const countResultLabel = document.getElementById('count_result_label');
//     countResultLabel.textContent = `Total expenses: $${totalExpenses}`;
// }
