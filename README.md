# Smoeray Frontend
frontend laman web sman1jonggol.sch.id menggunakan framework vuejs. data yang ditampilkan pada laman web dperoleh dari API.

## __CMS API Reference__
API Base URL https://cms.sman1jonggol.sch.id

**HTTP(S) Request / HTTP(S) Header**
| Header | Value |
| --- | --- |
| Content-Type | application/json |
| Accept | application/json |

## List API Methods
| End Point | HTTP Method | Deskripsi |
| --- | --- | --- |
| [`/api/v1/home`](##result-home) | GET | Mneampilkan semua data berita, guru, alumni, kampus |
| [`/api/v1/berita`](##result-berita) | GET | Menampilkan seua data berita |
| [`/api/v1/berita/{id}`](##result-berita-id) | GET | Menampilkan data berita secara spesifik |
| [`/api/v1/kontak?tipe={GURU/TATA_USAHA/ALUMNI}`](##result-kontak) | GET | Menampilkan data kontak dengan pilihan tipe kontak guru/tata usaha/ alumni |
| [`/api/v1/galleries`](##result-galleries) | GET | Menampilkan data galleries |
| [`/api/v1/profile?tipe={sejarah/ekskul/fasilitas}`](##result-profile) | GET | menampilkan profile sekolah dengan pilihan sejarah, ekskul dan fasilitas |

<!-- <a name="home"/> -->
## Result Home

```json
{
  "meta": {
    "code": 200,
    "status": "success",
    "message": "Data home berhasil di ambil"
  },
  "data": {
    "berita": [
      {
        "id": 11,
        "judul": "DISDIK PERKENALKAN \"SI CANTIK\"",
        "deskripsi": "<p>CIBINONG – Guna meningkatkan efektifitas dan kualitas kerja Aparatur Sipil Negara (ASN) di wilayahnya. Dinas Pendidikan Kabupaten Bogor menyelenggarakan kegiatan sosialisasi penggunaan aplikasi “Si Cantik”.</p><p>Kasubag Umum dan Kepegawaian Disdik Kabupaten Bogor, Burhanudin menjelaskan, aplikasi Si Cantik ini berfungsi untuk pelaporan kinerja ASN.</p><p>“Di dalam aplikasi tersebut terdapat fitur absensi, LKHP, dan SKP. Namun, untuk saat ini fitur yang digunakan berfungsi untuk kehadiran pegawai,” jelasnya.</p><p>Dipaparkannya, aplikasi tersebut akan membaca serta mendeteksi lokasi pegawai ketika jam kerja sedang berlangsung.</p><p>“Untuk saat ini karena masih dalam masa pandemi, jam kerja pegawai pada pukul 08.00-15.00. Hal ini juga berlaku di ASN pada tingkat sekolah dan wilayah yang berada di lingkungan Dinas Pendidikan,” paparnya.</p><p>Ditegaskan Burhanudin, setiap SKPD dapat memantau secara langsung lokasi pegawai ketika jam kerja melalui aplikasi Siap Online.</p><p>“Kami sudah melakukan sosialisasi penggunaan aplikasi kepada seluruh ASN di 40 kecamatan, mulai dari pengawas, penilik, kepala sekolah hingga guru serta tenaga kependidikan jenjang SD dan SMP,” ungkapnya.</p><p>Sekretaris Dinas Pendidikan Kabupaten Bogor, Atis Tardiana berharap, dengan adanya aplikasi ini mampu meningkatkan kualitas efektifitas kinerja pegawai.</p><p>“Aplikasinya sudah mulai dipergunakan pada September dan akan dilakukan evaluasi rutin pada akhir bulan ini,” pungkasnya.(Admin/Prolap/Disdik).</p><p>&nbsp;</p><p>sumber: <i><strong>disdik bogor</strong></i></p>",
        "tipe": "BERITA",
        "deleted_at": null,
        "created_at": "2020-10-12T01:38:04.000000Z",
        "updated_at": "2020-10-12T01:38:04.000000Z",
        "galleries": []
      },
      {
        "id": 3,
        "judul": "EDUKASI PERUBAHAN PERILAKU DI MASA PANDEMI COVID-19",
        "deskripsi": "Saat ini beberapa negara di dunia sedang menghadapi pandemi Covid-19, sebuah penyakit menular yang disebabkan oleh SARS-CoV-2, di mana penderita Covid-19 dapat mengalami demam, batuk kering dan kesulitan bernapas atau pneumonia dan kegagalan multiorgan yang dapat berujung pada kematian. Penyakit ini pertama kali terdeteksi pertama kali di Kota Wuhan, Provinsi Hubei, China pada bulan Desember 2019 kemudian menyebar ke beberapa negara di Asia, Timur Tengah, Eropa, Amerika, Australia hingga Afrika. Per tanggal 9 September 2020, tercatat 216 negara terkena pandemi, 17.660.523 kasus positif dan 680.894 kasus meninggal dunia. Di Indonesia sendiri tercatat 203.342 kasus positif, 145.200 pasien sembuh dan 8.336 pasien meninggal dunia (data per 9 September 2020).\r\n\r\nSama hal-nya dengan seluruh negara yang mengalami pandemi, Pemerintah Indonesia senantiasa berusaha mengatasi pandemi melalui beragam kebijakan penanganan dan pencegahan. Berdasarkan pertimbangan bahwa penanganan pandemi harus dilakukan bersamaan dengan pemulihan perekonomian nasional, maka Presiden RI menetapkan Perpres No. 82 Tahun 2020 Tentang Komite Penanganan Covid-19 dan Pemulihan Ekonomi Nasional yang ditandatangani pada tanggal 20 Juli 2020. Komite tersebut terdiri dari Komite Kebijakan, Satuan Tugas Penanganan Covid-19 dan Satuan Tugas Pemulihan dan Transformasi Ekonomi Nasional.\r\n\r\nKhusus pada penanganan pandemi, Satuan Tugas Penanganan Covid-19, yang diketuai oleh Kepala Badan Nasional Penanggulangan Bencana, bertugas melaksanakan dan mengendalikan implementasi kebijakan strategis, menyelesaikan permasalahan pelaksanaan kebijakan strategis dan melakukan pengawasan pelaksanaan kebijakan strategis yang berkaitan dengan penanganan Covid-19.\r\n\r\nPenerapan protokol kesehatan adalah salah satu cara pencegahan penyebaran pandemi yang harus dipatuhi oleh seluruh masyarakat, seperti menjaga jarak, mencuci tangan dan menggunakan masker. Data per Juli 2020 tercatat bahwa tingkat kepatuhan menjaga jarak sebanyak 72%, mencuci tangan sebanyak 80% dan menggunakan masker sebanyak 80%. Meskipun persentase masing-masing tindak pencegahan terbilang tingi, namun laju penyebaran Covid-19 di Indonesia tetap tinggi dan semakin meningkat. Oleh karena itu, Satgas Penanganan Covid-19 bekerja sama dengan berbagai institusi diharapkan terus mensosialisasikan gerakan Perubahan Perilaku 3M (mencuci tangan, menggunakan masker, menjaga jarak). Dalam hal ini Satuan Tugas Penanganan Covid-19 Subidang edukasi perubahan perilaku telah menyusun pedoman edukasi perubahan perilaku sebagai pedoman dalam pembiasaan perubahan perilaku dimasa pandemi Covid-19 bagi masyarakat.",
        "tipe": "BERITA",
        "deleted_at": null,
        "created_at": "2020-10-07T23:49:03.000000Z",
        "updated_at": "2020-10-08T01:15:48.000000Z",
        "galleries": [
          {
            "id": 9,
            "informations_id": "3",
            "tipe": "BERITA",
            "photo": "http://cms.sman1jonggol.sch.id/storage/assets/informasi-galleries/KBlegthXGqA2BbgiWUNMB7LS41D8PWZzLeBjTTw7.jpeg",
            "is_default": 1,
            "deleted_at": null,
            "created_at": "2020-10-09T13:46:28.000000Z",
            "updated_at": "2020-10-09T13:46:28.000000Z"
          }
        ]
      },
      {
        "id": 2,
        "judul": "buku saku panduan penyelenggaraan pembelajaran",
        "deskripsi": "<p><strong>Pandemi Covid-19</strong> telah ditetapkan Presiden Republik Indonesia sebagai kedaruratan kesehatan dan bencana nasional non-alam. Sebagai upaya untuk mencegah penyebaran Covid-19 serta mengutamakan kesehatan dan keselamatan warga pendidikan, maka satuan pendidikan yang berada di zona kuning, oranye, dan merah dilarang untuk melakukan proses pembelajaran tatap muka dan melanjutkan belajar dari rumah.&nbsp;</p><p>&nbsp;</p><p>Hal ini sesuai dengan <strong>Surat Keputusan Bersama (SKB) Menteri Pendidikan dan Kebudayaan (Mendikbud)</strong>, Menteri Agama (Menag), Menteri Kesehatan (Menkes), dan Menteri Dalam Negeri (Mendagri) yang ditetapkan pada 15 Juni 2020 yang lalu. Guna memastikan hak belajar setiap anak terpenuhi, Pemerintah melalui Kementerian Pendidikan dan Kebudayaan telah menghadirkan beberapa inisiatif untuk mendukung pelaksanaan belajar dari rumah sesuai arahan Presiden. Beberapa inisiatif/terobosan tersebut di antaranya adalah pengoptimalan platform pendidikan jarak jauh Rumah Belajar serta kerja sama dengan berbagai platform penyedia layanan pembelajaran daring, penyediaan kuota gratis dan subsidi kuota melalui kerja sama dengan provider telekomunikasi, kebijakan relaksasi penggunaan dana BOS, peningkatan kapasitas guru melalui Guru Berbagi dan Seri Webinar terkait pembelajaran jarak jauh (PJJ), program Belajar dari Rumah di TVRI, dan program pembelajaran di RRI. Beberapa kendala yang timbul dalam pelaksanaan PJJ di antaranya kebingungan guru dalam mengelola PJJ dan masih terfokus dalam penuntasan kurikulum. Sementara itu tidak semua orang tua mampu mendampingi anak-anak belajar di rumah dengan optimal karena harus bekerja ataupun kemampuan sebagai pendamping belajar anak.&nbsp;</p><p>&nbsp;</p><p>Para peserta didik juga mengalami kesulitan berkonsentrasi belajar dari rumah serta meningkatnya rasa jenuh/bosan yang berpotensi menimbulkan gangguan pada kesehatan jiwa. Selain mengutamakan kesehatan dan keselamatan peserta didik, pendidik, tenaga kependidikan, keluarga, dan masyarakat, pemerintah juga mempertimbangkan tumbuh kembang peserta didik dan kondisi psikososial dalam pemenuhan layanan pendidikan selama pandemi Covid-19. Maka, dengan mempertimbangkan kebutuhan pembelajaran serta masukan dari para ahli dan organisasi serta mempertimbangkan evaluasi implementasi SKB Empat Menteri, Pemerintah melakukan penyesuaian.&nbsp;</p><p>&nbsp;</p><p>Penyesuaian dilakukan melalui keputusan bersama empat menteri terkait pelaksanaan pembelajaran di zona selain merah dan oranye, yakni di zona kuning dan hijau, untuk dapat melaksanakan pembelajaran tatap muka dengan penerapan protokol kesehatan yang ketat. Buku saku ini disusun untuk memudahkan para pemangku kepentingan yang terkait erat dengan pembelajaran selama masa pandemi Covid-19 memperoleh informasi secara lengkap mengenai panduan pembelajaran. Isi dalam buku saku ini diambil utuh dari lampiran Keputusan Bersama Mendikbud, Menang, Menkes, dan Mendagri tentang Perubahan atas Keputusan Bersama Mendikbud, Menag, Menkes, dan Mendagri tentang Panduan Penyelenggaraan pada Tahun Ajaran 2020/2021 dan Tahun Akademik 2020/2021 di Masa Pandemi Covid-19 yang ditetapkan pada 7 Agustus 2020. (*)</p>",
        "tipe": "BERITA",
        "deleted_at": null,
        "created_at": "2020-10-07T23:44:13.000000Z",
        "updated_at": "2020-10-12T00:38:58.000000Z",
        "galleries": [
          {
            "id": 7,
            "informations_id": "2",
            "tipe": "BERITA",
            "photo": "http://cms.sman1jonggol.sch.id/storage/assets/informasi-galleries/1V8N1fFoVVo3jp3C7FST97NL4kt8YMdkNMUGyM53.jpeg",
            "is_default": 1,
            "deleted_at": null,
            "created_at": "2020-10-09T02:08:35.000000Z",
            "updated_at": "2020-10-09T02:08:35.000000Z"
          },
          {
            "id": 12,
            "informations_id": "2",
            "tipe": "BERITA",
            "photo": "http://cms.sman1jonggol.sch.id/storage/assets/informasi-galleries/Ef0eLcwAr6szC2mOzfJnncZPXxkol7xSpYTx5KqD.jpeg",
            "is_default": 1,
            "deleted_at": null,
            "created_at": "2020-10-12T02:09:33.000000Z",
            "updated_at": "2020-10-12T02:09:33.000000Z"
          }
        ]
      }
    ],
    "kampus": [
      {
        "id": 4,
        "name": "institut teknologi bandung",
        "photo": "http://cms.sman1jonggol.sch.id/storage/assets/kampus-alumni/w7ugWzDlYapC0zLksXqysvyFEjSU5RxRcpCIWItA.png",
        "deleted_at": null,
        "created_at": "2020-10-07T10:07:04.000000Z",
        "updated_at": "2020-10-07T10:07:04.000000Z"
      },
      {
        "id": 6,
        "name": "universitas indonesia",
        "photo": "http://cms.sman1jonggol.sch.id/storage/assets/kampus-alumni/xoUqckQUJVCkAPLMpHMj0Hz8u94vIVskgyD1iv4j.png",
        "deleted_at": null,
        "created_at": "2020-10-07T14:14:35.000000Z",
        "updated_at": "2020-10-07T14:14:35.000000Z"
      },
      {
        "id": 7,
        "name": "universitas gadjah mada",
        "photo": "http://cms.sman1jonggol.sch.id/storage/assets/kampus-alumni/0jdEC4Cxi2oKWkMc2LrACrLo7DU4TFPtgaQTk8KE.png",
        "deleted_at": null,
        "created_at": "2020-10-09T13:53:21.000000Z",
        "updated_at": "2020-10-09T13:53:21.000000Z"
      },
      {
        "id": 8,
        "name": "sekolah tinggi akuntansi negara",
        "photo": "http://cms.sman1jonggol.sch.id/storage/assets/kampus-alumni/kEbrtvUwAOqGdIJS260YuIVn7JQMt2wdNrUvCanx.png",
        "deleted_at": null,
        "created_at": "2020-10-09T13:53:43.000000Z",
        "updated_at": "2020-10-09T13:53:43.000000Z"
      },
      {
        "id": 9,
        "name": "politeknik negeri jakarta",
        "photo": "http://cms.sman1jonggol.sch.id/storage/assets/kampus-alumni/s2Dg7kBhVrBKpkOWeXeFPWC9ljPxluW4x1l74WRu.png",
        "deleted_at": null,
        "created_at": "2020-10-09T13:54:07.000000Z",
        "updated_at": "2020-10-09T13:54:07.000000Z"
      },
      {
        "id": 10,
        "name": "universitas islam negeri",
        "photo": "http://cms.sman1jonggol.sch.id/storage/assets/kampus-alumni/rluCQBoM2hJ8Dq4qiIR4TEp4zJCeZYcWn2I9eN7x.png",
        "deleted_at": null,
        "created_at": "2020-10-09T13:54:29.000000Z",
        "updated_at": "2020-10-09T13:54:29.000000Z"
      }
    ],
    "alumni": [
      {
        "id": 4,
        "name": "Andika Pertiwi",
        "photo": "http://cms.sman1jonggol.sch.id/storage/assets/alumni/Lri1gSAk4LzC7FRZnwA6xdj0hZvYuT6GKILttjTn.jpeg",
        "testimoni": "<blockquote><p>SMAN 1 Jonggol tidak hanya sebagai tempat sarana belajar dan menggajar tetapi memberikan ruang untuk mengembangkan potensi diri baik secara akademis maupun non akademis.</p></blockquote>",
        "kampus_alumnis_id": "4",
        "deleted_at": null,
        "created_at": "2020-10-07T14:06:54.000000Z",
        "updated_at": "2020-10-09T14:09:56.000000Z",
        "kampus_alumni": {
          "id": 4,
          "name": "institut teknologi bandung",
          "photo": "http://cms.sman1jonggol.sch.id/storage/assets/kampus-alumni/w7ugWzDlYapC0zLksXqysvyFEjSU5RxRcpCIWItA.png",
          "deleted_at": null,
          "created_at": "2020-10-07T10:07:04.000000Z",
          "updated_at": "2020-10-07T10:07:04.000000Z"
        }
      },
      {
        "id": 9,
        "name": "ade suhada",
        "photo": "http://cms.sman1jonggol.sch.id/storage/assets/alumni/YCvFHZsgdkmH7uEEyeo30nuRvuCejI2GN9jOLVx8.jpeg",
        "testimoni": "“It was glorious be a part of this school! man jadda wa jada”",
        "kampus_alumnis_id": "7",
        "deleted_at": null,
        "created_at": "2020-10-09T13:56:04.000000Z",
        "updated_at": "2020-10-09T13:56:04.000000Z",
        "kampus_alumni": {
          "id": 7,
          "name": "universitas gadjah mada",
          "photo": "http://cms.sman1jonggol.sch.id/storage/assets/kampus-alumni/0jdEC4Cxi2oKWkMc2LrACrLo7DU4TFPtgaQTk8KE.png",
          "deleted_at": null,
          "created_at": "2020-10-09T13:53:21.000000Z",
          "updated_at": "2020-10-09T13:53:21.000000Z"
        }
      },
      {
        "id": 10,
        "name": "elvin maulani ma'ruf",
        "photo": "http://cms.sman1jonggol.sch.id/storage/assets/alumni/oCS8d0VqGw2BWUfiEG8rqxDwFa1TC1bcfrjTPDln.jpeg",
        "testimoni": "“Never stop learning, because life never stop teaching !”",
        "kampus_alumnis_id": "6",
        "deleted_at": null,
        "created_at": "2020-10-09T13:56:40.000000Z",
        "updated_at": "2020-10-09T13:56:40.000000Z",
        "kampus_alumni": {
          "id": 6,
          "name": "universitas indonesia",
          "photo": "http://cms.sman1jonggol.sch.id/storage/assets/kampus-alumni/xoUqckQUJVCkAPLMpHMj0Hz8u94vIVskgyD1iv4j.png",
          "deleted_at": null,
          "created_at": "2020-10-07T14:14:35.000000Z",
          "updated_at": "2020-10-07T14:14:35.000000Z"
        }
      }
    ],
    "guru": [
      {
        "id": 8,
        "name": "Arif Munarto, S.Pd., M.M",
        "photo": "http://cms.sman1jonggol.sch.id/storage/assets/guru/lRkItJQFWYsMiZ17eMiDh44iQxTGJOayFWjaJmTl.png",
        "subject": "FISIKA",
        "deleted_at": null,
        "created_at": "2020-10-08T13:14:18.000000Z",
        "updated_at": "2020-10-08T13:14:18.000000Z"
      },
      {
        "id": 9,
        "name": "Ayo Suherman, S.Pd., M.M.",
        "photo": "http://cms.sman1jonggol.sch.id/storage/assets/guru/wFHC7TOxUy97AzOTG6obHVowbjILaILyQ8w80ipn.png",
        "subject": "PJOK",
        "deleted_at": null,
        "created_at": "2020-10-08T13:22:07.000000Z",
        "updated_at": "2020-10-08T13:22:07.000000Z"
      },
      {
        "id": 10,
        "name": "Azis Muslim, S.Pd.I.",
        "photo": "http://cms.sman1jonggol.sch.id/storage/assets/guru/HgCbh6AwEgDuWyeSpdCuyAdboYBq1GhtfrFYz6jh.png",
        "subject": "SOSIOLOGI",
        "deleted_at": null,
        "created_at": "2020-10-10T12:53:38.000000Z",
        "updated_at": "2020-10-10T12:53:38.000000Z"
      },
      {
        "id": 11,
        "name": "Didih Wastijo, S.Pd., M.M.",
        "photo": "http://cms.sman1jonggol.sch.id/storage/assets/guru/E9ninyZSQ4oAMU5TbiERZ1ZYgf7dtb759vL5IwhD.png",
        "subject": "PJOK",
        "deleted_at": null,
        "created_at": "2020-10-10T12:54:23.000000Z",
        "updated_at": "2020-10-10T12:54:23.000000Z"
      },
      {
        "id": 12,
        "name": "Dra. Agnes Supiyaningsih",
        "photo": "http://cms.sman1jonggol.sch.id/storage/assets/guru/2mg4MIvheypqUNQGhTiu7FLPKKtddYJLhknUTkII.png",
        "subject": "SEJARAH",
        "deleted_at": null,
        "created_at": "2020-10-10T12:54:52.000000Z",
        "updated_at": "2020-10-10T12:54:52.000000Z"
      },
      {
        "id": 13,
        "name": "Dra. Hj. Ikah Sartika, M.Pd.",
        "photo": "http://cms.sman1jonggol.sch.id/storage/assets/guru/ZpitTKAUkbiScv80NTp04zn21xUfxR2aw1TXrgZF.png",
        "subject": "B. INDONESIA",
        "deleted_at": null,
        "created_at": "2020-10-10T12:55:23.000000Z",
        "updated_at": "2020-10-10T12:55:23.000000Z"
      },
      {
        "id": 14,
        "name": "Dra. Justina Endang Wahyudijati",
        "photo": "http://cms.sman1jonggol.sch.id/storage/assets/guru/PsQnnNnXC7ROrVy8gmXCf4bFmOGqcPCy4M1b9Nby.png",
        "subject": "KIMIA",
        "deleted_at": null,
        "created_at": "2020-10-10T12:55:54.000000Z",
        "updated_at": "2020-10-10T12:55:54.000000Z"
      },
      {
        "id": 15,
        "name": "Dra. Rhina Andhayani, M.M.",
        "photo": "http://cms.sman1jonggol.sch.id/storage/assets/guru/gaotrviDgV5oJcD7XWCWgPL2wVcAhmkQJrx3OUIT.png",
        "subject": "MATEMATIKA",
        "deleted_at": null,
        "created_at": "2020-10-10T12:56:25.000000Z",
        "updated_at": "2020-10-10T12:56:25.000000Z"
      }
    ]
  }
}
```


## Result Berita

```json
{
  "meta": {
    "code": 200,
    "status": "success",
    "message": "Data berita berhasil di ambil"
  },
  "data": [
    {
      "id": 11,
      "judul": "DISDIK PERKENALKAN \"SI CANTIK\"",
      "deskripsi": "<p>CIBINONG – Guna meningkatkan efektifitas dan kualitas kerja Aparatur Sipil Negara (ASN) di wilayahnya. Dinas Pendidikan Kabupaten Bogor menyelenggarakan kegiatan sosialisasi penggunaan aplikasi “Si Cantik”.</p><p>Kasubag Umum dan Kepegawaian Disdik Kabupaten Bogor, Burhanudin menjelaskan, aplikasi Si Cantik ini berfungsi untuk pelaporan kinerja ASN.</p><p>“Di dalam aplikasi tersebut terdapat fitur absensi, LKHP, dan SKP. Namun, untuk saat ini fitur yang digunakan berfungsi untuk kehadiran pegawai,” jelasnya.</p><p>Dipaparkannya, aplikasi tersebut akan membaca serta mendeteksi lokasi pegawai ketika jam kerja sedang berlangsung.</p><p>“Untuk saat ini karena masih dalam masa pandemi, jam kerja pegawai pada pukul 08.00-15.00. Hal ini juga berlaku di ASN pada tingkat sekolah dan wilayah yang berada di lingkungan Dinas Pendidikan,” paparnya.</p><p>Ditegaskan Burhanudin, setiap SKPD dapat memantau secara langsung lokasi pegawai ketika jam kerja melalui aplikasi Siap Online.</p><p>“Kami sudah melakukan sosialisasi penggunaan aplikasi kepada seluruh ASN di 40 kecamatan, mulai dari pengawas, penilik, kepala sekolah hingga guru serta tenaga kependidikan jenjang SD dan SMP,” ungkapnya.</p><p>Sekretaris Dinas Pendidikan Kabupaten Bogor, Atis Tardiana berharap, dengan adanya aplikasi ini mampu meningkatkan kualitas efektifitas kinerja pegawai.</p><p>“Aplikasinya sudah mulai dipergunakan pada September dan akan dilakukan evaluasi rutin pada akhir bulan ini,” pungkasnya.(Admin/Prolap/Disdik).</p><p>&nbsp;</p><p>sumber: <i><strong>disdik bogor</strong></i></p>",
      "tipe": "BERITA",
      "deleted_at": null,
      "created_at": "2020-10-12T01:38:04.000000Z",
      "updated_at": "2020-10-12T01:38:04.000000Z",
      "galleries": []
    },
    {
      "id": 3,
      "judul": "EDUKASI PERUBAHAN PERILAKU DI MASA PANDEMI COVID-19",
      "deskripsi": "Saat ini beberapa negara di dunia sedang menghadapi pandemi Covid-19, sebuah penyakit menular yang disebabkan oleh SARS-CoV-2, di mana penderita Covid-19 dapat mengalami demam, batuk kering dan kesulitan bernapas atau pneumonia dan kegagalan multiorgan yang dapat berujung pada kematian. Penyakit ini pertama kali terdeteksi pertama kali di Kota Wuhan, Provinsi Hubei, China pada bulan Desember 2019 kemudian menyebar ke beberapa negara di Asia, Timur Tengah, Eropa, Amerika, Australia hingga Afrika. Per tanggal 9 September 2020, tercatat 216 negara terkena pandemi, 17.660.523 kasus positif dan 680.894 kasus meninggal dunia. Di Indonesia sendiri tercatat 203.342 kasus positif, 145.200 pasien sembuh dan 8.336 pasien meninggal dunia (data per 9 September 2020).\r\n\r\nSama hal-nya dengan seluruh negara yang mengalami pandemi, Pemerintah Indonesia senantiasa berusaha mengatasi pandemi melalui beragam kebijakan penanganan dan pencegahan. Berdasarkan pertimbangan bahwa penanganan pandemi harus dilakukan bersamaan dengan pemulihan perekonomian nasional, maka Presiden RI menetapkan Perpres No. 82 Tahun 2020 Tentang Komite Penanganan Covid-19 dan Pemulihan Ekonomi Nasional yang ditandatangani pada tanggal 20 Juli 2020. Komite tersebut terdiri dari Komite Kebijakan, Satuan Tugas Penanganan Covid-19 dan Satuan Tugas Pemulihan dan Transformasi Ekonomi Nasional.\r\n\r\nKhusus pada penanganan pandemi, Satuan Tugas Penanganan Covid-19, yang diketuai oleh Kepala Badan Nasional Penanggulangan Bencana, bertugas melaksanakan dan mengendalikan implementasi kebijakan strategis, menyelesaikan permasalahan pelaksanaan kebijakan strategis dan melakukan pengawasan pelaksanaan kebijakan strategis yang berkaitan dengan penanganan Covid-19.\r\n\r\nPenerapan protokol kesehatan adalah salah satu cara pencegahan penyebaran pandemi yang harus dipatuhi oleh seluruh masyarakat, seperti menjaga jarak, mencuci tangan dan menggunakan masker. Data per Juli 2020 tercatat bahwa tingkat kepatuhan menjaga jarak sebanyak 72%, mencuci tangan sebanyak 80% dan menggunakan masker sebanyak 80%. Meskipun persentase masing-masing tindak pencegahan terbilang tingi, namun laju penyebaran Covid-19 di Indonesia tetap tinggi dan semakin meningkat. Oleh karena itu, Satgas Penanganan Covid-19 bekerja sama dengan berbagai institusi diharapkan terus mensosialisasikan gerakan Perubahan Perilaku 3M (mencuci tangan, menggunakan masker, menjaga jarak). Dalam hal ini Satuan Tugas Penanganan Covid-19 Subidang edukasi perubahan perilaku telah menyusun pedoman edukasi perubahan perilaku sebagai pedoman dalam pembiasaan perubahan perilaku dimasa pandemi Covid-19 bagi masyarakat.",
      "tipe": "BERITA",
      "deleted_at": null,
      "created_at": "2020-10-07T23:49:03.000000Z",
      "updated_at": "2020-10-08T01:15:48.000000Z",
      "galleries": [
        {
          "id": 9,
          "informations_id": "3",
          "tipe": "BERITA",
          "photo": "https://cms.sman1jonggol.sch.id/storage/assets/informasi-galleries/KBlegthXGqA2BbgiWUNMB7LS41D8PWZzLeBjTTw7.jpeg",
          "is_default": 1,
          "deleted_at": null,
          "created_at": "2020-10-09T13:46:28.000000Z",
          "updated_at": "2020-10-09T13:46:28.000000Z"
        }
      ]
    },
    {
      "id": 2,
      "judul": "buku saku panduan penyelenggaraan pembelajaran",
      "deskripsi": "<p><strong>Pandemi Covid-19</strong> telah ditetapkan Presiden Republik Indonesia sebagai kedaruratan kesehatan dan bencana nasional non-alam. Sebagai upaya untuk mencegah penyebaran Covid-19 serta mengutamakan kesehatan dan keselamatan warga pendidikan, maka satuan pendidikan yang berada di zona kuning, oranye, dan merah dilarang untuk melakukan proses pembelajaran tatap muka dan melanjutkan belajar dari rumah.&nbsp;</p><p>&nbsp;</p><p>Hal ini sesuai dengan <strong>Surat Keputusan Bersama (SKB) Menteri Pendidikan dan Kebudayaan (Mendikbud)</strong>, Menteri Agama (Menag), Menteri Kesehatan (Menkes), dan Menteri Dalam Negeri (Mendagri) yang ditetapkan pada 15 Juni 2020 yang lalu. Guna memastikan hak belajar setiap anak terpenuhi, Pemerintah melalui Kementerian Pendidikan dan Kebudayaan telah menghadirkan beberapa inisiatif untuk mendukung pelaksanaan belajar dari rumah sesuai arahan Presiden. Beberapa inisiatif/terobosan tersebut di antaranya adalah pengoptimalan platform pendidikan jarak jauh Rumah Belajar serta kerja sama dengan berbagai platform penyedia layanan pembelajaran daring, penyediaan kuota gratis dan subsidi kuota melalui kerja sama dengan provider telekomunikasi, kebijakan relaksasi penggunaan dana BOS, peningkatan kapasitas guru melalui Guru Berbagi dan Seri Webinar terkait pembelajaran jarak jauh (PJJ), program Belajar dari Rumah di TVRI, dan program pembelajaran di RRI. Beberapa kendala yang timbul dalam pelaksanaan PJJ di antaranya kebingungan guru dalam mengelola PJJ dan masih terfokus dalam penuntasan kurikulum. Sementara itu tidak semua orang tua mampu mendampingi anak-anak belajar di rumah dengan optimal karena harus bekerja ataupun kemampuan sebagai pendamping belajar anak.&nbsp;</p><p>&nbsp;</p><p>Para peserta didik juga mengalami kesulitan berkonsentrasi belajar dari rumah serta meningkatnya rasa jenuh/bosan yang berpotensi menimbulkan gangguan pada kesehatan jiwa. Selain mengutamakan kesehatan dan keselamatan peserta didik, pendidik, tenaga kependidikan, keluarga, dan masyarakat, pemerintah juga mempertimbangkan tumbuh kembang peserta didik dan kondisi psikososial dalam pemenuhan layanan pendidikan selama pandemi Covid-19. Maka, dengan mempertimbangkan kebutuhan pembelajaran serta masukan dari para ahli dan organisasi serta mempertimbangkan evaluasi implementasi SKB Empat Menteri, Pemerintah melakukan penyesuaian.&nbsp;</p><p>&nbsp;</p><p>Penyesuaian dilakukan melalui keputusan bersama empat menteri terkait pelaksanaan pembelajaran di zona selain merah dan oranye, yakni di zona kuning dan hijau, untuk dapat melaksanakan pembelajaran tatap muka dengan penerapan protokol kesehatan yang ketat. Buku saku ini disusun untuk memudahkan para pemangku kepentingan yang terkait erat dengan pembelajaran selama masa pandemi Covid-19 memperoleh informasi secara lengkap mengenai panduan pembelajaran. Isi dalam buku saku ini diambil utuh dari lampiran Keputusan Bersama Mendikbud, Menang, Menkes, dan Mendagri tentang Perubahan atas Keputusan Bersama Mendikbud, Menag, Menkes, dan Mendagri tentang Panduan Penyelenggaraan pada Tahun Ajaran 2020/2021 dan Tahun Akademik 2020/2021 di Masa Pandemi Covid-19 yang ditetapkan pada 7 Agustus 2020. (*)</p>",
      "tipe": "BERITA",
      "deleted_at": null,
      "created_at": "2020-10-07T23:44:13.000000Z",
      "updated_at": "2020-10-12T00:38:58.000000Z",
      "galleries": [
        {
          "id": 7,
          "informations_id": "2",
          "tipe": "BERITA",
          "photo": "https://cms.sman1jonggol.sch.id/storage/assets/informasi-galleries/1V8N1fFoVVo3jp3C7FST97NL4kt8YMdkNMUGyM53.jpeg",
          "is_default": 1,
          "deleted_at": null,
          "created_at": "2020-10-09T02:08:35.000000Z",
          "updated_at": "2020-10-09T02:08:35.000000Z"
        },
        {
          "id": 12,
          "informations_id": "2",
          "tipe": "BERITA",
          "photo": "https://cms.sman1jonggol.sch.id/storage/assets/informasi-galleries/Ef0eLcwAr6szC2mOzfJnncZPXxkol7xSpYTx5KqD.jpeg",
          "is_default": 1,
          "deleted_at": null,
          "created_at": "2020-10-12T02:09:33.000000Z",
          "updated_at": "2020-10-12T02:09:33.000000Z"
        }
      ]
    }
  ]
}
```


## Result Berita ID

```json
{
  "meta": {
    "code": 200,
    "status": "success",
    "message": "Detail berita berhasil di ambil"
  },
  "data": [
    {
      "id": 11,
      "judul": "DISDIK PERKENALKAN \"SI CANTIK\"",
      "deskripsi": "<p>CIBINONG – Guna meningkatkan efektifitas dan kualitas kerja Aparatur Sipil Negara (ASN) di wilayahnya. Dinas Pendidikan Kabupaten Bogor menyelenggarakan kegiatan sosialisasi penggunaan aplikasi “Si Cantik”.</p><p>Kasubag Umum dan Kepegawaian Disdik Kabupaten Bogor, Burhanudin menjelaskan, aplikasi Si Cantik ini berfungsi untuk pelaporan kinerja ASN.</p><p>“Di dalam aplikasi tersebut terdapat fitur absensi, LKHP, dan SKP. Namun, untuk saat ini fitur yang digunakan berfungsi untuk kehadiran pegawai,” jelasnya.</p><p>Dipaparkannya, aplikasi tersebut akan membaca serta mendeteksi lokasi pegawai ketika jam kerja sedang berlangsung.</p><p>“Untuk saat ini karena masih dalam masa pandemi, jam kerja pegawai pada pukul 08.00-15.00. Hal ini juga berlaku di ASN pada tingkat sekolah dan wilayah yang berada di lingkungan Dinas Pendidikan,” paparnya.</p><p>Ditegaskan Burhanudin, setiap SKPD dapat memantau secara langsung lokasi pegawai ketika jam kerja melalui aplikasi Siap Online.</p><p>“Kami sudah melakukan sosialisasi penggunaan aplikasi kepada seluruh ASN di 40 kecamatan, mulai dari pengawas, penilik, kepala sekolah hingga guru serta tenaga kependidikan jenjang SD dan SMP,” ungkapnya.</p><p>Sekretaris Dinas Pendidikan Kabupaten Bogor, Atis Tardiana berharap, dengan adanya aplikasi ini mampu meningkatkan kualitas efektifitas kinerja pegawai.</p><p>“Aplikasinya sudah mulai dipergunakan pada September dan akan dilakukan evaluasi rutin pada akhir bulan ini,” pungkasnya.(Admin/Prolap/Disdik).</p><p>&nbsp;</p><p>sumber: <i><strong>disdik bogor</strong></i></p>",
      "tipe": "BERITA",
      "deleted_at": null,
      "created_at": "2020-10-12T01:38:04.000000Z",
      "updated_at": "2020-10-12T01:38:04.000000Z",
      "galleries": []
    }
  ]
}
```

## Result Kontak

```json
{
  "meta": {
    "code": 200,
    "status": "success",
    "message": "Kontak berhasil di ambil"
  },
  "data": {
    "guru": [
      {
        "id": 8,
        "name": "Arif Munarto, S.Pd., M.M",
        "photo": "http://cms.sman1jonggol.sch.id/storage/assets/guru/lRkItJQFWYsMiZ17eMiDh44iQxTGJOayFWjaJmTl.png",
        "subject": "FISIKA",
        "deleted_at": null,
        "created_at": "2020-10-08T13:14:18.000000Z",
        "updated_at": "2020-10-08T13:14:18.000000Z"
      },
      {
        "id": 9,
        "name": "Ayo Suherman, S.Pd., M.M.",
        "photo": "http://cms.sman1jonggol.sch.id/storage/assets/guru/wFHC7TOxUy97AzOTG6obHVowbjILaILyQ8w80ipn.png",
        "subject": "PJOK",
        "deleted_at": null,
        "created_at": "2020-10-08T13:22:07.000000Z",
        "updated_at": "2020-10-08T13:22:07.000000Z"
      },
      {
        "id": 10,
        "name": "Azis Muslim, S.Pd.I.",
        "photo": "http://cms.sman1jonggol.sch.id/storage/assets/guru/HgCbh6AwEgDuWyeSpdCuyAdboYBq1GhtfrFYz6jh.png",
        "subject": "SOSIOLOGI",
        "deleted_at": null,
        "created_at": "2020-10-10T12:53:38.000000Z",
        "updated_at": "2020-10-10T12:53:38.000000Z"
      },
      {
        "id": 11,
        "name": "Didih Wastijo, S.Pd., M.M.",
        "photo": "http://cms.sman1jonggol.sch.id/storage/assets/guru/E9ninyZSQ4oAMU5TbiERZ1ZYgf7dtb759vL5IwhD.png",
        "subject": "PJOK",
        "deleted_at": null,
        "created_at": "2020-10-10T12:54:23.000000Z",
        "updated_at": "2020-10-10T12:54:23.000000Z"
      },
      {
        "id": 12,
        "name": "Dra. Agnes Supiyaningsih",
        "photo": "http://cms.sman1jonggol.sch.id/storage/assets/guru/2mg4MIvheypqUNQGhTiu7FLPKKtddYJLhknUTkII.png",
        "subject": "SEJARAH",
        "deleted_at": null,
        "created_at": "2020-10-10T12:54:52.000000Z",
        "updated_at": "2020-10-10T12:54:52.000000Z"
      },
      {
        "id": 13,
        "name": "Dra. Hj. Ikah Sartika, M.Pd.",
        "photo": "http://cms.sman1jonggol.sch.id/storage/assets/guru/ZpitTKAUkbiScv80NTp04zn21xUfxR2aw1TXrgZF.png",
        "subject": "B. INDONESIA",
        "deleted_at": null,
        "created_at": "2020-10-10T12:55:23.000000Z",
        "updated_at": "2020-10-10T12:55:23.000000Z"
      },
      {
        "id": 14,
        "name": "Dra. Justina Endang Wahyudijati",
        "photo": "http://cms.sman1jonggol.sch.id/storage/assets/guru/PsQnnNnXC7ROrVy8gmXCf4bFmOGqcPCy4M1b9Nby.png",
        "subject": "KIMIA",
        "deleted_at": null,
        "created_at": "2020-10-10T12:55:54.000000Z",
        "updated_at": "2020-10-10T12:55:54.000000Z"
      },
      {
        "id": 15,
        "name": "Dra. Rhina Andhayani, M.M.",
        "photo": "http://cms.sman1jonggol.sch.id/storage/assets/guru/gaotrviDgV5oJcD7XWCWgPL2wVcAhmkQJrx3OUIT.png",
        "subject": "MATEMATIKA",
        "deleted_at": null,
        "created_at": "2020-10-10T12:56:25.000000Z",
        "updated_at": "2020-10-10T12:56:25.000000Z"
      }
    ]
  }
}
```

## Result Galleries

```json
{
  "meta": {
    "code": 200,
    "status": "success",
    "message": "Galleries berhasil di ambil"
  },
  "data": {
    "galleries": [
      {
        "id": 7,
        "informations_id": "2",
        "tipe": "BERITA",
        "photo": "https://cms.sman1jonggol.sch.id/storage/assets/informasi-galleries/1V8N1fFoVVo3jp3C7FST97NL4kt8YMdkNMUGyM53.jpeg",
        "is_default": 1,
        "deleted_at": null,
        "created_at": "2020-10-09T02:08:35.000000Z",
        "updated_at": "2020-10-09T02:08:35.000000Z",
        "information": {
          "id": 2,
          "judul": "buku saku panduan penyelenggaraan pembelajaran",
          "deskripsi": "<p><strong>Pandemi Covid-19</strong> telah ditetapkan Presiden Republik Indonesia sebagai kedaruratan kesehatan dan bencana nasional non-alam. Sebagai upaya untuk mencegah penyebaran Covid-19 serta mengutamakan kesehatan dan keselamatan warga pendidikan, maka satuan pendidikan yang berada di zona kuning, oranye, dan merah dilarang untuk melakukan proses pembelajaran tatap muka dan melanjutkan belajar dari rumah.&nbsp;</p><p>&nbsp;</p><p>Hal ini sesuai dengan <strong>Surat Keputusan Bersama (SKB) Menteri Pendidikan dan Kebudayaan (Mendikbud)</strong>, Menteri Agama (Menag), Menteri Kesehatan (Menkes), dan Menteri Dalam Negeri (Mendagri) yang ditetapkan pada 15 Juni 2020 yang lalu. Guna memastikan hak belajar setiap anak terpenuhi, Pemerintah melalui Kementerian Pendidikan dan Kebudayaan telah menghadirkan beberapa inisiatif untuk mendukung pelaksanaan belajar dari rumah sesuai arahan Presiden. Beberapa inisiatif/terobosan tersebut di antaranya adalah pengoptimalan platform pendidikan jarak jauh Rumah Belajar serta kerja sama dengan berbagai platform penyedia layanan pembelajaran daring, penyediaan kuota gratis dan subsidi kuota melalui kerja sama dengan provider telekomunikasi, kebijakan relaksasi penggunaan dana BOS, peningkatan kapasitas guru melalui Guru Berbagi dan Seri Webinar terkait pembelajaran jarak jauh (PJJ), program Belajar dari Rumah di TVRI, dan program pembelajaran di RRI. Beberapa kendala yang timbul dalam pelaksanaan PJJ di antaranya kebingungan guru dalam mengelola PJJ dan masih terfokus dalam penuntasan kurikulum. Sementara itu tidak semua orang tua mampu mendampingi anak-anak belajar di rumah dengan optimal karena harus bekerja ataupun kemampuan sebagai pendamping belajar anak.&nbsp;</p><p>&nbsp;</p><p>Para peserta didik juga mengalami kesulitan berkonsentrasi belajar dari rumah serta meningkatnya rasa jenuh/bosan yang berpotensi menimbulkan gangguan pada kesehatan jiwa. Selain mengutamakan kesehatan dan keselamatan peserta didik, pendidik, tenaga kependidikan, keluarga, dan masyarakat, pemerintah juga mempertimbangkan tumbuh kembang peserta didik dan kondisi psikososial dalam pemenuhan layanan pendidikan selama pandemi Covid-19. Maka, dengan mempertimbangkan kebutuhan pembelajaran serta masukan dari para ahli dan organisasi serta mempertimbangkan evaluasi implementasi SKB Empat Menteri, Pemerintah melakukan penyesuaian.&nbsp;</p><p>&nbsp;</p><p>Penyesuaian dilakukan melalui keputusan bersama empat menteri terkait pelaksanaan pembelajaran di zona selain merah dan oranye, yakni di zona kuning dan hijau, untuk dapat melaksanakan pembelajaran tatap muka dengan penerapan protokol kesehatan yang ketat. Buku saku ini disusun untuk memudahkan para pemangku kepentingan yang terkait erat dengan pembelajaran selama masa pandemi Covid-19 memperoleh informasi secara lengkap mengenai panduan pembelajaran. Isi dalam buku saku ini diambil utuh dari lampiran Keputusan Bersama Mendikbud, Menang, Menkes, dan Mendagri tentang Perubahan atas Keputusan Bersama Mendikbud, Menag, Menkes, dan Mendagri tentang Panduan Penyelenggaraan pada Tahun Ajaran 2020/2021 dan Tahun Akademik 2020/2021 di Masa Pandemi Covid-19 yang ditetapkan pada 7 Agustus 2020. (*)</p>",
          "tipe": "BERITA",
          "deleted_at": null,
          "created_at": "2020-10-07T23:44:13.000000Z",
          "updated_at": "2020-10-12T00:38:58.000000Z"
        }
      },
      {
        "id": 9,
        "informations_id": "3",
        "tipe": "BERITA",
        "photo": "https://cms.sman1jonggol.sch.id/storage/assets/informasi-galleries/KBlegthXGqA2BbgiWUNMB7LS41D8PWZzLeBjTTw7.jpeg",
        "is_default": 1,
        "deleted_at": null,
        "created_at": "2020-10-09T13:46:28.000000Z",
        "updated_at": "2020-10-09T13:46:28.000000Z",
        "information": {
          "id": 3,
          "judul": "EDUKASI PERUBAHAN PERILAKU DI MASA PANDEMI COVID-19",
          "deskripsi": "Saat ini beberapa negara di dunia sedang menghadapi pandemi Covid-19, sebuah penyakit menular yang disebabkan oleh SARS-CoV-2, di mana penderita Covid-19 dapat mengalami demam, batuk kering dan kesulitan bernapas atau pneumonia dan kegagalan multiorgan yang dapat berujung pada kematian. Penyakit ini pertama kali terdeteksi pertama kali di Kota Wuhan, Provinsi Hubei, China pada bulan Desember 2019 kemudian menyebar ke beberapa negara di Asia, Timur Tengah, Eropa, Amerika, Australia hingga Afrika. Per tanggal 9 September 2020, tercatat 216 negara terkena pandemi, 17.660.523 kasus positif dan 680.894 kasus meninggal dunia. Di Indonesia sendiri tercatat 203.342 kasus positif, 145.200 pasien sembuh dan 8.336 pasien meninggal dunia (data per 9 September 2020).\r\n\r\nSama hal-nya dengan seluruh negara yang mengalami pandemi, Pemerintah Indonesia senantiasa berusaha mengatasi pandemi melalui beragam kebijakan penanganan dan pencegahan. Berdasarkan pertimbangan bahwa penanganan pandemi harus dilakukan bersamaan dengan pemulihan perekonomian nasional, maka Presiden RI menetapkan Perpres No. 82 Tahun 2020 Tentang Komite Penanganan Covid-19 dan Pemulihan Ekonomi Nasional yang ditandatangani pada tanggal 20 Juli 2020. Komite tersebut terdiri dari Komite Kebijakan, Satuan Tugas Penanganan Covid-19 dan Satuan Tugas Pemulihan dan Transformasi Ekonomi Nasional.\r\n\r\nKhusus pada penanganan pandemi, Satuan Tugas Penanganan Covid-19, yang diketuai oleh Kepala Badan Nasional Penanggulangan Bencana, bertugas melaksanakan dan mengendalikan implementasi kebijakan strategis, menyelesaikan permasalahan pelaksanaan kebijakan strategis dan melakukan pengawasan pelaksanaan kebijakan strategis yang berkaitan dengan penanganan Covid-19.\r\n\r\nPenerapan protokol kesehatan adalah salah satu cara pencegahan penyebaran pandemi yang harus dipatuhi oleh seluruh masyarakat, seperti menjaga jarak, mencuci tangan dan menggunakan masker. Data per Juli 2020 tercatat bahwa tingkat kepatuhan menjaga jarak sebanyak 72%, mencuci tangan sebanyak 80% dan menggunakan masker sebanyak 80%. Meskipun persentase masing-masing tindak pencegahan terbilang tingi, namun laju penyebaran Covid-19 di Indonesia tetap tinggi dan semakin meningkat. Oleh karena itu, Satgas Penanganan Covid-19 bekerja sama dengan berbagai institusi diharapkan terus mensosialisasikan gerakan Perubahan Perilaku 3M (mencuci tangan, menggunakan masker, menjaga jarak). Dalam hal ini Satuan Tugas Penanganan Covid-19 Subidang edukasi perubahan perilaku telah menyusun pedoman edukasi perubahan perilaku sebagai pedoman dalam pembiasaan perubahan perilaku dimasa pandemi Covid-19 bagi masyarakat.",
          "tipe": "BERITA",
          "deleted_at": null,
          "created_at": "2020-10-07T23:49:03.000000Z",
          "updated_at": "2020-10-08T01:15:48.000000Z"
        }
      },
      {
        "id": 10,
        "informations_id": "8",
        "tipe": "EKSKUL",
        "photo": "https://cms.sman1jonggol.sch.id/storage/assets/informasi-galleries/gELuavsZW2g88tC7Y5OBSBQnOu6I2sy0olyeYOzt.jpeg",
        "is_default": 1,
        "deleted_at": null,
        "created_at": "2020-10-10T03:47:13.000000Z",
        "updated_at": "2020-10-10T03:47:13.000000Z",
        "information": {
          "id": 8,
          "judul": "OSIS",
          "deskripsi": "<p>Sebelum lahirnya OSIS, di sekolah-sekolah tingkat SLTP dan SLTA terdapat organisasi yang bebagai macam corak bentuknya. Ada organisasi siswa yang hanya dibentuk bersifat intern sekolah itu sendiri, dan ada pula organisasi siswa yang dibentuk oleh organisasi siswa di luar sekolah. Organisasi siswa yang dibentuk dan mempunyai hubungan dengan organisasi siswa dari luar sekolah, sebagian ada yang mengarah pada hal-hal bersifat politis, sehingga kegiatan organisasi siswa tersebut dikendalikan dari luar sekolah sebagai tempat diselenggarakannya proses belajar mengajar. Akibat dari keadaan yang demikian itu, maka timbullah loyalitas ganda, disatu pihak harus melaksanakan peraturan yang dibuat Kepala Sekolah, sedang dipihak lain harus tunduk kepada organisasi siswa yang dikendalikan di luar sekolah. Dapat dibayangkan berapa banyak macam organisasi siswa yang tumbuh dan berkembang pada saat itu, dan bukan tidak mungkin organisasi siswa tersebut dapat dimanfaatkan untuk kepentingan organisasi di luar sekolah. Itu sebabnya pada tahun 1970 sampai dengan tahun 1972, beberapa pimpinan organisasi siswa yang sadar akan maksud dan tujuan belajar di sekolah, ingin menghindari bahaya perpecahan di antara para siswa intra sekolah di sekolah masing-masing, setelah mendapat arahan dari pimpinan Departemen Pendidikan dan Kebudayaan. Pembinaan dan pengembangan generasi muda diarahkan untuk mempersiapkan kader penerus perjuangan bangsa dan pembangunan nasional dengan memberikan bekal keterampilan, kepemimpinan, kesegaran jasmani, daya kreasi, patriotisme, idealisme, kepribadian dan budi pekerti luhur. Oleh karena itu pembanguan wadah pembinaan generasi muda di lingkungan sekolah yang diterapkan melalui Organisasi Siswa Intra Sekolah (OSIS) perlu ditata secara terarah dan teratur. Betapa besar perhatian dan usaha pemerintah dalam membina kehidupan para siswa, maka ditetapkan OSIS sebagai salah satu jalur pembinaan kesiswaan secara nasional. Jalur tersebut terkenal dengan nama “Empat Jalur Pembinaan Kesiswaan”, yaitu: Organisasi Kesiswaan Latihan Kepemimpinan Kegiatan Ekstrakurikuler Kegiatan wawasan Wiyatamandala Dengan dilandasi latar belakang sejarah lahirnya OSIS dan berbagai situasi, OSIS dibentuk dengan tujuan pokok: Menghimpun ide, pemikiran, bakat, kreativitas, serta minat para siswa ke dalam salah satu wadah yang bebas dari berbagai macam pengaruh negative dari luar sekolah. Mendorong sikap, jiwa dan semangat kasatuan dan persatuan di antara para siswa, sehingga timbul satu kebanggaan untuk mendukung peran sekolah sebagai tempat terselenggaranya proses belajar mengajar. Sebagai tempat dan sarana untk berkomunikasi, menyampaikan pemikiran, dan gagasan dalam usaha untuk mematangkan kemampuan berpikir, wawasan, dan pengambilan keputusan.</p><p>&nbsp;</p><p><strong>Sumber</strong> : <i>wikipedia</i></p>",
          "tipe": "EKSKUL",
          "deleted_at": null,
          "created_at": "2020-10-08T01:18:47.000000Z",
          "updated_at": "2020-10-08T01:54:22.000000Z"
        }
      },
      {
        "id": 12,
        "informations_id": "2",
        "tipe": "BERITA",
        "photo": "https://cms.sman1jonggol.sch.id/storage/assets/informasi-galleries/Ef0eLcwAr6szC2mOzfJnncZPXxkol7xSpYTx5KqD.jpeg",
        "is_default": 1,
        "deleted_at": null,
        "created_at": "2020-10-12T02:09:33.000000Z",
        "updated_at": "2020-10-12T02:09:33.000000Z",
        "information": {
          "id": 2,
          "judul": "buku saku panduan penyelenggaraan pembelajaran",
          "deskripsi": "<p><strong>Pandemi Covid-19</strong> telah ditetapkan Presiden Republik Indonesia sebagai kedaruratan kesehatan dan bencana nasional non-alam. Sebagai upaya untuk mencegah penyebaran Covid-19 serta mengutamakan kesehatan dan keselamatan warga pendidikan, maka satuan pendidikan yang berada di zona kuning, oranye, dan merah dilarang untuk melakukan proses pembelajaran tatap muka dan melanjutkan belajar dari rumah.&nbsp;</p><p>&nbsp;</p><p>Hal ini sesuai dengan <strong>Surat Keputusan Bersama (SKB) Menteri Pendidikan dan Kebudayaan (Mendikbud)</strong>, Menteri Agama (Menag), Menteri Kesehatan (Menkes), dan Menteri Dalam Negeri (Mendagri) yang ditetapkan pada 15 Juni 2020 yang lalu. Guna memastikan hak belajar setiap anak terpenuhi, Pemerintah melalui Kementerian Pendidikan dan Kebudayaan telah menghadirkan beberapa inisiatif untuk mendukung pelaksanaan belajar dari rumah sesuai arahan Presiden. Beberapa inisiatif/terobosan tersebut di antaranya adalah pengoptimalan platform pendidikan jarak jauh Rumah Belajar serta kerja sama dengan berbagai platform penyedia layanan pembelajaran daring, penyediaan kuota gratis dan subsidi kuota melalui kerja sama dengan provider telekomunikasi, kebijakan relaksasi penggunaan dana BOS, peningkatan kapasitas guru melalui Guru Berbagi dan Seri Webinar terkait pembelajaran jarak jauh (PJJ), program Belajar dari Rumah di TVRI, dan program pembelajaran di RRI. Beberapa kendala yang timbul dalam pelaksanaan PJJ di antaranya kebingungan guru dalam mengelola PJJ dan masih terfokus dalam penuntasan kurikulum. Sementara itu tidak semua orang tua mampu mendampingi anak-anak belajar di rumah dengan optimal karena harus bekerja ataupun kemampuan sebagai pendamping belajar anak.&nbsp;</p><p>&nbsp;</p><p>Para peserta didik juga mengalami kesulitan berkonsentrasi belajar dari rumah serta meningkatnya rasa jenuh/bosan yang berpotensi menimbulkan gangguan pada kesehatan jiwa. Selain mengutamakan kesehatan dan keselamatan peserta didik, pendidik, tenaga kependidikan, keluarga, dan masyarakat, pemerintah juga mempertimbangkan tumbuh kembang peserta didik dan kondisi psikososial dalam pemenuhan layanan pendidikan selama pandemi Covid-19. Maka, dengan mempertimbangkan kebutuhan pembelajaran serta masukan dari para ahli dan organisasi serta mempertimbangkan evaluasi implementasi SKB Empat Menteri, Pemerintah melakukan penyesuaian.&nbsp;</p><p>&nbsp;</p><p>Penyesuaian dilakukan melalui keputusan bersama empat menteri terkait pelaksanaan pembelajaran di zona selain merah dan oranye, yakni di zona kuning dan hijau, untuk dapat melaksanakan pembelajaran tatap muka dengan penerapan protokol kesehatan yang ketat. Buku saku ini disusun untuk memudahkan para pemangku kepentingan yang terkait erat dengan pembelajaran selama masa pandemi Covid-19 memperoleh informasi secara lengkap mengenai panduan pembelajaran. Isi dalam buku saku ini diambil utuh dari lampiran Keputusan Bersama Mendikbud, Menang, Menkes, dan Mendagri tentang Perubahan atas Keputusan Bersama Mendikbud, Menag, Menkes, dan Mendagri tentang Panduan Penyelenggaraan pada Tahun Ajaran 2020/2021 dan Tahun Akademik 2020/2021 di Masa Pandemi Covid-19 yang ditetapkan pada 7 Agustus 2020. (*)</p>",
          "tipe": "BERITA",
          "deleted_at": null,
          "created_at": "2020-10-07T23:44:13.000000Z",
          "updated_at": "2020-10-12T00:38:58.000000Z"
        }
      },
      {
        "id": 13,
        "informations_id": "8",
        "tipe": "EKSKUL",
        "photo": "https://cms.sman1jonggol.sch.id/storage/assets/informasi-galleries/gq8qIyS1B49MFUcClkAmeirISGTqy5fUdrMziP71.jpeg",
        "is_default": 1,
        "deleted_at": null,
        "created_at": "2020-10-12T03:31:39.000000Z",
        "updated_at": "2020-10-12T03:31:39.000000Z",
        "information": {
          "id": 8,
          "judul": "OSIS",
          "deskripsi": "<p>Sebelum lahirnya OSIS, di sekolah-sekolah tingkat SLTP dan SLTA terdapat organisasi yang bebagai macam corak bentuknya. Ada organisasi siswa yang hanya dibentuk bersifat intern sekolah itu sendiri, dan ada pula organisasi siswa yang dibentuk oleh organisasi siswa di luar sekolah. Organisasi siswa yang dibentuk dan mempunyai hubungan dengan organisasi siswa dari luar sekolah, sebagian ada yang mengarah pada hal-hal bersifat politis, sehingga kegiatan organisasi siswa tersebut dikendalikan dari luar sekolah sebagai tempat diselenggarakannya proses belajar mengajar. Akibat dari keadaan yang demikian itu, maka timbullah loyalitas ganda, disatu pihak harus melaksanakan peraturan yang dibuat Kepala Sekolah, sedang dipihak lain harus tunduk kepada organisasi siswa yang dikendalikan di luar sekolah. Dapat dibayangkan berapa banyak macam organisasi siswa yang tumbuh dan berkembang pada saat itu, dan bukan tidak mungkin organisasi siswa tersebut dapat dimanfaatkan untuk kepentingan organisasi di luar sekolah. Itu sebabnya pada tahun 1970 sampai dengan tahun 1972, beberapa pimpinan organisasi siswa yang sadar akan maksud dan tujuan belajar di sekolah, ingin menghindari bahaya perpecahan di antara para siswa intra sekolah di sekolah masing-masing, setelah mendapat arahan dari pimpinan Departemen Pendidikan dan Kebudayaan. Pembinaan dan pengembangan generasi muda diarahkan untuk mempersiapkan kader penerus perjuangan bangsa dan pembangunan nasional dengan memberikan bekal keterampilan, kepemimpinan, kesegaran jasmani, daya kreasi, patriotisme, idealisme, kepribadian dan budi pekerti luhur. Oleh karena itu pembanguan wadah pembinaan generasi muda di lingkungan sekolah yang diterapkan melalui Organisasi Siswa Intra Sekolah (OSIS) perlu ditata secara terarah dan teratur. Betapa besar perhatian dan usaha pemerintah dalam membina kehidupan para siswa, maka ditetapkan OSIS sebagai salah satu jalur pembinaan kesiswaan secara nasional. Jalur tersebut terkenal dengan nama “Empat Jalur Pembinaan Kesiswaan”, yaitu: Organisasi Kesiswaan Latihan Kepemimpinan Kegiatan Ekstrakurikuler Kegiatan wawasan Wiyatamandala Dengan dilandasi latar belakang sejarah lahirnya OSIS dan berbagai situasi, OSIS dibentuk dengan tujuan pokok: Menghimpun ide, pemikiran, bakat, kreativitas, serta minat para siswa ke dalam salah satu wadah yang bebas dari berbagai macam pengaruh negative dari luar sekolah. Mendorong sikap, jiwa dan semangat kasatuan dan persatuan di antara para siswa, sehingga timbul satu kebanggaan untuk mendukung peran sekolah sebagai tempat terselenggaranya proses belajar mengajar. Sebagai tempat dan sarana untk berkomunikasi, menyampaikan pemikiran, dan gagasan dalam usaha untuk mematangkan kemampuan berpikir, wawasan, dan pengambilan keputusan.</p><p>&nbsp;</p><p><strong>Sumber</strong> : <i>wikipedia</i></p>",
          "tipe": "EKSKUL",
          "deleted_at": null,
          "created_at": "2020-10-08T01:18:47.000000Z",
          "updated_at": "2020-10-08T01:54:22.000000Z"
        }
      }
    ]
  }
}
```

## Result Profile

```json
{
  "meta": {
    "code": 200,
    "status": "success",
    "message": "Data profile berhasil di ambil"
  },
  "data": {
    "profile": [
      {
        "id": 12,
        "judul": "Profile SMAN 1 Jonggol",
        "deskripsi": "<p><strong>SMAN 1 Jonggol</strong> dibuka pada tahun ajaran 1981-1982 berdasarkan Instruksi <a href=\"https://id.wikipedia.org/wiki/Kanwil\">Kanwil</a> Departemen P&amp;K Jawa Barat Nomor 1814/I.02/R.81 tanggal 12 Mei 1981 dan nomor 150/II.02.5.10 / I /81. <a href=\"https://id.wikipedia.org/wiki/Presiden\">Presiden</a> <a href=\"https://id.wikipedia.org/wiki/Soeharto\">Soeharto</a> memerintahkan pengembangan Jonggol sebagai Kota Terpadu, oleh karena itu perlunya dibangun Sekolah Lanjutan Atas setingkat SMA. Pada saat itu, Kantor Departemen P&amp;K Kecamatan Jonggol mengeluarkan edaran bahwa SMA Negeri 1 Jonggol menerima pendaftaran siswa baru sebanyak 3 kelas yang untuk sementara dikelola oleh SMA Negeri 1 Cibinong dan berlokasi sementara di SMP Negeri 1 Jonggol.&nbsp;</p><p>Pada tahun yang sama, Pemerintah Daerah melakukan pembangunan fisik sekolah di Jalan Sukasirna Kampung Raweuy Desa Sukasirna. Setelah selesai dibangun, turun Surat Keputusan Menteri Pendidikan dan kebudayaan Republik Indonesia nomor: 0298/ O / 1982 tanggal 9 Oktober 1982 tentang pembukaan, penunggalan dan penegerian. Peresmian dilakukan pada tanggal 25 November 1982.﻿</p><p>&nbsp;</p><h3>Sruktur organisasi sekolah Periode 2015/2016</h3><ul><li>Kepala Sekolah&nbsp;: H.Amin Pujiono,S.Pd,MM</li><li>Wakasek I Humas&nbsp;: Drs.Muhammad Zaenuddin</li><li>Wakasek Kesiswaan&nbsp;: Didih Wastijo,S.Pd,MM</li><li>Wakasek Prasarana&nbsp;: Sunarya,S.Pd,MM</li><li>Wakasek Kurikulum&nbsp;: Arief Munarto,S.d,MM</li></ul><p>&nbsp;</p><h3>Fasilitas</h3><ul><li>Laboratorium (Komputer, Multimedia, Fisika—Biologi, Kimia)</li><li>Masjid</li><li>Pendopo</li><li>Ruang Seni</li><li>Lapangan Serbaguna</li><li>CCTV</li><li>Perpustakaan</li><li>4 Toilet Siswa, 2 Toilet Khusus</li><li>Hotspot (wi-fi)</li><li>Koperasi Sekolah</li><li>Rohis (Rohani Islam)</li><li>Science Club</li><li>Ruang Pioneer</li></ul><p>&nbsp;</p><h3>Ekstrakulikuler</h3><ol><li>Pramuka</li><li>PMR (Palang Merah Remaja)</li><li>KIR SMURAY (Kelompok Ilmiah Remaja SMA Negeri 1 Jonggol) yang memiliki kegiatan melakukan riset ilmiah di lingkungan sekolah.</li><li>Basket</li><li>Volley</li><li>Futsal</li><li>Catur</li><li>Tenis Meja</li><li>Kelas Musik Digital (digurui langsung oleh nils rondhuis)</li></ol>",
        "tipe": "SEJARAH",
        "deleted_at": null,
        "created_at": "2020-10-13T00:46:31.000000Z",
        "updated_at": "2020-10-13T00:46:31.000000Z",
        "galleries": []
      }
    ]
  }
}
```