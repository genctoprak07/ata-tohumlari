# Ata Tohumları Web Platformu

Modern, responsive ve estetik bir tohum platformu. Next.js App Router, Tailwind CSS ve Lucide React kullanılarak geliştirilmiştir.

## 🌱 Özellikler

- ✅ 18 farklı geleneksel tohum çeşidi
- ✅ Dinamik tohum detay sayfaları
- ✅ Responsive tasarım (mobil uyumlu)
- ✅ Dropdown menü ile tohum navigasyonu
- ✅ 4 bilgilendirici statik sayfa (Gıda Güvenliği, Gıda Egemenliği, Şefler, Slow Food)
- ✅ Organik renk paleti (toprak tonları ve yeşiller)
- ✅ Smooth animasyonlar ve hover efektleri
- ✅ SEO uyumlu

## 📋 Gereksinimler

Projeyi çalıştırmak için Node.js ve npm yüklü olmalıdır.

- Node.js (v18 veya üzeri)
- npm veya yarn

## 🚀 Kurulum

```bash
# Bağımlılıkları yükle
npm install

# Geliştirme sunucusunu başlat
npm run dev

# Tarayıcıda aç: http://localhost:3000
```

## 📁 Proje Yapısı

```
Ataweb/
├── app/                      # Next.js App Router sayfaları
│   ├── layout.js            # Ana layout
│   ├── page.js              # Ana sayfa
│   ├── tohumlar/[id]/       # Dinamik tohum detay sayfaları
│   ├── gida-guvenligi/      # Gıda güvenliği sayfası
│   ├── gida-egemenligi/     # Gıda egemenliği sayfası
│   ├── sefler/              # Şefler sayfası
│   └── slow-food/           # Slow Food sayfası
├── components/              # React bileşenleri
│   ├── Navbar.jsx          # Navigasyon bileşeni
│   ├── Footer.jsx          # Footer bileşeni
│   ├── SeedCard.jsx        # Tohum kartı bileşeni
│   └── InfoPageLayout.jsx  # Bilgi sayfası layout'u
├── data/                    # Veri dosyaları
│   └── seeds.js            # 18 tohum verisi
├── public/                  # Statik dosyalar
│   └── images/             # Görsel dosyaları
└── tailwind.config.js      # Tailwind CSS yapılandırması
```

## 🎨 Renk Paleti

- **Earth (Toprak Tonu):** #A0522D (Sienna)
- **Nature (Yeşil):** #2E8B57 (SeaGreen)
- **Cream (Arka Plan):** #F5F5DC (Bej/Krem)

## 📸 Görseller

Görseller `public/images/` dizinine eklenmelidir:
- `public/images/seeds/` - 18 tohum görseli (örn: biber.jpg, domates.jpg)
- `public/images/hero/` - Hero görselleri (gida-guvenligi.jpg, gida-egemenligi.jpg, vb.)

Detaylı bilgi için: `public/images/README.md`

## 🌟 Öne Çıkan Özellikler

### Navbar
- Sticky navigation
- Dropdown menü (tohumlar için)
- Responsive hamburger menü

### Ana Sayfa
- Hero section
- Özellikler grid'i
- Öne çıkan tohumlar showcase
- Misyon bölümü

### Tohum Detay Sayfaları
- Split layout (görsel + detaylar)
- Özellikler listesi
- "Diğer Tohumları Keşfet" önerileri

### Statik Sayfalar
- Hero görselli başlık
- Temiz tipografi
- Bilgilendirici içerik

## 🛠️ Teknoloji Yığını

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS 3.4
- **Icons:** Lucide React
- **Font:** Inter (Google Fonts)
- **Language:** JavaScript (React)

## 📦 Komutlar

```bash
# Geliştirme
npm run dev

# Production build
npm run build

# Production sunucu
npm start

# Lint kontrolü
npm run lint
```

## 🎯 Sayfa Rotaları

- `/` - Ana sayfa
- `/tohumlar/[id]` - Tohum detay sayfaları (18 farklı tohum)
- `/gida-guvenligi` - Gıda Güvenliği
- `/gida-egemenligi` - Gıda Egemenliği
- `/sefler` - Türkiye'nin Gözde Şefleri
- `/slow-food` - Slow Food

## 🌐 Tarayıcı Desteği

- Chrome (son 2 versiyon)
- Firefox (son 2 versiyon)
- Safari (son 2 versiyon)
- Edge (son 2 versiyon)

## 📝 Lisans

Bu proje eğitim amaçlı geliştirilmiştir.

## 👤 İletişim

Sorularınız için: info@atatohumlari.com (örnek)

---

**Ata Tohumları** - Geleneksel tohumlarımızı koruyarak geleceğe taşıyoruz 🌱
