const API_URL = "https://tscproaudio.com/manager";

document.addEventListener("DOMContentLoaded", function () {
  const username = "admin";
  const password = "123456@";
  const headers = new Headers();
  const encodedCredentials = btoa(`${username}:${password}`);

  headers.append("Authorization", "Basic " + encodedCredentials);

  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get("id");

  function getProductDetails() {
    fetch(`${API_URL}/micro/${productId}`)
      .then((response) => response.json())
      .then((product) => {
        console.log;
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
           <h1>${product.microName}</h1>
          `;
          imageProduct.innerHTML = `
          <img
            height="540"
            width="540"
            src="${product.imgId}"
            alt="${product.microName}"
            class="img-responsive mx-auto d-block"
          />
          `;
          let systemParamCatalogue = "";
          let receiverParamCatalogue = "";
          let transmitterParamCatalogue = "";

          const fieldsSystemParam = [
            {
              label: "Frequency Range (Cha)",
              value: product.frequencyRangeCha,
            },
            {
              label: "Frequency Range (Chb)",
              value: product.frequencyRangeChb,
            },
            {
              label: "Channels",
              value: product.channels,
            },
            {
              label: "Signal to Noise Ratio",
              value: product.signalToNoiseRatio,
            },
            {
              label: "frequency quantity",
              value: product.frequencyQuantity,
            },
            {
              label: "Total Harmonic Distortion",
              value: product.totalHarmonicDistortion,
            },
            { label: "Modulation Mode", value: product.modulationMode },
            { label: "Working Distance", value: product.workingDistance },
            { label: "Frequency Bandwidth", value: product.frequencyBandwidth },
            { label: "Channel Interval", value: product.channelInterval },
            { label: "Max Deviation", value: product.maxDeviation },
            { label: "frequency response", value: product.frequencyResponse },
            { label: "Frequency Stability", value: product.frequencyStability },
            { label: "Frequency interval", value: product.frequencyInterval },
          ];
          const fieldsReceiverParam = [
            {
              label: "Oscillation Mode",
              value: product.oscillationModeReceiverParam,
            },
            { label: "Modulation", value: product.modulation },
            { label: "Sensitivity", value: product.sensitivity },
            {
              label: "Sensitivity Adjustment",
              value: product.sensitivityAdjustment,
            },
            { label: "Power Supply Mode", value: product.powerSupplyMode },
            { label: "Antenna Access", value: product.antennaAccess },
            { label: "Mid Frequency", value: product.midFrequence },
            {
              label: "Spurious Suppression",
              value: product.spuriousSuppression,
            },
            {
              label: "Max Output Electrical Level",
              value: product.maxOutputElectricalLevel,
            },
          ];

          const fieldsTransmitterParam = [
            { label: "Output Power", value: product.outputPower },
            { label: "Directivity", value: product.directivity },
            { label: "Frequency Response", value: product.frequencyResponse },
            { label: "Power Supply", value: product.powerSupply },
            {
              label: "Oscillation Mode (Transmitter)",
              value: product.oscillationModeTransmitterParam,
            },
            { label: "Transmitter Type", value: product.transmitterType },
            { label: "Pipe Body Material", value: product.pipeBodyMaterial },
            { label: "Battery Life Time", value: product.batteryLifeTime },
          ];

          fieldsSystemParam.forEach((field) => {
            if (field.value) {
              systemParamCatalogue += `<p class="text-capitalize m-0 p-0">
                  <span class="fw-semibold">${field.label}</span> : <span>${field.value}</span>
                </p>`;
            }
          });

          fieldsReceiverParam.forEach((field) => {
            if (field.value) {
              receiverParamCatalogue += `<p class="text-capitalize m-0 p-0">
                  <span class="fw-semibold">${field.label}</span> : <span>${field.value}</span>
                </p>`;
            }
          });
          fieldsTransmitterParam.forEach((field) => {
            if (field.value) {
              transmitterParamCatalogue += `<p class="text-capitalize m-0 p-0">
                  <span class="fw-semibold">${field.label}</span> : <span>${field.value}</span>
                </p>`;
            }
          });

          catalogueProduct.innerHTML = innerHTML = `
              <div class="row mt-3">
                 <div class="col-12 col-md-4">
                  <h5 class="fw-bold text-secondary">System Parameter</h5>
                  ${systemParamCatalogue}
                 </div>
                 <div class="col-12 col-md-4">
                  <h5 class="fw-bold text-secondary">Receiver Parameter</h5>
                  ${receiverParamCatalogue}
                 </div>
                 <div class="col-12 col-md-4">
                  <h5 class="fw-bold text-secondary">Transmitter Parameter</h5>
                  ${transmitterParamCatalogue}
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
