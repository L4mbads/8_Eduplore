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
            if (user._id !== params.id) {
                setErrorMessage("Access Denied")
                return
            } else {

                setIsAuthorized(true)
                const response = await fetch(`http://localhost:5050/user-management/user/${params.id}`, {
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

            response = await fetch(`http://localhost:5050/user-management/user/${params.id}`, {
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
            <div className="min-h-screen bg-gray">
                <div className="flex flex-row items-center px-4 pt-10 md:px-16">
                    <img src="../src/assets/arrow.svg" alt="" className="size-6 mr-4" />
                    <button className="transition-all text-blue font-semibold tracking-wide hover:translate-x-2 hover:scale-125 hover:text-blue-80" type="button" onClick={() => (navigate(-1))}>Kembali</button>
                </div>

                <h1 className="text-center text-3xl md:text-5xl px-4 pt-8 font-semibold tracking-wide">
                    Profile
                </h1>

                <div className="flex items-center justify-center">
                    <form className="w-full max-w-xl md:max-w-6xl px-4 md:px-16" onSubmit={onSubmit}>
                        <div className="bg-white shadow-lg rounded-xl p-6 md:p-10 my-3">
                            <h2 className="text-black opacity-60 font-semibold tracking-wide text-xl md:text-3xl">Biodata</h2>
                            <div className="flex flex-col md:flex-row gap-4 md:gap-20 mt-6 items-center md:items-start mb-6">
                                <img src="../src/assets/avatar.svg" alt="avatar" className="size-24 md:size-36" />
                                <div className="grow w-full">
                                    <div className="flex flex-col md:flex-row justify-between mb-4 gap-6">
                                        <label className="text-base md:text-xl font-semibold text-blue" htmlFor="name">
                                            Nama lengkap
                                        </label>
                                        <input className="shadow appearance-none border-2 rounded-xl w-full md:w-1/2 py-2 px-3 focus:outline-none focus:shadow-outline border-blue" id="name" type="text" value={form.name} required
                                            onChange={(e) => updateForm({ name: e.target.value })}
                                        />
                                    </div>
                                    <div className="flex flex-col md:flex-row justify-between gap-6">
                                        <label className="text-base md:text-xl font-semibold text-blue" htmlFor="phone">
                                            No. Telepon
                                        </label>
                                        <input className="shadow appearance-none border-2 rounded-xl w-full md:w-1/2 py-2 px-3 focus:outline-none focus:shadow-outline border-blue" id="phone" type="number" value={form.phone} required
                                            onChange={(e) => updateForm({ phone: e.target.value })}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white shadow-lg rounded-xl p-6 md:p-10 my-10">
                            <h2 className="text-black opacity-60 font-semibold tracking-wide text-xl md:text-3xl mb-6">Akun</h2>
                            <div className="flex flex-col md:flex-row gap-4 md:gap-36 items-center md:items-start mb-6">
                                <div className="grow w-full">
                                    <div className="flex flex-col md:flex-row justify-between mb-4 gap-6">
                                        <label className="text-base md:text-xl font-semibold text-blue" htmlFor="email">
                                            Email
                                        </label>
                                        <input className="shadow appearance-none border-2 rounded-xl w-full md:w-2/3 py-2 px-3 focus:outline-none focus:shadow-outline border-blue" id="email" type="email" value={form.email} required
                                            onChange={(e) => updateForm({ email: e.target.value })}
                                        />
                                    </div>
                                    <div className="flex flex-col md:flex-row justify-between mb-4 gap-6">
                                        <label className="text-base md:text-xl font-semibold text-blue" htmlFor="username">
                                            Nama Pengguna
                                        </label>
                                        <input className="shadow appearance-none border-2 rounded-xl w-full md:w-2/3 py-2 px-3 focus:outline-none focus:shadow-outline border-blue" id="username" type="text" value={form.username} required
                                            onChange={(e) => updateForm({ username: e.target.value })}
                                        />
                                    </div>

                                    <div className="flex flex-col md:flex-row justify-between gap-6">
                                        <label className="text-base md:text-xl font-semibold text-blue" htmlFor="password">
                                            Kata Sandi
                                        </label>
                                        <div className="w-full md:w-2/3 flex flex-col">
                                            <input className="shadow appearance-none border-2 rounded-xl py-2 px-3 focus:outline-none focus:shadow-outline border-blue" id="password" placeholder="****" disabled type="password" />
                                            <button className="text-left text-blue hover:text-blue-80 font-semibold mt-2" type="button">Ganti kata sandi</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-center gap-4 px-4 mb-8">
                            <button className="transition-all shadow w-full md:w-1/6 bg-blue hover:bg-blue-80 text-white font-bold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline hover:tracking-widest tracking-wider" type="submit">
                                Simpan
                            </button>
                            <button className="transition-all shadow w-full md:w-1/6 bg-white hover:bg-red text-blue hover:text-white border-2 border-blue hover:border-black font-bold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline hover:tracking-widest tracking-wider" type="button" onClick={onCancel}>
                                Batal
                            </button>
                        </div>
                    </form>
                </div>

                {!isAuthorized && <Block />}
            </div>
        </>
    );
}