import { NavLink } from "react-router-dom";

export default function Home() {
    return (
        <div>
            <div className="pt-20 px-16"> {/* Bagian Home */}
                <div className="flex"> {/* Judul Home*/}
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

            <div className=""> {/* Daftar beasiswa */}

            </div>
        </div>

        
    );
}
