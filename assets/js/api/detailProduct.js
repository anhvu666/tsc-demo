const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("id");

const apiUrl = `https://fakestoreapi.com/products/${productId}`;

function getProductDetails() {
  fetch(apiUrl)
    .then((response) => response.json())
    .then((product) => {
      // Gán thông tin sản phẩm vào giao diện
      document.getElementById("product-image").src = product.image;
      document.getElementById("product-title").textContent = product.title;
      document.getElementById("product-description").textContent =
        product.description;
      document.getElementById(
        "product-price"
      ).textContent = `$${product.price}`;
    })
    .catch((error) => {
      console.error("Error fetching product details:", error);
    });
}

getProductDetails();
