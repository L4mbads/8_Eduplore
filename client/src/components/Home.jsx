import { NavLink } from "react-router-dom";
import { useRef } from "react";
import { useScroll } from "./ScrollContext";
import Footer from "./Footer";


export default function Home() {
    const { layananRef, beasiswaRef } = useScroll();
    return (
        <div>
            <div className="pt-20 px-16"> {/* Bagian Home */}
                <div className="flex pb-10"> {/* Judul Home*/}
                    <img alt="Home" src="../src/assets/Home.png" className="size-9"></img>
                    <h2 className="font-bold inline-flex items-end pl-2 text-xl">Home</h2>
                </div>
                <div className="relative container mx-auto bg-blue items-start pl-10 pr-48 rounded-xl bg-gradient-to-r from-blue to-blue-40 shadow-lg"> {/* Home */}
                    <p className="font-bold text-white text-5xl pt-10">Informasi dan Bimbingan Beasiswa Terlengkap!</p>
                    <p className="font-bold text-white pt-6 text-xl italic">
                        Nggak perlu bingung tentang persiapan beasiswa. <br />Puluhan
                        mentor profesional siap menemani dan membimbing perjalananmu!<br />
                    </p>
                    <button className="font-bold text-white bg-orange inline-flex items-center justify-center rounded-md mt-10 mb-16 py-2 px-4 shadow-xl btn" onClick={() => {
                        layananRef.current?.scrollIntoView({
                            behavior: "smooth"
                        })
                    }}>
                        Persiapkan sekarang

                    </button>
                    <img src="../src/assets/Vector 1.png" className="absolute top-10 right-0"></img>
                </div>
            </div>

            <div className="pt-20 px-16"> {/* Daftar beasiswa */}
                <div className="flex pb-10" id="beasiswa" ref={beasiswaRef}> {/* Judul Beasiswa*/}
                    <img alt="Home" src="../src/assets/Beasiswa.png" className="size-9"></img>
                    <h2 className="font-bold inline-flex items-end pl-2 text-xl">Rekomendasi Beasiswa Untukmu </h2>
                </div>
            </div>

            <div className="pt-20 px-16 relative"> {/* Layanan kami */}
                <img src="../src/assets/Vector 3.png" className="absolute top-80 left-0 size-full"></img>
                <div className="flex pb-10" id="layanan" ref={layananRef}> {/* Judul Layanan*/}
                    <img alt="Home" src="../src/assets/Layanan.png" className="size-9"></img>
                    <h2 className="font-bold inline-flex items-end pl-2 text-xl">Program Unggulan Kami </h2>
                </div>
                <div className="flex flex-row gap-4 overflow-x-auto"> {/* Daftar2 mentoring */}
                    <div className="relative bg-white items-start rounded-xl w-full" to=""> {/* 1 */}
                        <div className="flex gap-x-4 justify-between my-10">
                            <img src="../src/assets/Mentor1.png" className="ml-4"></img>
                            <div className="grid-cols-1">
                                <h3 className="font-bold text-xl">SUPERCAMP</h3>
                                <div className="mt-2">
                                    <p>Ikuti kelas intensif bersama para awardee selama rangkaian persiapan. 

                                    </p>
                                </div>
                                <p className="font-bold pt-10">70K/sesi</p>
                                <NavLink className="font-bold text-black bg-orange inline-flex items-center justify-center rounded-md px-4 mt-2 py-2">
                                    Selengkapnya
                                </NavLink>
                            </div>
                        </div>

                    </div>
                    <div className="relative bg-white items-start rounded-xl w-full"> {/* 2 */}

                        <div className="flex gap-x-4 justify-between my-10">
                            <img src="../src/assets/Mentor2.png" className="ml-4"></img>
                            <div className="grid-cols-1">
                                <h3 className="font-bold text-xl">SUPER-EXCLUSIVE</h3>
                                <div className="mt-2">
                                    <p>
                                        1-on-1 mentoring bersama mentor tepercaya sesuai kebutuhan beasiswa impianmu!
                                    </p>
                                </div>
                                <p className="font-bold pt-4">70K/sesi</p>
                                <NavLink className="font-bold text-black bg-orange inline-flex items-center justify-center rounded-md px-4 mt-2 py-2" >
                                    Selengkapnya
                                </NavLink>
                            </div>
                        </div>  
                    </div>
                    <div className="relative bg-white items-start rounded-xl w-full"> {/* 3 */}

                        <div className="flex gap-x-4 justify-between my-10">
                            <img src="../src/assets/Mentor3.png" className="ml-4"></img>
                            <div className="grid-cols-1">
                                <h3 className="font-bold text-xl">SUPERBOOST</h3>
                                <div className="mt-2">
                                    <p>Tips dan trik, feedback untuk persiapan beasiswa impianmu. </p>
                                </div>
                                <p className="font-bold pt-16">70K/sesi</p>
                                <NavLink className="font-bold text-black bg-orange inline-flex items-center justify-center rounded-md px-4 mt-2 py-2">
                                    Selengkapnya
                                </NavLink>
                            </div>
                        </div>
  
                    </div>

                </div>

            </div>

            <div className="pt-64 px-16"> {/* Judul Mengapa Eduplore */}
                <h3 className="font-bold text-4xl text-center mb-10">Mengapa Eduplore?</h3>
                <div className="grid grid-cols-3 gap-x-8 items-start text-center">
                    <div className="flex flex-col items-center justify-center">
                        <div className="flex justify-center mb-4">
                            <img src="../src/assets/People.png" className="h-20 w-20"></img>
                        </div>
                        <h4 className="font-bold text-xl">7k+ pengguna</h4>
                        <p>yang memercayai program kami untuk konsultasi beasiswa</p>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <div className="flex justify-center mb-4">
                            <img src="../src/assets/Chaine.png" className="h-20 w-20"></img>
                        </div>
                        <h4 className="font-bold text-xl">koneksi beasiswa</h4>
                        <p>yang luas sehingga menjamin informasi terlengkap dan tepercaya</p>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <div className="flex justify-center mb-4">
                            <img src="../src/assets/Person.png" className="h-20 w-20"></img>
                        </div>
                        <h4 className="font-bold text-xl">100+ mentor</h4>
                        <p>terbaik untuk menjamin kamu mendapat bimbingan profesional</p>
                    </div>
                </div>
            </div>
            <div className="relative container mx-auto bg-blue items-start pl-10 pr-48 bg-gradient-to-t from-blue to-gray shadow- pt-20 relativ">
                <img src="../src/assets/Vector 2.png" className="absolute bottom-20 left-0 size-max"></img>
                <div className="grid grid-cols-2 ml-10 gap-x-20">
                    <div>
                        <p className="text-blue text-xl font-bold">RIBUAN orang telah meraih
                            beasiswa impiannya di</p>
                        <p className="text-blue text-3xl font-bold ml-10 pt-20">TOP 100 UNIVERSITAS
                            TERBAIK DUNIA</p>
                        <p className="text-white text-2xl font-bold italic pt-20 pb-96">Sekarang giliran kamu!</p>

                    </div>
                    <div className="grid grid-cols-2 relative"> {/* Foto */}
                        <img src="../src/assets/Xaviera.png"></img>
                        <img src="../src/assets/Maudy.png"></img>
                        <img src="../src/assets/Axel.png" className="absolute top-80"></img>

                    </div>
                </div>
            </div>
            <Footer />
        </div>


    );
}
