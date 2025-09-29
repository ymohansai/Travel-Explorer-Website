// Destination details
const placesInfo = {
  araku: `
    <h3>🏞️ Araku Valley & Borra Caves</h3>
    <p>📍 Location: Visakhapatnam District</p>
    <p>⏱ Timings: 9:00 am – 6:00 pm</p>
    <p>💰 Entry Fee: ₹40 – ₹60 approx</p>
    <p>⭐ Rating: 4.5/5</p>
    <iframe src="https://www.google.com/maps?q=Araku+Valley&output=embed"></iframe>
  `,
  tirupati: `
    <h3>🙏 Tirupati Balaji Temple</h3>
    <p>📍 Location: Tirupati, Andhra Pradesh</p>
    <p>⏱ Timings: 3:00 am – 9:00 pm</p>
    <p>💰 Entry Fee: Free / Special Darshan ₹300</p>
    <p>⭐ Rating: 4.8/5</p>
    <iframe src="https://www.google.com/maps?q=Tirupati+Temple&output=embed"></iframe>
  `,
  rajahmundry: `
    <h3>🌉 Rajahmundry Tour</h3>
    <p>📍 Location: East Godavari District</p>
    <p>⏱ Timings: 6:00 am – 6:00 pm</p>
    <p>💰 Entry Fee: ₹50 approx</p>
    <p>⭐ Rating: 4.6/5</p>
    <iframe src="https://www.google.com/maps?q=Rajahmundry&output=embed"></iframe>
  `,
  srisailam: `
    <h3>🛕 Srisailam Temple</h3>
    <p>📍 Location: Kurnool District</p>
    <p>⏱ Timings: 4:30 am – 10:00 pm</p>
    <p>💰 Entry Fee: Free / Special Darshan ₹150</p>
    <p>⭐ Rating: 4.7/5</p>
    <iframe src="https://www.google.com/maps?q=Srisailam+Temple&output=embed"></iframe>
  `,
  ramanarayanam: `
    <h3>📖 Sri Ramanarayanam Temple</h3>
    <p>📍 Location: Vizianagaram</p>
    <p>⏱ Timings: 9:00 am – 8:00 pm</p>
    <p>💰 Entry Fee: Free</p>
    <p>⭐ Rating: 4.6/5</p>
    <iframe src="https://www.google.com/maps?q=Ramanarayanam+Temple&output=embed"></iframe>
  `,
  amaravathi: `
    <h3>🏛️ Amaravathi – The Capital</h3>
    <p>📍 Location: Guntur District</p>
    <p>⏱ Timings: 24 Hours</p>
    <p>💰 Entry Fee: Free</p>
    <p>⭐ Rating: 4.3/5</p>
    <iframe src="https://www.google.com/maps?q=Amaravathi,+Andhra+Pradesh&output=embed"></iframe>
  `
};

// Show details
function showDetails(place) {
  document.getElementById("detailsBox").innerHTML = placesInfo[place];
}

// Default cards HTML
const defaultCards = `
  <div class="card">
    <img src="assets/araku.png" alt="Araku">
    <div class="card-content">
      <h3>Araku Valley & Borra Caves</h3>
      <p>Starting @ Rs.6,499/- (upto 4 travelers)</p>
      <button onclick="showDetails('araku')">View Details</button>
    </div>
  </div>

  <div class="card">
    <img src="assets/tirupati.png" alt="Tirupati">
    <div class="card-content">
      <h3>Tirupati Temple</h3>
      <p>Starting @ Rs.4,999/- (upto 3 travelers)</p>
      <button onclick="showDetails('tirupati')">View Details</button>
    </div>
  </div>

  <div class="card">
    <img src="assets/rajahmundry.png" alt="Rajahmundry">
    <div class="card-content">
      <h3>Rajahmundry</h3>
      <p>Starting @ Rs.3,499/- (upto 2 travelers)</p>
      <button onclick="showDetails('rajahmundry')">View Details</button>
    </div>
  </div>
`;

// Extra cards
const extraPlaces = [
  { name: "Srisailam Temple", img: "assets/srisailam.png", key: "srisailam" },
  { name: "Sri Ramanarayanam Temple", img: "assets/ramanarayanam.png", key: "ramanarayanam" },
  { name: "Amaravathi", img: "assets/amaravathi.png", key: "amaravathi" }
];

// Toggle View More / View Less
document.getElementById("toggleMoreBtn").addEventListener("click", function () {
  const container = document.getElementById("cardContainer");

  if (this.textContent === "View More Places") {
    extraPlaces.forEach(place => {
      const card = document.createElement("div");
      card.classList.add("card");
      card.innerHTML = `
        <img src="${place.img}" alt="${place.name}">
        <div class="card-content">
          <h3>${place.name}</h3>
          <p>Special Package Available</p>
          <button onclick="showDetails('${place.key}')">View Details</button>
        </div>
      `;
      container.appendChild(card);
    });
    this.textContent = "View Less Places";
  } else {
    container.innerHTML = defaultCards;
    this.textContent = "View More Places";
  }
});

// 🔎 Search Function (works for all cards)
document.getElementById("searchBar").addEventListener("input", function () {
  const query = this.value.toLowerCase();
  const cards = document.querySelectorAll(".card");
  let found = false;

  cards.forEach(card => {
    const title = card.querySelector("h3").textContent.toLowerCase();
    if (title.includes(query)) {
      card.style.display = "block";
      found = true;
    } else {
      card.style.display = "none";
    }
  });

  document.getElementById("noResults").style.display = found ? "none" : "block";
});
