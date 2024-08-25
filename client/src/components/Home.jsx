import { NavLink } from "react-router-dom";
import { useRef } from "react";
import { useScroll } from "./ScrollContext";


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
                    Nggak perlu bingung tentang persiapan beasiswa. <br/>Puluhan
                    mentor profesional siap menemani dan membimbing perjalananmu!<br/>
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
                <div className="flex flex-row gap-8 overflow-x-auto" > {/* Daftar2 Beasiswa */}
                    <div className="relative bg-white items-start rounded-xl w-fit"> {/* 1 */}
                        <div className="flex justify-between gap-x-16">
                            <div className="grid grid-cols-2 mx-2 my-2 gap-x-2 gap-y-1 text-black text-sm flex-auto w-64">
                                <div className="bg-white inline-flex items-center justify-center rounded-md h-fit shadow-xl border-blue border">
                                    Indonesia

                                </div>
                                <div className="bg-white inline-flex items-center justify-center rounded-md shadow-xl border-blue border">
                                    S2/S3
                                </div>
                                <div className="bg-white inline-flex items-center justify-center rounded-md shadow-xl border-blue border">
                                    Fully Funded
                                </div>
                            </div>
                            <img src="../src/assets/Bookmark.png" className="size-10"></img>
                        </div>
                        <div className="mx-2 my-4 font-bold text-xl">
                            Beasiswa Reguler
                        </div>
                        <p className="font-bold mx-2">Status: <span className="text-green-60">sedang dibuka</span></p>
                        <a className="font-bold text-white bg-orange inline-flex items-center justify-center rounded-md mx-20 my-4 shadow-xl " href="https://lpdp.kemenkeu.go.id/">
                            selengkapnya
                        </a>
                    </div>
                    <div className="relative bg-white items-start rounded-xl "> {/* 2 */}
                        <div className="flex gap-x-16 justify-between">
                            <div className="grid grid-cols-2 mx-2 my-2 gap-x-2 gap-y-1 text-black text-sm flex-auto w-64">
                                <div className="bg-white inline-flex items-center justify-center rounded-md h-fit shadow-xl border-blue border">
                                    Indonesia

                                </div>
                                <div className="bg-white inline-flex items-center justify-center rounded-md shadow-xl border-blue border">
                                    S2/S3
                                </div>
                                <div className="bg-white inline-flex items-center justify-center rounded-md shadow-xl border-blue border">
                                    Fully Funded
                                </div>
                            </div>
                            <img src="../src/assets/Bookmark.png" className="size-10"></img>
                        </div>
                        <div className="mx-2 my-4 font-bold text-xl">
                            Beasiswa PTUD
                        </div>
                        <p className="font-bold mx-2">Status: <span className="text-green-60">sedang dibuka</span></p>
                        <a className="font-bold text-white bg-orange inline-flex items-center justify-center rounded-md mx-20 my-4 shadow-xl " href="https://lpdp.kemenkeu.go.id/">
                            selengkapnya
                        </a>
                    </div>
                    <div className="relative bg-white items-start rounded-xl "> {/* 3 */}
                        <div className="flex gap-x-16 justify-between">
                            <div className="grid grid-cols-2 mx-2 my-2 gap-x-2 gap-y-1 text-black text-sm flex-auto w-64">
                                <div className="bg-white inline-flex items-center justify-center rounded-md h-fit shadow-xl border-blue border">
                                    Indonesia

                                </div>
                                <div className="bg-white inline-flex items-center justify-center rounded-md shadow-xl border-blue border">
                                    S2/S3
                                </div>
                                <div className="bg-white inline-flex items-center justify-center rounded-md shadow-xl border-blue border">
                                    Fully Funded
                                </div>
                            </div>
                            <img src="../src/assets/Bookmark.png" className="size-10"></img>
                        </div>
                        <div className="mx-2 my-4 font-bold text-xl">
                            Beasiswa Co-funding
                        </div>
                        <p className="font-bold mx-2">Status: <span className="text-green-60">sedang dibuka</span></p>
                        <a className="font-bold text-white bg-orange inline-flex items-center justify-center rounded-md mx-20 my-4 shadow-xl " href="https://lpdp.kemenkeu.go.id/">
                            selengkapnya
                        </a>
                    </div>
                    <div className="relative bg-white items-start rounded-xl "> {/* 4 */}
                        <div className="flex gap-x-16 justify-between">
                            <div className="grid grid-cols-2 mx-2 my-2 gap-x-2 gap-y-1 text-black text-sm flex-auto w-64">
                                <div className="bg-white inline-flex items-center justify-center rounded-md h-fit shadow-xl border-blue border">
                                    Indonesia

                                </div>
                                <div className="bg-white inline-flex items-center justify-center rounded-md shadow-xl border-blue border">
                                    S1/S2/S3
                                </div>
                                <div className="bg-white inline-flex items-center justify-center rounded-md shadow-xl border-blue border">
                                    Fully Funded
                                </div>
                            </div>
                            <img src="../src/assets/Bookmark.png" className="size-10"></img>
                        </div>
                        <div className="mx-2 my-4 font-bold text-xl">
                            Beasiswa Unggulan
                        </div>
                        <p className="font-bold mx-2">Status: <span className="text-green-60">sedang dibuka</span></p>
                        <a className="font-bold text-white bg-orange inline-flex items-center justify-center rounded-md mx-20 my-4 shadow-xl " href="https://beasiswaunggulan.kemdikbud.go.id/">
                            selengkapnya
                        </a>
                    </div>
                    <div className="relative bg-white items-start rounded-xl "> {/* 5 */}
                        <div className="flex gap-x-16 justify-between">
                            <div className="grid grid-cols-2 mx-2 my-2 gap-x-2 gap-y-1 text-black text-sm flex-auto w-64">
                                <div className="bg-white inline-flex items-center justify-center rounded-md h-fit shadow-xl border-blue border">
                                    Indonesia

                                </div>
                                <div className="bg-white inline-flex items-center justify-center rounded-md shadow-xl border-blue border">
                                    S1
                                </div>
                                <div className="bg-white inline-flex items-center justify-center rounded-md shadow-xl border-blue border">
                                    Fully Funded
                                </div>
                            </div>
                            <img src="../src/assets/Bookmark.png" className="size-10"></img>
                        </div>
                        <div className="mx-2 my-4 font-bold text-xl">
                            Beasiswa Ma’had Aly
                        </div>
                        <p className="font-bold mx-2">Status: <span className="text-green-60">sedang dibuka</span></p>
                        <a className="font-bold text-white bg-orange inline-flex items-center justify-center rounded-md mx-20 my-4 shadow-xl " href="https://beasiswa.baznas.go.id/program-beasiswa">
                            selengkapnya
                        </a>
                    </div>
                    <div className="relative bg-white items-start rounded-xl "> {/* 6 */}
                        <div className="flex gap-x-16 justify-between">
                            <div className="grid grid-cols-2 mx-2 my-2 gap-x-2 gap-y-1 text-black text-sm flex-auto w-64">
                                <div className="bg-white inline-flex items-center justify-center rounded-md h-fit shadow-xl border-blue border">
                                    Indonesia

                                </div>
                                <div className="bg-white inline-flex items-center justify-center rounded-md shadow-xl border-blue border">
                                    S1
                                </div>
                                <div className="bg-white inline-flex items-center justify-center rounded-md shadow-xl border-blue border">
                                    Fully Funded
                                </div>
                            </div>
                            <img src="../src/assets/Bookmark.png" className="size-10"></img>
                        </div>
                        <div className="mx-2 my-4 font-bold text-xl">
                            Beasiswa CENDEKIA Baznas
                        </div>
                        <p className="font-bold mx-2">Status: <span className="text-green-60">sedang dibuka</span></p>
                        <a className="font-bold text-white bg-orange inline-flex items-center justify-center rounded-md mx-20 my-4 shadow-xl " href="https://beasiswa.baznas.go.id/program-beasiswa">
                            selengkapnya
                        </a>
                        
                    </div>
                    

                </div>
            </div>
            <div className="pt-20 px-16 relative"> {/* Layanan kami */}
                <img src="../src/assets/Vector 3.png" className="absolute top-80 left-0 size-full"></img>
                <div className="flex pb-10" id="layanan" ref={layananRef}> {/* Judul Layanan*/}
                    <img alt="Home" src="../src/assets/Layanan.png" className="size-9"></img>
                    <h2 className="font-bold inline-flex items-end pl-2 text-xl">Program Unggulan Kami </h2>
                </div>
                <div className="flex flex-row gap-4 overflow-x-auto"> {/* Daftar2 mentoring */}
                    <NavLink className="relative bg-white items-start rounded-xl w-full" to=""> {/* 1 */}
                        <div className="flex gap-x-4 justify-between my-10">
                            <img src="../src/assets/Mentor1.png" className="ml-4"></img>
                            <div className="grid-cols-1">
                                <h3 className="font-bold text-xl">SUPERCAMP</h3>
                                <div className="font-bold text-black bg-green inline-flex items-center justify-center rounded-md px-4 mt-2">
                                    Rating: 4.7
                                </div>
                                <div className="mt-10">
                                    <p>Ikuti kelas intensif bersama para awardee selama rangkaian persiapan. 
                                    </p>
                                </div>
                            </div>
                        </div>
                    
                    </NavLink>
                    <NavLink className="relative bg-white items-start rounded-xl w-full"> {/* 2 */}
                        <div className="flex gap-x-4 justify-between my-10">
                            <img src="../src/assets/Mentor2.png" className="ml-4"></img>
                            <div className="grid-cols-1">
                                <h3 className="font-bold text-xl">SUPER-EXCLUSIVE</h3>
                                <div className="font-bold text-black bg-green inline-flex items-center justify-center rounded-md px-4 mt-2">
                                    Rating: 4.7
                                </div>
                                <div className="mt-10">
                                    <p>
                                        1-on-1 mentoring bersama mentor tepercaya sesuai kebutuhan beasiswa impianmu!
                                    </p>
                                </div>
                            </div>
                        </div>
                    
                    </NavLink>
                    <NavLink className="relative bg-white items-start rounded-xl w-full"> {/* 3 */}
                        <div className="flex gap-x-4 justify-between my-10">
                            <img src="../src/assets/Mentor3.png" className="ml-4"></img>
                            <div className="grid-cols-1">
                                <h3 className="font-bold text-xl">SUPERBOOST</h3>
                                <div className="font-bold text-black bg-green inline-flex items-center justify-center rounded-md px-4 mt-2">
                                    Rating: 4.7
                                </div>
                                <div className="mt-10">
                                    <p>Tips dan trik, feedback untuk persiapan beasiswa impianmu. </p>
                                </div>
                            </div>
                        </div>
                    
                    </NavLink>
                </div>
                
            </div>

            <div className="pt-64 px-16"> {/* judul mengepa Eduplore */}
                <h3 className="font-bold text-4xl text-center">Mengapa Eduplore?</h3>
                <div className="grid grid-cols-3 gap-x-2 items-center text-center">
                    <div className="flex flex-col items-center justify-center">
                        <div className="flex flex-grow items-center">
                            <img src="../src/assets/People.png" className="size-30"></img>
                        </div>

                        <h4 className="font-bold text-xl">7k+ pengguna</h4>
                        <p>yang memercayai program kami untuk konsultasi beasiswa</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="flex flex-grow items-center">
                            <img src="../src/assets/Chaine.png" className="size-30"></img>
                        </div>
                        <h4 className="font-bold text-xl">koneksi beasiswa</h4>
                        <p>yang luas sehingga menjamin informasi terlengkap dan tepercaya</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="flex flex-grow items-center">
                            <img src="../src/assets/Person.png" className="size-30"></img>
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
        </div>

        
    );
}
