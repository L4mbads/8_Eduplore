import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import Beasiswa from "./Beasiswa.jsx";

const options = [
    [
        { label: 'Pilih tingkat', value: '' },
        { label: 'S1', value: 'S1' },
        { label: 'S2', value: 'S2' },
    ],
    [
        { label: 'Pilih komponen', value: '' },
        { label: 'Fully Funded', value: 'Fully Funded' },
    ],
];

export default function Record() {
    const [query, setQuery] = useState({
        name: "",
        degree: "",
        place: "",
        link: "",
        component: "",
        date: "",
    });

    const navigate = useNavigate();
    const [isVisible, setIsVisible] = useState(false);
    const [beasiswaList, setBeasiswaList] = useState([]);

    useEffect(() => {
        // Trigger transition after component mounts
        setTimeout(() => {
            setIsVisible(true);
        }, 100); // delay for transition to start
        async function getBeasiswaList() {
            const response = await fetch(`http://localhost:5050/beasiswa-management/beasiswa?name=${encodeURIComponent('')}`);
            if (!response.ok) {
                const message = `An error occurred: ${response.statusText}`;
                console.error(message);
                return;
            }
            const records = await response.json();
            setBeasiswaList(records);
        }
        getBeasiswaList();
        return;
    }, [navigate]);




    async function onSubmit(e) {
        e.preventDefault();
        const response = await fetch(`http://localhost:5050/beasiswa-management/beasiswa?name=${encodeURIComponent(query.name)}&degree=${encodeURIComponent(query.degree)}&date=${encodeURIComponent(query.date)}`
        );
        if (!response.ok) {
            const message = `An error occurred: ${response.statusText}`;
            console.error(message);
            return;
        }
        const records = await response.json();
        setBeasiswaList(records);

    }

    // These methods will update the state properties.
    function updateQuery(value) {
        return setQuery((prev) => {
            return { ...prev, ...value };
        });
    }

    const Select = ({ value, options, onChange }) => {
        return (
            <select value={value} onChange={onChange} className="border border-blue border-2 rounded-xl py-2 mb-2 px-3 grow ">
                {options.map((option) => (
                    <option value={option.value}>{option.label}</option>
                ))}
            </select>
        );
    };

    function NoResult() {
        return (
            <>
                <h1 className="text-xl lg:text-5xl pt-16 h-96 text-blue font-semibold">Tidak ada hasil pencarian</h1>
            </>
        )
    };

    // This following section will display the form that takes the input from the user.
    return (
        <div className="relative">
            <img src="../src/assets/Vector 3.png" className="absolute bottom-0 w-full" />
            <div className="relative flex flex-col items-center">
                <div className="py-16 w-full bg-white">
                    <h1 className={`transition duration-1000 ease-in-out  select-none text-center text-blue font-semibold tracking-wide text-4xl
            ${isVisible ? 'opacity-100' : 'opacity-0 -translate-y-10'}`}>
                        Yuk, Cek Beragam Beasiswa yang Bisa Kamu Ikuti!
                    </h1>
                </div>
                <div className="bg-white shadow-xl w-full flex flex-col px-6 sticky top-24 z-[10000]">
                    <div class="">
                        <input class="shadow appearance-none border-2  rounded-xl w-full py-2 mb-2 px-3 leading-tight focus:outline-none focus:shadow-outline border-blue" id="name" type="name" placeholder="Cari nama beasiswa di sini..."
                            onChange={(e) => updateQuery({ name: e.target.value })}
                        />

                    </div>
                    <div className="flex flex-wrap gap-4">

                        <Select
                            options={options[0]}
                            value={query.degree}
                            onChange={(e) => updateQuery({ degree: e.target.value })}
                        />
                        <Select
                            options={options[1]}
                            value={query.component}
                            onChange={(e) => updateQuery({ component: e.target.value })}
                        />
                        <input class="shadow appearance-none border-2  rounded-xl grow py-2 mb-2 px-3 leading-tight focus:outline-none focus:shadow-outline border-blue" id="name" type="date" placeholder=""

                            onChange={(e) => updateQuery({ date: e.target.value })}
                        />
                        <button className="transition-all shadow grow bg-blue hover:bg-blue-80 text-white font-bold py-2 px-4 mb-2 rounded-xl focus:outline-none focus:shadow-outline hover:tracking-widest tracking-wider" type="button" onClick={onSubmit}>
                            Cari!
                        </button>




                    </div>
                </div>

                <div className="">
                    <div className="grid grid-cols-1  gap-4 items-start justify-center lg:grid-cols-2 2xl:grid-cols-3 py-8 z-20 min-h-screen w-full place-items-center">
                        {beasiswaList.map((beasiswa) => {
                            return <Beasiswa data={beasiswa} /> //to implement page, use slice((PAGE-1) * amount, PAGE * amount)
                        })}

                    </div>
                </div>
                {beasiswaList.length == 0 && <NoResult />}


            </div>
        </div>
    );
}