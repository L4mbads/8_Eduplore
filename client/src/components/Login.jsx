import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
export default function Login() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: 0,
        username: "",
        password: "",
    });
    const [isChecked, setIsChecked] = useState(false)
    const [isNew, setIsNew] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchData() {
            const id = params.id?.toString() || undefined;
            if (!id) return;
            setIsNew(false);
            const response = await fetch(
                `http://localhost:5050/record/${params.id.toString()}`
            );
            if (!response.ok) {
                const message = `An error has occurred: ${response.statusText}`;
                console.error(message);
                return;
            }
            const record = await response.json();
            if (!record) {
                console.warn(`Record with id ${id} not found`);
                navigate("/");
                return;
            }
            setForm(record);
        }
        fetchData();
        return;
    }, [params.id, navigate]);

    // These methods will update the state properties.
    function updateForm(value) {
        return setForm((prev) => {
            return { ...prev, ...value };
        });
    }

    const handleCheckboxChange = (e) => {
        setIsChecked(e.target.checked); // update state based on checkbox value
    };
    async function onSubmit(e) {
        e.preventDefault();
        const person = { ...form };
        try {

            if (!isChecked) {
                setErrorMessage("Anda belum menyetujui")
                return;
            }

            let response;
            // if we are adding a new record we will POST to /record.
            response = await fetch("http://localhost:5050/user-management/users", {
                method: "POST",
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

                navigate("/login");
            }

        } catch (error) {
            console.error('A problem occurred with your fetch operation: ', error);
        }
    }

    return (
        <>
            <div className="relative">
                <img src="../src/assets/login_bg.png" className="w-full h-auto min-h-[600px] object-cover"></img>
                <div className="absolute inset-0  min-h-[600px] bg-gradient-to-t from-blue to-transparent to-40%" />
                <img src="../src/assets/login_vector1.png" className="absolute left-0 bottom-1/3 h-1/2"></img>
                <img src="../src/assets/login_vector2.png" className="absolute right-0 bottom-1/4 h-1/2"></img>
                <div class="absolute inset-0 flex items-center justify-center z-10">
                    <div class="w-full max-w-lg">
                        <form class="flex flex-col bg-white shadow-md rounded-xl px-8 pt-6 pb-8 mb-4"
                            onSubmit={onSubmit}
                        >
                            <h1 class="xl:text-3xl text-xl font-semibold text-black text-center">
                                Buat akun sekarang!
                            </h1>
                            <p class="text-black my-8 text-center font-light">
                                Yuk, isi form di bawah ini untuk dapat mengakses fitur lengkap dan bimbingan terbaik dari Eduplore!
                            </p >
                            <div class="mb-4">
                                <input class="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" required

                                    onChange={(e) => updateForm({ email: e.target.value })}
                                />

                            </div>
                            <div class="mb-4">
                                <input class="shadow appearance-none border  rounded w-full py-2 px-3   leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Kata sandi" required
                                    onChange={(e) => updateForm({ password: e.target.value })}
                                />

                            </div>

                            <div class="flex  justify-center mx-4">
                                <button class="shadow grow bg-blue hover:bg-blue-80 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                                    Daftar
                                </button>

                            </div>


                            <p class="text-black mt-8 mb-2 text-center font-base">
                                Pengguna baru?
                            </p >
                            <NavLink class="text-center font-semibold text-lg text-blue hover:text-blue-80" to="/signup">
                                <p className="text-center font-semibold text-lg text-blue hover:text-blue-80">Klik disini untuk membuat akun!</p>
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