# Eduplore
 Tugas Kelompok 8 SPARTA

## Cara set up

Buat file `/server/config.env` dan isi dengan URI Atlas dan port:
```
ATLAS_URI=mongodb+srv://<username>:<password>@eduploredb.8thpm.mongodb.net/?retryWrites=true&w=majority&appName=EduPloreDB
PORT=5050
```

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
