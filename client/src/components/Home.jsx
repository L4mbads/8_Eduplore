import { NavLink } from "react-router-dom";

export default function Home() {
    return (
        <div>
            <div className="pt-20 px-16"> {/* Bagian Home */}
                <div className="flex pb-10"> {/* Judul Home*/}
                    <img alt="Home" src="../src/assets/Home.png" className="size-9"></img>
                    <h2 className="font-bold inline-flex items-end pl-2 text-xl">Home</h2>
                </div>
                <div className="relative container mx-auto bg-blue items-start pl-10 pr-48 rounded-xl bg-gradient-to-r from-blue to-blue-40 shadow-lg"> {/* Home */}
                    <p className="font-bold text-white text-5xl pt-10">Informasi dan Bimbingan Beasiswa Terlengkap!</p>
                    <p className="font-bold text-white pt-6 text-xl">
                    Nggak perlu bingung tentang persiapan beasiswa. <br/>Puluhan
                    mentor profesional siap menemani dan membimbing perjalananmu!<br/>
                    </p>
                    <NavLink className="font-bold text-white bg-orange inline-flex items-center justify-center rounded-md mt-10 mb-16 py-2 px-4 shadow-xl " to="/create">
                        Persiapkan sekarang

                    </NavLink>
                    <img src="../src/assets/Vector 1.png" className="absolute top-10 right-0"></img>
                </div>
            </div>

            <div className="pt-20 px-16"> {/* Daftar beasiswa */}
                <div className="flex pb-10"> {/* Judul Beasiswa*/}
                    <img alt="Home" src="../src/assets/Beasiswa.png" className="size-9"></img>
                    <h2 className="font-bold inline-flex items-end pl-2 text-xl">Rekomendasi Beasiswa Untukmu </h2>
                </div>
                <div className="flex flex-row gap-8 overflow-x-auto"> {/* Daftar2 Beasiswa */}
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
                        <NavLink className="font-bold text-white bg-orange inline-flex items-center justify-center rounded-md mx-20 my-4 shadow-xl ">
                            selengkapnya
                        </NavLink>
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
                        <NavLink className="font-bold text-white bg-orange inline-flex items-center justify-center rounded-md mx-20 my-4 shadow-xl ">
                            selengkapnya
                        </NavLink>
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
                        <NavLink className="font-bold text-white bg-orange inline-flex items-center justify-center rounded-md mx-20 my-4 shadow-xl ">
                            selengkapnya
                        </NavLink>
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
                        <NavLink className="font-bold text-white bg-orange inline-flex items-center justify-center rounded-md mx-20 my-4 shadow-xl ">
                            selengkapnya
                        </NavLink>
                    </div>
                    <div className="relative bg-white items-start rounded-xl "> {/* 5 */}
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
                            Beasiswa Pendidikan Indonesia
                        </div>
                        <p className="font-bold mx-2">Status: <span className="text-green-60">sedang dibuka</span></p>
                        <NavLink className="font-bold text-white bg-orange inline-flex items-center justify-center rounded-md mx-20 my-4 shadow-xl ">
                            selengkapnya
                        </NavLink>
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
                        <NavLink className="font-bold text-white bg-orange inline-flex items-center justify-center rounded-md mx-20 my-4 shadow-xl ">
                            selengkapnya
                        </NavLink>
                        
                    </div>
                    

                </div>
            </div>
            <div className="pt-20 px-16"> {/* Layanan kami */}
                <div className="flex pb-10"> {/* Judul Layanan*/}
                    <img alt="Home" src="../src/assets/Layanan.png" className="size-9"></img>
                    <h2 className="font-bold inline-flex items-end pl-2 text-xl">Program Unggulan Kami </h2>
                </div>

            </div>

            <div> {/* judul mengepa Eduplore */}
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
        </div>

        
    );
}
