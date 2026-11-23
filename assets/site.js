/* ==========================================================
   AYARLAR – sadece burayı düzenleyin
   ========================================================== */
const AYAR = {
  // İndirme sayacı için GitHub deposu: "kullanici/depo" (örn. "eesracarr48/sbtu-roket").
  // Boş bırakılırsa butonlar Drive'a gider ve sayaçlar "—" gösterir.
  repo: "",
  // Her kaynağın GitHub Release'teki dosya adı (README'deki adımlara bakın)
  dosyalar: {
    motor: "TEKNOFEST_Motorlari_2026.zip",
    motorRehberi: "OpenRocket_TEKNOFEST_Motor_Ekleme_Rehberi.pdf",
    kurulum: "OpenRocket_Kurulum_Rehberi.pdf"
  }
};

/* ---------- Dil seçimi (TR / EN) ---------- */
(function () {
  const ogeler = document.querySelectorAll("[data-en]");
  ogeler.forEach(el => { el.dataset.tr = el.innerHTML; });
  function uygula(dil) {
    ogeler.forEach(el => { el.innerHTML = dil === "en" ? el.dataset.en : el.dataset.tr; });
    document.documentElement.lang = dil;
    document.querySelectorAll(".dil button").forEach(b => b.setAttribute("aria-pressed", String(b.dataset.dil === dil)));
    try { localStorage.setItem("dil", dil); } catch (e) {}
  }
  document.querySelectorAll(".dil button").forEach(b => b.addEventListener("click", () => uygula(b.dataset.dil)));
  let kayitli = "tr";
  try { kayitli = localStorage.getItem("dil") || "tr"; } catch (e) {}
  if (kayitli === "en") uygula("en");
})();

/* ---------- İndirme sayaçları (GitHub Releases) ---------- */
(async function () {
  if (!AYAR.repo) return;
  Object.entries(AYAR.dosyalar).forEach(([anahtar, dosya]) => {
    document.querySelectorAll(`[data-indir="${anahtar}"]`).forEach(a => {
      a.href = `https://github.com/${AYAR.repo}/releases/latest/download/${encodeURIComponent(dosya)}`;
    });
  });
  try {
    const yanit = await fetch(`https://api.github.com/repos/${AYAR.repo}/releases?per_page=100`);
    if (!yanit.ok) return;
    const surumler = await yanit.json();
    const sayilar = {};
    surumler.forEach(s => (s.assets || []).forEach(a => { sayilar[a.name] = (sayilar[a.name] || 0) + a.download_count; }));
    let toplam = 0;
    Object.entries(AYAR.dosyalar).forEach(([anahtar, dosya]) => {
      const n = sayilar[dosya] || 0; toplam += n;
      document.querySelectorAll(`[data-sayac="${anahtar}"]`).forEach(el => { el.textContent = n.toLocaleString("tr-TR"); });
    });
    document.querySelectorAll("[data-sayac-toplam]").forEach(el => { el.textContent = toplam.toLocaleString("tr-TR"); });
  } catch (e) { /* sayaç yüklenemezse "—" kalır */ }
})();

const yil = document.getElementById("yil");
if (yil) yil.textContent = new Date().getFullYear();
