# Günün Albümü

Her gece 00:00'da (Türkiye saati) yenilenen, kişisel zevke göre seçilmiş bir albüm önerisi sitesi. Günün albümü tarihe bağlı ve deterministiktir: hangi cihazdan, hangi oturumdan girilirse girilsin aynı gün aynı albüm gösterilir.

Seçki, Spotify profilindeki gruplar (Three Days Grace, The Pretty Reckless, Breaking Benjamin, Panic! At the Disco, The Neighbourhood, Imagine Dragons, The Beatles, Broken Bells) ve onlara yakın duran sanatçılardan oluşan 59 albümlük, elle yazılmış bir katalogdan gelir. Her albüm için:

- Kapak (vinil plak görünümüyle), albüm adı, yıl, köken ve tür etiketleri
- Şarkı listesi tek satırda `• Şarkı 1 • Şarkı 2 • Şarkı 3` biçiminde (kopyalanabilir)
- Albümün hikâyesi, sanatçı hakkında bilgi, kadro ve ilginç bilgiler
- Sağda Spotify arayüzüne benzer bir panel: şarkı listesi, 30 saniyelik önizleme çalma, her şarkı ve albüm için Spotify bağlantısı (uygulama yüklüyse uygulamada açılır)
- Gece yarısına geri sayım; saat 00:00'da sayfa kendini yeniler
- `/gun/YYYY-AA-GG` ile geçmiş günlerin arşivi (gelecek günler sürpriz kalır)

## Çalıştırma

```bash
npm install
npm run dev
```

Uygulama `http://localhost:3000` adresinde açılır. Üretim derlemesi için `npm run build && npm start`.

## Veri kaynakları

- **Kapaklar, şarkı listeleri, süreler ve önizlemeler:** Deezer'ın anahtar gerektirmeyen herkese açık albüm API'si. Her albümün Deezer kimliği `src/lib/catalog-*.ts` içinde sabitlenmiştir; yanıtlar Next.js veri önbelleğinde kalıcı olarak saklanır.
- **Spotify bağlantıları:** Varsayılan olarak `open.spotify.com/search/...` derin bağlantıları kullanılır; bunlar Spotify uygulamasına yönlendirir.

### İsteğe bağlı: tam Spotify entegrasyonu

`SPOTIFY_CLIENT_ID` ve `SPOTIFY_CLIENT_SECRET` ortam değişkenleri tanımlanırsa albüm ve şarkılar Spotify Web API üzerinden (client-credentials akışı) çözülür: bağlantılar doğrudan albüm/şarkı sayfasına gider ve panele Spotify'ın gömülü oynatıcısı eklenir. Kimlik bilgileri için [Spotify Developer Dashboard](https://developer.spotify.com/dashboard) üzerinden bir uygulama oluşturmak yeterlidir. `.env.example` dosyasına bakın.

## Proje yapısı

```
src/
  app/
    page.tsx            # Bugünün albümü
    gun/[date]/page.tsx # Arşiv (sadece geçmiş günler)
  components/
    daily-album-view.tsx  # Sol sütun: vinil, başlık, şarkılar, hikâye, sanatçı
    track-panel.tsx       # Sağ sütun: Spotify benzeri liste + önizleme oynatıcı
    vinyl-cover.tsx       # Kapak + dönen plak
    countdown.tsx         # Gece yarısına geri sayım ve otomatik yenileme
  lib/
    catalog-core.ts       # Profildeki sanatçıların albümleri
    catalog-similar.ts    # Benzer sanatçılar
    daily.ts              # Tarih → albüm eşlemesi (Europe/Istanbul, sabit tohum)
    deezer.ts, spotify.ts, resolve.ts
```

## Yeni albüm eklemek

`src/lib/catalog-similar.ts` (veya `catalog-core.ts`) dosyasına yeni bir kayıt eklemek yeterlidir. Deezer kimliğini bulmak için:

```
https://api.deezer.com/search/album?q=artist:"Sanatçı" album:"Albüm"
```

Katalog değiştiğinde rotasyon yeniden hesaplanır; sıralama `src/lib/daily.ts` içindeki sabit tohumla belirlenir.

## Dağıtım

Next.js uygulamasıdır; Vercel'e doğrudan dağıtılabilir. Ortam değişkeni zorunlu değildir.
