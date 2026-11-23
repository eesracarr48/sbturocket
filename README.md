# SBTÜ Roket ve İtki Topluluğu – Web Sitesi

Statik site (HTML + CSS + JS). Sunucu, veritabanı veya derleme gerekmez.

## 1. GitHub Pages'te yayınlama
1. GitHub'da yeni bir depo açın (örn. `sbtu-roket`). Mümkünse kulübe ait bir hesap veya organizasyon altında.
2. Bu klasörün **içindekileri** (index.html, assets/, blog/, img/) depoya yükleyin: *Add file → Upload files*.
3. *Settings → Pages → Branch: main / (root) → Save*.
4. 1–2 dakika sonra site `https://KULLANICI.github.io/sbtu-roket/` adresinde yayında.

## 2. İndirme sayacını açma (isteğe bağlı)
Sayaç, GitHub Releases'taki indirme sayılarını okur.
1. Depoda *Releases → Draft a new release*, etiket `v2026.1`.
2. Şu dosyaları sürükleyin (adlar birebir aynı olmalı):
   - `TEKNOFEST_Motorlari_2026.zip` (Drive'daki TEKNOFEST_Motorlari_2026 klasörünü zip olarak indirin)
   - `OpenRocket_TEKNOFEST_Motor_Ekleme_Rehberi.pdf` (Google Doküman → Dosya → İndir → PDF)
   - `OpenRocket_Kurulum_Rehberi.pdf`
3. *Publish release*.
4. `assets/site.js` dosyasında en üstteki `repo: ""` satırını `repo: "KULLANICI/sbtu-roket"` yapın.

Bunu yapana kadar İndir butonları Drive'daki dosyalara gider, sayaçlar "—" gösterir.
Yeni sürüm yayınlarken aynı dosya adlarını kullanın; sayılar tüm sürümler boyunca toplanır.

## 3. İçerik düzenleme
- **Metinler:** `index.html` içinde. İngilizce karşılıkları aynı satırdaki `data-en="..."` içinde.
- **Fotoğraflar:** `img/FOTOGRAFLAR.md` dosyasındaki adlarla `img/` klasörüne koyun.
- **Etkinlik tarihleri:** `index.html` → `id="etkinlikler"` bölümündeki `[GG] [AY] [Saat] [Salon]`.
- **Yeni blog yazısı:** `blog/` içindeki bir dosyayı kopyalayıp düzenleyin, ana sayfadaki `id="blog"` bölümüne kartını ekleyin.
- **Duyuru şeridi:** `index.html` en üstteki `class="duyuru"` satırı (şu an Lagari başvurusu).

## Klasör yapısı
```
index.html            Ana sayfa
assets/style.css      Tüm sayfaların stili
assets/site.js        Dil seçimi + indirme sayacı (AYARLAR en üstte)
assets/logo.png       Logo
blog/*.html           Blog yazıları
img/                  Fotoğraflar ve rehber görselleri
```
