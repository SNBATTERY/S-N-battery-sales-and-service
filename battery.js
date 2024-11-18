/* ----- BASE ------ */
"use strict";

// get required selectors to maniplute menu toggle
const navbar = document.querySelector(".navbar");
const menuTogglersContainer = document.querySelector(".menu-togglers");
const bxMenu = document.querySelector(".bx-menu");

/* -- show/hide menu -- */
menuTogglersContainer.addEventListener("click", () => {
  // if navbar tag have show-nav in as class
  navbar.classList.toggle("show-nav");
});

/* ================================================ */

/* -------- theme changing -------- */
const themeTogglers = document.querySelector(".theme-togglers");
const lightIcon = document.querySelector(".bxs-sun");
const darkIcon = document.querySelector(".bxs-moon");

var lightmode = localStorage.getItem("lightmode");

// enable dark mode function
const enableLightMode = () => {
  // add class dark mode to the body
  document.body.classList.add("lightmode");
  localStorage.setItem("lightmode", "enabled");
  // change theme toggle styles
  lightIcon.style.display = "none";
  darkIcon.style.display = "block";
};

if (lightmode && lightmode === "enabled") {
  enableLightMode();
}

// disable dark mode function
const disableLightMode = () => {
  // remove class dark mode from the body
  document.body.classList.remove("lightmode");
  localStorage.setItem("lightmode", null);
  // change theme toggle styles
  lightIcon.style.display = "block";
  darkIcon.style.display = "none";
};

// active/deactive dark mode
themeTogglers.addEventListener("click", () => {
  lightmode = localStorage.getItem("lightmode");
  if (!lightmode || lightmode !== "enabled") {
    enableLightMode();
  } else {
    disableLightMode();
  }
});


/* -- hide show hero buttons -- */
// delay before showing them
const heroButtonsContainer = document.querySelector(".hero-btns-container");

var delayTime = 1000;

heroButtonsContainer.style.transition = "opacity 1000ms";

setTimeout(() => {
  heroButtonsContainer.style.opacity = 1;
}, delayTime);

// --- prevent form submission on contact section ---
const sendMsgButton = document.querySelector(".send-msg-btn");
sendMsgButton.addEventListener("click", (e) => {
  e.preventDefault();
});
function showInverterOptions() {
    // Hide the modal and show the options for battery brands
    document.getElementById('inverter-modal').style.display = 'none';
    document.getElementById('inverter-options').style.display = 'block';
}

function closeOptions() {
    document.getElementById('inverter-options').style.display = 'none';
    document.getElementById('inverter-modal').style.display = 'block';
}

function showBatteryDetails(brand) {
    const batteryDetails = {
        "exide": [
            {
                image: "path/to/exide-battery-1.jpg",
                description: "Exide battery description 1..."
            },
            {
                image: "path/to/exide-battery-2.jpg",
                description: "Exide battery description 2..."
            },
        ],
        "amaron": [
            {
                image: "path/to/amaron-battery-1.jpg",
                description: "Amaron battery description 1..."
            },
            {
                image: "path/to/amaron-battery-2.jpg",
                description: "Amaron battery description 2..."
            },
        ]
    };
  
   <!-- JSON-LD Structured Data for Car Manufacturer (Tesla) -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Tesla",
      "url": "https://www.yoursite.com/tesla",
      "logo": "https://www.yoursite.com/images/tesla-logo.png",
      "sameAs": "https://www.facebook.com/Tesla",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-555-555-5555",
        "contactType": "customer service",
        "availableLanguage": "English"
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "123 Electric Ave.",
        "addressLocality": "Silicon Valley",
        "addressRegion": "CA",
        "postalCode": "94043",
        "addressCountry": "US"
      }
    }
    </script>

    <!-- JSON-LD Structured Data for Tesla Car Model (Product) -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Tesla Model S",
      "image": "https://www.yoursite.com/images/tesla-model-s.jpg",
      "description": "The Tesla Model S is a luxury electric sedan with a long-range battery and advanced autopilot features.",
      "sku": "TSL-MODEL-S",
      "brand": {
        "@type": "Brand",
        "name": "Tesla"
      },
      "offers": {
        "@type": "Offer",
        "url": "https://www.yoursite.com/tesla/model-s",
        "priceCurrency": "USD",
        "price": "79999",
        "priceValidUntil": "2024-12-31",
        "itemCondition": "https://schema.org/NewCondition",
        "availability": "https://schema.org/InStock"
      }
    }

    const detailsContainer = document.getElementById('battery-details');
    detailsContainer.innerHTML = ''; // Clear previous content
    batteryDetails[brand].forEach(detail => {
        const detailDiv = document.createElement('div');
        detailDiv.innerHTML = `
            <img src="${detail.image}" alt="${brand} Battery">
            <p>${detail.description}</p>
        `;
        detailsContainer.appendChild(detailDiv);
    });

    // Show the battery details and hide the options
    detailsContainer.style.display = 'block';
    document.getElementById('inverter-options').style.display = 'none';
}
