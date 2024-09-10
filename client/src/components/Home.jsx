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
        <div>
            <div className="pt-10 px-16"> {/* Bagian Home */}
                <div className="flex items-center pb-5"> {/* Judul Home*/}
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
                    <img src="../src/assets/Vector 1.png" className="absolute top-10 right-0 h-[90%] pointer-events-none"></img>
                </div>
            </div>

            <div className="pt-20 px-16 flex flex-col"> {/* Daftar beasiswa */}
                <div className="flex items-center" id="beasiswa" ref={beasiswaRef}> {/* Judul Beasiswa*/}
                    <img alt="Home" src="../src/assets/Beasiswa.png" className="size-9"></img>
                    <div className="w-full flex flex-row justify-between items-center">

                        <h2 className="font-bold inline-flex items-end pl-2 text-xl">Rekomendasi Beasiswa Untukmu </h2>
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

            <div className="pt-20 px-16 relative"> {/* Layanan kami */}
                <img src="../src/assets/Vector 3.png" className="absolute top-80 left-0 w-full object-none scale-150 pointer-events-none"></img>
                <div className="flex pb-10 items-center" id="layanan" ref={layananRef}> {/* Judul Layanan*/}
                    <img alt="Home" src="../src/assets/Layanan.png" className="size-9"></img>
                    <h2 className="font-bold inline-flex items-end pl-2 text-xl">Program Unggulan Kami </h2>
                </div>
                <div className="flex flex-nowrap gap-2 w-full items-center justify-start overflow-x-auto"> {/* Daftar2 mentoring */}

                    <div className="flex-none relative bg-white items-start rounded-xl max-w-lg"> {/* 1 */}
                        <div className="flex flex-row gap-x-4 justify-between m-4">
                            <img src="../src/assets/Mentor1.png" className="size-max"></img>
                            <div className="grid-cols-1">
                                <h3 className="font-bold text-3xl">SUPERCAMP</h3>
                                <p className="font-ligh text-sm my-4">
                                    Webinar intensif bersama awardee selama rangkaian persiapan beasiswa.

                                </p>
                                <div className="flex flex-row items-center justify-around mt-8">
                                    <div className="w-1/3 flex flex-col flex-none">
                                        <p className="text-3xl font-semibold">
                                            70K
                                        </p>
                                        <p className="text-right text-sm">
                                            /sesi
                                        </p>
                                    </div>
                                    <button className="transition bg-orange rounded-xl px-10 py-1 shadow-lg text-lg text-white font-bold tracking-wide hover:bg-orange-80 hover:scale-110"
                                        onClick={() => navigate('/supercamp')}
                                    >
                                        Detail
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-none relative bg-white items-start rounded-xl max-w-lg "> {/* 1 */}
                        <div className="flex flex-row gap-x-4 justify-between m-4">
                            <img src="../src/assets/Mentor2.png" className="size-max"></img>
                            <div className="grid-cols-1">
                                <h3 className="font-bold text-3xl">SUPER-EXCLUSIVE</h3>
                                <p className="font-ligh text-sm my-2">
                                    Webinar intensif bersama awardee selama rangkaian persiapan beasiswa.

                                </p>
                                <div className="flex flex-row items-center justify-around mt-3">
                                    <div className="w-1/3 flex flex-col flex-none">
                                        <p className="text-3xl font-semibold">
                                            70K
                                        </p>
                                        <p className="text-right text-sm">
                                            /sesi
                                        </p>
                                    </div>
                                    <button className="transition bg-orange rounded-xl px-10 py-1 shadow-lg text-lg text-white font-bold tracking-wide hover:bg-orange-80 hover:scale-110"
                                        onClick={() => navigate('/superexclusive')}
                                    >
                                        Detail
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-none relative bg-white items-start rounded-xl max-w-lg"> {/* 1 */}
                        <div className="flex flex-row gap-x-4 justify-between m-4">
                            <img src="../src/assets/Mentor3.png" className="size-max"></img>
                            <div className="grid-cols-1">
                                <h3 className="font-bold text-3xl">SUPERBOOST</h3>
                                <p className="font-ligh text-sm my-4">
                                    Webinar intensif bersama awardee selama rangkaian persiapan beasiswa.

                                </p>
                                <div className="flex flex-row items-center justify-around mt-8">
                                    <div className="w-1/3 flex flex-col flex-none">
                                        <p className="text-3xl font-semibold">
                                            70K
                                        </p>
                                        <p className="text-right text-sm">
                                            /sesi
                                        </p>
                                    </div>
                                    <button className="transition bg-orange rounded-xl px-10 py-1 shadow-lg text-lg text-white font-bold tracking-wide hover:bg-orange-80 hover:scale-110"
                                        onClick={() => navigate('/superboost')}
                                    >
                                        Detail
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className="pt-32 px-16"> {/* Judul Mengapa Eduplore */}
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
            <div className="relative w-full bg-blue items-start pl-10 pr-48 bg-gradient-to-t from-blue to-gray shadow- pt-20 relativ">
                <img src="../src/assets/Vector 2.png" className="absolute bottom-20 left-0 w-screen object-none scale-150 pointer-events-none"></img>
                <div className="grid grid-cols-2 ml-10 gap-x-20">
                    <div>
                        <p className="text-blue text-xl font-bold">RIBUAN orang telah meraih
                            beasiswa impiannya di</p>
                        <p className="text-blue text-3xl font-bold pt-20">TOP 100 UNIVERSITAS
                            TERBAIK DUNIA</p>
                        <p className="text-white text-4xl font-bold italic pt-20 pb-80">Sekarang giliran kamu!</p>

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
