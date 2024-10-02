const API_URL = "https://tscproaudio.com/manager";
const urlParams = new URLSearchParams(window.location.search);
const mixerId = urlParams.get("id");
const getNumberId = parseInt(mixerId);
const basicAuth = localStorage.getItem("basicAuth");

document.addEventListener("DOMContentLoaded", function () {
  function productDetails() {
    fetch(`${API_URL}/mixer/${mixerId}`)
      .then((response) => response.json())
      .then((product) => {
        document.getElementById("modelMixer").value = product.modelMixer || "";
        document.getElementById("imgId").value = product.imgId || "";

        document.getElementById("description").value =
          product.description || "";
        document.getElementById("channel").value = product.channel || "";
        document.getElementById("channelEQ").value = product.channelEQ || "";
        document.getElementById("AUX").value = product.AUX || "";
        document.getElementById("returnMixer").value =
          product.returnMixer || "";
        document.getElementById("effects").value = product.effects || "";
        document.getElementById("mainOut").value = product.mainOut || "";
        document.getElementById("groupsMixer").value =
          product.groupsMixer || "";
        document.getElementById("phantomPower").value =
          product.phantomPower || "";
        document.getElementById("usbPlayer").value = product.usbPlayer || "";
      })
      .catch((error) => {
        console.error("Error fetching product details:", error);
      });
  }
  productDetails();

  const submitButton = document.querySelector(".btn-submit-form");

  document
    .getElementById("edit-mixer-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      submitButton.disabled = true;
      submitButton.textContent = "Updating...";

      const formData = {
        id: getNumberId,
        modelMixer: document.getElementById("modelMixer").value,
        imgId: document.getElementById("imgId").value,
        description: document.getElementById("description").value,
        channel: document.getElementById("channel").value,
        channelEQ: document.getElementById("channelEQ").value,
        AUX: document.getElementById("AUX").value,
        returnMixer: document.getElementById("returnMixer").value,
        effects: document.getElementById("effects").value,
        mainOut: document.getElementById("mainOut").value,
        groupsMixer: document.getElementById("groupsMixer").value,
        phantomPower: document.getElementById("phantomPower").value,
        usbPlayer: document.getElementById("usbPlayer").value,
      };

      fetch(`https://cors-anywhere.herokuapp.com/${API_URL}/mixer/edit`, {
        method: "PUT",
        headers: {
          Authorization: basicAuth,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
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
});
