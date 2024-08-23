import { NavLink } from "react-router-dom";

export default function Login() {
    return (
        <>
            <div className="relative">
                <img src="../src/assets/login_bg.png" className="w-full h-auto min-h-[600px] object-cover"></img>
                <div className="absolute inset-0  min-h-[600px] bg-gradient-to-t from-blue to-transparent to-40%" />
                <img src="../src/assets/login_vector1.png" className="absolute left-0 bottom-1/3 h-1/2"></img>
                <img src="../src/assets/login_vector2.png" className="absolute right-0 bottom-1/4 h-1/2"></img>
                <div class="absolute inset-0 flex items-center justify-center z-10">
                    <div class="bg-white xl:mx-32 mx-8 py-8 rounded-xl shadow-lg container ">
                        <h1 class="xl:text-3xl text-xl font-bold text-black text-center">
                            Selamat Datang Kembali!
                        </h1>
                        <p class="text-black mt-4 mx-32 text-center">
                            Yuk, isi form di bawah ini untuk dapat mengakses fitur lengkap dan bimbingan terbaik dari Eduplore!
                        </p>
                        <div className="mb-4 mt-16 mx-36">
                            <input
                                type="text"
                                name="name"
                                placeholder="Email"
                                className="w-full p-3 rounded-lg border border-blue focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div className="mb-4 mx-36">
                            <input
                                type="text"
                                name="name"
                                placeholder="Kata sandi"
                                className="w-full p-3 rounded-lg border border-blue focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <NavLink className="mx-36 text-blue font-bold text-sm">
                            Lupa kata sandi?
                        </NavLink>

                        <div class="flex items-start mx-36 my-4">
                            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label for="default-checkbox" class="ms-2 text-sm font-small text-gray-900 dark:text-gray-300">Ingat Saya <br /><span className="text-xs">
                                Jangan klik kolom ini jika perangkat kamu digunakan oleh orang lain.
                            </span></label>
                        </div>
                        <div className="flex items-center justify-center text-center my-16 ">
                            <NavLink className="whitespace-nowrap shadow-lg text-xl font-bold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-blue hover:bg-slate-100 py-4 rounded-md px-3 text-white border-blue w-1/2" to="/create">
                                Masuk
                            </NavLink>
                        </div>
                        <div className="flex items-center justify-center mx-64 h-0.5  bg-blue" ></div>
                        <div className="flex items-center justify-center text-center mt-16 text-lg ">
                            Pengguna baru?
                        </div>
                        <NavLink className="flex items-center justify-center text-blue font-bold text-lg text-center mt-4 mb-16 ">
                            Klik disini untuk buat akun!
                        </NavLink>
                    </div>

                </div>
            </div>
        </>
    );
}