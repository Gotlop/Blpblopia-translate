// Aturan terjemahan ke Blepblopia
const toBlepblopiaMap = {
  a: "blep", b: "blub", c: "blop", d: "dlep", e: "blib",
  f: "flub", g: "glop", h: "hlep", i: "blip", j: "jlub",
  k: "klop", l: "lblep", m: "mlub", n: "nlop", o: "blopz",
  p: "pleb", q: "qlub", r: "rblub", s: "slep", t: "tlop",
  u: "blubz", v: "vlep", w: "wblop", x: "xlub", y: "yblep",
  z: "zlop"
};

const toTextMap = Object.fromEntries(
  Object.entries(toBlepblopiaMap).map(([key, value]) => [value, key])
);

// Fungsi untuk menerjemahkan ke Blepblopia
function translateToBlepblopia(text) {
  if (!text) return "Please enter some text to translate!";
  return text
    .split("")
    .map(char => toBlepblopiaMap[char.toLowerCase()] || char)
    .join("");
}

// Fungsi untuk menerjemahkan ke teks biasa
function translateToText(text) {
  if (!text) return "Please enter some Blepblopia code to translate!";
  let translated = text;
  for (const [blepWord, letter] of Object.entries(toTextMap)) {
    translated = translated.replace(new RegExp(blepWord, "gi"), (match) =>
      match === match.toLowerCase() ? letter : letter.toUpperCase()
    );
  }
  return translated;
}

// Fungsi untuk menyalin teks ke clipboard
function copyToClipboard(text) {
  if (!text) return "Nothing to copy!";
  navigator.clipboard.writeText(text)
    .then(() => {
      blepblopiaState.output += " (Copied!)";
      displayUI(blepblopiaElement);
    })
    .catch(() => {
      blepblopiaState.output = "Failed to copy!";
      displayUI(blepblopiaElement);
    });
}

// Fungsi untuk merender UI
function displayUI(element) {
  element.textContent = "";
  element.insertAdjacentHTML("beforeend", `
    <div id="blepblopia-ui" style="text-align: center;">
      <textarea id="blepblopia-input" placeholder="Enter text or Blepblopia code" style="width: 100%; height: 100px; margin-bottom: 10px;">${blepblopiaState.input}</textarea>
      <div class="button-container" style="margin-bottom: 10px;">
        <button onclick="blepblopiaToBlep();return false" style="margin-right: 10px;">Text to Blepblopia</button>
        <button onclick="blepblopiaToText();return false">Blepblopia to Text</button>
      </div>
      <div id="blepblopia-output" style="margin-bottom: 10px;">${blepblopiaState.output}</div>
      <button onclick="blepblopiaCopy();return false" ${!blepblopiaState.output ? "disabled" : ""}>Copy Result</button>
    </div>
  `);

  // Tambah event listener untuk input
  document.getElementById("blepblopia-input").addEventListener("input", (e) => {
    blepblopiaState.input = e.target.value;
    localStorage.setItem("blepblopiaState", JSON.stringify(blepblopiaState));
  });
}

// Fungsi handler tombol
function blepblopiaToBlep() {
  blepblopiaState.output = translateToBlepblopia(blepblopiaState.input);
  displayUI(blepblopiaElement);
  localStorage.setItem("blepblopiaState", JSON.stringify(blepblopiaState));
}

function blepblopiaToText() {
  blepblopiaState.output = translateToText(blepblopiaState.input);
  displayUI(blepblopiaElement);
  localStorage.setItem("blepblopiaState", JSON.stringify(blepblopiaState));
}

function blepblopiaCopy() {
  copyToClipboard(blepblopiaState.output);
}

// State global
let blepblopiaState;
let blepblopiaElement;

// Fungsi utama untuk memulai aplikasi
function startBlepblopia(element) {
  blepblopiaElement = element;

  // Load state dari localStorage atau buat baru
  blepblopiaState = localStorage.getItem("blepblopiaState");
  if (blepblopiaState) {
    blepblopiaState = JSON.parse(blepblopiaState);
  } else {
    blepblopiaState = { input: "", output: "" };
  }

  // Render UI awal
  displayUI(blepblopiaElement);
}

// Ekspor fungsi ke window agar bisa dipanggil dari Game.tsx
window.startBlepblopia = startBlepblopia;
