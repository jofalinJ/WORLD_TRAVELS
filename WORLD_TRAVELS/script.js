const worlds = {
  pandora: {
    name: "Pandora",
    universe: "Avatar",
    code: "PDR-01",
    access: "ECO-PASS",
    atmosphere: "BIOLUMINESCENT",
    accent: "#69f2ff",
    tagline: "Where the mountains float and the forest remembers.",
    description: "A neon-blue wilderness of floating stone, sacred roots and living light. Plan your fictional expedition through signature Avatar locations rather than generic travel scenery.",
    cardImage: "https://lumiere-a.akamaihd.net/v1/images/12_majestic_floating_mountains-1300x730_c670392d.jpeg?region=0%2C0%2C1300%2C730",
    quote: "The world is alive — and every path feels like it is watching you back.",
    facts: [
      ["World currency", "Unobtanium credits"],
      ["Best mood", "Bioluminescent night"],
      ["Travel style", "Ikran expedition"],
      ["Signal", "Eywa-linked"],
    ],
    scenes: [
      { name: "Floating Mountains", label: "Hallelujah Mountains", image: "https://lumiere-a.akamaihd.net/v1/images/12_majestic_floating_mountains-1300x730_c670392d.jpeg?region=0%2C0%2C1300%2C730", text: "Drift between the iconic Hallelujah Mountains with cloud trails, magnetic cliffs and a horizon that refuses to stay grounded.", mood: "FLOATING • EPIC" },
      { name: "Mo'ara Valley", label: "Valley of Mo'ara", image: "https://lumiere-a.akamaihd.net/v1/images/a_avatarpandorapedia_moaravalley_16x9_f0597e6d.jpeg?region=0%2C0%2C1920%2C1080", text: "Explore the valley's colossal stone forms and tangled roots — a signature Pandora environment made for slow cinematic discovery.", mood: "WILD • VERDANT" },
      { name: "Tree of Souls", label: "Vitraya Ramunong", image: "https://lumiere-a.akamaihd.net/v1/images/a_avatarpandorapedia_treeofsouls_16x9_1098_09_fd4e3db9.jpeg?region=0%2C0%2C1920%2C1080", text: "Enter the sacred Omatikaya site known for its luminous tendrils and spiritual connection to Eywa.", mood: "SACRED • LUMINOUS" },
      { name: "Bioluminescent Rainforest", label: "Pandoran Rainforest", image: "https://lumiere-a.akamaihd.net/v1/images/26_pandoran_rainforest-1300x730_48137e21.jpeg?region=0%2C0%2C1300%2C730", text: "Move through dense Pandoran growth where strange flora glows against a deep nocturnal canopy.", mood: "NIGHT • ALIVE" },
    ],
    currency: "U",
    base: 1800,
    fee: 320,
  },
  hogwarts: {
    name: "Hogwarts",
    universe: "Harry Potter",
    code: "HOG-07",
    access: "MAGIC PASS",
    atmosphere: "ENCHANTED",
    accent: "#d8bcff",
    tagline: "A castle of staircases, spells and impossible doors.",
    description: "Cross into the wizarding world and build a grand-school journey through recognizable Hogwarts locations, magical streets and forbidden grounds.",
    cardImage: "https://contentful.harrypotter.com/usf1vwtuqyxm/5aXQB99zTum9IqXwFjNqrF/e3f4cfce28b6c8baead6f7fc3e1baaa7/the-great-hall_1_1800x1248.png",
    quote: "Some journeys start with a train. The unforgettable ones end somewhere impossible.",
    facts: [["World currency", "Galleons"], ["Best mood", "Winter castle",], ["Travel style", "Magical rail",], ["Signal", "Owl-post",]],
    scenes: [
      { name: "Great Hall", label: "Hogwarts Great Hall", image: "https://contentful.harrypotter.com/usf1vwtuqyxm/5aXQB99zTum9IqXwFjNqrF/e3f4cfce28b6c8baead6f7fc3e1baaa7/the-great-hall_1_1800x1248.png", text: "Feast beneath floating candles and an enchanted ceiling in the ceremonial heart of Hogwarts.", mood: "ROYAL • WARM" },
      { name: "Diagon Alley", label: "Wizarding Shopping District", image: "https://contentful.harrypotter.com/usf1vwtuqyxm/uSW2knITCtjID1LCSnCEu/4710780cdf660296adfc72e2107c023b/diagon-alley_1_1800x1248.png?fit=pad&fm=jpg&h=416&q=75&w=600", text: "Walk through the crowded cobbled shopping street of the wizarding world, surrounded by recognizable storefronts and magical details.", mood: "MAGICAL • BUSY" },
      { name: "Forbidden Forest", label: "Hogwarts Grounds", image: "https://contentful.harrypotter.com/usf1vwtuqyxm/B3WGSvAQA9V77Nylvzj6h/281ea450da1525fff92c81c6118254e3/the-forbidden-forest_1_1800x1248.png?fit=pad&fm=jpg&h=416&q=75&w=600", text: "A dark woodland boundary filled with magical creatures, mystery and the atmosphere of the Hogwarts grounds.", mood: "DARK • MYSTERIOUS" },
    ],
    currency: "G",
    base: 1500,
    fee: 260,
  },
  narnia: {
    name: "Narnia",
    universe: "The Chronicles of Narnia",
    code: "NAR-03",
    access: "WARDROBE PASS",
    atmosphere: "WINTER-MYTH",
    accent: "#b9d6ff",
    tagline: "Step through a wardrobe and arrive in another age.",
    description: "A winter-to-spring fantasy journey built around recognizable Narnia environments, ancient stone and the mythic landscape of Aslan's realm.",
    cardImage: "https://image.tmdb.org/t/p/original/9iRRfMZbnpgHDdKi2lczGGYZXDo.jpg",
    quote: "A door can be ordinary on one side — and a legend on the other.",
    facts: [["World currency", "Crown marks"], ["Best mood", "Snowfall dawn"], ["Travel style", "Horseback",], ["Signal", "Lantern flame",]],
    scenes: [
      { name: "Cair Paravel", label: "Royal Castle", image: "https://image.tmdb.org/t/p/original/pqECkkF9Eiv5GC5dmvM5VMgH66U.jpg", text: "Imagine the royal seat of Narnia rising over the sea — ceremonial, coastal and built for a storybook arrival.", mood: "ROYAL • COASTAL" },
      { name: "Lantern Waste", label: "Snowy Forest", image: "https://image.tmdb.org/t/p/original/9iRRfMZbnpgHDdKi2lczGGYZXDo.jpg", text: "A hushed snow path around the famous lamppost, where Narnia first reveals its impossible geography.", mood: "WINTER • MYSTIC" },
      { name: "Stone Table", label: "Ancient Sacred Site", image: "https://image.tmdb.org/t/p/original/AuV99eQivVWuk2AOSM6hYh9QRPQ.jpg", text: "An ancient stone setting tied to the mythic heart of Narnia and one of its most memorable sacred moments.", mood: "ANCIENT • SACRED" },
    ],
    currency: "C",
    base: 1320,
    fee: 230,
  },
  wakanda: {
    name: "Wakanda",
    universe: "Black Panther",
    code: "WAK-18",
    access: "VIBRANIUM PASS",
    atmosphere: "AFRO-FUTURE",
    accent: "#5fd8ff",
    tagline: "Where ancient cliffs meet a city years ahead of tomorrow.",
    description: "Shift between Warrior Falls, the Golden City and Wakanda's dramatic highlands — a fictional nation shaped by advanced technology and deep tradition.",
    cardImage: "https://quod.lib.umich.edu/f/fc/images/13761232.0043.202-00000003.jpg",
    quote: "The future is not one color, one material or one era. It can be all of them at once.",
    facts: [["World currency", "Vibranium units"], ["Best mood", "Blue hour",], ["Travel style", "Royal convoy",], ["Signal", "Kimoyo bead",]],
    scenes: [
      { name: "Warrior Falls", label: "Challenge Pool", image: "https://d26oc3sg82pgk3.cloudfront.net/files/media/edit/image/30101/article_aligned%403x.jpg", text: "Enter the amphitheatre-like waterfalls and rock terraces where the kings' challenge is staged.", mood: "RITUAL • WATER" },
      { name: "Golden City", label: "Wakanda Capital", image: "https://quod.lib.umich.edu/f/fc/images/13761232.0043.202-00000003.jpg", text: "See the signature high-rise Wakandan skyline — towering spires, layered terraces and a futuristic city fused with African visual language.", mood: "URBAN • AFRO-FUTURE" },
      { name: "Wakandan Highlands", label: "Mountain Country", image: "https://image.tmdb.org/t/p/original/AlFqBwJnokrp9zWTXOUv7uhkaeq.jpg", text: "A highland overlook with dramatic rock, advanced aircraft and the glittering city far below.", mood: "HIGH • CINEMATIC" },
    ],
    currency: "V",
    base: 2100,
    fee: 390,
  },
  arrakis: {
    name: "Arrakis",
    universe: "Dune",
    code: "ARR-21",
    access: "SPICE PERMIT",
    atmosphere: "DESERT-BOUND",
    accent: "#f2c77a",
    tagline: "Beneath the heat lies a world that moves beneath your feet.",
    description: "A severe desert expedition through Arrakeen, the Deep Desert and underground sietch environments, styled after Denis Villeneuve's Dune visual language.",
    cardImage: "https://image.tmdb.org/t/p/original/60Sg4EJPXZWFQ5Rugc0tcbZnLyy.jpg",
    quote: "On Arrakis, distance is not measured in roads. It is measured in water, shade and survival.",
    facts: [["World currency", "Spice units"], ["Best mood", "Dust storm",], ["Travel style", "Ornithopter",], ["Signal", "Fremen beacon",]],
    scenes: [
      { name: "Arrakeen", label: "Atreides City", image: "https://image.tmdb.org/t/p/original/rbu5eIjOi5w5yxMQUhqbxxLzoDH.jpg", text: "A fortified desert seat framed by monumental architecture and the hard light of Arrakis.", mood: "FORTIFIED • HOT" },
      { name: "Deep Desert", label: "Open Arrakis", image: "https://media.distractify.com/brand-img/LpcKo9C2B/1024x536/dune-spice-melange-terms-to-know-1635003349827.jpeg", text: "Walk out into the open sand where scale, silence and the threat of the deep desert define every movement.", mood: "SAND • EXTREME" },
      { name: "Sietch Environments", label: "Fremen Chambers", image: "https://cdn.prod.website-files.com/68cfcd2b4dad878ff1d41d6d/68d24d95277485ad30632895_image.png", text: "Descend into the patterned interiors of a sietch — sheltered, communal and built around the precious resource of water.", mood: "UNDERGROUND • FR​EMEN" },
    ],
    currency: "S",
    base: 1950,
    fee: 450,
  },
  middleearth: {
    name: "Middle-earth",
    universe: "The Lord of the Rings",
    code: "MDE-02",
    access: "FELLOWSHIP PASS",
    atmosphere: "MYTHIC-ELVEN",
    accent: "#b7ffb6",
    tagline: "Walk where the hills remember old songs.",
    description: "A sweeping fantasy itinerary through Hobbiton, Rivendell and Minas Tirith, with a living-passport system that records every realm you visit.",
    cardImage: "https://s0.tchkcdn.com/g-7SxqbOjVIE49pvUMWTyrdg/17/189838/660x480/f/0/kinopoisk.ru_lord_of_the_rings_3a_the_fellowship_of_the_ring_2c_the_1530803.jpg",
    quote: "Not all those who wander are lost — some are simply taking the scenic route.",
    facts: [["World currency", "Silver pennies"], ["Best mood", "Golden hour"], ["Travel style", "Fellowship trek",], ["Signal", "Evenstar light",]],
    scenes: [
      { name: "Hobbiton", label: "The Shire", image: "https://s0.tchkcdn.com/g-7SxqbOjVIE49pvUMWTyrdg/17/189838/660x480/f/0/kinopoisk.ru_lord_of_the_rings_3a_the_fellowship_of_the_ring_2c_the_1530803.jpg", text: "Follow the winding paths of Hobbiton past grass-roofed homes and the unmistakable round doors of the Shire.", mood: "GREEN • HOMELY" },
      { name: "Rivendell", label: "Elven Refuge", image: "https://images2.minutemediacdn.com/image/upload/c_fill%2Cw_1200%2Car_4%3A3%2Cf_auto%2Cq_auto%2Cg_auto/images/ImageExchange/mmsport/385/01kfp3zhhvge4rbkef4z.jpg", text: "Pause among carved balconies, waterfalls and silver-green architecture in the refuge of the Elves.", mood: "ELVEN • SERENE" },
      { name: "Minas Tirith", label: "White City", image: "https://image.tmdb.org/t/p/original/3OgMNsCBieSOjo5aNGhJJRbPRT2.jpg", text: "Approach the towering white city beneath the mountains and imagine the final great road of a Fellowship expedition.", mood: "WHITE • EPIC" },
    ],
    currency: "M",
    base: 1760,
    fee: 310,
  },
};

const state = { worldKey: 'pandora', sceneIndex: 0 };
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => [...document.querySelectorAll(sel)];

function setTheme(world) {
  document.documentElement.style.setProperty('--accent', world.accent);
  document.documentElement.style.setProperty('--accent-2', world.accent);
}

function renderWorldCards() {
  const grid = $('#worldGrid');
  grid.innerHTML = Object.entries(worlds).map(([key, world], index) => `
    <article class="world-card ${key === state.worldKey ? 'active' : ''}" data-world="${key}" style="--card-index:${index}">
      <img src="${world.cardImage}" alt="${world.name} cinematic scenery" loading="lazy" />
      <div class="world-card-content">
        <small>${String(index + 1).padStart(2, '0')} / ${world.universe.toUpperCase()}</small>
        <h3>${world.name}</h3>
        <span>${world.atmosphere}</span>
      </div>
    </article>`).join('');
  $$('.world-card').forEach(card => card.addEventListener('click', () => selectWorld(card.dataset.world)));
}

function selectWorld(key) {
  state.worldKey = key;
  state.sceneIndex = 0;
  const world = worlds[key];
  setTheme(world);
  renderWorldCards();
  renderWorldHero();
  renderScenes();
  renderPassport();
  updatePricing();
  document.body.animate([{ opacity: .85 }, { opacity: 1 }], { duration: 260, easing: 'ease-out' });
  const seen = JSON.parse(localStorage.getItem('worldTravelsVisited') || '[]');
  if (!seen.includes(key)) {
    seen.push(key);
    localStorage.setItem('worldTravelsVisited', JSON.stringify(seen));
  }
}

function renderWorldHero() {
  const world = worlds[state.worldKey];
  $('#liveWorld').textContent = world.name.toUpperCase();
  $('#heroUniverse').textContent = world.universe.toUpperCase();
  $('#heroTitle').textContent = world.name.toUpperCase();
  $('#heroTagline').textContent = world.tagline;
  $('#heroDescription').textContent = world.description;
  $('#worldCode').textContent = world.code;
  $('#accessLevel').textContent = world.access;
  $('#atmosphere').textContent = world.atmosphere;
  const img = $('#heroImage');
  img.style.opacity = '0';
  const next = new Image();
  next.onload = () => { img.src = next.src; img.style.opacity = '1'; };
  next.src = world.scenes[0].image;
  $('#factBadge').textContent = world.name.toUpperCase();
  $('#factMood').textContent = world.scenes[state.sceneIndex].mood;
  $('#factTitle').textContent = world.scenes[state.sceneIndex].label;
  $('#factText').textContent = world.scenes[state.sceneIndex].text;
  $('#worldQuote').textContent = world.quote;
  $('#factList').innerHTML = world.facts.map(([a, b]) => `<div class="fact-row"><span>${a}</span><span>${b}</span></div>`).join('');
}

function renderScenes() {
  const world = worlds[state.worldKey];
  const current = world.scenes[state.sceneIndex];
  $('#sceneHeading').textContent = `${world.name} Field Notes`;
  $('#sceneSubheading').textContent = `Recognizable ${world.universe} scenery changes live with the active selection.`;
  $('#sceneNumber').textContent = `SCENE ${String(state.sceneIndex + 1).padStart(2, '0')}`;
  $('#sceneName').textContent = current.name;
  $('#factMood').textContent = current.mood;
  $('#factTitle').textContent = current.label;
  $('#factText').textContent = current.text;
  $('#ticketWorld').textContent = world.name.toUpperCase();
  $('#ticketScene').textContent = current.name.toUpperCase();
  const sceneImg = $('#sceneImage');
  sceneImg.style.opacity = '0';
  sceneImg.style.transform = 'scale(1.06)';
  const next = new Image();
  next.onload = () => { sceneImg.src = next.src; requestAnimationFrame(() => { sceneImg.style.opacity = '1'; sceneImg.style.transform = 'scale(1.02)'; }); };
  next.src = current.image;
  $('#sceneControls').innerHTML = world.scenes.map((scene, i) => `
    <button class="scene-btn ${i === state.sceneIndex ? 'active' : ''}" data-index="${i}" type="button">
      <small>0${i + 1}</small><strong>${scene.name}</strong>
    </button>`).join('');
  $$('.scene-btn').forEach(btn => btn.addEventListener('click', () => { state.sceneIndex = Number(btn.dataset.index); renderScenes(); renderWorldHero(); }));
}

function makeTicker() {
  const items = Object.values(worlds).map(w => `<span>✦ ${w.name}</span><b>${w.universe}</b>`).join('<span>•</span>');
  $('#tickerTrack').innerHTML = `<div class="ticker-group">${items}</div><div class="ticker-group">${items}</div>`;
}

function addParticles() {
  const container = $('#particles');
  for (let i = 0; i < 42; i++) {
    const p = document.createElement('span');
    p.className = 'particle';
    p.style.left = `${Math.random() * 100}%`;
    p.style.top = `${100 + Math.random() * 20}%`;
    p.style.animationDelay = `${Math.random() * -10}s`;
    p.style.animationDuration = `${7 + Math.random() * 10}s`;
    p.style.setProperty('--drift', `${(Math.random() - .5) * 180}px`);
    container.appendChild(p);
  }
}

function formatMoney(n) {
  return Math.round(n).toLocaleString('en-IN');
}

function calculateTrip() {
  const start = new Date($('#departureDate').value);
  const end = new Date($('#returnDate').value);
  const hasDates = !Number.isNaN(start.getTime()) && !Number.isNaN(end.getTime());
  const duration = hasDates ? Math.ceil((end - start) / 86400000) : 0;
  const people = Math.max(1, Number($('#travellerCount').value) || 1);
  const world = worlds[state.worldKey];
  const typeMultiplier = { cinematic: 1.0, adventure: 1.15, royal: 1.35, mystic: 1.08, survival: 1.28 }[$('#journeyType').value] || 1;
  const base = world.base * people;
  const worldFee = world.fee * people;
  const durationFee = Math.max(duration, 1) * 125 * people;
  const total = (base + worldFee + durationFee) * typeMultiplier;
  return { start, end, duration, people, base, worldFee, total, typeMultiplier };
}

function updatePricing() {
  const { base, worldFee, total } = calculateTrip();
  const w = worlds[state.worldKey];
  $('#baseFare').textContent = `${w.currency}${formatMoney(base)}`;
  $('#worldFee').textContent = `${w.currency}${formatMoney(worldFee)}`;
  $('#estimatedCost').textContent = `${w.currency}${formatMoney(total)}`;
  $('#ticketCost').textContent = `${w.currency}${formatMoney(total)} EST.`;
}

function validateForm() {
  let valid = true;
  const fields = ['travellerName', 'travellerCount', 'departureDate', 'returnDate'];
  fields.forEach(id => { const el = $('#' + id); const err = $(`.error[data-error-for="${id}"]`); err.textContent = ''; el.setCustomValidity(''); });
  const name = $('#travellerName').value.trim();
  if (name.length < 2) { $('[data-error-for="travellerName"]').textContent = 'Enter at least 2 characters.'; valid = false; }
  const people = Number($('#travellerCount').value);
  if (!(people >= 1 && people <= 12)) { $('[data-error-for="travellerCount"]').textContent = 'Choose 1–12 travellers.'; valid = false; }
  const { start, end, duration } = calculateTrip();
  if (Number.isNaN(start.getTime())) { $('[data-error-for="departureDate"]').textContent = 'Choose a departure date.'; valid = false; }
  if (Number.isNaN(end.getTime())) { $('[data-error-for="returnDate"]').textContent = 'Choose a return date.'; valid = false; }
  if (valid && duration <= 0) { $('[data-error-for="returnDate"]').textContent = 'Return date must be after departure.'; valid = false; }
  return valid;
}

function makeTicket() {
  const world = worlds[state.worldKey];
  const data = calculateTrip();
  const dateFmt = new Intl.DateTimeFormat('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
  $('#ticketName').textContent = $('#travellerName').value.trim().toUpperCase();
  $('#ticketWorld').textContent = world.name.toUpperCase();
  $('#ticketWindow').textContent = `${dateFmt.format(data.start)} → ${dateFmt.format(data.end)}`;
  $('#ticketDuration').textContent = `${data.duration} DAY${data.duration === 1 ? '' : 'S'}`;
  $('#countdown').textContent = `${Math.max(0, Math.ceil((data.start - new Date()) / 86400000))} DAYS TO LAUNCH`;
  $('#ticketType').textContent = $('#journeyType').selectedOptions[0].text.toUpperCase();
  $('#ticketCode').textContent = `WT-${Math.random().toString(36).slice(2, 8).toUpperCase()}`;
  $('#ticketStatus').textContent = 'CONFIRMED';
  updatePricing();
}

function renderPassport() {
  const seen = JSON.parse(localStorage.getItem('worldTravelsVisited') || '[]');
  $('#passportList').innerHTML = Object.entries(worlds).map(([key, w]) => {
    const visited = seen.includes(key);
    return `<div class="passport-card ${visited ? 'visited' : ''}"><small>${w.code}</small><strong>${w.name}</strong><span class="passport-mark">${visited ? '✦ VISITED' : '○ LOCKED'}</span></div>`;
  }).join('');
}

function openPreview() {
  const world = worlds[state.worldKey];
  const scene = world.scenes[state.sceneIndex];
  $('#modalImage').src = scene.image;
  $('#modalWorld').textContent = world.universe.toUpperCase();
  $('#modalTitle').textContent = scene.label;
  $('#modalText').textContent = scene.text;
  $('#previewModal').classList.add('open');
  $('#previewModal').setAttribute('aria-hidden', 'false');
}
function closePreview() {
  $('#previewModal').classList.remove('open');
  $('#previewModal').setAttribute('aria-hidden', 'true');
}

function setupCursor() {
  const glow = $('.cursor-glow');
  window.addEventListener('pointermove', e => {
    glow.style.left = `${e.clientX}px`;
    glow.style.top = `${e.clientY}px`;
  }, { passive: true });
}

$('#exploreBtn').addEventListener('click', () => $('#destinationPanel').scrollIntoView({ behavior: 'smooth', block: 'start' }));
$('#previewBtn').addEventListener('click', openPreview);
$('#passportBtn').addEventListener('click', () => $('#passportPanel').scrollIntoView({ behavior: 'smooth', block: 'center' }));
$$('[data-close-modal]').forEach(el => el.addEventListener('click', closePreview));
document.addEventListener('keydown', e => { if (e.key === 'Escape') closePreview(); });

$('#tripForm').addEventListener('input', updatePricing);
$('#tripForm').addEventListener('submit', e => { e.preventDefault(); if (validateForm()) { makeTicket(); document.getElementById('ticket').scrollIntoView({ behavior: 'smooth', block: 'center' }); } });

const now = new Date();
const minDate = new Date(now); minDate.setDate(minDate.getDate() + 1);
const minStr = minDate.toISOString().slice(0, 10);
$('#departureDate').min = minStr;
$('#returnDate').min = minStr;
$('#departureDate').addEventListener('change', () => { $('#returnDate').min = $('#departureDate').value; updatePricing(); });

makeTicker();
addParticles();
setupCursor();
setTheme(worlds[state.worldKey]);
renderWorldCards();
renderWorldHero();
renderScenes();
renderPassport();
updatePricing();
