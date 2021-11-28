let arrow = document.querySelectorAll(".arrow");
let lines = document.querySelector('.lines');
        
for (let i = 0; i < arrow.length; i++) {
    arrow[i].addEventListener("click", (e)=>{
        let arrowParent = e.target.parentElement.parentElement;
        arrowParent.classList.toggle("show-submenu");
    });
}

let sidebar = document.querySelector(".side-nav.close");
let menuIcon = document.querySelector(".menu-icon");
// console.log(menuIcon);

menuIcon.addEventListener('click', ()=> {
    sidebar.classList.toggle('close')
    if (lines.getAttribute('d') == "M4 11h12v2H4zm0-5h16v2H4zm0 12h7.235v-2H4z") {
        lines.setAttribute('d', "M4 11h16v2H4zm0-5h16v2H4zm0 12h16.235v-2H4z")
    } else {
        lines.setAttribute('d', "M4 11h12v2H4zm0-5h16v2H4zm0 12h7.235v-2H4z")
    }
})

// change image collection
let imageIndex = 0
const rightArrow = document.querySelector('#right-arrow');
const leftArrow = document.querySelector('#left-arrow');
const imageCollection = document.querySelector('.image-collection');
const imageNumber = document.querySelector('#image-number');
let images = [
    'url("../images/pexels-element-digital-1125136.jpg")',
    'url("../images/pexels-isaw-company-945688.jpg")',
    'url("../images/pexels-jean-van-der-meulen-1457844.jpg")',
    'url("../images/pexels-medhat-ayad-383568.jpg")',
    'url("../images/pexels-marta-dzedyshko-2067638.jpg")'
]


imageNumber.innerHTML =  '1/' +  images.length

leftArrow.addEventListener('click', _=> {
    if (imageIndex == 0) {
        imageIndex = images.length - 1;
        imageCollection.style.backgroundImage = images[imageIndex]
    }else {
        imageCollection.style.backgroundImage = images[imageIndex - 1];

        imageIndex --;
    }
        
    imageNumber.innerHTML = (imageIndex + 1).toString() + '/' + images.length.toString();
});

rightArrow.addEventListener('click', _=> {
    imageCollection.style.backgroundImage = images[imageIndex + 1];

    imageIndex ++;
    
    if (imageIndex > images.length - 1) {
        imageIndex = 0;
        imageCollection.style.backgroundImage = images[imageIndex]
    }

    imageNumber.innerHTML = (imageIndex + 1).toString() + '/' + images.length.toString();
});