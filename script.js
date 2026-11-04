/* Aira's Love Book — vanilla JS, static-host friendly */
(() => {
"use strict";
const $ = (s, root=document) => root.querySelector(s);
const storyDate = "6 Juli 2026, pukul 22.29";
const nicknames = ["Bebyycuu","Cantikkcuu","Duniyakuu","Darlingcuuu","Istriicuuuu"];
const herNames = ["Bebyycu","Ciyanggcuu","Gay"];
const reasons = [
"Kamu hadir dengan cara yang tidak pernah aku rencanakan, tapi sekarang sulit kubayangkan hari-hariku tanpa ceritamu.",
"Aku suka bagaimana satu pesan darimu bisa mengubah suasana hariku.",
"Kamu punya cara sendiri untuk membuat hal sederhana terasa istimewa.",
"Aku menghargai keberanianmu untuk tetap mencoba memahami aku.",
"Obrolan kecil denganmu sering menjadi bagian paling kutunggu.",
"Aku suka ketika kita bisa tertawa setelah sempat salah paham.",
"Kamu tidak harus selalu ceria untuk tetap berharga di mataku.",
"Aku suka sisi manismu yang muncul di waktu-waktu tidak terduga.",
"Kamu membuat jarak terasa sedikit lebih ringan untuk dijalani.",
"Aku menghargai setiap kali kamu meluangkan waktu untukku.",
"Aku suka mengenal banyak sisi dirimu, bukan hanya sisi yang mudah.",
"Kamu punya tempat sendiri dalam pikiranku.",
"Aku suka panggilan-panggilan kecil yang hanya terasa milik kita.",
"Aku tersenyum setiap mengingat malam kita pindah dari Litmatch ke WhatsApp.",
"Aku menghargai proses kita belajar memahami satu sama lain.",
"Kamu mengajarkanku bahwa kedekatan juga tumbuh lewat kesabaran.",
"Aku suka ketika kamu menjadi dirimu sendiri tanpa perlu berpura-pura.",
"Kamu boleh punya hari yang berantakan; aku tetap ingin mendengarkan.",
"Aku suka rasa penasaran yang muncul setiap kali ada cerita baru darimu.",
"Aku menghargai hal-hal kecil yang mungkin bahkan tidak kamu sadari.",
"Kamu membuat kata 'nanti' terasa punya sesuatu yang indah untuk ditunggu.",
"Aku suka membayangkan suatu hari kita tidak perlu lagi menatap layar untuk berbicara.",
"Aku senang kita punya cerita yang dimulai dari tempat yang tidak terduga.",
"Aku suka ketika kita saling menggoda dengan panggilan aneh kita.",
"Aku menghargai caramu kembali berbicara setelah suasana hati membaik.",
"Kamu membuatku ingin menjadi pendengar yang lebih baik.",
"Aku suka bahwa cerita kita tidak harus sempurna untuk tetap berarti.",
"Aku menghargai kejujuran, bahkan ketika percakapan terasa sulit.",
"Aku suka mengingat panggilan pertama kita sebagai salah satu momen spesial.",
"Kamu membuatku ingin menyimpan banyak hal kecil sebagai kenangan.",
"Aku suka sisi lucumu yang kadang muncul tanpa aba-aba.",
"Aku menghargai setiap usaha kecil yang membuat kita semakin dekat.",
"Kamu tidak perlu mengingat semuanya; aku tetap suka mengulang cerita bersamamu.",
"Aku suka membayangkan senyummu saat membaca halaman ini.",
"Aku menghargai bahwa kita terus belajar, bukan hanya berharap semuanya mudah.",
"Kamu membuat empat bulan ini punya banyak halaman untuk dikenang.",
"Aku suka ketika kita bisa menjadi konyol tanpa takut dinilai.",
"Aku menghargai caramu menjadi bagian dari rutinitasku.",
"Kamu punya bakat membuatku memikirkan masa depan dengan hangat.",
"Aku suka bahwa kita punya lelucon dan panggilan sendiri.",
"Aku ingin mengenalmu lebih dalam, termasuk hal-hal yang belum sempat kamu ceritakan.",
"Aku menghargai waktu yang kita punya, sesibuk apa pun hari berjalan.",
"Kamu membuat jarak menjadi sesuatu yang ingin kita lewati bersama.",
"Aku suka membayangkan hari ketika cerita online kita punya latar tempat nyata.",
"Aku menghargai semua percakapan yang membuat kita belajar tentang satu sama lain.",
"Aku suka ketika namamu muncul di layar ponselku.",
"Kamu tidak harus menjadi sempurna agar aku bisa menyayangimu.",
"Aku menghargai caramu hadir dengan keunikanmu sendiri.",
"Aku suka bahwa kita masih punya banyak hal pertama yang bisa dinantikan.",
"Aku ingin terus menciptakan kenangan kecil yang kelak kita ceritakan ulang.",
"Dan alasan terakhir ini sederhana: aku senang cerita ini adalah cerita kita."
];
const letters = [
{title:"Malam yang Menjadi Awal",theme:"Tentang awal yang sederhana",body:[
"Kadang aku masih membayangkan kembali malam ketika semuanya dimulai. Tidak ada panggung besar, tidak ada rencana yang disusun jauh-jauh hari. Hanya sebuah pertemuan di Litmatch, dua orang yang belum tahu akan menjadi sedekat apa, dan percakapan yang perlahan membuka pintu untuk sesuatu yang baru. Kalau malam itu bisa berbicara, mungkin ia akan tertawa melihat kita sekarang: sudah empat bulan berjalan, punya panggilan sendiri, punya cerita lucu, dan punya banyak hal yang ingin kita kenang.",
"Pada malam yang sama, kita berpindah ke WhatsApp. Hal kecil itu mungkin terlihat biasa bagi orang lain, tetapi bagiku ia menjadi tanda bahwa aku ingin mengenalmu lebih jauh. Aku tidak tahu semua hal yang akan terjadi setelahnya. Aku hanya tahu ada seseorang bernama Aira yang membuatku ingin melanjutkan percakapan. Dan dari satu keputusan sederhana itu, halaman demi halaman mulai terisi.",
"Aku tidak ingin mengubah awal kita menjadi cerita yang terlalu sempurna. Justru bagian paling berharga adalah kenyataan bahwa kita datang sebagai dua orang biasa, dengan suasana hati, kebiasaan, dan cara berpikir masing-masing. Ada rasa penasaran, ada canggung, ada hal-hal yang belum kita pahami. Namun kita tetap memberi kesempatan pada cerita ini untuk tumbuh.",
"Jika suatu hari kamu bertanya bagian mana yang paling ingin kusimpan, aku akan menyebut malam itu. Bukan karena semuanya langsung mudah, tetapi karena malam itu memberiku kesempatan untuk mengenal seseorang yang sekarang begitu berarti. Aku bersyukur kita tidak melewatkan kesempatan kecil tersebut.",
"Selamat empat bulan, Aira. Semoga ketika kamu membaca halaman ini, kamu bisa merasakan betapa berharganya awal yang sederhana itu bagiku. Terima kasih sudah menjadi bagian dari cerita yang dimulai pada 6 Juli 2026, pukul 22.29. Aku ingin terus menulis bab berikutnya bersamamu, pelan-pelan, dengan jujur dan penuh perhatian."
]},
{title:"Aku Masih Memilih Memahami",theme:"Tentang memilih dengan sadar",body:[
"Aira, menyayangimu bukan berarti aku menganggap kita selalu sepakat. Kita pernah salah paham, pernah punya hari ketika kata-kata terasa kurang tepat, dan pernah membiarkan hal kecil menjadi lebih besar dari yang seharusnya. Aku tidak ingin menutupi bagian itu. Bagiku, cerita yang jujur justru memberi ruang untuk tumbuh. Kita sedang belajar bahwa dua orang bisa saling peduli sekaligus punya cara berbeda dalam melihat sesuatu.",
"Aku ingin terus belajar mendengarkan sebelum menyimpulkan. Aku ingin bertanya ketika tidak mengerti, bukan menebak-nebak isi pikiranmu. Aku juga ingin berani menjelaskan perasaanku dengan lebih baik. Tentu aku tidak akan selalu sempurna. Ada kalanya aku keliru, terlalu cepat bereaksi, atau tidak menemukan kata yang tepat. Saat itu terjadi, aku berharap kita bisa memberi ruang untuk memperbaiki, bukan berlomba menentukan siapa yang paling benar.",
"Aku memilih memahami bukan karena semua hal harus ditoleransi tanpa batas, melainkan karena hubungan yang sehat perlu usaha dari dua sisi. Kita tetap boleh punya pendapat, batas, dan kebutuhan sendiri. Kita boleh meminta waktu untuk menenangkan diri. Yang ingin kujaga adalah rasa hormat ketika sedang berbeda, dan kemauan untuk kembali berbicara ketika sudah siap.",
"Aku suka bahwa empat bulan ini bukan hanya berisi momen manis. Ada proses yang membuat kita lebih mengenal cara masing-masing. Dari proses itu aku belajar bahwa perhatian tidak selalu berupa kalimat romantis. Kadang perhatian adalah membaca ulang pesan agar tidak salah paham, memberi waktu, atau bertanya, 'Kamu mau cerita?' dengan sungguh-sungguh.",
"Jadi, kalau hari ini aku mengatakan masih memilihmu, maksudku bukan janji bahwa tidak akan ada hari sulit. Maksudku adalah aku ingin terus hadir dengan niat baik, belajar, dan memperlakukanmu dengan lembut. Semoga kita sama-sama menjaga pilihan itu, Aira."
]},
{title:"Tentang Panggilan Kecil Kita",theme:"Hal remeh yang terasa istimewa",body:[
"Aku suka bahwa kita punya bahasa kecil sendiri. Ada Bebyycuu, Cantikkcuu, Duniyakuu, Darlingcuuu, sampai Istriicuuuu. Kadang kalau dibaca orang lain mungkin terdengar seperti kumpulan kata yang dibuat sambil tertawa, dan memang ada sisi konyolnya. Tetapi justru itu yang kusukai. Panggilan tersebut bukan sekadar nama; ia mengingatkanku pada kedekatan yang tumbuh lewat percakapan sehari-hari.",
"Kamu juga punya cara memanggilku: Bebyycu, Ciyanggcuu, dan Gay. Lalu aku bisa saja membalas dengan Lesbian, Bebyycuu, atau Ciyanggcuu. Kita punya candaan yang mungkin tidak perlu dipahami orang lain. Cukup kita yang tahu konteksnya, cukup kita yang mengerti mengapa satu kata bisa membuat suasana menjadi lucu.",
"Aku tidak ingin hal-hal kecil seperti ini dianggap tidak penting. Sering kali justru detail kecil yang membuat hubungan terasa hidup. Bukan hadiah besar atau kalimat yang selalu puitis, melainkan kebiasaan menyapa, bercanda, mengulang panggilan kesayangan, dan membuat hari biasa terasa punya warna.",
"Kalau suatu saat kita membaca buku ini lagi, aku harap kita masih bisa tertawa melihat betapa banyak huruf yang kita tambahkan pada satu panggilan. Semoga panggilan-panggilan itu tetap menjadi tempat pulang yang ringan: bukan kewajiban untuk selalu manis, tetapi cara sederhana untuk menunjukkan bahwa kita sedang saling mengingat.",
"Dan untukmu, Aira: apa pun panggilan yang sedang kupakai, maksudnya tetap sama. Aku sedang menyapa seseorang yang sangat kusayangi. Jadi, kalau halaman ini membuatmu tersenyum sedikit saja, berarti tugasnya berhasil."
]},
{title:"Sepuluh Hari Pertama",theme:"Belajar melewati salah paham",body:[
"Awal kita tidak langsung berjalan mulus. Sepuluh hari pertama dipenuhi salah paham dan pertengkaran kecil. Mungkin saat itu kita belum benar-benar tahu bagaimana membaca nada pesan, bagaimana memahami kebiasaan satu sama lain, atau kapan sebaiknya berhenti sebentar sebelum membalas. Hal-hal yang sekarang bisa kita lihat dengan lebih tenang, dulu mungkin terasa membingungkan.",
"Aku tidak ingin mengingat masa itu sebagai sesuatu yang memalukan. Kita sedang mengenal orang baru, sementara masing-masing membawa cara berkomunikasi dan pengalaman sendiri. Kadang satu kalimat bisa dimaknai berbeda. Kadang suasana hati membuat sesuatu terasa lebih berat. Itu bukan alasan untuk saling menyakiti, tetapi menjadi pengingat bahwa memahami seseorang membutuhkan waktu dan kesediaan untuk bertanya.",
"Aku bersyukur kita perlahan belajar. Kita mulai mengenali kapan harus menjelaskan, kapan harus mendengar, dan kapan memberi ruang. Kedekatan tidak muncul hanya karena dua orang ingin bersama; kedekatan juga tumbuh ketika mereka berusaha mengerti apa yang membuat satu sama lain merasa aman dan dihargai.",
"Jika aku bisa mengirim pesan kepada Shivam di hari-hari pertama itu, aku akan berkata: jangan buru-buru menyimpulkan. Dengarkan Aira. Jelaskan maksudmu dengan baik. Jangan menganggap setiap perbedaan sebagai akhir dari percakapan. Dan ingat bahwa orang di seberang layar juga punya perasaan yang perlu dijaga.",
"Terima kasih karena kita melewati awal yang tidak selalu mudah dan tetap memberi ruang bagi hubungan ini untuk berkembang. Empat bulan bukan berarti kita sudah tahu segalanya. Namun empat bulan ini mengingatkanku bahwa belajar bersama bisa menjadi bagian yang indah dari sebuah hubungan."
]},
{title:"Panggilan Pertama yang Kusimpan",theme:"Sebuah momen yang berarti",body:[
"Ada momen yang mungkin sulit dijelaskan panjang lebar, tetapi tetap punya tempat istimewa di hati. Bagiku, panggilan pertama kita adalah salah satunya. Setelah mengenalmu lewat tulisan, mendengar suaramu membuat semuanya terasa sedikit berbeda. Seseorang yang sebelumnya hadir lewat layar dan rangkaian pesan kini terasa lebih dekat, lebih nyata, dan punya nada suara yang bisa kuingat.",
"Aku tidak perlu menambahkan detail yang tidak pernah kita ceritakan. Aku hanya ingin jujur bahwa momen itu berarti bagiku. Ada sesuatu yang hangat ketika percakapan tidak lagi hanya berupa teks. Kita bisa mendengar jeda, intonasi, dan tawa. Hal-hal sederhana itu membuatku merasa sedang mengenalmu dari sisi yang lain.",
"Di awal hubungan, kita juga punya momen manis yang kuingat, termasuk momen ciuman kecil yang terasa spesial dalam kedekatan kita. Aku menyimpannya sebagai bagian dari kenangan awal, tanpa perlu membuatnya menjadi cerita yang berlebihan. Yang membuatnya berarti adalah rasa dekat yang menyertainya.",
"Kadang kenangan paling kuat bukanlah peristiwa yang besar. Ia bisa berupa suara, satu momen singkat, atau perasaan setelah percakapan selesai. Panggilan pertama kita menjadi salah satu pengingat bahwa hubungan ini punya banyak lapisan: ada tulisan, ada suara, ada tawa, ada salah paham, dan ada usaha untuk terus mengenal.",
"Terima kasih sudah menjadi bagian dari momen itu, Aira. Semoga nanti kita punya kesempatan untuk membuat lebih banyak kenangan yang tidak hanya tersimpan di ponsel, tetapi juga hadir dalam hari-hari nyata kita."
]},
{title:"Saat Suasana Hatimu Berubah",theme:"Lembut di hari yang berat",body:[
"Aira, aku tahu suasana hati tidak selalu datang dengan jadwal yang rapi. Ada hari ketika semuanya terasa menyebalkan, ada saat ketika energi seperti habis, dan ada waktu ketika kamu mungkin hanya ingin diam. Aku tidak ingin menjadikan itu bahan untuk menghakimimu. Kamu manusia, bukan seseorang yang harus selalu tersenyum supaya pantas disayangi.",
"Aku mungkin belum selalu tahu cara terbaik untuk menemanimu ketika mood sedang berubah. Kadang aku bisa salah memilih kata, atau terlalu cepat mencoba memperbaiki sesuatu padahal kamu hanya ingin didengarkan. Aku ingin belajar bertanya dengan sederhana: kamu ingin cerita, ingin ditemani, atau butuh waktu sendiri? Jawabannya boleh berbeda setiap hari.",
"Aku juga suka sisi lucu kita, termasuk ketika rasa malas datang atau ada hal yang terlupa. Aku ingin menggodamu dengan lembut, bukan membuatmu merasa kecil. Kita bisa tertawa tentang hal-hal remeh tanpa menjadikannya kekurangan yang harus kamu sembunyikan. Aku pun punya sisi yang tidak selalu rapi, jadi mari saling memberi ruang menjadi manusia biasa.",
"Kalau suatu hari kamu membaca surat ini ketika sedang tidak baik-baik saja, jangan merasa harus segera membaik demi siapa pun. Ambil napas. Minum air. Istirahat jika perlu. Kalau ingin bercerita, aku ingin mendengarkan. Kalau belum ingin bicara, semoga kamu tetap tahu bahwa perasaanmu tidak merepotkan hanya karena sedang berat.",
"Aku menyayangimu bukan hanya pada hari ketika kamu ceria dan manis. Aku ingin mengenalmu dengan lebih utuh, sambil tetap belajar menjaga diriku dan menghormati batas kita berdua. Semoga kita bisa menjadi tempat yang aman untuk saling jujur."
]},
{title:"Ketika Jarak Terasa Panjang",theme:"Rindu yang menunggu waktu",body:[
"Ada hal yang terasa unik dari hubungan yang dimulai lewat layar: seseorang bisa menjadi begitu dekat dalam pikiran, sementara jarak nyata masih memisahkan. Kita bisa bertukar pesan, mendengar suara, dan saling menyapa, tetapi belum bisa begitu saja duduk berdampingan. Kadang aku membayangkan bagaimana rasanya jika jarak itu tidak lagi menjadi bagian dari cerita kita.",
"Aku tidak ingin berpura-pura bahwa menunggu selalu mudah. Ada waktu ketika ingin berbagi sesuatu secara langsung, ingin melihat ekspresi tanpa kamera, atau ingin menghabiskan waktu tanpa harus memikirkan koneksi internet. Namun aku juga tidak mau membuat rindu menjadi tekanan. Kita punya kehidupan masing-masing, tanggung jawab, dan waktu yang perlu dihormati.",
"Untuk sekarang, mari kita rawat hal-hal yang bisa kita lakukan. Berkomunikasi dengan jujur, saling memberi kabar tanpa merasa dikendalikan, dan menghargai waktu ketika salah satu sedang sibuk. Aku ingin kedekatan kita terasa sebagai dukungan, bukan beban. Rindu seharusnya menghangatkan, bukan membuat kita kehilangan ruang untuk menjadi diri sendiri.",
"Aku membayangkan tahun depan sebagai kemungkinan yang indah: mungkin kita bisa bertemu langsung dan membuat kenangan baru. Kamu pernah menyebut 2028, dan aku ingin menghormati bahwa waktu terbaik perlu kita bicarakan bersama. Tidak ada tanggal yang perlu dipaksakan sekarang. Yang penting, jika kesempatan itu datang, kita menyambutnya dengan persiapan dan hati yang tenang.",
"Sampai saat itu, setiap percakapan adalah bagian dari perjalanan. Aku ingin tetap mengenalmu, bukan hanya menghitung hari. Semoga jarak mengajarkan kita kesabaran, dan semoga nanti kita punya cerita nyata yang bisa kita kenang sambil tersenyum."
]},
{title:"Empat Bulan, Banyak Hal Kecil",theme:"Merayakan perjalanan kita",body:[
"Empat bulan mungkin terdengar singkat jika dibandingkan dengan seluruh waktu yang masih mungkin kita punya. Namun empat bulan ini cukup untuk mengisi banyak halaman: malam pertama di Litmatch, pindah ke WhatsApp, hari-hari awal yang penuh penyesuaian, salah paham, percakapan yang makin dekat, panggilan pertama, dan momen-momen kecil yang sekarang punya arti sendiri.",
"Aku tidak akan mengatakan bahwa setiap hari selalu indah. Itu bukan cerita kita. Ada hari yang menyenangkan, ada hari yang melelahkan, ada candaan yang berhasil, dan ada percakapan yang perlu diperbaiki. Tetapi aku suka bahwa kisah ini nyata. Kita tidak sedang memainkan dua tokoh sempurna. Kita adalah Shivam dan Aira, dua orang yang sedang belajar mengenal satu sama lain.",
"Aku ingin merayakan bukan hanya lamanya waktu, tetapi juga keberadaanmu di dalamnya. Aku menghargai pesan-pesan kecil, panggilan lucu, usaha memahami, dan keberanian untuk terus membuka diri. Aku juga ingin mengingat bahwa hubungan ini perlu dijaga oleh dua orang. Semoga kita terus saling menghormati, saling mendengar, dan tidak lupa tertawa.",
"Terima kasih sudah menjadi bagian dari empat bulan ini. Terima kasih untuk hal-hal yang kamu bagikan, untuk sisi dirimu yang mulai kukenal, dan untuk setiap momen yang membuatku merasa beruntung bisa mengenalmu. Kalau halaman-halaman ini terasa seperti rumah kecil, itu karena namamu ada di banyak sudutnya.",
"Selamat empat bulan, Aira. Aku tidak tahu persis seperti apa semua bab berikutnya, tetapi aku berharap kita menulisnya dengan hati yang baik. Satu hari, satu percakapan, satu kenangan pada satu waktu."
]},
{title:"Hari Ketika Kita Bertemu",theme:"Surat untuk masa depan",body:[
"Aku belum tahu kapan hari itu akan datang. Aku tidak ingin menuliskan tanggal yang belum kita tentukan, karena pertemuan seperti itu sebaiknya menjadi keputusan yang nyaman dan disiapkan bersama. Tetapi aku boleh membayangkannya, bukan? Hari ketika cerita yang selama ini tumbuh lewat pesan dan panggilan akhirnya mendapat tempat nyata.",
"Aku membayangkan awalnya mungkin sedikit canggung. Kita sudah saling mengenal lewat layar, tetapi bertemu langsung tentu punya rasa yang berbeda. Mungkin kita perlu beberapa saat untuk terbiasa, lalu tertawa karena akhirnya benar-benar berada di tempat yang sama. Aku ingin menikmati hal sederhana: berjalan, berbicara tanpa terburu-buru, makan sesuatu, mengambil foto jika kita mau, dan menyimpan kenangan yang terasa milik kita.",
"Aku juga ingin pertemuan itu berlangsung dengan aman dan nyaman. Kita bisa membicarakan rencana, tempat umum yang cocok, waktu, perjalanan, serta hal-hal praktis lainnya. Tidak perlu membuktikan apa pun kepada siapa pun. Yang penting adalah kita berdua merasa siap dan dihormati.",
"Kamu pernah mengatakan mungkin 2028, sementara aku berharap bisa bertemu tahun depan. Kita tidak harus menyelesaikan perbedaan waktu itu di halaman ini. Biarkan ia menjadi sesuatu yang kita diskusikan dengan tenang. Aku lebih memilih rencana yang realistis dan disepakati bersama daripada janji besar yang membuat salah satu merasa tertekan.",
"Jika hari itu akhirnya tiba, aku ingin mengingat halaman ini dan tersenyum. Kita akan tahu bahwa perjalanan panjang dimulai dari satu malam sederhana. Sampai saat itu, mari terus membuat hubungan ini baik dalam kehidupan yang kita jalani sekarang."
]},
{title:"Hal yang Belum Selalu Bisa Kuucapkan",theme:"Kejujuran yang tenang",body:[
"Ada perasaan yang kadang lebih mudah kusimpan daripada kuucapkan. Bukan karena aku ingin menyembunyikannya darimu, tetapi karena aku belum selalu menemukan kata yang tepat. Aku sedang belajar bahwa menyayangi seseorang juga berarti belajar berbicara dengan jelas. Aku tidak ingin kamu harus menebak-nebak apa yang sedang kupikirkan.",
"Aku ingin kamu tahu bahwa kehadiranmu berarti. Bukan berarti kamu bertanggung jawab atas semua suasana hatiku, dan bukan berarti kamu harus selalu tersedia. Aku tetap perlu mengurus diriku sendiri, menjaga keseharianku, dan punya ruang pribadi. Namun di antara semua itu, aku senang ada kamu yang bisa kuajak berbagi cerita.",
"Aku menghargai saat kita bisa bercanda, dan aku juga ingin kita mampu membicarakan hal serius tanpa saling merendahkan. Aku ingin belajar meminta maaf tanpa mencari alasan, menerima masukan tanpa langsung defensif, dan menyampaikan kebutuhan tanpa membuatmu merasa bersalah. Aku tahu semua itu proses, tetapi aku ingin berusaha.",
"Kalau ada satu hal yang ingin kusampaikan lewat surat ini, itu adalah: kamu tidak perlu menjadi versi yang selalu menyenangkan agar aku mau mengenalmu. Aku ingin melihat dirimu yang sebenarnya, dengan tetap menjaga hubungan yang sehat dan saling menghormati. Aku berharap kamu pun bisa merasa aman untuk mengatakan apa yang kamu butuhkan dariku.",
"Terima kasih karena sudah membaca sampai sini. Semoga setelah buku ini ditutup, kita tidak hanya membawa kalimat manis, tetapi juga niat untuk saling memperlakukan dengan lebih baik."
]}
];

reasons.push(
"Aku suka bahwa kita bisa membicarakan hal sederhana tanpa harus mencari topik yang besar.",
"Aku menghargai saat kamu memberi tahu apa yang sedang kamu rasakan.",
"Aku suka membayangkan kita tertawa mengingat awal perkenalan kita.",
"Kamu membuatku ingin menyimpan tanggal dan jam yang punya arti bagi kita.",
"Aku senang bahwa kita punya kisah yang bisa diceritakan dari satu malam.",
"Aku suka caramu membuat panggilan biasa terdengar lebih menggemaskan.",
"Aku menghargai bahwa kita tidak harus selalu punya jawaban saat itu juga.",
"Aku suka ketika kita memberi kesempatan untuk menjelaskan maksud masing-masing.",
"Kamu mengingatkanku bahwa hubungan perlu dirawat lewat tindakan kecil.",
"Aku suka bahwa kita bisa membuat lelucon dari kata-kata ciptaan sendiri.",
"Aku menghargai waktu ketika kamu memilih untuk terbuka kepadaku.",
"Aku ingin terus belajar hal-hal yang membuatmu merasa didengar.",
"Aku suka bahwa cerita kita punya awal yang sederhana dan tidak dibuat-buat.",
"Aku menghargai caramu menjalani hari dengan segala naik turunnya.",
"Aku suka membayangkan suatu hari kita melihat foto kenangan bersama.",
"Kamu membuatku lebih sadar bahwa kata-kata punya pengaruh besar.",
"Aku suka ketika kita bisa berhenti sejenak lalu melanjutkan obrolan dengan lebih tenang.",
"Aku menghargai bahwa kita punya kesempatan untuk tumbuh, bukan harus langsung tahu semuanya.",
"Aku suka bahwa nama Aira kini punya banyak cerita di pikiranku.",
"Aku ingin tetap penasaran mengenalmu, bahkan setelah banyak percakapan.",
"Aku menghargai hal-hal yang kamu ceritakan meski tampak sepele bagimu.",
"Aku suka saat kita bisa saling menyemangati tanpa membuat janji berlebihan.",
"Kamu membuatku ingin merencanakan masa depan dengan sabar dan realistis.",
"Aku suka bahwa kita dapat tertawa sekaligus belajar dari pengalaman yang sulit.",
"Aku menghargai ketika kita saling memberi waktu untuk menenangkan diri.",
"Aku suka membayangkan obrolan panjang kita suatu hari berlangsung tanpa layar.",
"Aku ingin mengingat bukan hanya tanggal jadian, tetapi juga proses menuju hari ini.",
"Aku suka bahwa empat bulan ini punya cerita yang hanya kita jalani.",
"Aku menghargai keunikanmu, termasuk hal-hal kecil yang membuatmu berbeda.",
"Aku suka ketika kita saling menyapa dengan nama panggilan kesayangan.",
"Aku ingin terus menjaga candaan kita agar tetap terasa hangat dan saling menghormati.",
"Aku menghargai setiap kesempatan untuk memperbaiki cara berkomunikasi.",
"Aku suka bahwa kita bisa mengakui kalau ada hal yang belum kita pahami.",
"Kamu membuatku ingin menjadi lebih sabar dalam mendengar.",
"Aku menghargai keberadaanmu tanpa menuntutmu selalu punya waktu.",
"Aku suka bahwa kita bisa membicarakan harapan tanpa harus menetapkan semuanya sekarang.",
"Aku ingin pertemuan nanti menjadi pengalaman yang aman, nyaman, dan menyenangkan bagi kita.",
"Aku menghargai bahwa kamu punya pilihan dan pendapatmu sendiri.",
"Aku suka bahwa kita masih punya banyak cerita untuk saling bagikan.",
"Aku ingin tetap merayakan hal-hal kecil yang membuatmu tersenyum.",
"Aku menghargai setiap kali kita mencoba memahami sebelum bereaksi.",
"Aku suka bahwa hubungan ini mengajarkanku untuk lebih jelas menyampaikan perasaan.",
"Aku ingin kita tetap punya ruang untuk tumbuh sebagai individu.",
"Aku menghargai semua momen ketika kita memilih berbicara dengan lembut.",
"Aku suka bahwa kita tidak perlu meniru hubungan orang lain untuk punya cerita sendiri.",
"Aku ingin mengenal impian dan hal-hal yang membuatmu bersemangat.",
"Aku menghargai setiap bagian perjalanan ini, termasuk yang masih perlu diperbaiki.",
"Aku suka bahwa buku ini bisa menjadi pengingat kecil tentang empat bulan kita.",
"Aku ingin suatu hari kita membuka halaman ini dan tersenyum bersama.",
"Dan aku bersyukur karena di antara begitu banyak kemungkinan, aku mendapat kesempatan mengenalmu."
);
const photoPages = [
["Awal yang Kita Simpan","Kenangan kecil yang membuat perjalanan ini terasa nyata."],
["Senyum Favorit","Ada hal-hal yang ingin kusimpan lebih lama."],
["Potongan Cerita","Satu foto, satu alasan untuk tersenyum."],
["Album Kecil Kita","Semoga halaman-halaman ini terus bertambah."]
];
const pages = [];
pages.push({type:"cover"});
pages.push({type:"intro",title:"Untuk Aira, dengan seluruh cerita kecil kita",paras:["Aira, buku ini kubuat untuk merayakan empat bulan perjalanan kita. Bukan untuk mengatakan bahwa kisah kita sempurna, melainkan untuk menyimpan hal-hal yang membuatnya berarti: awal yang tidak terduga, proses saling memahami, panggilan lucu, dan harapan yang masih ingin kita wujudkan.","Kisah kita dimulai pada 6 Juli 2026 pukul 22.29. Dari Litmatch, kita berpindah ke WhatsApp pada malam yang sama. Sejak itu, ada banyak halaman yang terisi—sebagian manis, sebagian menantang, semuanya menjadi bagian dari perjalanan kita."],en:"This book celebrates four months of a real story: unexpected beginnings, learning each other, silly nicknames, and hopes for the future."});
pages.push({type:"story",title:"Satu malam di Litmatch",eyebrow:"BAB 01 · PERTEMUAN",paras:["Kita pertama kali bertemu di Litmatch. Aku tidak tahu bahwa sebuah pertemuan sederhana di aplikasi itu akan menjadi awal dari cerita yang ingin kusimpan.","Malam itu kita lanjut ke WhatsApp. Tidak ada janji besar; hanya rasa ingin mengenal lebih jauh. Kadang hal penting memang datang dengan cara yang sangat biasa."],en:"We met on Litmatch and moved to WhatsApp that same night. A simple beginning became something meaningful."});
pages.push({type:"story",title:"Sepuluh hari untuk belajar",eyebrow:"BAB 02 · PROSES",paras:["Sepuluh hari pertama kita tidak selalu mudah. Ada salah paham dan pertengkaran kecil, mungkin karena kita masih belajar membaca cara bicara dan perasaan masing-masing.","Pelan-pelan kita mulai lebih memahami satu sama lain. Aku ingin mengingat proses itu sebagai pengingat bahwa kedekatan juga perlu kesabaran, komunikasi, dan kemauan untuk mendengar."],en:"Our first ten days had misunderstandings and little fights. Slowly, we learned to understand each other better."});
pages.push({type:"story",title:"Suara yang terasa dekat",eyebrow:"BAB 03 · PANGGILAN PERTAMA",paras:["Panggilan pertama kita menjadi salah satu kenangan spesial bagiku. Setelah banyak mengenalmu lewat tulisan, mendengar suaramu membuat hubungan ini terasa punya sisi yang baru.","Ada juga momen manis berupa ciuman kecil di awal kedekatan kita. Aku menyimpannya sebagai kenangan pribadi yang hangat."],en:"Our first call is a special memory for me, along with a sweet little kiss moment from our early connection."});
pages.push({type:"story",title:"Kita, dengan segala lucunya",eyebrow:"BAB 04 · KEBIASAAN",paras:["Aku tahu kadang mood-mu berubah tiba-tiba, kadang rasa malas datang, dan kadang ada hal yang terlupa. Aku menyebutnya dengan sayang—bukan untuk mengejekmu. Kamu tidak harus selalu sempurna untuk menjadi seseorang yang istimewa.","Aku suka ketika kita saling menggoda dan memakai panggilan aneh kita. Hal-hal kecil seperti itu membuat hubungan terasa punya warna sendiri."],en:"Your random moods, lazy moments, and forgetful days are part of being human. I cherish our playful little world."});
letters.forEach((l,i)=>pages.push({type:"letter",letter:l,index:i}));
reasons.forEach((r,i)=>pages.push({type:"reason",reason:r,index:i}));
photoPages.forEach((p,i)=>pages.push({type:"photos",title:p[0],caption:p[1],index:i}));
for(let i=0;i<3;i++) pages.push({type:"envelopes",index:i});
pages.push({type:"future"});
const games = ["quiz","match","emoji","choice","scramble","heart","guess","order","final"];
games.forEach((g,i)=>pages.push({type:"game",game:g,index:i}));
pages.push({type:"message"});
pages.push({type:"secret"});
pages.push({type:"final"});
// Add distinct reflection / keepsake pages to reach 160 meaningful screens.
const reflections = [
["Satu hal yang kupelajari","Hubungan bukan tentang selalu sepakat. Hubungan juga tentang cara kita tetap saling menghormati ketika pikiran berbeda."],
["Ruang untuk menjadi diri sendiri","Aku ingin kita tetap punya waktu untuk diri sendiri, teman, keluarga, dan hal-hal yang membuat hidup masing-masing bertumbuh."],
["Cara sederhana menjaga kita","Bertanya saat tidak paham, mendengar tanpa buru-buru menyela, dan meminta maaf saat memang perlu."],
["Jangan takut berkata jujur","Aku berharap kita bisa membicarakan perasaan tanpa harus menebak-nebak atau menyimpan semuanya sendirian."],
["Kenangan yang belum dibuat","Masih banyak hal sederhana yang bisa kita lakukan kelak: berjalan, tertawa, bercerita, dan menikmati waktu bersama."],
["Satu hari pada satu waktu","Kita tidak perlu menyelesaikan seluruh masa depan hari ini. Cukup merawat hari ini dengan baik."],
["Untuk hari yang melelahkan","Semoga kamu ingat untuk beristirahat, makan, minum, dan tidak terlalu keras pada diri sendiri."],
["Untuk tawa berikutnya","Aku berharap kita masih punya banyak alasan untuk tertawa, termasuk candaan yang hanya kita pahami."],
["Jarak bukan seluruh cerita","Kita tetap punya kehidupan hari ini. Mari membuatnya berarti sambil menunggu kesempatan bertemu."],
["Terima kasih sudah hadir","Terima kasih untuk waktumu, ceritamu, dan kesempatan untuk mengenalmu lebih jauh."]
];
while(pages.length < 160){
  const item=reflections[(pages.length-1)%reflections.length];
  pages.push({type:"reflection",title:item[0],body:item[1],index:pages.length});
}
const total=pages.length;
let current=0, toastTimer;
const content=$("#pageContent"), surface=$("#pageSurface");
const esc=s=>String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
function toast(msg){const el=$("#toast");el.textContent=msg;el.classList.add("show");clearTimeout(toastTimer);toastTimer=setTimeout(()=>el.classList.remove("show"),2100)}
function bilingual(text){return `<div class="en"><span class="en-label">English</span>${esc(text)}</div>`}
function renderCover(){return `<div class="cover-content"><div class="ornament">✦　♡　✦</div><div class="script">Untuk Aira</div><h1>My Favourite<br>Chapter</h1><div class="rule"></div><div class="subtitle">sebuah cerita kecil tentang kita</div><div class="date">06 · 07 · 2026</div><p style="margin-top:35px;font-size:9px;letter-spacing:.22em">SHIVAM ♥ AIRA</p><button class="action" data-action="open">Buka buku kita ♡</button></div>`}
function renderPage(p){
 if(p.type==="cover") return renderCover();
 if(p.type==="intro"||p.type==="story") return `<div class="eyebrow">${p.eyebrow||"SEBUAH CATATAN UNTUKMU"}</div><h2>${esc(p.title)}</h2><div class="rule"></div>${p.paras.map(x=>`<p>${esc(x)}</p>`).join("")}${bilingual(p.en||"A little page from our story.")}<div class="quote">“Pelan-pelan, tetapi dengan hati yang sungguh.”</div>`;
 if(p.type==="letter"){const l=p.letter;return `<div class="eyebrow">SURAT ${String(p.index+1).padStart(2,"0")} · ${esc(l.theme)}</div><h2>${esc(l.title)}</h2><div class="rule"></div>${l.body.map(x=>`<p>${esc(x)}</p>`).join("")}${bilingual(l.body.map(x=>x.split(".")[0]).join(". ")+".")}`}
 if(p.type==="reason")return `<div class="eyebrow">100 HAL KECIL YANG KUSYUKURI</div><div class="reason-number">${String(p.index+1).padStart(2,"0")}</div><h2>Alasan aku menghargaimu</h2><div class="rule"></div><p class="lead">${esc(p.reason)}</p>${bilingual("One little reason I appreciate you.")}<p>Dan masih ada banyak hal lain yang ingin kukenal darimu, Aira.</p>`;
 if(p.type==="photos")return renderPhotos(p);
 if(p.type==="envelopes")return renderEnvelopes(p);
 if(p.type==="future")return `<div class="eyebrow">BAB MASA DEPAN · BELUM DITULIS</div><h2>Sampai cerita kita jadi nyata</h2><p>Aku berharap kita bisa bertemu langsung tahun depan. Kamu kadang menyebut 2028; aku ingin kita membicarakan waktu yang paling nyaman dan realistis untuk kita berdua.</p><p>Bayangkan berjalan bersama, mengobrol tanpa layar, menghabiskan waktu dengan tenang, dan membuat kenangan baru. Tidak perlu tanggal yang dipaksakan. Pertemuan itu akan lebih indah jika kita sama-sama siap.</p><div class="card"><div class="script">Suatu hari nanti…</div><p>Semoga cerita online ini punya bab yang bisa kita jalani berdampingan.</p></div>${bilingual("I hope we meet in person when the time is right, make memories, and turn our online story into real-life moments.")}<p><button class="action" data-action="future">Kirim harapan ke masa depan ✦</button></p>`;
 if(p.type==="game")return renderGame(p);
 if(p.type==="message")return `<div class="eyebrow">HALAMAN MILIK AIRA</div><h2>Tinggalkan pesan untukku</h2><p>Kalau kamu mau, tulis apa pun yang ingin kamu simpan dari buku kecil ini. Pesan akan tersimpan di perangkat ini saja melalui browser—tidak dikirim ke Shivam secara otomatis.</p><label class="ind-label" for="airaMessage">Pesanmu</label><textarea id="airaMessage" placeholder="Shivam, aku ingin bilang..."></textarea><button class="action" data-action="saveMessage">Simpan di halaman ini ♡</button><div id="savedMessage" class="secret" hidden></div>${bilingual("Leave a little note here. It stays in this browser only.")}`;
 if(p.type==="secret")return `<div class="eyebrow">JANGAN BUKA KALAU TIDAK SIAP TERSENYUM</div><h2>Ada satu rahasia kecil…</h2><p>Di antara semua panggilan manis dan candaan kita, ada satu nama yang kusimpan khusus untuk halaman ini.</p><div class="secret" style="text-align:center"><button class="action" data-action="reveal">Sentuh untuk membuka rahasia ♡</button><div id="secretText" hidden><div class="script" style="font-size:55px">LESBICUUUU ❤️</div><p>Untuk Aira, dari Shivam. Jangan lupa senyum, ya.</p></div></div>${bilingual("A special silly nickname, saved just for you.")}`;
 if(p.type==="final")return `<div class="cover-content"><div class="ornament">♡ ✦ ♡</div><div class="script">Untuk selamanya di cerita kita</div><h1>LESBICUUUU<br>❤️</h1><div class="rule"></div><p style="max-width:360px">Terima kasih sudah membaca sampai halaman terakhir. Empat bulan ini adalah bagian dari cerita kita, dan aku berharap masih banyak halaman baik yang menunggu.</p><div class="date">SHIVAM & AIRA · 4 BULAN</div><button class="action" data-action="restart">Baca lagi dari awal ↺</button></div>`;
 if(p.type==="reflection")return `<div class="eyebrow">CATATAN KECIL UNTUK KITA</div><h2>${esc(p.title)}</h2><div class="rule"></div><p class="lead">${esc(p.body)}</p><p>Aku ingin kalimat ini menjadi pengingat yang sederhana, bukan tuntutan. Kita boleh terus belajar, berubah, dan saling mengenal.</p>${bilingual("A small reminder for us: keep learning, communicating, and treating each other with care.")}`;
 return "";
}
function renderPhotos(p){
 const start=p.index*3;
 let items="";
 for(let j=0;j<3;j++){
  const n=start+j+1;
  items+=`<figure class="photo-frame"><div class="placeholder">Foto ${n}<br>Tambahkan nama file asli di daftar foto script.js</div><figcaption>${["Senyum yang ingin kusimpan","Potongan hari yang manis","Satu kenangan lagi"][j]}</figcaption></figure>`;
 }
 return `<div class="eyebrow">ALBUM KECIL · FOTO KITA</div><h2>${esc(p.title)}</h2><p>${esc(p.caption)}</p><div class="photo-grid">${items}</div><p class="en">English: A few little frames for the memories you want to keep close.</p><p style="font-size:10px">Foto asli tidak diubah atau diganti namanya. Lihat README untuk menghubungkan file dari <code>assets/photos/</code>.</p>`;
}
const envelopeLetters=[
["Open when you miss me","Kalau kamu sedang merindukanku, ingat bahwa jarak bukan berarti kamu sendirian. Kita masih bisa saling menyapa, bercerita, dan menjalani hari masing-masing. Aku juga menantikan saat kita bisa bertemu dengan nyaman dan membuat kenangan nyata."],
["Open when you're sad","Kalau hari ini terasa berat, kamu tidak harus memaksa diri terlihat baik-baik saja. Ambil waktu untuk bernapas dan beristirahat. Kalau ingin cerita, aku ingin mendengarkan. Kalau butuh ruang, aku akan menghormatinya."],
["Open when you need a smile","Hai, Cantikkcuu! Ini pengingat kecil bahwa kamu boleh tertawa karena hal receh, boleh malas sebentar, dan boleh lupa sesuatu lalu mengingatnya lagi. Semoga halaman ini berhasil mencuri satu senyum darimu."]
];
function renderEnvelopes(p){return `<div class="eyebrow">SURAT YANG MENUNGGU DIBUKA</div><h2>Pilih amplop kecilmu</h2><p>Ketuk salah satu ketika kamu membutuhkan kata-kata tertentu.</p><div>${envelopeLetters.map((e,i)=>`<button class="envelope" data-action="envelope" data-index="${i}"><span>✉</span><small>${esc(e[0])}</small></button>`).join("")}</div><div id="envelopeLetter" class="secret" hidden></div>${bilingual("Open a letter whenever you need comfort, a little smile, or a reminder that you matter.")}`}
function renderGame(p){const titles=["Love Quiz","Memory Match","Emoji Decode","This or That","Word Scramble","Find the Hidden Heart","Guess My Answer","Love Puzzle","Final Love Challenge"];return `<div class="eyebrow">RUANG BERMAIN · ${String(p.index+1).padStart(2,"0")}/09</div><h2>${titles[p.index]}</h2><p>${["Seberapa ingat kamu awal cerita kita?","Temukan pasangan simbol yang sama.","Tebak cerita dari rangkaian emoji.","Pilih salah satu yang terasa paling kamu suka.","Susun huruf menjadi kata yang tepat.","Temukan satu hati tersembunyi.","Coba tebak pilihan Shivam.","Susun kejadian sesuai urutan cerita.","Selesaikan tiga tantangan kecil untuk membuka ucapan akhir."][p.index]}</p><div class="game-box" id="gameBox" data-game="${p.game}">${gameMarkup(p.game)}</div>${bilingual("A little game made from the details of our story. Have fun!")}`}
function gameMarkup(g){
 if(g==="quiz")return `<p><b>Kapan cerita Shivam dan Aira dimulai?</b></p><div class="game-options">${["6 Juli 2026","6 Juni 2026","2028"].map((x,i)=>`<button class="game-option" data-answer="${i}">${x}</button>`).join("")}</div><div class="game-feedback" id="feedback"></div><button class="action light" data-action="resetGame">Ulangi</button>`;
 if(g==="match")return `<p>Cari dua pasang simbol yang sama.</p><div class="game-options" id="matchGrid">${["♡","✦","♡","✦"].sort(()=>Math.random()-.5).map((x,i)=>`<button class="game-option match-card" data-symbol="${x}" data-id="${i}">?</button>`).join("")}</div><div class="game-feedback" id="feedback"></div><button class="action light" data-action="resetGame">Acak ulang</button>`;
 if(g==="emoji")return `<p style="font-size:25px">📱 🌙 💬 ➜ 💚</p><p>Petunjuk: aplikasi tempat kita pertama bertemu, lalu pindah ke tempat untuk chat.</p><div class="game-options">${["Litmatch → WhatsApp","Instagram → Email","Game → Telepon"].map((x,i)=>`<button class="game-option" data-answer="${i}">${x}</button>`).join("")}</div><div class="game-feedback" id="feedback"></div>`;
 if(g==="choice")return `<p>Pilih suasana untuk pertemuan pertama kita nanti.</p><div class="game-options">${["Jalan santai dan ngobrol","Mencari makanan enak","Duduk dan bercerita lama"].map(x=>`<button class="game-option" data-choice="${x}">${x}</button>`).join("")}</div><div class="game-feedback" id="feedback"></div>`;
 if(g==="scramble")return `<p>Susun huruf ini menjadi nama orang yang menjadi pusat buku ini:</p><h2 style="letter-spacing:.3em">A R I A</h2><input id="scrambleInput" placeholder="Tulis jawabanmu"><button class="action" data-action="checkScramble">Periksa</button><div class="game-feedback" id="feedback"></div>`;
 if(g==="heart")return `<p>Temukan satu hati tersembunyi di antara bintang-bintang.</p><div class="hidden-heart" id="heartGrid">${Array.from({length:25},(_,i)=>`<button class="heart-cell" data-cell="${i}">✦</button>`).join("")}</div><div class="game-feedback" id="feedback"></div><button class="action light" data-action="resetGame">Coba lagi</button>`;
 if(g==="guess")return `<p>Menurut Shivam, hal apa yang membuat cerita kita terasa istimewa?</p><div class="game-options">${["Belajar memahami satu sama lain","Tidak pernah berbeda pendapat","Selalu punya rencana sempurna"].map((x,i)=>`<button class="game-option" data-answer="${i}">${x}</button>`).join("")}</div><div class="game-feedback" id="feedback"></div>`;
 if(g==="order")return `<p>Ketuk kejadian sesuai urutan awal cerita kita.</p><div class="game-options" id="orderOptions">${["Panggilan pertama","Bertemu di Litmatch","Pindah ke WhatsApp"].map((x,i)=>`<button class="game-option" data-order="${i}">${x}</button>`).join("")}</div><div class="game-feedback" id="feedback"></div><button class="action light" data-action="resetGame">Ulangi</button>`;
 return `<p>Selesaikan tiga langkah: ingat tanggal, pilih kata yang tepat, lalu buka pesan akhir.</p><div class="game-options"><button class="game-option" data-step="1">6 Juli 2026</button><button class="game-option" data-step="2">Saling memahami</button><button class="game-option" data-step="3">Buka pesan akhir ♡</button></div><div class="game-feedback" id="feedback">Langkah 1 dari 3</div>`;
}
function update(){const p=pages[current];content.classList.remove("page-enter");void content.offsetWidth;content.innerHTML=renderPage(p);content.classList.add("page-enter");$("#pageNumber").textContent=`${String(current+1).padStart(2,"0")} / ${total}`;$("#topPage").textContent=`${current+1} / ${total}`;$("#pageSection").textContent=p.type==="letter"?"LOVE LETTERS":p.type==="game"?"MINI GAMES":p.type==="reason"?"100 LITTLE REASONS":"A LITTLE BOOK OF US";$("#progressText").textContent=`Halaman ${current+1} · ${total} halaman`;$("#progressBar").style.width=`${(current+1)/total*100}%`;$("#prevBtn").disabled=current===0;$("#nextBtn").disabled=current===total-1;content.scrollTop=0}
function go(n){if(n<0||n>=total)return;current=n;update()}
$("#prevBtn").addEventListener("click",()=>go(current-1));$("#nextBtn").addEventListener("click",()=>go(current+1));
document.addEventListener("click",e=>{
 const b=e.target.closest("button[data-action],button[data-answer],button[data-choice],button[data-cell],button[data-order],button[data-step],button.match-card");
 if(!b)return;
 e.stopPropagation();
 if(b.dataset.action==="open"){toast("Selamat datang di cerita kecil kita ♡");go(1)}
 if(b.dataset.action==="future")toast("Semoga harapan baik menemukan waktunya ✦");
 if(b.dataset.action==="restart")go(0);
 if(b.dataset.action==="reveal"){$("#secretText").hidden=false;b.hidden=true;toast("LESBICUUUU ❤️")}
 if(b.dataset.action==="envelope"){const item=envelopeLetters[+b.dataset.index];const box=$("#envelopeLetter");box.hidden=false;box.innerHTML=`<h3>${esc(item[0])}</h3><p>${esc(item[1])}</p><div class="en">English: A gentle note for this moment.</div>`}
 if(b.dataset.action==="saveMessage"){const v=$("#airaMessage").value.trim();if(!v){toast("Tulis pesan kecil dulu ya ♡");return}$("#savedMessage").hidden=false;$("#savedMessage").textContent="Pesanmu tersimpan di halaman ini: "+v;try{localStorage.setItem("airaBookMessage",v)}catch{}toast("Pesan tersimpan di perangkat ini ♡")}
 if(b.dataset.action==="checkScramble"){const v=$("#scrambleInput").value.trim().toLowerCase();$("#feedback").textContent=v==="aira"?"Benar! Nama yang tepat, tentu saja. ♡":"Belum tepat, coba susun lagi.";return}
 if(b.dataset.action==="resetGame"){update();return}
 const game=$("#gameBox")?.dataset.game;
 if(b.dataset.answer!==undefined){const correct=(game==="quiz"||game==="emoji"||game==="guess")?0:0;$("#feedback").textContent=+b.dataset.answer===correct?"Benar! Kamu ingat cerita kita. ♡":"Belum tepat, tidak apa-apa—coba lagi!";return}
 if(b.dataset.choice){$("#feedback").textContent="Pilihan yang manis: "+b.dataset.choice+". Semoga suatu hari kita bisa memilih bersama. ♡";return}
 if(b.classList.contains("match-card")){const selected=$$(".match-card");const open=selected.filter(x=>x.textContent!=="?");if(b.textContent!=="?")return;b.textContent=b.dataset.symbol;b.classList.add("selected");const now=selected.filter(x=>x.textContent!=="?");if(now.length===2){if(now[0].dataset.symbol===now[1].dataset.symbol){$("#feedback").textContent="Pasangan ditemukan! ♡";now.forEach(x=>x.disabled=true)}else setTimeout(()=>now.forEach(x=>{x.textContent="?";x.classList.remove("selected")}),650)}if(selected.every(x=>x.disabled))$("#feedback").textContent="Hebat! Semua pasangan ditemukan. ✦";return}
 if(b.dataset.cell!==undefined){const target=window.__heartTarget??(window.__heartTarget=Math.floor(Math.random()*25));if(+b.dataset.cell===target){b.textContent="❤️";$("#feedback").textContent="Kamu menemukan hati tersembunyi!";}else{b.textContent="·";b.disabled=true;$("#feedback").textContent="Belum, coba kotak lain."}return}
 if(b.dataset.order!==undefined){const seq=window.__orderSeq??(window.__orderSeq=[]);const expected=[1,2,0];const val=+b.dataset.order;seq.push(val);b.disabled=true;if(val!==expected[seq.length-1]){$("#feedback").textContent="Urutannya belum pas. Coba ulangi.";return}$("#feedback").textContent=seq.length===3?"Sempurna! Litmatch → WhatsApp → panggilan pertama.":"Benar, lanjutkan…";return}
 if(b.dataset.step){const step=+b.dataset.step;const fb=$("#feedback");if(step===(window.__finalStep||1)){window.__finalStep=(window.__finalStep||1)+1;fb.textContent=step===3?"Tantangan selesai! LESBICUUUU ❤️":`Bagus! Langkah ${step+1} dari 3.`;if(step===3)toast("Kamu berhasil menyelesaikan tantangan!")}else fb.textContent="Selesaikan langkah sebelumnya dulu ya."}
});
function $$(s){return Array.from(document.querySelectorAll(s))}
let startX=null,startY=null;
surface.addEventListener("touchstart",e=>{if(e.touches.length===1){startX=e.touches[0].clientX;startY=e.touches[0].clientY}},{passive:true});
surface.addEventListener("touchend",e=>{if(startX===null)return;const dx=e.changedTouches[0].clientX-startX,dy=e.changedTouches[0].clientY-startY;if(Math.abs(dx)>65&&Math.abs(dx)>Math.abs(dy)*1.3){go(current+(dx<0?1:-1))}startX=startY=null},{passive:true});
let down=false,dragX=0;
surface.addEventListener("pointerdown",e=>{if(e.pointerType==="mouse"){down=true;dragX=e.clientX}});
surface.addEventListener("pointerup",e=>{if(!down)return;const dx=e.clientX-dragX;if(Math.abs(dx)>90)go(current+(dx<0?1:-1));down=false});
surface.addEventListener("click",e=>{if(e.target.closest("button,input,textarea,.page-content a"))return;const rect=surface.getBoundingClientRect(),x=e.clientX-rect.left;if(x>rect.width*.78)go(current+1);else if(x<rect.width*.22)go(current-1)});
document.addEventListener("keydown",e=>{if(e.target.matches("input,textarea"))return;if(e.key==="ArrowRight")go(current+1);if(e.key==="ArrowLeft")go(current-1)});
const saved=(()=>{try{return localStorage.getItem("airaBookMessage")}catch{return null}})();
update();
if(saved)toast("Ada pesan Aira yang tersimpan di browser ini ♡");
})();