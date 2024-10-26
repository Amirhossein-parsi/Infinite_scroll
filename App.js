// defining the variables

const imageContainer = document.querySelector('.images');
const count = 10;
const apiKey = 'Kz_nhIL_YyGZ9MKpc4_2Lll9Mk2gdP-z6OC9j19OEHo';
let photosArray = [];

// making the API URL

const api = `https://api.unsplash.com/photos/?client_id=${apiKey}&count=${count}`;

// fetching images

function displayImages(){

    console.log('kill me');

    photosArray.forEach((photo) => {
        // container
        
        const links = document.createElement('a');
        links.setAttribute('href',photo.links.html);
        links.setAttribute('target', '_blank');
        links.setAttribute('class', 'Images__container');
        
        // images
        const images = document.createElement('img');
        images.setAttribute('src', photo.urls.regular);
        images.setAttribute('alt', photo.alt_description);
        
        // append
        links.appendChild(images);
        imageContainer.appendChild(links);
        console.log('please PLEASE');
    });
}

// fetching images

async function getImages() {
    try {
        const response = await fetch(api);
        photosArray = await response.json();
        console.log(photosArray);
        console.log('HELP');
        displayImages();
    } catch(error){
        alert('wooot do heeeeeell ooooo my godddd');
        console.log(error);
    }
};

// function calls
getImages();