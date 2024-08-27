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
    const [isNew, setIsNew] = useState(true);
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchData() {

            const response = await fetch(`http://localhost:5050/auth/`, {
                method: "GET",
                credentials: "include",
            });
            if (!response.ok) {
                const message = `An error has occurred: ${response.statusText}`;
                navigate("/login");
                return;
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
            if (isNew) {
                // if we are adding a new record we will POST to /record.
                response = await fetch("http://localhost:5050/record", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(person),
                });
            } else {
                // if we are updating a record we will PATCH to /record/:id.
                response = await fetch(`http://localhost:5050/record/${params.id}`, {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(person),
                });
            }

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
        } catch (error) {
            console.error('A problem occurred with your fetch operation: ', error);
        } finally {
            setForm({ name: "", position: "", level: "" });
            navigate("/");
        }
    }

    return (
        <div className="bg-gray">
            <div className="flex flex-row items-center bg-white px-16 py-10">
                <img src="../src/assets/arrow.svg" alt="" className="size-6 mr-4" />
                <button className="transition-all text-blue font-semibold tracking-wide hover:text-lg hover:text-blue-80" type="button">Kembali</button>
            </div>

            <h1 className="inline-block text-3xl px-28 py-10 font-semibold tracking-wide">
                Profil
            </h1>
            <div className="flex items-start justify-center">
                <form className=" w-full max-w-6xl items-center  px-16">
                    <div className=" flex flex-col bg-white shadow-lg rounded-xl p-14">
                        <h2 className="text-black opacity-60 font-semibold tracking-wide text-xl">Biodata</h2>
                        <div className="flex flex-wrap gap-36 mt-6 items-end justify-center mb-6">
                            <img src="../src/assets/avatar.svg" alt="avatar" className="size-28" />
                            <div className=" grow">
                                <div className="flex justify-between  mb-6 gap-6">
                                    <label class="  text-xl font-semibold text-blue " for="name">
                                        Nama lengkap
                                    </label>
                                    <input class="shadow appearance-none border-2  rounded-xl w-1/2 py-2 mb-2 px-3 leading-tight focus:outline-none focus:shadow-outline border-blue" id="name" type="text" placeholder="" required
                                    />
                                </div>
                                <div className="flex justify-between  gap-6">
                                    <label class="  text-xl font-semibold text-blue " for="name">
                                        No. Telepon
                                    </label>
                                    <input class="shadow appearance-none border-2  rounded-xl w-1/2 py-2 mb-2 px-3 leading-tight focus:outline-none focus:shadow-outline border-blue" id="name" type="number" placeholder="" required
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>

        </div>
    );
}