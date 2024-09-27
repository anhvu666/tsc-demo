document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get("id");

  function getProductDetails() {
    fetch(`${API_URL}/manager/n9-speaker-series/${productId}`)
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
                 <h1>${product.n9SpeakerSeriesName}</h1>
                `;
          imageProduct.innerHTML = `
                <img
                  height="540"
                  width="540"
                  src="${product.imgId}"
                  alt="${product.n9SpeakerSeriesName}"
                  class="img-responsive mx-auto d-block"
                />
                `;
          let detailCatalogue = "";

          const fields = [
            { label: "Channel", value: product.channel },
            { label: "Channel EQ", value: product.channelEQ },
            { label: "AUX", value: product.AUX },
            { label: "Return", value: product.return },
            { label: "Effects", value: product.effects },
            { label: "Main Out", value: product.mainOut },
            { label: "Groups", value: product.groups },
            { label: "Phantom Power", value: product.phantomPower },
            { label: "USB Player", value: product.usbPlayer },
          ];

          fields.forEach((field) => {
            if (field.value) {
              detailCatalogue += `
                  <p class="text-capitalize m-0 p-0">
                    <span class="fw-semibold">${field.label}</span> : <span>${field.value}</span>
                  </p>
                `;
            }
          });

          catalogueProduct.innerHTML = detailCatalogue;
        }
      })
      .catch((error) => {
        console.error("Error fetching product details:", error);
      });
  }

  getProductDetails();
});
