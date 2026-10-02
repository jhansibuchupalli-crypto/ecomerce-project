// ===== SELL FORM SUBMIT =====
const sellForm = document.getElementById("sellForm");

if (sellForm) {
  sellForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // User login ayyi unda check cheyyi
    const user = JSON.parse(localStorage.getItem("loggedInUser"));
    if (!user) {
      alert("Please login first to sell a product!");
      window.location.href = "login.html";
      return;
    }

    // Form values theesukoni
    const name = document.getElementById("productName").value.trim();
    const price = document.getElementById("productPrice").value.trim();
    const category = document.getElementById("productCategory").value;
    const description = document.getElementById("productDescription").value.trim();
    const image = document.getElementById("productImage").value.trim();

    // Validation
    if (!name || !price || !category || !description || !image) {
      alert("Please fill all fields!");
      return;
    }

    if (Number(price) <= 0) {
      alert("Price must be greater than 0!");
      return;
    }

    // localStorage nundi products theesukoni
    let products = JSON.parse(localStorage.getItem("products")) || [];

    // Kotha product create cheyyi
    const newProduct = {
      id: Date.now(),                          // unique ID
      name: name,
      price: price,
      category: category,
      description: description,
      image: image,
      sellerId: user.email,                    // seller email
      sellerName: user.name,                   // seller name
      addedAt: new Date().toISOString()
    };

    // Products array lo add cheyyi
    products.push(newProduct);

    // localStorage lo save cheyyi
    localStorage.setItem("products", JSON.stringify(products));

    alert("Product listed successfully! 🎉");
    window.location.href = "products.html";
  });
}