document.addEventListener("DOMContentLoaded", function () {
    const mapContainer = document.getElementById("leaflet-map");
    if (mapContainer && typeof L !== "undefined") {
      const map = L.map("leaflet-map").setView([40.4168, -3.7038], 5); // España
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
      }).addTo(map);
    }
  });
  