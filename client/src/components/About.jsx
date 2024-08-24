import "./About.css";

export default function About() {
  return (
    <div className="about-container">
      <div className="background-section">
        <div className="about-content">
          <h1 className="text-4xl font-bold mt-28 ml-28">Raih cita-citamu,</h1>
          <h1 className="text-4xl font-bold mt-1 ml-28">Raih beasiswa impianmu,</h1>
          <h1 className="text-4xl font-bold mt-1 ml-28">Matangkan persiapanmu</h1>
          <p className="text-2xl mt-12 ml-28 mr-28">
            Daftarkan dirimu ke beragam kelas dan layanan terlengkap, mulai dari konsultasi pendaftaran kuliah dan beasiswa ke
            luar negeri hingga bimbingan sertifikasi bahasa asing online!
          </p>
        </div>
      </div>
      <div className="team-section mt-5 p-5 bg-white bg-opacity-80 rounded-lg ml-20 mr-20">
        <h2 className="text-3xl font-bold mb-5">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="left-column sm:flex-wrap">
            <div className="flex mb-4">
              <h3 className="w-48 role text-lg font-semibold mr-4 md:whitespace-nowrap sm:flex-wrap pr-8">Product Manager</h3>
              <div className="flex-1">
                <p className="name font-semibold">M Zidni Alkindi</p>
                <p className="name font-semibold">Nicholas Zefanya</p>
              </div>
            </div>
            <div className="flex mb-4">
              <h3 className="w-48 role text-lg font-semibold mr-4 whitespace-nowrap pr-8">Software Developer</h3>
              <div className="flex-1">
                <p className="name font-semibold">Ghazy Achmed</p>
                <p className="name font-semibold">M Aulia Azka</p>
                <p className="name font-semibold">Fachriza Ahmad</p>
                <p className="name font-semibold">I Made Wiweka</p>
              </div>
            </div>
          </div>
          <div className="right-column sm:flex-wrap">
            <div className="flex mb-4">
              <h3 className="w-48 role text-lg font-semibold mr-4 md:whitespace-nowrap sm:flex-wrap pr-8">Data Scientist</h3>
              <div className="flex-1">
                <p className="name font-semibold">Razi Rachman W</p>
                <p className="name font-semibold">Jacob Reinhard</p>
                <p className="name font-semibold">Raditya Zaki A</p>
              </div>
            </div>
            <div className="flex mb-4">
              <h3 className="w-48 role text-lg font-semibold mr-4 whitespace-nowrap pr-8">Game Developer</h3>
              <div className="flex-1">
                <p className="name font-semibold">Rhio Bimo Prakoso</p>
              </div>
            </div>
            <div className="flex mb-4">
              <h3 className="w-48 role text-lg font-semibold mr-4 whitespace-nowrap pr-8">UI/UX Designer</h3>
              <div className="flex-1">
                <p className="name font-semibold">Anggita Najmi Layali</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
