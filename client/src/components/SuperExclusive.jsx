import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const options =
    [
        { label: 'PILIH BATCH', value: 0 },
        { label: 'BATCH 1', value: 1 },
        { label: 'BATCH 2', value: 2 },
    ]

export default function SuperExclusive() {
    const [packet, setPacket] = useState({
        name: "",
        email: "",
        mentorId: "",
        mentor: "",
        batch: "",
        index: 2
    });
    const [mentorList, setMentorList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();
    useEffect(() => {
        async function getMentorList() {
            const response = await fetch(`http://localhost:5050/user-management/mentor`);
            if (!response.ok) {
                const message = `An error occurred: ${response.statusText}`;
                console.error(message);
                return;
            }
            const records = await response.json();
            setMentorList(records);
        }
        getMentorList();
        return;
    }, [navigate]);

    // These methods will update the state properties.
    function updatePacket(value) {
        return setPacket((prev) => {
            return { ...prev, ...value };
        });
    }

    async function onDaftar(e) {
        e.preventDefault();
        setIsLoading(true)
        try {
            if (packet.mentor == "" || packet.date == "") {
                setErrorMessage("Pastikan sudah memilih mentor dan batch!")
                return
            }

            const authorized = await fetch(`http://localhost:5050/auth/`, {
                method: "GET",
                credentials: "include",
            });
            if (!authorized.ok) {
                navigate("/login");
                return;
            }


            const user = await authorized.json();

            const response = await fetch(`http://localhost:5050/user-management/user/${user._id}`, {
                method: "GET",
                credentials: "include",
            });
            if (!response.ok) {
                return;
            }

            const userData = await response.json();
            packet.name = await userData.name;
            packet.email = await userData.email;

            const req = { ...packet }

            // if we are adding a new record we will POST to /record.
            const request = await fetch("http://localhost:5050/email-sender/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(req),
            });

            if (!request.ok) {
                setErrorMessage("Maaf terjadi kesalahan. Ulangi beberapa saat lagi.")
                return
            }

            navigate('/payment')


        } catch (error) {
            console.error('A problem occurred with your fetch operation: ', error);
        } finally {
            setIsLoading(false)
        }


    }
    const MentorCard = (props) => {
        return (
            <div className={`transition duration-300 flex flex-col focus:bg-black justify-start items-center shadow-lg rounded-lg p-4 flex-none min-w-60 hover:scale-110
        ${packet.mentorId == props.data._id ? 'bg-green-60 scale-110' : 'bg-gray'}`}
                onClick={() => updatePacket({ mentorId: props.data._id, mentor: props.data.name })}
            >
                <div className="self-start justify-center items-center flex flex-row mb-4">
                    <img src="../src/assets/eye.svg" alt="viewer" className="size-4 mr-1" />
                    <p className="text-blue font-semibold text-sm">1.2K</p>
                </div>
                <img src="../src/assets/avatar.svg" alt="avatar" className="w-1/2 mb-6" />
                <h3 className="font-semibold text-xl">{props.data.name}</h3>
                <p className="text-blue font-medium mb-6 text-sm">{props.data.award}</p>

            </div>
        )
    }

    const Select = ({ value, options, onChange }) => {
        return (
            <select value={value} onChange={onChange} className={`mb-2 pr-3 w-full text-2xl font-bold focus:ring-0 focus:ring-offset-0
                ${value != options[0].value ? 'text-blue' : 'text-black'}`}
            >
                {
                    options.map((option) => (
                        <option value={option.value} className={`text-2xl font-bold ${option.value != '' ? 'text-blue' : ''}`}>{option.label}</option>
                    ))
                }
            </select >
        );
    };

    return (
        <div className="relative flex flex-col w-full items-start bg-gradient-to-b from-blue to-transparent from-30% to-65% min-h-screen pb-16">
            <img src="../src/assets/super_bg.svg" className="absolute right-0 -top-24 object-none z-0" />
            <div className="flex flex-row items-center px-16 py-10">
                <img src="../src/assets/arrow2.svg" alt="" className="size-6 mr-4 " />
                <button className="transition-all text-white font-semibold tracking-wide hover:translate-x-2 hover:scale-125 z-10" 
                    type="button" 
                    onClick={() => (navigate(-1))}>
                    Kembali
                </button>
            </div>
            <div className="flex flex-col w-full justify-center md:justify-start items-center md:items-start px-40 mb-16 ">
                <h1 className=" text-white font-bold tracking-wide text-5xl ">
                    SUPER-EXCLUSIVE
                </h1>
                <h3 className="bg-green text-black font-semibold mt-4 px-2 py-1 rounded-xl">
                    Rating: 4.7
                </h3>
            </div>
            <div className="flex flex-col gap-y-12 w-full md:px-36 px-2 z-10">
                <div className="grow bg-white rounded-xl p-10 md:pr-36 shadow-lg">
                    <h2 className="text-2xl font-bold pb-4">
                        DESKRIPSI
                    </h2>
                    <p className="text-xl">
                        Mentoring 1-on-1 dengan awardee beasiswa yang ingin kamu ikuti atau ekspertis di bidangnya.
                    </p>
                </div>
                <div className="grow bg-white rounded-xl p-10 shadow-lg">
                    <h2 className="text-2xl font-bold pb-4">
                        PILIH MENTOR
                    </h2>
                    <div className="flex flex-row">
                        <div className="flex flex-nowrap gap-x-10 p-6 overflow-x-auto">

                            {mentorList.map((mentor, index) => {
                                return <MentorCard
                                    data={mentor}
                                    id={index}
                                /> //to implement page, use slice((PAGE-1) * amount, PAGE * amount)
                            })}

                        </div>
                        <img src="../src/assets/arrow.svg" alt="" className="size-16 ml-8 grow self-center rotate-180" />
                    </div>
                </div>

                <div className="grow bg-white flex flex-col items-left justify-center rounded-xl p-10 shadow-lg">
                    <h2 className="text-2xl font-bold pb-4">
                        PILIH TANGGAL
                    </h2>
                    <input class="shadow appearance-none border-2 w-full  rounded-xl grow py-2 mb-2 px-3 leading-tight focus:outline-none focus:shadow-outline border-blue" id="date" type="date" placeholder=""

                        onChange={(e) => updatePacket({ date: e.target.value })}
                    />
                </div>
                <h3 className="text-center text-xl font-bold text-red">
                    {errorMessage}
                </h3>
                <button className="transition grow bg-orange rounded-xl p-4 shadow-lg text-white font-bold text-3xl tracking-widest hover:bg-orange-80 hover:scale-110"
                    onClick={onDaftar}
                >
                    DAFTAR
                    <div className={`inline-block ${isLoading ? '' : 'hidden'} h-8 w-8 mx-6 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white`} role="status" />

                </button>
            </div>
        </div>
    );
}
