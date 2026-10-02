let cart = JSON.parse(localStorage.getItem("cart")) || [];

let totalItems = 0;

for (let i = 0; i < cart.length; i++) {
    totalItems += cart[i].quantity || 1;
}

document.getElementById("cartCount").textContent = totalItems;

let cartContainer = document.getElementById("cartContainer");

function renderCart() {
  cartContainer.innerHTML = "";
  let total = 0;

  if (cart.length === 0) {
    cartContainer.innerHTML = "<p>Your cart is empty.</p>";
    document.getElementById("cartTotal").innerText = 0;
    return;
  }

  for (let i = 0; i < cart.length; i++) {
    cartContainer.innerHTML += `
      <div class="cart-item">
        <img src="${cart[i].image}" width="80">
        <h4>${cart[i].name}</h4>
        <p>₹${cart[i].price}</p>

        <div class="qty-controls">
          <button onclick="decreaseQty(${i})">−</button>
          <span>${cart[i].quantity}</span>
          <button onclick="increaseQty(${i})">+</button>
        </div>

        <button class="remove-btn" onclick="removeItem(${i})">🗑 Remove</button>
      </div>
    `;
    total += Number(cart[i].price) * cart[i].quantity;
  }

  document.getElementById("cartTotal").innerText = total;
}


renderCart();
// ===== INCREASE QUANTITY =====
function increaseQty(index) {
  cart[index].quantity++;
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCount();
  renderCart();
}

// ===== DECREASE QUANTITY =====
function decreaseQty(index) {
  if (cart[index].quantity > 1) {
    cart[index].quantity--;
  } else {
    cart.splice(index, 1);
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCount();
  renderCart();
}

// ===== REMOVE ITEM =====
function removeItem(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCount();
  renderCart();
}
// ===== UPDATE HEADER COUNT =====
function updateCount() {
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    total += cart[i].quantity || 1;
  }
  document.getElementById("cartCount").textContent = total;
}
function clearCart() {
    localStorage.removeItem("cart");
    localStorage.setItem("cartCount", 0);

    location.reload();
}