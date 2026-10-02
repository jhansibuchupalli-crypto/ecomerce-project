
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

function updateCartCount() {
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    total += cart[i].quantity || 1;
  }
  document.getElementById("cartCount").innerText = total;
}

updateCartCount();

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
    updateCartCount();
    alert(products[index].name + " added to cart!");
}
filterProducts("all");
// SEARCH FILTER LOGIC (Updated for all pages)

// ===== SEARCH (Live + URL based) =====
document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("searchInput");

 if (searchInput) {
  searchInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const query = searchInput.value.toLowerCase().trim();

      if (query === "") {
        filterProducts("all");
        return;
      }

      const filtered = products.filter(p =>
        p.name.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query)
      );

      if (filtered.length === 0) {
        alert("No products found for: " + query);
        return;
      }

      productgrid.innerHTML = "";
      for (let i = 0; i < filtered.length; i++) {
        let realIndex = products.findIndex(p => p.name === filtered[i].name);
        productgrid.innerHTML += `
          <div class="product-card">
            <img src="${filtered[i].image}">
            <h3>${filtered[i].name}</h3>
            <p>${filtered[i].description}</p>
            <h4>₹${filtered[i].price}</h4>
            <button onclick="addToCart(${realIndex})">Add to Cart</button>
          </div>
        `;
      }
    }
  });
}

  // ---- URL Search (from other pages) ----
  const urlParams = new URLSearchParams(window.location.search);
  const searchTermFromURL = urlParams.get("search");

  if (searchInput && searchTermFromURL) {
    searchInput.value = searchTermFromURL;

    const searchTerm = searchTermFromURL.toLowerCase();
    const filtered = products.filter(p =>
      p.name.toLowerCase().includes(searchTerm) ||
      p.category.toLowerCase().includes(searchTerm)
    );

    productgrid.innerHTML = "";
    for (let i = 0; i < filtered.length; i++) {
      let realIndex = products.findIndex(p => p.name === filtered[i].name);
      productgrid.innerHTML += `
        <div class="product-card">
          <img src="${filtered[i].image}">
          <h3>${filtered[i].name}</h3>
          <p>${filtered[i].description}</p>
          <h4>₹${filtered[i].price}</h4>
          <button onclick="addToCart(${realIndex})">Add to Cart</button>
        </div>
      `;
    }
  }
});