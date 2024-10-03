const API_URL = "https://tscproaudio.com/manager";
const urlParams = new URLSearchParams(window.location.search);
const amplifierId = urlParams.get("id");
const getNumberId = parseInt(amplifierId);
const basicAuth = localStorage.getItem("basicAuth");

document.addEventListener("DOMContentLoaded", function () {
  function productDetails() {
    fetch(`${API_URL}/power-ampli-series/${amplifierId}`)
      .then((response) => response.json())
      .then((product) => {
        document.getElementById("imgId").value = product.imgId || "";
        document.getElementById("seriesName").value = product.seriesName || "";
      })
      .catch((error) => {
        console.error("Error fetching product details:", error);
      });
  }
  productDetails();

  const submitButton = document.querySelector(".btn-edit-amplifier");

  const editForm = document.getElementById("edit-series-amplifier");
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
        `https://cors-anywhere.herokuapp.com/${API_URL}/power-ampli-series/edit`,
        {
          method: "PUT",
          headers: {
            Authorization: basicAuth,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
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
  }
});
