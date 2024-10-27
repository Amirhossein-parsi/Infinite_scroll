// api url

const apiKey = 'Kz_nhIL_YyGZ9MKpc4_2Lll9Mk2gdP-z6OC9j19OEHo';

// query selectors

const imageContainer = document.querySelector('.images');
const loader = document.querySelector('.loader');

// defining the variables

let photosArray = [];

let ready = false;
let imagesLoaded = 0;
let totalImages = 0;
const count = 30;
let i = 0;

// making the API URL

const api = `https://api.unsplash.com/photos/?client_id=${apiKey}&count=${count}`;

// load images

function loadImages() {
    imagesLoaded++;
    console.log(imagesLoaded);
    if(imagesLoaded === totalImages){
        ready = true;
        loader.hidden = true;
        console.log('Done loading images?', ready);
    }
};

// displaying images

function displayImages(){


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
        
        // event listeners
        images.addEventListener('load', loadImages);

        // append
        links.appendChild(images);
        imageContainer.appendChild(links);
    });
}

// fetching images

async function getImages() {
    try {
        const response = await fetch(api);
        photosArray = await response.json();
        console.log(photosArray);
        totalImages = photosArray.length;
        displayImages();
    } catch(error){
        alert('wooot do heeeeeell ooooo my godddd');
        console.log(error);
    }
};

window.addEventListener('scroll', function(){
    if(window.scrollY + window.innerHeight >= document.body.offsetHeight - 1000 && ready) {
        console.log('hi');
        getImages();
    };
});

// function calls

getImages();