import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function UserPage() {

    const [form, setForm] = useState({
        name: "",
        phone: 0,
        email: "",
        username: "",
        password: "",
    });
    let originalForm = {};
    const params = useParams();
    const [isAuthorized, setIsAuthorized] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchData() {

            const authorized = await fetch(`http://localhost:5050/auth/`, {
                method: "GET",
                credentials: "include",
            });
            if (!authorized.ok) {
                navigate("/login");
                return;
            }


            const user = await authorized.json();
            if (user.id.toString() !== params.id.toString()) {
                setErrorMessage("Access Denied")
                return
            } else {

                setIsAuthorized(true)
                const response = await fetch(`http://localhost:5050/user-management/users/${params.id}`, {
                    method: "GET",
                    credentials: "include",
                });
                if (!response.ok) {
                    setErrorMessage("User tidak ditemukan")
                    return;
                }

                const userData = await response.json();

                setForm(userData)
                originalForm = userData

            }
        }
        fetchData();
    }, [navigate]);

    // These methods will update the state properties.
    function updateForm(value) {
        return setForm((prev) => {
            return { ...prev, ...value };
        });
    }

    // This function will handle the submission.
    async function onSubmit(e) {
        e.preventDefault();
        const person = { ...form };
        try {
            let response;

            response = await fetch(`http://localhost:5050/user-management/users/${params.id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(person),
            });


            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
        } catch (error) {
            console.error('A problem occurred with your fetch operation: ', error);
        } finally {
            window.location.reload(true);
        }
    }
    function onCancel(e) {
        updateForm(originalForm);
        window.location.reload(true);
    }

    function Block() {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen ">
                <h1 className="text-center font-bold text-6xl tracking-wide opacity-80 pb-6">Maaf</h1>
                <h2 className=" font-base text-sm opacity-80 pb-36">{errorMessage}</h2>

                <NavLink className="transition-all text-blue text-xl font-bold hover:text-blue-80 hover:text-2xl" to="/"> Kembali ke laman utama</NavLink>
            </div>
        )
    }
    return (
        <>
            <div className={`bg-gray ${isAuthorized ? "" : "hidden"}`}>
                <div className="flex flex-row items-center  px-16 py-10">
                    <img src="../src/assets/arrow.svg" alt="" className="size-6 mr-4" />
                    <button className="transition-all text-blue font-semibold tracking-wide hover:translate-x-2 hover:scale-125 hover:text-blue-80" type="button" onClick={() => (navigate(-1))}>Kembali</button>
                </div>

                <h1 className="inline-block text-5xl px-28 py-10 font-semibold tracking-wide">
                    Profil
                </h1>
                <div className="flex items-start justify-center">
                    <form className=" w-full max-w-6xl items-center  px-16"
                        onSubmit={onSubmit}
                    >
                        <div className=" flex flex-col bg-white shadow-lg rounded-xl p-10 my-10">
                            <h2 className="text-black opacity-60 font-semibold tracking-wide text-3xl">Biodata</h2>
                            <div className="flex flex-wrap gap-20 mt-6 items-end justify-center mb-6">
                                <img src="../src/assets/avatar.svg" alt="avatar" className="size-36" />
                                <div className=" grow">
                                    <div className="flex justify-between  mb-6 gap-6">
                                        <label class="  text-xl font-semibold text-blue " for="name">
                                            Nama lengkap
                                        </label>
                                        <input class="shadow appearance-none border-2  rounded-xl w-1/2 py-2 mb-2 px-3 leading-tight focus:outline-none focus:shadow-outline border-blue" id="name" type="text" value={form.name} required
                                            onChange={(e) => updateForm({ name: e.target.value })}
                                        />
                                    </div>
                                    <div className="flex justify-between  gap-6">
                                        <label class="  text-xl font-semibold text-blue " for="name">
                                            No. Telepon
                                        </label>
                                        <input class="shadow appearance-none border-2  rounded-xl w-1/2 py-2 mb-2 px-3 leading-tight focus:outline-none focus:shadow-outline border-blue" id="name" type="number" value={form.phone} required
                                            onChange={(e) => updateForm({ phone: e.target.value })}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className=" flex flex-col bg-white shadow-lg rounded-xl p-10 my-10">
                            <h2 className="text-black opacity-60 font-semibold tracking-wide text-3xl mb-6">Akun</h2>
                            <div className="flex flex-wrap gap-36 mt-6 items-end justify-center mb-6">

                                <div className=" grow">
                                    <div className="flex justify-between  mb-6 gap-6">
                                        <label class="  text-xl font-semibold text-blue " for="email">
                                            Email
                                        </label>
                                        <input class="shadow appearance-none border-2  rounded-xl w-2/3 py-2 mb-2 px-3 leading-tight focus:outline-none focus:shadow-outline border-blue" id="email" type="email" value={form.email} required
                                            onChange={(e) => updateForm({ email: e.target.value })}
                                        />
                                    </div>
                                    <div className="flex justify-between mb-6  gap-6">
                                        <label class="  text-xl font-semibold text-blue " for="username">
                                            Nama Pengguna
                                        </label>
                                        <input class="shadow appearance-none border-2  rounded-xl w-2/3 py-2 mb-2 px-3 leading-tight focus:outline-none focus:shadow-outline border-blue" id="username" type="text" value={form.username} required
                                            onChange={(e) => updateForm({ username: e.target.value })}
                                        />
                                    </div>

                                    <div className="flex justify-between  gap-6">
                                        <label class="  text-xl font-semibold text-blue " for="password">
                                            Kata Sandi
                                        </label>
                                        <div className="w-2/3 flex flex-col">
                                            <input class="shadow appearance-none border-2  rounded-xl py-2 mb-2 px-3 leading-tight focus:outline-none focus:shadow-outline border-blue" id="password" placeholder="****" disabled type="password"
                                            />
                                            <button className="text-left text-blue hover:text-blue-80 font-semibold" type="button">Ganti kata sandi</button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div class="flex justify-center px-4 gap-x-8 mb-8">
                            <button class="transition-all shadow w-1/6 min-w-fit bg-blue hover:bg-blue-80 text-white font-bold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline hover:tracking-widest tracking-wider" type="submit">
                                Simpan
                            </button>
                            <button class="transition-all shadow w-1/6 min-w-fit bg-white hover:bg-red text-blue hover:text-white border-2 border-blue hover:border-black font-bold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline hover:tracking-widest tracking-wider" type="button"
                                onClick={onCancel}
                            >
                                Batal
                            </button>
                        </div>
                    </form>
                </div >
            </div >
            {!isAuthorized && <Block />}
        </>
    );
}