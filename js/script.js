// Toogle class active untuk hamburger menu
const navbarNav = document.querySelector
('.navbar-nav');

// ketika hamburger menu di klik
document.querySelector('#hamburger-menu').
onclick = () => {
    navbarNav.classList.toggle('active');
};

//Toogle class active untuk search form

const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');

document.querySelector('#search-button').onclick = (e) => {
    searchForm.classList.toggle('active');
    searchBox.focus();
    e.preventDefault();
};

//Toogle class active untuk shopping cart
const shoppingCart = document.querySelector('.shopping-cart');
const shoppingCartButton = document.querySelector('#shopping-cart-button')
shoppingCartButton.onclick = (e) =>{
    shoppingCart.classList.toggle('active');
}

//klik di luar elemen
const hamburger = document.querySelector('#hamburger-menu');

const searchButton = document.querySelector('#search-button');

const sc = document.querySelector('#shopping-cart-button');

document.addEventListener('click', function (e) {



    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    }

    if(!searchButton.contains(e.target) && !searchButton.contains(e.target)){
        searchForm.classList.remove('active');
    }

    if(!shoppingCartButton.contains(e.target) && !shoppingCart.contains(e.target)){
        shoppingCart.classList.remove('active');
    }
});


// modal box

const itemDetailModal = document.querySelector('#item-detail-modal');
const itemDetailButton = document.querySelectorAll('.item-detail-button');

itemDetailButton.forEach((btn) => {

    btn .onclick = (e) => {
        itemDetailModal.style.display = 'flex';
        e.preventDefault();
    };
})


// klikl tombol close modal
document.querySelector('.modal .close-icon').onclick = (e) =>{
    itemDetailModal.style.display = 'none';
    e.preventDefault();
};