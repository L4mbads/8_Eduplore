import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
export default function Login() {
    const [form, setForm] = useState({
        email: "",
        password: "",
        rememberMe: false,
    });
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();



    // These methods will update the state properties.
    function updateForm(value) {
        return setForm((prev) => {
            return { ...prev, ...value };
        });
    }

    async function onSubmit(e) {
        e.preventDefault();
        const person = { ...form };
        try {

            let response;
            // if we are adding a new record we will POST to /record.
            response = await fetch("http://localhost:5050/auth/login", {
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
            } else {

                navigate(-1);
            }

        } catch (error) {
            console.error('A problem occurred with your fetch operation: ', error);
        }
    }
    async function logout() {
        let response = await fetch("http://localhost:5050/auth/logout", {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
        });


    }

    return (
        <>
            <div className="relative">
                <img src="../src/assets/login_bg.png" className="w-full h-auto min-h-[900px] object-cover"></img>
                <div className="absolute inset-0  min-h-[900px] bg-gradient-to-t from-blue to-transparent to-40%" />
                <img src="../src/assets/login_vector1.png" className="absolute left-0 bottom-1/3 h-1/2"></img>
                <img src="../src/assets/login_vector2.png" className="absolute right-0 bottom-1/4 h-1/2"></img>
                <div class="absolute inset-0 flex items-start justify-center pt-16 z-10">
                    <div class="w-full max-w-2xl">
                        <form class="flex flex-col bg-white shadow-xl rounded-2xl px-32 pt-10 mb-4"
                            onSubmit={onSubmit}
                        >
                            <h1 class="xl:text-3xl text-xl font-semibold text-black text-center">
                                Selamat Datang Kembali!
                            </h1>
                            <p class="text-black pt-6 pb-10 text-center font-base">
                                Yuk, isi form di bawah ini untuk dapat mengakses fitur lengkap dan bimbingan terbaik dari Eduplore!
                            </p >
                            <div class="mb-4">
                                <input class="shadow appearance-none border-2 rounded-xl w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline border-blue" id="email" type="email" placeholder="Email" required

                                    onChange={(e) => updateForm({ email: e.target.value })}
                                />

                            </div>
                            <div class="mb-6">
                                <input class="shadow appearance-none border-2  rounded-xl w-full py-2 mb-2 px-3 leading-tight focus:outline-none focus:shadow-outline border-blue" id="password" type="password" placeholder="Kata sandi" required
                                    onChange={(e) => updateForm({ password: e.target.value })}
                                />
                                <a className="text-blue font-semibold tracking-wide pl-2 text-sm"> Lupa kata sandi?</a>

                            </div>
                            <div class="mb-6 flex ">
                                <label class=" grow ">
                                    <input class="mr-2 leading-tight size-4 mt-1 ring-blue" type="checkbox"
                                        checked={form.rememberMe}

                                        onChange={(e) => updateForm({ rememberMe: e.target.checked })}
                                    />

                                </label>
                                <div>

                                    <p>Ingat Saya</p>
                                    <p className="text-xs font-light">Jangan klik kolom ini jika perangkat kamu digunakan oleh orang lain.</p>
                                </div>
                            </div>
                            <div className="mb-6 text-center text-red font-bold">
                                {errorMessage}
                            </div>
                            <div class="flex  justify-center mx-4 mb-8">
                                <button class="transition-all shadow grow bg-blue hover:bg-blue-80 text-white font-bold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline hover:tracking-widest tracking-wider" type="submit">
                                    Masuk
                                </button>

                            </div>
                            <hr class="h-px my-6 bg-blue border-1 -mx-16 "></hr>
                            <p class="text-black mt-4 mb-1 text-center font-base">
                                Pengguna baru?
                            </p >
                            <NavLink class="text-center font-semibold text-lg text-blue hover:text-blue-80" to="/signup">
                                <p className="text-center font-semibold text-lg text-blue hover:text-blue-80 mb-16">Klik disini untuk membuat akun!</p>
                            </NavLink>

                        </form>
                        <p class="text-center text-gray-500 text-xs">
                            .
                        </p>
                    </div>

                </div >
            </div >
        </>
    );
}