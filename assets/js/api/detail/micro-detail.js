const API_URL = "https://0776f5a4-afec-4066-89ae-8830a69c83ce.mock.pstmn.io";

document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get("id");

  function getProductDetails() {
    fetch(`${API_URL}/manager/micro/${productId}`)
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
          // catalogueProduct.innerHTML = `
          //   <div class="row mt-3">
          //       <div class="col-12 col-md-4">
          //           <h5 class="fw-bold text-secondary">System Parameter</h5>
          //           <p class="text-capitalize m-0 p-0">
          //             <span class="fw-semibold">frequency Range Cha</span> : <span>${product.frequencyRangeCha}</span>
          //           </p>
          //           <p class="text-capitalize m-0 p-0">
          //            <span class="fw-semibold">frequency Quantity</span> : <span>${product.frequencyQuantity}</span>
          //           </p>
          //           <p class="text-capitalize m-0 p-0">
          //             <span class="fw-semibold">signal-To-Noise-Ratio</span> : <span>${product.signalToNoiseRatio}</span>
          //           </p>
          //           <p class="text-capitalize m-0 p-0">
          //             <span class="fw-semibold">total Harmonic Distortion</span> : <span>${product.totalHarmonicDistortion}</span>
          //           </p>
          //            <p class="text-capitalize m-0 p-0">
          //             <span class="fw-semibold">modulation Mode</span> : <span>${product.modulationMode}</span>
          //           </p>
          //           <p class="text-capitalize m-0 p-0">
          //             <span class="fw-semibold">frequency Response</span> : <span>${product.frequencyResponse}</span>
          //           </p>
          //           <p class="text-capitalize m-0 p-0">
          //             <span class="fw-semibold">working Distance</span> : <span>${product.workingDistance}</span>
          //           </p>
          //           <p class="text-capitalize m-0 p-0">
          //             <span class="fw-semibold">Channel interval</span> : <span>${product.channelInterval}</span>
          //           </p>
          //           <p class="text-capitalize m-0 p-0">
          //             <span class="fw-semibold">frequency Bandwidth</span> : <span>${product.frequencyBandwidth}</span>
          //           </p>
          //           <p class="text-capitalize m-0 p-0">
          //             <span class="fw-semibold">max Deviation</span> : <span>${product.maxDeviation}</span>
          //           </p>
          //           <p class="text-capitalize m-0 p-0">
          //             <span class="fw-semibold">frequency Stability</span> : <span>${product.frequencyStability}</span>
          //           </p>
          //       </div>
          //       <div class="col-12 col-md-4">
          //           <h5 class="fw-bold text-secondary">Receiver Parameter</h5>
          //           <p class="text-capitalize m-0 p-0">
          //           <span class="fw-semibold">oscillation Mode</span> : <span>${product.oscillationModeReceiverParam}</span>
          //           </p>
          //           <p class="text-capitalize m-0 p-0">
          //           <span class="fw-semibold">antenna Access</span> : <span>${product.antennaAccess}</span>
          //           </p>
          //           <p class="text-capitalize m-0 p-0">
          //           <span class="fw-semibold">sensitivity</span> : <span>${product.sensitivity}</span>
          //           </p>
          //           <p class="text-capitalize m-0 p-0">
          //           <span class="fw-semibold">mid-Frequency</span> : <span>${product.midFrequence}</span>
          //           </p>
          //           <p class="text-capitalize m-0 p-0">
          //           <span class="fw-semibold">sensitivity Adjustment</span> : <span>${product.sensitivityAdjustment}</span>
          //           </p>
          //           <p class="text-capitalize m-0 p-0">
          //           <span class="fw-semibold">spurious Suppression</span> : <span>${product.spuriousSuppression}</span>
          //           </p>
          //           <p class="text-capitalize m-0 p-0">
          //           <span class="fw-semibold">power SupplyMode</span> : <span>${product.powerSupplyMode}</span>
          //           </p>
          //           <p class="text-capitalize m-0 p-0">
          //           <span class="fw-semibold">max Output Electrical Level</span> : <span>${product.maxOutputElectricalLevel}</span>
          //           </p>
          //       </div>
          //       <div class="col-12 col-md-4">
          //           <h5 class="fw-bold text-secondary">Transmitter Parameter</h5>
          //           <p class="text-capitalize m-0 p-0">
          //           <span class="fw-semibold">output Power</span> : <span>${product.outputPower}</span>
          //           </p>
          //           <p class="text-capitalize m-0 p-0">
          //           <span class="fw-semibold">oscillation Mode</span> : <span>${product.oscillationModeTransmitterParam}</span>
          //           </p>
          //           <p class="text-capitalize m-0 p-0">
          //           <span class="fw-semibold">directivity</span> : <span>${product.directivity}</span>
          //           </p>
          //           <p class="text-capitalize m-0 p-0">
          //           <span class="fw-semibold">transmitter Type</span> : <span>${product.transmitterType}</span>
          //           </p>
          //           <p class="text-capitalize m-0 p-0">
          //           <span class="fw-semibold">frequency Response</span> : <span>${product.frequencyResponse}</span>
          //           </p>
          //           <p class="text-capitalize m-0 p-0">
          //           <span class="fw-semibold">pipe Body Material</span> : <span>${product.pipeBodyMaterial}</span>
          //           </p>
          //           <p class="text-capitalize m-0 p-0">
          //           <span class="fw-semibold">power Supply</span> : <span>${product.powerSupply}</span>
          //           </p>
          //           <p class="text-capitalize m-0 p-0">
          //           <span class="fw-semibold">battery Life Time</span> : <span>${product.batteryLifeTime}</span>
          //           </p>
          //       </div>
          //       </div>
          //   `;
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
              label: "Signal to Noise Ratio",
              value: product.signalToNoiseRatio,
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
            { label: "Frequency Stability", value: product.frequencyStability },
          ];
          const fieldsReceiverParam = [
            {
              label: "Oscillation Mode (Receiver)",
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
