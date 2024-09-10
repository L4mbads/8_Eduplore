import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: 0,
        username: "",
        password: "",
    });
    const [isChecked, setIsChecked] = useState(false)
    const [errorMessage, setErrorMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate();


    // These methods will update the state properties.
    function updateForm(value) {
        return setForm((prev) => {
            return { ...prev, ...value };
        });
    }

    const handleCheckboxChange = (e) => {
        setIsChecked(e.target.checked); // update state based on checkbox value
    };

    // This function will handle the submission.
    async function onSubmit(e) {
        e.preventDefault();
        const person = { ...form };
        setIsLoading(true)
        setErrorMessage("")
        try {

            if (!isChecked) {
                setErrorMessage("Anda belum menyetujui")
                return;
            }

            let response;
            // if we are adding a new record we will POST to /record.
            response = await fetch("http://localhost:5050/user-management/user", {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(person),
            });


            if (!response.ok) {
                const log = await response.json();
                setErrorMessage(log.message);
                //throw new Error(`HTTP error! status: ${response.status}`);
            }
            const request = await fetch("http://localhost:5050/email-sender/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(person),
            });

            if (!request.ok) {
                setErrorMessage("Maaf terjadi kesalahan. Ulangi beberapa saat lagi.")
                return
            }



            navigate('/')

        } catch (error) {
            console.error('A problem occurred with your fetch operation: ', error);
        } finally {
            setIsLoading(false)
        }

    }
    return (
        <div className="">

            <div className="relative">
                <img src="../src/assets/login_bg.png" className="w-full h-auto min-h-[900px] object-cover"></img>
                <div className="absolute inset-0  min-h-[900px] bg-gradient-to-t from-blue to-transparent to-40%" />
                <img src="../src/assets/login_vector1.png" className="absolute left-0 bottom-1/3 h-1/2"></img>
                <img src="../src/assets/login_vector2.png" className="absolute right-0 bottom-1/4 h-1/2"></img>
                <div class="absolute inset-0 flex items-start pt-16 justify-center z-10">
                    <div class="w-full max-w-2xl ">
                        <form class="flex flex-col bg-white shadow-xl rounded-2xl px-32 pt-6 pb-8 mb-4"
                            onSubmit={onSubmit}
                        >
                            <h1 class="xl:text-3xl text-xl font-semibold text-black text-center">
                                Buat akun sekarang!
                            </h1>
                            <p class="text-black my-8 text-center font-base text-justify">
                                Yuk, isi form di bawah ini untuk dapat mengakses fitur lengkap dan bimbingan terbaik dari Eduplore!
                            </p >
                            <div class="mb-4">
                                <label class="block  text-sm " for="name">
                                    Nama lengkap
                                </label>
                                <input class="shadow appearance-none bg-gray rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Nama lengkap" required

                                    onChange={(e) => updateForm({ name: e.target.value })}
                                />

                            </div>
                            <div class="mb-4">
                                <label class="block  text-sm" for="emaii">
                                    Email
                                </label>
                                <input class="shadow appearance-none  bg-gray rounded w-full py-2 px-3   leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" required
                                    onChange={(e) => updateForm({ email: e.target.value })}
                                />

                            </div>
                            <div class="mb-4">
                                <label class="block  text-sm" for="phone">
                                    Nomor Telepon
                                </label>
                                <input class="shadow appearance-none  bg-gray rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline" id="phone" type="number" placeholder="08123456789" required
                                    onChange={(e) => updateForm({ phone: e.target.value })}
                                />

                            </div>
                            <div class="mb-4">
                                <label class="block  text-sm" for="username">
                                    Nama Pengguna
                                </label>
                                <input class="shadow appearance-none  bg-gray rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Nama pengguna" required
                                    onChange={(e) => updateForm({ username: e.target.value })}
                                />

                            </div>
                            <div class="mb-6">
                                <label class="block  text-sm" for="password">
                                    Kata Sandi
                                </label>
                                <input class="shadow appearance-none  bg-gray rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Kata sandi" required
                                    onChange={(e) => updateForm({ password: e.target.value })}
                                />

                            </div>
                            <div className="mb-6 text-center text-red font-bold">
                                {errorMessage}
                            </div>
                            <div class="mb-6 flex">
                                <label class=" block text-gray-500 font-light">
                                    <input class="mr-2 leading-tight" type="checkbox"
                                        checked={isChecked}
                                        onChange={handleCheckboxChange}
                                    />

                                </label>                                    <span class="text-sm">
                                    Saya setuju dengan <a className="text-blue underline" href="https://campus.quipper.com/terms">Syarat dan Ketentuan</a> dan <a className="text-blue underline" href="https://campus.quipper.com/privacy">Kebijakan Privasi</a>.
                                </span>
                            </div>
                            <div class="flex  justify-center mx-4">
                                <button class="transition-all shadow grow bg-blue hover:bg-blue-80 text-white font-bold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline hover:tracking-widest tracking-wider" type="submit">
                                    Daftar

                                    <div className={`inline-block ${isLoading ? '' : 'hidden'} size-3.5 mx-4 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white`} role="status" />
                                </button>

                            </div>


                            <p class="text-black mt-8 mb-2 text-center font-base">
                                Sudah punya akun?
                            </p >
                            <NavLink class="text-center font-semibold text-lg text-blue hover:text-blue-80" to="/login">
                                <p className="text-center font-semibold text-lg text-blue hover:text-blue-80">Masuk</p>
                            </NavLink>

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