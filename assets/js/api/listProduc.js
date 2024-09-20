const listProduct = [
  {
    id: 12,
    imgId: "/img/ampli2",
    mode: "231",
    stereoPower8OHM: "3e",
    stereoPower4OHM: "rt",
    stereoPower2OHM: "er",
    btl8OHM: "df",
    btl4OHM: "56",
    frequencyResponse: "err",
    thdPlus: "55",
    sSourceNRatio: "334",
    slewRatio: "4s",
    dampingFactor: "sdg",
    crossTalk: "ghj",
    inputImpedance: "vb",
    inputSensitivity: "4657",
    protect: "09",
    gWeight: "fggh",
    dimension: "fff",
    packingSize: "ee",
  },
  {
    id: 12,
    imgId: "/img/ampli2",
    mode: "231",
    stereoPower8OHM: "3e",
    stereoPower4OHM: "rt",
    stereoPower2OHM: "er",
    btl8OHM: "df",
    btl4OHM: "56",
    frequencyResponse: "err",
    thdPlus: "55",
    sSourceNRatio: "334",
    slewRatio: "4s",
    dampingFactor: "sdg",
    crossTalk: "ghj",
    inputImpedance: "vb",
    inputSensitivity: "4657",
    protect: "09",
    gWeight: "fggh",
    dimension: "fff",
    packingSize: "ee",
  },
  {
    id: 12,
    imgId: "/img/ampli2",
    mode: "231",
    stereoPower8OHM: "3e",
    stereoPower4OHM: "rt",
    stereoPower2OHM: "er",
    btl8OHM: "df",
    btl4OHM: "56",
    frequencyResponse: "err",
    thdPlus: "55",
    sSourceNRatio: "334",
    slewRatio: "4s",
    dampingFactor: "sdg",
    crossTalk: "ghj",
    inputImpedance: "vb",
    inputSensitivity: "4657",
    protect: "09",
    gWeight: "fggh",
    dimension: "fff",
    packingSize: "ee",
  },
  {
    id: 12,
    imgId: "/img/ampli2",
    mode: "231",
    stereoPower8OHM: "3e",
    stereoPower4OHM: "rt",
    stereoPower2OHM: "er",
    btl8OHM: "df",
    btl4OHM: "56",
    frequencyResponse: "err",
    thdPlus: "55",
    sSourceNRatio: "334",
    slewRatio: "4s",
    dampingFactor: "sdg",
    crossTalk: "ghj",
    inputImpedance: "vb",
    inputSensitivity: "4657",
    protect: "09",
    gWeight: "fggh",
    dimension: "fff",
    packingSize: "ee",
  },
  {
    id: 12,
    imgId: "/img/ampli2",
    mode: "231",
    stereoPower8OHM: "3e",
    stereoPower4OHM: "rt",
    stereoPower2OHM: "er",
    btl8OHM: "df",
    btl4OHM: "56",
    frequencyResponse: "err",
    thdPlus: "55",
    sSourceNRatio: "334",
    slewRatio: "4s",
    dampingFactor: "sdg",
    crossTalk: "ghj",
    inputImpedance: "vb",
    inputSensitivity: "4657",
    protect: "09",
    gWeight: "fggh",
    dimension: "fff",
    packingSize: "ee",
  },
  {
    id: 12,
    imgId: "/img/ampli2",
    mode: "231",
    stereoPower8OHM: "3e",
    stereoPower4OHM: "rt",
    stereoPower2OHM: "er",
    btl8OHM: "df",
    btl4OHM: "56",
    frequencyResponse: "err",
    thdPlus: "55",
    sSourceNRatio: "334",
    slewRatio: "4s",
    dampingFactor: "sdg",
    crossTalk: "ghj",
    inputImpedance: "vb",
    inputSensitivity: "4657",
    protect: "09",
    gWeight: "fggh",
    dimension: "fff",
    packingSize: "ee",
  },
  {
    id: 12,
    imgId: "/img/ampli2",
    mode: "231",
    stereoPower8OHM: "3e",
    stereoPower4OHM: "rt",
    stereoPower2OHM: "er",
    btl8OHM: "df",
    btl4OHM: "56",
    frequencyResponse: "err",
    thdPlus: "55",
    sSourceNRatio: "334",
    slewRatio: "4s",
    dampingFactor: "sdg",
    crossTalk: "ghj",
    inputImpedance: "vb",
    inputSensitivity: "4657",
    protect: "09",
    gWeight: "fggh",
    dimension: "fff",
    packingSize: "ee",
  },
  {
    id: 12,
    imgId: "/img/ampli2",
    mode: "231",
    stereoPower8OHM: "3e",
    stereoPower4OHM: "rt",
    stereoPower2OHM: "er",
    btl8OHM: "df",
    btl4OHM: "56",
    frequencyResponse: "err",
    thdPlus: "55",
    sSourceNRatio: "334",
    slewRatio: "4s",
    dampingFactor: "sdg",
    crossTalk: "ghj",
    inputImpedance: "vb",
    inputSensitivity: "4657",
    protect: "09",
    gWeight: "fggh",
    dimension: "fff",
    packingSize: "ee",
  },
];
const API_URL = "https://fakestoreapi.com/products";

document.addEventListener("DOMContentLoaded", function () {
  const listProduct = document.getElementById("list-all-product");
  const pagination = document.getElementById("list-pagination");

  // const loading = document.getElementById('loading');
  // const prevBtn = document.getElementById('prev-btn');
  // const nextBtn = document.getElementById('next-btn');

  let currentPage = 1;
  const productsPerPage = 10;

  function fetchListProduct(page) {
    fetch("https://fakestoreapi.com/products")
      // fetch(`${API_URL}/page=${page}&size=${productsPerPage}`)
      .then((res) => res.json())
      .then((data) => {
        data.forEach((product) => {
          const list = `
              <div class="col-12 col-md-4 col-lg-4 col-xl-4 product-col">
                    <div class="item_product_main">
                        <div class="variants wishItem">
                            <div class="product-thumbnail">
                                <a class="product_overlay"
                                    href="../may-giat-toshiba-aw-me1050gv.html"
                                    title="MÁY GIẶT TOSHIBA AW-ME1050GV"></a>
                                <a class="image_thumb" href="../may-giat-toshiba-aw-me1050gv.html"
                                    title="MÁY GIẶT TOSHIBA AW-ME1050GV">
                                    <img class="lazyload" width="200" height="200"
                                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"
                                        data-src="//bizweb.dktcdn.net/thumb/large/100/039/691/products/may-giat-toshiba-me1050gv-wd-10.jpg?v=1452313941757"
                                        alt="MÁY GIẶT TOSHIBA AW-ME1050GV">
                                </a>

                            </div>
                            <div class="product-info">
                                <h3 class="product-name">
                                    <a
                                        href="../may-giat-toshiba-aw-me1050gv.html"
                                        title="MÁY GIẶT TOSHIBA AW-ME1050GV">
                                        ${product.title}
                                    </a>
                                </h3>
                            </div>
                        </div>
                    </div>
              </div>
                `;
          listProduct.insertAdjacentHTML("beforeend", list);
        });
        const totalPages = 5;
        displayPagination(totalPages, page);
      })
      .catch((error) => console.log("Error fetching products:", error));
  }

  function displayPagination(totalPages, currentPage) {
    pagination.innerHTML = "";
    for (let i = 1; i <= totalPages; i++) {
      const pageButton = document.createElement("button");
      pageButton.textContent = i;
      pageButton.classList.add("page-btn");
      if (i === currentPage) {
        pageButton.classList.add("active");
      }
      pageButton.addEventListener("click", () => {
        fetchProducts(i);
      });
      pagination.appendChild(pageButton);
    }
  }

  fetchListProduct(currentPage);
});
