import { NavLink } from "react-router-dom";

export default function Signup() {
    return (
        <div className="">

            <div className="relative">
                <img src="../src/assets/login_bg.png" className="w-full h-auto min-h-[600px] object-cover"></img>
                <div className="absolute inset-0  min-h-[600px] bg-gradient-to-t from-blue to-transparent to-40%" />
                <img src="../src/assets/login_vector1.png" className="absolute left-0 bottom-1/3 h-1/2"></img>
                <img src="../src/assets/login_vector2.png" className="absolute right-0 bottom-1/4 h-1/2"></img>
                <div class="absolute inset-0 flex items-start pt-16 justify-center z-10">
                    <div class="w-full max-w-lg">
                        <form class="flex flex-col bg-white shadow-md rounded-xl px-8 pt-6 pb-8 mb-4">
                            <h1 class="xl:text-3xl text-xl font-semibold text-black text-center">
                                Buat akun sekarang!
                            </h1>
                            <p class="text-black my-8 text-center font-light">
                                Yuk, isi form di bawah ini untuk dapat mengakses fitur lengkap dan bimbingan terbaik dari Eduplore!
                            </p >
                            <div class="mb-4">
                                <label class="block  text-sm " for="name">
                                    Nama lengkap
                                </label>
                                <input class="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Nama lengkap" />
                            </div>
                            <div class="mb-4">
                                <label class="block  text-sm" for="emaii">
                                    Email
                                </label>
                                <input class="shadow appearance-none border  rounded w-full py-2 px-3   leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" />

                            </div>
                            <div class="mb-4">
                                <label class="block  text-sm" for="phone">
                                    Nomor Telepon
                                </label>
                                <input class="shadow appearance-none border  rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline" id="phone" type="number" placeholder="08123456789" />

                            </div>
                            <div class="mb-4">
                                <label class="block  text-sm" for="username">
                                    Nama Pengguna
                                </label>
                                <input class="shadow appearance-none border  rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Nama pengguna" />

                            </div>
                            <div class="mb-6">
                                <label class="block  text-sm" for="password">
                                    Kata Sandi
                                </label>
                                <input class="shadow appearance-none border  rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Kata sandi" />

                            </div>
                            <div class="mb-6 flex">
                                <label class="md:w-2/3 block text-gray-500 font-light">
                                    <input class="mr-2 leading-tight" type="checkbox" />

                                </label>                                    <span class="text-sm">
                                    Saya setuju dengan <a className="text-blue underline" href="https://campus.quipper.com/terms">Syarat dan Ketentuan</a> dan <a className="text-blue underline" href="https://campus.quipper.com/privacy">Kebijakan Privasi</a>.
                                </span>
                            </div>
                            <div class="flex  justify-center mx-4">
                                <button class="shadow grow bg-blue hover:bg-blue-80 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                    Daftar
                                </button>

                            </div>


                            <p class="text-black mt-8 mb-2 text-center font-base">
                                Sudah punya akun?
                            </p >
                            <a class="text-center font-semibold text-lg text-blue hover:text-blue-80" href="#">
                                Masuk
                            </a>
                        </form>
                        <p class="text-center text-gray-500 text-xs">
                            .
                        </p>
                    </div>

                </div>

            </div>
        </div>
    );
}