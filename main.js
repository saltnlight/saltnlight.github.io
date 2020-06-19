const bg = document.querySelector('body');
const form1 = document.querySelector('#popupForm');
const knowMore = document.querySelector('#pop');
const closeBar = document.querySelector('#popupCloseBar') 

function togglePopup(){
    const tog = document.querySelector('#popup');
    tog.classList.toggle('d-block');
    // bg.style.backgroundColor();
}

knowMore.addEventListener('click', togglePopup);

form1.addEventListener('submit', (event) => {
    event.preventDefault();
    togglePopup();
});

closeBar.addEventListener('click', togglePopup);