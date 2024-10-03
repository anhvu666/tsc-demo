const API_URL = "https://tscproaudio.com/manager";
const urlParams = new URLSearchParams(window.location.search);
const mixerId = urlParams.get("id");
const getNumberId = parseInt(mixerId);
const basicAuth = localStorage.getItem("basicAuth");

document.addEventListener("DOMContentLoaded", function () {
  function productDetails() {
    fetch(`${API_URL}/mixer-series/${mixerId}`)
      .then((response) => response.json())
      .then((product) => {
        document.getElementById("seriesName").value = product.seriesName || "";
        document.getElementById("imgId").value = product.imgId || "";
      })
      .catch((error) => {
        console.error("Error fetching product details:", error);
      });
  }
  productDetails();

  const submitButton = document.querySelector(".btn-edit-mixer");

  document
    .getElementById("edit-series-mixer")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      submitButton.disabled = true;
      submitButton.textContent = "Updating...";

      const formData = {
        id: getNumberId,
        seriesName: document.getElementById("seriesName").value,
        imgId: document.getElementById("imgId").value,
      };

      fetch(
        `https://cors-anywhere.herokuapp.com/${API_URL}/mixer-series/edit`,
        {
          method: "PUT",
          headers: {
            Authorization: basicAuth,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      )
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
