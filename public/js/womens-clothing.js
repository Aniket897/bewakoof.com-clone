let womens_products = [
    {
        "id" : 1,
        "for" : "women",
        "brand" : "Bewakoof",
        "name" : "Womens Red Universe Listens Graphic Printed Overs..",
        "original_price" : 1499,
        "discount_price" : 299,
        "tribe_off" : 279,
        "img" : "https://images.bewakoof.com/t640/women-s-red-universe-listens-oversized-t-shirt-571002-1674200920-1.jpg"
    },
    {
        "id" : 2,
        "for" : "women",
        "brand" : "Bewakoof",
        "name" : "Womens Pink Looking Like a Wow Graphic Pri..",
        "original_price" : 1299,
        "discount_price" : 549,
        "tribe_off" : 509,
        "img" : "https://images.bewakoof.com/t640/women-s-pink-looking-like-a-wow-graphic-printed-oversized-t-shirt-625968-1699352668-1.jpg"
    },
    {
        "id" : 3,
        "for" : "women",
        "brand" : "Bewakoof X Dc",
        "name" : "Womens Orange Looking Like a Wow Graphic Pri..",
        "original_price" : 1299,
        "discount_price" : 549,
        "tribe_off" : 509,
        "img" :"https://images.bewakoof.com/t640/women-s-orange-looking-like-a-wow-graphic-printed-oversized-t-shirt-625964-1699352797-1.jpg"
    },
    {
        "id" : 4,
        "for" : "women",
        "brand" : "Bewakoof Air 1.0",
        "name" : "Womens Black Straight Fit Cargo Pants",
        "original_price" : 599,
        "discount_price" : 399,
        "tribe_off" : 369,
        "img" : "https://images.bewakoof.com/t640/women-s-black-solid-straight-cargo-pants-585687-1697138165-1.jpg"
    },
    {
        "id" : 5,
        "for" : "women",
        "brand" : "Bewakoof",
        "name" : "Womens Lilac Bloom T-shirt",
        "original_price" : 699,
        "discount_price" : 349,
        "tribe_off" : 319,
        "img" : "https://images.bewakoof.com/t640/lilac-bloom-half-sleeve-t-shirt-346170-1665664695-6.jpg"
    },
    {
        "id" : 6,
        "for" : "women",
        "brand" : "Bewakoof X Friends",
        "name" : "Womens Green Friends Life Graphic Printe..",
        "original_price" : 2399,
        "discount_price" : 1049,
        "tribe_off" : 969,
        "img" : "https://images.bewakoof.com/t640/women-s-green-friends-life-graphic-printed-oversized-hoodies-625971-1699352716-1.jpg"
    },
]

let womens_cothing = document.getElementById('womens_cothing')

womens_products.map((item) => {
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
    womens_cothing.appendChild(product_card);
})