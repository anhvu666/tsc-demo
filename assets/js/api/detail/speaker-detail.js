const API_URL = "https://tscproaudio.com/manager";

document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get("id");

  function getProductDetails() {
    fetch(`${API_URL}/n9-speaker-series/${productId}`)
      .then((response) => response.json())
      .then((product) => {
        console.log("test", product);
        const catalogueProduct = document.querySelector(
          ".product-tab-catalogue"
        );
        const titleProduct = document.querySelector(".title-product");
        const imageProduct = document.querySelector(".picture-product");
        const breadCrumb = document.querySelector(".bread-crumb-name");

        breadCrumb.innerHTML = `
        <strong><span>${product.n9SpeakerSeriesName}</span></strong>
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
            { label: "Max SPL", value: product.maxSPL },
            { label: "Nominal Impedence", value: product.nominalImpedence },
            { label: "Cover Range", value: product.coverRange },
            { label: "Hanging Hardware", value: product.hangingHardware },
            { label: "Handle", value: product.handle },
            { label: "Bracket Fixed Seat", value: product.bracketFixedSeat },
            { label: "Connector", value: product.connector },
            { label: "Box Material", value: product.boxMaterial },
            { label: "Net Weight", value: product.netWeight },
            { label: "Size", value: product.size },
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
              label: "Anti Magnetic Effect Test",
              value: product.anti_magneticEffectTest,
            },
            {
              label: "Earthquake Drop Test",
              value: product.earthquakeDropTest,
            },
            { label: "Dimensions", value: product.dimensions },
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
            { label: "Model", value: product.model },
            { label: "Normal Impedance", value: product.normalImpedance },
            {
              label: "Spray Painting Treatment",
              value: product.sprayPaintingTreatment,
            },
            { label: "Weight", value: product.weight },
            { label: "Output 4 &#8486;", value: product.output4ohm },
            { label: "Output 8 &#8486;", value: product.output8ohm },
            { label: "Digital Output", value: product.digitalOutput },
            { label: "Channel Number", value: product.channelNumber },
            { label: "THD", value: product.THD },
            { label: "S Source N Ratio", value: product.sSourceNRatio },
            { label: "Damping Factor", value: product.dampingFactor },
            { label: "Cperating Range", value: product.cperatingRange },
            { label: "Power Current", value: product.powerCurrent },
            { label: "Angle Increments", value: product.angleIncrements },
            { label: "Horizontal", value: product.horizontal },
            { label: "Full Frequency Unit", value: product.fullFrequencyUnit },
            {
              label: "Conversion Efficiency",
              value: product.conversionEfficiency,
            },
            { label: "Input Impedance", value: product.inputImpedance },
            { label: "Output Impedance", value: product.outputImpedance },
            { label: "Main Power Supply", value: product.mainPowerSupply },
            {
              label: "Frequency Response Range",
              value: product.frequencyResponseRange,
            },
            { label: "Power FR", value: product.powerFR },
            { label: "AMP Frequency Load", value: product.AMPFrequencyLoad },
            { label: "Stereo 8 &#8486;", value: product.stereo8ohm },
            { label: "Stereo 4 &#8486;", value: product.stereo4ohm },
            { label: "Slew Rate", value: product.slewRate },
            { label: "Dynamic Range", value: product.dynamicRange },
            { label: "Voltage Gain", value: product.voltageGain },
            {
              label: "Output Circuit Design",
              value: product.outputCircuitDesign,
            },
            { label: "Power Selection", value: product.powerSelection },
            { label: "Input Voltage", value: product.inputVoltage },
            {
              label: "Speaker Specifications",
              value: product.speakerSpecifications,
            },
            { label: "Color", value: product.color },
            { label: "Waterproof", value: product.waterproof },
            { label: "Unit Configure", value: product.unitConfigure },
            {
              label: "Installation Opening Size",
              value: product.installationOpeningSize,
            },
            {
              label: "Maximum Outer Diameter",
              value: product.maximumOuterDiameter,
            },
            { label: "Withstand Power", value: product.withstandPower },
            { label: "Painting Treatment", value: product.paintingTreatment },
            { label: "Suspension Point", value: product.suspensionPoint },
            { label: "Gain", value: product.gain },
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
