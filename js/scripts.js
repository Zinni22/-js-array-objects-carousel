/*
1. creo array con i dati delle immagini
2. seleziono ciò che mi serve dall'html e creo le singole slide che inserisco
3. do alla prima slide la visibilià
4. seleziono le frecce e faccio in modo che cliccando su di esse la visibilità passi da un all'altra
*/

const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];


const slides = document.querySelector('.slides');

images.forEach((index) => {

    const singleSlide = document.createElement('div');
    singleSlide.classList.add('single-slide')
    singleSlide.innerHTML += `
                            <img src="${index.image}" alt="img1">

                            <div class="text">
                                <h3>${index.title}</h3>
                                <p>${index.text}</p>
                            </div>
    `
    slides.append(singleSlide);


});

// seleziono le mie classi create
const allSlides = document.querySelectorAll('.single-slide');
const allThumbnails = document.querySelectorAll('.single-thumbnail');

let currentSlide = 0;

allSlides[currentSlide].classList.add('block');
allThumbnails[currentSlide].classList.add('active');


// seleziono le thumbnails


// seleziono le frecce
const prevArrow = document.querySelector('.before');
const nextArrow = document.querySelector('.after');




prevArrow.addEventListener('click',

    function () {

        allSlides[currentSlide].classList.remove('block');
        allThumbnails[currentSlide].classList.remove('active');


        if(currentSlide > 0){
            currentSlide--;
        }
        else{
            currentSlide = allSlides.length - 1;
        }

        allSlides[currentSlide].classList.add('block');
        allThumbnails[currentSlide].classList.add('active');

    }
);

nextArrow.addEventListener('click',

    function () {

        allSlides[currentSlide].classList.remove('block');
        allThumbnails[currentSlide].classList.remove('active');


        if(currentSlide < allSlides.length - 1){
            currentSlide++;
        }
        else{
            currentSlide = 0;
        }

        allSlides[currentSlide].classList.add('block');
        allThumbnails[currentSlide].classList.add('active');

    }
);