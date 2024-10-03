const API_URL = "https://tscproaudio.com/manager";
const basicAuth = localStorage.getItem("basicAuth");

//micro

document.addEventListener("DOMContentLoaded", function () {
  const createMicro = document.getElementById("create-series-micro");
  const submitButton = document.querySelector(".btn-series-micro");

  if (createMicro) {
    createMicro.addEventListener("submit", async function (event) {
      event.preventDefault();

      submitButton.disabled = true;
      submitButton.textContent = "Creating...";

      const data = {
        seriesName: document.getElementById("seriesNameMicro").value,
      };
      try {
        const response = await fetch(
          `https://cors-anywhere.herokuapp.com/${API_URL}/micro-tsc-series/create`,
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
          throw new Error("Failed to create series micro.");
        }

        const result = await response.json();
        alert("Create series micro name successfully!");
        submitButton.disabled = false;
        submitButton.textContent = "Add";
      } catch (error) {
        alert("Failed to create series micro name!");
        console.error("Error:", error);
        submitButton.disabled = false;
        submitButton.textContent = "Add";
      }
    });
  }
});

// amplifier

document.addEventListener("DOMContentLoaded", function () {
  const createAmplifier = document.getElementById("create-series-amplifier");
  const submitButton = document.querySelector(".btn-series-amplifier");

  if (createAmplifier) {
    createAmplifier.addEventListener("submit", async function (event) {
      event.preventDefault();

      submitButton.disabled = true;
      submitButton.textContent = "Creating...";

      const data = {
        seriesName: document.getElementById("seriesNameAmplifier").value,
      };
      try {
        const response = await fetch(
          `https://cors-anywhere.herokuapp.com/${API_URL}/power-ampli-series/create`,
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
          throw new Error("Failed to create series amplifier.");
        }

        const result = await response.json();
        alert("Create series amplifier name successfully!");
        submitButton.disabled = false;
        submitButton.textContent = "Add";
      } catch (error) {
        alert("Failed to create series amplifier name!");
        console.error("Error:", error);
        submitButton.disabled = false;
        submitButton.textContent = "Add";
      }
    });
  }
});

//speaker

document.addEventListener("DOMContentLoaded", function () {
  const createSpeaker = document.getElementById("create-series-speaker");
  const submitButton = document.querySelector(".btn-series-speaker");

  if (createSpeaker) {
    createSpeaker.addEventListener("submit", async function (event) {
      event.preventDefault();

      submitButton.disabled = true;
      submitButton.textContent = "Creating...";

      const data = {
        seriesName: document.getElementById("seriesNameSpeaker").value,
      };
      try {
        const response = await fetch(
          `https://cors-anywhere.herokuapp.com/${API_URL}/speakers-series/create`,
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
          throw new Error("Failed to create series speaker.");
        }

        const result = await response.json();
        alert("Create series speaker name successfully!");
        submitButton.disabled = false;
        submitButton.textContent = "Add";
      } catch (error) {
        alert("Failed to create series speaker name!");
        console.error("Error:", error);
        submitButton.disabled = false;
        submitButton.textContent = "Add";
      }
    });
  }
});

//mixer

document.addEventListener("DOMContentLoaded", function () {
  const createMixer = document.getElementById("create-series-mixer");
  const submitButton = document.querySelector(".btn-series-mixer");

  if (createMixer) {
    createMixer.addEventListener("submit", async function (event) {
      event.preventDefault();

      submitButton.disabled = true;
      submitButton.textContent = "Creating...";

      const data = {
        seriesName: document.getElementById("seriesNameMixer").value,
      };
      try {
        const response = await fetch(
          `https://cors-anywhere.herokuapp.com/${API_URL}/mixer-series/create`,
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
          throw new Error("Failed to create series mixer.");
        }

        const result = await response.json();
        alert("Create series mixer name successfully!");
        submitButton.disabled = false;
        submitButton.textContent = "Add";
      } catch (error) {
        alert("Failed to create series mixer name!");
        console.error("Error:", error);
        submitButton.disabled = false;
        submitButton.textContent = "Add";
      }
    });
  }
});
