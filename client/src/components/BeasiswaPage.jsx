import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import Beasiswa from "./Beasiswa.jsx";

const tes = ['aku', 'adalah']

export default function Record() {
    const [form, setForm] = useState({
        name: "",
        degree: "",
        place: "",
        link: "",
        component: "",
        date: null,
    });
    const [isNew, setIsNew] = useState(true);
    const params = useParams();
    const navigate = useNavigate();
    const [isVisible, setIsVisible] = useState(false);
    const [beasiswaList, setBeasiswaList] = useState([]);

    useEffect(() => {
        // Trigger transition after component mounts
        setTimeout(() => {
            setIsVisible(true);
        }, 100); // delay for transition to start
    }, []);



    // This method fetches the records from the database.
    useEffect(() => {
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
    }, [beasiswaList.length]);


    // This following section will display the form that takes the input from the user.
    return (
        <>
            <h1 className={`transition duration-1000 ease-in-out py-20  text-center text-blue font-semibold tracking-wide text-4xl
            ${isVisible ? 'opacity-100' : 'opacity-0 -translate-y-10'
                }`}>
                Yuk, Cek Beragam Beasiswa yang Bisa Kamu Ikuti!
            </h1>

            <div className="flex gap-6 flex-wrap justify-center px-6 ">
                {beasiswaList.map((beasiswa) => {
                    return <Beasiswa data={beasiswa} />
                })}

            </div>
        </>
    );
}