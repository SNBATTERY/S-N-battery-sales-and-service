
 <!-- paste this before </body> -->

(function(){
  'use strict';

  // ---------- Config ----------
  var hideWhenDevtools = true;   // hide content if devtools likely open
  var devtoolsThreshold = 160;   // px difference to detect devtools (tweak if needed)
  // ----------------------------

  // Disable right-click
  document.addEventListener('contextmenu', function(e){
    try { e.preventDefault(); } catch(_) {}
  }, false);

  // Disable selection, copy, cut (optional; remove if you want normal UX)
  document.addEventListener('selectstart', function(e){ try{ e.preventDefault(); } catch(_){} }, false);
  document.addEventListener('copy', function(e){ try{ e.preventDefault(); } catch(_){} }, false);
  document.addEventListener('cut', function(e){ try{ e.preventDefault(); } catch(_){} }, false);

  // Prevent common shortcuts (F12, Ctrl+Shift+I/J/C, Ctrl+U/S/P)
  document.addEventListener('keydown', function(e){
    try {
      var key = (e.key || '').toLowerCase();
      var code = e.keyCode || 0;
      var ctrl = e.ctrlKey || e.metaKey; // include Cmd on mac
      var shift = e.shiftKey;

      var blocked =
        code === 123 || // F12
        (ctrl && shift && (key === 'i' || key === 'j' || key === 'c')) ||
        (ctrl && (key === 'u' || key === 's' || key === 'p')) ||
        (ctrl && shift && (key === 'k')); // firefox console

      if (blocked) {
        e.preventDefault(); e.stopPropagation();
        return false;
      }
    } catch(_) {}
  }, true);

  // Prevent dragstart (images)
  window.addEventListener('dragstart', function(e){ try{ e.preventDefault(); } catch(_){} }, false);

  // DevTools detection (heuristic: difference between outer and inner dims)
  var devtoolsOpen = false;
  function detectDevtools(){
    try {
      var widthDiff = Math.abs(window.outerWidth - window.innerWidth);
      var heightDiff = Math.abs(window.outerHeight - window.innerHeight);
      var open = widthDiff > devtoolsThreshold || heightDiff > devtoolsThreshold;
      if (open && !devtoolsOpen) {
        devtoolsOpen = true;
        onDevtoolsOpen();
      } else if (!open && devtoolsOpen) {
        devtoolsOpen = false;
        onDevtoolsClose();
      }
    } catch(_) {}
  }

  function onDevtoolsOpen(){
    // hide content or show overlay
    if (hideWhenDevtools) {
      try { document.documentElement.style.visibility = 'hidden'; } catch(_) {}
      // Optional: show overlay instead of hiding (uncomment to use)
      /*
      var overlay = document.createElement('div');
      overlay.id = '_dt_overlay_';
      overlay.style.position = 'fixed';
      overlay.style.top = 0; overlay.style.left = 0;
      overlay.style.width = '100%'; overlay.style.height = '100%';
      overlay.style.zIndex = 2147483647;
      overlay.style.background = '#fff';
      overlay.style.display = 'flex';
      overlay.style.justifyContent = 'center';
      overlay.style.alignItems = 'center';
      overlay.innerHTML = '<div style="font-family:sans-serif;text-align:center;color:#333"><h2>Protected Content</h2><p>Developer tools detected — content hidden.</p></div>';
      document.body.appendChild(overlay);
      */
    }
  }

  function onDevtoolsClose(){
    if (hideWhenDevtools) {
      try { document.documentElement.style.visibility = ''; } catch(_) {}
      var ov = document.getElementById('_dt_overlay_');
      if (ov) { try { ov.remove(); } catch(_) {} }
    }
  }

  // Poll detection (lightweight)
  setInterval(detectDevtools, 600);

  // Friendly console message for legit devs
  try {
    console.log('%cNotice: This site uses protections against casual copying.', 'color:#b00;font-weight:bold');
  } catch(_) {}

})();


  (function(){
    // Disable right-click
    document.addEventListener("contextmenu", e => e.preventDefault());

    // Disable copy / select
    document.addEventListener("selectstart", e => e.preventDefault());
    document.addEventListener("copy", e => e.preventDefault());
    document.addEventListener("cut", e => e.preventDefault());

    // Block common DevTools keys
    document.addEventListener("keydown", e => {
      const k = e.key.toLowerCase();
      if (
        e.keyCode === 123 ||                       // F12
        (e.ctrlKey && e.shiftKey && ["i","j","c"].includes(k)) ||
        (e.ctrlKey && ["u","s","p"].includes(k))
      ) {
        e.preventDefault(); e.stopPropagation();
      }
    }, true);

    // Basic DevTools detection
    let devOpen = false, threshold = 160;
    setInterval(() => {
      if (
        window.outerWidth - window.innerWidth > threshold ||
        window.outerHeight - window.innerHeight > threshold
      ) {
        if (!devOpen) {
          devOpen = true;
          document.documentElement.style.visibility = "hidden";
        }
      } else if (devOpen) {
        devOpen = false;
        document.documentElement.style.visibility = "";
      }
    }, 500);

    // Console message
    try {
      console.log(
        "%cThis website's code is protected. Copying is discouraged.",
        "color:red;font-weight:bold"
      );
    } catch {}
  })();

document.addEventListener("contextmenu", e => e.preventDefault());
document.onkeydown = e => {
  if (e.keyCode === 123 || // F12
      (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74)) // Ctrl+Shift+I or J
  ) {
    e.preventDefault();
    return false;
  }
};




	  

	   const navToggle = document.getElementById('navToggle');
  const smallNav = document.getElementById('smallNav');

  navToggle.addEventListener('click', () => {
    smallNav.style.display = smallNav.style.display === 'block' ? 'none' : 'block';
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.floating-nav')) {
      smallNav.style.display = 'none';
    }
  });




	
const bengaluruLocalities = [
  "A F station yelahanka",
  "Adugodi",
  "Agara",
  "Agram",
  "Air Force hospital",
  "Amruthahalli",
  "Anandnagar",
  "Anekal",
  "Anekalbazar",
  "Arabic College",
  "Aranya Bhavan",
  "Ashoknagar",
  "Attibele",
  "Attur",
  "Austin Town",
  "Avalahalli",
  "Avani Sringeri mutt",
  "Avenue Road",
  "B Sk ii stage",
  "Bsf Campus yelahanka",
  "Bagalgunte",
  "Bagalur",
  "Balepete",
  "Banashankari",
  "Banashankari Iii stage",
  "Banaswadi",
  "Bandikodigehalli",
  "Bangalore Air port",
  "Bangalore Bazaar",
  "Bangalore City",
  "Bangalore Corporation building",
  "Bangalore Dist offices bldg",
  "Bangalore Fort",
  "Bangalore Sub fgn post",
  "Bangalore.",
  "Bannerghatta",
  "Bannerghatta Road",
  "Bapujinagar",
  "Basavanagudi",
  "Basavaraja Market",
  "Basaveshwaranagar",
  "Basaveswaranagar Ii stage",
  "Bellandur",
  "Benson Town",
  "Bestamaranahalli",
  "Bettahalsur",
  "Bhashyam Circle",
  "Bhattarahalli",
  "Bidaraguppe",
  "Bidrahalli",
  "Bnagalore Viswavidalaya",
  "Bommanahalli",
  "Brigade Road",
  "Byatarayanapura",
  "C.V.raman nagar",
  "Cmp Centre and school",
  "Crpf Campus yelahanka",
  "Cahmrajendrapet",
  "Chamrajpet",
  "Chamrajpet Bazar",
  "Chandra Lay out",
  "Chickpet",
  "Chikkabettahalli",
  "Chikkajala",
  "Chikkalasandra",
  "Chikkanahalli",
  "Chunchanakuppe",
  "Cubban Road",
  "Dasarahalli",
  "Deepanjalinagar",
  "Devanagundi",
  "Devarjeevanahalli",
  "Devasandra",
  "Dharmaram College",
  "Doddagubbi",
  "Doddajala",
  "Doddakallasandra",
  "Doddanekkundi",
  "Domlur",
  "Dommasandra",
  "Doorvaninagar",
  "Dr. ambedkar veedhi",
  "Electronics City",
  "Fraser Town",
  "G.K.v.k.",
  "Gaviopuram Extension",
  "Gaviopuram Guttanahalli",
  "Gayathrinagar",
  "Girinagar",
  "Goraguntepalya",
  "Goripalya",
  "Governmemnt Electric factory",
  "Govindapalya",
  "Gunjur",
  "H M t",
  "H.A. farm",
  "H.A.l ii stage",
  "H.K.p. road",
  "Hsr Layout",
  "Hampinagar",
  "Handenahalli",
  "Harogadde",
  "Hebbal Kempapura",
  "Hennagara",
  "Highcourt",
  "Hongasandra",
  "Hoodi",
  "Horamavu",
  "Hosakerehalli",
  "Hosur Road",
  "Hulimangala",
  "Hulimavu",
  "Hulsur Bazaar",
  "Hunasamaranahalli",
  "Isro Anthariksha bhavan",
  "Immedihalli",
  "Indalavadi",
  "Indiranagar",
  "Indiranagar Com. complex",
  "Industrial Estate",
  "Ittamadu Layout",
  "J P nagar",
  "J.C.nagar",
  "Jakkur",
  "Jalahalli",
  "Jalahalli East",
  "Jalahalli Village",
  "Jalahalli West",
  "Jalavayuvihar",
  "Jayanagar",
  "Jayanagar West",
  "Jayangar East",
  "Jayangar Iii block",
  "Jeevanahalli",
  "Jeevanbhimanagar",
  "Jigani",
  "Jp Nagar iii phase",
  "K H b colony",
  "K. g. road",
  "K.P.west",
  "Kacharakanahalli",
  "Kadabagere",
  "Kadugodi",
  "Kalkunte",
  "Kalyanagar",
  "Kamagondanahalli",
  "Kamakshipalya",
  "Kannamangala",
  "Kannur",
  "Kanteeravanagar",
  "Kathriguppe",
  "Kenchanahalli",
  "Kendriya Sadan",
  "Kendriya Vihar",
  "Kodigehalli",
  "Konanakunte",
  "Koramangala",
  "Koramangala I block",
  "Koramangala Vi bk",
  "Kothanur",
  "Krishnarajapuram",
  "Krishnarajapuram R s",
  "Kugur",
  "Kumaraswamy Layout",
  "Kumbalgodu",
  "Kundalahalli",
  "Lalbagh West",
  "Legislators Home",
  "Lingarajapuram",
  "M S r road",
  "Madhavan Park",
  "Madivala",
  "Magadi Road",
  "Mahadevapura",
  "Mahalakshmipuram Layout",
  "Mahatma Gandhi road",
  "Malkand Lines",
  "Mallathahalli",
  "Malleswaram",
  "Malleswaram West",
  "Mandalay Lines",
  "Marathahalli Colony",
  "Marsur",
  "Maruthi Sevanagar",
  "Mathikere",
  "Mavalli",
  "Mayasandra",
  "Medihalli",
  "Medimallasandra",
  "Mico Layout",
  "Milk Colony",
  "Mount St joseph",
  "Msrit",
  "Mundur",
  "Museum Road",
  "Muthanallur",
  "Muthusandra",
  "Nal",
  "Naduvathi",
  "Nagarbhavi",
  "Nagasandra",
  "Nagavara",
  "Nandinilayout",
  "Narasimharaja Colony",
  "Narasimjharaja Road",
  "Narayan Pillai street",
  "Nayandahalli",
  "Neralur",
  "New Tharaggupet",
  "New Thippasandra",
  "Okalipuram",
  "P&t Col. kavalbyrasandra",
  "Padmanabhnagar",
  "Palace Guttahalli",
  "Panathur",
  "Pasmpamahakavi Road",
  "Peenya I stage",
  "Peenya Ii stage",
  "Peenya Small industries",
  "R T nagar",
  "R.M.v. extension ii stage",
  "Rajajinagar",
  "Rajajinagar I block",
  "Rajajinagar Ivth block",
  "Rajanakunte",
  "Rajarajeshwarinagar",
  "Rajbhavan",
  "Ramachandrapuram",
  "Ramagondanahalli",
  "Ramakrishna Hegde nagar",
  "Ramamurthy Nagar",
  "Rameshnagar",
  "Richmond Town",
  "Rv Niketan",
  "Sadashivanagar",
  "Sahakaranagar P.o",
  "Samandur",
  "Samethanahalli",
  "Sampangiramnagar",
  "Sarjapura",
  "Science Institute",
  "Seshadripuram",
  "Shankarpura",
  "Shanthinagar",
  "Sidihoskote",
  "Singanayakanahalli",
  "Sivan Chetty gardens",
  "Someswarapura",
  "Sri Jayachamarajendra road",
  "Srirampuram",
  "St. john's medical college",
  "St. thomas town",
  "State Bank of mysore colony",
  "Subhashnagar",
  "Subramanyapura",
  "Swimming Pool extn",
  "Tarahunise",
  "Tavarekere",
  "Taverekere",
  "Thambuchetty Palya",
  "Thammanayakanahalli",
  "Tilaknagar",
  "Training Command iaf",
  "Tyagrajnagar",
  "Ullalu Upanagara",
  "Vanakanahalli",
  "Vartur",
  "Vasanthnagar",
  "Venkatarangapura",
  "Venkateshapura",
  "Vidhana Soudha",
  "Vidyanagara",
  "Vidyaranyapura",
  "Vijayanagar",
  "Vijayanagar East",
  "Vikramnagar",
  "Vimapura",
  "Virgonagar",
  "Visveswarapuram",
  "Viswaneedam",
  "Vittalnagar",
  "Viveknagar",
  "Vyalikaval Extn",
  "Wheel And axle plant",
  "Whitefield",
  "Wilson Garden",
  "Yadavanahalli",
  "Yediyur",
  "Yelachenahalli",
  "Yelahanka",
  "Yelahanka Satellite town",
  "Yemalur",
  "Yeshwanthpur Bazar",
  "Yeswanthpura"
];


// Keywords to detect search intent
const keywords = [
  "car battery",
  "car battery near me",
  "battery",
  "battery near me",
  "exide battery",
  "amaron battery",
  "car battery shop near me"
];

function searchLocality() {
  const input = document.getElementById('searchInput').value.toLowerCase().trim();

  // Check if input contains any keyword
  const hasKeyword = keywords.some(kw => input.includes(kw));

  if (!hasKeyword) {
    alert('Please include keywords like "car battery", "exide battery", or "amaron battery" in your search.');
    return;
  }

  // Find locality mentioned in input
  const matchedLocality = bengaluruLocalities.find(loc => 
    input.includes(loc.toLowerCase())
  );

  if (matchedLocality) {
    // Convert locality to URL slug
    const slug = matchedLocality.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

    // Redirect to your site with locality query param (adjust URL as needed)
    window.location.href = `https://snbatterysalesandservice.com/?q=${encodeURIComponent(slug)}`;
  } else {
    alert('Please include a valid Bengaluru area in your search.');
  }
}


   
    function toggleMenu() {
        document.getElementById("nav-links").classList.toggle("show");
      }
   
      
   
    document.querySelectorAll(".faq-toggle").forEach(btn => {
        btn.addEventListener("click", () => {
          const content = btn.nextElementSibling;
          const isOpen = content.classList.contains("show");
    
          document.querySelectorAll(".faq-content").forEach(el => el.classList.remove("show"));
          document.querySelectorAll(".faq-toggle span").forEach(span => span.textContent = '+');
    
          if (!isOpen) {
            content.classList.add("show");
            btn.querySelector("span").textContent = '−';
          }
        });
      });
    const batteries = [
    {
      name: 'Exide Invamaster IMTT1500 (150 AH)',
      image: '203.jfif',
      price: 'with exchange: ₹12000, without exchange: ₹16000',
      warranty: '60 Months (36 Full + 24 Pro Rata)'
    },
    {
      name: 'Exide INVAMASTER IMST1500 (150 AH)',
      image: '204.jfif',
      price: 'with exchange: ₹11800, without exchange: ₹15800',
      warranty: '60 Months (36 Full + 24 Pro Rata)'
    },
    {
      name: 'Exide INVAMASTER IMTT2000 (200AH)',
      image: '205.jfif',
      price: 'with exchange: ₹16300, without exchange: ₹20300',
      warranty: '60 Months (36 Full + 24 Pro Rata)'
    },
    {
      name: 'Amaron AR145ST36 (145AH)',
      image: '301.jfif',
      price: 'with exchange: ₹8900, without exchange: ₹12900',
      warranty: '36 Months (24 Full + 12 Pro Rata)'
    },
    {
      name: 'Amaron FLO DIN45 (545106036) 45AH',
      image: '5.jpg',
      price: 'with exchange: ₹5170, without exchange: ₹6780',
      warranty: '60 Months (30 Full + 30 Pro Rata)'
    }
    // Add more here as needed
  ];

  const batteryList = document.getElementById("batteryList");
  const details = document.getElementById("batteryDetails");

  batteries.forEach((battery) => {
    const card = document.createElement("div");
    card.className = "battery-card";
    card.innerHTML = `
      <img src="${battery.image}" alt="${battery.name}" />
      <span>${battery.name}</span>
    `;
    card.addEventListener("click", () => {
      details.innerHTML = `
        <img src="${battery.image}" alt="${battery.name}" />
        <h2>${battery.name}</h2>
        <p><strong>Price:</strong> ${battery.price}</p>
        <p><strong>Warranty:</strong> ${battery.warranty}</p>
        <button onclick="redirectToWhatsApp('${battery.name}', '${battery.price}', '${battery.warranty}')">Order Now on WhatsApp</button>
      `;
    });
    batteryList.appendChild(card);
  });

  // Animation observer
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll(".battery-card").forEach(card => {
    observer.observe(card);
  });

  function redirectToWhatsApp(name, price, warranty) {
    const message = `Hi, I'm interested in:\n\n📦 Battery: ${name}\n💰 Price: ${price}\n📅 Warranty: ${warranty}`;
    const url = `https://wa.me/919902555479?text=${encodeURIComponent(message)}`;
    window.open(url, '_self');
  }
    const quotes = [
    "⚡ Power up your drive — one battery at a time.",
    "🔋 Energy you can trust. Performance you can feel.",
    "🚗 No start? No problem. We've got the power!",
    "💡 A good battery never quits. Neither do we.",
    "🔧 Drive far, live charged. Choose wisely."
  ];

  let currentQuote = 0;
  const quoteElement = document.getElementById("quote");

  function showNextQuote() {
    quoteElement.style.opacity = 0;
    setTimeout(() => {
      quoteElement.textContent = quotes[currentQuote];
      quoteElement.style.opacity = 1;
      currentQuote = (currentQuote + 1) % quotes.length;
    }, 500);
  }

  // Initial display
  quoteElement.textContent = quotes[currentQuote];
  currentQuote++;

  // Change every 5 seconds
  setInterval(showNextQuote, 5000);

    const batteryData = {
      exide: {
        model: "Exide Inverter Battery",
        data: [
        {
          modelName: "EXIDE INVAHOMZ IHST1000 100AH BATTERY",
          image: "201.jpg",
          description: "Warranty: 24 FOC + 24 Pro-rata. Total = 48 Months.",
          price: "with exchange: 7200, without exchange: 9700"
        },
        {
          modelName: "Exide INVA GOLD IGST1500 (150AH)",
          image: "202.jfif",
          description: "Warranty: 48 Months (36 Months Full Replacement + 12 Months Pro Rata).",
          price: "with exchange: 10130, without exchange: 14130"
        },
        {
          modelName: "Exide Invamaster IMTT1500 (150 AH)",
          image: "203.jfif",
          description: "Warranty: 60 Months (36 Months Full Replacement + 24 Months Pro Rata).",
          price: "with exchange: 12000, without exchange: 16000"
        },
        {
          modelName: "Exide INVAMASTER IMST1500 (150 AH)",
          image: "204.jfif",
          description: "Warranty: 60 Months (36 Months Full Replacement + 24 Months Pro Rata).",
          price: "with exchange: 11800, without exchange: 15800"
        },
        {
          modelName: "Exide INVAMASTER IMTT2000 (200AH)",
          image: "205.jfif",
          description: "Warranty: 60 Months (36 Months Full Replacement + 24 Months Pro Rata).",
          price: "with exchange: 16300, without exchange: 20300"
        },
        {
          modelName: "Exide Inva Homz IHST1350 135Ah Tubular Battery",
          image: "206.jfif",
          description: "Warranty: 48 (24+24) Months.",
          price: "with exchange: 8400, without exchange: 12400"
        }
      ]
    },
      amaron: {
        model: "Amaron Inverter Battery",
        data: [
      
          {
            modelName: "Amaron Current Short Tubular AR145ST36 (145AH)",
            image: "301.jfif",
            description: "Warranty: 36 Months (24 Months Full Replacement + 12 Months Pro Rata).",
            price: "with exchange: 8900, without exchange: 12900"
          },
          {
            modelName: "Amaron Current AR150TT54 (150 AH) Tall Tubular Inverter Battery",
            image: "302.jfif",
            description: "Warranty: 54 Months (36 Months Full Replacement + 18 Months Pro Rata).",
            price: "with exchange: 11500, without exchange: 15500"
          },
          {
            modelName: "Amaron Current AR200TT54 200AH Tall Tubular Inverter Battery",
            image: "303.jfif",
            description: "Warranty: 54 Months (36 Months Full Replacement + 18 Months Pro Rata).",
            price: "with exchange: 13800, without exchange: 17800"
          }
        ]
      },
      luminous: {
        model: "Luminous Inverter Battery",
        data: [
          {
            modelName: "Luminous Battery 135Ah",
            image: "luminous.jpg",
            description: "Reliable battery with exceptional performance.",
            price: "Price: Rs. 13500"
          }
        ]
      }
    };

    function goToDetails(type) {
      if (!type || !batteryData[type]) {
        alert("No battery data available.");
        return;
      }

      const batteryList = batteryData[type].data;
      const label = batteryData[type].model;

      localStorage.setItem("batteryData", JSON.stringify(batteryList));
      localStorage.setItem("carModel", label);
      window.location.href = "inverter-battery-details.html";
    }

    const carModels = {
        "KIA": ["KIA Carnival", "KIA SELTOS DIESEL", "KIA SELTOS PETROL", "KIA SONET DIESEL", "KIA SONET PETROL", "KIA Carens Diesel","KIA Carens Petrol"],

        "MG": ["MG HECTOR Petrol", "MG HECTOR Diesel", "MG Glowstar",  "MG Astor"],
        "Maruti Suzuki": ["Maruthi Suzuki Alto 800 Petrol", "Maruthi Suzuki K10 Petrol", "Maruthi Suzuki A Star Petrol",  "Maruthi Suzuki Jimny Petrol", "Maruthi Suzuki Eeco Petrol", "Maruthi Suzuki Gypsy Petrol", "Maruthi Suzuki Omni Petrol",  "Maruthi Suzuki Zen Petrol",  "Maruthi Suzuki Wagnor Petrol", "Maruthi Suzuki S Presso Petrol", "Maruthi Suzuki Celerio Diesel", "Maruthi Suzuki Celerio Petrol", "Maruthi Suzuki Ritz Diesel",  "Maruthi Suzuki Ritz Petrol", "Maruthi Suzuki SX4 Diesel",  "Maruthi Suzuki SX4 Petrol",  "Maruthi Suzuki Ciaz Petrol", "Maruthi Suzuki Ciaz Diesel", "Maruthi Suzuki Ciaz Diesel Hybrid", "Maruthi Suzuki Ciaz Petrol Hybrid", "Maruthi Suzuki Swift Diesel", "Maruthi Suzuki Swift Diesel(2016 Onwards)",  "Maruthi Suzuki Swift Petrol", "Maruthi Suzuki Vitra Brezza Diesel", "Maruthi Suzuki Vitra Brezza Petrol",  "Maruthi Suzuki Vitra Brezza Hybrid Petrol",  "Maruthi Suzuki New Baleno Petrol",   "Maruthi Suzuki New Baleno RS Petrol", "Maruthi Suzuki New Baleno Diesel", "Maruthi Suzuki ignis Diesel", "Maruthi Suzuki ignis Petrol", "Maruthi Suzuki Ertiga Diesel Hybrid", "Maruthi Suzuki Ertiga Diesel", "Maruthi Suzuki Ertiga Petrol Hybrid", "Maruthi Suzuki Ertiga Petrol", "Maruthi Suzuki S Cross 1.3 Diesel", "Maruthi Suzuki S Cross 1.6 Diesel", "Maruthi Suzuki S Cross Diesel Hybrid", "Maruthi Suzuki Grand Vitara Diesel", "Maruthi Suzuki Grand Vitara Petrol", "Maruthi Suzuki Grand Vitara Petrol Hybrid", "Maruthi Suzuki XL6 Hybrid", "Maruthi Suzuki Fronx Petrol",  "Maruthi Suzuki Fronx Petrol Hybrid"],
        "Hyundai": ["Hyundai EON Petrol", "Hyundai Santro Petrol", "Hyundai Grand i10 Petrol", "Hyundai Grand i10 Diesel",  "Hyundai i10 NIOS Diesel", "Hyundai i10 NIOS Petrol", "Hyundai Aura Diesel", "Hyundai Aura Petrol", "Hyundai Creta Petrol", "Hyundai Creta Diesel", "Hyundai Getz 1.6 Diesel",  "Hyundai Getz Petrol", "Hyundai i20 Sportz Petrol", "Hyundai i20 Sportz Diesel", "Hyundai Verna 1.4 Diesel", "Hyundai Verna 1.4 Petrol", "Hyundai Fluidic Verna Petrol", "Hyundai Xcent Diesel", "Hyundai Xcent Petrol", "Hyundai Elite i20 Petrol", "Hyundai Elite i20 Diesel", "Hyundai Santha fe Diesel", "Hyundai Alcazar Diesel", "Hyundai Alcazar Petrol", "Hyundai Tucson Diesel", "Hyundai Tuscon Petrol", "Hyundai Venue Petrol", "Hyundai Venue Diesel", "Hyundai Venue Petrol", "Hyundai Aura Diesel", "Hyundai Elantra 1.6 Diesel",  "Hyundai Elantra 1.6 Petrol", "Hyundai i20 Sprotz Petrol(After 2015)", "Hyundai Verna CRDi Diesel(after 2017)-Next Gen",  "Hyundai Verna CRDi Petrol(after 2017)-Next Gen"],
        "Honda": ["Honda AMAZE Petrol", "Honda AMAZE Diesel", "Honda CITY Petrol", "Honda CITY Diesel", "Honda BRIO Petrol", "Honda JAZZ Petrol", "Honda JAZZ Diesel", "Honda Mobilio Petrol", "Honda Mobilio Diesel", "Honda BR-V-diesel", "Honda BR-V-Petrol", "Honda WR-V Petrol", "Honda WR-V Diesel", "Honda CR-V PETROL", "Honda Amaze Diesel", "Honda ACCORD Petrol", "Honda CIVIC Petrol", "Honda Elevate Petrol"],
        "Skoda": ["Skoda Rapid Diesel", "Skoda Rapid Petrol", "SKODA Octavia Diesel", "Skoda Octavia Petrol", "Skoda Superb Petrol", "Skoda Suberb Diesel", "Skoda Yeti 2.0 Diesel", "Skoda Fabia Diesel", "Skoda Fabia Petrol", "Skoda Laura Diesel", "Skoda Laura Petrol", "Skoda Kodiaq Diesel", "Skoda Kushaq Petrol",  "Skoda Slavia Petrol", "Skoda Comdi Diesel"],
        "Tata motors": ["TATA NEXON Diesel", "TATA NEXON Petrol", "TATA Altroz Diesel", "TATA Altroz Petrol", "TATA Tigor Diesel", "TATA Tigor Petrol", "TATA HARRIER Diesel", "TATA TIAGO Petrol", "TATA TIAGO Diesel", "TATA HEXA Diesel", "TATA ZEST Petrol", "TATA ZEST Diesel", "TATA PUNCH Diesel", "TATA PUNCH Petrol", "TATA SAFARI STROME Diesel", "TATA SAFARI Diesel", "TATA SUMO Diesel", "TATA SAFARI DICOR Diesel", "TATA INDIGO Diesel"],
        "FORD": ["FORD FIGO Diesel", "FORD FIGO PETROL", "FORD Aspire Diesel", "FORD Aspire Petrol", "FORD Freestyle Diesel", "FORD Freestyle Petrol", "FORD ENDEAVOUR 2.5 Diesel", "FORD ENDEAVOUR 3.0 Diesel", "FORD ECOSTORT Diesel", "FORD ECOSTORT PETROL", "FORD FIESTA Diesel", "FORD FIESTA Petrol", "FORD IKON Diesel"],
        "Fiat": ["Fiat Linea Diesel", "Fiat Linea Petrol", "Fiat Grande Punto Diesel", "Fiat Grande Punto Petrol", "Fiat AVVENTURA Diesel", "Fiat AVVENTURA petrol"],
        "BMW": [ "BMW X1 Diesel","BMW X1 Petrol", "BMW X3 Diesel",  "BMW X3 Petrol", "BMW X4 Diesel",  "BMW X4 Petrol", "BMW X5 Diesel",  "BMW X5 Petrol",  "BMW 3 Series Diesel", "BMW 3 Series Petrol",  "BMW 5 Series 320D Diesel", "BMW 5 Series 520D Diesel", "BMW 7 Series 750li PETROL",  "BMW 6 Series Diesel", "BMW 6 Series 650i PETROL", "BMW M2 Petrol", "BMW M5 Petrol", "BMW Z4 Diesel",  "BMW Z4 Petrol", "BMW GT"],
        "MINI": ["MINICOUNTRYMAN COOPER SD(DIESEL)", "MINI COUNTRYMAN COOPER S JCW INSPIRED(PETROL)", "MINI CLUBMAN COOPER S (PETROL)"],
        "Audi": ["Audi A3 Diesel", "Audi A3 Petrol", "Audi A4 Petrol", "Audi A4 DIESEL",  "Audi A5 DIESEL", "Audi A6 Petrol", "Audi A6 Diesel", "Audi A7 3.0 Diesel", "Audi A8 L Diesel", "Audi A8 L Diesel", "Audi Q3 Petrol",  "Audi Q3 Diesel", "Audi Q5 Petrol", "Audi Q5 3.0 Quattaro Diesel", "Audi Q7 Diesel", "Audi Q7 Petrol"],
        "Jaguar": ["Jaguar XE Diesel", "Jaguar XF Petrol", "Jaguar F TYPE Petrol", "Jaguar XF Petrol", "Jaguar XJ Petrol", "Jaguar XF Diesel", "Jaguar XJ Diesel "],
        "JEEP": ["Jeep Compass Sport Petrol", "Jeep Wrangler Unlimited Diesel", "Jeep Compass Sport Diesel", "Jeep Compass Longitude Diesel", "Jeep Compass Limited Petrol", "Jeep Compass Limited Diesel"],
        "VOLVO": ["Volvo S60 Diesel", "Volvo S60 Petrol", "Volvo V60  Cross Country Diesel", "Volvo S60 Cross Country DIESEL", "Volvo S60 Petrol", "Volvo XC60 Diesel ", "Volvo S90 Diesel", "Volvo XC90 Petrol", "Volvo XC40 DIESEL"],
        "Mahindra": ["Mahindra XUV 500 Diesel", "Mahindra Xylo  D2 Diesel", "Mahindra Xylo  E2 Diesel", "Mahindra TUV 300 Diesel", "Mahindra KUV 100 ESS Diesel", "Mahindra KUV 100 ESS PETROL ", "Mahindra Bolera Diesel", "Mahindra Renault Logan 1.5 Diesel", "Mahindra ALTURAS G4", "Mahindra Renault Logan 1.4 Petrol", "Mahindra Thar Diesel", "Mahindra Scorpio Vlx Diesel", "Mahindra Bolero New Diesel", "Mahindra Quanto Diesel", "Mahindra Marazzo Diesel", "Mahindra Verito 1.4 Petrol", "Mahindra Verito 1.5 Diesel", "Mahindra XUV700", "Mahindra  XUV 300 PETROL", "Mahindra XUV 300 DIESEL"],
        "Renault": ["Renault Pulse Diesel", "Renault Scala Petrol", "Renault Scala Diesel", "Renault Kwid",  "Renault Kiger Petrol", "Renault Lodgy", "Renault Captur Petrol", "Renault Captur Diesel", "Renault Triber Petrol"],
        "ICML": ["ICML Delite Diesel", "ICML Rhino Diesel", "ICML Winner Diesel", "ICML Xcitor Diesel", "ICML Xcitor Diesel"],
        "Force motors": ["Force Motors Minidor", "Force Motors Balwan-330-25Hp", "Force Motors Balwan-400-35Hp", "Force Motors orchard", "Force Motors Balwan-550-52Hp", "Force Motors Balwan-400-35Hp", "Force Motors Balwan-450-40Hp", "Force Motors OX 25", "Force Motors TRAVELLER DIESEL"],
        "BENTLEY": ["Bentley Flying Spur Petrol", "Bentley Continental Petrol", "Bentley Bentayga Petrol", "Bentley Mulsanne Petrol"],
		"Chevrolet": ["Chevrolet Opel Vectra Diesel", "Chevrolet Opel Vectra Petrol",  "Chevrolet Enjoy Diesel", "Chevrolet Cruze Diesel", "Chevrolet Captiva Diesel", "Chevrolet Spark Petrol", "Chevrolet Sail Diesel", "Chevrolet Sail Petrol", "Chevrolet Optra Royal 1.6 Petrol", "Chevrolet Tavera Diesel", "Chevrolet Enjoy Petrol", "Chevrolet Optra 1.6 Petrol", "Chevrolet Beat Petrol", "Chevrolet Optra Magnum Diesel", "Chevrolet Beat Diesel"],                                                
        "Nissan": ["Nissan Evalia Diesel", "Nissan Micra 1.5L Diesel", "Nissan Micra 1.2L Petrol", "Nissan Sunny 1.5L Diesel", "Nissan Sunny 1.5L Petrol", "Nissan Micra 1.5L XV Automatic Petrol", "Nissan Magnite Petrol", "Nissan Teana 250XL Petrol", "Nissan Terrano Diesel", "Nissan Terrano Petrol", "Nissan Kicks Diesel",  "Nissan Kicks Petrol", "Nissan X Trail Diesel", "Nissan Datsun Go Petrol", "Nissan Evalia Diesel", "Nissan Micra Petrol"],
        "Volkswagen": ["Volkswagen Beetle 2.0L Petrol", "Volkswagen Jetta Diesel New", "Volkswagen Jetta Diesel Old", "Volkswagen Passat Diesel", "Volkswagen Passat Petrol", "Volkswagen Phaeton 3.6 v6", "Volkswagen Ameo Diesel", "Volkswagen Ameo Petrol",  "Volkswagen Polo 1.2 Diesel", "Volkswagen Polo 1.2 Petrol", "Volkswagen Polo 1.6 Petrol", "Volkswagen Vento 1.6 Diesel", "Volkswagen Vento 1.6 Petrol", "Volkswagen Vento Old", "Volkswagen Passat Hybrid", "Volkswagen Vento 1.2 Diesel", "Volkswagen Vento 1.2 Petrol", "Volkswagen Polo 1.5 Diesel", "Volkswagen Tiguan 2.0 Diesel","Volkswagen Tiguan Petrol", "Volkswagen Virtus Diesel","Volkswagen Virtus Petrol"],
        "Toyota": ["Toyota Corolla Petrol", "Toyota Camry Petrol", "Toyota Corolla Altis Diesel", "Toyota Corolla Altis Petrol", "Toyota Etios Diesel", "Toyota Etios Liva Petrol", "Toyota Etios Petrol", "Toyota Fortuner D4 Diesel", "Toyota Innova Diesel ", "Toyota Innova Petrol", "Toyota Qualis Diesel", "Toyota Qualis Petrol", "Toyota Lexus Diesel", "Toyota Innova Crysta Diesel", "Toyota Land Cruiser Prado 4.5 Diesel", "Toyota Land Cruiser Petrol", "Toyota New Innova Special Edition Diesel"] 
  };

  const batteryDetails = {
    "KIA Carnival": [
            {
                modelName: "Exide FEY0-EY105D31L(85 AH)",
                image: "ee.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.7640.<br>Without Old Battery: Rs. 9799 <br> Warranty: 48 Months(24 Months Free Of Cost + 24 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron AAM-GO-00105D31L(85 AH)",
                image: "ee2.png",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs 6900..<br>Without Old Battery: Rs.9050 <br>Warranty: 48 Months(24 Months Free Of Cost + 24 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            },
		 {
                modelName: "ELITO BY AMARON ET105D31L(85 AH)",
                image: "E105D31L.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs 6350..<br>Without Old Battery: Rs.8480 <br>Warranty: 48 Months(24 Months Free Of Cost + 24 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],
	 "KIA SELTOS DIESEL": [
            {
                modelName: "EXIDE MILEAGE MLDIN60 (60AH)",
                image: "n.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.7270.<br>Without Old Battery: Rs.9420 <br> Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving",
            },
            {
                modelName: "Amaron FLO DIN66 (60AH) 566112060",
                image: "5.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs:6700..<br>Without Old Battery: Rs.8840 <br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            },
		 {
                modelName: "ELITO BY AMARON ETDIN65(65 AH)",
                image: "EDIN60.png",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs 6020..<br>Without Old Battery: Rs.8140 <br>Warranty: 60 Months(30 Months Free Of Cost + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            }
		 
        ],
	"KIA SELTOS PETROL": [
            {
                modelName: "EXIDE MILEAGE MLDIN44LH(45AH)",
                image: "6.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs:5650.<br>Without Old Battery: Rs:7270 <br> Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron FLO DIN45 (545106036)45AH",
                image: "5.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs:5170..<br>Without Old Battery: Rs:6780 <br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            },
		  {
                modelName: "ELITO BY AMARON ETDIN45(45 AH)",
                image: "EDIN60.png",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs 4640..<br>Without Old Battery: Rs.6230 <br>Warranty: 60 Months(30 Months Free Of Cost + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],

	   "KIA SONET DIESEL": [
            {
                modelName: "EXIDE MILEAGE MLDIN60 (60AH)",
                image: "n.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.7270.<br>Without Old Battery: Rs.9420 <br> Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving",
            },
            {
                modelName: "Amaron FLO DIN66 (60AH) 566112060",
                image: "5.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs:6700..<br>Without Old Battery: Rs.8840 <br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            },
		 {
                modelName: "ELITO BY AMARON ETDIN65(65 AH)",
                image: "EDIN60.png",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs 6020..<br>Without Old Battery: Rs.8140 <br>Warranty: 60 Months(30 Months Free Of Cost + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            }
		 
        ],

	  
	    "KIA SONET PETROL": [
            {
                modelName: "EXIDE MILEAGE MLDIN44LH(45AH)",
                image: "6.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs:5650.<br>Without Old Battery: Rs:7270 <br> Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron FLO DIN45 (545106036)45AH",
                image: "5.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs:5170..<br>Without Old Battery: Rs:6780 <br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            },
		      {
                modelName: "ELITO BY AMARON ETDIN45(45 AH)",
                image: "EDIN60.png",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs 4640..<br>Without Old Battery: Rs.6230 <br>Warranty: 60 Months(30 Months Free Of Cost + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],

	   "KIA Carens Diesel": [
            {
                modelName: "EXIDE MILEAGE MLDIN60 (60AH)",
                image: "n.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.7270.<br>Without Old Battery: Rs.9420 <br> Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving",
            },
            {
                modelName: "Amaron FLO DIN66 (60AH) 566112060",
                image: "5.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs:6700..<br>Without Old Battery: Rs.8840 <br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            },
		 {
                modelName: "ELITO BY AMARON ETDIN65(65 AH)",
                image: "EDIN60.png",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs 6020..<br>Without Old Battery: Rs.8140 <br>Warranty: 60 Months(30 Months Free Of Cost + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            }
		 
        ],

	    
	    "KIA Carens Petrol": [
            {
                modelName: "EXIDE MILEAGE MLDIN44LH(45AH)",
                image: "6.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs:5650.<br>Without Old Battery: Rs:7270 <br> Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron FLO DIN45 (545106036)45AH",
                image: "5.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs:5170..<br>Without Old Battery: Rs:6780 <br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            },
		      {
                modelName: "ELITO BY AMARON ETDIN45(45 AH)",
                image: "EDIN60.png",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs 4640..<br>Without Old Battery: Rs.6230 <br>Warranty: 60 Months(30 Months Free Of Cost + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],

	 "MG HECTOR Diesel": [
            {
                modelName: "Exide FEY0-EY105D31L(85 AH)",
                image: "ee.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.7640.<br>Without Old Battery: Rs. 9799 <br> Warranty: 48 Months(24 Months Free Of Cost + 24 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron AAM-GO-00105D31L(85 AH)",
                image: "ee2.png",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs 6900..<br>Without Old Battery: Rs.9050 <br>Warranty: 48 Months(24 Months Free Of Cost + 24 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            },
		  {
                modelName: "ELITO BY AMARON ET105D31L(85 AH)",
                image: "E105D31L.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs 6350..<br>Without Old Battery: Rs.8480 <br>Warranty: 48 Months(24 Months Free Of Cost + 24 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],
	 "MG Glowstar": [
            {
                modelName: "Exide FEY0-EY105D31L(85 AH)",
                image: "ee.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.7640.<br>Without Old Battery: Rs. 9799 <br> Warranty: 48 Months(24 Months Free Of Cost + 24 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Car battery replacement in Bangalore.",
            },
            {
                modelName: "Amaron AAM-GO-00105D31L(85 AH)",
                image: "ee2.png",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs 6900..<br>Without Old Battery: Rs.9050 <br>Warranty: 48 Months(24 Months Free Of Cost + 24 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            },
		  {
                modelName: "ELITO BY AMARON ET105D31L(85 AH)",
                image: "E105D31L.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs 6350..<br>Without Old Battery: Rs.8480 <br>Warranty: 48 Months(24 Months Free Of Cost + 24 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],

	  	 "MG Astor": [
            {
                modelName: "EXIDE MILEAGE MLDIN60 (60AH)",
                image: "n.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.7270.<br>Without Old Battery: Rs.9420 <br> Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving",
            },
            {
                modelName: "Amaron FLO DIN66 (60AH) 566112060",
                image: "5.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs:6700..<br>Without Old Battery: Rs.8840 <br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            },
		 {
                modelName: "ELITO BY AMARON ETDIN65(65 AH)",
                image: "EDIN60.png",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs 6020..<br>Without Old Battery: Rs.8140 <br>Warranty: 60 Months(30 Months Free Of Cost + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            }
		 
        ],
	    "Maruthi Suzuki Alto 800 Petrol": [
                {
                modelName: "Exide Mileage ML38B20L (35AH)",
                image: "23.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.3820.<br>Without Old Battery: Rs.4900<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		     {
                modelName: "Exide EPIQ 35L (35AH)",
                image: "EPIQ35L.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.4430.<br>Without Old Battery: Rs.5520<br>Warranty: 77 Months (42 Months Full Replacement + 35 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		        {
                modelName: "Exide Matrix MT40b20L (35AH)",
                image: "E40B20L.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.4010.<br>Without Old Battery: Rs.5090<br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		       {
                modelName: "Exide Eezy 34B19L (35AH)",
                image: "EY34B19L.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.3490.<br>Without Old Battery: Rs.4560<br>Warranty: 48 Months (24 Months Full Replacement + 24 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		      {
                modelName: "AMARON GO 38B20L (35AH)",
                image: "AM38B20L.png",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.3510.<br>Without Old Battery: Rs.4580<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		      {
                modelName: "AMARON FLO 40B20L (35AH)",
                image: "AM38B20L.png",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.3800.<br>Without Old Battery: Rs.4880<br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		      {
                modelName: "ELITO BY AMARON ET38B20L (35AH)",
                image: "ELITO40B20L.jpeg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.3060.<br>Without Old Battery: Rs.4130<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            }
          
        ],

	     "Maruthi Suzuki K10 Petrol": [
                {
                modelName: "Exide Mileage ML38B20L (35AH)",
                image: "23.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.3820.<br>Without Old Battery: Rs.4900<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		     {
                modelName: "Exide EPIQ 35L (35AH)",
                image: "EPIQ35L.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.4430.<br>Without Old Battery: Rs.5520<br>Warranty: 77 Months (42 Months Full Replacement + 35 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		        {
                modelName: "Exide Matrix MT40b20L (35AH)",
                image: "E40B20L.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.4010.<br>Without Old Battery: Rs.5090<br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		       {
                modelName: "Exide Eezy 34B19L (35AH)",
                image: "EY34B19L.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.3490.<br>Without Old Battery: Rs.4560<br>Warranty: 48 Months (24 Months Full Replacement + 24 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		      {
                modelName: "AMARON GO 38B20L (35AH)",
                image: "AM38B20L.png",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.3510.<br>Without Old Battery: Rs.4580<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		      {
                modelName: "AMARON FLO 40B20L (35AH)",
                image: "AM38B20L.png",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.3800.<br>Without Old Battery: Rs.4880<br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		      {
                modelName: "ELITO BY AMARON ET38B20L (35AH)",
                image: "ELITO40B20L.jpeg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.3060.<br>Without Old Battery: Rs.4130<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            }
          
        ],
		    
		    
	    "Maruthi Suzuki A Star Petrol": [
		             {
                modelName: "Exide Mileage ML38B20L (35AH)",
                image: "23.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.3820.<br>Without Old Battery: Rs.4900<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		     {
                modelName: "Exide EPIQ 35L (35AH)",
                image: "EPIQ35L.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.4430.<br>Without Old Battery: Rs.5520<br>Warranty: 77 Months (42 Months Full Replacement + 35 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		        {
                modelName: "Exide Matrix MT40b20L (35AH)",
                image: "E40B20L.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.4010.<br>Without Old Battery: Rs.5090<br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		       {
                modelName: "Exide Eezy 34B19L (35AH)",
                image: "EY34B19L.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.3490.<br>Without Old Battery: Rs.4560<br>Warranty: 48 Months (24 Months Full Replacement + 24 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		      {
                modelName: "AMARON GO 38B20L (35AH)",
                image: "AM38B20L.png",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.3510.<br>Without Old Battery: Rs.4580<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		      {
                modelName: "AMARON FLO 40B20L (35AH)",
                image: "AM38B20L.png",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.3800.<br>Without Old Battery: Rs.4880<br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		      {
                modelName: "ELITO BY AMARON ET38B20L (35AH)",
                image: "ELITO40B20L.jpeg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.3060.<br>Without Old Battery: Rs.4130<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            }
          
        ],

	   "Maruthi Suzuki Jimny Petrol": [
            {
                modelName: "Exide Mileage MLN55 (ISS) - 45AH",
                image: "28.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.6480.<br>Without Old Battery: Rs.8120<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron AAM-GO-00050B24L (50Ah)",
                image: "29.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.5560..<br>Without Old Battery: Rs. 7180<br>Warranty: 48 Months (24 Months Full Replacement + 24 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],

	      "Maruthi Suzuki Eeco Petrol": [
                     {
                modelName: "Exide Mileage ML38B20L (35AH)",
                image: "23.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.3820.<br>Without Old Battery: Rs.4900<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		     {
                modelName: "Exide EPIQ 35L (35AH)",
                image: "EPIQ35L.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.4430.<br>Without Old Battery: Rs.5520<br>Warranty: 77 Months (42 Months Full Replacement + 35 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		        {
                modelName: "Exide Matrix MT40b20L (35AH)",
                image: "E40B20L.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.4010.<br>Without Old Battery: Rs.5090<br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		       {
                modelName: "Exide Eezy 34B19L (35AH)",
                image: "EY34B19L.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.3490.<br>Without Old Battery: Rs.4560<br>Warranty: 48 Months (24 Months Full Replacement + 24 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		      {
                modelName: "AMARON GO 38B20L (35AH)",
                image: "AM38B20L.png",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.3510.<br>Without Old Battery: Rs.4580<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		      {
                modelName: "AMARON FLO 40B20L (35AH)",
                image: "AM38B20L.png",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.3800.<br>Without Old Battery: Rs.4880<br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		      {
                modelName: "ELITO BY AMARON ET38B20L (35AH)",
                image: "ELITO40B20L.jpeg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.3060.<br>Without Old Battery: Rs.4130<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            }
          
        ],

	    "Maruthi Suzuki Gypsy Petrol": [
                {
                modelName: "Exide Mileage ML38B20L (35AH)",
                image: "23.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.3820.<br>Without Old Battery: Rs.4900<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		     {
                modelName: "Exide EPIQ 35L (35AH)",
                image: "EPIQ35L.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.4430.<br>Without Old Battery: Rs.5520<br>Warranty: 77 Months (42 Months Full Replacement + 35 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		        {
                modelName: "Exide Matrix MT40b20L (35AH)",
                image: "E40B20L.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.4010.<br>Without Old Battery: Rs.5090<br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		       {
                modelName: "Exide Eezy 34B19L (35AH)",
                image: "EY34B19L.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.3490.<br>Without Old Battery: Rs.4560<br>Warranty: 48 Months (24 Months Full Replacement + 24 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		      {
                modelName: "AMARON GO 38B20L (35AH)",
                image: "AM38B20L.png",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.3510.<br>Without Old Battery: Rs.4580<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		      {
                modelName: "AMARON FLO 40B20L (35AH)",
                image: "AM38B20L.png",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.3800.<br>Without Old Battery: Rs.4880<br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		      {
                modelName: "ELITO BY AMARON ET38B20L (35AH)",
                image: "ELITO40B20L.jpeg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.3060.<br>Without Old Battery: Rs.4130<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            }
          
        ],

	  
	     "Maruthi Suzuki Omni Petrol": [
                {
                modelName: "Exide Mileage ML38B20L (35AH)",
                image: "23.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.3820.<br>Without Old Battery: Rs.4900<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		     {
                modelName: "Exide EPIQ 35L (35AH)",
                image: "EPIQ35L.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.4430.<br>Without Old Battery: Rs.5520<br>Warranty: 77 Months (42 Months Full Replacement + 35 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		        {
                modelName: "Exide Matrix MT40b20L (35AH)",
                image: "E40B20L.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.4010.<br>Without Old Battery: Rs.5090<br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		       {
                modelName: "Exide Eezy 34B19L (35AH)",
                image: "EY34B19L.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.3490.<br>Without Old Battery: Rs.4560<br>Warranty: 48 Months (24 Months Full Replacement + 24 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		      {
                modelName: "AMARON GO 38B20L (35AH)",
                image: "AM38B20L.png",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.3510.<br>Without Old Battery: Rs.4580<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		      {
                modelName: "AMARON FLO 40B20L (35AH)",
                image: "AM38B20L.png",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.3800.<br>Without Old Battery: Rs.4880<br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		      {
                modelName: "ELITO BY AMARON ET38B20L (35AH)",
                image: "ELITO40B20L.jpeg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.3060.<br>Without Old Battery: Rs.4130<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            }
          
        ],

	      
	    "Maruthi Suzuki Zen Petrol": [
		             {
                modelName: "Exide Mileage ML38B20L (35AH)",
                image: "23.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.3820.<br>Without Old Battery: Rs.4900<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		     {
                modelName: "Exide EPIQ 35L (35AH)",
                image: "EPIQ35L.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.4430.<br>Without Old Battery: Rs.5520<br>Warranty: 77 Months (42 Months Full Replacement + 35 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		        {
                modelName: "Exide Matrix MT40b20L (35AH)",
                image: "E40B20L.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.4010.<br>Without Old Battery: Rs.5090<br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		       {
                modelName: "Exide Eezy 34B19L (35AH)",
                image: "EY34B19L.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.3490.<br>Without Old Battery: Rs.4560<br>Warranty: 48 Months (24 Months Full Replacement + 24 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		      {
                modelName: "AMARON GO 38B20L (35AH)",
                image: "AM38B20L.png",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.3510.<br>Without Old Battery: Rs.4580<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		      {
                modelName: "AMARON FLO 40B20L (35AH)",
                image: "AM38B20L.png",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.3800.<br>Without Old Battery: Rs.4880<br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		      {
                modelName: "ELITO BY AMARON ET38B20L (35AH)",
                image: "ELITO40B20L.jpeg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.3060.<br>Without Old Battery: Rs.4130<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            }
          
        ],

	   "Maruthi Suzuki Wagnor Petrol": [
                     {
                modelName: "Exide Mileage ML38B20L (35AH)",
                image: "23.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.3820.<br>Without Old Battery: Rs.4900<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		     {
                modelName: "Exide EPIQ 35L (35AH)",
                image: "EPIQ35L.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.4430.<br>Without Old Battery: Rs.5520<br>Warranty: 77 Months (42 Months Full Replacement + 35 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		        {
                modelName: "Exide Matrix MT40b20L (35AH)",
                image: "E40B20L.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.4010.<br>Without Old Battery: Rs.5090<br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		       {
                modelName: "Exide Eezy 34B19L (35AH)",
                image: "EY34B19L.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.3490.<br>Without Old Battery: Rs.4560<br>Warranty: 48 Months (24 Months Full Replacement + 24 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		      {
                modelName: "AMARON GO 38B20L (35AH)",
                image: "AM38B20L.png",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.3510.<br>Without Old Battery: Rs.4580<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		      {
                modelName: "AMARON FLO 40B20L (35AH)",
                image: "AM38B20L.png",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.3800.<br>Without Old Battery: Rs.4880<br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		      {
                modelName: "ELITO BY AMARON ET38B20L (35AH)",
                image: "ELITO40B20L.jpeg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.3060.<br>Without Old Battery: Rs.4130<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            }
          
        ],

	      "Maruthi Suzuki S Presso Petrol": [
                {
                modelName: "Exide Mileage ML38B20L (35AH)",
                image: "23.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.3820.<br>Without Old Battery: Rs.4900<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		     {
                modelName: "Exide EPIQ 35L (35AH)",
                image: "EPIQ35L.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.4430.<br>Without Old Battery: Rs.5520<br>Warranty: 77 Months (42 Months Full Replacement + 35 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		        {
                modelName: "Exide Matrix MT40b20L (35AH)",
                image: "E40B20L.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.4010.<br>Without Old Battery: Rs.5090<br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		       {
                modelName: "Exide Eezy 34B19L (35AH)",
                image: "EY34B19L.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.3490.<br>Without Old Battery: Rs.4560<br>Warranty: 48 Months (24 Months Full Replacement + 24 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		      {
                modelName: "AMARON GO 38B20L (35AH)",
                image: "AM38B20L.png",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.3510.<br>Without Old Battery: Rs.4580<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		      {
                modelName: "AMARON FLO 40B20L (35AH)",
                image: "AM38B20L.png",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.3800.<br>Without Old Battery: Rs.4880<br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		      {
                modelName: "ELITO BY AMARON ET38B20L (35AH)",
                image: "ELITO40B20L.jpeg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.3060.<br>Without Old Battery: Rs.4130<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            }
          
        ],


	    "Maruthi Suzuki Celerio Diesel": [
            {
                modelName: "Exide Mileage MLDIN50(50AH",
                image: "30.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.6210.<br>Without Old Battery: Rs.7840<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron FLO DIN50 L(50AH)",
                image: "31.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.5730.<br>Without Old Battery: Rs.7340.<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            },
		       {
                modelName: "ELITO BY AMARON ETDIN50L(50AH)",
                image: "EDIN60.png",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.5100.<br>Without Old Battery: Rs.6710.<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],
	
	      "Maruthi Suzuki Celerio Petrol": [
                     {
                modelName: "Exide Mileage ML38B20L (35AH)",
                image: "23.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.3820.<br>Without Old Battery: Rs.4900<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		     {
                modelName: "Exide EPIQ 35L (35AH)",
                image: "EPIQ35L.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.4430.<br>Without Old Battery: Rs.5520<br>Warranty: 77 Months (42 Months Full Replacement + 35 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		        {
                modelName: "Exide Matrix MT40b20L (35AH)",
                image: "E40B20L.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.4010.<br>Without Old Battery: Rs.5090<br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		       {
                modelName: "Exide Eezy 34B19L (35AH)",
                image: "EY34B19L.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.3490.<br>Without Old Battery: Rs.4560<br>Warranty: 48 Months (24 Months Full Replacement + 24 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		      {
                modelName: "AMARON GO 38B20L (35AH)",
                image: "AM38B20L.png",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.3510.<br>Without Old Battery: Rs.4580<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		      {
                modelName: "AMARON FLO 40B20L (35AH)",
                image: "AM38B20L.png",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.3800.<br>Without Old Battery: Rs.4880<br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		      {
                modelName: "ELITO BY AMARON ET38B20L (35AH)",
                image: "ELITO40B20L.jpeg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.3060.<br>Without Old Battery: Rs.4130<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            }
          
        ],

	  
	     "Maruthi Suzuki Ritz Diesel": [
            {
                modelName: "EXIDE MILEAGE(MLDIN66)(66AH)",
                image: "32.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.7300.<br>Without Old Battery: Rs.9450<brWarranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron FLO DIN65 (565106590)(65AH)",
                image: "33.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.6710.<br>Without Old Battery: Rs.8850.<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            },
		       {
                modelName: "ELITO BY AMARON ETDIN65L(65AH)",
                image: "EDIN60.png",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.6020.<br>Without Old Battery: Rs.8140.<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],

	     "Maruthi Suzuki Ritz Petrol": [
                     {
                modelName: "Exide Mileage ML38B20L (35AH)",
                image: "23.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.3820.<br>Without Old Battery: Rs.4900<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		     {
                modelName: "Exide EPIQ 35L (35AH)",
                image: "EPIQ35L.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.4430.<br>Without Old Battery: Rs.5520<br>Warranty: 77 Months (42 Months Full Replacement + 35 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		        {
                modelName: "Exide Matrix MT40b20L (35AH)",
                image: "E40B20L.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.4010.<br>Without Old Battery: Rs.5090<br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		       {
                modelName: "Exide Eezy 34B19L (35AH)",
                image: "EY34B19L.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.3490.<br>Without Old Battery: Rs.4560<br>Warranty: 48 Months (24 Months Full Replacement + 24 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		      {
                modelName: "AMARON GO 38B20L (35AH)",
                image: "AM38B20L.png",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.3510.<br>Without Old Battery: Rs.4580<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		      {
                modelName: "AMARON FLO 40B20L (35AH)",
                image: "AM38B20L.png",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.3800.<br>Without Old Battery: Rs.4880<br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		      {
                modelName: "ELITO BY AMARON ET38B20L (35AH)",
                image: "ELITO40B20L.jpeg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.3060.<br>Without Old Battery: Rs.4130<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            }
          
        ],

	  
	     "Maruthi Suzuki SX4 Diesel": [
            {
                modelName: "EXIDE MILEAGE(MLDIN66)(66AH)",
                image: "32.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.7300.<br>Without Old Battery: Rs.9450<brWarranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron FLO DIN65 (565106590)(65AH)",
                image: "33.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.6710.<br>Without Old Battery: Rs.8850.<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            },
		       {
                modelName: "ELITO BY AMARON ETDIN65L(65AH)",
                image: "EDIN60.png",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.6020.<br>Without Old Battery: Rs.8140.<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],

	       "Maruthi Suzuki SX4 Petrol": [
                     {
                modelName: "Exide Mileage ML38B20L (35AH)",
                image: "23.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.3820.<br>Without Old Battery: Rs.4900<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		     {
                modelName: "Exide EPIQ 35L (35AH)",
                image: "EPIQ35L.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.4430.<br>Without Old Battery: Rs.5520<br>Warranty: 77 Months (42 Months Full Replacement + 35 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		        {
                modelName: "Exide Matrix MT40b20L (35AH)",
                image: "E40B20L.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.4010.<br>Without Old Battery: Rs.5090<br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		       {
                modelName: "Exide Eezy 34B19L (35AH)",
                image: "EY34B19L.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.3490.<br>Without Old Battery: Rs.4560<br>Warranty: 48 Months (24 Months Full Replacement + 24 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		      {
                modelName: "AMARON GO 38B20L (35AH)",
                image: "AM38B20L.png",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.3510.<br>Without Old Battery: Rs.4580<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		      {
                modelName: "AMARON FLO 40B20L (35AH)",
                image: "AM38B20L.png",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.3800.<br>Without Old Battery: Rs.4880<br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		      {
                modelName: "ELITO BY AMARON ET38B20L (35AH)",
                image: "ELITO40B20L.jpeg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.3060.<br>Without Old Battery: Rs.4130<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            }
          
        ],
	
	     "Maruthi Suzuki Ciaz Petrol": [
                     {
                modelName: "Exide Mileage ML38B20L (35AH)",
                image: "23.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.3820.<br>Without Old Battery: Rs.4900<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		     {
                modelName: "Exide EPIQ 35L (35AH)",
                image: "EPIQ35L.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.4430.<br>Without Old Battery: Rs.5520<br>Warranty: 77 Months (42 Months Full Replacement + 35 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		        {
                modelName: "Exide Matrix MT40b20L (35AH)",
                image: "E40B20L.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.4010.<br>Without Old Battery: Rs.5090<br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		       {
                modelName: "Exide Eezy 34B19L (35AH)",
                image: "EY34B19L.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.3490.<br>Without Old Battery: Rs.4560<br>Warranty: 48 Months (24 Months Full Replacement + 24 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		      {
                modelName: "AMARON GO 38B20L (35AH)",
                image: "AM38B20L.png",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.3510.<br>Without Old Battery: Rs.4580<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		      {
                modelName: "AMARON FLO 40B20L (35AH)",
                image: "AM38B20L.png",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.3800.<br>Without Old Battery: Rs.4880<br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		      {
                modelName: "ELITO BY AMARON ET38B20L (35AH)",
                image: "ELITO40B20L.jpeg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.3060.<br>Without Old Battery: Rs.4130<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            }
          
        ],
	
	    "Maruthi Suzuki Ciaz Diesel Hybrid": [
            {
                modelName: "Exide Mileage ML DIN 70(ISS)(70AH)",
                image: "26.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.8510.<br>Without Old Battery: Rs.10680<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		       {
                modelName: "EXIDE EPIQ DIN74L (74Ah) Car Battery",
                image: "EPIQDIN74L.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.10750.<br>Without Old Battery: Rs.12970.<br>Warranty: 77 Months (42 Months Full Replacement + 35 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            },
		    
            {
                modelName: "AMARON AAM-DR-EFBDIN70L (ISS) (70Ah) Car Battery",
                image: "27.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.7250.<br>Without Old Battery: Rs.9400.<br>Warranty: 48 Months (24 Months Full Replacement + 24 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            },
		      {
                modelName: "AMARON AAM-DR-DIN74L (74Ah) Car Battery",
                image: "27.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.9700.<br>Without Old Battery: Rs.11900.<br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],
	    "Maruthi Suzuki Ciaz Petrol Hybrid": [
            {
                modelName: "Exide Mileage MLN55 (ISS) - 45AH",
                image: "28.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.6480.<br>Without Old Battery: Rs.8120<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron AAM-GO-00050B24L (50Ah)",
                image: "29.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.5560..<br>Without Old Battery: Rs. 7180<br>Warranty: 48 Months (24 Months Full Replacement + 24 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],
	    "Maruthi Suzuki Swift Petrol": [
                {
                modelName: "Exide Mileage ML38B20L (35AH)",
                image: "23.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.3820.<br>Without Old Battery: Rs.4900<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		     {
                modelName: "Exide EPIQ 35L (35AH)",
                image: "EPIQ35L.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.4430.<br>Without Old Battery: Rs.5520<br>Warranty: 77 Months (42 Months Full Replacement + 35 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		        {
                modelName: "Exide Matrix MT40b20L (35AH)",
                image: "E40B20L.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.4010.<br>Without Old Battery: Rs.5090<br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		       {
                modelName: "Exide Eezy 34B19L (35AH)",
                image: "EY34B19L.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.3490.<br>Without Old Battery: Rs.4560<br>Warranty: 48 Months (24 Months Full Replacement + 24 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		      {
    modelName: "AMARON GO 38B20L (35AH)",
                image: "AM38B20L.png",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.3510.<br>Without Old Battery: Rs.4580<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		      {
                modelName: "AMARON FLO 40B20L (35AH)",
                image: "AM38B20L.png",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.3800.<br>Without Old Battery: Rs.4880<br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		      {
                modelName: "ELITO BY AMARON ET38B20L (35AH)",
                image: "ELITO40B20L.jpeg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.3060.<br>Without Old Battery: Rs.4130<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            }
          
        ],
	
	     "Maruthi Suzuki New Baleno Petrol": [
		         {
                modelName: "Exide Mileage ML38B20L (35AH)",
                image: "23.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.3820.<br>Without Old Battery: Rs.4900<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		     {
                modelName: "Exide EPIQ 35L (35AH)",
                image: "EPIQ35L.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.4430.<br>Without Old Battery: Rs.5520<br>Warranty: 77 Months (42 Months Full Replacement + 35 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		        {
                modelName: "Exide Matrix MT40b20L (35AH)",
                image: "E40B20L.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.4010.<br>Without Old Battery: Rs.5090<br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		       {
                modelName: "Exide Eezy 34B19L (35AH)",
                image: "EY34B19L.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.3490.<br>Without Old Battery: Rs.4560<br>Warranty: 48 Months (24 Months Full Replacement + 24 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		      {
                modelName: "AMARON GO 38B20L (35AH)",
                image: "AM38B20L.png",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.3510.<br>Without Old Battery: Rs.4580<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		      {
                modelName: "AMARON FLO 40B20L (35AH)",
                image: "AM38B20L.png",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.3800.<br>Without Old Battery: Rs.4880<br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		      {
                modelName: "ELITO BY AMARON ET38B20L (35AH)",
                image: "ELITO40B20L.jpeg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.3060.<br>Without Old Battery: Rs.4130<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            }
          
        ],

	   "Maruthi Suzuki New Baleno RS Petrol": [
            {
                modelName: "Exide Mileage MLN55 (ISS) - 45AH",
                image: "28.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.6480.<br>Without Old Battery: Rs.8120<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron AAM-GO-00050B24L (50Ah)",
                image: "29.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.5560..<br>Without Old Battery: Rs. 7180<br>Warranty: 48 Months (24 Months Full Replacement + 24 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],
	     "Maruthi Suzuki New Baleno Diesel": [
            {
                modelName: "Exide Mileage MLDIN50(50AH",
                image: "30.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.6210.<br>Without Old Battery: Rs.7840<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron FLO DIN50 L(50AH)",
                image: "31.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.5730.<br>Without Old Battery: Rs.7340.<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            },
		       {
                modelName: "ELITO BY AMARON ETDIN50L(50AH)",
                image: "EDIN60.png",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.5100.<br>Without Old Battery: Rs.6710.<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],

	      "Maruthi Suzuki ignis Diesel": [
            {
                modelName: "Exide Mileage MLDIN50(50AH",
                image: "30.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.6210.<br>Without Old Battery: Rs.7840<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron FLO DIN50 L(50AH)",
                image: "31.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.5730.<br>Without Old Battery: Rs.7340.<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            },
		       {
                modelName: "ELITO BY AMARON ETDIN50L(50AH)",
                image: "EDIN60.png",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.5100.<br>Without Old Battery: Rs.6710.<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],
	     "Maruthi Suzuki ignis Petrol": [
            	         {
                modelName: "Exide Mileage ML38B20L (35AH)",
                image: "23.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.3820.<br>Without Old Battery: Rs.4900<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		     {
                modelName: "Exide EPIQ 35L (35AH)",
                image: "EPIQ35L.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.4430.<br>Without Old Battery: Rs.5520<br>Warranty: 77 Months (42 Months Full Replacement + 35 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		        {
                modelName: "Exide Matrix MT40b20L (35AH)",
                image: "E40B20L.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.4010.<br>Without Old Battery: Rs.5090<br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		       {
                modelName: "Exide Eezy 34B19L (35AH)",
                image: "EY34B19L.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.3490.<br>Without Old Battery: Rs.4560<br>Warranty: 48 Months (24 Months Full Replacement + 24 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		      {
                modelName: "AMARON GO 38B20L (35AH)",
                image: "AM38B20L.png",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.3510.<br>Without Old Battery: Rs.4580<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		      {
                modelName: "AMARON FLO 40B20L (35AH)",
                image: "AM38B20L.png",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.3800.<br>Without Old Battery: Rs.4880<br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		      {
                modelName: "ELITO BY AMARON ET38B20L (35AH)",
                image: "ELITO40B20L.jpeg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.3060.<br>Without Old Battery: Rs.4130<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            }
          
        ],

	     "Maruthi Suzuki Ertiga Diesel Hybrid": [
            {
                modelName: "Exide Mileage ML DIN 70(ISS)(70AH)",
                image: "26.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.8510.<br>Without Old Battery: Rs.10680<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		       {
                modelName: "EXIDE EPIQ DIN74L (74Ah) Car Battery",
                image: "EPIQDIN74L.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.10750.<br>Without Old Battery: Rs.12970.<br>Warranty: 77 Months (42 Months Full Replacement + 35 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            },
		    
            {
                modelName: "AMARON AAM-DR-EFBDIN70L (ISS) (70Ah) Car Battery",
                image: "27.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.7250.<br>Without Old Battery: Rs.9400.<br>Warranty: 48 Months (24 Months Full Replacement + 24 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            },
		      {
                modelName: "AMARON AAM-DR-DIN74L (74Ah) Car Battery",
                image: "27.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.9700.<br>Without Old Battery: Rs.11900.<br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],

	     "Maruthi Suzuki Ertiga Diesel": [
            {
                modelName: "EXIDE MILEAGE(MLDIN66)(66AH)",
                image: "32.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.7300.<br>Without Old Battery: Rs.9450<brWarranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron FLO DIN65 (565106590)(65AH)",
                image: "33.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.6710.<br>Without Old Battery: Rs.8850.<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            },
		       {
                modelName: "ELITO BY AMARON ETDIN65L(65AH)",
                image: "EDIN60.png",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.6020.<br>Without Old Battery: Rs.8140.<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],
	   "Maruthi Suzuki Ertiga Petrol Hybrid": [

	    {
                modelName: "Exide Mileage MLN55 (ISS) - 45AH",
                image: "28.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.6480.<br>Without Old Battery: Rs.8120<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron AAM-GO-00050B24L (50Ah)",
                image: "29.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.5560..<br>Without Old Battery: Rs. 7180<br>Warranty: 48 Months (24 Months Full Replacement + 24 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],
	     "Maruthi Suzuki Ertiga Petrol": [
         	         {
                modelName: "Exide Mileage ML38B20L (35AH)",
                image: "23.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.3820.<br>Without Old Battery: Rs.4900<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		     {
                modelName: "Exide EPIQ 35L (35AH)",
                image: "EPIQ35L.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.4430.<br>Without Old Battery: Rs.5520<br>Warranty: 77 Months (42 Months Full Replacement + 35 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		        {
                modelName: "Exide Matrix MT40b20L (35AH)",
                image: "E40B20L.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.4010.<br>Without Old Battery: Rs.5090<br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		       {
                modelName: "Exide Eezy 34B19L (35AH)",
                image: "EY34B19L.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.3490.<br>Without Old Battery: Rs.4560<br>Warranty: 48 Months (24 Months Full Replacement + 24 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		      {
                modelName: "AMARON GO 38B20L (35AH)",
                image: "AM38B20L.png",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.3510.<br>Without Old Battery: Rs.4580<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		      {
                modelName: "AMARON FLO 40B20L (35AH)",
                image: "AM38B20L.png",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.3800.<br>Without Old Battery: Rs.4880<br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		      {
                modelName: "ELITO BY AMARON ET38B20L (35AH)",
                image: "ELITO40B20L.jpeg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.3060.<br>Without Old Battery: Rs.4130<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            }
          
        ],

	      "Maruthi Suzuki S Cross 1.3 Diesel": [
            {
                modelName: "Exide Mileage MLDIN50(50AH",
                image: "30.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.6210.<br>Without Old Battery: Rs.7840<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron FLO DIN50 L(50AH)",
                image: "31.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.5730.<br>Without Old Battery: Rs.7340.<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            },
		       {
                modelName: "ELITO BY AMARON ETDIN50L(50AH)",
                image: "EDIN60.png",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.5100.<br>Without Old Battery: Rs.6710.<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],

	  "Maruthi Suzuki S Cross 1.6 Diesel": [
                      {
                modelName: "EXIDE MILEAGE(MLDIN66)(66AH)",
                image: "32.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.7300.<br>Without Old Battery: Rs.9450<brWarranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron FLO DIN65 (565106590)(65AH)",
                image: "33.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.6710.<br>Without Old Battery: Rs.8850.<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            },
		       {
                modelName: "ELITO BY AMARON ETDIN65L(65AH)",
                image: "EDIN60.png",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.6020.<br>Without Old Battery: Rs.8140.<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],
	  
	     "Maruthi Suzuki S Cross Diesel Hybrid": [
            {
                modelName: "Exide Mileage ML DIN 70(ISS)(70AH)",
                image: "26.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.8510.<br>Without Old Battery: Rs.10680<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		       {
                modelName: "EXIDE EPIQ DIN74L (74Ah) Car Battery",
                image: "EPIQDIN74L.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.10750.<br>Without Old Battery: Rs.12970.<br>Warranty: 77 Months (42 Months Full Replacement + 35 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            },
		    
            {
                modelName: "AMARON AAM-DR-EFBDIN70L (ISS) (70Ah) Car Battery",
                image: "27.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.7250.<br>Without Old Battery: Rs.9400.<br>Warranty: 48 Months (24 Months Full Replacement + 24 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            },
		      {
                modelName: "AMARON AAM-DR-DIN74L (74Ah) Car Battery",
                image: "27.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.9700.<br>Without Old Battery: Rs.11900.<br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],

	    "Maruthi Suzuki Grand Vitara Diesel": [
                      {
                modelName: "EXIDE MILEAGE(MLDIN66)(66AH)",
                image: "32.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.7300.<br>Without Old Battery: Rs.9450<brWarranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron FLO DIN65 (565106590)(65AH)",
                image: "33.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.6710.<br>Without Old Battery: Rs.8850.<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            },
		       {
                modelName: "ELITO BY AMARON ETDIN65L(65AH)",
                image: "EDIN60.png",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.6020.<br>Without Old Battery: Rs.8140.<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],

	   "Maruthi Suzuki Grand Vitara Petrol": [
            {
                modelName: "EXIDE MILEAGE MLDIN44LH(45AH)",
                image: "6.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs:5650.<br>Without Old Battery: Rs:7270 <br> Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron FLO DIN45 (545106036)45AH",
                image: "5.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs:5170..<br>Without Old Battery: Rs:6780 <br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            },
		    
		      {
                modelName: "ELITO BY AMARON ETDIN45(45 AH)",
                image: "EDIN60.png",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs 4640..<br>Without Old Battery: Rs.6230 <br>Warranty: 60 Months(30 Months Free Of Cost + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],

	   "Maruthi Suzuki Grand Vitara Petrol Hybrid": [
            {
                modelName: "Exide Mileage MLN55 (ISS) - 45AH",
                image: "28.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.6480.<br>Without Old Battery: Rs.8120<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron AAM-GO-00050B24L (50Ah)",
                image: "29.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.5560..<br>Without Old Battery: Rs. 7180<br>Warranty: 48 Months (24 Months Full Replacement + 24 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],


	  	   "Maruthi Suzuki XL6 Hybrid": [
            {
                modelName: "Exide Mileage MLN55 (ISS) - 45AH",
                image: "28.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.6480.<br>Without Old Battery: Rs.8120<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron AAM-GO-00050B24L (50Ah)",
                image: "29.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.5560..<br>Without Old Battery: Rs. 7180<br>Warranty: 48 Months (24 Months Full Replacement + 24 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],

	     "Maruthi Suzuki Fronx Petrol": [
                {
                modelName: "Exide Mileage ML38B20L (35AH)",
                image: "23.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.3820.<br>Without Old Battery: Rs.4900<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		     {
                modelName: "Exide EPIQ 35L (35AH)",
                image: "EPIQ35L.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.4430.<br>Without Old Battery: Rs.5520<br>Warranty: 77 Months (42 Months Full Replacement + 35 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		        {
                modelName: "Exide Matrix MT40b20L (35AH)",
                image: "E40B20L.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.4010.<br>Without Old Battery: Rs.5090<br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		       {
                modelName: "Exide Eezy 34B19L (35AH)",
                image: "EY34B19L.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.3490.<br>Without Old Battery: Rs.4560<br>Warranty: 48 Months (24 Months Full Replacement + 24 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		      {
                modelName: "AMARON GO 38B20L (35AH)",
                image: "AM38B20L.png",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.3510.<br>Without Old Battery: Rs.4580<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		      {
                modelName: "AMARON FLO 40B20L (35AH)",
                image: "AM38B20L.png",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.3800.<br>Without Old Battery: Rs.4880<br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		      {
                modelName: "ELITO BY AMARON ET38B20L (35AH)",
                image: "ELITO40B20L.jpeg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.3060.<br>Without Old Battery: Rs.4130<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            }
          
        ],

	     "Maruthi Suzuki Fronx Petrol Hybrid": [
            {
                modelName: "Exide Mileage MLN55 (ISS) - 45AH",
                image: "28.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.6480.<br>Without Old Battery: Rs.8120<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron AAM-GO-00050B24L (50Ah)",
                image: "29.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.5560..<br>Without Old Battery: Rs. 7180<br>Warranty: 48 Months (24 Months Full Replacement + 24 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],


	      "Maruthi Suzuki Ciaz Diesel": [
                 {
                modelName: "Exide Mileage MLDIN50(50AH",
                image: "30.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.6210.<br>Without Old Battery: Rs.7840<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron FLO DIN50 L(50AH)",
                image: "31.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.5730.<br>Without Old Battery: Rs.7340.<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            },
		       {
                modelName: "ELITO BY AMARON ETDIN50L(50AH)",
                image: "EDIN60.png",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.5100.<br>Without Old Battery: Rs.6710.<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],
	     
	      "Maruthi Suzuki Vitra Brezza Diesel": [
                   {
                modelName: "Exide Mileage MLDIN50(50AH",
                image: "30.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.6210.<br>Without Old Battery: Rs.7840<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron FLO DIN50 L(50AH)",
                image: "31.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.5730.<br>Without Old Battery: Rs.7340.<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            },
		       {
                modelName: "ELITO BY AMARON ETDIN50L(50AH)",
                image: "EDIN60.png",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.5100.<br>Without Old Battery: Rs.6710.<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],

	       "Maruthi Suzuki Vitra Brezza Petrol": [
         	         {
                modelName: "Exide Mileage ML38B20L (35AH)",
                image: "23.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.3820.<br>Without Old Battery: Rs.4900<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		     {
                modelName: "Exide EPIQ 35L (35AH)",
                image: "EPIQ35L.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.4430.<br>Without Old Battery: Rs.5520<br>Warranty: 77 Months (42 Months Full Replacement + 35 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		        {
                modelName: "Exide Matrix MT40b20L (35AH)",
                image: "E40B20L.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.4010.<br>Without Old Battery: Rs.5090<br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		       {
                modelName: "Exide Eezy 34B19L (35AH)",
                image: "EY34B19L.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.3490.<br>Without Old Battery: Rs.4560<br>Warranty: 48 Months (24 Months Full Replacement + 24 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		      {
                modelName: "AMARON GO 38B20L (35AH)",
                image: "AM38B20L.png",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.3510.<br>Without Old Battery: Rs.4580<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		      {
                modelName: "AMARON FLO 40B20L (35AH)",
                image: "AM38B20L.png",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.3800.<br>Without Old Battery: Rs.4880<br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		      {
                modelName: "ELITO BY AMARON ET38B20L (35AH)",
                image: "ELITO40B20L.jpeg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.3060.<br>Without Old Battery: Rs.4130<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            }
          
        ],

	   "Maruthi Suzuki Vitra Brezza Hybrid Petrol": [
            {
                modelName: "Exide Mileage MLN55 (ISS) - 45AH",
                image: "28.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.6480.<br>Without Old Battery: Rs.8120<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron AAM-GO-00050B24L (50Ah)",
                image: "29.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.5560..<br>Without Old Battery: Rs. 7180<br>Warranty: 48 Months (24 Months Full Replacement + 24 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],

	      "Maruthi Suzuki Swift Diesel": [
            {
                modelName: "EXIDE MILEAGE(MLDIN66)(66AH)",
                image: "32.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.7300.<br>Without Old Battery: Rs.9450<brWarranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron FLO DIN65 (565106590)(65AH)",
                image: "33.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.6710.<br>Without Old Battery: Rs.8850.<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            },
		       {
                modelName: "ELITO BY AMARON ETDIN65L(65AH)",
                image: "EDIN60.png",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.6020.<br>Without Old Battery: Rs.8140.<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],

	      "Maruthi Suzuki Swift Diesel(2016 Onwards)": [
            {
                modelName: "Exide Mileage MLDIN50(50AH",
                image: "30.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.6210.<br>Without Old Battery: Rs.7840<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron FLO DIN50 L(50AH)",
                image: "31.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.5730.<br>Without Old Battery: Rs.7340.<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            },
		       {
                modelName: "ELITO BY AMARON ETDIN50L(50AH)",
                image: "EDIN60.png",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.5100.<br>Without Old Battery: Rs.6710.<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],
	     "Maruthi Suzuki Ciaz DIESEL": [
		         {
                modelName: "Exide Mileage MLDIN50(50AH",
                image: "30.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.6210.<br>Without Old Battery: Rs.7840<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron FLO DIN50 L(50AH)",
                image: "31.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.5730.<br>Without Old Battery: Rs.7340.<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            },
		       {
                modelName: "ELITO BY AMARON ETDIN50L(50AH)",
                image: "EDIN60.png",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.5100.<br>Without Old Battery: Rs.6710.<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],

	   "Hyundai Santro Petrol": [
                {
                modelName: "Exide Mileage ML38B20L (35AH)",
                image: "23.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.3820.<br>Without Old Battery: Rs.4900<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		     {
                modelName: "Exide EPIQ 35L (35AH)",
                image: "EPIQ35L.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.4430.<br>Without Old Battery: Rs.5520<br>Warranty: 77 Months (42 Months Full Replacement + 35 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		        {
                modelName: "Exide Matrix MT40b20L (35AH)",
                image: "E40B20L.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.4010.<br>Without Old Battery: Rs.5090<br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		       {
                modelName: "Exide Eezy 34B19L (35AH)",
                image: "EY34B19L.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.3490.<br>Without Old Battery: Rs.4560<br>Warranty: 48 Months (24 Months Full Replacement + 24 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		      {
                modelName: "AMARON GO 38B20L (35AH)",
                image: "AM38B20L.png",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.3510.<br>Without Old Battery: Rs.4580<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		      {
                modelName: "AMARON FLO 40B20L (35AH)",
                image: "AM38B20L.png",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.3800.<br>Without Old Battery: Rs.4880<br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		      {
                modelName: "ELITO BY AMARON ET38B20L (35AH)",
                image: "ELITO40B20L.jpeg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.3060.<br>Without Old Battery: Rs.4130<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            }
          
        ],
         
	    "Hyundai EON Petrol": [
            {
                modelName: "Exide Mileage ML40LBH (40 AH)", 
                image: "34.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.4680.<br>Without Old Battery: Rs.5780<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		      {
                modelName: "EXIDE EPIQ 40LBH(40AH)",
                image: "EPIQDIN74L.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.4980.<br>Without Old Battery: Rs.6080.<br>Warranty: 77 Months (42 Months Full Replacement + 35 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            },
		    
            {
                modelName: "AMARON FLO BH40B20L (40AH)",
                image: "35.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.4230.<br>Without Old Battery: Rs.5320.<br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            },
		     {
                modelName: "ELITO BY AMARON ET40B20LBH (40AH)",
                image: "ELITO40B20L.jpeg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.3710.<br>Without Old Battery: Rs.4780.<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],	
	   "Hyundai Grand i10 Petrol": [
		    {
                modelName: "Exide Mileage ML40LBH (40 AH)", 
                image: "34.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.4680.<br>Without Old Battery: Rs.5780<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		      {
                modelName: "EXIDE EPIQ 40LBH(40AH)",
                image: "EPIQDIN74L.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.4980.<br>Without Old Battery: Rs.6080.<br>Warranty: 77 Months (42 Months Full Replacement + 35 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            },
		    
            {
                modelName: "AMARON FLO BH40B20L (40AH)",
                image: "35.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.4230.<br>Without Old Battery: Rs.5320.<br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            },
		     {
                modelName: "ELITO BY AMARON ET40B20LBH (40AH)",
                image: "ELITO40B20L.jpeg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.3710.<br>Without Old Battery: Rs.4780.<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],
          
	      "Hyundai Grand i10 Diesel": [
            {
                modelName: "Exide Mileage ML45D21LBH (45AH)",
                image: "36.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.6170.<br>Without Old Battery: Rs.7800<brWarranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron FLO BH45D20L(50AH)",
                image: "37.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.5670.<br>Without Old Battery: Rs.7280<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],	

	  
	    "Hyundai i10 NIOS Diesel": [
            {
                modelName: "Exide Mileage MLDIN50(50AH",
                image: "30.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.6210.<br>Without Old Battery: Rs.7840<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron FLO DIN50 L(50AH)",
                image: "31.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.5730.<br>Without Old Battery: Rs.7340.<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            },
		       {
                modelName: "ELITO BY AMARON ETDIN50L(50AH)",
                image: "EDIN60.png",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.5100.<br>Without Old Battery: Rs.6710.<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],

	     "Hyundai i10 NIOS Petrol": [
		    {
                modelName: "Exide Mileage ML40LBH (40 AH)", 
                image: "34.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.4680.<br>Without Old Battery: Rs.5780<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		      {
                modelName: "EXIDE EPIQ 40LBH(40AH)",
                image: "EPIQDIN74L.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.4980.<br>Without Old Battery: Rs.6080.<br>Warranty: 77 Months (42 Months Full Replacement + 35 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            },
		    
            {
                modelName: "AMARON FLO BH40B20L (40AH)",
                image: "35.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.4230.<br>Without Old Battery: Rs.5320.<br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            },
		     {
                modelName: "ELITO BY AMARON ET40B20LBH (40AH)",
                image: "ELITO40B20L.jpeg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.3710.<br>Without Old Battery: Rs.4780.<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],


	     "Hyundai Aura Diesel": [
            {
                modelName: "Exide Mileage MLDIN50(50AH",
                image: "30.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.6210.<br>Without Old Battery: Rs.7840<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron FLO DIN50 L(50AH)",
                image: "31.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.5730.<br>Without Old Battery: Rs.7340.<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            },
		       {
                modelName: "ELITO BY AMARON ETDIN50L(50AH)",
                image: "EDIN60.png",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.5100.<br>Without Old Battery: Rs.6710.<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],


	   "Hyundai Aura Petrol": [
		    {
                modelName: "Exide Mileage ML40LBH (40 AH)", 
                image: "34.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.4680.<br>Without Old Battery: Rs.5780<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		      {
                modelName: "EXIDE EPIQ 40LBH(40AH)",
                image: "EPIQDIN74L.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.4980.<br>Without Old Battery: Rs.6080.<br>Warranty: 77 Months (42 Months Full Replacement + 35 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            },
		    
            {
                modelName: "AMARON FLO BH40B20L (40AH)",
                image: "35.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.4230.<br>Without Old Battery: Rs.5320.<br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            },
		     {
                modelName: "ELITO BY AMARON ET40B20LBH (40AH)",
                image: "ELITO40B20L.jpeg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.3710.<br>Without Old Battery: Rs.4780.<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],


	   
	   "Hyundai Creta Petrol": [
            {
                modelName: "Exide Mileage ML45D21LBH (45AH)",
                image: "36.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.6170.<br>Without Old Battery: Rs.7800<brWarranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron FLO BH45D20L(50AH)",
                image: "37.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.5670.<br>Without Old Battery: Rs.7280<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            },
		     {
                modelName: "EXIDE MILEAGE MLDIN44LH(45AH)",
                image: "6.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs:5650.<br>Without Old Battery: Rs:7270 <br> Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron FLO DIN45 (545106036)45AH",
                image: "5.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs:5170..<br>Without Old Battery: Rs:6780 <br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            },
		      {
                modelName: "ELITO BY AMARON ETDIN45(45 AH)",
                image: "EDIN60.png",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs 4640..<br>Without Old Battery: Rs.6230 <br>Warranty: 60 Months(30 Months Free Of Cost + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],

        	
	    "Hyundai Creta Diesel": [
            {
                modelName: "EXIDE MILEAGE ML75D23LBH(68AH)",
                image: "38.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.6830.<br>Without Old Battery: Rs.8970<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		        {
                modelName: "EXIDE MILEAGE MLDIN60 (60AH)",
                image: "n.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.7270.<br>Without Old Battery: Rs.9420 <br> Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving",
            },
            {
                modelName: "AMARON FLO BH90D23L(70AH)",
                image: "39.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.6120.<br>Without Old Battery: Rs.8250.<br><br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            },
		     {
                modelName: "AMARON FLO DIN66 (60AH) 566112060",
                image: "5.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs:6700..<br>Without Old Battery: Rs.8840 <br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            },
			{
                modelName: "ELITO BY AMARON ET90D23LBH(70 AH)",
                image: "EDIN60.png",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs 5470..<br>Without Old Battery: Rs.7580 <br>Warranty: 60 Months(30 Months Free Of Cost + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            }
		 
        ],	
	    "Hyundai Getz 1.6 Diesel": [
            {
               modelName: "Exide Mileage ML75D23LBH(68AH)",
                image: "38.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.6830.<br>Without Old Battery: Rs.8970<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron FLO BH90D23L(70AH)",
                image: "39.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.6120.<br>Without Old Battery: Rs.8250.<br><br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            },
		    {
                modelName: "ELITO BY AMARON ET90D23LBH(70 AH)",
                image: "EDIN60.png",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs 5470..<br>Without Old Battery: Rs.7580 <br>Warranty: 60 Months(30 Months Free Of Cost + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],	

	     "Hyundai Getz Petrol": [
            {
                modelName: "Exide Mileage ML45D21LBH (45AH)",
                image: "36.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.6170.<br>Without Old Battery: Rs.7800 <brWarranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron FLO BH45D20L(50AH)",
                image: "37.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.5670.<br>Without Old Battery: Rs.7280 <br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],	
	    "Hyundai i20 Sportz Petrol": [
            {
                 modelName: "Exide Mileage ML45D21LBH (45AH)",
                image: "36.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.6170.<br>Without Old Battery: Rs.7800<brWarranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "AMARON FLO BH45D20L(50AH)",
                image: "37.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.5670.<br>Without Old Battery: Rs.7280<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],	
	    "Hyundai Verna 1.4 Diesel": [
            {
                 modelName: "Exide Mileage ML75D23LBH(68AH)",
                image: "38.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.6830.<br>Without Old Battery: Rs.8970<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		      {
                modelName: "EXIDE MILEAGE MLDIN60 (60AH)",
                image: "n.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.7270.<br>Without Old Battery: Rs.9420 <br> Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving",
            },
            {
                modelName: "Amaron FLO BH90D23L(70AH)",
                image: "39.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.6120.<br>Without Old Battery: Rs.8250.<br><br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            },
		     {
                modelName: "AMARON FLO DIN66 (60AH) 566112060",
                image: "5.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs:6700..<br>Without Old Battery: Rs.8840 <br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],
	      "Hyundai i20 Sportz Diesel": [
            {
                 modelName: "Exide Mileage ML75D23LBH(68AH)",
                image: "38.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.6830.<br>Without Old Battery: Rs.8970 <br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron FLO BH90D23L(70AH)",
                image: "39.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.6120.<br>Without Old Battery: Rs.8250.<br><br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            },
		        {
                modelName: "ELITO BY AMARON ET90D23LBH(70 AH)",
                image: "EDIN60.png",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs 5470..<br>Without Old Battery: Rs.7580 <br>Warranty: 60 Months(30 Months Free Of Cost + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],
	     "Hyundai Verna 1.4 Petrol": [
            {
                modelName: "Exide Mileage ML45D21LBH (45AH)",
                image: "36.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.6170.<br>Without Old Battery: Rs.7800 <brWarranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron FLO BH45D20L(50AH)",
                image: "37.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.5670.<br>Without Old Battery: Rs.7280 <br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],	

	    "Hyundai Fluidic Verna Petrol": [
            {
                modelName: "Exide Mileage ML45D21LBH (45AH)",
                image: "36.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.6170.<br>Without Old Battery: Rs.7800 <brWarranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron FLO BH45D20L(50AH)",
                image: "37.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.5670.<br>Without Old Battery: Rs.7280 <br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],	
	     "Hyundai Xcent Diesel": [
            {
                 modelName: "Exide Mileage ML45D21LBH (45AH)",
                image: "36.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.6170.<br>Without Old Battery: Rs.7800<brWarranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron FLO BH45D20L(50AH)",
                image: "37.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.5670.<br>Without Old Battery: Rs.7280<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],	
	     "Hyundai Xcent Petrol": [
           	    {
                modelName: "Exide Mileage ML40LBH (40 AH)", 
                image: "34.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.4680.<br>Without Old Battery: Rs.5780<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		      {
                modelName: "EXIDE EPIQ 40LBH(40AH)",
                image: "EPIQDIN74L.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.4980.<br>Without Old Battery: Rs.6080.<br>Warranty: 77 Months (42 Months Full Replacement + 35 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            },
		    
            {
                modelName: "AMARON FLO BH40B20L (40AH)",
                image: "35.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.4230.<br>Without Old Battery: Rs.5320.<br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            },
		     {
                modelName: "ELITO BY AMARON ET40B20LBH (40AH)",
                image: "ELITO40B20L.jpeg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.3710.<br>Without Old Battery: Rs.4780.<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],	
	     "Hyundai Elite i20 Petrol": [
        	    {
                modelName: "Exide Mileage ML40LBH (40 AH)", 
                image: "34.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.4680.<br>Without Old Battery: Rs.5780<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		      {
                modelName: "EXIDE EPIQ 40LBH(40AH)",
                image: "EPIQDIN74L.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.4980.<br>Without Old Battery: Rs.6080.<br>Warranty: 77 Months (42 Months Full Replacement + 35 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            },
		    
            {
                modelName: "AMARON FLO BH40B20L (40AH)",
                image: "35.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.4230.<br>Without Old Battery: Rs.5320.<br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            },
		     {
                modelName: "ELITO BY AMARON ET40B20LBH (40AH)",
                image: "ELITO40B20L.jpeg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.3710.<br>Without Old Battery: Rs.4780.<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],
	     "Hyundai Elite i20 Diesel": [
            {
                 modelName: "Exide Mileage ML75D23LBH(68AH)",
                image: "38.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.6830.<br>Without Old Battery: Rs.8970<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron FLO BH90D23L(70AH)",
                image: "39.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.6120.<br>Without Old Battery: Rs.8250.<br><br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            },
		           {
                modelName: "ELITO BY AMARON ET90D23LBH(70 AH)",
                image: "EDIN60.png",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs 5470..<br>Without Old Battery: Rs.7580 <br>Warranty: 60 Months(30 Months Free Of Cost + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],	

	   "Hyundai Santha fe Diesel": [
            {
                modelName: "Exide FEY0-EY105D31L(85 AH)",
                image: "ee.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.7640.<br>Without Old Battery: Rs. 9799 <br> Warranty: 48 Months(24 Months Free Of Cost + 24 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron AAM-GO-00105D31L(85 AH)",
                image: "ee2.png",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs 6900..<br>Without Old Battery: Rs.9050 <br>Warranty: 48 Months(24 Months Free Of Cost + 24 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            },
		 {
                modelName: "ELITO BY AMARON ET105D31L(85 AH)",
                image: "E105D31L.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs 6350..<br>Without Old Battery: Rs.8480 <br>Warranty: 48 Months(24 Months Free Of Cost + 24 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],

	    "Hyundai Alcazar Diesel": [
            {
                modelName: "Exide FEY0-EY105D31L(85 AH)",
                image: "ee.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.7640.<br>Without Old Battery: Rs. 9799 <br> Warranty: 48 Months(24 Months Free Of Cost + 24 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron AAM-GO-00105D31L(85 AH)",
                image: "ee2.png",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs 6900..<br>Without Old Battery: Rs.9050 <br>Warranty: 48 Months(24 Months Free Of Cost + 24 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            },
		 {
                modelName: "ELITO BY AMARON ET105D31L(85 AH)",
                image: "E105D31L.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs 6350..<br>Without Old Battery: Rs.8480 <br>Warranty: 48 Months(24 Months Free Of Cost + 24 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],

	  	   "Hyundai Alcazar Petrol": [
            {
                modelName: "EXIDE MILEAGE MLDIN60 (60AH)",
                image: "n.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.7270.<br>Without Old Battery: Rs.9420 <br> Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving",
            },
            {
                modelName: "Amaron FLO DIN66 (60AH) 566112060",
                image: "5.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs:6700..<br>Without Old Battery: Rs.8840 <br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            },
		 {
                modelName: "ELITO BY AMARON ETDIN65(65 AH)",
                image: "EDIN60.png",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs 6020..<br>Without Old Battery: Rs.8140 <br>Warranty: 60 Months(30 Months Free Of Cost + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            }
		 
        ],
	     "Hyundai Tucson Diesel": [
            {
                modelName: "Exide FEY0-EY105D31L",
                image: "ee.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs. 7640.<br>Without Old Battery: Rs. 9799<br>Warranty: 48 Months (24 Months Full Replacement + 24 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron AAM-GO-00105D31L",
                image: "ee2.png",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs. 6900.<br>Without Old Battery: Rs. 9050.<br>Without Old Battery: Rs. 8249<br>Warranty: 48 Months (24 Months Full Replacement + 24 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            },
		      {
                modelName: "ELITO BY AMARON ET105D31L(85 AH)",
                image: "E105D31L.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs 6350..<br>Without Old Battery: Rs.8480 <br>Warranty: 48 Months(24 Months Free Of Cost + 24 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],	
	    "Hyundai Tuscon Petrol": [
            {
                modelName: "EXIDE MILEAGE MLDIN60 (60AH)",
                image: "n.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.7270.<br>Without Old Battery: Rs.9420 <br> Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving",
            },
            {
                modelName: "Amaron FLO DIN66 (60AH) 566112060",
                image: "5.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs:6700..<br>Without Old Battery: Rs.8840 <br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            },
		     {
                modelName: "ELITO BY AMARON ETDIN65(65 AH)",
                image: "EDIN60.png",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs 6020..<br>Without Old Battery: Rs.8140 <br>Warranty: 60 Months(30 Months Free Of Cost + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            }
		 
        ],	
	    "Hyundai Venue Petrol": [
            {
                modelName: "EXIDE MILEAGE MLDIN44LH(45AH)",
                image: "6.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs:5650.<br>Without Old Battery: Rs:7270 <br> Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron FLO DIN45 (545106036)45AH",
                image: "5.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs:5170..<br>Without Old Battery: Rs:6780 <br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            },
		      {
                modelName: "ELITO BY AMARON ETDIN45(45 AH)",
                image: "EDIN60.png",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs 4640..<br>Without Old Battery: Rs.6230 <br>Warranty: 60 Months(30 Months Free Of Cost + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],
	     "Hyundai Venue Diesel": [
            {
                modelName: "EXIDE MILEAGE MLDIN60 (60AH)",
                image: "n.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.7270.<br>Without Old Battery: Rs.9420 <br> Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving",
            },
            {
                modelName: "Amaron FLO DIN66 (60AH) 566112060",
                image: "5.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs:6700..<br>Without Old Battery: Rs.8840 <br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            },
		      {
                modelName: "ELITO BY AMARON ETDIN65(65 AH)",
                image: "EDIN60.png",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs 6020..<br>Without Old Battery: Rs.8140 <br>Warranty: 60 Months(30 Months Free Of Cost + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            }
		 
        ],
	     "Hyundai Aura Diesel": [
            {
                  modelName: "Exide Mileage ML45D21LBH (45AH)",
                image: "36.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.6170.<br>Without Old Battery: Rs.7800<brWarranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron FLO BH45D20L(50AH)",
                image: "37.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.5670.<br>Without Old Battery: Rs.7280<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],	
	     "Hyundai Elantra 1.6 Diesel": [
            {
                modelName: "Exide-EPIQDIN74L-74 Ah Car Battery",
                image: "61.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.10750.<br>Without Old Battery: Rs.12970<br>Warranty: 77 Months (42 Months full Replacement + 35 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		      {
                modelName: "EXIDE MILEAGE(MLDIN66)(66AH)",
                image: "32.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.7300.<br>Without Old Battery: Rs.9450<brWarranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "AMARON PRO Din74 Aam Pr 574102069 (74AH)",
                image: "62.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.9700.<br>Without Old Battery: Rs.11900.<br>Warranty : 72 Months (36 Months Free + 36 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            },
		      {
                modelName: "Amaron FLO DIN65 (565106590)(65AH)",
                image: "33.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.6710.<br>Without Old Battery: Rs.8850.<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],	

	 "Hyundai Elantra 1.6 Petrol": [
            {
                modelName: "Exide-EPIQDIN74L-74 Ah Car Battery",
                image: "61.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.10750.<br>Without Old Battery: Rs.12970<br>Warranty: 77 Months (42 Months full Replacement + 35 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		      {
                modelName: "EXIDE MILEAGE(MLDIN66)(66AH)",
                image: "32.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.7300.<br>Without Old Battery: Rs.9450<brWarranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "AMARON PRO Din74 Aam Pr 574102069 (74AH)",
                image: "62.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.9700.<br>Without Old Battery: Rs.11900.<br>Warranty : 72 Months (36 Months Free + 36 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            },
		      {
                modelName: "Amaron FLO DIN65 (565106590)(65AH)",
                image: "33.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.6710.<br>Without Old Battery: Rs.8850.<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],	
	 "Hyundai i20 Sprotz Petrol(After 2015)": [
          	    {
                modelName: "Exide Mileage ML40LBH (40 AH)", 
                image: "34.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.4680.<br>Without Old Battery: Rs.5780<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		      {
                modelName: "EXIDE EPIQ 40LBH(40AH)",
                image: "EPIQDIN74L.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.4980.<br>Without Old Battery: Rs.6080.<br>Warranty: 77 Months (42 Months Full Replacement + 35 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            },
		    
            {
                modelName: "AMARON FLO BH40B20L (40AH)",
                image: "35.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.4230.<br>Without Old Battery: Rs.5320.<br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            },
		     {
                modelName: "ELITO BY AMARON ET40B20LBH (40AH)",
                image: "ELITO40B20L.jpeg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.3710.<br>Without Old Battery: Rs.4780.<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],	
	    "Hyundai Verna CRDi Diesel(after 2017)-Next Gen": [
            {
                modelName: "EXIDE MILEAGE MLDIN60 (60AH)",
                image: "n.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.7270.<br>Without Old Battery: Rs.9420 <br> Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving",
            },
            {
                modelName: "Amaron FLO DIN66 (60AH) 566112060",
                image: "5.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs:6700..<br>Without Old Battery: Rs.8840 <br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],

	
    "Hyundai Verna CRDi Petrol(after 2017)-Next Gen": [
           	    {
                modelName: "Exide Mileage ML40LBH (40 AH)", 
                image: "34.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.4680.<br>Without Old Battery: Rs.5780<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		      {
                modelName: "EXIDE EPIQ 40LBH(40AH)",
                image: "EPIQDIN74L.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.4980.<br>Without Old Battery: Rs.6080.<br>Warranty: 77 Months (42 Months Full Replacement + 35 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            },
		    
            {
                modelName: "AMARON FLO BH40B20L (40AH)",
                image: "35.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.4230.<br>Without Old Battery: Rs.5320.<br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            },
		     {
                modelName: "ELITO BY AMARON ET40B20LBH (40AH)",
                image: "ELITO40B20L.jpeg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.3710.<br>Without Old Battery: Rs.4780.<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],	
	    "Honda AMAZE Petrol": [
            {
                modelName: "Exide Mileage ML38B20L (35AH)",
                image: "23.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.3820.<br>Without Old Battery: Rs.4900<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		     {
                modelName: "Exide EPIQ 35L (35AH)",
                image: "EPIQ35L.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.4430.<br>Without Old Battery: Rs.5520<br>Warranty: 77 Months (42 Months Full Replacement + 35 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		        {
                modelName: "Exide Matrix MT40b20L (35AH)",
                image: "E40B20L.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.4010.<br>Without Old Battery: Rs.5090<br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		       {
                modelName: "Exide Eezy 34B19L (35AH)",
                image: "EY34B19L.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.3490.<br>Without Old Battery: Rs.4560<br>Warranty: 48 Months (24 Months Full Replacement + 24 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		      {
                modelName: "AMARON GO 38B20L (35AH)",
                image: "AM38B20L.png",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.3510.<br>Without Old Battery: Rs.4580<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		      {
                modelName: "AMARON FLO 40B20L (35AH)",
                image: "AM38B20L.png",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.3800.<br>Without Old Battery: Rs.4880<br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		      {
                modelName: "ELITO BY AMARON ET38B20L (35AH)",
                image: "ELITO40B20L.jpeg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.3060.<br>Without Old Battery: Rs.4130<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            }
          
        ],
	     "Honda AMAZE Diesel": [
            {
                modelName: "Exide Matrix Red MTRED45L(45AH)",
                image: "63.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.7310.<br>Without Old Battery: Rs.8960<br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron PRO 55B24LS(45AH)",
                image: "64.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.6599.<br>Without Old Battery: Rs.8230.<br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],
	     "Honda WR-V Petrol": [
                 {
                modelName: "Exide Mileage ML38B20L (35AH)",
                image: "23.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.3820.<br>Without Old Battery: Rs.4900<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		     {
                modelName: "Exide EPIQ 35L (35AH)",
                image: "EPIQ35L.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.4430.<br>Without Old Battery: Rs.5520<br>Warranty: 77 Months (42 Months Full Replacement + 35 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		        {
                modelName: "Exide Matrix MT40b20L (35AH)",
                image: "E40B20L.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.4010.<br>Without Old Battery: Rs.5090<br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		       {
                modelName: "Exide Eezy 34B19L (35AH)",
                image: "EY34B19L.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.3490.<br>Without Old Battery: Rs.4560<br>Warranty: 48 Months (24 Months Full Replacement + 24 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		      {
                modelName: "AMARON GO 38B20L (35AH)",
                image: "AM38B20L.png",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.3510.<br>Without Old Battery: Rs.4580<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		      {
                modelName: "AMARON FLO 40B20L (35AH)",
                image: "AM38B20L.png",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.3800.<br>Without Old Battery: Rs.4880<br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		      {
                modelName: "ELITO BY AMARON ET38B20L (35AH)",
                image: "ELITO40B20L.jpeg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.3060.<br>Without Old Battery: Rs.4130<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            }
          
        ],
	     "Honda CITY Petrol": [
                 {
                modelName: "Exide Mileage ML38B20L (35AH)",
                image: "23.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.3820.<br>Without Old Battery: Rs.4900<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		     {
                modelName: "Exide EPIQ 35L (35AH)",
                image: "EPIQ35L.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.4430.<br>Without Old Battery: Rs.5520<br>Warranty: 77 Months (42 Months Full Replacement + 35 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		        {
                modelName: "Exide Matrix MT40b20L (35AH)",
                image: "E40B20L.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.4010.<br>Without Old Battery: Rs.5090<br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		       {
                modelName: "Exide Eezy 34B19L (35AH)",
                image: "EY34B19L.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.3490.<br>Without Old Battery: Rs.4560<br>Warranty: 48 Months (24 Months Full Replacement + 24 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		      {
                modelName: "AMARON GO 38B20L (35AH)",
                image: "AM38B20L.png",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.3510.<br>Without Old Battery: Rs.4580<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		      {
                modelName: "AMARON FLO 40B20L (35AH)",
                image: "AM38B20L.png",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.3800.<br>Without Old Battery: Rs.4880<br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		      {
                modelName: "ELITO BY AMARON ET38B20L (35AH)",
                image: "ELITO40B20L.jpeg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.3060.<br>Without Old Battery: Rs.4130<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            }
          
        ],
	    "Honda CITY Diesel": [
            {
                modelName: "Exide Matrix Red MTRED45L(45AH)",
                image: "63.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.7310.<br>Without Old Battery: Rs.8960<br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron PRO 55B24LS(45AH)",
                image: "64.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.6599.<br>Without Old Battery: Rs.8230.<br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],
	     "Honda BRIO Petrol": [
         {
                modelName: "Exide Mileage ML38B20L (35AH)",
                image: "23.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.3820.<br>Without Old Battery: Rs.4900<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		     {
                modelName: "Exide EPIQ 35L (35AH)",
                image: "EPIQ35L.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.4430.<br>Without Old Battery: Rs.5520<br>Warranty: 77 Months (42 Months Full Replacement + 35 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		        {
                modelName: "Exide Matrix MT40b20L (35AH)",
                image: "E40B20L.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.4010.<br>Without Old Battery: Rs.5090<br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		       {
                modelName: "Exide Eezy 34B19L (35AH)",
                image: "EY34B19L.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.3490.<br>Without Old Battery: Rs.4560<br>Warranty: 48 Months (24 Months Full Replacement + 24 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		      {
                modelName: "AMARON GO 38B20L (35AH)",
                image: "AM38B20L.png",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.3510.<br>Without Old Battery: Rs.4580<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		      {
                modelName: "AMARON FLO 40B20L (35AH)",
                image: "AM38B20L.png",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.3800.<br>Without Old Battery: Rs.4880<br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		      {
                modelName: "ELITO BY AMARON ET38B20L (35AH)",
                image: "ELITO40B20L.jpeg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.3060.<br>Without Old Battery: Rs.4130<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            }
          
        ],
	    "Honda JAZZ Diesel": [
            {
                modelName: "Exide Matrix Red MTRED45L(45AH)",
                image: "63.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.7310.<br>Without Old Battery: Rs.8960<br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron PRO 55B24LS(45AH)",
                image: "64.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.6599.<br>Without Old Battery: Rs.8230.<br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],
	    "Honda JAZZ Petrol": [
                {
                modelName: "Exide Mileage ML38B20L (35AH)",
                image: "23.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.3820.<br>Without Old Battery: Rs.4900<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		     {
                modelName: "Exide EPIQ 35L (35AH)",
                image: "EPIQ35L.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.4430.<br>Without Old Battery: Rs.5520<br>Warranty: 77 Months (42 Months Full Replacement + 35 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		        {
                modelName: "Exide Matrix MT40b20L (35AH)",
                image: "E40B20L.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.4010.<br>Without Old Battery: Rs.5090<br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		       {
                modelName: "Exide Eezy 34B19L (35AH)",
                image: "EY34B19L.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.3490.<br>Without Old Battery: Rs.4560<br>Warranty: 48 Months (24 Months Full Replacement + 24 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		      {
                modelName: "AMARON GO 38B20L (35AH)",
                image: "AM38B20L.png",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.3510.<br>Without Old Battery: Rs.4580<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		      {
                modelName: "AMARON FLO 40B20L (35AH)",
                image: "AM38B20L.png",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.3800.<br>Without Old Battery: Rs.4880<br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		      {
                modelName: "ELITO BY AMARON ET38B20L (35AH)",
                image: "ELITO40B20L.jpeg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.3060.<br>Without Old Battery: Rs.4130<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            }
        
        ],
	     "Honda Mobilio Petrol": [
               {
                modelName: "Exide Mileage ML38B20L (35AH)",
                image: "23.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.3820.<br>Without Old Battery: Rs.4900<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		     {
                modelName: "Exide EPIQ 35L (35AH)",
                image: "EPIQ35L.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.4430.<br>Without Old Battery: Rs.5520<br>Warranty: 77 Months (42 Months Full Replacement + 35 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		        {
                modelName: "Exide Matrix MT40b20L (35AH)",
                image: "E40B20L.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.4010.<br>Without Old Battery: Rs.5090<br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		       {
                modelName: "Exide Eezy 34B19L (35AH)",
                image: "EY34B19L.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.3490.<br>Without Old Battery: Rs.4560<br>Warranty: 48 Months (24 Months Full Replacement + 24 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		      {
                modelName: "AMARON GO 38B20L (35AH)",
                image: "AM38B20L.png",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.3510.<br>Without Old Battery: Rs.4580<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		      {
                modelName: "AMARON FLO 40B20L (35AH)",
                image: "AM38B20L.png",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.3800.<br>Without Old Battery: Rs.4880<br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		      {
                modelName: "ELITO BY AMARON ET38B20L (35AH)",
                image: "ELITO40B20L.jpeg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.3060.<br>Without Old Battery: Rs.4130<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            }
          
        ],
	     "Honda Mobilio Diesel": [
            {
                modelName: "Exide Matrix Red MTRED45L(45AH)",
                image: "63.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.7310.<br>Without Old Battery: Rs.8960<br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron PRO 55B24LS(45AH)",
                image: "64.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.6599.<br>Without Old Battery: Rs.8230.<br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],
	      "Honda BR-V-diesel": [
            {
               modelName: "Exide Matrix Red MTRED45L(45AH)",
                image: "63.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.7310.<br>Without Old Battery: Rs.8960<br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron PRO 55B24LS(45AH)",
                image: "64.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.6599.<br>Without Old Battery: Rs.8230.<br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],
	     "Honda BR-V-Petrol": [
           {
                modelName: "Exide Mileage ML38B20L (35AH)",
                image: "23.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.3820.<br>Without Old Battery: Rs.4900<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		     {
                modelName: "Exide EPIQ 35L (35AH)",
                image: "EPIQ35L.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.4430.<br>Without Old Battery: Rs.5520<br>Warranty: 77 Months (42 Months Full Replacement + 35 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		        {
                modelName: "Exide Matrix MT40b20L (35AH)",
                image: "E40B20L.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.4010.<br>Without Old Battery: Rs.5090<br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		       {
                modelName: "Exide Eezy 34B19L (35AH)",
                image: "EY34B19L.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.3490.<br>Without Old Battery: Rs.4560<br>Warranty: 48 Months (24 Months Full Replacement + 24 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		      {
                modelName: "AMARON GO 38B20L (35AH)",
                image: "AM38B20L.png",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.3510.<br>Without Old Battery: Rs.4580<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		      {
                modelName: "AMARON FLO 40B20L (35AH)",
                image: "AM38B20L.png",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.3800.<br>Without Old Battery: Rs.4880<br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		      {
                modelName: "ELITO BY AMARON ET38B20L (35AH)",
                image: "ELITO40B20L.jpeg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.3060.<br>Without Old Battery: Rs.4130<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            }
          
        ],
	     "Honda WR-V Diesel": [
            {
               modelName: "Exide Matrix Red MTRED45L(45AH)",
                image: "63.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.7310.<br>Without Old Battery: Rs.8960<br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron PRO 55B24LS(45AH)",
                image: "64.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.6599.<br>Without Old Battery: Rs.8230.<br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],
	   "Honda CR-V PETROL": [
            {
                modelName: "Exide Matrix Red MTRED45L(45AH)",
                image: "63.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.7310.<br>Without Old Battery: Rs.8960<br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron PRO 55B24LS(45AH)",
                image: "64.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.6599.<br>Without Old Battery: Rs.8230.<br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],
	    "Honda WR-V Diesel": [
            {
               modelName: "Exide Matrix Red MTRED45L(45AH)",
                image: "63.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.7310.<br>Without Old Battery: Rs.8960<br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron PRO 55B24LS(45AH)",
                image: "64.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.6599.<br>Without Old Battery: Rs.8230.<br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],
	    "Honda Amaze Diesel": [
            {
                modelName: "Exide Matrix Red MTRED45L(45AH)",
                image: "63.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.7310.<br>Without Old Battery: Rs.8960<br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron PRO 55B24LS(45AH)",
                image: "64.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.6599.<br>Without Old Battery: Rs.8230.<br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],
	   "Honda CIVIC Petrol": [
            {
                modelName: "Exide Matrix Red MTRED45L(45AH)",
                image: "63.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.7310.<br>Without Old Battery: Rs.8960<br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron PRO 55B24LS(45AH)",
                image: "64.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.6599.<br>Without Old Battery: Rs.8230.<br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],
	    "Honda ACCORD Petrol": [
            {
                modelName: "Exide Matrix Red MTRED45L(45AH)",
                image: "63.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.7310.<br>Without Old Battery: Rs.8960<br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron PRO 55B24LS(45AH)",
                image: "64.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.6599.<br>Without Old Battery: Rs.8230.<br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],


	   "Honda Elevate Petrol": [
           {
                modelName: "Exide Mileage ML38B20L (35AH)",
                image: "23.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.3820.<br>Without Old Battery: Rs.4900<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		     {
                modelName: "Exide EPIQ 35L (35AH)",
                image: "EPIQ35L.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.4430.<br>Without Old Battery: Rs.5520<br>Warranty: 77 Months (42 Months Full Replacement + 35 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		        {
                modelName: "Exide Matrix MT40b20L (35AH)",
                image: "E40B20L.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.4010.<br>Without Old Battery: Rs.5090<br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		       {
                modelName: "Exide Eezy 34B19L (35AH)",
                image: "EY34B19L.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.3490.<br>Without Old Battery: Rs.4560<br>Warranty: 48 Months (24 Months Full Replacement + 24 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		      {
                modelName: "AMARON GO 38B20L (35AH)",
                image: "AM38B20L.png",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.3510.<br>Without Old Battery: Rs.4580<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		      {
                modelName: "AMARON FLO 40B20L (35AH)",
                image: "AM38B20L.png",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.3800.<br>Without Old Battery: Rs.4880<br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		      {
                modelName: "ELITO BY AMARON ET38B20L (35AH)",
                image: "ELITO40B20L.jpeg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.3060.<br>Without Old Battery: Rs.4130<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            }
          
        ],
	    "Skoda Rapid Diesel": [
            {
                modelName: "EXIDE MILEAGE MLDIN60 (60AH)",
                image: "n.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.7270.<br>Without Old Battery: Rs.9420 <br> Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving",
            },
            {
                modelName: "Amaron FLO DIN66 (60AH) 566112060",
                image: "5.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs:6700..<br>Without Old Battery: Rs.8840 <br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            }
		  
        ],
	    "Skoda Rapid Petrol": [
            {
                modelName: "EXIDE MILEAGE MLDIN44LH(45AH)",
                image: "6.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs:5650.<br>Without Old Battery: Rs:7270 <br> Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron FLO DIN45 (545106036)45AH",
                image: "5.jpg",
				 description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs:5170..<br>Without Old Battery: Rs:6780 <br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            },
		    
		      {
                modelName: "ELITO BY AMARON ETDIN45(45 AH)",
                image: "EDIN60.png",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs 4640..<br>Without Old Battery: Rs.6230 <br>Warranty: 60 Months(30 Months Free Of Cost + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],
	   "SKODA Octavia Diesel": [
            {
                 modelName: "Exide-EPIQDIN74L-74 Ah Car Battery",
                image: "61.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.10750.<br>Without Old Battery: Rs.12970<br>Warranty: 77 Months (42 Months full Replacement + 35 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		       {
                modelName: "EXIDE MILEAGE(MLDIN66)(66AH)",
                image: "32.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.7300.<br>Without Old Battery: Rs.9450<brWarranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron Pro Din74 Aam Pr 574102069 (74AH)",
                image: "62.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.9700.<br>Without Old Battery: Rs.11900.<br>Warranty : 72 Months (36 Months Free + 36 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            },
		   {
                modelName: "Amaron FLO DIN65 (565106590)(65AH)",
                image: "33.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.6710.<br>Without Old Battery: Rs.8850.<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],
	    "Skoda Octavia Petrol": [
            {
                 modelName: "EXIDE MILEAGE MLDIN60 (60AH)",
                image: "n.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.7270.<br>Without Old Battery: Rs.9420 <br> Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving",
            },
		     {
                modelName: "EXIDE MILEAGE(MLDIN66)(66AH)",
                image: "32.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.7300.<br>Without Old Battery: Rs.9450<brWarranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron FLO DIN66 (60AH) 566112060",
                image: "5.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs:6700..<br>Without Old Battery: Rs.8840 <br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            },
		     {
                modelName: "Amaron FLO DIN65 (565106590)(65AH)",
                image: "33.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.6710.<br>Without Old Battery: Rs.8850.<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            }
		    
        ],
	    "Skoda Superb Petrol": [
            {
                 modelName: "EXIDE MILEAGE MLDIN60 (60AH)",
                image: "n.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.7270.<br>Without Old Battery: Rs.9420 <br> Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving",
            },
		     {
                modelName: "EXIDE MILEAGE(MLDIN66)(66AH)",
                image: "32.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.7300.<br>Without Old Battery: Rs.9450<brWarranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron FLO DIN66 (60AH) 566112060",
                image: "5.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs:6700..<br>Without Old Battery: Rs.8840 <br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            },
		      {
                modelName: "Amaron FLO DIN65 (565106590)(65AH)",
                image: "33.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.6710.<br>Without Old Battery: Rs.8850.<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            },
		        {
                modelName: "ELITO BY AMARON ETDIN65(65 AH)",
                image: "EDIN60.png",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs 6020..<br>Without Old Battery: Rs.8140 <br>Warranty: 60 Months(30 Months Free Of Cost + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],
	   "Skoda Suberb Diesel": [
            {
                modelName: "Exide-EPIQDIN74L-74 Ah Car Battery",
                image: "61.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.10750.<br>Without Old Battery: Rs.12970<br>Warranty: 77 Months (42 Months full Replacement + 35 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		     {
                modelName: "EXIDE MILEAGE(MLDIN66)(66AH)",
                image: "32.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.7300.<br>Without Old Battery: Rs.9450<brWarranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron Pro Din74 Aam Pr 574102069 (74AH)",
                image: "62.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.9700.<br>Without Old Battery: Rs.11900.<br>Warranty : 72 Months (36 Months Free + 36 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            },
		       {
                modelName: "Amaron FLO DIN65 (565106590)(65AH)",
                image: "33.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.6710.<br>Without Old Battery: Rs.8850.<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            },
		    {
                modelName: "ELITO BY AMARON ETDIN65(65 AH)",
                image: "EDIN60.png",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs 6020..<br>Without Old Battery: Rs.8140 <br>Warranty: 60 Months(30 Months Free Of Cost + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],
	    "Skoda Yeti 2.0 Diesel": [
		    {
                modelName: "Exide-EPIQDIN74L-74 Ah Car Battery",
                image: "61.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.10750.<br>Without Old Battery: Rs.12970<br>Warranty: 77 Months (42 Months full Replacement + 35 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		     {
                modelName: "EXIDE MILEAGE(MLDIN66)(66AH)",
                image: "32.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.7300.<br>Without Old Battery: Rs.9450<brWarranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron Pro Din74 Aam Pr 574102069 (74AH)",
                image: "62.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.9700.<br>Without Old Battery: Rs.11900.<br>Warranty : 72 Months (36 Months Free + 36 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            },
		       {
                modelName: "Amaron FLO DIN65 (565106590)(65AH)",
                image: "33.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.6710.<br>Without Old Battery: Rs.8850.<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            },
		    {
                modelName: "ELITO BY AMARON ETDIN65(65 AH)",
                image: "EDIN60.png",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs 6020..<br>Without Old Battery: Rs.8140 <br>Warranty: 60 Months(30 Months Free Of Cost + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],
         
	    "Skoda Fabia Diesel": [
		     {
                 modelName: "EXIDE MILEAGE MLDIN60 (60AH)",
                image: "n.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.7270.<br>Without Old Battery: Rs.9420 <br> Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving",
            },
		     {
                modelName: "EXIDE MILEAGE(MLDIN66)(66AH)",
                image: "32.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.7300.<br>Without Old Battery: Rs.9450<brWarranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron FLO DIN66 (60AH) 566112060",
                image: "5.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs:6700..<br>Without Old Battery: Rs.8840 <br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            },
		      {
                modelName: "Amaron FLO DIN65 (565106590)(65AH)",
                image: "33.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.6710.<br>Without Old Battery: Rs.8850.<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            },
		        {
                modelName: "ELITO BY AMARON ETDIN65(65 AH)",
                image: "EDIN60.png",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs 6020..<br>Without Old Battery: Rs.8140 <br>Warranty: 60 Months(30 Months Free Of Cost + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],
     
	    "Skoda Fabia Petrol": [
		         {
                 modelName: "EXIDE MILEAGE MLDIN60 (60AH)",
                image: "n.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.7270.<br>Without Old Battery: Rs.9420 <br> Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving",
            },
            {
                 modelName: "EXIDE MILEAGE MLDIN44LH(45AH)",
                image: "6.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs:5650.<br>Without Old Battery: Rs:7270 <br> Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		        {
                modelName: "Amaron FLO DIN66 (60AH) 566112060",
                image: "5.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs:6700..<br>Without Old Battery: Rs.8840 <br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            },
            {
                modelName: "Amaron FLO DIN45 (545106036)45AH",
                image: "5.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs:5170..<br>Without Old Battery: Rs:6780 <br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            },
		    	      {
                modelName: "ELITO BY AMARON ETDIN45(45 AH)",
                image: "EDIN60.png",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs 4640..<br>Without Old Battery: Rs.6230 <br>Warranty: 60 Months(30 Months Free Of Cost + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],
	    "Skoda Laura Diesel": [
           	     {
                 modelName: "EXIDE MILEAGE MLDIN60 (60AH)",
                image: "n.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.7270.<br>Without Old Battery: Rs.9420 <br> Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving",
            },
		     {
                modelName: "EXIDE MILEAGE(MLDIN66)(66AH)",
                image: "32.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.7300.<br>Without Old Battery: Rs.9450<brWarranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron FLO DIN66 (60AH) 566112060",
                image: "5.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs:6700..<br>Without Old Battery: Rs.8840 <br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            },
		      {
                modelName: "Amaron FLO DIN65 (565106590)(65AH)",
                image: "33.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.6710.<br>Without Old Battery: Rs.8850.<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            },
		        {
                modelName: "ELITO BY AMARON ETDIN65(65 AH)",
                image: "EDIN60.png",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs 6020..<br>Without Old Battery: Rs.8140 <br>Warranty: 60 Months(30 Months Free Of Cost + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],
     
	   "Skoda Laura Petrol": [
                 {
                 modelName: "EXIDE MILEAGE MLDIN60 (60AH)",
                image: "n.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.7270.<br>Without Old Battery: Rs.9420 <br> Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving",
            },
            {
                 modelName: "EXIDE MILEAGE MLDIN44LH(45AH)",
                image: "6.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs:5650.<br>Without Old Battery: Rs:7270 <br> Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		        {
                modelName: "Amaron FLO DIN66 (60AH) 566112060",
                image: "5.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs:6700..<br>Without Old Battery: Rs.8840 <br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            },
            {
                modelName: "Amaron FLO DIN45 (545106036)45AH",
                image: "5.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs:5170..<br>Without Old Battery: Rs:6780 <br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            },
		    	      {
                modelName: "ELITO BY AMARON ETDIN45(45 AH)",
                image: "EDIN60.png",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs 4640..<br>Without Old Battery: Rs.6230 <br>Warranty: 60 Months(30 Months Free Of Cost + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],


	  "Skoda Kodiaq Diesel": [
            {
                 modelName: "Exide-EPIQDIN74L-74 Ah Car Battery",
                image: "61.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.10750.<br>Without Old Battery: Rs.12970<br>Warranty: 77 Months (42 Months full Replacement + 35 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		       {
                modelName: "EXIDE MILEAGE(MLDIN66)(66AH)",
                image: "32.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.7300.<br>Without Old Battery: Rs.9450<brWarranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron Pro Din74 Aam Pr 574102069 (74AH)",
                image: "62.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.9700.<br>Without Old Battery: Rs.11900.<br>Warranty : 72 Months (36 Months Free + 36 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            },
		   {
                modelName: "Amaron FLO DIN65 (565106590)(65AH)",
                image: "33.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.6710.<br>Without Old Battery: Rs.8850.<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],

	    "Skoda Kushaq Petrol": [
            {
                 modelName: "Exide-EPIQDIN74L-74 Ah Car Battery",
                image: "61.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.10750.<br>Without Old Battery: Rs.12970<br>Warranty: 77 Months (42 Months full Replacement + 35 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		       {
                modelName: "EXIDE MILEAGE(MLDIN66)(66AH)",
                image: "32.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.7300.<br>Without Old Battery: Rs.9450<brWarranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron Pro Din74 Aam Pr 574102069 (74AH)",
                image: "62.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.9700.<br>Without Old Battery: Rs.11900.<br>Warranty : 72 Months (36 Months Free + 36 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            },
		   {
                modelName: "Amaron FLO DIN65 (565106590)(65AH)",
                image: "33.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.6710.<br>Without Old Battery: Rs.8850.<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],

	     "Skoda Slavia Petrol": [
                 {
                 modelName: "EXIDE MILEAGE MLDIN60 (60AH)",
                image: "n.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.7270.<br>Without Old Battery: Rs.9420 <br> Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving",
            },
            {
                 modelName: "EXIDE MILEAGE MLDIN44LH(45AH)",
                image: "6.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs:5650.<br>Without Old Battery: Rs:7270 <br> Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		        {
                modelName: "Amaron FLO DIN66 (60AH) 566112060",
                image: "5.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs:6700..<br>Without Old Battery: Rs.8840 <br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            },
            {
                modelName: "Amaron FLO DIN45 (545106036)45AH",
                image: "5.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs:5170..<br>Without Old Battery: Rs:6780 <br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            },
		    	      {
                modelName: "ELITO BY AMARON ETDIN45(45 AH)",
                image: "EDIN60.png",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs 4640..<br>Without Old Battery: Rs.6230 <br>Warranty: 60 Months(30 Months Free Of Cost + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],
	   "Skoda Comdi Diesel": [
            {
                 modelName: "Exide-EPIQDIN74L-74 Ah Car Battery",
                image: "61.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.10750.<br>Without Old Battery: Rs.12970<br>Warranty: 77 Months (42 Months full Replacement + 35 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron Pro Din74 Aam Pr 574102069 (74AH)",
                image: "62.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.9700.<br>Without Old Battery: Rs.11900.<br>Warranty : 72 Months (36 Months Free + 36 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],
	    "TATA NEXON Diesel": [
           {
                modelName: "Exide Mileage MLDIN44R Battery (44AH)",
                image: "73.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.5650.<br>Without Old Battery: Rs.7270<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		     {
                modelName: "EXIDE MILEAGE MLDIN47RMF - (47AH)",
                image: "71.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.6010.<br>Without Old Battery: Rs.7630<br>Warranty: 48 Months(24 Months Free Of Cost + 24 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		      {
                modelName: "EXIDE EEZY MLDIN52RMFEFB - (52AH)",
                image: "71.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.6290.<br>Without Old Battery: Rs.7920<br>Warranty: 48 Months(24 Months Free Of Cost + 24 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron AAM-FL-545106036 DIN-45L (45 Ah)",
                image: "74.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.5170.<br>Without Old Battery: Rs.6780.<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            },
		      {
                modelName: "Amaron Din50R 50 (AH) Battery For Car",
                image: "72.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.5730.<br>Without Old Battery: Rs. 7340.<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],
	    "Skoda Laura diesel": [
              {
                 modelName: "EXIDE MILEAGE MLDIN60 (60AH)",
                image: "n.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.7270.<br>Without Old Battery: Rs.9420 <br> Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving",
            },
		     {
                modelName: "EXIDE MILEAGE(MLDIN66)(66AH)",
                image: "32.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.7300.<br>Without Old Battery: Rs.9450<brWarranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron FLO DIN66 (60AH) 566112060",
                image: "5.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs:6700..<br>Without Old Battery: Rs.8840 <br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            },
		      {
                modelName: "Amaron FLO DIN65 (565106590)(65AH)",
                image: "33.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.6710.<br>Without Old Battery: Rs.8850.<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            },
		        {
                modelName: "ELITO BY AMARON ETDIN65(65 AH)",
                image: "EDIN60.png",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs 6020..<br>Without Old Battery: Rs.8140 <br>Warranty: 60 Months(30 Months Free Of Cost + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],
     
	    "TATA NEXON Petrol": [
            {
                modelName: "Exide Mileage MLDIN44R Battery (44AH)",
                image: "73.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.5650.<br>Without Old Battery: Rs.7270<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		     {
                modelName: "EXIDE MILEAGE MLDIN47RMF - (47AH)",
                image: "71.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.6010.<br>Without Old Battery: Rs.7630<br>Warranty: 48 Months(24 Months Free Of Cost + 24 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },

			{
                modelName: "EXIDE EEZY MLDIN52RMFEFB - (52AH)",
                image: "71.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.6290.<br>Without Old Battery: Rs.7920<br>Warranty: 48 Months(24 Months Free Of Cost + 24 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
			
            {
                modelName: "Amaron AAM-FL-545106036 DIN-45L (45 Ah)",
                image: "74.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.5170.<br>Without Old Battery: Rs.6780.<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            },
		      {
                modelName: "Amaron Din50R 50 (Ah) Battery For Car",
                image: "72.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.5730.<br>Without Old Battery: Rs. 7340.<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],


 "TATA Altroz Diesel": [
           {
              modelName: "Exide EEZY EGRID 700(65AH)",
                image: "83.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs:7040.<br>Without Old Battery: Rs:8980<br>Warranty: 48 Months (24 Months Full Replacement + 24 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },

	    {
              modelName: "Exide EEZY EY80D23R(68AH)",
                image: "exide 85d23r.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs:7040.<br>Without Old Battery: Rs:8980<br>Warranty: 48 Months (24 Months Full Replacement + 24 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "AMARON GO 95D26R(65AH)",
                image: "84.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs:6410..<br>Without Old Battery: Rs:8340 <br>Warranty: 48 Months (24 Months Full Replacement + 24 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            },

	 {
                modelName: "AMARON GO 85D26R(65AH)",
                image: "85d23r.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs:6070..<br>Without Old Battery: Rs:8000 <br>Warranty: 48 Months (24 Months Full Replacement + 24 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            },
	 
	   {
                modelName: "AMARON GO DURO EFB 100D23R(70AH)",
                image: "100d23r.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs:6180..<br>Without Old Battery: Rs:8100 <br>Warranty: 48 Months (24 Months Full Replacement + 24 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            },
		           {
                modelName: "ELITO BY AMARON ET95D26R(65 AH)",
                image: "E105D31L.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs 5730..<br>Without Old Battery: Rs.7840 <br>Warranty: 48 Months(24 Months Free Of Cost + 24 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],

	   "TATA Altroz Petrol": [
          {
              modelName: "Exide EEZY EGRID 700(65AH)",
                image: "83.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs:7040.<br>Without Old Battery: Rs:8980<br>Warranty: 48 Months (24 Months Full Replacement + 24 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },

	    {
              modelName: "Exide EEZY EY80D23R(68AH)",
                image: "exide 85d23r.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs:7040.<br>Without Old Battery: Rs:8980<br>Warranty: 48 Months (24 Months Full Replacement + 24 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "AMARON GO 95D26R(65AH)",
                image: "84.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs:6410..<br>Without Old Battery: Rs:8340 <br>Warranty: 48 Months (24 Months Full Replacement + 24 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            },

	 {
                modelName: "AMARON GO 85D26R(65AH)",
                image: "85d23r.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs:6070..<br>Without Old Battery: Rs:8000 <br>Warranty: 48 Months (24 Months Full Replacement + 24 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            },
	 
	   {
                modelName: "AMARON GO DURO EFB 100D23R(70AH)",
                image: "100d23r.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs:6180..<br>Without Old Battery: Rs:8100 <br>Warranty: 48 Months (24 Months Full Replacement + 24 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            },
		           {
                modelName: "ELITO BY AMARON ET95D26R(65 AH)",
                image: "E105D31L.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs 5730..<br>Without Old Battery: Rs.7840 <br>Warranty: 48 Months(24 Months Free Of Cost + 24 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],

	      "TATA Tigor Diesel": [
           {
                modelName: "Exide Mileage MLDIN44R Battery (44AH)",
                image: "73.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.5650.<br>Without Old Battery: Rs.7270<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		     {
                modelName: "EXIDE MILEAGE MLDIN47RMF - (47AH)",
                image: "71.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.6010.<br>Without Old Battery: Rs.7630<br>Warranty: 48 Months(24 Months Free Of Cost + 24 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		      {
                modelName: "EXIDE EEZY MLDIN52RMFEFB - (52AH)",
                image: "71.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.6290.<br>Without Old Battery: Rs.7920<br>Warranty: 48 Months(24 Months Free Of Cost + 24 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron AAM-FL-545106036 DIN-45L (45 Ah)",
                image: "74.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.5170.<br>Without Old Battery: Rs.6780.<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            },
		      {
                modelName: "Amaron Din50R 50 (AH) Battery For Car",
                image: "72.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.5730.<br>Without Old Battery: Rs. 7340.<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],


	       "TATA Tigor Petrol": [
           {
                modelName: "Exide Mileage MLDIN44R Battery (44AH)",
                image: "73.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.5650.<br>Without Old Battery: Rs.7270<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		     {
                modelName: "EXIDE MILEAGE MLDIN47RMF - (47AH)",
                image: "71.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.6010.<br>Without Old Battery: Rs.7630<br>Warranty: 48 Months(24 Months Free Of Cost + 24 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		      {
                modelName: "EXIDE EEZY MLDIN52RMFEFB - (52AH)",
                image: "71.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.6290.<br>Without Old Battery: Rs.7920<br>Warranty: 48 Months(24 Months Free Of Cost + 24 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron AAM-FL-545106036 DIN-45L (45 Ah)",
                image: "74.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.5170.<br>Without Old Battery: Rs.6780.<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            },
		      {
                modelName: "Amaron Din50R 50 (AH) Battery For Car",
                image: "72.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.5730.<br>Without Old Battery: Rs. 7340.<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],
	     "TATA HARRIER Diesel": [
		       {
                modelName: "Exide EEZY MLDIN78L Battery (78AH)",
                image: "ee.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.8520.<br>Without Old Battery: Rs.10699<br>Warranty: 48 Months (24 Months Full Replacement + 24 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Exide Mileage MLDIN80 Battery (80AH)",
                image: "75.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.10620.<br>Without Old Battery: Rs.12840<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		       {
                modelName: "Exide EPIQ DIN74L Battery (74AH)",
                image: "61.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.10750.<br>Without Old Battery: Rs.12970<br>Warranty: 77 Months (42 Months Full Replacement + 35 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		       {
                modelName: "Amaron Pro Din74 Aam Pr 574102069 (74AH)",
                image: "62.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.9700.<br>Without Old Battery: Rs.11900.<br>Warranty : 72 Months (36 Months Free + 36 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            },
		     
            {
                modelName: "AMARON FLO Automotive Battery – 580112073 DIN 80(80AH)",
                image: "76.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.9780.<br>Without Old Battery: Rs.11980.<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],
	     "TATA TIAGO Petrol": [
            {
                modelName: "Exide Mileage MLDIN44R Battery (44AH)",
                image: "73.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.5650.<br>Without Old Battery: Rs.7270<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		     {
                modelName: "EXIDE MILEAGE MLDIN47RMF - (47AH)",
                image: "71.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.6010.<br>Without Old Battery: Rs.7630<br>Warranty: 48 Months(24 Months Free Of Cost + 24 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron AAM-FL-545106036 DIN-45L (45 Ah)",
                image: "74.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.5170.<br>Without Old Battery: Rs.6780.<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            },
		      {
                modelName: "Amaron Din50R 50 (Ah) Battery For Car",
                image: "72.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.5730.<br>Without Old Battery: Rs. 7340.<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],
	     "TATA TIAGO Diesel": [
                  {
                modelName: "Exide Mileage MLDIN44R Battery (44AH)",
                image: "73.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.5650.<br>Without Old Battery: Rs.7270<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		     {
                modelName: "EXIDE MILEAGE MLDIN47RMF - (47AH)",
                image: "71.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.6010.<br>Without Old Battery: Rs.7630<br>Warranty: 48 Months(24 Months Free Of Cost + 24 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		      {
                modelName: "EXIDE EEZY MLDIN52RMFEFB - (52AH)",
                image: "71.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.6290.<br>Without Old Battery: Rs.7920<br>Warranty: 48 Months(24 Months Free Of Cost + 24 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron AAM-FL-545106036 DIN-45L (45 Ah)",
                image: "74.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.5170.<br>Without Old Battery: Rs.6780.<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            },
		      {
                modelName: "Amaron Din50R 50 (AH) Battery For Car",
                image: "72.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.5730.<br>Without Old Battery: Rs. 7340.<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],
	     "TATA HEXA Diesel": [
            {
                modelName: "Exide FEY0-EY105D31L",
                image: "ee.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs. 7640.<br>Without Old Battery: Rs. 9799 <br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron AAM-GO-00105D31L",
                image: "ee2.png",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs. 6900.<br>Without Old Battery: Rs. 9050.<br>Without Old Battery: Rs. 8249<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            },
		      {
                modelName: "ELITO BY AMARON ET105D31L(85 AH)",
                image: "E105D31L.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs 6350..<br>Without Old Battery: Rs.8480 <br>Warranty: 48 Months(24 Months Free Of Cost + 24 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],
	     "TATA ZEST Petrol": [
            {
                modelName: "Exide Mileage MLDIN44R Battery (44AH)",
                image: "73.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.5650.<br>Without Old Battery: Rs.7270<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		     {
                modelName: "EXIDE MILEAGE MLDIN47RMF - (47AH)",
                image: "71.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.6010.<br>Without Old Battery: Rs.7630<br>Warranty: 48 Months(24 Months Free Of Cost + 24 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron AAM-FL-545106036 DIN-45L (45 Ah)",
                image: "74.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.5170.<br>Without Old Battery: Rs.6780.<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            },
		      {
                modelName: "Amaron Din50R 50 (Ah) Battery For Car",
                image: "72.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.5730.<br>Without Old Battery: Rs. 7340.<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],
	    "TATA ZEST Diesel": [
              {
                modelName: "Exide Mileage MLDIN44R Battery (44AH)",
                image: "73.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.5650.<br>Without Old Battery: Rs.7270<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		     {
                modelName: "EXIDE MILEAGE MLDIN47RMF - (47AH)",
                image: "71.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.6010.<br>Without Old Battery: Rs.7630<br>Warranty: 48 Months(24 Months Free Of Cost + 24 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		      {
                modelName: "EXIDE EEZY MLDIN52RMFEFB - (52AH)",
                image: "71.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.6290.<br>Without Old Battery: Rs.7920<br>Warranty: 48 Months(24 Months Free Of Cost + 24 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron AAM-FL-545106036 DIN-45L (45 Ah)",
                image: "74.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.5170.<br>Without Old Battery: Rs.6780.<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            },
		      {
                modelName: "Amaron Din50R 50 (AH) Battery For Car",
                image: "72.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.5730.<br>Without Old Battery: Rs. 7340.<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],

	     "TATA PUNCH Diesel": [
              {
                modelName: "Exide Mileage MLDIN44R Battery (44AH)",
                image: "73.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.5650.<br>Without Old Battery: Rs.7270<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		     {
                modelName: "EXIDE MILEAGE MLDIN47RMF - (47AH)",
                image: "71.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.6010.<br>Without Old Battery: Rs.7630<br>Warranty: 48 Months(24 Months Free Of Cost + 24 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		      {
                modelName: "EXIDE EEZY MLDIN52RMFEFB - (52AH)",
                image: "71.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.6290.<br>Without Old Battery: Rs.7920<br>Warranty: 48 Months(24 Months Free Of Cost + 24 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron AAM-FL-545106036 DIN-45L (45 Ah)",
                image: "74.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.5170.<br>Without Old Battery: Rs.6780.<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            },
		      {
                modelName: "Amaron Din50R 50 (AH) Battery For Car",
                image: "72.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.5730.<br>Without Old Battery: Rs. 7340.<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],

	   "TATA PUNCH Petrol": [
              {
                modelName: "Exide Mileage MLDIN44R Battery (44AH)",
                image: "73.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.5650.<br>Without Old Battery: Rs.7270<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		     {
                modelName: "EXIDE MILEAGE MLDIN47RMF - (47AH)",
                image: "71.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.6010.<br>Without Old Battery: Rs.7630<br>Warranty: 48 Months(24 Months Free Of Cost + 24 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		      {
                modelName: "EXIDE EEZY MLDIN52RMFEFB - (52AH)",
                image: "71.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.6290.<br>Without Old Battery: Rs.7920<br>Warranty: 48 Months(24 Months Free Of Cost + 24 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron AAM-FL-545106036 DIN-45L (45 Ah)",
                image: "74.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.5170.<br>Without Old Battery: Rs.6780.<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            },
		      {
                modelName: "Amaron Din50R 50 (AH) Battery For Car",
                image: "72.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.5730.<br>Without Old Battery: Rs. 7340.<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],
	     "TATA SAFARI STROME Diesel": [
            {
                modelName: "Exide FEY0-EY105D31L",
                image: "ee.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs. 7640.<br>Without Old Battery: Rs. 9799<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron AAM-GO-00105D31L",
                image: "ee2.png",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs. 6900.<br>Without Old Battery: Rs. 9050.<br>Without Old Battery: Rs. 8249<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            },
		      {
                modelName: "ELITO BY AMARON ET105D31L(85 AH)",
                image: "E105D31L.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs 6350..<br>Without Old Battery: Rs.8480 <br>Warranty: 48 Months(24 Months Free Of Cost + 24 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],
	    "TATA SAFARI Diesel": [
    	       {
                modelName: "Exide EEZY MLDIN78L Battery (78AH)",
                image: "ee.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.8520.<br>Without Old Battery: Rs.10699<br>Warranty: 48 Months (24 Months Full Replacement + 24 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Exide Mileage MLDIN80 Battery (80AH)",
                image: "75.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.10620.<br>Without Old Battery: Rs.12840<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		       {
                modelName: "Exide EPIQ DIN74L Battery (74AH)",
                image: "61.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.10750.<br>Without Old Battery: Rs.12970<br>Warranty: 77 Months (42 Months Full Replacement + 35 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		       {
                modelName: "Amaron Pro Din74 Aam Pr 574102069 (74AH)",
                image: "62.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.9700.<br>Without Old Battery: Rs.11900.<br>Warranty : 72 Months (36 Months Free + 36 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            },
		     
            {
                modelName: "AMARON FLO Automotive Battery – 580112073 DIN 80(80AH)",
                image: "76.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.9780.<br>Without Old Battery: Rs.11980.<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],
	     "TATA SUMO Diesel": [
            {
                modelName: "Exide Xpress XP800 (80AH)",
                image: "77.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.7130.<br>Without Old Battery: Rs.9270<br>Warranty: 42 Months (24 Months Free of Cost + 18 Months Pro Rata )",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron Black BL800 RMF(80AH)",
                image: "78.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.6130.<br>Without Old Battery: Rs.8250<br>Warranty: 24 Months Free Replacement",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],
	     "TATA SAFARI DICOR Diesel": [
            {
                modelName: "Exide FEY0-EY105D31L",
                image: "ee.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs. 7640.<br>Without Old Battery: Rs. 9799<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron AAM-GO-00105D31L",
                image: "ee2.png",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs. 6900.<br>Without Old Battery: Rs. 9050.<br>Without Old Battery: Rs. 8249<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            },
		           {
                modelName: "ELITO BY AMARON ET105D31L(85 AH)",
                image: "E105D31L.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs 6350..<br>Without Old Battery: Rs.8480 <br>Warranty: 48 Months(24 Months Free Of Cost + 24 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],
	     "TATA INDIGO Diesel": [
            {
                modelName: "Exide Mileage MLDIN55R",
                image: "79.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.7100.<br>Without Old Battery: Rs.9250<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron FLO DIN55R",
                image: "80.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.6550.<br>Without Old Battery: Rs.8690<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],
	     "FORD FIGO Diesel": [
              {
                modelName: "EXIDE MILEAGE MLDIN44LH(45AH)",
                image: "6.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs:5650.<br>Without Old Battery: Rs:7270 <br> Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron FLO DIN45 (545106036)45AH",
                image: "5.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs:5170..<br>Without Old Battery: Rs:6780 <br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            },
		  {
                modelName: "ELITO BY AMARON ETDIN45(45 AH)",
                image: "EDIN60.png",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs 4640..<br>Without Old Battery: Rs.6230 <br>Warranty: 60 Months(30 Months Free Of Cost + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],
	      "FORD FIGO PETROL": [
              {
                modelName: "EXIDE MILEAGE MLDIN44LH(45AH)",
                image: "6.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs:5650.<br>Without Old Battery: Rs:7270 <br> Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron FLO DIN45 (545106036)45AH",
                image: "5.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs:5170..<br>Without Old Battery: Rs:6780 <br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            },
		  {
                modelName: "ELITO BY AMARON ETDIN45(45 AH)",
                image: "EDIN60.png",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs 4640..<br>Without Old Battery: Rs.6230 <br>Warranty: 60 Months(30 Months Free Of Cost + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],

	    "FORD Aspire Diesel": [
              {
                modelName: "EXIDE MILEAGE MLDIN44LH(45AH)",
                image: "6.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs:5650.<br>Without Old Battery: Rs:7270 <br> Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron FLO DIN45 (545106036)45AH",
                image: "5.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs:5170..<br>Without Old Battery: Rs:6780 <br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            },
		  {
                modelName: "ELITO BY AMARON ETDIN45(45 AH)",
                image: "EDIN60.png",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs 4640..<br>Without Old Battery: Rs.6230 <br>Warranty: 60 Months(30 Months Free Of Cost + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],

	    "FORD Aspire Petrol": [
              {
                modelName: "EXIDE MILEAGE MLDIN44LH(45AH)",
                image: "6.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs:5650.<br>Without Old Battery: Rs:7270 <br> Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron FLO DIN45 (545106036)45AH",
                image: "5.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs:5170..<br>Without Old Battery: Rs:6780 <br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            },
		  {
                modelName: "ELITO BY AMARON ETDIN45(45 AH)",
                image: "EDIN60.png",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs 4640..<br>Without Old Battery: Rs.6230 <br>Warranty: 60 Months(30 Months Free Of Cost + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],

	    "FORD Freestyle Diesel": [
              {
                modelName: "EXIDE MILEAGE MLDIN44LH(45AH)",
                image: "6.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs:5650.<br>Without Old Battery: Rs:7270 <br> Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron FLO DIN45 (545106036)45AH",
                image: "5.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs:5170..<br>Without Old Battery: Rs:6780 <br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            },
		  {
                modelName: "ELITO BY AMARON ETDIN45(45 AH)",
                image: "EDIN60.png",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs 4640..<br>Without Old Battery: Rs.6230 <br>Warranty: 60 Months(30 Months Free Of Cost + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],

	     "FORD Freestyle Petrol": [
              {
                modelName: "EXIDE MILEAGE MLDIN44LH(45AH)",
                image: "6.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs:5650.<br>Without Old Battery: Rs:7270 <br> Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron FLO DIN45 (545106036)45AH",
                image: "5.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs:5170..<br>Without Old Battery: Rs:6780 <br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            },
		  {
                modelName: "ELITO BY AMARON ETDIN45(45 AH)",
                image: "EDIN60.png",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs 4640..<br>Without Old Battery: Rs.6230 <br>Warranty: 60 Months(30 Months Free Of Cost + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],

	      "FORD ENDEAVOUR 2.5 Diesel": [
        	    {
                modelName: "Exide-EPIQDIN74L-74 Ah Car Battery",
                image: "61.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.10750.<br>Without Old Battery: Rs.12970<br>Warranty: 77 Months (42 Months full Replacement + 35 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		     {
                modelName: "EXIDE MILEAGE(MLDIN66)(66AH)",
                image: "32.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.7300.<br>Without Old Battery: Rs.9450<brWarranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron Pro Din74 Aam Pr 574102069 (74AH)",
                image: "62.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.9700.<br>Without Old Battery: Rs.11900.<br>Warranty : 72 Months (36 Months Free + 36 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            },
		       {
                modelName: "Amaron FLO DIN65 (565106590)(65AH)",
                image: "33.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.6710.<br>Without Old Battery: Rs.8850.<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            },
		    {
                modelName: "ELITO BY AMARON ETDIN65(65 AH)",
                image: "EDIN60.png",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs 6020..<br>Without Old Battery: Rs.8140 <br>Warranty: 60 Months(30 Months Free Of Cost + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],
	     "FORD ENDEAVOUR 3.0 Diesel": [
         	    {
                modelName: "Exide-EPIQDIN74L-74 Ah Car Battery",
                image: "61.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.10750.<br>Without Old Battery: Rs.12970<br>Warranty: 77 Months (42 Months full Replacement + 35 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		     {
                modelName: "EXIDE MILEAGE(MLDIN66)(66AH)",
                image: "32.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.7300.<br>Without Old Battery: Rs.9450<brWarranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron Pro Din74 Aam Pr 574102069 (74AH)",
                image: "62.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.9700.<br>Without Old Battery: Rs.11900.<br>Warranty : 72 Months (36 Months Free + 36 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            },
		       {
                modelName: "Amaron FLO DIN65 (565106590)(65AH)",
                image: "33.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.6710.<br>Without Old Battery: Rs.8850.<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            },
		    {
                modelName: "ELITO BY AMARON ETDIN65(65 AH)",
                image: "EDIN60.png",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs 6020..<br>Without Old Battery: Rs.8140 <br>Warranty: 60 Months(30 Months Free Of Cost + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],
	      "FORD ECOSTORT Diesel": [
            {
                 modelName: "EXIDE MILEAGE MLDIN60 (60AH)",
                image: "n.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.7070.<br>Without Old Battery: Rs.9420 <br> Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving",
            },
            {
                modelName: "Amaron FLO DIN66 (60AH) 566112060",
                image: "5.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs:6700..<br>Without Old Battery: Rs.8840 <br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],
	      "FORD ECOSTORT PETROL": [
                 {
                modelName: "EXIDE MILEAGE MLDIN44LH(45AH)",
                image: "6.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs:5650.<br>Without Old Battery: Rs:7270 <br> Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron FLO DIN45 (545106036)45AH",
                image: "5.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs:5170..<br>Without Old Battery: Rs:6780 <br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            },
		  {
                modelName: "ELITO BY AMARON ETDIN45(45 AH)",
                image: "EDIN60.png",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs 4640..<br>Without Old Battery: Rs.6230 <br>Warranty: 60 Months(30 Months Free Of Cost + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],
	      "FORD FIESTA Diesel": [
                 {
                modelName: "EXIDE MILEAGE MLDIN44LH(45AH)",
                image: "6.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs:5650.<br>Without Old Battery: Rs:7270 <br> Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron FLO DIN45 (545106036)45AH",
                image: "5.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs:5170..<br>Without Old Battery: Rs:6780 <br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            },
		  {
                modelName: "ELITO BY AMARON ETDIN45(45 AH)",
                image: "EDIN60.png",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs 4640..<br>Without Old Battery: Rs.6230 <br>Warranty: 60 Months(30 Months Free Of Cost + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],
	      "FORD FIESTA Petrol": [
                {
                modelName: "EXIDE MILEAGE MLDIN44LH(45AH)",
                image: "6.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs:5650.<br>Without Old Battery: Rs:7270 <br> Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron FLO DIN45 (545106036)45AH",
                image: "5.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs:5170..<br>Without Old Battery: Rs:6780 <br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            },
		  {
                modelName: "ELITO BY AMARON ETDIN45(45 AH)",
                image: "EDIN60.png",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs 4640..<br>Without Old Battery: Rs.6230 <br>Warranty: 60 Months(30 Months Free Of Cost + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],
	     "FORD IKON Diesel": [
          {
                modelName: "EXIDE MILEAGE MLDIN44LH(45AH)",
                image: "6.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs:5650.<br>Without Old Battery: Rs:7270 <br> Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron FLO DIN45 (545106036)45AH",
                image: "5.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs:5170..<br>Without Old Battery: Rs:6780 <br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            },
		  {
                modelName: "ELITO BY AMARON ETDIN45(45 AH)",
                image: "EDIN60.png",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs 4640..<br>Without Old Battery: Rs.6230 <br>Warranty: 60 Months(30 Months Free Of Cost + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],
	      "Fiat Linea Diesel": [
               {
                modelName: "Exide Mileage MLDIN50(50AH",
                image: "30.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.6210.<br>Without Old Battery: Rs.7840<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron FLO DIN50 L(50AH)",
                image: "31.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.5730.<br>Without Old Battery: Rs.7340.<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            },
		       {
                modelName: "ELITO BY AMARON ETDIN50L(50AH)",
                image: "EDIN60.png",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.5100.<br>Without Old Battery: Rs.6710.<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],
	      "Fiat Linea Petrol": [
           {
                modelName: "EXIDE MILEAGE MLDIN44LH(45AH)",
                image: "6.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs:5650.<br>Without Old Battery: Rs:7270 <br> Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron FLO DIN45 (545106036)45AH",
                image: "5.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs:5170..<br>Without Old Battery: Rs:6780 <br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            },
		  {
                modelName: "ELITO BY AMARON ETDIN45(45 AH)",
                image: "EDIN60.png",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs 4640..<br>Without Old Battery: Rs.6230 <br>Warranty: 60 Months(30 Months Free Of Cost + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],
	      "Fiat Grande Punto Diesel": [
               {
                modelName: "Exide Mileage MLDIN50(50AH",
                image: "30.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.6210.<br>Without Old Battery: Rs.7840<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron FLO DIN50 L(50AH)",
                image: "31.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.5730.<br>Without Old Battery: Rs.7340.<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            },
		       {
                modelName: "ELITO BY AMARON ETDIN50L(50AH)",
                image: "EDIN60.png",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.5100.<br>Without Old Battery: Rs.6710.<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],
	      "Fiat Grande Punto Petrol": [
                    {
                modelName: "EXIDE MILEAGE MLDIN44LH(45AH)",
                image: "6.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs:5650.<br>Without Old Battery: Rs:7270 <br> Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron FLO DIN45 (545106036)45AH",
                image: "5.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs:5170..<br>Without Old Battery: Rs:6780 <br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            },
		  {
                modelName: "ELITO BY AMARON ETDIN45(45 AH)",
                image: "EDIN60.png",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs 4640..<br>Without Old Battery: Rs.6230 <br>Warranty: 60 Months(30 Months Free Of Cost + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],
	      "Fiat AVVENTURA Diesel": [
         {
                modelName: "Exide Mileage MLDIN50(50AH",
                image: "30.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.6210.<br>Without Old Battery: Rs.7840<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron FLO DIN50 L(50AH)",
                image: "31.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.5730.<br>Without Old Battery: Rs.7340.<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            },
		       {
                modelName: "ELITO BY AMARON ETDIN50L(50AH)",
                image: "EDIN60.png",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.5100.<br>Without Old Battery: Rs.6710.<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],

	    "BMW X1 Diesel": [
            {
               modelName: "Exide-EPIQDIN74L-74 Ah Car Battery",
                image: "61.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.10750.<br>Without Old Battery: Rs.12970<br>Warranty: 77 Months (42 Months full Replacement + 35 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron Pro Din74 Aam Pr 574102069 (74AH)",
                image: "62.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.9700.<br>Without Old Battery: Rs.11900.<br>Warranty : 72 Months (36 Months Free + 36 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],
	      "BMW X1 Petrol": [
            {
               modelName: "Exide-EPIQDIN74L-74 Ah Car Battery",
                image: "61.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.10750.<br>Without Old Battery: Rs.12970<br>Warranty: 77 Months (42 Months full Replacement + 35 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron Pro Din74 Aam Pr 574102069 (74AH)",
                image: "62.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.9700.<br>Without Old Battery: Rs.11900.<br>Warranty : 72 Months (36 Months Free + 36 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],
	      "BMW X3 Diesel": [
            {
                modelName: "Exide Matrix Red MTREDDIN100",
                image: "41.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs:16590.<br>Without Old Battery: Rs:19930<br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron PRO DIN100",
                image: "42.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs:16070..<br>Without Old Battery: Rs:19400 <br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            }
			  ],    
        
 "BMW X3 Petrol": [
            {
                modelName: "Exide Matrix Red MTREDDIN100",
                image: "41.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs:16590.<br>Without Old Battery: Rs:19930<br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron PRO DIN100",
                image: "42.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs:16070..<br>Without Old Battery: Rs:19400 <br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            }
			  ],    


	    "BMW X4 Diesel": [
            {
               modelName: "Exide Matrix Red MTREDDIN100",
                image: "41.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs:16590.<br>Without Old Battery: Rs:19930<br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron PRO DIN100",
                image: "42.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs:16070..<br>Without Old Battery: Rs:19400 <br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],

	   "BMW X4 Petrol": [
            {
               modelName: "Exide Matrix Red MTREDDIN100",
                image: "41.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs:16590.<br>Without Old Battery: Rs:19930<br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron PRO DIN100",
                image: "42.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs:16070..<br>Without Old Battery: Rs:19400 <br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],

	   "BMW X5 Diesel": [
            {
               modelName: "Exide Matrix Red MTREDDIN100",
                image: "41.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs:16590.<br>Without Old Battery: Rs:19930<br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron PRO DIN100",
                image: "42.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs:16070..<br>Without Old Battery: Rs:19400 <br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],

	     "BMW X5 Petrol": [
            {
               modelName: "Exide Matrix Red MTREDDIN100",
                image: "41.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs:16590.<br>Without Old Battery: Rs:19930<br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron PRO DIN100",
                image: "42.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs:16070..<br>Without Old Battery: Rs:19400 <br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],

	   "BMW 3 Series Diesel": [
            {
               modelName: "Exide Matrix Red MTREDDIN100",
                image: "41.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs:16590.<br>Without Old Battery: Rs:19930<br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron PRO DIN100",
                image: "42.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs:16070..<br>Without Old Battery: Rs:19400 <br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],

	   "BMW 3 Series Petrol": [
            {
               modelName: "Exide Matrix Red MTREDDIN100",
                image: "41.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs:16590.<br>Without Old Battery: Rs:19930<br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron PRO DIN100",
                image: "42.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs:16070..<br>Without Old Battery: Rs:19400 <br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],
        
        
			  
	      "BMW 5 Series 320D Diesel": [
            {
               modelName: "Exide Matrix Red MTREDDIN100",
                image: "41.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs:16590.<br>Without Old Battery: Rs:19930<br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron PRO DIN100",
                image: "42.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs:16070..<br>Without Old Battery: Rs:19400 <br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],
	      "BMW 5 Series 520D Diesel": [
            {
               modelName: "Exide Matrix Red MTREDDIN100",
                image: "41.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs:16590.<br>Without Old Battery: Rs:19930<br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron PRO DIN100",
                image: "42.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs:16070..<br>Without Old Battery: Rs:19400 <br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],
	      "BMW 7 Series 750li PETROL": [
            {
                modelName: "Exide Matrix Red MTREDDIN100",
                image: "41.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs:16590.<br>Without Old Battery: Rs:19930<br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron PRO DIN100",
                image: "42.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs:16070..<br>Without Old Battery: Rs:19400 <br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],

	     "BMW 6 Series Diesel": [
            {
               modelName: "Exide Matrix Red MTREDDIN100",
                image: "41.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs:16590.<br>Without Old Battery: Rs:19930<br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron PRO DIN100",
                image: "42.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs:16070..<br>Without Old Battery: Rs:19400 <br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],
	      "BMW 6 Series 650i PETROL": [
            {
               modelName: "Exide Matrix Red MTREDDIN100",
                image: "41.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs:16590.<br>Without Old Battery: Rs:19930<br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron PRO DIN100",
                image: "42.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs:16070..<br>Without Old Battery: Rs:19400 <br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],

	  "BMW M2 Petrol": [
            {
               modelName: "Exide-EPIQDIN74L-74 Ah Car Battery",
                image: "61.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.10750.<br>Without Old Battery: Rs.12970<br>Warranty: 77 Months (42 Months full Replacement + 35 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron Pro Din74 Aam Pr 574102069 (74AH)",
                image: "62.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.9700.<br>Without Old Battery: Rs.11900.<br>Warranty : 72 Months (36 Months Free + 36 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],

	   "BMW M5 Petrol": [
            {
               modelName: "Exide-EPIQDIN74L-74 Ah Car Battery",
                image: "61.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.10750.<br>Without Old Battery: Rs.12970<br>Warranty: 77 Months (42 Months full Replacement + 35 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron Pro Din74 Aam Pr 574102069 (74AH)",
                image: "62.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.9700.<br>Without Old Battery: Rs.11900.<br>Warranty : 72 Months (36 Months Free + 36 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],

	  "BMW Z4 Diesel": [
            {
               modelName: "Exide Matrix Red MTREDDIN100",
                image: "41.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs:16590.<br>Without Old Battery: Rs:19930<br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron PRO DIN100",
                image: "42.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs:16070..<br>Without Old Battery: Rs:19400 <br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],

	   "BMW Z4 Petrol": [
            {
               modelName: "Exide Matrix Red MTREDDIN100",
                image: "41.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs:16590.<br>Without Old Battery: Rs:19930<br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron PRO DIN100",
                image: "42.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs:16070..<br>Without Old Battery: Rs:19400 <br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],
	      "BMW GT": [
            {
               modelName: "Exide Matrix Red MTREDDIN100",
                image: "41.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs:16590.<br>Without Old Battery: Rs:19930<br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron PRO DIN100",
                image: "42.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs:16070..<br>Without Old Battery: Rs:19400 <br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],
	     "MINICOUNTRYMAN COOPER SD(DIESEL)": [
            {
               modelName: "Exide-EPIQDIN74L-74 Ah Car Battery",
                image: "61.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.10750.<br>Without Old Battery: Rs.12970<br>Warranty: 77 Months (42 Months full Replacement + 35 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron Pro Din74 Aam Pr 574102069 (74AH)",
                image: "62.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.9700.<br>Without Old Battery: Rs.11900.<br>Warranty : 72 Months (36 Months Free + 36 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],
	      "MINI COUNTRYMAN COOPER S JCW INSPIRED(PETROL)": [
            {
              modelName: "Exide-EPIQDIN74L-74 Ah Car Battery",
                image: "61.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.10750.<br>Without Old Battery: Rs.12970<br>Warranty: 77 Months (42 Months full Replacement + 35 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron Pro Din74 Aam Pr 574102069 (74AH)",
                image: "62.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.9700.<br>Without Old Battery: Rs.11900.<br>Warranty : 72 Months (36 Months Free + 36 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],
	      "MINI CLUBMAN COOPER S (PETROL)": [
            {
              modelName: "Exide-EPIQDIN74L-74 Ah Car Battery",
                image: "61.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.10750.<br>Without Old Battery: Rs.12970<br>Warranty: 77 Months (42 Months full Replacement + 35 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron Pro Din74 Aam Pr 574102069 (74AH)",
                image: "62.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.9700.<br>Without Old Battery: Rs.11900.<br>Warranty : 72 Months (36 Months Free + 36 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],
	      "Audi A3 Diesel": [
            {
               modelName: "Exide Matrix Red MTREDDIN100",
                image: "41.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs:16950.<br>Without Old Battery: Rs:19930<br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron PRO DIN100",
                image: "42.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs:16070..<br>Without Old Battery: Rs:19400 <br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],
	      "Audi A3 Petrol": [
            {
              modelName: "Exide Matrix Red MTREDDIN100",
                image: "41.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs:16950.<br>Without Old Battery: Rs:19930<br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron PRO DIN100",
                image: "42.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs:16070..<br>Without Old Battery: Rs:19400 <br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],
	      "Audi A4 Petrol": [
            {
              modelName: "Exide Matrix Red MTREDDIN100",
                image: "41.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs:16590.<br>Without Old Battery: Rs:19930<br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron PRO DIN100",
                image: "42.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs:16070..<br>Without Old Battery: Rs:19400 <br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],
	      "Audi A4 DIESEL": [
            {
              modelName: "Exide Matrix Red MTREDDIN100",
                image: "41.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs:16590.<br>Without Old Battery: Rs:19930<br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron PRO DIN100",
                image: "42.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs:16070..<br>Without Old Battery: Rs:19400 <br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],


	   "Audi A5 DIESEL": [
            {
              modelName: "Exide Matrix Red MTREDDIN100",
                image: "41.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs:16590.<br>Without Old Battery: Rs:19930<br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron PRO DIN100",
                image: "42.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs:16070..<br>Without Old Battery: Rs:19400 <br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],
	      "Audi A6 Petrol": [
            {
               modelName: "Exide Matrix Red MTREDDIN100",
                image: "41.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs:16590.<br>Without Old Battery: Rs:19930<br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron PRO DIN100",
                image: "42.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs:16070..<br>Without Old Battery: Rs:19400 <br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],
	      "Audi A6 Diesel": [
            {
              modelName: "Exide Matrix Red MTREDDIN100",
                image: "41.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs:16590.<br>Without Old Battery: Rs:19930<br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron PRO DIN100",
                image: "42.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs:16070..<br>Without Old Battery: Rs:19400 <br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],
	      "Audi A7 3.0 Diesel": [
            {
               modelName: "Exide Matrix Red MTREDDIN100",
                image: "41.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs:16590.<br>Without Old Battery: Rs:19930<br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron PRO DIN100",
                image: "42.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs:16070..<br>Without Old Battery: Rs:19400 <br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],
	      "Audi A8 L Diesel": [
            {
               modelName: "Exide Matrix Red MTREDDIN100",
                image: "41.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs:16590.<br>Without Old Battery: Rs:19930<br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron PRO DIN100",
                image: "42.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs:16070..<br>Without Old Battery: Rs:19400 <br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],


	  "Audi Q3 Petrol": [
            {
               modelName: "Exide Matrix Red MTREDDIN100",
                image: "41.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs:16590.<br>Without Old Battery: Rs:19930<br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron PRO DIN100",
                image: "42.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs:16070..<br>Without Old Battery: Rs:19400 <br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],

	    "Audi Q3 Diesel": [
            {
               modelName: "Exide Matrix Red MTREDDIN100",
                image: "41.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs:16590.<br>Without Old Battery: Rs:19930<br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron PRO DIN100",
                image: "42.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs:16070..<br>Without Old Battery: Rs:19400 <br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],
	       "Audi Q5 Petrol": [
            {
               modelName: "Exide Matrix Red MTREDDIN100",
                image: "41.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs:16590.<br>Without Old Battery: Rs:19930<br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron PRO DIN100",
                image: "42.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs:16070..<br>Without Old Battery: Rs:19400 <br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],
	      "Audi Q5 3.0 Quattaro Diesel": [
            {
              modelName: "Exide Matrix Red MTREDDIN100",
                image: "41.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs:16590.<br>Without Old Battery: Rs:19930<br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron PRO DIN100",
                image: "42.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs:16070..<br>Without Old Battery: Rs:19400 <br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],

	  "Audi Q7 Diesel": [
            {
               modelName: "Exide Matrix Red MTREDDIN100",
                image: "41.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs:16590.<br>Without Old Battery: Rs:19930<br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron PRO DIN100",
                image: "42.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs:16070..<br>Without Old Battery: Rs:19400 <br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],


	    "Audi Q7 Petrol": [
            {
               modelName: "Exide Matrix Red MTREDDIN100",
                image: "41.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs:16590.<br>Without Old Battery: Rs:19930<br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron PRO DIN100",
                image: "42.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs:16070..<br>Without Old Battery: Rs:19400 <br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],
	      "Jaguar XE Diesel": [
            {
              modelName: "Exide Matrix Red MTREDDIN100",
                image: "41.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs:16590.<br>Without Old Battery: Rs:19930<br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron PRO DIN100",
                image: "42.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs:16070..<br>Without Old Battery: Rs:19400 <br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],
	      "Jaguar XF Petrol": [
            {
              modelName: "Exide Matrix Red MTREDDIN100",
                image: "41.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs:16590.<br>Without Old Battery: Rs:19930<br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron PRO DIN100",
                image: "42.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs:16070..<br>Without Old Battery: Rs:19400 <br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],
	      "Jaguar F TYPE Petrol": [
            {
              modelName: "Exide Matrix Red MTREDDIN100",
                image: "41.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs:16590.<br>Without Old Battery: Rs:19930<br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron PRO DIN100",
                image: "42.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs:16070..<br>Without Old Battery: Rs:19400 <br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],
	      "Jaguar XF Petrol": [
            {
              modelName: "Exide Matrix Red MTREDDIN100",
                image: "41.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs:16590.<br>Without Old Battery: Rs:19930<br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron PRO DIN100",
                image: "42.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs:16070..<br>Without Old Battery: Rs:19400 <br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],
	        "Jaguar XJ Petrol": [
            {
              modelName: "Exide Matrix Red MTREDDIN100",
                image: "41.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs:16590.<br>Without Old Battery: Rs:19930<br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron PRO DIN100",
                image: "42.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs:16070..<br>Without Old Battery: Rs:19400 <br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],
	      "Jaguar XF Diesel": [
            {
              modelName: "Exide Matrix Red MTREDDIN100",
                image: "41.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs:16590.<br>Without Old Battery: Rs:19930<br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron PRO DIN100",
                image: "42.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs:16070..<br>Without Old Battery: Rs:19400 <br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],
	      "Jaguar XJ Diesel ": [
            {
              modelName: "Exide Matrix Red MTREDDIN100",
                image: "41.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs:16590.<br>Without Old Battery: Rs:19930<br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron PRO DIN100",
                image: "42.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs:16070..<br>Without Old Battery: Rs:19400 <br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],
	      "Jeep Compass Sport Petrol": [
            {
              modelName: "Exide Mileage ML DIN 70(ISS)(70AH)",
                image: "26.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.8510.<br>Without Old Battery: Rs.10680<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		       {
               modelName: "Exide-EPIQDIN74L-74 Ah Car Battery",
                image: "61.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.10750.<br>Without Old Battery: Rs.12970<br>Warranty: 77 Months (42 Months full Replacement + 35 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "AMARON AAM-DR-EFBDIN70L (ISS) (70Ah) Car Battery",
                image: "27.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.7250..<br>Without Old Battery: Rs.9400.<br>Warranty: 48 Months (24 Months Full Replacement + 24 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            },
		        {
                modelName: "Amaron Pro Din74 Aam Pr 574102069 (74AH)",
                image: "62.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.9700.<br>Without Old Battery: Rs.11900.<br>Warranty : 72 Months (36 Months Free + 36 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],
	       "Jeep Wrangler Unlimited Diesel": [
         {
              modelName: "Exide Mileage ML DIN 70(ISS)(70AH)",
                image: "26.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.8510.<br>Without Old Battery: Rs.10680<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		       {
               modelName: "Exide-EPIQDIN74L-74 Ah Car Battery",
                image: "61.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.10750.<br>Without Old Battery: Rs.12970<br>Warranty: 77 Months (42 Months full Replacement + 35 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "AMARON AAM-DR-EFBDIN70L (ISS) (70Ah) Car Battery",
                image: "27.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.7250..<br>Without Old Battery: Rs.9400.<br>Warranty: 48 Months (24 Months Full Replacement + 24 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            },
		        {
                modelName: "Amaron Pro Din74 Aam Pr 574102069 (74AH)",
                image: "62.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.9700.<br>Without Old Battery: Rs.11900.<br>Warranty : 72 Months (36 Months Free + 36 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],
	      "Jeep Compass Sport Diesel": [
           {
              modelName: "Exide Mileage ML DIN 70(ISS)(70AH)",
                image: "26.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.8510.<br>Without Old Battery: Rs.10680<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		       {
               modelName: "Exide-EPIQDIN74L-74 Ah Car Battery",
                image: "61.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.10750.<br>Without Old Battery: Rs.12970<br>Warranty: 77 Months (42 Months full Replacement + 35 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "AMARON AAM-DR-EFBDIN70L (ISS) (70Ah) Car Battery",
                image: "27.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.7250..<br>Without Old Battery: Rs.9400.<br>Warranty: 48 Months (24 Months Full Replacement + 24 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            },
		        {
                modelName: "Amaron Pro Din74 Aam Pr 574102069 (74AH)",
                image: "62.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.9700.<br>Without Old Battery: Rs.11900.<br>Warranty : 72 Months (36 Months Free + 36 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],
	      "Jeep Compass Longitude Diesel": [
        {
              modelName: "Exide Mileage ML DIN 70(ISS)(70AH)",
                image: "26.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.8510.<br>Without Old Battery: Rs.10680<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		       {
               modelName: "Exide-EPIQDIN74L-74 Ah Car Battery",
                image: "61.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.10750.<br>Without Old Battery: Rs.12970<br>Warranty: 77 Months (42 Months full Replacement + 35 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "AMARON AAM-DR-EFBDIN70L (ISS) (70Ah) Car Battery",
                image: "27.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.7250..<br>Without Old Battery: Rs.9400.<br>Warranty: 48 Months (24 Months Full Replacement + 24 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            },
		        {
                modelName: "Amaron Pro Din74 Aam Pr 574102069 (74AH)",
                image: "62.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.9700.<br>Without Old Battery: Rs.11900.<br>Warranty : 72 Months (36 Months Free + 36 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],
	      "Jeep Compass Limited Petrol": [
           {
              modelName: "Exide Mileage ML DIN 70(ISS)(70AH)",
                image: "26.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.8510.<br>Without Old Battery: Rs.10680<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		       {
               modelName: "Exide-EPIQDIN74L-74 Ah Car Battery",
                image: "61.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.10750.<br>Without Old Battery: Rs.12970<br>Warranty: 77 Months (42 Months full Replacement + 35 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "AMARON AAM-DR-EFBDIN70L (ISS) (70Ah) Car Battery",
                image: "27.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.7250..<br>Without Old Battery: Rs.9400.<br>Warranty: 48 Months (24 Months Full Replacement + 24 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            },
		        {
                modelName: "Amaron Pro Din74 Aam Pr 574102069 (74AH)",
                image: "62.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.9700.<br>Without Old Battery: Rs.11900.<br>Warranty : 72 Months (36 Months Free + 36 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],
	     "Jeep Compass Limited Diesel": [
        {
              modelName: "Exide Mileage ML DIN 70(ISS)(70AH)",
                image: "26.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.8510.<br>Without Old Battery: Rs.10680<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		       {
               modelName: "Exide-EPIQDIN74L-74 Ah Car Battery",
                image: "61.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.10750.<br>Without Old Battery: Rs.12970<br>Warranty: 77 Months (42 Months full Replacement + 35 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "AMARON AAM-DR-EFBDIN70L (ISS) (70Ah) Car Battery",
                image: "27.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.7250..<br>Without Old Battery: Rs.9400.<br>Warranty: 48 Months (24 Months Full Replacement + 24 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            },
		        {
                modelName: "Amaron Pro Din74 Aam Pr 574102069 (74AH)",
                image: "62.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.9700.<br>Without Old Battery: Rs.11900.<br>Warranty : 72 Months (36 Months Free + 36 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],
	      "Volvo S60 Diesel": [
            {
             modelName: "Exide-EPIQDIN74L-74 Ah Car Battery",
                image: "61.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.10750.<br>Without Old Battery: Rs.12970<br>Warranty: 77 Months (42 Months full Replacement + 35 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron Pro Din74 Aam Pr 574102069 (74AH)",
                image: "62.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.9700.<br>Without Old Battery: Rs.11900.<br>Warranty : 72 Months (36 Months Free + 36 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],
	      "Volvo S60 Petrol": [
            {
              modelName: "Exide-EPIQDIN74L-74 Ah Car Battery",
                image: "61.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.10750.<br>Without Old Battery: Rs.12970<br>Warranty: 77 Months (42 Months full Replacement + 35 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron Pro Din74 Aam Pr 574102069 (74AH)",
                image: "62.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.9700.<br>Without Old Battery: Rs.11900.<br>Warranty : 72 Months (36 Months Free + 36 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],
	     "Volvo V60  Cross Country Diesel": [
            {
             modelName: "Exide-EPIQDIN74L-74 Ah Car Battery",
                image: "61.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.10750.<br>Without Old Battery: Rs.12970<br>Warranty: 77 Months (42 Months full Replacement + 35 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron Pro Din74 Aam Pr 574102069 (74AH)",
                image: "62.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.9700.<br>Without Old Battery: Rs.11900.<br>Warranty : 72 Months (36 Months Free + 36 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],
	      "Volvo S60 Cross Country DIESEL": [
            {
              modelName: "Exide Matrix Red MTREDDIN100",
                image: "41.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs:16590.<br>Without Old Battery: Rs:19930<br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron PRO DIN100",
                image: "42.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs:16070..<br>Without Old Battery: Rs:19400 <br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],
	      "Volvo S60 Petrol": [
            {
                modelName: "Exide-EPIQDIN74L-74 Ah Car Battery",
                image: "61.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.10750.<br>Without Old Battery: Rs.12970<br>Warranty: 77 Months (42 Months full Replacement + 35 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron Pro Din74 Aam Pr 574102069 (74AH)",
                image: "62.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.9700.<br>Without Old Battery: Rs.11900.<br>Warranty : 72 Months (36 Months Free + 36 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],
	      "Volvo XC60 Diesel ": [
            {
              modelName: "Exide Matrix Red MTREDDIN100",
                image: "41.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs:16590.<br>Without Old Battery: Rs:19930<br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron PRO DIN100",
                image: "42.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs:16070..<br>Without Old Battery: Rs:19400 <br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],
	      "Volvo S90 Diesel": [
            {
              modelName: "Exide Matrix Red MTREDDIN100",
                image: "41.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs:16590.<br>Without Old Battery: Rs:19930<br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron PRO DIN100",
                image: "42.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs:16070..<br>Without Old Battery: Rs:19400 <br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],
	     "Volvo XC90 Petrol": [
            {
              modelName: "Exide Matrix Red MTREDDIN100",
                image: "41.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs:16590.<br>Without Old Battery: Rs:19930<br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron PRO DIN100",
                image: "42.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs:16070..<br>Without Old Battery: Rs:19400 <br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],
	      "Volvo XC40 DIESEL": [
            {
              modelName: "Exide Matrix Red MTREDDIN100",
                image: "41.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs:16590.<br>Without Old Battery: Rs:19930<br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron PRO DIN100",
                image: "42.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs:16070..<br>Without Old Battery: Rs:19400 <br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],
	      "Mahindra XUV 500 Diesel": [
            {
              modelName: "Exide EEZY EY105D31R(85AH)",
                image: "81.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs:7640.<br>Without Old Battery: Rs:9799<br>Warranty: 48 Months (24 Months Full Replacement + 24 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron AAM-GO-00105D31R (85 Ah)",
                image: "82.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs:6900..<br>Without Old Battery: Rs:9050 <br>Warranty: 48 Months (24 Months Full Replacement + 24 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            },
		       {
                modelName: "ELITO BY AMARON ET105D31R(85 AH)",
                image: "E105D31L.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs 6350..<br>Without Old Battery: Rs.8480 <br>Warranty: 48 Months(24 Months Free Of Cost + 24 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],
	      "Mahindra Xylo  D2 Diesel": [
            {
              modelName: "Exide EEZY EGRID 700(65AH)",
                image: "83.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs:7040.<br>Without Old Battery: Rs:8980<br>Warranty: 48 Months (24 Months Full Replacement + 24 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "AMARON GO 95D26R(65AH)",
                image: "84.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs:6410..<br>Without Old Battery: Rs:8340 <br>Warranty: 48 Months (24 Months Full Replacement + 24 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            },
		           {
                modelName: "ELITO BY AMARON ET95D26R(65 AH)",
                image: "E105D31L.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs 5730..<br>Without Old Battery: Rs.7840 <br>Warranty: 48 Months(24 Months Free Of Cost + 24 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],
	      "Mahindra Xylo  E2 Diesel": [
           {
              modelName: "Exide EEZY EGRID 700(65AH)",
                image: "83.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs:7040.<br>Without Old Battery: Rs:8980<br>Warranty: 48 Months (24 Months Full Replacement + 24 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "AMARON GO 95D26R(65AH)",
                image: "84.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs:6410..<br>Without Old Battery: Rs:8340 <br>Warranty: 48 Months (24 Months Full Replacement + 24 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            },
		           {
                modelName: "ELITO BY AMARON ET95D26R(65 AH)",
                image: "E105D31L.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs 5730..<br>Without Old Battery: Rs.7840 <br>Warranty: 48 Months(24 Months Free Of Cost + 24 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],
	      "Mahindra TUV 300 Diesel": [
            {
              modelName: "Exide EEZY EGRID 700(65AH)",
                image: "83.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs:7040.<br>Without Old Battery: Rs:8980<br>Warranty: 48 Months (24 Months Full Replacement + 24 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "AMARON GO 95D26R(65AH)",
                image: "84.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs:6410..<br>Without Old Battery: Rs:8340 <br>Warranty: 48 Months (24 Months Full Replacement + 24 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            },
		           {
                modelName: "ELITO BY AMARON ET95D26R(65 AH)",
                image: "E105D31L.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs 5730..<br>Without Old Battery: Rs.7840 <br>Warranty: 48 Months(24 Months Free Of Cost + 24 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],
	     "Mahindra KUV 100 ESS Diesel": [
            {
              modelName: "Exide EEZY EGRID 700(65AH)",
                image: "83.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs:7040.<br>Without Old Battery: Rs:8980<br>Warranty: 48 Months (24 Months Full Replacement + 24 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "AMARON GO 95D26R(65AH)",
                image: "84.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs:6410..<br>Without Old Battery: Rs:8340 <br>Warranty: 48 Months (24 Months Full Replacement + 24 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            },
		           {
                modelName: "ELITO BY AMARON ET95D26R(65 AH)",
                image: "E105D31L.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs 5730..<br>Without Old Battery: Rs.7840 <br>Warranty: 48 Months(24 Months Free Of Cost + 24 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],
	     "Mahindra KUV 100 ESS PETROL ": [
         {
              modelName: "Exide EEZY EGRID 700(65AH)",
                image: "83.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs:7040.<br>Without Old Battery: Rs:8980<br>Warranty: 48 Months (24 Months Full Replacement + 24 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "AMARON GO 95D26R(65AH)",
                image: "84.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs:6410..<br>Without Old Battery: Rs:8340 <br>Warranty: 48 Months (24 Months Full Replacement + 24 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            },
		           {
                modelName: "ELITO BY AMARON ET95D26R(65 AH)",
                image: "E105D31L.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs 5730..<br>Without Old Battery: Rs.7840 <br>Warranty: 48 Months(24 Months Free Of Cost + 24 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],
	       "Mahindra Bolera Diesel": [
       {
              modelName: "Exide EEZY EGRID 700(65AH)",
                image: "83.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs:7040.<br>Without Old Battery: Rs:8980<br>Warranty: 48 Months (24 Months Full Replacement + 24 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "AMARON GO 95D26R(65AH)",
                image: "84.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs:6410..<br>Without Old Battery: Rs:8340 <br>Warranty: 48 Months (24 Months Full Replacement + 24 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            },
		           {
                modelName: "ELITO BY AMARON ET95D26R(65 AH)",
                image: "E105D31L.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs 5730..<br>Without Old Battery: Rs.7840 <br>Warranty: 48 Months(24 Months Free Of Cost + 24 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],
	      "Mahindra Renault Logan 1.5 Diesel": [
            {
               modelName: "EXIDE MILEAGE MLDIN60 (60AH)",
                image: "n.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.7070.<br>Without Old Battery: Rs.9420 <br> Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving",
            },
            {
                modelName: "Amaron FLO DIN66 (60AH) 566112060",
                image: "5.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs:6700..<br>Without Old Battery: Rs.8840 <br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            },
		         {
                modelName: "ELITO BY AMARON ETDIN65(65 AH)",
                image: "EDIN60.png",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs 6020..<br>Without Old Battery: Rs.8140 <br>Warranty: 60 Months(30 Months Free Of Cost + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],
	      "Mahindra ALTURAS G4": [
            {
              modelName: "Exide EEZY EY105D31R(85AH)",
                image: "81.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs:7640.<br>Without Old Battery: Rs:9799<br>Warranty: 48 Months (24 Months Full Replacement + 24 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron AAM-GO-00105D31R (85 Ah)",
                image: "82.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs:6900..<br>Without Old Battery: Rs:9050 <br>Warranty: 48 Months (24 Months Full Replacement + 24 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            },
		         {
                modelName: "ELITO BY AMARON ET105D31R(85 AH)",
                image: "E105D31L.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs 6350..<br>Without Old Battery: Rs.8480 <br>Warranty: 48 Months(24 Months Free Of Cost + 24 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],
	     "Mahindra Renault Logan 1.4 Petrol": [
         {
                modelName: "EXIDE MILEAGE MLDIN44LH(45AH)",
                image: "6.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs:5650.<br>Without Old Battery: Rs:7270 <br> Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron FLO DIN45 (545106036)45AH",
                image: "5.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs:5170..<br>Without Old Battery: Rs:6780 <br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            },
		  {
                modelName: "ELITO BY AMARON ETDIN45(45 AH)",
                image: "EDIN60.png",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs 4640..<br>Without Old Battery: Rs.6230 <br>Warranty: 60 Months(30 Months Free Of Cost + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],
	      "Mahindra Thar Diesel": [
            {
               modelName: "Exide EEZY EGRID 700(65AH)",
                image: "83.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs:7040.<br>Without Old Battery: Rs:8980<br>Warranty: 48 Months (24 Months Full Replacement + 24 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "AMARON GO 95D26R(65AH)",
                image: "84.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs:6410..<br>Without Old Battery: Rs:8340 <br>Warranty: 48 Months (24 Months Full Replacement + 24 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            },
		      
		           {
                modelName: "ELITO BY AMARON ET95D26R(65 AH)",
                image: "E105D31L.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs 5730..<br>Without Old Battery: Rs.7840 <br>Warranty: 48 Months(24 Months Free Of Cost + 24 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],
	      "Mahindra Scorpio Vlx Diesel": [
            {
               modelName: "Exide EEZY EGRID 700(65AH)",
                image: "83.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs:7040.<br>Without Old Battery: Rs:8980<br>Warranty: 48 Months (24 Months Full Replacement + 24 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "AMARON GO 95D26R(65AH)",
                image: "84.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs:6410..<br>Without Old Battery: Rs:8340 <br>Warranty: 48 Months (24 Months Full Replacement + 24 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            },
		      
		           {
                modelName: "ELITO BY AMARON ET95D26R(65 AH)",
                image: "E105D31L.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs 5730..<br>Without Old Battery: Rs.7840 <br>Warranty: 48 Months(24 Months Free Of Cost + 24 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],
	      "Mahindra Bolero New Diesel": [
            {
              modelName: "Exide EEZY EGRID 700(65AH)",
                image: "83.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs:7040.<br>Without Old Battery: Rs:8980<br>Warranty: 48 Months (24 Months Full Replacement + 24 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "AMARON GO 95D26R(65AH)",
                image: "84.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs:6410..<br>Without Old Battery: Rs:8340 <br>Warranty: 48 Months (24 Months Full Replacement + 24 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            },
		      
		           {
                modelName: "ELITO BY AMARON ET95D26R(65 AH)",
                image: "E105D31L.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs 5730..<br>Without Old Battery: Rs.7840 <br>Warranty: 48 Months(24 Months Free Of Cost + 24 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],
	     "Mahindra Quanto Diesel": [
            {
              modelName: "Exide EEZY EGRID 700(65AH)",
                image: "83.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs:7040.<br>Without Old Battery: Rs:8980<br>Warranty: 48 Months (24 Months Full Replacement + 24 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "AMARON GO 95D26R(65AH)",
                image: "84.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs:6410..<br>Without Old Battery: Rs:8340 <br>Warranty: 48 Months (24 Months Full Replacement + 24 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            },
		     
		           {
                modelName: "ELITO BY AMARON ET95D26R(65 AH)",
                image: "E105D31L.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs 5730..<br>Without Old Battery: Rs.7840 <br>Warranty: 48 Months(24 Months Free Of Cost + 24 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],



	  "Mahindra Marazzo Diesel": [
            {
              modelName: "Exide EEZY EGRID 700(65AH)",
                image: "83.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs:7040.<br>Without Old Battery: Rs:8980<br>Warranty: 48 Months (24 Months Full Replacement + 24 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "AMARON GO 95D26R(65AH)",
                image: "84.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs:6410..<br>Without Old Battery: Rs:8340 <br>Warranty: 48 Months (24 Months Full Replacement + 24 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            },
		     
		           {
                modelName: "ELITO BY AMARON ET95D26R(65 AH)",
                image: "E105D31L.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs 5730..<br>Without Old Battery: Rs.7840 <br>Warranty: 48 Months(24 Months Free Of Cost + 24 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],
	     "Mahindra Verito 1.4 Petrol": [
            {
               modelName: "EXIDE MILEAGE MLDIN44LH(45AH)",
                image: "6.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs:5650.<br>Without Old Battery: Rs:7270 <br> Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron FLO DIN45 (545106036)45AH",
                image: "5.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs:5170..<br>Without Old Battery: Rs:6780 <br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            },
		       {
                modelName: "ELITO BY AMARON ETDIN45(45 AH)",
                image: "EDIN60.png",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs 4640..<br>Without Old Battery: Rs.6230 <br>Warranty: 60 Months(30 Months Free Of Cost + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],
	      "Mahindra Verito 1.5 Diesel": [
            {
               modelName: "EXIDE MILEAGE MLDIN60 (60AH)",
                image: "n.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.7270.<br>Without Old Battery: Rs.9420 <br> Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving",
            },
            {
                modelName: "Amaron FLO DIN66 (60AH) 566112060",
                image: "5.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs:6700..<br>Without Old Battery: Rs.8840 <br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            },
		         {
                modelName: "ELITO BY AMARON ETDIN65(65 AH)",
                image: "EDIN60.png",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs 6020..<br>Without Old Battery: Rs.8140 <br>Warranty: 60 Months(30 Months Free Of Cost + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],
	      "Mahindra XUV700": [
               {
              modelName: "Exide EEZY EGRID 700(65AH)",
                image: "83.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs:7040.<br>Without Old Battery: Rs:8980<br>Warranty: 48 Months (24 Months Full Replacement + 24 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "AMARON GO 95D26R(65AH)",
                image: "84.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs:6410..<br>Without Old Battery: Rs:8340 <br>Warranty: 48 Months (24 Months Full Replacement + 24 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            },
		     
		           {
                modelName: "ELITO BY AMARON ET95D26R(65 AH)",
                image: "E105D31L.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs 5730..<br>Without Old Battery: Rs.7840 <br>Warranty: 48 Months(24 Months Free Of Cost + 24 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],
	      "Mahindra XUV 300 PETROL": [
            {
               modelName: "EXIDE MILEAGE MLDIN60 (60AH)",
                image: "n.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.7270.<br>Without Old Battery: Rs.9420 <br> Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving",
            },
            {
                modelName: "Amaron FLO DIN66 (60AH) 566112060",
                image: "5.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs:6700..<br>Without Old Battery: Rs.8840 <br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],
	     "Mahindra XUV 300 DIESEL": [
            {
              modelName: "EXIDE MILEAGE MLDIN60 (60AH)",
                image: "n.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.7070.<br>Without Old Battery: Rs.9420 <br> Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving",
            },
            {
                modelName: "Amaron FLO DIN66 (60AH) 566112060",
                image: "5.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs:6700..<br>Without Old Battery: Rs.8840 <br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            },
		       {
                modelName: "ELITO BY AMARON ETDIN65(65 AH)",
                image: "EDIN60.png",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs 6020..<br>Without Old Battery: Rs.8140 <br>Warranty: 60 Months(30 Months Free Of Cost + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],
	     "Renault Pulse Diesel": [
              {
                modelName: "Exide Mileage MLDIN50(50AH",
                image: "30.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.6210.<br>Without Old Battery: Rs.7840<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron FLO DIN50 L(50AH)",
                image: "31.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.5730.<br>Without Old Battery: Rs.7340.<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            },
		       {
                modelName: "ELITO BY AMARON ETDIN50L(50AH)",
                image: "EDIN60.png",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.5100.<br>Without Old Battery: Rs.6710.<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],
	      "Renault Scala Petrol": [
           {
                modelName: "Exide Mileage ML38B20L (35AH)",
                image: "23.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.3820.<br>Without Old Battery: Rs.4900<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		     {
                modelName: "Exide EPIQ 35L (35AH)",
                image: "EPIQ35L.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.4430.<br>Without Old Battery: Rs.5520<br>Warranty: 77 Months (42 Months Full Replacement + 35 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		        {
                modelName: "Exide Matrix MT40b20L (35AH)",
                image: "E40B20L.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.4010.<br>Without Old Battery: Rs.5090<br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		       {
                modelName: "Exide Eezy 34B19L (35AH)",
                image: "EY34B19L.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.3490.<br>Without Old Battery: Rs.4560<br>Warranty: 48 Months (24 Months Full Replacement + 24 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		      {
                modelName: "AMARON GO 38B20L (35AH)",
                image: "AM38B20L.png",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.3510.<br>Without Old Battery: Rs.4580<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		      {
                modelName: "AMARON FLO 40B20L (35AH)",
                image: "AM38B20L.png",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.3800.<br>Without Old Battery: Rs.4880<br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		      {
                modelName: "ELITO BY AMARON ET38B20L (35AH)",
                image: "ELITO40B20L.jpeg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.3060.<br>Without Old Battery: Rs.4130<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            }
          
        ],
	      "Renault Scala Diesel": [
    {
                modelName: "Exide Mileage MLDIN50(50AH",
                image: "30.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.6210.<br>Without Old Battery: Rs.7840<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron FLO DIN50 L(50AH)",
                image: "31.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.5730.<br>Without Old Battery: Rs.7340.<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            },
		       {
                modelName: "ELITO BY AMARON ETDIN50L(50AH)",
                image: "EDIN60.png",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.5100.<br>Without Old Battery: Rs.6710.<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],
	      "Renault Kwid": [
        {
                modelName: "Exide Mileage ML40LBH (40 AH)", 
                image: "34.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.4680.<br>Without Old Battery: Rs.5780<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		      {
                modelName: "EXIDE EPIQ 40LBH(40AH)",
                image: "EPIQDIN74L.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.4980.<br>Without Old Battery: Rs.6080.<br>Warranty: 77 Months (42 Months Full Replacement + 35 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            },
		    
            {
                modelName: "AMARON FLO BH40B20L (40AH)",
                image: "35.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.4230.<br>Without Old Battery: Rs.5320.<br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            },
		     {
                modelName: "ELITO BY AMARON ET40B20LBH (40AH)",
                image: "ELITO40B20L.jpeg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.3710.<br>Without Old Battery: Rs.4780.<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],

"Renault Kiger Petrol": [

	    {
                modelName: "Exide Mileage MLN55 (ISS) - 45AH",
                image: "28.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.6480.<br>Without Old Battery: Rs.8120<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron AAM-GO-00050B24L (50Ah)",
                image: "29.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.5560..<br>Without Old Battery: Rs. 7180<br>Warranty: 48 Months (24 Months Full Replacement + 24 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],
	      "Renault Lodgy": [
  {
                modelName: "EXIDE MILEAGE MLDIN60 (60AH)",
                image: "n.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.7270.<br>Without Old Battery: Rs.9420 <br> Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving",
            },
            {
                modelName: "Amaron FLO DIN66 (60AH) 566112060",
                image: "5.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs:6700..<br>Without Old Battery: Rs.8840 <br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            },
		     {
                modelName: "ELITO BY AMARON ETDIN65(65 AH)",
                image: "EDIN60.png",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs 6020..<br>Without Old Battery: Rs.8140 <br>Warranty: 60 Months(30 Months Free Of Cost + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            }
		 
        ],
	      "Renault Captur Petrol": [
           {
                modelName: "EXIDE MILEAGE MLDIN60 (60AH)",
                image: "n.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.7270.<br>Without Old Battery: Rs.9420 <br> Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving",
            },
            {
                modelName: "Amaron FLO DIN66 (60AH) 566112060",
                image: "5.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs:6700..<br>Without Old Battery: Rs.8840 <br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            },
		     {
                modelName: "ELITO BY AMARON ETDIN65(65 AH)",
                image: "EDIN60.png",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs 6020..<br>Without Old Battery: Rs.8140 <br>Warranty: 60 Months(30 Months Free Of Cost + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            }
		 
        ],
	      "Renault Captur Diesel": [
            {
              modelName: "Exide-EPIQDIN74L-74 Ah Car Battery",
                image: "61.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.10750.<br>Without Old Battery: Rs.12970<br>Warranty: 77 Months (42 Months full Replacement + 35 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron Pro Din74 Aam Pr 574102069 (74AH)",
                image: "62.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.9700.<br>Without Old Battery: Rs.11900.<br>Warranty : 72 Months (36 Months Free + 36 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],
	      "Renault Triber Petrol": [
            {
            modelName: "Exide Mileage ML40LBH (40 AH)",
                image: "34.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.4680.<br>Without Old Battery: Rs.5780<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		        {
                modelName: "Exide Mileage MLN55 (ISS) - 45AH",
                image: "28.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.6480.<br>Without Old Battery: Rs.8120<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron AAM-GO-00050B24L (50Ah)",
                image: "29.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.5560..<br>Without Old Battery: Rs. 7180<br>Warranty: 48 Months (24 Months Full Replacement + 24 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            },
        
            {
                modelName: "Amaron FLO BH40B20L (40AH)",
                image: "35.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.4230.<br>Without Old Battery: Rs.5320.<br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],
	      "ICML Delite Diesel": [
            {
               modelName: "Exide Xpress XP800 (80AH)",
                image: "77.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.7130.<br>Without Old Battery: Rs.9270<br>Warranty: 42 Months (24 Months Free of Cost + 18 Months Pro Rata )",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron Black BL800 RMF(80AH)",
                image: "78.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.6130.<br>Without Old Battery: Rs.8250<br>Warranty: 24 Months Free Replacement",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],
	      "ICML Rhino Diesel": [
            {
               modelName: "Exide Xpress XP800 (80AH)",
                image: "77.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.7130.<br>Without Old Battery: Rs.9270<br>Warranty: 42 Months (24 Months Free of Cost + 18 Months Pro Rata )",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron Black BL800 RMF(80AH)",
                image: "78.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.6130.<br>Without Old Battery: Rs.8250<br>Warranty: 24 Months Free Replacement",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],
	      "ICML Winner Diesel": [
            {
               modelName: "Exide Xpress XP800 (80AH)",
                image: "77.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.7130.<br>Without Old Battery: Rs.9270<br>Warranty: 42 Months (24 Months Free of Cost + 18 Months Pro Rata )",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron Black BL800 RMF(80AH)",
                image: "78.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.6130.<br>Without Old Battery: Rs.8250<br>Warranty: 24 Months Free Replacement",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],
	      "ICML Xcitor Diesel": [
            {
              modelName: "Exide Xpress XP800 (80AH)",
                image: "77.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.7130.<br>Without Old Battery: Rs.9270<br>Warranty: 42 Months (24 Months Free of Cost + 18 Months Pro Rata )",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron Black BL800 RMF(80AH)",
                image: "78.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.6130.<br>Without Old Battery: Rs.8250<br>Warranty: 24 Months Free Replacement",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],
	      "ICML Xcitor Diesel": [
            {
               modelName: "Exide Xpress XP800 (80AH)",
                image: "77.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.7130.<br>Without Old Battery: Rs.9270<br>Warranty: 42 Months (24 Months Free of Cost + 18 Months Pro Rata )",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron Black BL800 RMF(80AH)",
                image: "78.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.6130.<br>Without Old Battery: Rs.8250<br>Warranty: 24 Months Free Replacement",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],
	       "Force Motors Minidor": [
            {
              modelName: "Exide Xpress XP1000 (100AH)",
                image: "31.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs:8950.<br>Without Old Battery: Rs:11640<br>Warranty: 42 Months (24 Months Free of Cost + 18 Months Pro Rata )",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "AMARON BL1000 (100AH)",
                image: "32.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs:7180..<br>Without Old Battery: Rs:9830 <br>Warranty: 24 Months Free Replacement",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],
	       "Force Motors Balwan-330-25Hp": [
            {
              modelName: "Exide Xpress XP1000 (100AH)",
                image: "31.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs:8950.<br>Without Old Battery: Rs:11640<br>Warranty: 42 Months (24 Months Free of Cost + 18 Months Pro Rata )",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "AMARON BL1000 (100AH)",
                image: "32.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs:7180..<br>Without Old Battery: Rs:9830 <br>Warranty: 24 Months Free Replacement",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],
	       "Force Motors Balwan-400-35Hp": [
            {
              modelName: "Exide Xpress XP1000 (100AH)",
                image: "31.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs:8950.<br>Without Old Battery: Rs:11640<br>Warranty: 42 Months (24 Months Free of Cost + 18 Months Pro Rata )",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "AMARON BL1000 (100AH)",
                image: "32.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs:7180..<br>Without Old Battery: Rs:9830 <br>Warranty: 24 Months Free Replacement",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],
	      "Force Motors orchard": [
            {
              modelName: "Exide Xpress XP1000 (100AH)",
                image: "31.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs:8950.<br>Without Old Battery: Rs:11640<br>Warranty: 42 Months (24 Months Free of Cost + 18 Months Pro Rata )",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "AMARON BL1000 (100AH)",
                image: "32.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs:7180..<br>Without Old Battery: Rs:9830 <br>Warranty: 24 Months Free Replacement",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],
	      "Force Motors Balwan-550-52Hp": [
            {
             modelName: "Exide Xpress XP1000 (100AH)",
                image: "31.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs:8950.<br>Without Old Battery: Rs:11640<br>Warranty: 42 Months (24 Months Free of Cost + 18 Months Pro Rata )",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "AMARON BL1000 (100AH)",
                image: "32.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs:7180..<br>Without Old Battery: Rs:9830 <br>Warranty: 24 Months Free Replacement",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],
	       "Force Motors Balwan-400-35Hp": [
            {
              modelName: "Exide Xpress XP1000 (100AH)",
                image: "31.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs:8950.<br>Without Old Battery: Rs:11640<br>Warranty: 42 Months (24 Months Free of Cost + 18 Months Pro Rata )",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "AMARON BL1000 (100AH)",
                image: "32.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs:71..<br>Without Old Battery: Rs:9830<br>Warranty: 24 Months Free Replacement",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],
	      "Force Motors Balwan-450-40Hp": [
            {
              modelName: "Exide Xpress XP1000 (100AH)",
                image: "31.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs:8950.<br>Without Old Battery: Rs:11640<br>Warranty: 42 Months (24 Months Free of Cost + 18 Months Pro Rata )",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "AMARON BL1000 (100AH)",
                image: "32.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs:7180..<br>Without Old Battery: Rs:9830 <br>Warranty: 24 Months Free Replacement",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],
	       "Force Motors OX 25": [
            {
              modelName: "Exide Xpress XP1000 (100AH)",
                image: "31.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs:8950.<br>Without Old Battery: Rs:11640<br>Warranty: 42 Months (24 Months Free of Cost + 18 Months Pro Rata )",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "AMARON BL1000 (100AH)",
                image: "32.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs:7180..<br>Without Old Battery: Rs:9830 <br>Warranty: 24 Months Free Replacement",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],
	      "Force Motors TRAVELLER DIESEL": [
            {
              modelName: "Exide Xpress XP1000 (100AH)",
                image: "31.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs:8950.<br>Without Old Battery: Rs:11640<br>Warranty: 42 Months (24 Months Free of Cost + 18 Months Pro Rata )",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "AMARON BL1000 (100AH)",
                image: "32.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs:7180..<br>Without Old Battery: Rs:9830 <br>Warranty: 24 Months Free Replacement",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],
	      "Bentley Flying Spur Petrol": [
            {
              modelName: "Exide Matrix Red MTREDDIN100",
                image: "41.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs:16590.<br>Without Old Battery: Rs:19930<br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron PRO DIN100",
                image: "42.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs:16070..<br>Without Old Battery: Rs:19400 <br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],
	      "Bentley Continental Petrol": [
            {
             modelName: "Exide Matrix Red MTREDDIN100",
                image: "41.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs:16590.<br>Without Old Battery: Rs:19930<br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron PRO DIN100",
                image: "42.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs:16070..<br>Without Old Battery: Rs:19400 <br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],
	      "Bentley Bentayga Petrol": [
            {
             modelName: "Exide Matrix Red MTREDDIN100",
                image: "41.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs:16590.<br>Without Old Battery: Rs:19930<br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron PRO DIN100",
                image: "42.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs:16070..<br>Without Old Battery: Rs:19400 <br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],
	      "Bentley Mulsanne Petrol": [
            {
              modelName: "Exide Matrix Red MTREDDIN100",
                image: "41.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs:16590.<br>Without Old Battery: Rs:19930<br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron PRO DIN100",
                image: "42.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs:16070..<br>Without Old Battery: Rs:19400 <br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],
	      "Chevrolet Opel Vectra Diesel": [
       {
                modelName: "EXIDE MILEAGE MLDIN60 (60AH)",
                image: "n.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.7270.<br>Without Old Battery: Rs.9420 <br> Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving",
            },
            {
                modelName: "Amaron FLO DIN66 (60AH) 566112060",
                image: "5.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs:6700..<br>Without Old Battery: Rs.8840 <br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            },
		 {
                modelName: "ELITO BY AMARON ETDIN65(65 AH)",
                image: "EDIN60.png",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs 6020..<br>Without Old Battery: Rs.8140 <br>Warranty: 60 Months(30 Months Free Of Cost + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            }
		 
        ],
	      "Chevrolet Opel Vectra Petrol": [
          {
                modelName: "EXIDE MILEAGE MLDIN60 (60AH)",
                image: "n.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.7270.<br>Without Old Battery: Rs.9420 <br> Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving",
            },
            {
                modelName: "Amaron FLO DIN66 (60AH) 566112060",
                image: "5.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs:6700..<br>Without Old Battery: Rs.8840 <br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            },
		 {
                modelName: "ELITO BY AMARON ETDIN65(65 AH)",
                image: "EDIN60.png",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs 6020..<br>Without Old Battery: Rs.8140 <br>Warranty: 60 Months(30 Months Free Of Cost + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            }
		 
        ],
	      "Chevrolet Enjoy Diesel": [
          {
               modelName: "Exide EEZY EGRID 700(65AH)",
                image: "83.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs:7040.<br>Without Old Battery: Rs:8980<br>Warranty: 48 Months (24 Months Full Replacement + 24 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "AMARON GO 95D26R(65AH)",
                image: "84.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs:6410..<br>Without Old Battery: Rs:8340 <br>Warranty: 48 Months (24 Months Full Replacement + 24 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            },
		      
		           {
                modelName: "ELITO BY AMARON ET95D26R(65 AH)",
                image: "E105D31L.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs 5730..<br>Without Old Battery: Rs.7840 <br>Warranty: 48 Months(24 Months Free Of Cost + 24 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],
	     "Chevrolet Cruze Diesel": [
            {
            modelName: "Exide Mileage MLDIN80 Battery (80ah",
                image: "75.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.10620.<br>Without Old Battery: Rs.12840<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "AMARON FLO Automotive Battery – 580112073 DIN 80(80AH)",
                image: "76.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.9780.<br>Without Old Battery: Rs.11980.<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],
	      "Chevrolet Captiva Diesel": [
            {
               modelName: "Exide FEY0-EY105D31L(85 AH)",
                image: "ee.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.7640.<br>Without Old Battery: Rs. 9799 <br> Warranty: 48 Months(24 Months Free Of Cost + 24 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron AAM-GO-00105D31L(85 AH)",
                image: "ee2.png",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs 6900..<br>Without Old Battery: Rs.9050 <br>Warranty: 48 Months(24 Months Free Of Cost + 24 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            },
		        {
                modelName: "ELITO BY AMARON ET105D31L(85 AH)",
                image: "E105D31L.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs 6350..<br>Without Old Battery: Rs.8480 <br>Warranty: 48 Months(24 Months Free Of Cost + 24 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],
	     "Chevrolet Spark Petrol": [
            {
                modelName: "Exide Mileage ML38B20L (35AH)",
                image: "23.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.3820.<br>Without Old Battery: Rs.4900<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		     {
                modelName: "Exide EPIQ 35L (35AH)",
                image: "EPIQ35L.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.4430.<br>Without Old Battery: Rs.5520<br>Warranty: 77 Months (42 Months Full Replacement + 35 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		        {
                modelName: "Exide Matrix MT40b20L (35AH)",
                image: "E40B20L.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.4010.<br>Without Old Battery: Rs.5090<br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		       {
                modelName: "Exide Eezy 34B19L (35AH)",
                image: "EY34B19L.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.3490.<br>Without Old Battery: Rs.4560<br>Warranty: 48 Months (24 Months Full Replacement + 24 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		      {
                modelName: "AMARON GO 38B20L (35AH)",
                image: "AM38B20L.png",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.3510.<br>Without Old Battery: Rs.4580<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		      {
                modelName: "AMARON FLO 40B20L (35AH)",
                image: "AM38B20L.png",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.3800.<br>Without Old Battery: Rs.4880<br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		      {
                modelName: "ELITO BY AMARON ET38B20L (35AH)",
                image: "ELITO40B20L.jpeg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.3060.<br>Without Old Battery: Rs.4130<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            }
          
        ], 
	     "Chevrolet Sail Diesel": [
           {
               modelName: "Exide EEZY EGRID 700(65AH)",
                image: "83.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs:7040.<br>Without Old Battery: Rs:8980<br>Warranty: 48 Months (24 Months Full Replacement + 24 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "AMARON GO 95D26R(65AH)",
                image: "84.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs:6410..<br>Without Old Battery: Rs:8340 <br>Warranty: 48 Months (24 Months Full Replacement + 24 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            },
		      
		           {
                modelName: "ELITO BY AMARON ET95D26R(65 AH)",
                image: "E105D31L.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs 5730..<br>Without Old Battery: Rs.7840 <br>Warranty: 48 Months(24 Months Free Of Cost + 24 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],
	      "Chevrolet Sail Petrol": [
            {
               modelName: "Exide Matrix Red MTRED45L(45AH)",
                image: "63.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.7310.<br>Without Old Battery: Rs.8960<br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron PRO 55B24LS(45AH)",
                image: "64.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.6599.<br>Without Old Battery: Rs.8230.<br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],
	      "Chevrolet Optra Royal 1.6 Petrol": [
            {
            modelName: "Exide Matrix Red MTRED45L(45AH)",
                image: "63.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.7310.<br>Without Old Battery: Rs.8960<br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron PRO 55B24LS(45AH)",
                image: "64.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.6599.<br>Without Old Battery: Rs.8230.<br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],
	     
	      "Chevrolet Tavera Diesel": [
       {
               modelName: "Exide EEZY EGRID 700(65AH)",
                image: "83.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs:7040.<br>Without Old Battery: Rs:8980<br>Warranty: 48 Months (24 Months Full Replacement + 24 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "AMARON GO 95D26R(65AH)",
                image: "84.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs:6410..<br>Without Old Battery: Rs:8340 <br>Warranty: 48 Months (24 Months Full Replacement + 24 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            },
		      
		           {
                modelName: "ELITO BY AMARON ET95D26R(65 AH)",
                image: "E105D31L.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs 5730..<br>Without Old Battery: Rs.7840 <br>Warranty: 48 Months(24 Months Free Of Cost + 24 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],
	     "Chevrolet Enjoy Petrol": [
            {
              modelName: "Exide Matrix Red MTRED45L(45AH)",
                image: "63.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.7310.<br>Without Old Battery: Rs.8960<br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron PRO 55B24LS(45AH)",
                image: "64.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.6599.<br>Without Old Battery: Rs.8230.<br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],
	      "Chevrolet Optra 1.6 Petrol": [
            {
              modelName: "Exide Matrix Red MTRED45L(45AH)",
                image: "63.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.7310.<br>Without Old Battery: Rs.8960<br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron PRO 55B24LS(45AH)",
                image: "64.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.6599.<br>Without Old Battery: Rs.8230.<br>Warranty: 72 Months (36 Months Full Replacement + 36 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],
	     
	     
	    
	      
	       "Chevrolet Beat Petrol": [
           {
                modelName: "EXIDE MILEAGE MLDIN44LH(45AH)",
                image: "6.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs:5650.<br>Without Old Battery: Rs:7270 <br> Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron FLO DIN45 (545106036)45AH",
                image: "5.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs:5170..<br>Without Old Battery: Rs:6780 <br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            },
		  {
                modelName: "ELITO BY AMARON ETDIN45(45 AH)",
                image: "EDIN60.png",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs 4640..<br>Without Old Battery: Rs.6230 <br>Warranty: 60 Months(30 Months Free Of Cost + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],
	     "Chevrolet Optra Magnum Diesel": [
         {
               modelName: "Exide EEZY EGRID 700(65AH)",
                image: "83.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs:7040.<br>Without Old Battery: Rs:8980<br>Warranty: 48 Months (24 Months Full Replacement + 24 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "AMARON GO 95D26R(65AH)",
                image: "84.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs:6410..<br>Without Old Battery: Rs:8340 <br>Warranty: 48 Months (24 Months Full Replacement + 24 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            },
		      
		           {
                modelName: "ELITO BY AMARON ET95D26R(65 AH)",
                image: "E105D31L.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs 5730..<br>Without Old Battery: Rs.7840 <br>Warranty: 48 Months(24 Months Free Of Cost + 24 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],
	      "Chevrolet Beat Diesel": [
            {
              modelName: "Exide Mileage MLDIN50(50AH",
                image: "30.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.6210.<br>Without Old Battery: Rs.7840<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron FLO DIN50 L(50AH)",
                image: "31.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.5730.<br>Without Old Battery: Rs.7340.<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            },
		      
		  {
                modelName: "ELITO BY AMARON ETDIN50(50 AH)",
                image: "EDIN60.png",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs 5100..<br>Without Old Battery: Rs.6710 <br>Warranty: 60 Months(30 Months Free Of Cost + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],
	     "Volkswagen Beetle 2.0L Petrol": [
          {
                modelName: "EXIDE MILEAGE MLDIN60 (60AH)",
                image: "n.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.7270.<br>Without Old Battery: Rs.9420 <br> Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving",
            },
            {
                modelName: "Amaron FLO DIN66 (60AH) 566112060",
                image: "5.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs:6700..<br>Without Old Battery: Rs.8840 <br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            },
		 {
                modelName: "ELITO BY AMARON ETDIN65(65 AH)",
                image: "EDIN60.png",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs 6020..<br>Without Old Battery: Rs.8140 <br>Warranty: 60 Months(30 Months Free Of Cost + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            }
		 
        ],
	     "Volkswagen Jetta Diesel New": [
           {
                modelName: "Exide-EPIQDIN74L-74 Ah Car Battery",
                image: "61.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.10750.<br>Without Old Battery: Rs.12970<br>Warranty: 77 Months (42 Months full Replacement + 35 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		     {
                modelName: "EXIDE MILEAGE(MLDIN66)(66AH)",
                image: "32.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.7300.<br>Without Old Battery: Rs.9450<brWarranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron Pro Din74 Aam Pr 574102069 (74AH)",
                image: "62.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.9700.<br>Without Old Battery: Rs.11900.<br>Warranty : 72 Months (36 Months Free + 36 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            },
		       {
                modelName: "Amaron FLO DIN65 (565106590)(65AH)",
                image: "33.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.6710.<br>Without Old Battery: Rs.8850.<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            },
		    {
                modelName: "ELITO BY AMARON ETDIN65(65 AH)",
                image: "EDIN60.png",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs 6020..<br>Without Old Battery: Rs.8140 <br>Warranty: 60 Months(30 Months Free Of Cost + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],
	      "Volkswagen Jetta Diesel Old": [
           {
                modelName: "Exide-EPIQDIN74L-74 Ah Car Battery",
                image: "61.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.10750.<br>Without Old Battery: Rs.12970<br>Warranty: 77 Months (42 Months full Replacement + 35 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		     {
                modelName: "EXIDE MILEAGE(MLDIN66)(66AH)",
                image: "32.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.7300.<br>Without Old Battery: Rs.9450<brWarranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron Pro Din74 Aam Pr 574102069 (74AH)",
                image: "62.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.9700.<br>Without Old Battery: Rs.11900.<br>Warranty : 72 Months (36 Months Free + 36 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            },
		       {
                modelName: "Amaron FLO DIN65 (565106590)(65AH)",
                image: "33.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.6710.<br>Without Old Battery: Rs.8850.<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            },
		    {
                modelName: "ELITO BY AMARON ETDIN65(65 AH)",
                image: "EDIN60.png",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs 6020..<br>Without Old Battery: Rs.8140 <br>Warranty: 60 Months(30 Months Free Of Cost + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],
	      "Volkswagen Passat Diesel": [
         {
                modelName: "Exide-EPIQDIN74L-74 Ah Car Battery",
                image: "61.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.10750.<br>Without Old Battery: Rs.12970<br>Warranty: 77 Months (42 Months full Replacement + 35 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		     {
                modelName: "EXIDE MILEAGE(MLDIN66)(66AH)",
                image: "32.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.7300.<br>Without Old Battery: Rs.9450<brWarranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron Pro Din74 Aam Pr 574102069 (74AH)",
                image: "62.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.9700.<br>Without Old Battery: Rs.11900.<br>Warranty : 72 Months (36 Months Free + 36 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            },
		       {
                modelName: "Amaron FLO DIN65 (565106590)(65AH)",
                image: "33.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.6710.<br>Without Old Battery: Rs.8850.<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            },
		    {
                modelName: "ELITO BY AMARON ETDIN65(65 AH)",
                image: "EDIN60.png",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs 6020..<br>Without Old Battery: Rs.8140 <br>Warranty: 60 Months(30 Months Free Of Cost + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],
	      "Volkswagen Passat Petrol": [
       {
                modelName: "Exide-EPIQDIN74L-74 Ah Car Battery",
                image: "61.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.10750.<br>Without Old Battery: Rs.12970<br>Warranty: 77 Months (42 Months full Replacement + 35 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
		     {
                modelName: "EXIDE MILEAGE(MLDIN66)(66AH)",
                image: "32.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.7300.<br>Without Old Battery: Rs.9450<brWarranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron Pro Din74 Aam Pr 574102069 (74AH)",
                image: "62.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.9700.<br>Without Old Battery: Rs.11900.<br>Warranty : 72 Months (36 Months Free + 36 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            },
		       {
                modelName: "Amaron FLO DIN65 (565106590)(65AH)",
                image: "33.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.6710.<br>Without Old Battery: Rs.8850.<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            },
		    {
                modelName: "ELITO BY AMARON ETDIN65(65 AH)",
                image: "EDIN60.png",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs 6020..<br>Without Old Battery: Rs.8140 <br>Warranty: 60 Months(30 Months Free Of Cost + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],
	      "Volkswagen Phaeton 3.6 v6": [
		      
		     {
                modelName: "EXIDE MILEAGE(MLDIN66)(66AH)",
                image: "32.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.7300.<br>Without Old Battery: Rs.9450<brWarranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
              modelName: "EXIDE MILEAGE MLDIN60 (60AH)",
                image: "n.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.7270.<br>Without Old Battery: Rs.9420 <br> Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving",
            },
		        {
                modelName: "Amaron FLO DIN65 (565106590)(65AH)",
                image: "33.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.6710.<br>Without Old Battery: Rs.8850.<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            },
            {
                modelName: "Amaron FLO DIN66 (60AH) 566112060",
                image: "5.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs:6700..<br>Without Old Battery: Rs.8840 <br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],

	      "Volkswagen Ameo Diesel": [
        {
                modelName: "EXIDE MILEAGE MLDIN60 (60AH)",
                image: "n.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.7270.<br>Without Old Battery: Rs.9420 <br> Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving",
            },
            {
                modelName: "Amaron FLO DIN66 (60AH) 566112060",
                image: "5.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs:6700..<br>Without Old Battery: Rs.8840 <br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            },
		 {
                modelName: "ELITO BY AMARON ETDIN65(65 AH)",
                image: "EDIN60.png",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs 6020..<br>Without Old Battery: Rs.8140 <br>Warranty: 60 Months(30 Months Free Of Cost + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            }
		 
        ],

	     "Volkswagen Ameo Petrol": [
            {
                modelName: "EXIDE MILEAGE MLDIN44LH(45AH)",
                image: "6.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs:5650.<br>Without Old Battery: Rs:7270 <br> Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron FLO DIN45 (545106036)45AH",
                image: "5.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs:5170..<br>Without Old Battery: Rs:6780 <br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            },
		  {
                modelName: "ELITO BY AMARON ETDIN45(45 AH)",
                image: "EDIN60.png",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs 4640..<br>Without Old Battery: Rs.6230 <br>Warranty: 60 Months(30 Months Free Of Cost + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],
	      "Volkswagen Polo 1.2 Diesel": [
        {
                modelName: "EXIDE MILEAGE MLDIN60 (60AH)",
                image: "n.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.7270.<br>Without Old Battery: Rs.9420 <br> Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving",
            },
            {
                modelName: "Amaron FLO DIN66 (60AH) 566112060",
                image: "5.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs:6700..<br>Without Old Battery: Rs.8840 <br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            },
		 {
                modelName: "ELITO BY AMARON ETDIN65(65 AH)",
                image: "EDIN60.png",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs 6020..<br>Without Old Battery: Rs.8140 <br>Warranty: 60 Months(30 Months Free Of Cost + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            }
		 
        ],
	      "Volkswagen Polo 1.2 Petrol": [
            {
                modelName: "EXIDE MILEAGE MLDIN44LH(45AH)",
                image: "6.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs:5650.<br>Without Old Battery: Rs:7270 <br> Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron FLO DIN45 (545106036)45AH",
                image: "5.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs:5170..<br>Without Old Battery: Rs:6780 <br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            },
		  {
                modelName: "ELITO BY AMARON ETDIN45(45 AH)",
                image: "EDIN60.png",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs 4640..<br>Without Old Battery: Rs.6230 <br>Warranty: 60 Months(30 Months Free Of Cost + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],
	     "Volkswagen Polo 1.6 Petrol": [
         {
                modelName: "EXIDE MILEAGE MLDIN44LH(45AH)",
                image: "6.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs:5650.<br>Without Old Battery: Rs:7270 <br> Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron FLO DIN45 (545106036)45AH",
                image: "5.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs:5170..<br>Without Old Battery: Rs:6780 <br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            },
		  {
                modelName: "ELITO BY AMARON ETDIN45(45 AH)",
                image: "EDIN60.png",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs 4640..<br>Without Old Battery: Rs.6230 <br>Warranty: 60 Months(30 Months Free Of Cost + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],
	      "Volkswagen Vento 1.6 Diesel": [
           {
                modelName: "EXIDE MILEAGE MLDIN60 (60AH)",
                image: "n.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.7270.<br>Without Old Battery: Rs.9420 <br> Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving",
            },
            {
                modelName: "Amaron FLO DIN66 (60AH) 566112060",
                image: "5.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs:6700..<br>Without Old Battery: Rs.8840 <br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            },
		 {
                modelName: "ELITO BY AMARON ETDIN65(65 AH)",
                image: "EDIN60.png",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs 6020..<br>Without Old Battery: Rs.8140 <br>Warranty: 60 Months(30 Months Free Of Cost + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            }
		 
        ],
	      "Volkswagen Vento 1.6 Petrol": [
          {
                modelName: "EXIDE MILEAGE MLDIN44LH(45AH)",
                image: "6.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs:5650.<br>Without Old Battery: Rs:7270 <br> Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
                modelName: "Amaron FLO DIN45 (545106036)45AH",
                image: "5.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs:5170..<br>Without Old Battery: Rs:6780 <br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            },
		  {
                modelName: "ELITO BY AMARON ETDIN45(45 AH)",
                image: "EDIN60.png",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs 4640..<br>Without Old Battery: Rs.6230 <br>Warranty: 60 Months(30 Months Free Of Cost + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],
	      "Volkswagen Vento Old": [
         {
                modelName: "EXIDE MILEAGE MLDIN60 (60AH)",
                image: "n.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.7270.<br>Without Old Battery: Rs.9420 <br> Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving",
            },
            {
                modelName: "Amaron FLO DIN66 (60AH) 566112060",
                image: "5.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs:6700..<br>Without Old Battery: Rs.8840 <br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            },
		 {
                modelName: "ELITO BY AMARON ETDIN65(65 AH)",
                image: "EDIN60.png",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs 6020..<br>Without Old Battery: Rs.8140 <br>Warranty: 60 Months(30 Months Free Of Cost + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            }
		 
        ],
	      "Volkswagen Passat Hybrid": [
		      
		     {
                modelName: "EXIDE MILEAGE(MLDIN66)(66AH)",
                image: "32.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.7300.<br>Without Old Battery: Rs.9450<brWarranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving.",
            },
            {
             modelName: "EXIDE MILEAGE MLDIN60 (60AH)",
                image: "n.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.7270.<br>Without Old Battery: Rs.9420 <br> Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving",
            },
		       {
                modelName: "Amaron FLO DIN65 (565106590)(65AH)",
                image: "33.jfif",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours..",
                price: "With Old Battery exchange(Same Ah): Rs.6710.<br>Without Old Battery: Rs.8850.<br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures.",
                recommended: "Ideal for city driving and daily commutes.",
            },
            {
                modelName: "Amaron FLO DIN66 (60AH) 566112060",
                image: "5.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs:6700..<br>Without Old Battery: Rs.8840 <br>Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            },
		       {
                modelName: "ELITO BY AMARON ETDIN65(65 AH)",
                image: "EDIN60.png",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
                price: "With Old Battery exchange(Same Ah): Rs 6020..<br>Without Old Battery: Rs.8140 <br>Warranty: 60 Months(30 Months Free Of Cost + 30 Months Pro Rata)",
                features: "High performance with fast recharge.\nResistant to extreme temperatures",
                recommended: "Ideal for city driving and daily commutes.",
            }
        ],
	      "Volkswagen Vento 1.2 Diesel": [
            {
              modelName: "EXIDE MILEAGE MLDIN60 (60AH)",
                image: "n.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery And installation in 1-2 hours.",
                price: "With Old Battery exchange(Same Ah): Rs.7270.<br>Without Old Battery: Rs.9420 <br> Warranty: 60 Months (30 Months Full Replacement + 30 Months Pro Rata)",
                features: "Reliable and durable.\nOffers high performance under various conditions.\nDesigned for longevity and efficiency.",
                recommended: "Best suited for urban and highway driving",
            },
            {
                modelName: "Amaron FLO DIN66 (60AH) 566112060",
                image: "5.jpg",
                description: "Car battery replacement in Bangalore. Express Delivery. And installation in 1-2 hours",
