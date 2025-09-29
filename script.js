// Keep track of extra cards state
let extraVisible = false;
let extraCards = [];

// Destination info + maps
function showDetails(place) {
  const details = {
    tirupati: {
      info: `
        <h3>🙏 Tirupati Darshan</h3>
        <p>📍 Location: Tirumala, Chittoor District</p>
        <p>⏱ Timings: 24x7 (Temple timings vary)</p>
        <p>💰 Entry Fee: Free (Special Darshan Tickets: ₹300 approx)</p>
        <p>⭐ Rating: 4.8/5</p>
        <p>🌤 Best Time to Visit: September – February</p>
        <p>🗺 Nearby Attractions: Sri Venkateswara National Park, Talakona Waterfalls</p>
      `,
      map: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31012.851257522085!2d79.32588072799639!3d13.68168074719857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb2b562cc4e1291%3A0x85a1996b4b87bcf6!2sTirumala%2C%20Tirupati%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1759063836445!5m2!1sen!2sin`
    },
    araku: {
      info: `
        <h3>🏞 Araku Valley & Borra Caves</h3>
        <p>📍 Location: Alluri Sitharama Raju District</p>
        <p>⏱ Timings: 6:00 am – 6:00 pm</p>
        <p>💰 Entry Fee: Borra Caves: ₹50 approx</p>
        <p>⭐ Rating: 4.6/5</p>
        <p>🌤 Best Time to Visit: October – March</p>
        <p>🗺 Nearby Attractions: Coffee Plantations, Katiki Waterfalls</p>
      `,
      map: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15219.678905417756!2d82.9862!3d18.3331!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4e9b6d5e7b1234%3A0xabcd1234567890ef!2sAraku%20Valley%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1759055000000!5m2!1sen!2sin`
    },
    vizag: {
      info: `
        <h3>🌊 Vizag Beach Tour</h3>
        <p>📍 Location: Visakhapatnam</p>
        <p>⏱ Timings: Open 24 hours</p>
        <p>💰 Entry Fee: Free</p>
        <p>⭐ Rating: 4.5/5</p>
        <p>🌤 Best Time to Visit: October – March</p>
        <p>🗺 Nearby Attractions: Kailasagiri, Submarine Museum, Araku Valley</p>
      `,
      map: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15220.123456789!2d83.2185!3d17.6868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a394ed7890abcde%3A0xfedcba9876543210!2sVisakhapatnam%20Beach%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1759056000000!5m2!1sen!2sin`
    },
    srisailam: {
      info: `
        <h3>🛕 Srisailam Temple</h3>
        <p>📍 Location: Nallamala Hills, Kurnool District</p>
        <p>⏱ Timings: 4:30 am – 10:00 pm</p>
        <p>💰 Entry Fee: Free (Special Darshan ₹150/₹300)</p>
        <p>⭐ Rating: 4.7/5</p>
        <p>🌤 Best Time to Visit: October – March</p>
        <p>🗺 Nearby Attractions: Srisailam Dam, Akkamahadevi Caves</p>
      `,
      map: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3833.8319985010594!2d78.8633283766308!3d16.07420549963745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb56500661e22c5%3A0x9b3bf8b59610194b!2sSrisailam%20temple!5e0!3m2!1sen!2sin!4v1759063374991!5m2!1sen!2sin`
    },
    ramanarayanam: {
      info: `
        <h3>🛕 Sri Ramanarayanam Temple</h3>
        <p>📍 Location: Vizianagaram</p>
        <p>⏱ Timings: 8:00 am – 8:00 pm</p>
        <p>💰 Entry Fee: Free</p>
        <p>⭐ Rating: 4.6/5</p>
        <p>🌤 Best Time to Visit: October – February</p>
        <p>🗺 Nearby Attractions: Kalingapatnam Beach, Vizianagaram Fort</p>
      `,
      map: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3792.928328439355!2d83.36694687464203!3d18.07487238263777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3be4529f3f7b59%3A0xe795db3c80483f66!2sRamanarayanam!5e0!3m2!1sen!2sin!4v1759063603014!5m2!1sen!2sin`
    },
    amaravathi: {
      info: `
        <h3>🏛 Amaravathi – Capital City</h3>
        <p>📍 Location: Guntur District</p>
        <p>⏱ Timings: Open 24 hours</p>
        <p>💰 Entry Fee: Free</p>
        <p>⭐ Rating: 4.4/5</p>
        <p>🌤 Best Time to Visit: October – March</p>
        <p>🗺 Nearby Attractions: Amaravathi Stupa, Undavalli Caves</p>
      `,
      map: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d244841.44484775283!2d80.19334065176706!3d16.49337343057491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35ed0b183aea1b%3A0x11d318810e9c92c2!2sAmaravati%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1759063692999!5m2!1sen!2sin`
    },
    rajahmundry: {
      info: `
        <h3>🌉 Rajahmundry Tour</h3>
        <p>📍 Location: East Godavari District</p>
        <p>⏱ Timings: 6:00 am – 6:00 pm</p>
        <p>💰 Entry Fee: ₹50 approx</p>
        <p>⭐ Rating: 4.6/5</p>
        <p>🌤 Best Time to Visit: November – February</p>
        <p>🗺 Nearby Attractions: Godavari Bridge, Kotilingeshwara Temple, Papi Hills</p>
      `,
      map: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d122103.63512846752!2d81.6504569527932!3d16.98740364167963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37a3f2440c9fff%3A0x86b24503e305ca21!2sRajamahendravaram%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1759063518790!5m2!1sen!2sin`
    }
  };

  const selected = details[place];
  if (selected) {
    document.getElementById("details").innerHTML = `
      ${selected.info}
      <div class="map-box">
        <iframe src="${selected.map}" allowfullscreen="" loading="lazy"></iframe>
      </div>
    `;
  } else {
    document.getElementById("details").innerHTML = `<p>Details not available.</p>`;
  }
}

// Toggle View More / View Less
function toggleMorePlaces() {
  const tourCards = document.getElementById("tourCards");
  const btn = document.getElementById("viewMoreBtn");

  if (!extraVisible) {
    const morePlaces = [
      { img: "Ramanarayanam_pic.png", title: "Sri Ramanarayanam Temple", price: "Starting @ Rs.2,999/- (upto 4 travelers)", id: "ramanarayanam" },
      { img: "rajahmundry_pic.png", title: "Rajahmundry Tour", price: "Starting @ Rs.3,499/- (upto 4 travelers)", id: "rajahmundry" },
      { img: "Srisailam_pic.jpg", title: "Srisailam Temple", price: "Starting @ Rs.2,799/- (upto 4 travelers)", id: "srisailam" },
      { img: "Amaravathi_pic.png", title: "Amaravathi The Capital Andhra Pradesh", price: "Starting @ Rs.3,299/- (upto 4 travelers)", id: "amaravathi" }
    ];

    morePlaces.forEach(place => {
      const card = document.createElement("div");
      card.className = "card extra-card";
      card.innerHTML = `
        <img src="${place.img}" alt="${place.title}">
        <div class="card-content">
          <h3>${place.title}</h3>
          <p>${place.price}</p>
          <button onclick="showDetails('${place.id}')">View Details</button>
        </div>
      `;
      tourCards.appendChild(card);
      extraCards.push(card);
    });

    btn.textContent = "View Less Places";
    extraVisible = true;
  } else {
    extraCards.forEach(c => c.remove());
    extraCards = [];
    btn.textContent = "View More Places";
    extraVisible = false;
    filterDestinations();
  }
}

// Filter cards
function filterDestinations() {
  const input = document.getElementById("search").value.toLowerCase().trim();
  const cards = document.querySelectorAll(".card");
  let anyVisible = false;

  cards.forEach(card => {
    const titleEl = card.querySelector("h3");
    if (!titleEl) return;
    const title = titleEl.innerText.toLowerCase();

    if (input === "" || title.includes(input)) {
      card.style.display = "block";
      anyVisible = true;
    } else {
      card.style.display = "none";
    }
  });

  let noResults = document.getElementById("noResults");
  if (!anyVisible) {
    if (!noResults) {
      noResults = document.createElement("p");
      noResults.id = "noResults";
      noResults.style.textAlign = "center";
      noResults.style.fontSize = "18px";
      noResults.style.color = "#555";
      noResults.innerText = "No results found.";
      document.querySelector(".tour-cards").parentNode.appendChild(noResults);
    }
    noResults.style.display = "block";
  } else {
    if (noResults) noResults.style.display = "none";
  }
}





