const API_URL = "https://tscproaudio.com/manager";
const basicAuth = localStorage.getItem("basicAuth");

//Micro

document.addEventListener("DOMContentLoaded", function () {
  const listProductMicro = document.querySelector(".dataTable-micro tbody");
  const pagination = document.getElementById("list-pagination-micro");

  let currentPage = 1;
  const productsPerPage = 15;

  async function fetchListProductMicro(page) {
    if (listProductMicro) {
      listProductMicro.innerHTML = `<tr><td colspan="4" class="text-center">Loading</td></tr>`;
    }
    try {
      const res = await fetch(
        `${API_URL}/micro-tsc-series/all?page=${
          page - 1
        }&size=${productsPerPage}`
      );
      const data = await res.json();

      const listMicro = data.content;
      const totalProducts = data.total;
      listProductMicro.innerHTML = "";

      if (listMicro.length === 0) {
        if (listProductMicro) {
          listProductMicro.innerHTML =
            '<tr style="height: 200px"><td colspan="4" style="padding-top:55px" class="text-center fs-4">No data<img width="100" height="100" src="/public/images/svg/box.svg" alt="box-icon" /></td></tr>';
        }
        pagination.style.display = "none";
        return;
      }

      listMicro.forEach((product, index) => {
        const list = `
            <tr data-product-id="${product.id}">
              <th class="align-middle">${
                (currentPage - 1) * productsPerPage + index + 1
              }</th>
              <td class="align-middle">${product.seriesName}</td>
              <td class="align-middle">
              <img width="100" height="40" src="${product.imgId}" alt="${
          product.seriesName
        }" />
              </td>
              <td>
                <div>
                  <a 
                  href="/tscshop/pages/admin/edit-form/micro-series-edit.html?id=${
                    product.id
                  }" 
                  type="button" class="btn btn-success btn-sm">
                  Edit
                  </a>
                  <button type="button" class="btn btn-danger btn-sm deleteButtonMicro" data-bs-toggle="popover" data-bs-html="true"  
                      data-product-id="${product.id}">
                  Delete
                  </button>
                </div>
              </td>
            </tr>
          `;
        listProductMicro.insertAdjacentHTML("beforeend", list);
      });

      const totalPages = Math.ceil(totalProducts / productsPerPage);
      displayPagination(totalPages, page);
      deleteProduct();
    } catch (error) {
      if (listProductMicro) {
        listProductMicro.innerHTML =
          '<tr><td colspan="4" class="text-center">Error fetching products. Please try again later.</td></tr>';
      }
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
      if (currentPage > 1) fetchListProductMicro(currentPage - 1);
    });
    pagination.appendChild(prevButton);

    for (let i = 1; i <= totalPages; i++) {
      const pageButton = document.createElement("button");
      pageButton.textContent = i;
      pageButton.classList.add("page-btn");
      if (i === currentPage) {
        pageButton.classList.add("active");
      }
      pageButton.addEventListener("click", () => fetchListProductMicro(i));
      pagination.appendChild(pageButton);
    }

    const nextButton = document.createElement("button");
    nextButton.textContent = "Next";
    nextButton.classList.add("page-btn");
    nextButton.disabled = currentPage === totalPages;
    nextButton.addEventListener("click", () => {
      if (currentPage < totalPages) fetchListProductMicro(currentPage + 1);
    });
    pagination.appendChild(nextButton);
  }

  function deleteProduct() {
    const deleteButtons = document.querySelectorAll(".deleteButtonMicro");
    deleteButtons.forEach((button) => {
      button.addEventListener("click", async function () {
        const productId = this.getAttribute("data-product-id");
        const originalText = this.textContent;

        const confirmation = confirm(
          "Are you sure you want to delete this series?"
        );
        if (!confirmation) return;
        this.textContent = "Deleting...";
        this.disabled = true;

        try {
          const response = await fetch(
            `https://cors-anywhere.herokuapp.com/${API_URL}/micro-tsc-series/delete/${productId}`,
            {
              method: "DELETE",
              headers: {
                Authorization: basicAuth,
              },
            }
          );

          if (response.ok) {
            alert("Delete success");
            fetchListProductMicro(currentPage);
          } else {
            const errorMessage = await response.text();
            alert(`Delete failed: ${errorMessage}`);
          }
        } catch (error) {
          console.error("Error deleting series:", error);
          alert("Error deleting series. Please try again.");
        } finally {
          this.textContent = originalText;
          this.disabled = false;
        }
      });
    });
  }

  fetchListProductMicro(currentPage);
});

//mixer

document.addEventListener("DOMContentLoaded", function () {
  const listProductMixer = document.querySelector(".dataTable-mixer tbody");
  const pagination = document.getElementById("list-pagination-mixer");

  let currentPage = 1;
  const productsPerPage = 10;

  async function fetchListProductMixer(page) {
    listProductMixer.innerHTML = `<tr><td colspan="4" class="text-center">Loading</td></tr>`;
    try {
      const res = await fetch(
        `${API_URL}/mixer-series/all?page=${page - 1}&size=${productsPerPage}`
      );
      const data = await res.json();

      const listMixer = data.content;
      const totalProducts = data.total;
      listProductMixer.innerHTML = "";

      if (listMixer.length === 0) {
        listProductMixer.innerHTML =
          '<tr style="height: 200px"><td colspan="4" style="padding-top:55px" class="text-center fs-4">No data<img width="100" height="100" src="/public/images/svg/box.svg" alt="box-icon" /></td></tr>';
        pagination.style.display = "none";
        return;
      }

      listMixer.forEach((product, index) => {
        const list = `
            <tr data-product-id="${product.id}">
              <th class="align-middle">${
                (currentPage - 1) * productsPerPage + index + 1
              }</th>
              <td class="align-middle">${product.seriesName}</td>
              <td class="align-middle">
              <img width="100" height="40" src="${product.imgId}" alt="${
          product.seriesName
        }" />
              </td>
              <td>
                <div>
                  <a 
                  href="/tscshop/pages/admin/edit-form/mixer-series-edit.html?id=${
                    product.id
                  }" 
                  type="button" class="btn btn-success btn-sm">
                  Edit
                  </a>
                  <button type="button" class="btn btn-danger btn-sm deleteButtonMixer" data-bs-toggle="popover" data-bs-html="true"  
                      data-product-id="${product.id}">
                  Delete
                  </button>
                </div>
              </td>
            </tr>
          `;
        listProductMixer.insertAdjacentHTML("beforeend", list);
      });

      const totalPages = Math.ceil(totalProducts / productsPerPage);
      displayPagination(totalPages, page);
      deleteProduct();
    } catch (error) {
      listProductMixer.innerHTML =
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
      if (currentPage > 1) fetchListProductMixer(currentPage - 1);
    });
    pagination.appendChild(prevButton);

    for (let i = 1; i <= totalPages; i++) {
      const pageButton = document.createElement("button");
      pageButton.textContent = i;
      pageButton.classList.add("page-btn");
      if (i === currentPage) {
        pageButton.classList.add("active");
      }
      pageButton.addEventListener("click", () => fetchListProductMixer(i));
      pagination.appendChild(pageButton);
    }

    const nextButton = document.createElement("button");
    nextButton.textContent = "Next";
    nextButton.classList.add("page-btn");
    nextButton.disabled = currentPage === totalPages;
    nextButton.addEventListener("click", () => {
      if (currentPage < totalPages) fetchListProductMixer(currentPage + 1);
    });
    pagination.appendChild(nextButton);
  }

  function deleteProduct() {
    const deleteButtons = document.querySelectorAll(".deleteButtonMixer");
    deleteButtons.forEach((button) => {
      button.addEventListener("click", async function () {
        const productId = this.getAttribute("data-product-id");
        const originalText = this.textContent;

        const confirmation = confirm(
          "Are you sure you want to delete this series?"
        );
        if (!confirmation) return;
        this.textContent = "Deleting...";
        this.disabled = true;

        try {
          const response = await fetch(
            `https://cors-anywhere.herokuapp.com/${API_URL}/mixer-series/delete/${productId}`,
            {
              method: "DELETE",
              headers: {
                Authorization: basicAuth,
              },
            }
          );

          if (response.ok) {
            alert("Delete success");
            fetchListProductMixer(currentPage);
          } else {
            const errorMessage = await response.text(); // Fetch error message if available
            alert(`Delete failed: ${errorMessage}`);
          }
        } catch (error) {
          console.error("Error deleting series:", error);
          alert("Error deleting series. Please try again.");
        } finally {
          this.textContent = originalText;
          this.disabled = false;
        }
      });
    });
  }
  fetchListProductMixer(currentPage);
});

//amplifier

document.addEventListener("DOMContentLoaded", function () {
  const listProductAmplifier = document.querySelector(
    ".dataTable-amplifier tbody"
  );
  const pagination = document.getElementById("list-pagination-amplifier");

  let currentPage = 1;
  const productsPerPage = 15;

  async function fetchListProductAmplifier(page) {
    listProductAmplifier.innerHTML = `<tr><td colspan="4" class="text-center">Loading</td></tr>`;
    try {
      const res = await fetch(
        `${API_URL}/power-ampli-series/all?page=${
          page - 1
        }&size=${productsPerPage}`
      );
      const data = await res.json();

      const listAmplifier = data.content;
      const totalProducts = data.total;
      listProductAmplifier.innerHTML = "";

      if (listAmplifier.length === 0) {
        listProductAmplifier.innerHTML =
          '<tr style="height: 200px"><td colspan="4" style="padding-top:55px" class="text-center fs-4">No data<img width="100" height="100" src="/public/images/svg/box.svg" alt="box-icon" /></td></tr>';
        pagination.style.display = "none";
        return;
      }

      listAmplifier.forEach((product, index) => {
        const list = `
            <tr data-product-id="${product.id}">
              <th class="align-middle">${
                (currentPage - 1) * productsPerPage + index + 1
              }</th>
              <td class="align-middle">${product.seriesName}</td>
              <td class="align-middle">
              <img width="100" height="40" src="${product.imgId}" alt="${
          product.seriesName
        }" />
              </td>
              <td>
                <div>
                  <a 
                  href="/tscshop/pages/admin/edit-form/amplifier-series-edit.html?id=${
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
        listProductAmplifier.insertAdjacentHTML("beforeend", list);
      });

      const totalPages = Math.ceil(totalProducts / productsPerPage);
      displayPagination(totalPages, page);
      deleteProduct();
    } catch (error) {
      listProductAmplifier.innerHTML =
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
      if (currentPage > 1) fetchListProductAmplifier(currentPage - 1);
    });
    pagination.appendChild(prevButton);

    for (let i = 1; i <= totalPages; i++) {
      const pageButton = document.createElement("button");
      pageButton.textContent = i;
      pageButton.classList.add("page-btn");
      if (i === currentPage) {
        pageButton.classList.add("active");
      }
      pageButton.addEventListener("click", () => fetchListProductAmplifier(i));
      pagination.appendChild(pageButton);
    }

    const nextButton = document.createElement("button");
    nextButton.textContent = "Next";
    nextButton.classList.add("page-btn");
    nextButton.disabled = currentPage === totalPages;
    nextButton.addEventListener("click", () => {
      if (currentPage < totalPages) fetchListProductAmplifier(currentPage + 1);
    });
    pagination.appendChild(nextButton);
  }

  function deleteProduct() {
    const deleteButtons = document.querySelectorAll(".deleteButtonAmplifier");
    deleteButtons.forEach((button) => {
      button.addEventListener("click", async function () {
        const productId = this.getAttribute("data-product-id");
        const originalText = this.textContent;

        const confirmation = confirm(
          "Are you sure you want to delete this series?"
        );
        if (!confirmation) return;
        this.textContent = "Deleting...";
        this.disabled = true;

        try {
          const response = await fetch(
            `https://cors-anywhere.herokuapp.com/${API_URL}/power-ampli-series/delete/${productId}`,
            {
              method: "DELETE",
              headers: {
                Authorization: basicAuth,
              },
            }
          );

          if (response.ok) {
            alert("Delete success");
            fetchListProductAmplifier(currentPage);
          } else {
            const errorMessage = await response.text(); // Fetch error message if available
            alert(`Delete failed: ${errorMessage}`);
          }
        } catch (error) {
          console.error("Error deleting series:", error);
          alert("Error deleting series. Please try again.");
        } finally {
          this.textContent = originalText;
          this.disabled = false;
        }
      });
    });
  }

  fetchListProductAmplifier(currentPage);
});

//Speaker

document.addEventListener("DOMContentLoaded", function () {
  const listProductSpeaker = document.querySelector(".dataTable-speaker tbody");
  const pagination = document.getElementById("list-pagination-speaker");

  let currentPage = 1;
  const productsPerPage = 15;

  async function fetchListProductSpeaker(page) {
    listProductSpeaker.innerHTML = `<tr><td colspan="4" class="text-center">Loading</td></tr>`;
    try {
      const res = await fetch(
        `${API_URL}/speakers-series/all?page=${
          page - 1
        }&size=${productsPerPage}`
      );
      const data = await res.json();

      const listSpeaker = data.content;
      const totalProducts = data.total;
      listProductSpeaker.innerHTML = "";

      if (listSpeaker.length === 0) {
        listProductSpeaker.innerHTML =
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
              <td class="align-middle">${product.seriesName}</td>
              <td class="align-middle">
              <img width="100" height="40" src="${product.imgId}" alt="${
          product.seriesName
        }" />
              </td>
              <td>
                <div>
                  <a 
                  href="/tscshop/pages/admin/edit-form/speaker-series-edit.html?id=${
                    product.id
                  }" 
                  type="button" class="btn btn-success btn-sm">
                  Edit
                  </a>
                  <button type="button" class="btn btn-danger btn-sm deleteButtonSpeaker" data-bs-toggle="popover" data-bs-html="true" 
                  data-product-id="${product.id}">
                  Delete
                  </button>
                </div>
              </td>
            </tr>
          `;
        listProductSpeaker.insertAdjacentHTML("beforeend", list);
      });

      const totalPages = Math.ceil(totalProducts / productsPerPage);
      displayPagination(totalPages, page);
      deleteProduct();
    } catch (error) {
      listProductSpeaker.innerHTML =
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
      if (currentPage > 1) fetchListProductSpeaker(currentPage - 1);
    });
    pagination.appendChild(prevButton);

    for (let i = 1; i <= totalPages; i++) {
      const pageButton = document.createElement("button");
      pageButton.textContent = i;
      pageButton.classList.add("page-btn");
      if (i === currentPage) {
        pageButton.classList.add("active");
      }
      pageButton.addEventListener("click", () => fetchListProductSpeaker(i));
      pagination.appendChild(pageButton);
    }

    const nextButton = document.createElement("button");
    nextButton.textContent = "Next";
    nextButton.classList.add("page-btn");
    nextButton.disabled = currentPage === totalPages;
    nextButton.addEventListener("click", () => {
      if (currentPage < totalPages) fetchListProductSpeaker(currentPage + 1);
    });
    pagination.appendChild(nextButton);
  }

  function deleteProduct() {
    const deleteButtons = document.querySelectorAll(".deleteButtonSpeaker");
    deleteButtons.forEach((button) => {
      button.addEventListener("click", async function () {
        const productId = this.getAttribute("data-product-id");
        const originalText = this.textContent;

        const confirmation = confirm(
          "Are you sure you want to delete this series?"
        );
        if (!confirmation) return;

        this.textContent = "Deleting...";
        this.disabled = true;

        try {
          const response = await fetch(
            `https://cors-anywhere.herokuapp.com/${API_URL}/speakers-series/delete/${productId}`,
            {
              method: "DELETE",
              headers: {
                Authorization: basicAuth,
              },
            }
          );

          if (response.ok) {
            alert("Delete success");
            fetchListProductSpeaker(currentPage);
          } else {
            const errorMessage = await response.text(); // Fetch error message if available
            alert(`Delete failed: ${errorMessage}`);
          }
        } catch (error) {
          console.error("Error deleting series:", error);
          alert("Error deleting series. Please try again.");
        } finally {
          this.textContent = originalText;
          this.disabled = false;
        }
      });
    });
  }

  fetchListProductSpeaker(currentPage);
});
