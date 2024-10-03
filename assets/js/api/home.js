const API_URL = "https://tscproaudio.com/manager";

document.addEventListener("DOMContentLoaded", async function () {
  const listSeriesSpeaker = document.querySelector(".list-series-speaker");
  const listSeriesAmplifier = document.querySelector(".list-series-amplifier");
  const listSeriesMicro = document.querySelector(".list-series-micro");
  const listSeriesMixer = document.querySelector(".list-series-mixer");
  const loading = document.querySelectorAll(".loading-message");

  async function fetchSeriesSpeaker() {
    try {
      const response = await fetch(
        `${API_URL}/speakers-series/all?page=0&size=5`
      );
      const data = await response.json();
      const products = data.content;
      if (products.length === 0) {
        listSeriesSpeaker.innerHTML =
          '<div class="text-center fs-4">No data</div';
      }
      products.forEach((product) => {
        const markup = `
          <div class="col-12 col-md-4 item">
            <div class="item_product_main">
              <div class="variants wishItem">
                <div class="product-thumbnail">
                  <a
                    class="product_overlay"
                    href="/tscshop/pages/list-series/speaker.html?series=${product.seriesName}"
                    title="${product.seriesName}"
                  ></a>
                  <a
                    class="image_thumb"
                    href="/tscshop/pages/list-series/speaker.html?series=${product.seriesName}"
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
                      href="/tscshop/pages/list-series/speaker.html?series=${product.seriesName}"
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
        `${API_URL}/power-ampli-series/all?page=0&size=5`
      );
      const data = await response.json();
      const products = data.content;
      if (products.length === 0) {
        listSeriesAmplifier.innerHTML =
          '<div class="text-center fs-4">No data</div';
      }

      products.forEach((product) => {
        const markup = `
          <div class="col-12 col-md-4 item">
            <div class="item_product_main">
              <div class="variants wishItem">
                <div class="product-thumbnail">
                  <a
                    class="product_overlay"
                    href="/tscshop/pages/list-series/amplifier.html?series=${product.seriesName}"
                    title="${product.seriesName}"
                  ></a>
                  <a
                    class="image_thumb"
                    href="/tscshop/pages/list-series/amplifier.html?series=${product.seriesName}"
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
                      href="/tscshop/pages/list-series/amplifier.html?series=${product.seriesName}"
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
        `${API_URL}/micro-tsc-series/all?page=0&size=5`
      );
      const data = await response.json();
      const products = data.content;
      if (products.length === 0) {
        listSeriesMicro.innerHTML =
          '<div class="text-center fs-4">No data</div';
      }

      products.forEach((product) => {
        const markup = `
          <div class="col-12 col-md-4 item">
            <div class="item_product_main">
              <div class="variants wishItem">
                <div class="product-thumbnail">
                  <a
                    class="product_overlay"
                    href="/tscshop/pages/list-series/micro.html?series=${product.seriesName}"
                    title="${product.seriesName}"
                  ></a>
                  <a
                    class="image_thumb"
                    href="/tscshop/pages/list-series/micro.html?series=${product.seriesName}"
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
                      href="/tscshop/pages/list-series/micro.html?series=${product.seriesName}"
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
  async function fetchSeriesMixer() {
    try {
      const response = await fetch(`${API_URL}/mixer-series/all?page=0&size=5`);
      const data = await response.json();
      const products = data.content;
      if (products.length === 0) {
        listSeriesMixer.innerHTML =
          '<div class="text-center fs-4">No data</div';
      }

      products.forEach((product) => {
        const markup = `
          <div class="col-12 col-md-4 item">
            <div class="item_product_main">
              <div class="variants wishItem">
                <div class="product-thumbnail">
                  <a
                    class="product_overlay"
                    href="/tscshop/pages/list-series/mixer.html?series=${product.seriesName}"
                    title="${product.seriesName}"
                  ></a>
                  <a
                    class="image_thumb"
                    href="/tscshop/pages/list-series/mixer.html?series=${product.seriesName}"
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
                      href="/tscshop/pages/list-series/mixer.html?series=${product.seriesName}"
                      title="${product.seriesName}"
                    >${product.seriesName}</a>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        `;

        listSeriesMixer.insertAdjacentHTML("beforeend", markup);
      });
      loading[3].style.display = "none";
    } catch (error) {
      console.log("Error fetching products", error);
      loading[3].style.display = "none";
    }
  }

  await fetchSeriesSpeaker();
  await fetchSeriesAmplifier();
  await fetchSeriesMicro();
  await fetchSeriesMixer();
});
