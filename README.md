---
# Kelompok 8 Milestone SPARTA HMIF 2023
---
## ~ Anggota Kelompok ~
- Muhammad Zidni Alkindi *(Product Manager)*
- Nicholas Zefanya Lamtyo N. *(Product Manager)*
- Ghazy Ahmed M. U. *(Software Engineer)*
- Muhammad Aulia Azka *(Software Engineer)*
- Fachriza Ahmad Setiyono *(Software Engineer)*
- I Made Wiweka Putra *(Software Engineer)*
- Razi Rachman Widyadhana *(Data Science)*
- Jacob Reinhard Marudut S. *(Data Science)*
- Raditya Zaki Athaya *(Data Science)*
- Rhio Bimo Prakoso S. *(Game Developer)*
- Anggita Najmi Layali *(UI/UX)*
---
## ~ Deskripsi Aplikasi ~
Eduplore adalah platform edutech inovatif yang mengkolaborasikan segala kebutuhan mahasiswa dalam kegiatan akademiknya. Platform ini berfokus pada bimbingan dan membantu persiapan pendaftaran beasiswa yang akan disesuaikan dengan beasiswa yang user butuhkan. Eduplore menyediakan layanan dan informasi dari setiap beasiswa yang tersedia di Indonesia dengan menawarkan tiga fitur utama.

### 1. SuperCamp
Rangkaian kelas intensif dengan awardee beasiswa untuk mempersiapkan pendaftaran dari seleksi berkas hingga tahap interview

### 2. SuperExclusive
Mentoring eksklusif 1-on-1 dengan mentor ahli di bidangnya yang disesuaikan dengan apa yang user butuhkan

### 3. SuperBoost 
- CV Boost yang berisikan tips & trick, proofreading, dan feedback terkait CV yang dibuat
- Esai Boost yang berisikan tips & trick, proofreading, dan feedback terkait esai yang dibuat
- Interview Boost yang berisikan tips & trick, mockup interview, feedback terkait performa dari user
---
## ~ Teknologi, Bahasa, dan Framework ~

Eduplore dibuat dengan bahasa **JavaScript** menggunakan teknologi **MERN**. \
**MERN** merupakan *framework* yang terdiri dari 4 teknologi yang membentuk stack:
- **MongoDB**, untuk database
- **Express** dan **Node.js**, untuk *back-end*
- **React**, untuk *front-end*

Selain itu, Eduplore juga menggunakan *framework* utilitas **Tailwind CSS** untuk styling

---
## ~ Struktur Program ~
---

    .
    ├── client                  # file front-end
    │   ├── public              # aset publik
    │   ├── src                 # file source
    │   │   ├── assets          # aset (gambar dan elemen lainnya)
    │   │   │   └── ...
    │   │   ├── components      # komponen React
    │   │   │   └── ...
    │   │   └── ...
    │   └── ...
    │
    ├── server                  # file back-end dan database
    │   ├── controllers         # fungsionalitas utama
    │   │   └── ...
    │   ├── db                  # penghubung database
    │   │   └── ...
    │   ├── middlewares         # fungsi middleware
    │   │   └── ...
    │   ├── routes              # routing API
    │   │   └── ...
    │   ├── utils               # fungsi utilitas
    │   │   └── ...
    │   ├── server.js           # file server
    │   └── ...
    │
    ├── LICENSE
    └── README.md


## ~ Cara set up ~

Buat file `/server/config.env` dan isi dengan URI Atlas dan port:
```
ATLAS_URI=mongodb+srv://<username>:<password>@eduploredb.8thpm.mongodb.net/?retryWrites=true&w=majority&appName=EduPloreDB
PORT=5050
```
Untuk akses umum, gunakan:\
username = `public`\
password = `milestonekelar`

Run server:
```
cd server
npm install
npm run startserver
```

Run client/web:
```
cd client
npm install
npm run dev
```
