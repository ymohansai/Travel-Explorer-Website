// Show details of a selected place
function showDetails(place) {
  const details = {
    tirupati: `
      <h3>🙏 Tirupati Darshan</h3>
      <p>📍 Location: Tirumala, Chittoor District</p>
      <p>⏱ Timings: 24x7 (Temple timings vary)</p>
      <p>💰 Entry Fee: Free (Special Darshan Tickets: ₹300 approx)</p>
      <p>⭐ Rating: 4.8/5</p>
      <p>☀️ Best Time to Visit: September – February</p>
    `,
    araku: `
      <h3>🏞 Araku Valley & Borra Caves</h3>
      <p>📍 Location: Visakhapatnam District</p>
      <p>⏱ Timings: 6:00 am – 6:00 pm</p>
      <p>💰 Entry Fee: Borra Caves: ₹50 approx</p>
      <p>⭐ Rating: 4.6/5</p>
      <p>☀️ Best Time to Visit: October – March</p>
    `,
    vizag: `
      <h3>🌊 Vizag Beach Tour</h3>
      <p>📍 Location: Visakhapatnam</p>
      <p>⏱ Timings: Open 24 hours</p>
      <p>💰 Entry Fee: Free</p>
      <p>⭐ Rating: 4.5/5</p>
      <p>☀️ Best Time to Visit: November – February</p>
    `,
    srisailam: `
      <h3>🛕 Srisailam Temple</h3>
      <p>📍 Location: Nallamala Hills, Kurnool District</p>
      <p>⏱ Timings: 4:30 am – 10:00 pm</p>
      <p>💰 Entry Fee: Free (Special Darshan ₹150/₹300)</p>
      <p>⭐ Rating: 4.7/5</p>
      <p>☀️ Best Time to Visit: October – March</p>
    `,
    ramanarayanam: `
      <h3>🛕 Sri Ramanarayanam Temple</h3>
      <p>📍 Location: Vizianagaram</p>
      <p>⏱ Timings: 8:00 am – 8:00 pm</p>
      <p>💰 Entry Fee: Free</p>
      <p>⭐ Rating: 4.6/5</p>
      <p>☀️ Best Time to Visit: All year round</p>
    `,
    amaravathi: `
      <h3>🏛 Amaravathi – Capital City</h3>
      <p>📍 Location: Guntur District</p>
      <p>⏱ Timings: Open 24 hours</p>
      <p>💰 Entry Fee: Free</p>
      <p>⭐ Rating: 4.4/5</p>
      <p>☀️ Best Time to Visit: November – February</p>
    `,
    rajahmundry: `
      <h3>🌉 Rajahmundry Tour</h3>
      <p>📍 Location: East Godavari District</p>
      <p>⏱ Timings: 6:00 am – 6:00 pm</p>
      <p>💰 Entry Fee: ₹50 approx</p>
      <p>⭐ Rating: 4.6/5</p>
      <p>☀️ Best Time to Visit: October – March</p>
    `
  };

  document.getElementById("details").innerHTML =
    details[place] || `<p>Details not available.</p>`;
}

// Add more places dynamically
function addMorePlaces() {
  const tourCards = document.getElementById("tourCards");

  // Prevent duplicate adding
  if (document.querySelector(".extra-place")) return;

  const morePlaces = [
    {
      img: "Ramanarayanam_pic.png",
      title: "Sri Ramanarayanam Temple",
      price: "Starting @ Rs.2,999/- (upto 4 travelers)",
      id: "ramanarayanam",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3792.928328439355!2d83.36694687464203!3d18.07487238263777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3be4529f3f7b59%3A0xe795db3c80483f66!2sRamanarayanam!5e0!3m2!1sen!2sin!4v1759063603014!5m2!1sen!2sin"
    },
    {
      img: "rajahmundry_pic.png",
      title: "Rajahmundry Tour",
      price: "Starting @ Rs.3,499/- (upto 4 travelers)",
      id: "rajahmundry",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d122103.63512846752!2d81.6504569527932!3d16.98740364167963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37a3f2440c9fff%3A0x86b24503e305ca21!2sRajamahendravaram%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1759063518790!5m2!1sen!2sin"
    },
    {
      img: "Srisailam_pic.jpg",
      title: "Srisailam Temple",
      price: "Starting @ Rs.2,799/- (upto 4 travelers)",
      id: "srisailam",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3833.8319985010594!2d78.8633283766308!3d16.07420549963745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb56500661e22c5%3A0x9b3bf8b59610194b!2sSrisailam%20temple!5e0!3m2!1sen!2sin!4v1759063374991!5m2!1sen!2sin"
    },
    {
      img: "amaravathi_pic.png",
      title: "Amaravathi The Capital Andhra Pradesh",
      price: "Starting @ Rs.3,299/- (upto 4 travelers)",
      id: "amaravathi",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d244841.44484775283!2d80.19334065176706!3d16.49337343057491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35ed0b183aea1b%3A0x11d318810e9c92c2!2sAmaravati%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1759063692999!5m2!1sen!2sin"
    }
  ];

  morePlaces.forEach(place => {
    const card = document.createElement("div");
    card.className = "card extra-place";
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

  // Hide "View More", show "Close All"
  document.querySelector(".view-more").style.display = "none";
  document.querySelector(".close-all").style.display = "block";
}

// Remove extra places
function closeAllPlaces() {
  document.querySelectorAll(".extra-place").forEach(el => el.remove());
  document.querySelector(".view-more").style.display = "block";
  document.querySelector(".close-all").style.display = "none";
}

// Search destinations
function filterDestinations() {
  const input = document.getElementById("search").value.toLowerCase();
  const cards = document.querySelectorAll(".card");
  let anyVisible = false;

  cards.forEach(card => {
    const titleEl = card.querySelector("h3");
    const title = titleEl.innerText.toLowerCase();

    if (title.includes(input)) {
      card.style.display = "block";
      anyVisible = true;

      // Highlight match
      const regex = new RegExp(`(${input})`, "gi");
      titleEl.innerHTML = titleEl.innerText.replace(regex, "<span class='highlight'>$1</span>");
    } else {
      card.style.display = "none";
      titleEl.innerHTML = titleEl.innerText; // remove highlight
    }
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






