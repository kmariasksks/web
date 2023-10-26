document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('typeForm');
    const imageFilenames = ['desk5.webp', 'desk6.jpg', 'desk7.jpg'];

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const title = document.getElementById('title').value;
        const description = document.getElementById('description').value;
        const price = document.getElementById('price').value;
        const errorMessage = document.getElementById('error_message');

        errorMessage.textContent = "";

        if (!title || !description || !price) {
            errorMessage.textContent = "Заповніть поля коректно.";
            return;
        }
        
        const imageFileName = title.replace(/\s+/g, '').toLowerCase();
        
        const randomIndex = Math.floor(Math.random() * imageFilenames.length);
        const randomImageFilename = imageFilenames[randomIndex];

        const newItemData = {
            imageSrc: `images/${randomImageFilename}`,
            title: title,
            description: description,
            price: price,
        };

        fetch('http://localhost:3000/items', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newItemData),
        })
        .then(response => response.json())
        .then(data => {
            window.location.href = 'http://127.0.0.1:3000/index.html';
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    });
});

function getImageFileName(title) {
    const titleImageMap = {
        "School Desk": "desk11.jpg",
        "Coffee Table": "desk2.png",
        "Journal Desk": "desk3.jpg",
        "Computer Desk": "desk4.jpg"
    };
    return titleImageMap[title] || "";  
}
