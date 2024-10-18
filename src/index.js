console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = "https://dog.ceo/api/breeds/list/all";

window.onload = () => {
    fetch(imgUrl)
        .then(response => response.json())
        .then(data => {
            const imagesContainer = document.getElementById('images');
            data.message.forEach(imgUrl => {
                const img = document.createElement('img');
                img.src = imgUrl;
                imagesContainer.appendChild(img);
            });
        })
        .catch(error => console.error("Error fetching images:", error));

    fetch(breedUrl)
        .then(response => response.json())
        .then(data => {
            const breedsList = document.getElementById('breeds');
            for (const breed in data.message) {
                const li = document.createElement('li');
                li.innerText = breed;
                li.addEventListener('click', () => {
                    li.style.color = 'blue'; // Change color on click
                });
                breedsList.appendChild(li);
            }
        })
        .catch(error => console.error("Error fetching breeds:", error));

    // Filter logic
    const filterDropdown = document.getElementById('filter');
    filterDropdown.addEventListener('change', () => {
        const selectedLetter = filterDropdown.value.toLowerCase();
        const liItems = document.querySelectorAll('#breeds li');
        liItems.forEach(li => {
            if (selectedLetter === '' || li.innerText.toLowerCase().startsWith(selectedLetter)) {
                li.style.display = 'list-item'; // Show
            } else {
                li.style.display = 'none'; // Hide
            }
        });
    });
};

 
