import "./About.css";
import Footer from "./Footer";

export default function About() {
  return (
    <div className="about-container">
      <div className="background-section">
        <div className="about-content text-center sm:text-left">
          <h1 className="sm:text-4xl lg:text-5xl text-2xl sm:mt-28 sm:ml-28 mt-6 md:mt-16 lg:mt-14 xl:mt-14 font-bold">
            Raih cita-citamu,
          </h1>
          <h1 className="sm:text-4xl lg:text-5xl text-2xl sm:ml-28 font-bold">
            Raih beasiswa impianmu,
          </h1>
          <h1 className="sm:text-4xl lg:text-5xl text-2xl sm:ml-28 font-bold">
            Matangkan persiapanmu
          </h1>
          <p className="mt-12 sm:mx-28 mx-10 text-lg lg:text-2xl">
            Daftarkan dirimu ke beragam kelas dan layanan terlengkap, mulai dari
            konsultasi pendaftaran kuliah dan beasiswa ke luar negeri hingga
            bimbingan sertifikasi bahasa asing online!
          </p>
        </div>
      </div>
      <div className="team-section bg-white flex flex-col items-center justify-center md:justify-around">
        <div className="mt-10">
          <h2 className="text-xl sm:text-2xl md:text-3xl xl:text-4xl font-bold mb-5">
            Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-0 xl:gap-40 2xl:gap-96 xl:mr-6">
            <div className="left-column sm:flex-wrap">
              <div className="flex mb-4">
                <h3 className="w-48 role sm:text-lg lg:text-2xl lg:w-60 font-semibold mr-4 md:whitespace-nowrap sm:flex-wrap pr-8">
                  Product Manager
                </h3>
                <div className="flex-1 text-sm sm:text-base lg:text-xl">
                  <p className="name font-semibold">M Zidni Alkindi</p>
                  <p className="name font-semibold">Nicholas Zefanya</p>
                </div>
              </div>
              <div className="flex mb-4">
                <h3 className="w-48 role sm:text-lg font-semibold mr-4 whitespace-nowrap pr-8 lg:text-2xl lg:w-60">
                  Software Developer
                </h3>
                <div className="flex-1 text-sm sm:text-base lg:text-xl">
                  <p className="name font-semibold">Ghazy Achmed</p>
                  <p className="name font-semibold">M Aulia Azka</p>
                  <p className="name font-semibold">Fachriza Ahmad</p>
                  <p className="name font-semibold">I Made Wiweka</p>
                </div>
              </div>
            </div>
            <div className="right-column sm:flex-wrap">
              <div className="flex mb-4">
                <h3 className="w-48 role sm:text-lg font-semibold mr-4 md:whitespace-nowrap sm:flex-wrap pr-8 lg:text-2xl lg:w-60">
                  Data Scientist
                </h3>
                <div className="flex-1 text-sm sm:text-base lg:text-xl">
                  <p className="name font-semibold">Razi Rachman W</p>
                  <p className="name font-semibold">Jacob Reinhard</p>
                  <p className="name font-semibold">Raditya Zaki A</p>
                </div>
              </div>
              <div className="flex mb-4">
                <h3 className="w-48 role sm:text-lg font-semibold mr-4 whitespace-nowrap pr-8 lg:text-2xl lg:w-60">
                  Game Developer
                </h3>
                <div className="flex-1 text-sm sm:text-base lg:text-xl">
                  <p className="name font-semibold">Rhio Bimo Prakoso</p>
                </div>
              </div>
              <div className="flex mb-4">
                <h3 className="w-48 role sm:text-lg font-semibold mr-4 whitespace-nowrap pr-8 lg:text-2xl lg:w-60">
                  UI/UX Designer
                </h3>
                <div className="flex-1 text-sm sm:text-base lg:text-xl">
                  <p className="name font-semibold">Anggita Najmi Layali</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
