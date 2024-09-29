const API_URL = "https://tscproaudio.com/manager";
const successToast = new bootstrap.Toast(".toast-success");
const failToast = new bootstrap.Toast(".toast-fail");

const username = "admin";
const password = "123456@";
const basicAuth = "Basic " + btoa(username + ":" + password);

document.addEventListener("DOMContentLoaded", function () {
  const listProduct = document.querySelector(".dataTable tbody");
  const pagination = document.getElementById("list-pagination");

  let currentPage = 1;
  const productsPerPage = 10;

  async function fetchListProduct(page) {
    listProduct.innerHTML = `<tr><td colspan="4" class="text-center">Loading</td></tr>`;
    try {
      const res = await fetch(
        `${API_URL}/mixer/all?page=${page - 1}&size=${productsPerPage}`
      );
      const data = await res.json();

      const listMicro = data.content;
      const totalProducts = data.total;
      listProduct.innerHTML = "";

      if (listMicro.length === 0) {
        listProduct.innerHTML =
          '<tr style="height: 200px"><td colspan="4" style="padding-top:55px" class="text-center fs-4">No data<img width="100" height="100" src="/public/images/svg/box.svg" alt="box-icon" /></td></tr>';
        pagination.style.display = "none";
        return;
      }

      listMicro.forEach((product, index) => {
        const list = `
          <tr data-product-id="${product.id}">
            <th class="align-middle">${
              (currentPage - 1) * productsPerPage + index + 1
            }</th>
            <td class="align-middle">${product.modelMixer}</td>
            <td class="align-middle">
            <img width="100" height="40" src="${product.imgId}" alt="${
          product.modelMixer
        }" />
            </td>
            <td class="text-truncate align-middle" style="max-width: 200px">
              <div class="d-inline-block text-truncate" style="max-width: 100%">
                ${product.description || "No description available"}
              </div>
            </td>
            <td>
              <div>
                <button type="button" class="btn btn-success btn-sm">Edit</button>
                <button type="button" class="btn btn-danger btn-sm deleteButton" data-bs-toggle="popover" data-bs-html="true"  
                    data-product-id="${product.id}">
                Delete
                </button>
              </div>
            </td>
          </tr>
        `;
        listProduct.insertAdjacentHTML("beforeend", list);
      });

      const totalPages = Math.ceil(totalProducts / productsPerPage);
      displayPagination(totalPages, page);
      deleteProduct();
    } catch (error) {
      listProduct.innerHTML =
        '<tr><td colspan="4" class="text-center">Error fetching products. Please try again later.</td></tr>';
      console.log("Error fetching products:", error);
    }
  }

  function displayPagination(totalPages, currentPage) {
    if (totalPages <= 1) {
      pagination.style.display = "none";
      return;
    } else {
      pagination.style.display = "block";
    }

    pagination.innerHTML = "";

    const prevButton = document.createElement("button");
    prevButton.textContent = "Previous";
    prevButton.classList.add("page-btn");
    prevButton.disabled = currentPage === 1;
    prevButton.addEventListener("click", () => {
      if (currentPage > 1) fetchListProduct(currentPage - 1);
    });
    pagination.appendChild(prevButton);

    for (let i = 1; i <= totalPages; i++) {
      const pageButton = document.createElement("button");
      pageButton.textContent = i;
      pageButton.classList.add("page-btn");
      if (i === currentPage) {
        pageButton.classList.add("active");
      }
      pageButton.addEventListener("click", () => fetchListProduct(i));
      pagination.appendChild(pageButton);
    }

    const nextButton = document.createElement("button");
    nextButton.textContent = "Next";
    nextButton.classList.add("page-btn");
    nextButton.disabled = currentPage === totalPages;
    nextButton.addEventListener("click", () => {
      if (currentPage < totalPages) fetchListProduct(currentPage + 1);
    });
    pagination.appendChild(nextButton);
  }

  function deleteProduct() {
    const deleteButtons = document.querySelectorAll(".deleteButton");
    deleteButtons.forEach((button) => {
      button.addEventListener("click", async function () {
        const productId = this.getAttribute("data-product-id");

        const confirmation = confirm(
          "Are you sure you want to delete this product?"
        );
        if (!confirmation) return;

        try {
          const response = await fetch(
            `https://cors-anywhere.herokuapp.com/${API_URL}/mixer/delete/${productId}`,
            {
              method: "DELETE",
              headers: {
                Authorization: basicAuth,
              },
            }
          );

          if (response.ok) {
            successToast.show();
            fetchListProduct(currentPage);
          } else {
            failToast.show();
          }
        } catch (error) {
          console.error("Error deleting product:", error);
          alert("Error deleting product. Please try again.");
        }
      });
    });
  }

  fetchListProduct(currentPage);
});

//create

document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("create-mixer-form")
    .addEventListener("submit", async function (event) {
      event.preventDefault();

      const data = {
        modelMixer: document.getElementById("modelMixer").value,
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
      try {
        const response = await fetch(
          `https://cors-anywhere.herokuapp.com/${API_URL}/mixer/create`,
          {
            method: "POST",
            headers: {
              Authorization: basicAuth,
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          }
        );
        if (!response.ok) {
          const errorData = await response.json();
          console.error("Error Details:", errorData);
          failToast.show();
          throw new Error("Failed to create mixer.");
        }

        const result = await response.json();
        successToast.show();
        console.log(result);
      } catch (error) {
        failToast.show();
        console.error("Error:", error);
      }
    });
});
document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("create-img-form")
    .addEventListener("submit", async function (event) {
      event.preventDefault();

      const data = {
        modelMixer: document.getElementById("modelMixer").value,
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
      try {
        const response = await fetch(
          `https://cors-anywhere.herokuapp.com/${API_URL}/mixer/create`,
          {
            method: "POST",
            headers: {
              Authorization: basicAuth,
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          }
        );
        if (!response.ok) {
          const errorData = await response.json();
          failToast.show();
          console.error("Error Details:", errorData);
          throw new Error("Failed to create mixer.");
        }

        const result = await response.json();
        myToast.show();
        console.log(result);
      } catch (error) {
        failToast.show();
        console.error("Error:", error);
      }
    });
});
