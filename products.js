
let products=[
    {
        name:"Earbuds",
        description:"Wireless earbuds with clear sound,comfortable fit,and a compact charging case.perfect for music,calls,and everyday use.",
        price:"999",
        image:"images/Earbuds.jpg",
        category:"Electronics"
    },
    {
        name:"Calculator",
        description:"Handles everything from basic arithmetic to advanced functions.A must-have for STEM students.",
        price:"899",
        category:"Stationery",
        image:"images/Calculator.jpg"
    },
    {
        name:"Books",
        description:"Handwritten Notes-Python easy-to-follow notes covering everything from basic to advanced topics ",
        price:"299",
        category:"Books",
        image:"images/Books.jpg"
    },
    {
        name:"Tablet",
        description:"Take notes,read,and Study anywhere with a  portable,reliable tablet built for student life.",
        price:"10000",
        category:"Electronics",
        image:"images/Electronics.jpg"
    },
    {
        name:"Shirt",
        description:"A Versatile Campus stable that goes with everything,anytime. ",
        price:"599",
        category:"Fashion",
        image:"images/Fashion.jpg"
    },
    {
        name:"poco-m4-5g",
        description:"Reliable 5G performance and greate battery life,priced right for students.",
        price:"80000",
        category:"Electronics",
        image:"images/Mobile.jpg"
    },
    {
        name:"Basket Ball",
        description:"Reliable grip and bounce for gameday or a quick campus pickup game.",
        price:"999",
        category:"Sports",
        image:"images/Sports.jpg"
    },
    {
        name:"Study Chair",
        description:"Comfortable,study seating built for  long study sessions.",
        price:"608",
        category:"Hostel-Essentials",
        image:"images/Study-chair.jpg"
    },
     {
        name:"Chemistry Textbook",
        description:"Clear explanations and practice problems  to help you master chemistry",
        price:"300",
        category:"Books",
        image:"images/Textbook.jpg"
    },
     {
        name:"T-shirt",
        description:"Comfortable everyday essential for campus life.",
        price:"200",
        category:"Fashion",
        image:"images/Tshirts.jpg"
    },
     {
        name:"Bedsheet",
        description:"Soft, comfortable bedsheet made with quality fabric, perfect for a cozy and stylish bedroom.",
        price:"250",
        category:"Hostel-Essentials",
        image:"images/bedsheet.jpg"
    },
     {
        name:"Mini-Fridge",
        description:"Compact,energy-efficient cooling buit for dorm and hostel rooms.",
        price:"5000",
        category:"Hostel-Essentials",
        image:"images/fridge.jpg"
    },
     {
        name:"Table Fan",
        description:"compact,quiet cooling for your or study space.",
        price:"900",
        category:"Hostel-Essentials",
        image:"images/tablefan.jpg"
    },
     {
        name:"Cooler",
        description:"Powerful,energy-efficient cooling for your dorm or hostel room.",
        price:"750",
        category:"Hostel-Essentials",
        image:"images/cooler.jpg"
    },
]
let cart = JSON.parse(localStorage.getItem("cart")) || [];
let totalItems = 0;

for (let i = 0; i < cart.length; i++) {
    totalItems += cart[i].quantity || 1;
}

document.getElementById("cartCount").textContent = totalItems;

let productgrid=document.getElementById("productgrid");
function filterProducts(category) {

    productgrid.innerHTML = "";

    for (let i = 0; i < products.length; i++) {

        if (category==="all" || products[i].category === category) {

            productgrid.innerHTML += `
                <div class="product-card">
                    <img src="${products[i].image}">
                    <h3>${products[i].name}</h3>
                    <p>${products[i].description}</p>
                    <h4>₹${products[i].price}</h4>
                    <button onclick="addToCart(${i})">Add to Cart</button>
                </div>
            `;
        }
    }
}
function addToCart(index) {

    let existingProduct = cart.find(item => item.name === products[index].name);

    if (existingProduct) {
        existingProduct.quantity++;
    } else {
        cart.push({
            ...products[index],
            quantity: 1
        });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    let totalItems = 0;

    for (let i = 0; i < cart.length; i++) {
    totalItems += cart[i].quantity;
}

document.getElementById("cartCount").innerText = totalItems;

}
filterProducts("all");
