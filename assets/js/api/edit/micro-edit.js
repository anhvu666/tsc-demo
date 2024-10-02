const API_URL = "https://tscproaudio.com/manager";
const urlParams = new URLSearchParams(window.location.search);
const microId = urlParams.get("id");
const getNumberId = parseInt(microId);
const basicAuth = localStorage.getItem("basicAuth");

document.addEventListener("DOMContentLoaded", function () {
  function productDetails() {
    fetch(`${API_URL}/micro/${microId}`)
      .then((response) => response.json())
      .then((product) => {
        document.getElementById("description").value =
          product.description || "";
        document.getElementById("imgId").value = product.imgId || "";
        document.getElementById("microName").value = product.microName || "";
        document.getElementById("frequencyQuantity").value =
          product.frequencyQuantity || "";
        document.getElementById("sSourceNRatio").value =
          product.sSourceNRatio || "";
        document.getElementById("frequencyRangeCha").value =
          product.frequencyRangeCha || "";
        document.getElementById("frequencyRangeChb").value =
          product.frequencyRangeChb || "";
        document.getElementById("signalToNoiseRatio").value =
          product.signalToNoiseRatio || "";
        document.getElementById("totalHarmonicDistortion").value =
          product.totalHarmonicDistortion || "";
        document.getElementById("modulationMode").value =
          product.modulationMode || "";
        document.getElementById("workingDistance").value =
          product.workingDistance || "";
        document.getElementById("frequencyBandwidth").value =
          product.frequencyBandwidth || "";
        document.getElementById("channelInterval").value =
          product.channelInterval || "";
        document.getElementById("maxDeviation").value =
          product.maxDeviation || "";
        document.getElementById("frequencyStability").value =
          product.frequencyStability || "";
        document.getElementById("oscillationModeReceiverParam").value =
          product.oscillationModeReceiverParam || "";
        document.getElementById("modulation").value = product.modulation || "";
        document.getElementById("sensitivity").value =
          product.sensitivity || "";
        document.getElementById("sensitivityAdjustment").value =
          product.sensitivityAdjustment || "";
        document.getElementById("powerSupplyMode").value =
          product.powerSupplyMode || "";
        document.getElementById("antennaAccess").value =
          product.antennaAccess || "";
        document.getElementById("midFrequence").value =
          product.midFrequence || "";
        document.getElementById("spuriousSuppression").value =
          product.spuriousSuppression || "";
        document.getElementById("maxOutputElectricalLevel").value =
          product.maxOutputElectricalLevel || "";
        document.getElementById("outputPower").value =
          product.outputPower || "";
        document.getElementById("directivity").value =
          product.directivity || "";
        document.getElementById("frequencyResponse").value =
          product.frequencyResponse || "";
        document.getElementById("powerSupply").value =
          product.powerSupply || "";
        document.getElementById("oscillationModeTransmitterParam").value =
          product.oscillationModeTransmitterParam || "";
        document.getElementById("transmitterType").value =
          product.transmitterType || "";
        document.getElementById("pipeBodyMaterial").value =
          product.pipeBodyMaterial || "";
        document.getElementById("batteryLifeTime").value =
          product.batteryLifeTime || "";
        document.getElementById("channels").value = product.channels || "";
      })
      .catch((error) => {
        console.error("Error fetching product details:", error);
      });
  }
  productDetails();

  const submitButton = document.querySelector(".btn-submit-form");

  const editForm = document.getElementById("edit-micro-form");
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

      fetch(`https://cors-anywhere.herokuapp.com/${API_URL}/micro/edit`, {
        method: "PUT",
        headers: {
          Authorization: basicAuth,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Update successful:", data);
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
