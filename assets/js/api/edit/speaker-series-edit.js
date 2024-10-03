const API_URL = "https://tscproaudio.com/manager";
const urlParams = new URLSearchParams(window.location.search);
const speakerId = urlParams.get("id");
const getNumberId = parseInt(speakerId);
const basicAuth = localStorage.getItem("basicAuth");

document.addEventListener("DOMContentLoaded", function () {
  function productDetails() {
    fetch(`${API_URL}/speakers-series/${speakerId}`)
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

  const editForm = document.getElementById("edit-series-speaker");
  const submitButton = document.querySelector(".btn-edit-speaker");

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
        `https://cors-anywhere.herokuapp.com/${API_URL}/speakers-series/edit`,
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
