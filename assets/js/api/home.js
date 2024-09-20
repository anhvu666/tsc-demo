document.addEventListener("DOMContentLoaded", function () {
  fetch("https://fakestoreapi.com/products?limit=3")
    .then((res) => res.json())
    .then((data) => {
      const listContainer = document.getElementById("list-section-product");
      data.forEach((product) => {
        const markup = `
            <div class="col-12 col-md-4 item">
            <div class="item_product_main">
              <div class="variants wishItem">
                <div class="product-thumbnail">
                  <a
                    class="product_overlay"
                    href="internet-tivi-led-sony-kdl-32r500c-32-inch.html"
                    title="Internet Tivi LED Sony KDL-32R500C"
                  ></a>
                  <a
                    class="image_thumb"
                    href="internet-tivi-led-sony-kdl-32r500c-32-inch.html"
                    title="Internet Tivi LED Sony KDL-32R500C"
                  >
                    <img
                      class="lazyload"
                      width="200"
                      height="200"
                      src="../images/TSC-images_product/K5/K5.png"
                      alt="Internet Tivi LED Sony KDL-32R500C"
                    />
                  </a>
                </div>
                <div class="product-info">
                  <h3 class="product-name">
                    <a
                      href="../pages/detail-product.html?id=${product.id}"
                      title="Internet Tivi LED Sony KDL-32R500C"
                      >${product.title}</a
                    >
                  </h3>
                </div>
              </div>
            </div>
          </div>
              `;

        listContainer.insertAdjacentHTML("beforeend", markup);
      });
    })
    .catch((error) => console.log("Error fetching products:", error));
});
