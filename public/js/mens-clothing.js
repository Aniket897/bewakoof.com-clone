let men_clothing = document.getElementById('men_clothing');

let mens_products = [
    {
        "id" : 1,
        "for" : "men",
        "brand" : "Bewakoof",
        "name" : "Mens Green Cyber Samurai Graphic Printed T-shirt",
        "original_price" : 1499,
        "discount_price" : 499,
        "tribe_off" : 459,
        "img" : "https://images.bewakoof.com/t640/men-s-green-cyber-samurai-graphic-printed-t-shirt-589374-1699536346-1.jpg"
    },
    {
        "id" : 2,
        "for" : "men",
        "brand" : "Bewakoof X Garfield",
        "name" : "Mens Gray Garfield Hates Morning Graphic Printed T-shirt",
        "original_price" : 1499,
        "discount_price" : 699,
        "tribe_off" : 639,
        "img" : "https://images.bewakoof.com/t640/men-s-blue-ramen-lover-graphic-printed-oversized-t-shirt-624559-1699536357-1.jpg"
    },
    {
        "id" : 3,
        "for" : "men",
        "brand" : "Bewakoof X Naruto",
        "name" : "Mens Bule Ramen Lover Graphic Printed Oversized",
        "original_price" : 1599,
        "discount_price" : 699,
        "tribe_off" : 639,
        "img" : "https://images.bewakoof.com/t640/men-s-blue-ramen-lover-graphic-printed-oversized-t-shirt-624559-1699536357-1.jpg"
    },
    {
        "id" : 4,
        "for" : "men",
        "brand" : "Bewakoof X Rick And Morty",
        "name" : "Mens Pink Ricklaxation Graphic Printed Oversized Hoodies",
        "original_price" : 2999,
        "discount_price" : 1199,
        "tribe_off" : 1119,
        "img" : "https://images.bewakoof.com/t640/men-s-pink-ricklaxation-graphic-printed-oversized-hoodies-624551-1699536351-1.jpg"
    },
    {
        "id" : 5,
        "for" : "men",
        "brand" : "Bewakoof X Marvel",
        "name" : "Mens Pink Ricklaxation Graphic Printed Oversized Hoodies",
        "original_price" : 1599,
        "discount_price" : 699,
        "tribe_off" : 639,
        "img" : "https://images.bewakoof.com/t640/men-s-black-panther-graphic-printed-oversized-t-shirt-624569-1699536335-1.jpg"
    }
]




mens_products.map((item) => {
    let product_card = document.createElement('div');
    product_card.className = 'product_card'
    product_card.innerHTML = `
                    <div class="img_container">
                        <img src=${item.img} alt="">
                    </div>
                    <div class="info_container">
                        <p class="brand">${item.brand}</p>
                        <p class="name">${item.name}</p>
                        <p class="price">₹${item.discount_price} <span>₹${item.original_price}</span></p>
                        <p class="info">₹${item.tribe_off} For TriBe Members</p>
                        <p class="bottom_tag">100% COTTON</p>
                    </div>
    `

    product_card.addEventListener('click' , () => {
        localStorage.setItem('current_product' , item.id);
        console.log(localStorage.getItem('current_product'))
    })
    men_clothing.appendChild(product_card)
})