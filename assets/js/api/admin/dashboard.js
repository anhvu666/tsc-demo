const API_URL = "https://tscproaudio.com/manager/count/product";

document.addEventListener("DOMContentLoaded", function () {
  const totalMicro = document.querySelector(".total-micro");
  const totalAmplifier = document.querySelector(".total-amplifier");
  const totalMixer = document.querySelector(".total-mixer");
  const totalSpeaker = document.querySelector(".total-speaker");

  function fetchListProduct() {
    fetch(`${API_URL}`)
      .then((res) => res.json())
      .then((data) => {
        totalMicro.innerHTML = `<span class="text-white fs-2">${data.map.microTsc}</span>`;
        totalAmplifier.innerHTML = `<span class="text-white fs-2">${data.map.powerAmplifierTsc}</span>`;
        totalMixer.innerHTML = `<span class="text-white fs-2">${data.map.mixerTsc}</span>`;
        totalSpeaker.innerHTML = `<span class="text-white fs-2">${data.map.n9SpeakerTsc}</span>`;
      })
      .catch((error) => console.log("Error fetching products:", error));
  }
  fetchListProduct();
});
