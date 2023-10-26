document.addEventListener('DOMContentLoaded', function () {
    const submitButton = document.getElementById('submit_button');

    submitButton.addEventListener('click', function () {
        const title = document.getElementById('title').value;
        const description = document.getElementById('description').value;
        const priceInput = document.getElementById('price');
        const price = parseFloat(priceInput.value);

        if (title.trim() === '' || description.trim() === '' || isNaN(price) || price < 1) {
            alert('Будь ласка, заповніть всі поля коректно перед збереженням.');
        } else {
            const newItemData = {
                title: title,
                description: description,
                price: price
            };

            localStorage.setItem('newItemData', JSON.stringify(newItemData));

            window.location.href = 'http://127.0.0.1:5501/index.html';
        }
    });

    const priceInput = document.getElementById('price');
    priceInput.addEventListener('input', function () {
        if (isNaN(parseFloat(priceInput.value)) || parseFloat(priceInput.value) < 1) {
            priceInput.setCustomValidity('Ціна повинна бути числом більше або дорівнювати 0.');
        } else {
            priceInput.setCustomValidity('');
        }
    });
});


// document.addEventListener('DOMContentLoaded', function () {
//     const form = document.getElementById('typeForm');

//     form.addEventListener('submit', function (event) {
//         event.preventDefault();  

//         const title = document.getElementById('title').value;
//         const description = document.getElementById('description').value;
//         const price = document.getElementById('price').value;
//         const errorMessage = document.getElementById('error_message');

//         errorMessage.textContent = "";

//         if (!title || !description || !price) {
//             errorMessage.textContent = "All fields are required!";
//             return; 
//         }

//         const newItemData = {
//             // imageSrc: `images/${title.toLowerCase()}.jpg`, 
//             title: title,
//             description: description,
//             price: price,
//         };

//         const itemsData = JSON.parse(localStorage.getItem('itemsData')) || [];

//         itemsData.push(newItemData);

//         localStorage.setItem('itemsData', JSON.stringify(itemsData));

//         window.location.href = 'http://127.0.0.1:5501/index.html';
//     });
// });

