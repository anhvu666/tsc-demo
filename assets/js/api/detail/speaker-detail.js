const API_URL = "https://0776f5a4-afec-4066-89ae-8830a69c83ce.mock.pstmn.io";

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
            { label: "System Description", value: product.systemDescription },
            { label: "Tweeter", value: product.tweeter },
            { label: "Woofer", value: product.woofer },
            { label: "Power", value: product.power },
            {
              label: "Maximum Sound Pressure",
              value: product.maximumSoundPressure,
            },
            { label: "Cover Angle", value: product.coverAngle },
            { label: "Hanging Point", value: product.hangingPoint },
            { label: "Hand", value: product.hand },
            { label: "Paint Treatment", value: product.paintTreatment },
            { label: "LF Unit", value: product.LFUnit },
            { label: "MF Unit", value: product.MFUnit },
            { label: "HF Unit", value: product.HFUnit },
            { label: "Unit", value: product.unit },
            { label: "Frequency Response", value: product.frequencyResponse },
            { label: "Sensitivity", value: product.sensitivity },
            { label: "Rated Power", value: product.ratedPower },
            { label: "Nominal Impedance", value: product.nominalImpedance },
            { label: "Input Sensitivity", value: product.inputSensitivity },
            { label: "Mlax.SPL", value: product.maxSPL },
            { label: "Nominal Impedance", value: product.nominalImpedence },
            { label: "Cover Range", value: product.coverRange },
            { label: "Hanging Hardware", value: product.hangingHardware },
            { label: "Handle", value: product.handle },
            { label: "Bracket Fixed Seat", value: product.bracketFixedSeat },
            { label: "Connector", value: product.connector },
            { label: "Box Material", value: product.boxMaterial },
            { label: "Net Weight", value: product.netWeight },
            { label: "Size (W*D*H)", value: product.size },
            { label: "Category", value: product.categorg },
            { label: "Output Power", value: product.outputPower },
            { label: "DSP Accuracy", value: product.DSPAccuracy },
            {
              label: "Divider Part FIR Filter",
              value: product.dividerPartFIRFilter,
            },
            { label: "Digital Input", value: product.digitalInput },
            { label: "Panel", value: product.panel },
            {
              label: "Maximum Hanger Number",
              value: product.maximumHangerNumber,
            },
            { label: "Crossover", value: product.crossover },
            { label: "Overlay", value: product.overlay },
            {
              label: "Spray Paint Processing",
              value: product.sprayPaintProcessing,
            },
            { label: "Overlay Angle", value: product.overlayAngle },
            { label: "Alto Unit", value: product.altoUnit },
            {
              label: "Transformer Constant Pressure Power",
              value: product.transformerConstantPressurePower,
            },
            { label: "DC Impedance", value: product.DCImpedance },
            {
              label: "Quality Control Range",
              value: product.qualityControlRange,
            },
            {
              label: "Anti-magnetic Effect Test",
              value: product.anti_magneticEffectTest,
            },
            {
              label: "Earthquake Drop Test",
              value: product.earthquakeDropTest,
            },
            { label: "Dimensions", value: product.dimensions },
            { label: "Category", value: product.category },
            {
              label: "Maximum Output Power",
              value: product.maximumOutputPower,
            },
            {
              label: "Total Harmonic Distortion",
              value: product.totalHarmonicDistortion,
            },
            {
              label: "Intermodulation Distortion",
              value: product.intermodulationDistortion,
            },
            { label: "Cooling Method", value: product.coolingMethod },
            { label: "DSP Part", value: product.DSPPart },
            {
              label: "Input and Output Part",
              value: product.inputAndOutputPart,
            },
            { label: "Case Material", value: product.caseMaterial },
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
