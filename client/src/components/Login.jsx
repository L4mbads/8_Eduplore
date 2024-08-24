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
                    <div class="w-full max-w-lg">
                        <form class="flex flex-col bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                            <h1 class="xl:text-3xl text-xl font-semibold text-black text-center">
                                Selamat Datang Kembali!
                            </h1>
                            <p class="text-black my-8 text-center font-light">
                                Yuk, isi form di bawah ini untuk dapat mengakses fitur lengkap dan bimbingan terbaik dari Eduplore!
                            </p >
                            <div class="mb-4">

                                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="Email" />
                            </div>
                            <div class="mb-6">

                                <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Kata sandi" />
                                <a class="pl-4 inline-block align-baseline font-semibold text-sm text-blue hover:text-blue-800" href="#">
                                    Lupa kata sandi?
                                </a>
                            </div>
                            <div class="flex items-cente justify-center mx-4">
                                <button class="shadow grow bg-blue hover:bg-blue-60 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                    Sign In
                                </button>

                            </div>

                            <div className="my-8 bg-blue h-0.5">

                            </div>
                            <p class="text-black mt-8 mb-2 text-center font-base">
                                Pengguna baru?
                            </p >
                            <a class="text-center font-semibold text-sm text-blue hover:text-blue-800" href="#">
                                Klik disini untuk buat akun!
                            </a>
                        </form>
                        <p class="text-center text-gray-500 text-xs">
                            .
                        </p>
                    </div>

                </div>
            </div>
        </>
    );
}