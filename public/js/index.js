
let sidebar = document.getElementById('sidebar');

function OpenSidebar() {
    sidebar.classList.add('active_sidebar');
}

function CloseSidebar() {
    sidebar.classList.remove('active_sidebar');
}


// for swpier

var swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
        //   el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    slidesPerView: 2.8,
    spaceBetween: 10,
});

var swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
        //   el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    slidesPerView: 2.8,
    spaceBetween: 10,
});

var swiper2 = new Swiper('.swiper2', {
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    slidesPerView: 3.8,
    spaceBetween: 20,
});


// For select country popup 

let popup = document.getElementById('country_popup')

function openSelctCountryPopup(){
    popup.classList.add('show_select_Country')
    document.getElementById('body').style.overflow = 'hidden'
    
}

function closeSelctCountryPopup(){
    popup.classList.remove('show_select_Country')
    document.getElementById('body').style.overflowY = 'scroll'
}

