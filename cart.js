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
        <p>Quantity: ${cart[i].quantity}</p>
      </div>
    `;
   total += Number(cart[i].price) * cart[i].quantity;
  }

  document.getElementById("cartTotal").innerText = total;
}


renderCart();
function clearCart() {
    localStorage.removeItem("cart");
    localStorage.setItem("cartCount", 0);

    location.reload();
}