🌏 Travel Explorer – Andhra Pradesh Edition

An interactive web application to explore top tourist destinations in Andhra Pradesh with prices, details, and embedded maps.

✨ Features

🏖 Popular Destinations Section

Displays main tourist spots: Tirupati, Araku, Vizag, etc.

Each card shows an image, starting price, and “View Details” button.

➕ Dynamic Extra Destinations

Click “View More Places” to reveal additional destinations.

Click again to hide them.

🔍 Search Functionality

Filter destinations by name in real-time.

Works for all main and extra cards, even if search text is typed before clicking View More Places.

🗺 Destination Info Section

Clicking “View Details” shows:

Full info about the destination (location, timings, entry fee, nearby attractions).

Embedded Google Map.

📱 Responsive Design

Works well on desktops, tablets, and mobile devices.

📂 File Structure

/Travel-Explorer-Website
│
├── index.html         # Main HTML page
├── style.css          # CSS for layout, colors, responsiveness
├── script.js          # JS for filtering, dynamic cards, maps
├── Tirupathi_pic.png
├── araku_pic.png
├── vizag_pic.png
├── Ramanarayanam_pic.png
├── rajahmundry_pic.png
├── Srisailam_pic.jpg
├── amaravathi_pic.png
└── Screenshot.png     # Header background image

⚡ How It Works

🖼 Initial Display

Shows 3 main destination cards (Tirupati, Araku, Vizag).

➕ View More / View Less

Clicking the button adds/removes extra destinations dynamically.

Newly added cards are immediately searchable.

🔍 Search Destinations

Type in the search box to filter destinations by name.

Works for all cards currently in the DOM.

🗺 View Details

Click the “View Details” button on any card.

Shows detailed information and an embedded map in the Destination Info section.

🛠 Technologies Used

HTML5

CSS3 (Flexbox, Responsive Design)

JavaScript (DOM manipulation, event handling)

💡 Notes

Maps are displayed in the Destination Info section for all cards.

Extra cards are dynamically added, so filtering works for both initial and additional destinations.

Fully responsive for desktop, tablet, and mobile devices.

🚀 How to Use

Open index.html in any modern browser.

Type in the search box to filter destinations.

Click “View Details” to see full information and maps.

Click “View More Places” to reveal additional destinations.

Click again to hide extra destinations.
