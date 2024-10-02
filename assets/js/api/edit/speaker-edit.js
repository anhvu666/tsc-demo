document.addEventListener("DOMContentLoaded", function () {
  const API_URL = "https://tscproaudio.com/manager";
  const urlParams = new URLSearchParams(window.location.search);
  const speakerId = urlParams.get("id");
  const getNumberId = parseInt(speakerId);
  const username = "admin";
  const password = "123456@";
  const basicAuth = "Basic " + btoa(username + ":" + password);

  function productDetails() {
    fetch(`${API_URL}/n9-speaker-series/${speakerId}`)
      .then((response) => response.json())
      .then((product) => {
        document.getElementById("n9SpeakerSeriesName").value =
          product.n9SpeakerSeriesName || "";
        document.getElementById("imgId").value = product.imgId || "";
        document.getElementById("systemDescription").value =
          product.systemDescription || "";
        document.getElementById("tweeter").value = product.tweeter || "";
        document.getElementById("woofer").value = product.woofer || "";
        document.getElementById("power").value = product.power || "";
        document.getElementById("maximumSoundPressure").value =
          product.maximumSoundPressure || "";
        document.getElementById("coverAngle").value = product.coverAngle || "";
        document.getElementById("hangingPoint").value =
          product.hangingPoint || "";
        document.getElementById("hand").value = product.hand || "";
        document.getElementById("paintTreatment").value =
          product.paintTreatment || "";
        document.getElementById("LFUnit").value = product.LFUnit || "";
        document.getElementById("MFUnit").value = product.MFUnit || "";
        document.getElementById("HFUnit").value = product.HFUnit || "";
        document.getElementById("unit").value = product.unit || "";
        document.getElementById("frequencyResponse").value =
          product.frequencyResponse || "";
        document.getElementById("sensitivity").value =
          product.sensitivity || "";
        document.getElementById("ratedPower").value = product.ratedPower || "";
        document.getElementById("inputSensitivity").value =
          product.inputSensitivity || "";
        document.getElementById("maxSPL").value = product.maxSPL || "";
        document.getElementById("nominalImpedance").value =
          product.nominalImpedance || "";
        document.getElementById("coverRange").value = product.coverRange || "";
        document.getElementById("hangingHardware").value =
          product.hangingHardware || "";
        document.getElementById("handle").value = product.handle || "";
        document.getElementById("bracketFixedSeat").value =
          product.bracketFixedSeat || "";
        document.getElementById("connector").value = product.connector || "";
        document.getElementById("boxMaterial").value =
          product.boxMaterial || "";
        document.getElementById("netWeight").value = product.netWeight || "";
        document.getElementById("size").value = product.size || "";
        document.getElementById("categorg").value = product.categorg || "";
        document.getElementById("outputPower").value =
          product.outputPower || "";
        document.getElementById("DSPAccuracy").value =
          product.DSPAccuracy || "";
        document.getElementById("dividerPartFIRFilter").value =
          product.dividerPartFIRFilter || "";
        document.getElementById("digitalInput").value =
          product.digitalInput || "";
        document.getElementById("panel").value = product.panel || "";
        document.getElementById("maximumHangerNumber").value =
          product.maximumHangerNumber || "";
        document.getElementById("crossover").value = product.crossover || "";
        document.getElementById("overlay").value = product.overlay || "";
        document.getElementById("sprayPaintProcessing").value =
          product.sprayPaintProcessing || "";
        document.getElementById("overlayAngle").value =
          product.overlayAngle || "";
        document.getElementById("altoUnit").value = product.altoUnit || "";
        document.getElementById("transformerConstantPressurePower").value =
          product.transformerConstantPressurePower || "";
        document.getElementById("DCImpedance").value =
          product.DCImpedance || "";
        document.getElementById("qualityControlRange").value =
          product.qualityControlRange || "";
        document.getElementById("anti_magneticEffectTest").value =
          product.anti_magneticEffectTest || "";
        document.getElementById("earthquakeDropTest").value =
          product.earthquakeDropTest || "";
        document.getElementById("dimensions").value = product.dimensions || "";
        document.getElementById("maximumOutputPower").value =
          product.maximumOutputPower || "";
        document.getElementById("totalHarmonicDistortion").value =
          product.totalHarmonicDistortion || "";
        document.getElementById("intermodulationDistortion").value =
          product.intermodulationDistortion || "";
        document.getElementById("coolingMethod").value =
          product.coolingMethod || "";
        document.getElementById("DSPPart").value = product.DSPPart || "";
        document.getElementById("inputAndOutputPart").value =
          product.inputAndOutputPart || "";
        document.getElementById("caseMaterial").value =
          product.caseMaterial || "";
        document.getElementById("normalImpedance").value =
          product.normalImpedance || "";
        document.getElementById("sprayPaintingTreatment").value =
          product.sprayPaintingTreatment || "";
        document.getElementById("weight").value = product.weight || "";
        document.getElementById("output4ohm").value = product.output4ohm || "";
        document.getElementById("output8ohm").value = product.output8ohm || "";
        document.getElementById("digitalOutput").value =
          product.digitalOutput || "";
        document.getElementById("channelNumber").value =
          product.channelNumber || "";
        document.getElementById("THD").value = product.THD || "";
        document.getElementById("sSourceNRatio").value =
          product.sSourceNRatio || "";
        document.getElementById("dampingFactor").value =
          product.dampingFactor || "";
        document.getElementById("cperatingRange").value =
          product.cperatingRange || "";
        document.getElementById("powerCurrent").value =
          product.powerCurrent || "";
        document.getElementById("angleIncrements").value =
          product.angleIncrements || "";
        document.getElementById("horizontal").value = product.horizontal || "";
        document.getElementById("fullFrequencyUnit").value =
          product.fullFrequencyUnit || "";
        document.getElementById("conversionEfficiency").value =
          product.conversionEfficiency || "";
        document.getElementById("inputImpedance").value =
          product.inputImpedance || "";
        document.getElementById("outputImpedance").value =
          product.outputImpedance || "";
        document.getElementById("mainPowerSupply").value =
          product.mainPowerSupply || "";
        document.getElementById("frequencyResponseRange").value =
          product.frequencyResponseRange || "";
        document.getElementById("powerFR").value = product.powerFR || "";
        document.getElementById("AMPFrequencyLoad").value =
          product.AMPFrequencyLoad || "";
        document.getElementById("stereo8ohm").value = product.stereo8ohm || "";
        document.getElementById("stereo4ohm").value = product.stereo4ohm || "";
        document.getElementById("slewRate").value = product.slewRate || "";
        document.getElementById("dynamicRange").value =
          product.dynamicRange || "";
        document.getElementById("voltageGain").value =
          product.voltageGain || "";
        document.getElementById("outputCircuitDesign").value =
          product.outputCircuitDesign || "";
        document.getElementById("powerSelection").value =
          product.powerSelection || "";
        document.getElementById("inputVoltage").value =
          product.inputVoltage || "";
        document.getElementById("speakerSpecifications").value =
          product.speakerSpecifications || "";
        document.getElementById("color").value = product.color || "";
        document.getElementById("waterproof").value = product.waterproof || "";
        document.getElementById("unitConfigure").value =
          product.unitConfigure || "";
        document.getElementById("installationOpeningSize").value =
          product.installationOpeningSize || "";
        document.getElementById("maximumOuterDiameter").value =
          product.maximumOuterDiameter || "";
        document.getElementById("withstandPower").value =
          product.withstandPower || "";
        document.getElementById("paintingTreatment").value =
          product.paintingTreatment || "";
        document.getElementById("suspensionPoint").value =
          product.suspensionPoint || "";
        document.getElementById("gain").value = product.gain || "";
      })
      .catch((error) => {
        console.error("Error fetching product details:", error);
      });
  }
  productDetails();

  const editForm = document.getElementById("edit-speaker-form");
  const submitButton = document.querySelector(".btn-submit-form");

  if (editForm) {
    editForm.addEventListener("submit", function (event) {
      event.preventDefault();
      submitButton.disabled = true;
      submitButton.textContent = "Updating...";

      const formData = new FormData(editForm);
      const data = {};
      formData.forEach((value, key) => {
        data[key] = value;
      });
      data.id = getNumberId;

      fetch(
        `https://cors-anywhere.herokuapp.com/${API_URL}/n9-speaker-series/edit`,
        {
          method: "PUT",
          headers: {
            Authorization: basicAuth,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          alert("Product updated successfully!");
          submitButton.disabled = false;
          submitButton.textContent = "Edit";
        })
        .catch((error) => {
          console.error("Error updating product:", error);
          alert("Failed to update the product.");
          submitButton.disabled = false;
          submitButton.textContent = "Edit";
        });
    });
  }
});
