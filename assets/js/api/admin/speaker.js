const API_URL = "https://tscproaudio.com/manager";
const successToast = new bootstrap.Toast(".toast-success");
const failToast = new bootstrap.Toast(".toast-fail");

const basicAuth = localStorage.getItem("basicAuth");

document.addEventListener("DOMContentLoaded", function () {
  const listProduct = document.querySelector(".dataTable tbody");
  const pagination = document.getElementById("list-pagination");
  const searchButton = document.getElementById("searchSpeakerBtn");
  const searchInput = document.getElementById("searchSpeaker");

  let currentPage = 1;
  const productsPerPage = 15;

  async function fetchListProduct(page) {
    listProduct.innerHTML = `<tr><td colspan="4" class="text-center">Loading</td></tr>`;
    try {
      const res = await fetch(
        `${API_URL}/n9-speaker-series/all?page=${
          page - 1
        }&size=${productsPerPage}`
      );
      const data = await res.json();

      const listSpeaker = data.content;
      const totalProducts = data.total;
      listProduct.innerHTML = "";

      if (listSpeaker.length === 0) {
        listProduct.innerHTML =
          '<tr style="height: 200px"><td colspan="4" style="padding-top:55px" class="text-center fs-4">No data<img width="100" height="100" src="/public/images/svg/box.svg" alt="box-icon" /></td></tr>';
        pagination.style.display = "none";
        return;
      }

      listSpeaker.forEach((product, index) => {
        const list = `
          <tr data-product-id="${product.id}">
            <th class="align-middle">${
              (currentPage - 1) * productsPerPage + index + 1
            }</th>
            <td class="align-middle">${product.n9SpeakerSeriesName}</td>
            <td class="align-middle">
            <img width="100" height="40" src="${product.imgId}" alt="${
          product.n9SpeakerSeriesName
        }" />
            </td>
            <td class="text-truncate align-middle" style="max-width: 200px">
              <div class="d-inline-block text-truncate" style="max-width: 100%">
                ${product.systemDescription || "No description available"}
              </div>
            </td>
            <td>
              <div>
                <a 
                href="/tscshop/pages/admin/edit-form/speaker-edit.html?id=${
                  product.id
                }" 
                type="button" class="btn btn-success btn-sm">
                Edit
                </a>
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
  async function searchProducts(keyword) {
    listProduct.innerHTML = `<tr><td colspan="4" class="text-center">Loading</td></tr>`;
    try {
      const res = await fetch(
        `${API_URL}/n9-speaker-series/find-by-keyword/${keyword}`
      );
      const data = await res.json();

      const listSpeaker = data.content || data;
      listProduct.innerHTML = "";

      if (listSpeaker.length === 0) {
        listProduct.innerHTML =
          '<tr style="height: 200px"><td colspan="4" style="padding-top:55px" class="text-center fs-4">No data<img width="100" height="100" src="/public/images/svg/box.svg" alt="box-icon" /></td></tr>';
        return;
      }

      listSpeaker.forEach((product, index) => {
        const list = `
          <tr data-product-id="${product.id}">
            <th class="align-middle">${index + 1}</th>
            <td class="align-middle">${product.n9SpeakerSeriesName}</td>
            <td class="align-middle">
            <img width="100" height="40" src="${product.imgId}" alt="${
          product.n9SpeakerSeriesName
        }" />
            </td>
            <td class="text-truncate align-middle" style="max-width: 200px">
              <div class="d-inline-block text-truncate" style="max-width: 100%">
                ${product.systemDescription || "No description available"}
              </div>
            </td>
            <td>
              <div>
                <a 
                href="/tscshop/pages/admin/edit-form/speaker-edit.html?id=${
                  product.id
                }" 
                type="button" class="btn btn-success btn-sm">
                Edit
                </a>
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

      deleteProduct();
    } catch (error) {
      listProduct.innerHTML =
        '<tr><td colspan="4" class="text-center">Error fetching products. Please try again later.</td></tr>';
      console.log("Error searching products:", error);
    }
  }

  searchButton.addEventListener("click", function () {
    const keyword = searchInput.value;
    if (keyword) {
      searchProducts(keyword);
    }
  });

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
            `https://cors-anywhere.herokuapp.com/${API_URL}/n9-speaker-series/delete/${productId}`,
            {
              method: "DELETE",
              headers: {
                Authorization: basicAuth,
              },
            }
          );

          if (response.ok) {
            alert("Delete success");
            fetchListProduct(currentPage);
          } else {
            alert("Delete failed");
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

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("create-speaker-form");

  form.addEventListener("submit", async function (event) {
    event.preventDefault();
    const formData = new FormData(form);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });

    try {
      const response = await fetch(
        `https://cors-anywhere.herokuapp.com/${API_URL}/n9-speaker-series/create`,
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
    } catch (error) {
      failToast.show();
      console.error("Error:", error);
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("create-img-speaker")
    .addEventListener("submit", async function (event) {
      event.preventDefault();

      const imageInput = document.getElementById("file");
      const file = imageInput.files[0];

      if (file && !["image/png", "image/jpeg"].includes(file.type)) {
        alert("Only PNG and JPG files are allowed.");
        return;
      }

      const form = event.target;
      const formData = new FormData(form);

      try {
        const response = await fetch(
          `https://cors-anywhere.herokuapp.com/https://tscproaudio.com/upload/n9-speakers`,
          {
            method: "POST",
            headers: {
              Authorization: basicAuth,
            },
            body: formData,
          }
        );
        const contentType = response.headers.get("Content-Type");

        let result;
        if (contentType && contentType.includes("application/json")) {
          result = await response.json();
        } else {
          result = await response.text();
        }
        if (!response.ok) {
          const errorData = await response.json();
          failToast.show();
          console.error("Error Details:", errorData);
          throw new Error("Failed to create mixer.");
        }

        successToast.show();
        console.log("Success:", result);
      } catch (error) {
        failToast.show();
        console.error("Error:", error);
      }
    });
});
