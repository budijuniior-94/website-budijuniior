const articles = [
  {id:1,category:"Kehidupan",date:"18 Nov 2026",read:"5 menit baca",title:"Seni memberi ruang bagi diri sendiri",excerpt:"Di tengah hari yang bergerak cepat, jeda kecil dapat membantu kita mendengar kembali hal-hal yang penting.",image:"https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=900&q=80",body:"Kita sering mengukur hari dari banyaknya hal yang berhasil diselesaikan. Padahal, ada saat ketika berhenti sejenak justru menjadi bentuk perhatian kepada diri sendiri. Jeda memberi kesempatan untuk menata pikiran, memahami perasaan, dan memilih langkah berikutnya dengan lebih sadar.\n\nMemberi ruang bukan berarti menyerah atau menghindari tanggung jawab. Itu adalah cara sederhana untuk menjaga agar perjalanan tetap bermakna."},
  {id:2,category:"Teknologi",date:"17 Nov 2026",read:"7 menit baca",title:"Teknologi yang dekat dengan kehidupan",excerpt:"Inovasi terbaik bukan selalu yang paling rumit, melainkan yang menjawab kebutuhan manusia dengan tepat.",image:"https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80",body:"Teknologi hadir di banyak bagian kehidupan: cara kita belajar, bekerja, berkomunikasi, dan merawat lingkungan. Namun, kecanggihan bukan tujuan akhir. Pertanyaan yang lebih penting adalah apakah sebuah teknologi membuat kehidupan lebih mudah, adil, dan manusiawi.\n\nMulailah dari persoalan nyata. Dengarkan orang yang akan menggunakannya, uji solusi dalam skala kecil, lalu kembangkan berdasarkan pengalaman."},
  {id:3,category:"Kreativitas",date:"16 Nov 2026",read:"4 menit baca",title:"Dari ide sederhana menjadi karya",excerpt:"Karya yang baik sering dimulai dari keberanian mencoba, bukan dari rencana yang sempurna.",image:"https://images.unsplash.com/photo-1455390582262-044c-dead277a?auto=format&fit=crop&w=900&q=80",body:"Ide dapat datang dari percakapan, pengamatan, atau pertanyaan kecil. Jangan menunggu semuanya terasa sempurna. Catat gagasan, buat versi pertama, lalu perbaiki sedikit demi sedikit.\n\nKreativitas tumbuh ketika kita memberi kesempatan kepada diri sendiri untuk bereksperimen dan belajar dari proses."},
  {id:4,category:"Budaya",date:"15 Nov 2026",read:"6 menit baca",title:"Merawat cerita, menjaga ingatan",excerpt:"Tradisi hidup ketika diwariskan, dipahami, dan diberi ruang untuk berdialog dengan zaman.",image:"https://images.unsplash.com/photo-1518998053901-5348d3961a04?auto=format&fit=crop&w=900&q=80",body:"Cerita dan tradisi menyimpan pengalaman banyak generasi. Merawatnya bukan sekadar mengulang bentuk lama, tetapi memahami nilai yang terkandung di dalamnya.\n\nKetika generasi muda ikut mendokumentasikan, mempelajari, dan menceritakan kembali warisan budaya, ingatan bersama mendapat kesempatan untuk terus hidup."},
  {id:5,category:"Teknologi",date:"14 Nov 2026",read:"8 menit baca",title:"Belajar digital dengan rasa ingin tahu",excerpt:"Keterampilan digital tumbuh melalui kebiasaan bertanya, mencoba, dan mengevaluasi informasi.",image:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",body:"Dunia digital menyediakan akses ke banyak pengetahuan, tetapi juga menuntut kecermatan. Kita perlu membandingkan sumber, memeriksa konteks, dan memahami bahwa tidak semua informasi memiliki kualitas yang sama.\n\nRasa ingin tahu yang disertai sikap kritis adalah bekal penting untuk belajar sepanjang hayat."},
  {id:6,category:"Kehidupan",date:"13 Nov 2026",read:"5 menit baca",title:"Perjumpaan kecil yang berarti",excerpt:"Sering kali, perhatian sederhana membuat seseorang merasa didengar dan dihargai.",image:"https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=80",body:"Kehadiran tidak selalu membutuhkan kata-kata besar. Mendengarkan dengan sungguh-sungguh, menyapa, atau menyediakan waktu dapat menjadi bentuk perhatian yang mendalam.\n\nDi tengah komunikasi yang serba cepat, perjumpaan yang utuh mengingatkan kita bahwa manusia bukan sekadar pesan yang lewat di layar."}
];

const grid = document.getElementById("articleGrid");
const emptyState = document.getElementById("emptyState");
const searchInput = document.getElementById("searchInput");
const tabs = document.querySelectorAll(".tab");
let activeCategory = "Semua";
let visibleCount = 6;

function renderArticles(){
  const query = searchInput.value.trim().toLowerCase();
  const filtered = articles.filter(article => {
    const categoryMatch = activeCategory === "Semua" || article.category === activeCategory;
    const searchMatch = `${article.title} ${article.excerpt} ${article.category}`.toLowerCase().includes(query);
    return categoryMatch && searchMatch;
  });
  const shown = filtered.slice(0, visibleCount);
  grid.innerHTML = shown.map(article => `
    <article class="article-card">
      <a href="#artikel-${article.id}" class="article-open" data-id="${article.id}" aria-label="Baca ${article.title}">
        <div class="article-image">
          <img src="${article.image}" alt="${article.title}" loading="lazy">
          <span class="article-category">${article.category.toUpperCase()}</span>
        </div>
        <div class="article-info">
          <div class="article-meta"><span>${article.date}</span><span>•</span><span>${article.read}</span></div>
          <h3>${article.title}</h3>
          <p>${article.excerpt}</p>
          <span class="read-link">BACA CERITA <span>→</span></span>
        </div>
      </a>
    </article>`).join("");
  emptyState.hidden = shown.length !== 0;
  document.getElementById("loadMore").hidden = filtered.length <= visibleCount;
  grid.querySelectorAll(".article-open").forEach(link => link.addEventListener("click", event => {
    event.preventDefault();
    openArticle(Number(link.dataset.id));
  }));
}

function setCategory(category){
  activeCategory = category;
  tabs.forEach(tab => tab.classList.toggle("active", tab.dataset.category === category));
  visibleCount = 6;
  renderArticles();
}
function openArticle(id){
  const article = articles.find(item => item.id === id);
  if(!article) return;
  document.getElementById("dialogContent").innerHTML = `
    <div class="dialog-body">
      <img src="${article.image}" alt="${article.title}">
      <div class="eyebrow">${article.category.toUpperCase()} · RUANGBACA</div>
      <h2>${article.title}</h2>
      <div class="article-meta"><span>${article.date}</span><span>•</span><span>${article.read}</span></div>
      ${article.body.split("\n\n").map(paragraph => `<p>${paragraph}</p>`).join("")}
    </div>`;
  document.getElementById("articleDialog").showModal();
}

tabs.forEach(tab => tab.addEventListener("click", () => setCategory(tab.dataset.category)));
document.querySelectorAll("[data-jump-category]").forEach(button => button.addEventListener("click", () => {
  setCategory(button.dataset.jumpCategory);
  document.getElementById("terbaru").scrollIntoView({behavior:"smooth"});
}));
searchInput.addEventListener("input", renderArticles);
document.getElementById("loadMore").addEventListener("click", () => {visibleCount += 3; renderArticles();});
document.getElementById("dialogClose").addEventListener("click", () => document.getElementById("articleDialog").close());
document.getElementById("articleDialog").addEventListener("click", event => {
  if(event.target.id === "articleDialog") event.target.close();
});
document.getElementById("themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
  document.getElementById("themeToggle").textContent = document.body.classList.contains("dark") ? "☀" : "☾";
});
document.getElementById("menuToggle").addEventListener("click", () => {
  const nav = document.getElementById("mainNav");
  const open = nav.classList.toggle("open");
  document.getElementById("menuToggle").setAttribute("aria-expanded", String(open));
});
document.querySelectorAll("#mainNav a").forEach(link => link.addEventListener("click", () => {
  document.getElementById("mainNav").classList.remove("open");
  document.getElementById("menuToggle").setAttribute("aria-expanded","false");
}));
document.getElementById("newsletterForm").addEventListener("submit", event => {
  event.preventDefault();
  const email = document.getElementById("newsletterEmail").value.trim();
  document.getElementById("newsletterMessage").textContent = `Terima kasih! ${email} sudah tercatat pada demo formulir ini.`;
  event.target.reset();
});
document.getElementById("todayDate").textContent = new Intl.DateTimeFormat("id-ID",{day:"2-digit",month:"long",year:"numeric"}).format(new Date());
document.getElementById("year").textContent = new Date().getFullYear();
renderArticles();
