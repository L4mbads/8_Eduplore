import { NavLink, useNavigate } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import { useScroll } from "./ScrollContext";
import Beasiswa from "./Beasiswa";
import Footer from "./Footer";


export default function Home() {
    const { layananRef, beasiswaRef } = useScroll();
    const [beasiswaList, setBeasiswaList] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {

        async function getBeasiswaList() {
            const response = await fetch(`http://localhost:5050/beasiswa-management/beasiswa?count=4`);
            if (!response.ok) {
                const message = `An error occurred: ${response.statusText}`;
                console.error(message);
                return;
            }
            const records = await response.json();
            setBeasiswaList(records);
        }
        getBeasiswaList();
        return;
    }, []);


    return (
        <div className="overflow-x-hidden">
            <div className="pt-10 px-4 sm:px-8 lg:px-16 overflow-x-hidden overflow-y-hidden"> {/* Bagian Home */}
                <div className="flex items-center pb-5"> {/* Judul Home*/}
                    <img alt="Home" src="../src/assets/Home.png" className="size-9"></img>
                    <h2 className="font-bold inline-flex items-end pl-2 text-lg sm:text-xl lg:text-2xl">Home</h2>
                </div>
                <div className="relative container mx-auto px-4 sm:px-6 md:px-12 lg:px-20 bg-blue items-start rounded-xl bg-gradient-to-r from-blue to-blue-40 shadow-lg text-center lg:text-left"> {/* Home */}
                    <p className="font-bold text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl pt-6 md:pt-10">Informasi dan Bimbingan Beasiswa Terlengkap!</p>
                    <p className="font-bold text-white text-sm sm:text-lg md:text-xl italic pt-4 md:pt-6 lg:pt-8">
                        Nggak perlu bingung tentang persiapan beasiswa. <br />Puluhan
                        mentor profesional siap menemani dan membimbing perjalananmu!<br />
                    </p>
                    <button className="font-bold text-white bg-orange inline-flex items-center justify-center rounded-md mt-6 sm:mt-8 lg:mt-10 py-2 px-4 md:px-6 lg:px-8 shadow-xl btn mb-4" onClick={() => {
                        layananRef.current?.scrollIntoView({
                            behavior: "smooth"
                        })
                    }}>
                        Persiapkan sekarang

                    </button>
                    <img src="../src/assets/Vector 1.png" className="absolute top-10 right-0 h-[50%] sm:h-[70%] lg:h-[90%] pointer-events-none max-lg:hidden"></img>
                </div>
            </div>

            <div className="px-4 sm:px-6 lg:px-8 py-6 pt-32"> {/* Daftar beasiswa */}
                <div className="flex items-center" id="beasiswa" ref={beasiswaRef}> {/* Judul Beasiswa*/}
                    <img alt="Home" src="../src/assets/Beasiswa.png" className="size-9 lg:ml-8 sm:ml-10"></img>
                    <div className="w-full flex flex-row justify-between items-center">

                        <h2 className="font-bold inline-flex items-end pl-2 text-lg sm:text-lg lg:text-xl">Beasiswa yang sedang dibuka!</h2>
                        <NavLink className="transition-all font-bold text-blue pl-2 text-lg
                        hover:scale-110 hover:text-blue-80"
                            to="/beasiswa">Lihat semua</NavLink>

                    </div>
                </div>
                <div className="flex gap-x-6 shadow-inner rounded-xl self-center flex-nowrap px-6 z-20 w-full overflow-x-scroll justify-start items-center ">
                    {beasiswaList.map((beasiswa) => {
                        return <Beasiswa data={beasiswa} />
                    })}
                </div>
            </div>

            <div className="pt-20 px-6 sm:px-10 md:px-16 relative" id="layanan" ref={layananRef}>
                
                <div className="flex items-center pb-10" >
                    <img alt="Program Unggulan" src="../src/assets/Layanan.png" className="w-10 h-16" />
                    <h2 className="font-bold text-xl pl-2">Program Unggulan Kami</h2>
                </div>

                <div className="flex flex-nowrap gap-4 overflow-x-auto scrollbar-hide md:grid md:grid-cols-2 lg:grid-cols-3">
                    {/* Program Card 1 */}
                    <div className="min-w-[250px] md:min-w-0 bg-white p-4 rounded-xl shadow-md">
                        <div className="flex flex-col md:flex-row gap-4">
                            <img src="../src/assets/Mentor1.png" alt="Supercamp" className="w-full h-32 object-cover rounded-md md:w-1/3" />
                            <div className="flex flex-col justify-between">
                                <h3 className="font-bold text-2xl">SUPERCAMP</h3>
                                <p className="text-sm mt-2">Rangkaian kelas intensif untuk mempersiapkan pendaftaran dari seleksi berkas hingga tahap interview pada beasiswa tertentu</p>
                                <div className="flex items-center justify-between mt-4">
                                    
                                    <button className="bg-orange text-white px-4 py-2 rounded-md shadow hover:bg-orange-600 max-xl:mt-2 " onClick={() => navigate('/supercamp')}>Detail</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Program Card 2 */}
                    <div className="min-w-[250px] md:min-w-0 bg-white p-4 rounded-xl shadow-md">
                        <div className="flex flex-col md:flex-row gap-4">
                            <img src="../src/assets/Mentor2.png" alt="Superexclusive" className="w-full h-32 object-cover rounded-md md:w-1/3" />
                            <div className="flex flex-col justify-between">
                                <h3 className="font-bold text-2xl">SUPER-EXCLUSIVE</h3>
                                <p className="text-sm mt-2">Mentoring Eksklusif 1-on-1 dengan mentor ahli di bidangnya yang disesuaikan dengan apa yang dibutuhkan</p>
                                <div className="flex items-center justify-between mt-4">
                                    
                                    <button className="bg-orange text-white px-4 py-2 rounded-md shadow hover:bg-orange-600" onClick={() => navigate('/superexclusive')}>Detail</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Program Card 3 */}
                    <div className="min-w-[250px] md:min-w-0 bg-white p-4 rounded-xl shadow-md">
                        <div className="flex flex-col md:flex-row gap-4">
                            <img src="../src/assets/Mentor3.png" alt="Superboost" className="w-full h-32 object-cover rounded-md md:w-1/3" />
                            <div className="flex flex-col justify-between">
                                <h3 className="font-bold text-2xl">SUPERBOOST</h3>
                                <p className="text-sm mt-2">Peningkatan skill secara terpisah untuk CV, Esai, dan Interview dengan metode teori sekaligus praktik langsung</p>
                                <div className="flex items-center justify-between mt-4">
                                    
                                    <button className="bg-orange text-white px-4 py-2 rounded-md shadow hover:bg-orange-600 max-xl:mt-8" onClick={() => navigate('/superboost')}>Detail</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="pt-32 px-16"> {/* Judul Mengapa Eduplore */}
                <h3 className="font-bold text-4xl text-center mb-10">Mengapa Eduplore?</h3>
                <div className="grid grid-cols-3 gap-x-8 items-start text-center max-sm:flex flex-col gap-10">
                    <div className="flex flex-col items-center justify-center">
                        <div className="flex justify-center mb-4">
                            <img src="../src/assets/People.png" className="h-20 w-30"></img>
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
            <div className="relative w-full bg-blue items-start pl-10 pr-48 bg-gradient-to-t from-blue to-gray shadow- pt-20 relativ">
                <img src="../src/assets/Vector 2.png" className="absolute bottom-20 left-0 w-screen object-none scale-150 pointer-events-none max-xl:hidden"></img>
                <div className="grid grid-cols-2 ml-10 gap-x-20 max-sm:grid grid-cols-2">
                    <div className="text-center md:text-left max-w-lg mx-auto md:mx-0">
                        <p className="text-blue text-lg sm:text-xl md:text-2xl font-bold">RIBUAN orang telah meraih
                            beasiswa impiannya di</p>
                        <p className="text-blue text-2xl sm:text-3xl md:text-4xl font-bold mt-4 md:mt-6">TOP 100 UNIVERSITAS
                            TERBAIK DUNIA</p>
                        <p className="text-white text-4xl font-bold italic pt-20 pb-80">Sekarang giliran kamu!</p>

                    </div>
                    <div className="grid grid-cols-2 relative max-xl:none"> {/* Foto */}
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
