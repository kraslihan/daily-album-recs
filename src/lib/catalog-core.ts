import type { Album } from "./types";

/**
 * Albums by the artists that already live in the listener's Spotify profile.
 */
export const coreAlbums: Album[] = [
  // ───────────────────────── Three Days Grace ─────────────────────────
  {
    slug: "three-days-grace-three-days-grace",
    artist: "Three Days Grace",
    title: "Three Days Grace",
    year: 2003,
    deezerId: 78624,
    genres: ["Post-grunge", "Alternatif metal"],
    origin: "Norwood, Ontario, Kanada",
    why: "Kütüphanendeki en sevdiğin grubun her şeyin başladığı ilk albümü.",
    story: [
      "Norwood adlı küçük bir Ontario kasabasında lise arkadaşları olarak Groundswell adıyla çalmaya başlayan üçlü, 1997'de adını Three Days Grace olarak değiştirdi ve yıllarca Toronto'nun kulüplerinde demo dağıttı. Jive Records ile anlaşmalarını sağlayan şey, prodüktör Gavin Brown ile yaptıkları demolardı.",
      "Albüm, Adam Gontier'in bir ilişkinin çöküşünü ham bir öfkeyle anlattığı \"I Hate Everything About You\" ile patladı. \"Just Like You\", \"Home\" ve \"Wake Up\" gibi şarkılar, 2000'lerin post-grunge sesini tanımlayan albümlerden birini ortaya çıkardı. Kayıtlar tamamlandıktan sonra gitarist Barry Stock kadroya katıldı ve grup dörtlü hâline geldi.",
    ],
    artistInfo:
      "Three Days Grace, Adam Gontier (vokal/gitar), Brad Walst (bas) ve Neil Sanderson (davul) tarafından kuruldu; 2003'te Barry Stock (gitar) katıldı. Grup, Amerikan rock radyolarında en çok 1 numara elde eden gruplardan biri hâline geldi.",
    members: ["Adam Gontier – vokal, ritim gitar", "Barry Stock – solo gitar", "Brad Walst – bas", "Neil Sanderson – davul, geri vokal"],
    funFacts: [
      "Grubun adı, 'bir şeyi değiştirmek için sadece üç günün olsaydı ne yapardın?' fikrinden geliyor.",
      "\"I Hate Everything About You\" ilk başta Gontier'in gitarla oturup on beş dakikada yazdığı bir taslaktı.",
      "Albüm çıktığında grup üyelerinin çoğu 20'li yaşlarının başındaydı; kayıtlar Long View Farm adlı bir çiftlik stüdyosunda yapıldı.",
    ],
    relatedTo: ["Three Days Grace"],
  },
  {
    slug: "three-days-grace-one-x",
    artist: "Three Days Grace",
    title: "One-X",
    year: 2006,
    deezerId: 932593,
    genres: ["Post-grunge", "Alternatif metal"],
    origin: "Norwood, Ontario, Kanada",
    why: "\"Animal I Have Become\" ve \"Pain\" — Three Days Grace'in en karanlık ve en çok dinlenen dönemi.",
    story: [
      "İlk albümün turnesi bitince Adam Gontier ağır bir OxyContin bağımlılığıyla boğuşuyordu. 2005'te Toronto'daki bir rehabilitasyon merkezine (CAMH) yatan Gontier, One-X'in sözlerinin büyük kısmını orada bir deftere yazdı. \"Pain\", \"Animal I Have Become\" ve \"Never Too Late\" doğrudan bu dönemin günlükleri gibidir.",
      "Howard Benson prodüktörlüğünde kaydedilen albüm, grubun en başarılı işi oldu: ABD'de multi-platin, Kanada'da elmas sertifika aldı. Albümün adı, kendini herkesten farklı ve 'işaretlenmiş' hisseden bir kişiyi (One-X) anlatıyor — kapaktaki kalabalık içinde tek başına duran figür de bu fikri simgeliyor.",
    ],
    artistInfo:
      "Barry Stock'un tam zamanlı gitarist olarak katıldığı ilk stüdyo albümü. Grup bu albümle Amerikan rock radyolarının en çok çalınan isimlerinden biri hâline geldi; \"Animal I Have Become\" ve \"Pain\" yıllarca listelerin tepesinde kaldı.",
    members: ["Adam Gontier – vokal, ritim gitar", "Barry Stock – solo gitar", "Brad Walst – bas", "Neil Sanderson – davul, piyano, geri vokal"],
    funFacts: [
      "\"Never Too Late\" klibi, Gontier'in kendi rehabilitasyon deneyiminden ilham alan bir hastane sahnesinde geçer.",
      "Albümdeki neredeyse her şarkının sözü, Gontier'in rehabilitasyon sırasında tuttuğu defterden çıktı.",
      "Grup 2016'da \"The Mountain\" ile Billboard Mainstream Rock listesinde Van Halen'ın 1 numara rekorunu geçti; bu yolculuk One-X ile başladı.",
    ],
    relatedTo: ["Three Days Grace"],
  },
  {
    slug: "three-days-grace-life-starts-now",
    artist: "Three Days Grace",
    title: "Life Starts Now",
    year: 2009,
    deezerId: 1441167,
    genres: ["Post-grunge", "Alternatif rock"],
    origin: "Norwood, Ontario, Kanada",
    why: "Karanlıktan sonra gelen ışık: Gontier'in iyileşme döneminin albümü.",
    story: [
      "One-X'in bağımlılık ve acı temalarından sonra grup, hayatın yeniden başladığı bir noktadan yazmak istedi. Life Starts Now, Gontier'in temiz kaldığı yılların ürünü; \"Break\", \"The Good Life\" ve \"World So Cold\" kaybetmenin değil, ayakta kalmanın şarkılarıdır.",
      "Yine Howard Benson ile Los Angeles'ta kaydedilen albüm, Billboard 200'e 3 numaradan giriş yaptı — grubun o güne kadarki en yüksek açılışıydı. \"Break\" ve \"The Good Life\" Mainstream Rock listesinde 1 numaraya çıktı.",
    ],
    artistInfo:
      "Three Days Grace bu albümle post-grunge'ın sınırlarını genişletti: akustik gitarlar, piyano ve daha melodik nakaratlar. Albüm dönemi grup için en uzun turnelerden birini getirdi.",
    members: ["Adam Gontier – vokal, ritim gitar", "Barry Stock – solo gitar", "Brad Walst – bas", "Neil Sanderson – davul, klavye, geri vokal"],
    funFacts: [
      "\"World So Cold\", Gontier'in bir arkadaşının ölümünün ardından yazıldı ve grubun en çok dinlenen baladlarından biri oldu.",
      "\"Lost in You\" başlangıçta akustik bir demo olarak kaydedildi; stüdyoda neredeyse tamamen yeniden düzenlendi.",
      "Albüm kapağındaki sade 'başlangıç' estetiği, One-X'in karanlık kapağının bilinçli bir zıttı olarak tasarlandı.",
    ],
    relatedTo: ["Three Days Grace"],
  },
  {
    slug: "three-days-grace-transit-of-venus",
    artist: "Three Days Grace",
    title: "Transit of Venus",
    year: 2012,
    deezerId: 5969214,
    genres: ["Alternatif rock", "Elektronik rock"],
    origin: "Norwood, Ontario, Kanada",
    why: "Adam Gontier'li son albüm — grubun en deneysel ve elektronik dokulu işi.",
    story: [
      "Albümün adı, 5-6 Haziran 2012'de yaşanan ve bir sonraki 2117'ye kadar tekrar etmeyecek olan Venüs geçişinden geliyor. Grup bu nadir gök olayını, insanların hayatında bir kez yaşanan dönüm noktalarının metaforu olarak kullandı.",
      "Prodüktör Don Gilmore ile çalışan grup, gitarların yanına synth katmanları ekledi. \"Chalk Outline\" Billboard Rock Songs listesinde 1 numaraya çıktı. Ancak albümün turnesi başlamadan, Ocak 2013'te Adam Gontier sağlık sorunlarını gerekçe göstererek gruptan ayrıldı; yerine Brad Walst'un kardeşi Matt Walst geçti.",
    ],
    artistInfo:
      "Three Days Grace'in orijinal vokalist Adam Gontier ile yaptığı dördüncü ve son stüdyo albümü. Albümde Michael Jackson'ın \"Give In to Me\" şarkısına yapılan cover da yer alıyor.",
    members: ["Adam Gontier – vokal, ritim gitar", "Barry Stock – solo gitar", "Brad Walst – bas", "Neil Sanderson – davul, klavye, geri vokal"],
    funFacts: [
      "Albüm, Michael Jackson'ın \"Give In to Me\" şarkısıyla grubun bir stüdyo albümüne koyduğu ilk cover'ı içeriyor.",
      "\"Chalk Outline\" grubun Billboard Rock Songs listesindeki ilk 1 numarası oldu.",
      "Matt Walst, gruba katılmadan önce My Darkest Days'in solistiydi ve Three Days Grace'in bazı şarkılarına zaten söz yazmıştı.",
    ],
    relatedTo: ["Three Days Grace"],
  },
  {
    slug: "three-days-grace-human",
    artist: "Three Days Grace",
    title: "Human",
    year: 2015,
    deezerId: 9816984,
    genres: ["Alternatif metal", "Hard rock"],
    origin: "Norwood, Ontario, Kanada",
    why: "Matt Walst dönemine giriş: \"Painkiller\" ve \"I Am Machine\" ile grubun yeni sesi.",
    story: [
      "Vokalist değişimi sonrası birçok hayran grubun geleceğinden emin değildi. Human, bu soruya verilen yanıt oldu: Matt Walst'un daha sert, daha yüksek perdeli vokali ve ilk albümün prodüktörü Gavin Brown'un geri dönüşüyle grup köklerine yaklaştı.",
      "\"Painkiller\" ve \"I Am Machine\" art arda Mainstream Rock listesinde 1 numaraya çıktı; böylece grup bu listede en çok zirveye çıkan isimler arasına girdi. Albüm, teknolojinin içinde insan kalmaya çalışmak temasını işliyor.",
    ],
    artistInfo:
      "Human, Matt Walst'un vokalist olarak katıldığı ilk Three Days Grace albümü. Walst ve Brad Walst kardeş olduğu için grup, üyeleri aile bağıyla bağlı nadir rock gruplarından biri hâline geldi.",
    members: ["Matt Walst – vokal", "Barry Stock – solo gitar", "Brad Walst – bas", "Neil Sanderson – davul, klavye, geri vokal"],
    funFacts: [
      "\"Painkiller\", albümden dokuz ay önce yayımlandı ve Matt Walst'lu kadronun ilk 1 numarası oldu.",
      "Albüm kapağındaki figür, insan ve makine arasındaki çizgiyi sorgulayan albüm temasını yansıtıyor.",
      "Gavin Brown, ilk albümden 12 yıl sonra grupla yeniden çalıştı.",
    ],
    relatedTo: ["Three Days Grace"],
  },

  // ───────────────────────── The Pretty Reckless ─────────────────────────
  {
    slug: "the-pretty-reckless-light-me-up",
    artist: "The Pretty Reckless",
    title: "Light Me Up",
    year: 2010,
    deezerId: 321208987,
    genres: ["Hard rock", "Alternatif rock"],
    origin: "New York City, ABD",
    why: "Taylor Momsen'in oyunculuğu bırakıp rock yıldızına dönüştüğü çıkış albümü.",
    story: [
      "Gossip Girl'ün Jenny Humphrey'i olarak tanınan Taylor Momsen, 15 yaşında oyunculuktan çok müzik yapmak istediğini fark etti. Gitarist ve söz yazarı Ben Phillips ile prodüktör Kato Khandwala'yla tanışması her şeyi değiştirdi: birlikte Light Me Up'ın şarkılarını yazdılar.",
      "\"Make Me Wanna Die\", Kick-Ass filminin soundtrack'inde yer alarak grubun ilk hit'i oldu. İngiltere'de Top 10'a giren albüm, 1990'ların grunge ve klasik hard rock'ından beslenen bir sesle 'çocuk yıldız' etiketini kırdı.",
    ],
    artistInfo:
      "The Pretty Reckless, 2009'da New York'ta kuruldu: Taylor Momsen (vokal), Ben Phillips (gitar), Mark Damon (bas) ve Jamie Perkins (davul). Grup, kadın vokalli rock grupları arasında Billboard Mainstream Rock listesinde en çok 1 numara elde eden isim oldu.",
    members: ["Taylor Momsen – vokal", "Ben Phillips – gitar, geri vokal", "Mark Damon – bas", "Jamie Perkins – davul"],
    funFacts: [
      "Momsen, 2000 yapımı 'The Grinch' filminde Cindy Lou Who'yu oynayan çocuk oyuncuydu.",
      "Grup başta 'The Reckless' adını kullanmak istedi ancak marka sorunları nedeniyle 'Pretty' eklendi.",
      "\"Just Tonight\" ve \"Miss Nothing\" gibi şarkılar Momsen 16 yaşındayken yazıldı.",
    ],
    relatedTo: ["The Pretty Reckless"],
  },
  {
    slug: "the-pretty-reckless-going-to-hell",
    artist: "The Pretty Reckless",
    title: "Going to Hell",
    year: 2014,
    deezerId: 321177877,
    genres: ["Hard rock", "Blues rock"],
    origin: "New York City, ABD",
    why: "\"Heaven Knows\" ve \"Follow Me Down\" — grubun kariyerini değiştiren ikinci albüm.",
    story: [
      "Albümün kaydı 2012'de neredeyse tamamlanmıştı ki Sandy Kasırgası New Jersey'deki stüdyoyu sular altında bıraktı. Ekipmanların ve kayıtların bir kısmı kaybolan grup, şarkıların bazılarını sıfırdan yeniden kaydetmek zorunda kaldı.",
      "Buna rağmen Going to Hell grubun büyük çıkışı oldu. Stadyum korosu gibi bir nakarata sahip \"Heaven Knows\", Billboard Mainstream Rock listesinde 1 numaraya çıktı; \"Messed Up World\" ve \"Follow Me Down\" onu takip etti. Albüm günah, arzu ve kurtuluş üzerine kurulu karanlık, bluesy bir hard rock kaydı.",
    ],
    artistInfo:
      "The Pretty Reckless bu albümle 'oyuncu projesi' algısını tamamen yıktı. Grubun Kato Khandwala ile kurduğu prodüksiyon ortaklığı en olgun hâline ulaştı.",
    members: ["Taylor Momsen – vokal", "Ben Phillips – gitar, geri vokal", "Mark Damon – bas", "Jamie Perkins – davul"],
    funFacts: [
      "Kapakta Momsen'in çıplak sırtına boyayla çizilmiş bir haç var; görsel bazı mağazalarda sansürlendi.",
      "Grup, Mainstream Rock listesinde art arda iki 1 numara elde eden ilk kadın vokalli grup oldu.",
      "Albüm Billboard 200'e 5 numaradan girdi — grubun o güne kadarki en yüksek açılışı.",
    ],
    relatedTo: ["The Pretty Reckless"],
  },
  {
    slug: "the-pretty-reckless-who-you-selling-for",
    artist: "The Pretty Reckless",
    title: "Who You Selling For",
    year: 2016,
    deezerId: 14344126,
    genres: ["Hard rock", "Blues rock", "Soul"],
    origin: "New York City, ABD",
    why: "Pretty Reckless'in 70'ler rock'ına ve blues'a en çok yaslandığı, en olgun albümü.",
    story: [
      "Going to Hell turnesinin yorgunluğuyla yazılan üçüncü albüm, grubun Led Zeppelin, Pink Floyd ve Soundgarden sevgisini açıkça sergiliyor. \"Take Me Down\" (bir müzisyenin şeytanla anlaşmasını anlatan blues masalı) Mainstream Rock'ta 1 numaraya çıktı ve grubu bu listede en çok zirve gören kadın vokalli grup yaptı.",
      "\"Back to the River\"da Allman Brothers Band ve Gov't Mule'dan Warren Haynes slide gitar çalıyor. Albüm adı, 'Kime satıyorsun kendini?' sorusuyla müzik endüstrisinin gösteriş kültürünü sorguluyor.",
    ],
    artistInfo:
      "Momsen bu albümde vokal olarak en geniş yelpazesini sergiliyor: fısıltıdan gospel çığlığına. Grup, aynı dönemde Soundgarden'ın açılış grubu olarak turneye çıktı.",
    members: ["Taylor Momsen – vokal", "Ben Phillips – gitar, geri vokal", "Mark Damon – bas", "Jamie Perkins – davul"],
    funFacts: [
      "\"Take Me Down\", blues efsanesi Robert Johnson'ın kavşakta şeytanla anlaşma hikâyesini yeniden anlatır.",
      "Albüm turnesinde grup, Chris Cornell'in son turnesi olan Soundgarden turnesine eşlik etti.",
      "\"Take Me Down\", grubun Mainstream Rock listesindeki dördüncü 1 numarası oldu.",
    ],
    relatedTo: ["The Pretty Reckless"],
  },
  {
    slug: "the-pretty-reckless-death-by-rock-and-roll",
    artist: "The Pretty Reckless",
    title: "Death by Rock and Roll",
    year: 2021,
    deezerId: 205349052,
    genres: ["Hard rock", "Grunge"],
    origin: "New York City, ABD",
    why: "Kayıp ve yasın ardından yeniden ayağa kalkış; Soundgarden üyeleriyle kaydedilmiş bir veda.",
    story: [
      "2017'de The Pretty Reckless, Soundgarden'ın açılış grubuydu; Chris Cornell'in ölümü Momsen için yıkıcı oldu. Bir yıl sonra grubun uzun süreli prodüktörü ve beşinci üyesi gibi gördükleri Kato Khandwala bir motosiklet kazasında hayatını kaybetti. Momsen ağır bir depresyona girdi ve sahneden uzaklaştı.",
      "Death by Rock and Roll bu yasın albümü. Albüm adı Kato'nun sık kullandığı bir sözden geliyor. \"Only Love Can Save Me Now\"da Soundgarden'dan Matt Cameron ve Kim Thayil, \"And So It Went\"te Rage Against the Machine'den Tom Morello çalıyor. Albüm, grubun Mainstream Rock listesinde art arda üç 1 numara elde etmesini sağladı.",
    ],
    artistInfo:
      "Grubun Kato Khandwala olmadan yaptığı ilk albüm; prodüksiyonu Jonathan Wyman, Momsen ve Phillips üstlendi. Albüm Billboard'un Top Rock Albums listesine 1 numaradan girdi.",
    members: ["Taylor Momsen – vokal", "Ben Phillips – gitar, geri vokal", "Mark Damon – bas", "Jamie Perkins – davul"],
    funFacts: [
      "Albüm, Billboard Top Rock Albums listesine 1 numaradan girdi.",
      "\"Only Love Can Save Me Now\", Soundgarden'ın Seattle'daki London Bridge Studio'sunda kaydedildi.",
      "\"25\" adlı şarkı, Momsen'in 25 yaşında hayatının karanlık noktasında hissettiklerini anlatıyor.",
    ],
    relatedTo: ["The Pretty Reckless"],
  },

  // ───────────────────────── Breaking Benjamin ─────────────────────────
  {
    slug: "breaking-benjamin-we-are-not-alone",
    artist: "Breaking Benjamin",
    title: "We Are Not Alone",
    year: 2004,
    deezerId: 11019040,
    genres: ["Post-grunge", "Alternatif metal"],
    origin: "Wilkes-Barre, Pennsylvania, ABD",
    why: "\"So Cold\" ve \"Sooner or Later\" — Breaking Benjamin'i ana akıma taşıyan albüm.",
    story: [
      "Pennsylvania'nın işçi kasabası Wilkes-Barre'dan çıkan grubun ikinci albümü, prodüktör David Bendeth ile ilk iş birliğiydi. Bendeth grubun sesini sertleştirdi ve Ben Burnley'nin melodik vokalini ön plana çıkardı.",
      "Albümün sürpriz ismi Billy Corgan'dı: Smashing Pumpkins'in lideri, \"Follow\", \"Forget It\" ve \"Rain\" şarkılarının yazımında gruba katıldı. \"So Cold\" grubun ilk büyük radyo hiti oldu ve albüm platin sertifika aldı.",
    ],
    artistInfo:
      "Breaking Benjamin, Benjamin Burnley'nin yönetiminde 1999'da kuruldu. Grubun adı, Burnley'nin bir open-mic gecesinde ödünç aldığı mikrofonu kırmasının ardından sahibinin 'Benjamin'e mikrofonumu kırdığı için teşekkür ediyorum' demesinden geliyor.",
    members: ["Benjamin Burnley – vokal, ritim gitar", "Aaron Fink – solo gitar", "Mark Klepaski – bas", "Jeremy Hummel – davul"],
    funFacts: [
      "\"So Cold\", Mainstream Rock listesinde 2 numaraya kadar yükseldi.",
      "\"Rain\" şarkısının iki versiyonu var: albümdeki elektrik versiyon ve daha sonra yayımlanan akustik versiyon.",
      "Davulcu Jeremy Hummel bu albümden sonra gruptan ayrıldı; yerine Chad Szeliga geçti.",
    ],
    relatedTo: ["Breaking Benjamin"],
  },
  {
    slug: "breaking-benjamin-phobia",
    artist: "Breaking Benjamin",
    title: "Phobia",
    year: 2006,
    deezerId: 13793191,
    genres: ["Alternatif metal", "Post-grunge"],
    origin: "Wilkes-Barre, Pennsylvania, ABD",
    why: "\"The Diary of Jane\" ve \"Breath\" ile Breaking Benjamin'in en ikonik albümü.",
    story: [
      "Albümün adı Ben Burnley'nin gerçek korkularına gönderme yapıyor — özellikle uçuş korkusuna. Açılış parçası \"Intro\"da bir havaalanı anonsu ve uçak sesleri duyulur; grup yıllarca Avrupa turnesine çıkamamasının nedeni de bu korkuydu.",
      "Billboard 200'e 2 numaradan giren Phobia, \"The Diary of Jane\" ile grubun imza şarkısını verdi. \"Breath\" Mainstream Rock listesinde 1 numaraya çıktı. David Bendeth'in prodüksiyonu, gitar duvarlarını ve Burnley'nin katmanlı vokal armonilerini grubun kalıcı sesi hâline getirdi.",
    ],
    artistInfo:
      "Chad Szeliga'nın davulda yer aldığı ilk albüm. Phobia, Breaking Benjamin'in o güne kadarki en yüksek satan albümü oldu ve çok geçmeden platin sertifika aldı.",
    members: ["Benjamin Burnley – vokal, ritim gitar", "Aaron Fink – solo gitar", "Mark Klepaski – bas", "Chad Szeliga – davul"],
    funFacts: [
      "\"The Diary of Jane\" iki farklı klibe sahip: biri hikâye anlatan, diğeri sadece performans.",
      "Albümün intro'sundaki uçak sesi, Burnley'nin uçma korkusuyla yüzleşmesinin bir sembolü.",
      "\"Had Enough\" ve \"Until the End\", albüm turnesinde setlistin değişmez kapanış parçaları oldu.",
    ],
    relatedTo: ["Breaking Benjamin"],
  },
  {
    slug: "breaking-benjamin-dear-agony",
    artist: "Breaking Benjamin",
    title: "Dear Agony",
    year: 2009,
    deezerId: 426788,
    genres: ["Alternatif metal", "Hard rock"],
    origin: "Wilkes-Barre, Pennsylvania, ABD",
    why: "\"I Will Not Bow\" ve başlık şarkısı: Burnley'nin acıyla yazdığı mektup.",
    story: [
      "Dear Agony, Ben Burnley'nin uzun süredir yaşadığı ve teşhis edilemeyen sağlık sorunlarıyla mücadelesinin albümü. Başlık şarkısı doğrudan acının kendisine yazılmış bir mektup gibidir.",
      "\"I Will Not Bow\" Bruce Willis'in Surrogates filminin fragmanında kullanıldı ve Mainstream Rock listesinde 1 numaraya çıktı. Albüm Billboard 200'e 4 numaradan girdi. Bu, orijinal kadronun son albümü oldu: 2010'da grup ara verdi ve 2011'de Burnley, izinsiz bir remix yayımladıkları gerekçesiyle Aaron Fink ve Mark Klepaski'yi gruptan çıkardı.",
    ],
    artistInfo:
      "David Bendeth ile yapılan üçüncü ve son albüm. Jasen Rauch (o dönem Red grubundan) bazı şarkıların yazımına katkıda bulundu ve yıllar sonra grubun gitaristi oldu.",
    members: ["Benjamin Burnley – vokal, ritim gitar", "Aaron Fink – solo gitar", "Mark Klepaski – bas", "Chad Szeliga – davul"],
    funFacts: [
      "Albüm kapağındaki görüntü bir tıbbi tarama görselinden esinlenerek tasarlandı; sağlık teması albümün merkezinde.",
      "\"Anthem of the Angels\" konserlerde çoğu zaman sadece Burnley ve gitarla, akustik olarak çalınır.",
      "Grubun 2014'teki dönüşüne kadar bu albüm, hayranların beş yıl boyunca dinlediği son yeni kayıt oldu.",
    ],
    relatedTo: ["Breaking Benjamin"],
  },
  {
    slug: "breaking-benjamin-dark-before-dawn",
    artist: "Breaking Benjamin",
    title: "Dark Before Dawn",
    year: 2015,
    deezerId: 10537870,
    genres: ["Alternatif metal", "Hard rock"],
    origin: "Wilkes-Barre, Pennsylvania, ABD",
    why: "Beş yıllık sessizlikten sonra gelen geri dönüş — ve grubun ilk 1 numaralı albümü.",
    story: [
      "Hukuki mücadeleler ve sağlık sorunlarının ardından Ben Burnley grubu tamamen yeni bir kadroyla kurdu: Keith Wallen, Jasen Rauch, Aaron Bruch ve Shaun Foist. Yeni kadronun en belirgin farkı, dört üyenin de vokal yapabilmesiydi; albümdeki koro armonileri buradan geliyor.",
      "Burnley'nin kendisinin prodüksiyonunu yaptığı Dark Before Dawn, Billboard 200'e 1 numaradan girerek grubun kariyerindeki ilk zirve oldu. \"Failure\" Mainstream Rock listesinde 1 numaraya çıktı; \"Angels Fall\" ve \"Ashes of Eden\" onu izledi.",
    ],
    artistInfo:
      "Bu albümle Breaking Benjamin, Ben Burnley'nin hikâyesi ve yeni bir grubun enerjisini birleştirdi. Kadro o günden beri değişmedi.",
    members: ["Benjamin Burnley – vokal, ritim gitar", "Keith Wallen – gitar, geri vokal", "Jasen Rauch – solo gitar, geri vokal", "Aaron Bruch – bas, geri vokal", "Shaun Foist – davul"],
    funFacts: [
      "Albümün adı 'şafaktan önceki karanlık' deyişine gönderme: grubun en zor yıllarından sonra gelen sabah.",
      "Jasen Rauch, Dear Agony döneminde şarkı yazarı olarak gruba katkı vermişti; altı yıl sonra üye olarak geri döndü.",
      "\"Failure\", yeni kadronun yayımladığı ilk şarkı oldu ve doğrudan listelerin tepesine yürüdü.",
    ],
    relatedTo: ["Breaking Benjamin"],
  },

  // ───────────────────────── Panic! At the Disco ─────────────────────────
  {
    slug: "panic-at-the-disco-a-fever-you-cant-sweat-out",
    artist: "Panic! At the Disco",
    title: "A Fever You Can't Sweat Out",
    year: 2005,
    deezerId: 344626,
    genres: ["Pop punk", "Barok pop", "Dans-punk"],
    origin: "Las Vegas, Nevada, ABD",
    why: "\"I Write Sins Not Tragedies\" — daha hiç konser vermemiş bir grubun efsane çıkışı.",
    story: [
      "Las Vegas'ın Summerlin banliyösünden lise arkadaşları olan grup, demolarını PureVolume'a yükledi ve Fall Out Boy'un basçısı Pete Wentz'e link attı. Wentz demoları dinledi, Vegas'a uçtu ve grubu daha tek bir konser bile vermemişken Decaydance/Fueled by Ramen'a imzalattı.",
      "Albüm bilinçli olarak iki yarıya bölünmüştür: ilk yarı synth ağırlıklı dans-punk, \"Intermission\" sonrası ikinci yarı ise akordeon ve klavsenle bezenmiş vodvil/barok pop. Ryan Ross'un Chuck Palahniuk ve Douglas Coupland romanlarından beslenen uzun şarkı isimleri ve \"I Write Sins Not Tragedies\" klibinin MTV'den aldığı Yılın Klibi ödülü, grubu emo kuşağının en garip ve en popüler ismi yaptı.",
    ],
    artistInfo:
      "Panic! At the Disco 2004'te Brendon Urie (vokal), Ryan Ross (gitar, ana söz yazarı), Spencer Smith (davul) ve Brent Wilson (bas) tarafından kuruldu. Grup adı Name Taken'ın \"Panic\" şarkısından geliyor.",
    members: ["Brendon Urie – vokal, gitar, klavye", "Ryan Ross – gitar, geri vokal, sözler", "Spencer Smith – davul", "Brent Wilson – bas"],
    funFacts: [
      "\"Time to Dance\" tamamen Chuck Palahniuk'un Invisible Monsters romanına dayanıyor.",
      "Grup albümü yayımlandığı sırada üyelerin çoğu henüz 18-19 yaşındaydı ve Urie başta sadece gitarist olarak katılmıştı.",
      "\"I Write Sins Not Tragedies\", kliple birlikte aynı zamanda bir sirk-düğün estetiğinin yıllarca grupla özdeşleşmesine neden oldu.",
    ],
    relatedTo: ["Panic! At the Disco"],
  },
  {
    slug: "panic-at-the-disco-pretty-odd",
    artist: "Panic! At the Disco",
    title: "Pretty. Odd.",
    year: 2008,
    deezerId: 92592,
    genres: ["Psikedelik pop", "Barok pop", "Folk rock"],
    origin: "Las Vegas, Nevada, ABD",
    why: "Panic'in Beatles'a yazdığı aşk mektubu — kütüphanendeki iki dünyayı birleştiren albüm.",
    story: [
      "İlk albümün başarısından sonra grup, 'Cricket & Clover' adlı bir konsept albüm üzerinde aylarca çalıştı ve sonra tamamını çöpe attı. Sıfırdan başladıklarında pusulaları Beatles, Beach Boys ve Kinks'ti. Ünlem işaretini de isimden attılar.",
      "Prodüktör Rob Mathes ile Abbey Road Studios'ta yaylılar kaydeden grup, \"Nine in the Afternoon\" ve \"That Green Gentleman\" gibi güneşli, psikedelik şarkılar üretti. Emo hayranlarını şaşırtan bu dönüş, bugün grubun en çok saygı duyulan albümlerinden biri. Albümden sonra Ryan Ross ve Jon Walker gruptan ayrılarak The Young Veins'i kurdu.",
    ],
    artistInfo:
      "Jon Walker'ın basta yer aldığı tek Panic! stüdyo albümü. Ryan Ross bu albümde bazı şarkılarda solo vokal de yapıyor; iki farklı yazarın sesini duyabildiğiniz son Panic! kaydı.",
    members: ["Brendon Urie – vokal, gitar, klavye", "Ryan Ross – gitar, vokal, sözler", "Jon Walker – bas, geri vokal", "Spencer Smith – davul"],
    funFacts: [
      "Yaylı bölümleri, Beatles'ın kaydettiği Abbey Road Studios'ta kaydedildi.",
      "\"Nearly Witches\" adlı şarkı Cricket & Clover'dan kurtarıldı ve üç yıl sonra Vices & Virtues'da yer aldı.",
      "Albüm ünlem işareti olmadan yayımlanan tek Panic! albümü; işaret 2009'da geri geldi.",
    ],
    relatedTo: ["Panic! At the Disco", "The Beatles"],
  },
  {
    slug: "panic-at-the-disco-vices-and-virtues",
    artist: "Panic! At the Disco",
    title: "Vices & Virtues",
    year: 2011,
    deezerId: 928878,
    genres: ["Pop rock", "Barok pop", "Alternatif rock"],
    origin: "Las Vegas, Nevada, ABD",
    why: "İkiye düşen bir grubun ayakta kalma albümü: \"The Ballad of Mona Lisa\".",
    story: [
      "Ryan Ross ve Jon Walker'ın ayrılığıyla geriye Brendon Urie ve Spencer Smith kaldı. İki kişi kalmış bir grubun bitmesi bekleniyordu; onun yerine John Feldmann ve Butch Walker ile stüdyoya girip ilk albümün teatral enerjisini geri getirdiler.",
      "Steampunk estetiğiyle sunulan albüm, \"The Ballad of Mona Lisa\" ile Alternative listelerinde üst sıralara çıktı. Urie ilk kez sözlerin çoğunu kendi yazdı; albüm boyunca hem 'ben hâlâ buradayım' mesajı hem de kayıp arkadaşlıklara dair burukluk hissedilir.",
    ],
    artistInfo:
      "Urie ve Smith'in ikili olarak yaptığı tek albüm; Dallon Weekes turnelerde basa geçti ve daha sonra resmi üye oldu. Spencer Smith 2015'te gruptan ayrıldı.",
    members: ["Brendon Urie – vokal, gitar, klavye, bas", "Spencer Smith – davul"],
    funFacts: [
      "\"Nearly Witches\" Pretty. Odd. öncesinde iptal edilen albümden gelen tek şarkı.",
      "Albüm başlığı, insanı insan yapan kusur ve erdemlerin dengesine gönderme yapıyor.",
      "\"The Ballad of Mona Lisa\" klibi Viktorya dönemi bir cenaze evinde geçer ve steampunk temalı kostümler kullanır.",
    ],
    relatedTo: ["Panic! At the Disco"],
  },
  {
    slug: "panic-at-the-disco-death-of-a-bachelor",
    artist: "Panic! At the Disco",
    title: "Death of a Bachelor",
    year: 2016,
    deezerId: 12107828,
    genres: ["Pop rock", "Swing", "Alternatif"],
    origin: "Las Vegas, Nevada, ABD",
    why: "Brendon Urie'nin tek kişilik şovu: Sinatra ve Queen'in buluştuğu 1 numaralı albüm.",
    story: [
      "Spencer Smith'in ayrılığıyla Panic! resmen tek kişiye indi. Urie albümün çoğunu evindeki stüdyoda tek başına yazdı ve kaydetti. İlham kaynakları Frank Sinatra'nın crooner tavrı ve Queen'in taşkın rock operasıydı.",
      "Albüm, Billboard 200'e 1 numaradan girerek grubun ilk zirve albümü oldu ve Grammy'de En İyi Rock Albümü adaylığı aldı. \"Victorious\", \"Emperor's New Clothes\", \"Hallelujah\" ve \"LA Devotee\" ile Urie, artık bir 'grup' değil bir sahne kişiliği olduğunu ilan etti. Başlık, evlenmesiyle biten bekârlık hayatına gönderme.",
    ],
    artistInfo:
      "Death of a Bachelor, Panic! At the Disco'nun Urie'nin solo projesine dönüştüğü albüm. Dallon Weekes turnelerde bas çalmaya devam etti ancak kayıtlara katılmadı.",
    members: ["Brendon Urie – vokal, tüm enstrümanlar", "Dallon Weekes – bas (turne)"],
    funFacts: [
      "\"Death of a Bachelor\" şarkısında Urie'nin ilham kaynağı Sinatra'nın 'My Way'i ve Beyoncé'nin 'Drunk in Love'ının ritmi.",
      "\"Emperor's New Clothes\" klibi, \"This Is Gospel\" klibinin kaldığı yerden devam eden bir hikâye.",
      "\"Crazy=Genius\" ve \"Impossible Year\" swing ve big band caz geleneğinden besleniyor; Urie bu şarkılar için canlı nefesli çalgılar kaydetti.",
    ],
    relatedTo: ["Panic! At the Disco"],
  },

  // ───────────────────────── The Neighbourhood ─────────────────────────
  {
    slug: "the-neighbourhood-i-love-you",
    artist: "The Neighbourhood",
    title: "I Love You.",
    year: 2013,
    deezerId: 6505633,
    genres: ["Alternatif rock", "Bağımsız pop", "Karanlık pop"],
    origin: "Newbury Park, Kaliforniya, ABD",
    why: "\"Sweater Weather\"ın albümü: siyah-beyaz estetik, hip-hop ritimleri ve Kaliforniya melankolisi.",
    story: [
      "Newbury Park'tan gelen beşli, 2011'de kurulduktan iki yıl sonra ilk albümüyle geldi. Grup her şeyi siyah-beyaz tutmaya karar verdi: kapaklar, klipler, sahne. Bu görsel disiplin, karanlık R&B ritimleriyle indie rock'ı birleştiren seslerinin uzantısıydı.",
      "\"Sweater Weather\" Billboard Alternative listesinde 1 numaraya çıktı; yıllar sonra TikTok ile yeniden keşfedilip milyarlarca dinlenmeye ulaşan bir kült şarkı hâline geldi. \"Afraid\", \"Female Robbery\" ve \"Let It Go\" ise albümün karanlık, sinematik tarafını temsil eder.",
    ],
    artistInfo:
      "The Neighbourhood: Jesse Rutherford (vokal), Jeremy Freedman ve Zach Abels (gitar), Mikey Margott (bas) ve Bryan Sammis (davul). İngiliz yazımı 'Neighbourhood', aynı isimli bir Amerikan grubuyla karışmamak için seçildi.",
    members: ["Jesse Rutherford – vokal", "Jeremy Freedman – gitar", "Zach Abels – gitar", "Mikey Margott – bas", "Bryan Sammis – davul"],
    funFacts: [
      "\"Sweater Weather\" yıllar sonra biseksüel topluluğun gayriresmi marşı hâline geldi; grup bunu benimsedi.",
      "Grup uzun yıllar boyunca renkli hiçbir görsel yayımlamadı; renk ancak 2015'te Wiped Out! ile geldi.",
      "Davulcu Bryan Sammis albümden bir yıl sonra gruptan ayrıldı; yerine Brandon Fried geçti.",
    ],
    relatedTo: ["The Neighbourhood"],
  },
  {
    slug: "the-neighbourhood-wiped-out",
    artist: "The Neighbourhood",
    title: "Wiped Out!",
    year: 2015,
    deezerId: 11539620,
    genres: ["Alternatif R&B", "Bağımsız rock", "Karanlık pop"],
    origin: "Newbury Park, Kaliforniya, ABD",
    why: "\"Daddy Issues\" ve \"R.I.P. 2 My Youth\" — gece sürüşleri için yazılmış bir albüm.",
    story: [
      "İkinci albümde grup R&B ve hip-hop etkilerini derinleştirdi ve siyah-beyaz kuralını gevşetti. Albüm, Jesse Rutherford'un çocukken babasını kaybetmesinin izlerini taşıyan \"Daddy Issues\" ile kişisel, \"R.I.P. 2 My Youth\" ile kuşaksal bir yas albümü.",
      "Albüm, sörf kültürünün 'wipe out' (dalgaya kapılıp düşmek) tabiriyle Kaliforniya'nın karanlık tarafını anlatıyor. \"Daddy Issues\", tıpkı \"Sweater Weather\" gibi yıllar sonra internet üzerinden ikinci bir hayat kazandı.",
    ],
    artistInfo:
      "Brandon Fried'ın davulda yer aldığı ilk albüm. Grup bu dönemde Rutherford'un hip-hop tutkusunu (solo mixtape'leri de dahil) kayıtlara daha açık yansıtmaya başladı.",
    members: ["Jesse Rutherford – vokal", "Jeremy Freedman – gitar", "Zach Abels – gitar", "Mikey Margott – bas", "Brandon Fried – davul"],
    funFacts: [
      "Albümün açılış parçası \"A Moment of Silence\" gerçekten 30 saniyelik sessizlikten ibaret.",
      "\"Daddy Issues\" yayımlandıktan altı yıl sonra Spotify'da milyar dinlenmeyi aştı.",
      "Albümün adı sörf jargonundan geliyor: 'wipe out', dalgaya kapılıp düşmek demek.",
    ],
    relatedTo: ["The Neighbourhood"],
  },
  {
    slug: "the-neighbourhood-hard-to-imagine",
    artist: "The Neighbourhood",
    title: "Hard to Imagine the Neighbourhood Ever Changing",
    year: 2018,
    deezerId: 77068962,
    genres: ["Alternatif rock", "Synth-pop", "Karanlık pop"],
    origin: "Newbury Park, Kaliforniya, ABD",
    why: "\"Scary Love\", \"Softcore\" ve \"Stuck with Me\" — grubun 2017-18 döneminin tamamı tek yerde.",
    story: [
      "Grup 2017-2018 arasında üç EP (Hard, To Imagine, Ever Changing) ve kendi adını taşıyan bir albüm yayımladı. Bu yayınların isimleri birleştirildiğinde 'Hard To Imagine The Neighbourhood Ever Changing' cümlesi ortaya çıkıyor; bu derleme de bu dönemin tüm şarkılarını bir araya getiriyor.",
      "Synth'ler, 80'ler etkileri ve Rutherford'un en pop melodileri bu dönemde yer alıyor. \"Softcore\" ve \"Scary Love\" TikTok ve Spotify'da grubun yeni kuşak hitleri oldu; \"Stuck with Me\" ve \"You Get Me So High\" ise grubun en nostaljik yanını gösteriyor.",
    ],
    artistInfo:
      "The Neighbourhood bu dönemde Kaliforniya'nın melankolik pop'unun en tanınan yüzlerinden biriydi. Bir sonraki albümleri Chip Chrome & The Mono-Tones (2020) ile Rutherford gümüş boyalı bir alter egoya dönüşecekti.",
    members: ["Jesse Rutherford – vokal", "Jeremy Freedman – gitar", "Zach Abels – gitar", "Mikey Margott – bas", "Brandon Fried – davul"],
    funFacts: [
      "EP'lerin ve albümün isimleri birleşerek tek bir cümle oluşturuyor.",
      "\"Softcore\" yayımlandıktan yıllar sonra 2021-22'de TikTok sayesinde grubun en çok dinlenen şarkılarından biri oldu.",
      "Grup bu dönemde ilk kez şarkılarını yıl içinde birkaç EP hâlinde yayımlama stratejisini denedi.",
    ],
    relatedTo: ["The Neighbourhood"],
  },

  // ───────────────────────── Imagine Dragons ─────────────────────────
  {
    slug: "imagine-dragons-night-visions",
    artist: "Imagine Dragons",
    title: "Night Visions",
    year: 2012,
    deezerId: 5668261,
    genres: ["Pop rock", "Alternatif rock", "Bağımsız pop"],
    origin: "Las Vegas, Nevada, ABD",
    why: "\"Radioactive\", \"Demons\", \"It's Time\" — Imagine Dragons'ı dünyaya tanıtan çıkış albümü.",
    story: [
      "Dan Reynolds, üniversitede tanıştığı Wayne Sermon, Ben McKee ve Daniel Platzman ile Las Vegas kulüplerinde yıllarca çaldı. Büyük fırsat, 2009'da Bite of Las Vegas festivalinde Train sahneye çıkamayınca 26.000 kişinin önünde onların yerine çalmalarıyla geldi.",
      "Prodüktör Alex da Kid ile kaydedilen Night Visions, \"Radioactive\" ile tarih yazdı: şarkı Billboard Hot 100'de 87 hafta kalarak o dönemin rekorunu kırdı ve Grammy'de En İyi Rock Performansı ödülünü aldı. \"Demons\" ve \"It's Time\" ile albüm dünya çapında on milyonlarca sattı.",
    ],
    artistInfo:
      "Imagine Dragons: Dan Reynolds (vokal), Wayne Sermon (gitar), Ben McKee (bas) ve Daniel Platzman (davul). Grubun adı, üyelerin sadece kendilerinin bildiği bir kelime grubunun anagramı.",
    members: ["Dan Reynolds – vokal, davul", "Wayne Sermon – gitar", "Ben McKee – bas, klavye", "Daniel Platzman – davul, viyola"],
    funFacts: [
      "\"Radioactive\" Hot 100'de 87 hafta kalarak o güne kadarki en uzun süre listede kalan şarkı oldu.",
      "Grup üyelerinin üçü Berklee College of Music'te okudu; Reynolds ise BYU'da.",
      "Albüm çıktığında Reynolds'un konserlerde vurduğu dev davul, grubun sahne imzasına dönüştü.",
    ],
    relatedTo: ["Imagine Dragons"],
  },
  {
    slug: "imagine-dragons-smoke-and-mirrors",
    artist: "Imagine Dragons",
    title: "Smoke + Mirrors",
    year: 2015,
    deezerId: 9659730,
    genres: ["Alternatif rock", "Pop rock"],
    origin: "Las Vegas, Nevada, ABD",
    why: "Şöhretin ardındaki şüpheler: Imagine Dragons'ın en kişisel ve rock ağırlıklı albümü.",
    story: [
      "Night Visions'ın devasa turnesinden sonra Dan Reynolds depresyon ve inanç sorgulamalarıyla mücadele ediyordu. Smoke + Mirrors, bu iç hesaplaşmanın albümü: 'duman ve aynalar' deyimi, hem gösteri dünyasının hem de kendi inançlarının illüzyonlarını sorguluyor.",
      "Grup albümü Las Vegas'taki kendi ev stüdyosunda, dış prodüktör olmadan kaydetti. Billboard 200'e 1 numaradan giren albümde \"I Bet My Life\", \"Shots\" ve \"Gold\" öne çıkıyor; gitar tabanlı sesiyle grubun en 'rock' albümü olarak kabul edilir.",
    ],
    artistInfo:
      "Reynolds bu dönemde ankilozan spondilit teşhisiyle yaşadığını açıkladı ve depresyonla ilgili açık sözlü konuşmaya başladı; bu dürüstlük sonraki albümlerin de temelini attı.",
    members: ["Dan Reynolds – vokal", "Wayne Sermon – gitar", "Ben McKee – bas", "Daniel Platzman – davul"],
    funFacts: [
      "Albüm, Las Vegas'ta grubun kendi kurduğu ev stüdyosunda kaydedilen ilk Imagine Dragons kaydı.",
      "\"I Bet My Life\", Reynolds'un ailesiyle yaşadığı gerilim ve barışma hakkında.",
      "Albümün turnesinde grup, Kanada'da devasa bir arena konserini canlı albüm olarak kaydetti.",
    ],
    relatedTo: ["Imagine Dragons"],
  },
  {
    slug: "imagine-dragons-evolve",
    artist: "Imagine Dragons",
    title: "Evolve",
    year: 2017,
    deezerId: 68346981,
    genres: ["Pop rock", "Elektro-pop"],
    origin: "Las Vegas, Nevada, ABD",
    why: "\"Believer\", \"Thunder\" ve \"Whatever It Takes\" — üç dev hit barındıran albüm.",
    story: [
      "Smoke + Mirrors'ın karanlığından sonra Reynolds bilinçli olarak daha aydınlık, daha pop bir albüm yapmak istedi. Adı üstünde 'evrim' geçiren grup, Mattman & Robin ve Joel Little gibi pop prodüktörlerle çalıştı.",
      "Sonuç, üç şarkısı da Hot 100'ün üst sıralarına çıkan ve dünya çapında stadyum turnesi getiren bir albüm oldu. \"Believer\" acının bir öğretmen olduğunu, \"Thunder\" Reynolds'un çocukken 'hayalperest' diye dalga geçilmesini anlatıyor. Albüm Grammy'de En İyi Pop Vokal Albümü adaylığı aldı.",
    ],
    artistInfo:
      "Evolve ile Imagine Dragons dünyanın en çok dinlenen rock gruplarından biri hâline geldi; \"Believer\" ve \"Thunder\" Spotify'da milyarlarca dinlenme aldı.",
    members: ["Dan Reynolds – vokal", "Wayne Sermon – gitar", "Ben McKee – bas", "Daniel Platzman – davul"],
    funFacts: [
      "\"Believer\", Reynolds'un ankilozan spondilit ağrılarıyla ilişkisini 'acı beni inandırdı' fikriyle anlatıyor.",
      "\"Thunder\" klibi Dubai'de çekildi.",
      "Albümün renkli, geometrik kapağı grubun karanlık kapaklarından bilinçli bir kopuş.",
    ],
    relatedTo: ["Imagine Dragons"],
  },

  // ───────────────────────── The Beatles ─────────────────────────
  {
    slug: "the-beatles-rubber-soul",
    artist: "The Beatles",
    title: "Rubber Soul",
    year: 1965,
    deezerId: 161447252,
    genres: ["Folk rock", "Pop rock", "Psikedelik pop"],
    origin: "Liverpool, İngiltere",
    why: "Beatles'ın pop grubundan sanatçıya dönüştüğü an; Brian Wilson'ın Pet Sounds'a ilham veren albüm.",
    story: [
      "1965 sonbaharında Beatles'ın yılbaşı için yeni bir albüme ihtiyacı vardı: Rubber Soul dört haftada yazıldı ve kaydedildi. Bu hız onları durdurmadı; \"Norwegian Wood\"da George Harrison sitar çaldı (bir rock kaydında ilk kez), \"In My Life\"ta George Martin hızlandırılmış piyano ile klavsen sesi yarattı.",
      "Kapaktaki çarpık fotoğraf tamamen kazaydı: fotoğrafçı Robert Freeman slaytı bir karton üzerine yansıtırken karton geriye kaydı ve görüntü uzadı; grup bu hâlini sevdi. Brian Wilson albümü dinledikten sonra Pet Sounds'u yapmaya karar verdi.",
    ],
    artistInfo:
      "The Beatles — John Lennon, Paul McCartney, George Harrison ve Ringo Starr — Rubber Soul ile turne grubu olmaktan stüdyo sanatçısı olmaya doğru ilk büyük adımı attı. Albüm başlığı, 'plastic soul' (sahte soul) tabirinin bir kelime oyunu.",
    members: ["John Lennon – vokal, ritim gitar", "Paul McCartney – vokal, bas, piyano", "George Harrison – solo gitar, sitar, vokal", "Ringo Starr – davul, perküsyon"],
    funFacts: [
      "\"Norwegian Wood\", bir rock şarkısında sitar kullanan ilk kayıt olarak kabul edilir.",
      "Albümün kapağında ilk kez grubun adı yer almıyor — o kadar ünlüydüler ki gereksiz görüldü.",
      "\"In My Life\"ın 'klavsen' solosu aslında yarı hızda çalınıp iki kat hızlandırılmış bir piyano.",
    ],
    relatedTo: ["The Beatles"],
  },
  {
    slug: "the-beatles-revolver",
    artist: "The Beatles",
    title: "Revolver",
    year: 1966,
    deezerId: 161950962,
    genres: ["Psikedelik rock", "Pop rock"],
    origin: "Liverpool, İngiltere",
    why: "Stüdyonun bir enstrümana dönüştüğü albüm: \"Tomorrow Never Knows\" ve \"Eleanor Rigby\".",
    story: [
      "Revolver, Beatles'ın canlı çalamayacağı şarkılar yazdığı ilk albüm. \"Tomorrow Never Knows\"da Lennon'ın vokali dönen bir Leslie hoparlöründen geçirildi, üzerine McCartney'nin evde hazırladığı teyp döngüleri eklendi. \"Eleanor Rigby\"de hiçbir Beatle enstrüman çalmaz — sadece yaylı sekizli vardır.",
      "Albümün kaydı sırasında Abbey Road mühendisi Ken Townsend, vokalleri iki kez kaydetme zahmetinden kurtulmak için ADT (otomatik çift kayıt) tekniğini icat etti. Revolver, grubun son turnesinden hemen önce yayımlandı; şarkıların hiçbiri sahnede çalınmadı.",
    ],
    artistInfo:
      "Revolver'la Beatles, Hamburg günlerinden arkadaşları Klaus Voormann'ın çizdiği kapak da dahil olmak üzere, pop müziğin kurallarını yeniden yazdı. Harrison bu albümde üç şarkıyla ilk kez öne çıktı; \"Taxman\" albümü açar.",
    members: ["John Lennon – vokal, ritim gitar, org", "Paul McCartney – vokal, bas, piyano", "George Harrison – solo gitar, sitar, vokal", "Ringo Starr – davul, perküsyon, vokal"],
    funFacts: [
      "\"Taxman\"deki gitar solosunu George Harrison değil, Paul McCartney çaldı.",
      "Kapağı çizen Klaus Voormann bu iş için Grammy kazandı.",
      "\"Yellow Submarine\"deki ses efektleri için stüdyoya zincirler, çanlar ve su dolu leğenler getirildi.",
    ],
    relatedTo: ["The Beatles"],
  },
  {
    slug: "the-beatles-sgt-peppers",
    artist: "The Beatles",
    title: "Sgt. Pepper's Lonely Hearts Club Band",
    year: 1967,
    deezerId: 162030002,
    genres: ["Psikedelik rock", "Sanat rock'ı", "Pop"],
    origin: "Liverpool, İngiltere",
    why: "Rock tarihinin en çok konuşulan albümü — Grammy'de Yılın Albümü ödülünü alan ilk rock kaydı.",
    story: [
      "Turneleri bırakan Beatles, 1966 sonundan 1967 baharına kadar yaklaşık 700 saat stüdyoda kaldı (ilk albümleri bir günde kaydedilmişti). Paul McCartney'nin 'hayali bir grup olalım' fikri, albüme konsept ve özgürlük verdi.",
      "\"A Day in the Life\"ta 40 kişilik orkestra en pes notadan en tize doğru rastgele çalar, ardından gelen E majör akoru 40 saniyeden uzun sürer. Peter Blake ve Jann Haworth'un tasarladığı kapakta, grubun seçtiği onlarca ünlünün karton figürleri yer alıyor. Sgt. Pepper's, sözlerin kapakta yazılı olduğu ilk rock albümüydü.",
    ],
    artistInfo:
      "Bu albümde Beatles artık sahnede görmek isteyeceğiniz bir grup değil, stüdyoda hayal edebileceğiniz her şeyi yapan bir kolektifti. George Martin'in prodüksiyonu ve Geoff Emerick'in mühendisliği albümün gizli kahramanları.",
    members: ["John Lennon – vokal, gitar, klavye", "Paul McCartney – vokal, bas, piyano, gitar", "George Harrison – gitar, sitar, vokal", "Ringo Starr – davul, vokal"],
    funFacts: [
      "Plağın son kanalına, yalnızca köpeklerin duyabileceği frekansta bir ton yerleştirildi.",
      "\"A Day in the Life\"ın orkestra bölümünde müzisyenlere sahte burunlar ve parti şapkaları taktırıldı.",
      "Kapakta Beatles'ın 1964 dönemine ait balmumu heykelleri de yer alıyor: 'eski Beatles' yeni olanların yanında duruyor.",
    ],
    relatedTo: ["The Beatles"],
  },
  {
    slug: "the-beatles-abbey-road",
    artist: "The Beatles",
    title: "Abbey Road",
    year: 1969,
    deezerId: 164909482,
    genres: ["Rock", "Pop rock", "Progresif pop"],
    origin: "Liverpool, İngiltere",
    why: "Beatles'ın kaydettiği son albüm: \"Come Together\", \"Something\" ve efsanevi B yüzü medley'i.",
    story: [
      "Let It Be seanslarının kaosundan sonra Paul McCartney, George Martin'e 'eskisi gibi bir albüm yapalım' teklifinde bulundu. Abbey Road, grubun bir daha bir araya gelmeyeceğini bilir gibi kaydettiği son albüm oldu (Let It Be daha sonra yayımlandı ama daha önce kaydedilmişti).",
      "B yüzündeki 16 dakikalık medley, yarım kalmış parçaların ustaca birleştirilmesiyle rock tarihinin en sevilen bölümlerinden birine dönüştü. George Harrison'ın \"Something\"i Frank Sinatra tarafından 'son 50 yılın en güzel aşk şarkısı' olarak anıldı; \"Here Comes the Sun\" Eric Clapton'ın bahçesinde yazıldı.",
    ],
    artistInfo:
      "Abbey Road, Beatles'ın 8 kanallı kayıt ve Moog synthesizer kullandığı ilk albüm. Grubun stüdyo dışındaki gerilimine rağmen müzikal olarak en uyumlu işlerinden biri olarak kabul edilir.",
    members: ["John Lennon – vokal, gitar, Moog", "Paul McCartney – vokal, bas, piyano, Moog", "George Harrison – gitar, vokal, Moog", "Ringo Starr – davul, vokal"],
    funFacts: [
      "Kapak fotoğrafı 8 Ağustos 1969 sabahı, bir merdivene çıkan fotoğrafçı Iain Macmillan tarafından yaklaşık 10 dakikada çekildi; sadece altı kare var.",
      "McCartney'nin çıplak ayakla yürümesi 'Paul öldü' komplo teorisini alevlendirdi.",
      "\"Her Majesty\", albümün sonundaki 23 saniyelik gizli parça, yanlışlıkla bantta bırakıldı ve kaldı.",
    ],
    relatedTo: ["The Beatles"],
  },

  // ───────────────────────── Broken Bells ─────────────────────────
  {
    slug: "broken-bells-broken-bells",
    artist: "Broken Bells",
    title: "Broken Bells",
    year: 2010,
    deezerId: 496177,
    genres: ["Bağımsız pop", "Neo-psikedeli", "Alternatif rock"],
    origin: "Los Angeles, Kaliforniya, ABD",
    why: "The Shins'in James Mercer'ı ve Danger Mouse'un buluşması — \"The High Road\" ve \"The Ghost Inside\".",
    story: [
      "James Mercer ve Brian Burton (Danger Mouse) 2004'te Roskilde Festivali'nde tanıştı ve birbirlerinin hayranı olduklarını fark etti. 2008'de Burton'ın Los Angeles stüdyosunda gizlice çalışmaya başladılar; projeyi ancak 2009 sonunda duyurdular.",
      "Albümdeki tüm enstrümanları ikili kendi çaldı. Mercer'ın melankolik melodileri, Burton'ın hip-hop ve 60'lar psikedelisinden beslenen prodüksiyonuyla birleşti. Albüm Grammy'de En İyi Alternatif Albüm adaylığı aldı; \"The Ghost Inside\" klibinde Mad Men'in Christina Hendricks'i başrolde.",
    ],
    artistInfo:
      "Broken Bells, indie rock'ın en tanınan vokallerinden biriyle (The Shins) dönemin en aranan prodüktörünün (Gnarls Barkley, Gorillaz Demon Days, The Black Keys) ortak projesi.",
    members: ["James Mercer – vokal, gitar, bas", "Brian Burton (Danger Mouse) – prodüksiyon, davul, klavye, bas"],
    funFacts: [
      "İkili, müzik yapmaya başladıktan sonra yaklaşık bir yıl boyunca projeyi kamuoyundan sakladı.",
      "Danger Mouse'un ünü, Jay-Z ve Beatles'ı birleştiren yasadışı 'The Grey Album' mash-up'ıyla başlamıştı.",
      "Albüm Billboard 200'e 7 numaradan girdi — her iki müzisyen için de o güne kadarki en yüksek açılış.",
    ],
    relatedTo: ["Broken Bells"],
  },
  {
    slug: "broken-bells-after-the-disco",
    artist: "Broken Bells",
    title: "After the Disco",
    year: 2014,
    deezerId: 7960652,
    genres: ["Bağımsız pop", "Disko", "Synth-pop"],
    origin: "Los Angeles, Kaliforniya, ABD",
    why: "Broken Bells'in Bee Gees falsettosuyla dans pistine indiği, uzay temalı ikinci albümü.",
    story: [
      "İlk albümün başarısından sonra ikili, disco ve 70'ler soft rock'ından beslenen daha hareketli bir albüm yapmak istedi. \"Holding On for Life\"ta Mercer'ın Bee Gees tarzı falsettosu, Burton'ın funk bas hatlarıyla birleşiyor.",
      "Albüm, Kate Mara ve Anton Yelchin'in başrolde olduğu iki bölümlük bir bilim kurgu kısa filmiyle tanıtıldı. 'Partiden sonra' hissi — eğlence bitince gelen boşluk — albümün ana teması. After the Disco Billboard 200'e 5 numaradan girdi.",
    ],
    artistInfo:
      "İkinci albüm, Broken Bells'in artık bir yan proje değil kalıcı bir grup olduğunun kanıtı oldu. Danger Mouse aynı yıllarda The Black Keys ve U2 ile de çalışıyordu.",
    members: ["James Mercer – vokal, gitar, bas", "Brian Burton (Danger Mouse) – prodüksiyon, davul, klavye"],
    funFacts: [
      "\"Angel and the Fool\" ve \"Holding On for Life\" klipleri birleşerek tek bir bilim kurgu kısa filmi oluşturuyor.",
      "Albümün adı, bir gecenin eğlencesinden sonra gelen sessizliği anlatıyor: 'disco sonrası'.",
      "İkili, albümün çoğunu yine yalnızca kendi çaldıkları enstrümanlarla kaydetti.",
    ],
    relatedTo: ["Broken Bells", "The Shins"],
  },
];
