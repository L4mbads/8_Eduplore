import { NavLink, useNavigate } from "react-router-dom";
import { useScroll } from "./ScrollContext";
import { useState, useEffect } from "react";

export default function Navbar() {
    const { layananRef } = useScroll();
    const [isAuthorized, setIsAuthorized] = useState(false)
    const [userName, setUserName] = useState("")
    const [userId, setUserId] = useState("")
    const navigate = useNavigate();
    useEffect(() => {
        async function getAuth() {

            const authorized = await fetch(`http://localhost:5050/auth/`, {
                method: "GET",
                credentials: "include",
            });
            if (!authorized.ok) {
                setIsAuthorized(false);
                setUserName("");
                setUserId("");
                return;
            } else {
                const userData = await authorized.json();
                setIsAuthorized(true);
                setUserName(userData.username);
                setUserId(userData._id);
                return;
            }
        }
        getAuth();
    }, [navigate]);

    const Unlogged = () => {
        return (
            <>
                <NavLink className="inline-flex items-center justify-center whitespace-nowrap text-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input hover:bg-slate-100 h-9 rounded-md px-3 text-black border-blue " to="/signup">
                    Daftar
                </NavLink>
                <NavLink className="inline-flex items-center justify-center whitespace-nowrap text-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-blue hover:bg-slate-100 h-9 rounded-md px-3 text-white border-blue" to="/login">
                    Masuk
                </NavLink>
            </>
        )
    }

    const Logged = () => {
        return (
            <button className="group bg-gray px-4 py-2 rounded-full flex gap-x-2 items-center justify-center"
                onClick={() => navigate(`/user/${userId}`)}
            >
                <div className="transition-all ease-in-out duration-500 text-blue font-semibold group-hover:text-blue-80 group-hover:tracking-wide">
                    {userName}
                </div>
                <img src="../src/assets/avatar.svg" alt="" className="size-10" />
            </button>
        )
    }

    return (

        <header className="sticky top-0 z-[9999] bg-white">
            <nav className="flex flex-row shadow-xl justify-between items-center rounded-b-xl h-24 pl-5 ">

                <NavLink className="flex-none" to="/">
                    <img alt="Eduplore" className="h-10 inline" src="../src/assets/eduplore(nama).png"></img>
                </NavLink>
                <div className="flex flex-wrap">
                    <button className="inline-flex items-center justify-center whitespace-nowrap text-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 
                    disabled:pointer-events-none disabled:opacity-50 h-9 rounded-md px-3" onClick={() => {
                            navigate('/');
                            setTimeout(() => {
                                layananRef.current?.scrollIntoView({
                                    behavior: "smooth"
                                })
                            }, 200);

                        }}>
                        Program Kami
                    </button>
                    <NavLink className="inline-flex items-center justify-center whitespace-nowrap text-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 
                    disabled:pointer-events-none disabled:opacity-50 h-9 rounded-md px-3" to="/beasiswa" >

                        Beasiswa
                    </NavLink>
                    <NavLink className="inline-flex items-center justify-center whitespace-nowrap text-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 
                    disabled:pointer-events-none disabled:opacity-50 h-9 rounded-md px-3 " to="/about">
                        Tentang Kami
                    </NavLink>
                </div>
                <div className="pr-10 bg-white flex flex-wrap justify-center gap-x-6 items-center">
                    {isAuthorized ? <Logged /> : <Unlogged />}
                </div>

            </nav>
        </header>
    );
}