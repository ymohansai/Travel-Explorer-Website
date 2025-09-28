let morePlacesAdded = false;

// Show details of a selected place
function showDetails(place) {
  const details = {
    tirupati: `<h3>🙏 Tirupati Darshan</h3> ...`, 
    araku: `<h3>🏞 Araku Valley & Borra Caves</h3> ...`,
    vizag: `<h3>🌊 Vizag Beach Tour</h3> ...`,
    srisailam: `<h3>🛕 Srisailam Temple</h3> ...`,
    ramanarayanam: `<h3>🛕 Sri Ramanarayanam Temple</h3> ...`,
    amaravathi: `<h3>🏛 Amaravathi – Capital City</h3> ...`,
    rajahmundry: `<h3>🌉 Rajahmundry Tour</h3> ...`
  };

  document.getElementById("details").innerHTML =
    details[place] || `<p>Details not available.</p>`;
}

// Add more places dynamically
function addMorePlaces() {
  if (morePlacesAdded) return; // Prevent duplicates
  morePlacesAdded = true;

  const tourCards = document.getElementById("tourCards");
  const morePlaces = [
    { img: "Ramanarayanam_pic.png", title: "Sri Ramanarayanam Temple", price: "Starting @ Rs.2,999/-", id: "ramanarayanam", map: "https://..." },
    { img: "rajahmundry_pic.png", title: "Rajahmundry Tour", price: "Starting @ Rs.3,499/-", id: "rajahmundry", map: "https://..." },
    { img: "Srisailam_pic.jpg", title: "Srisailam Temple", price: "Starting @ Rs.2,799/-", id: "srisailam", map: "https://..." },
    { img: "Amaravathi_pic.png", title: "Amaravathi The Capital Andhra Pradesh", price: "Starting @ Rs.3,299/-", id: "amaravathi", map: "https://..." }
  ];

  morePlaces.forEach(place => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${place.img}" alt="${place.title}">
      <div class="card-content">
        <h3>${place.title}</h3>
        <p>${place.price}</p>
        <button onclick="showDetails('${place.id}')">View Details</button>
      </div>
      <div class="map-box">
        <iframe src="${place.map}" allowfullscreen="" loading="lazy"></iframe>
      </div>
    `;
    tourCards.appendChild(card);
  });

  document.querySelector(".view-more").style.display = "none";
}

// Close all places and reset
function closeAllPlaces() {
  const cards = document.querySelectorAll(".card");
  cards.forEach(card => card.style.display = "none");
  document.querySelector(".view-more").style.display = "block";
  document.getElementById("details").innerHTML = `<p>Click "View Details" on any destination to see more information here.</p>`;
  document.getElementById("search").value = "";
  morePlacesAdded = false;
}

// Filter destinations
function filterDestinations() {
  const input = document.getElementById("search").value.toLowerCase();
  const cards = document.querySelectorAll(".card");
  let anyVisible = false;

  cards.forEach(card => {
    const title = card.querySelector("h3").innerText.toLowerCase();
    card.style.display = title.includes(input) ? "block" : "none";
    if (title.includes(input)) anyVisible = true;
  });

  const noResults = document.getElementById("noResults") || (() => {
    const p = document.createElement("p");
    p.id = "noResults";
    p.style.textAlign = "center";
    p.style.fontSize = "18px";
    p.style.color = "#555";
    p.innerText = "No results found.";
    document.querySelector(".tour-cards").parentNode.appendChild(p);
    return p;
  })();

  noResults.style.display = anyVisible ? "none" : "block";
}
