console.log('%c HI', 'color: firebrick')


//Challenge 1

document.addEventListener('DOMContentLoaded', function() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

    fetch(imgUrl)
        .then(response => response.json())
        .then(data => {
            const imageContainer = document.getElementById('dog-image-container');
            data.forEach(imageUrl => {
                const img = document.createElement('image');
                img.src = imageUrl;
                imageContainer.appendChild(img);
            });
        })
        .catch(error => console.error('Error fetching images:', error));

// Challenge 2
const breedsUrl = 'https://example.com/breeds';
    fetch(breedsUrl)
        .then(response => response.json())
        .then(data => {
            const breedList = document.getElementById('breed-list');
            data.forEach(breed => {
                const li = document.createElement('li');
                li.textContent = breed;
                breedList.appendChild(li);

                // Add click event listener to change font color on click
                li.addEventListener('click', function() {
                    li.style.color = 'blue'; // Change 'blue' to any color you prefer
                });
            });
        })
.catch(error => console.error('Error fetching breeds:', error));    
});



