// Object storing video URLs and corresponding descriptions for each car brand
const videoData = { 
  // Videos are in MP4 format, descriptions are in HTML format
  // Ferrari videos and descriptions
  ferrari: { 
    videos: [ /* Array of Ferrari video URLs */ 
      "https://v1.pinimg.com/videos/iht/expMp4/79/5b/8f/795b8fee47741d8b2c36528f2554bdaa_720w.mp4",
      "https://v1.pinimg.com/videos/iht/720p/16/7d/71/167d719a9361a21fa7dd5f96962f2773.mp4",
      "https://v1.pinimg.com/videos/iht/expMp4/2e/e5/ee/2ee5eec64661048e7ae56efb8a19561e_t4.mp4",
      "https://v1.pinimg.com/videos/iht/expMp4/d7/92/d9/d792d9b4bc7793407d2147c4cdad1431_t4.mp4"
    ],
    descriptions: [ /* Array of Ferrari car descriptions (HTML format) */ 
      `A modern grand tourer honoring Ferrari’s V12 legacy with a 6.5L naturally aspirated engine delivering 819 hp.<br><br>
      Accelerates from 0–100 km/h in just 2.9 seconds, reaching speeds over 340 km/h.<br><br>
      Retro-inspired design meets cutting-edge aerodynamics in both coupe and spider variants.`,

      `Ferrari’s first plug-in hybrid supercar, the SF90 combines a twin-turbo V8 with electric motors for 986 hp.<br><br>
      It sprints to 100 km/h in 2.5 seconds and features all-wheel drive and F1-derived tech.<br><br>
      A sleek, futuristic machine offered in both coupe and spider forms.`,

      `A beautifully styled grand tourer powered by a 612 hp 3.9L twin-turbo V8.<br><br>
      The Roma reaches 0–100 km/h in 3.4 seconds and blends performance with daily drivability.<br><br>
      Its minimalist cabin and flowing curves embody refined Italian design.`,

      `The Purosangue is Ferrari’s first luxury SUV, equipped with a 715 hp V12 and all-wheel drive.<br><br>
      It offers four seats, a 0–100 km/h time of 3.3 seconds, and high versatility.<br><br>
      Combining Ferrari performance with practical utility, it redefines the SUV category.`
    ]
  },
  
  // Ford videos and descriptions
  // Videos are in MP4 format, descriptions are in HTML format
  ford: { 
    videos: [ /* Array of Ford video URLs */
      "https://v1.pinimg.com/videos/iht/expMp4/75/f7/ef/75f7eff38221af17e4a4c883571ef668_720w.mp4",
      "https://v1.pinimg.com/videos/iht/720p/95/ad/f7/95adf7abd0e363fe46c43f43cebb0866.mp4",
      "https://v1.pinimg.com/videos/iht/720p/c2/09/fa/c209fad3a6d4017fccada2a4a61e132d.mp4",
      "https://v1.pinimg.com/videos/mc/720p/1d/9f/28/1d9f28e69e2449e38538f2fa205afdb7.mp4"
    ],
    descriptions: [ /* Array of Ford car descriptions (HTML format) */
      `A modern American muscle icon powered by a 5.0L Ti-VCT V8 producing 480 hp.<br><br>
      It hits 0–100 km/h in 4.3 seconds with a top speed around 250 km/h.<br><br>
      Features include bold styling, tri-bar lighting, and dual exhaust in fastback or convertible form.`,

      `The F-150 Raptor is Ford’s ultimate off-road truck with a 450 hp twin-turbo V6 EcoBoost engine.<br><br>
      Designed for tough terrain, it includes FOX Racing Shox, Trail Control, and a wide stance.<br><br>
      Built for performance and durability, with Raptor R offering a supercharged V8 option.`,

      `Inspired by GT3 racing, the Mustang GTD is a street-legal track machine targeting over 800 hp.<br><br>
      Its supercharged 5.2L V8 launches it from 0–100 km/h in under 3 seconds.<br><br>
      Carbon-fiber bodywork, active aero, and Nürburgring-tuned dynamics set it apart.`,

      `The Bronco Raptor is built for desert racing, powered by a 418 hp twin-turbo 3.0L V6.<br><br>
      With FOX Live Valve shocks and 37-inch tires, it conquers extreme off-road terrain.<br><br>
      A reinforced frame and bold Raptor styling define this 4-door-only adventure SUV.`
    ]
  },

  // Land Rover videos and descriptions
  // Videos are in MP4 format, descriptions are in HTML format
  landrover: {
    videos: [ /* Array of Land Rover video URLs */
      "https://v1.pinimg.com/videos/iht/720p/0c/80/f4/0c80f4717cc391968336f8af20fac1e6.mp4",
      "https://v1.pinimg.com/videos/mc/720p/a5/c5/8a/a5c58ad5b9431dacef30870dff6b2e31.mp4",
      "https://v1.pinimg.com/videos/mc/720p/04/8a/91/048a91567291eade03f57e0a42ac04b4.mp4",
      "https://v1.pinimg.com/videos/mc/720p/9e/c8/6f/9ec86f27e8fe7bb2ad5a7e0d38953317.mp4"
    ],
    descriptions: [ /* Array of Land Rover car descriptions (HTML format) */
      `The 2025 Range Rover leads the luxury SUV class with sleek styling and high-end innovation.<br><br>
      It offers twin-turbo V8 or plug-in hybrid powertrains with adaptive suspension and AWD.<br><br>
      Inside, a lavish tech-filled cabin meets minimalist elegance in SE, Autobiography, SV, and upcoming EV trims.`,

      `The 2025 Defender fuses rugged performance with modern refinement in a bold, boxy design.<br><br>
      Engine options include a turbo inline-6 and plug-in hybrid, paired with Terrain Response® tech.<br><br>
      Available in 90, 110, and 130 variants, it’s built for adventure with advanced off-road capability.`,

      `The Range Rover Velar showcases refined luxury with a coupe-like silhouette and hidden handles.<br><br>
      Power comes from a 2.0L turbo or hybrid setup, offering smooth AWD performance with air suspension.<br><br>
      Inside, a curved 11.4-inch screen, air purification, and minimalist styling elevate comfort.`,

      `Sporty yet refined, the 2025 Range Rover Sport features dynamic handling and luxury finishes.<br><br>
      Available with mild-hybrid inline-6 or V8 power, it’s engineered for agility and power.<br><br>
      Its sleek exterior and high-tech interior include Meridian™ audio and adaptive suspension.`
    ]
  },

  // Maserati videos and descriptions
  // Videos are in MP4 format, descriptions are in HTML format
  maserati: {
    videos: [ /* Array of Maserati video URLs */
      "https://v1.pinimg.com/videos/iht/expMp4/62/93/7f/62937ff41717c9d1211312cbd155b0cb_720w.mp4",
      "https://v1.pinimg.com/videos/iht/720p/a5/b5/28/a5b5284f0475db666666072f0ccba233.mp4",
      "https://v1.pinimg.com/videos/iht/720p/06/86/bc/0686bced51fd44c3ca7b6c803a721b8c.mp4",
      "https://v1.pinimg.com/videos/mc/720p/96/ef/08/96ef089a7f29eacbdfef6669d6616123.mp4"
    ],
    descriptions: [ /* Array of Maserati car descriptions (HTML format) */
      `The GranTurismo Folgore is Maserati’s first all-electric grand tourer, fusing tradition with innovation.<br><br>
      It delivers 761 hp from three motors, accelerating to 100 km/h in just 2.7 seconds.<br><br>
      Classic GranTurismo curves meet 800V architecture for rapid charging and extended range.`,

      `The Levante Trofeo is a bold luxury SUV powered by a 3.8L twin-turbo V8 producing 580 hp.<br><br>
      With launch control, Corsa mode, and a 0–100 km/h time of 4.1 seconds, it’s built for performance.<br><br>
      Carbon accents, adaptive air suspension, and fine leather define its premium interior.`,

      `The Grecale GT delivers urban sophistication with a sleek design and 300 hp mild-hybrid engine.<br><br>
      It reaches 0–100 km/h in 5.6 seconds, supported by AWD and an 8-speed automatic transmission.<br><br>
      A stylish cabin, inspired by jewelry and Italian aesthetics, elevates the daily drive.`,

      `The MC20 Folgore is Maserati’s upcoming electric supercar, pushing past 830 hp with tri-motor power.<br><br>
      Expected to sprint from 0–100 km/h in under 2.5 seconds, it’s engineered for electrified speed.<br><br>
      With lightweight design and Folgore styling, it redefines Maserati’s high-performance vision.`
    ]
  },

  // Lincoln videos and descriptions
  // Videos are in MP4 format, descriptions are in HTML format
  lincoln: {
    videos: [ /* Array of Lincoln video URLs */
      "https://v1.pinimg.com/videos/mc/720p/93/5f/ca/935fca36be2774112f41adee2340840e.mp4",
      "https://v1.pinimg.com/videos/iht/720p/be/c1/cc/bec1cc00dcd8f7a985c9b6e914ccb86d.mp4",
      "https://v1.pinimg.com/videos/iht/720p/07/e0/1c/07e01c8e3735256d9d2109087e891d41.mp4",
      "https://v1.pinimg.com/videos/iht/expMp4/42/89/db/4289db0be832a65593bce984af7395f4_720w.mp4"
    ],
    descriptions: [ /* Array of Lincoln car descriptions (HTML format) */
      `The 2025 Lincoln Navigator is a bold full-size SUV blending power and refinement.<br><br>
      It delivers 440 hp from a twin-turbo V6, 4WD capability, and up to 8,700 lbs of towing.<br><br>
      Inside, a 48-inch screen, BlueCruise hands-free driving, and luxurious finishes define the experience.`,

      `The Lincoln Nautilus is a midsize SUV offering advanced technology and comfort.<br><br>
      It comes with a 250 hp turbo I4 or a 310 hp hybrid, both paired with AWD and a quiet, smooth ride.<br><br>
      Highlights include a panoramic display, massaging seats, and a clean, modern interior.`,

      `The 2025 Lincoln Zephyr combines sleek design with versatile powertrain options up to 400 hp.<br><br>
      With smooth performance and AWD availability, it offers a premium drive in sedan form.<br><br>
      Luxurious materials, digital displays, and cutting-edge safety complete the upscale experience.`,

      `Marking Lincoln’s return to sedans, the 2025 Continental offers elegance and substance.<br><br>
      A 355 hp turbo V6 delivers robust acceleration and smooth cruising.<br><br>
      A spacious, tech-rich cabin features a panoramic roof, 13.4-inch display, and premium detailing.`
    ]
  },

  // Jaguar videos and descriptions
  // Videos are in MP4 format, descriptions are in HTML format
  jaguar: {
    videos: [ /* Array of Jaguar video URLs */
      "https://v1.pinimg.com/videos/mc/720p/54/37/a2/5437a21b1c994884099df53bed9d30c7.mp4",
      "https://v1.pinimg.com/videos/mc/720p/4d/c6/18/4dc61877e2bf84a2f62619e907acb111.mp4",
      "https://v1.pinimg.com/videos/mc/720p/d1/d2/2f/d1d22fc362a6a91c9dffea2c3c97dfda.mp4",
      "https://v1.pinimg.com/videos/mc/720p/e9/42/f2/e942f29c1a961f507946541e753f8d85.mp4"
    ],
    descriptions: [ /* Array of Jaguar car descriptions (HTML format) */
      `The Jaguar F-PACE is a luxury performance SUV that balances power with practicality.<br><br>
      Its 395 hp mild-hybrid inline-6 enables a 0–100 km/h time of 5.1 seconds and AWD precision.<br><br>
      Distinctive styling, premium materials, and smart tech define its refined driving experience.`,

      `The 2025 Jaguar F-Type R is a bold sports coupe with raw V8 performance.<br><br>
      A 575 hp supercharged engine rockets it from 0–100 km/h in just 3.7 seconds.<br><br>
      Its sleek design, quad exhausts, and digital cockpit create a thrilling, luxurious ride.`,

      `The Jaguar E-PACE 300 Sport is a compact SUV with sporty design and daily usability.<br><br>
      With 300 hp and AWD, it offers responsive handling and a 0–100 km/h time of 6.9 seconds.<br><br>
      Inside, you'll find a panoramic roof, curved touchscreen, and safety-focused features.`,

      `The 2025 Jaguar XF combines timeless sedan styling with modern performance.<br><br>
      Its 380 hp turbo V6 propels it to 100 km/h in 5.5 seconds while maintaining quiet refinement.<br><br>
      A spacious, tech-forward interior offers ambient lighting and driver assistance features.`
    ]
  }
};

// Object to keep track of the current video index for each brand
const currentIndex = { 
  ferrari: 0, 
  ford: 0,
  landrover: 0,
  maserati: 0,
  lincoln: 0,
  jaguar: 0
};

// Function to update the video and description based on the current index
function updateContent(brand) {
  const index = currentIndex[brand]; 
  const video = document.getElementById(`${brand}-video`);
  const desc = document.getElementById(`${brand}-description`);
 
  // Update the video source and description
  // The video source is set to the current index of the brand
  video.src = videoData[brand].videos[index];
  desc.innerHTML = videoData[brand].descriptions[index];
  video.play();
}

// Function to handle the next video button click
function nextVideo(brand) {
  currentIndex[brand] = (currentIndex[brand] + 1) % videoData[brand].videos.length;
  updateContent(brand);
}

// Function to handle the previous video button click
function prevVideo(brand) {
  currentIndex[brand] = (currentIndex[brand] - 1 + videoData[brand].videos.length) % videoData[brand].videos.length;
  updateContent(brand);
}

// Event listeners for the next and previous buttons
const brandSections = document.querySelectorAll('.brand-box');

const observerOptions = {
  root: null, // Viewport
  threshold: 0.6, // 60% visible to be considered "in view"
};

// IntersectionObserver to handle video play/pause based on visibility
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const video = entry.target.querySelector('video');

    // Play the video if the section is in view, otherwise pause it
    if (entry.isIntersecting) {
      video.play();
    } else {
      video.pause();
    }
  });
}, observerOptions);

// Observe each brand section for visibility changes
brandSections.forEach(section => observer.observe(section));
