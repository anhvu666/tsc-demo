const API_URL = "https://0776f5a4-afec-4066-89ae-8830a69c83ce.mock.pstmn.io";

document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get("id");

  function getProductDetails() {
    fetch(`${API_URL}/manager/ampli/${productId}`)
      .then((response) => response.json())
      .then((product) => {
        const catalogueProduct = document.querySelector(
          ".product-tab-catalogue"
        );
        const titleProduct = document.querySelector(".title-product");
        const imageProduct = document.querySelector(".picture-product");
        const breadCrumb = document.querySelector(".bread-crumb-name");

        breadCrumb.innerHTML = `
        <strong><span>${product.microName}</span></strong>
        `;

        if (product) {
          titleProduct.innerHTML = `
             <h1>${product.mode}</h1>
            `;
          imageProduct.innerHTML = `
            <img
              height="540"
              width="540"
              src="${product.imgId}"
              alt="${product.mode}"
              class="img-responsive mx-auto d-block"
            />
            `;
          catalogueProduct.innerHTML = `
              <div class="row mt-3">
                  <div class="col-12 col-md-4">
                      <p class="text-capitalize m-0 p-0">
                      <span class="fw-semibold">stereo Power 8 &#8486;</span> : <span>${product.stereoPower8OHM}</span>
                      </p>
                      <p class="text-capitalize m-0 p-0">
                      <span class="fw-semibold">stereo Power 4 &#8486;</span> : <span>${product.stereoPower4OHM}</span>
                      </p>
                      <p class="text-capitalize m-0 p-0">
                      <span class="fw-semibold">stereo Power 2 &#8486;</span> : <span>${product.stereoPower2OHM}</span>
                      </p>
                      <p class="text-capitalize m-0 p-0">
                      <span class="fw-semibold">BTL 8 &#8486;</span> : <span>${product.btl8OHM}</span>
                      </p>
                       <p class="text-capitalize m-0 p-0">
                      <span class="fw-semibold">BTL 4  &#8486;</span> : <span>${product.btl4OHM}</span>
                      </p>
                      <p class="text-capitalize m-0 p-0">
                      <span class="fw-semibold">frequency Response</span> : <span>${product.frequencyResponse}</span>
                      </p>
                  </div>
                  <div class="col-12 col-md-4">
                      <p class="text-capitalize m-0 p-0">
                      <span class="fw-semibold">THD+N</span> : <span>${product.thdPlus}</span>
                      </p>
                      <p class="text-capitalize m-0 p-0">
                      <span class="fw-semibold">S/N Ratio</span> : <span>${product.sSourceNRatio}</span>
                      </p>
                      <p class="text-capitalize m-0 p-0">
                      <span class="fw-semibold">signal-To-Noise-Ratio</span> : <span>${product.slewRatio}</span>
                      </p>
                      <p class="text-capitalize m-0 p-0">
                      <span class="fw-semibold">damping Factor</span> : <span>${product.dampingFactor}</span>
                      </p>
                       <p class="text-capitalize m-0 p-0">
                      <span class="fw-semibold">damping Factor</span> : <span>${product.dampingFactor}</span>
                      </p>
                      <p class="text-capitalize m-0 p-0">
                      <span class="fw-semibold">cross Talk</span> : <span>${product.crossTalk}</span>
                      </p>
                  </div>
                  <div class="col-12 col-md-4">
                      <p class="text-capitalize m-0 p-0">
                      <span class="fw-semibold">input Impedance</span> : <span>${product.inputImpedance}</span>
                      </p>
                      <p class="text-capitalize m-0 p-0">
                      <span class="fw-semibold">input Sensitivity</span> : <span>${product.inputSensitivity}</span>
                      </p>
                      <p class="text-capitalize m-0 p-0">
                      <span class="fw-semibold">protect</span> : <span>${product.protect}</span>
                      </p>
                      <p class="text-capitalize m-0 p-0">
                      <span class="fw-semibold">g Weight</span> : <span>${product.gWeight}</span>
                      </p>
                       <p class="text-capitalize m-0 p-0">
                     <span class="fw-semibold">dimension</span>  : <span>${product.dimension}</span>
                      </p>
                      <p class="text-capitalize m-0 p-0">
                      <span class="fw-semibold">packing Size</span> : <span>${product.packingSize}</span>
                      </p>
                  </div>
                  </div>
              `;
        }
      })
      .catch((error) => {
        console.error("Error fetching product details:", error);
      });
  }

  getProductDetails();
});
