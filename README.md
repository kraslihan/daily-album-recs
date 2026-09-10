# Günün Albümü

Her gece 00:00'da (Türkiye saati) yenilenen, kişisel zevke göre seçilmiş bir albüm önerisi sitesi. Günün albümü tarihe bağlı ve deterministiktir: hangi cihazdan, hangi oturumdan girilirse girilsin aynı gün aynı albüm gösterilir.

Seçki üç günlük bir döngüye bağlıdır:

1. **Kütüphanenden** — Three Days Grace, The Pretty Reckless, Breaking Benjamin, Panic! At the Disco, The Neighbourhood, Imagine Dragons, The Beatles, Broken Bells.
2. **Keşif** — punk rock ve alternatif rock hattında, 1980'lerden bugüne (70'ler yok) beğenebileceğin albümler.
3. **Keşif** — aynı havuzdan ikinci bir öneri.

Döngü sonra başa döner. Aynı takvim günü her yerde aynı albümü gösterir. Her albüm için:

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
- **Spotify bağlantıları:** `SPOTIFY_CLIENT_ID` ve `SPOTIFY_CLIENT_SECRET` tanımlıysa (Vercel'de halihazırda var) albüm ve şarkılar Web API üzerinden çözülür: bağlantılar doğrudan albüm/şarkı sayfasına gider, panele gömülü oynatıcı eklenir. Anahtar yoksa `open.spotify.com/search/...` derin bağlantısı kullanılır.

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
    catalog-core.ts         # 1. gün: dinleyicinin kendi sanatçıları
    catalog-similar.ts      # 2–3. gün: yakın sahneler
    catalog-discovery.ts    # 2–3. gün: 80'lerden bugüne punk/alternatif
    daily.ts                # 3 günlük döngü (Europe/Istanbul)
    deezer.ts, spotify.ts, resolve.ts
```

## Yeni albüm eklemek

Kütüphane günleri için `src/lib/catalog-core.ts`, keşif günleri için `catalog-similar.ts` / `catalog-discovery.ts`. Deezer kimliğini bulmak için:

```
https://api.deezer.com/search/album?q=artist:"Sanatçı" album:"Albüm"
```

Katalog değiştiğinde rotasyon yeniden hesaplanır; sıralama `src/lib/daily.ts` içindeki sabit tohumla belirlenir.

## Dağıtım

Next.js uygulamasıdır; Vercel'e bağlıdır. `main`'e her push yeni dağıtım tetikler. Spotify Seviye 1 için `SPOTIFY_CLIENT_ID` ve `SPOTIFY_CLIENT_SECRET` Vercel Environment Variables'da tanımlı olmalıdır.
