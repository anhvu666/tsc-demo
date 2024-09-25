const API_URL = "https://0776f5a4-afec-4066-89ae-8830a69c83ce.mock.pstmn.io";

document.addEventListener("DOMContentLoaded", async function () {
  const listSeriesSpeaker = document.querySelector(".list-series-speaker");
  const listSeriesAmplifier = document.querySelector(".list-series-amplifier");
  const listSeriesMicro = document.querySelector(".list-series-micro");
  const loading = document.querySelectorAll(".loading-message");

  async function fetchSeriesSpeaker() {
    try {
      const response = await fetch(
        `${API_URL}/manager/speakers-series/all?page=0&size=5`
      );
      const data = await response.json();
      const products = data.content;

      products.forEach((product) => {
        const markup = `
          <div class="col-12 col-md-4 item">
            <div class="item_product_main">
              <div class="variants wishItem">
                <div class="product-thumbnail">
                  <a
                    class="product_overlay"
                    href="internet-tivi-led-sony-kdl-32r500c-32-inch.html"
                    title="${product.seriesName}"
                  ></a>
                  <a
                    class="image_thumb"
                    href="internet-tivi-led-sony-kdl-32r500c-32-inch.html"
                    title="${product.seriesName}"
                  >
                    <img
                      class="lazyload"
                      width="200"
                      height="200"
                      src="${product.imgId}"
                      alt="${product.seriesName}"
                    />
                  </a>
                </div>
                <div class="product-info">
                  <h3 class="product-name">
                    <a
                      href="../pages/detail-product.html?id=${product.id}"
                      title="${product.seriesName}"
                    >${product.seriesName}</a>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        `;

        listSeriesSpeaker.insertAdjacentHTML("beforeend", markup);
      });

      loading[0].style.display = "none";
    } catch (error) {
      console.log("Error fetching products", error);
      loading[0].style.display = "none";
    }
  }

  async function fetchSeriesAmplifier() {
    try {
      const response = await fetch(
        `${API_URL}/manager/power-ampli-series/all?page=0&size=5`
      );
      const data = await response.json();
      const products = data.content;

      products.forEach((product) => {
        const markup = `
          <div class="col-12 col-md-4 item">
            <div class="item_product_main">
              <div class="variants wishItem">
                <div class="product-thumbnail">
                  <a
                    class="product_overlay"
                    href="internet-tivi-led-sony-kdl-32r500c-32-inch.html"
                    title="${product.seriesName}"
                  ></a>
                  <a
                    class="image_thumb"
                    href="internet-tivi-led-sony-kdl-32r500c-32-inch.html"
                    title="${product.seriesName}"
                  >
                    <img
                      class="lazyload"
                      width="200"
                      height="200"
                      src="${product.imgId}"
                      alt="${product.seriesName}"
                    />
                  </a>
                </div>
                <div class="product-info">
                  <h3 class="product-name">
                    <a
                      href="../pages/detail-product.html?id=${product.id}"
                      title="${product.seriesName}"
                    >${product.seriesName}</a>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        `;

        listSeriesAmplifier.insertAdjacentHTML("beforeend", markup);
      });
      loading[1].style.display = "none";
    } catch (error) {
      console.log("Error fetching products:", error);
      loading[1].style.display = "none";
    }
  }

  async function fetchSeriesMicro() {
    try {
      const response = await fetch(
        `${API_URL}/manager/micro-tsc-series/all?page=0&size=5`
      );
      const data = await response.json();
      console.log("data", data);
      const products = data.content;

      products.forEach((product) => {
        const markup = `
          <div class="col-12 col-md-4 item">
            <div class="item_product_main">
              <div class="variants wishItem">
                <div class="product-thumbnail">
                  <a
                    class="product_overlay"
                    href="internet-tivi-led-sony-kdl-32r500c-32-inch.html"
                    title="${product.seriesName}"
                  ></a>
                  <a
                    class="image_thumb"
                    href="internet-tivi-led-sony-kdl-32r500c-32-inch.html"
                    title="${product.seriesName}"
                  >
                    <img
                      class="lazyload"
                      width="200"
                      height="200"
                      src="${product.imgId}"
                      alt="${product.seriesName}"
                    />
                  </a>
                </div>
                <div class="product-info">
                  <h3 class="product-name">
                    <a
                      href="../pages/detail-product.html?id=${product.id}"
                      title="${product.seriesName}"
                    >${product.seriesName}</a>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        `;

        listSeriesMicro.insertAdjacentHTML("beforeend", markup);
      });
      loading[2].style.display = "none";
    } catch (error) {
      console.log("Error fetching products", error);
      loading[2].style.display = "none";
    }
  }

  await fetchSeriesSpeaker();
  await fetchSeriesAmplifier();
  await fetchSeriesMicro();
});
