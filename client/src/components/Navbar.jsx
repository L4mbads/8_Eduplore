import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { useScroll } from "./ScrollContext";
import { useState, useEffect } from "react";

export default function Navbar() {
    const { layananRef } = useScroll();
    const [isAuthorized, setIsAuthorized] = useState(false)
    const [userName, setUserName] = useState("")
    const [userId, setUserId] = useState("")
    const navigate = useNavigate();
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
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
    }, [location.pathname, navigate]);

    async function onLogout() {
        let response = await fetch("http://localhost:5050/auth/logout", {
            method: "POST",
            credentials: "include",
        });

        navigate('/')
        window.location.reload()
        return;
    }

    const Unlogged = () => {
        return (
            <>
                <div className="  pr-10 bg-white flex flex-wrap justify-center gap-x-6">
                    <NavLink className="inline-flex items-center justify-center whitespace-nowrap text-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input hover:bg-gray h-9 rounded-md px-3 text-black border-blue " to="/signup">
                        Daftar
                    </NavLink>
                    <NavLink className="inline-flex items-center justify-center whitespace-nowrap text-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-blue hover:bg-blue-80 h-9 rounded-md px-3 text-white border-blue" to="/login">
                        Masuk
                    </NavLink>
                </div>
            </>
        )
    }

    const Logged = () => {
        return (
            <div className="relative group flex flex-col justify-start items-center">
                <button className="transition-all absolute bg-blue-80 w-9/12 h-11 rounded-b-xl group-hover:translate-y-[70px] translate-y-1 flex items-end justify-center text-white pb-1"
                    onClick={onLogout}
                >
                    Logout
                </button>
                <button className="transition-all absolute bg-blue w-9/12 h-9 rounded-b-xl group-hover:translate-y-[50px] translate-y-1 flex items-end justify-center text-white pb-1"
                    onClick={() => { navigate(`/user/${userId}`) }}
                >
                    Profile
                </button>
                <div className="relative bg-gray px-4 py-2 rounded-full flex gap-x-2 items-center justify-center"
                >
                    <div className="transition-all ease-in-out duration-500 text-blue font-semibold group-hover:text-blue-80">
                        {userName}
                    </div>
                    <img src="../src/assets/avatar.svg" alt="" className="size-10" />

                </div>

            </div>
        )
    }

    return (

        <header className="sticky top-0 z-[9999] bg-white">
            <nav className="flex flex-row shadow-xl justify-between items-center rounded-b-xl h-24 pl-5 ">

                <NavLink className="flex-none" to="/">
                    <img alt="Eduplore" className="h-10 inline" src="../src/assets/eduplore(nama).png"></img>
                </NavLink>
                <div className="flex flex-wrap gap-x-3 lg:flex item-center text-base hidden">
                    <button className="inline-flex items-center justify-center whitespace-nowrap text-md font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 
                    disabled:pointer-events-none disabled:opacity-50 h-9 rounded-md px-3 hover:text-blue" onClick={() => {
                            navigate('/');
                            setTimeout(() => {
                                layananRef.current?.scrollIntoView({
                                    behavior: "smooth"
                                })
                            }, 200);

                        }}>
                        Program Kami
                    </button>
                    <NavLink className="inline-flex items-center justify-center whitespace-nowrap text-md font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 
                    disabled:pointer-events-none disabled:opacity-50 h-9 rounded-md px-3 hover:text-blue" to="/beasiswa" >

                        Beasiswa
                    </NavLink>
                    <NavLink className="inline-flex items-center justify-center whitespace-nowrap text-md font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 
                    disabled:pointer-events-none disabled:opacity-50 h-9 rounded-md px-3 hover:text-blue" to="/about">
                        Tentang Kami
                    </NavLink>
                </div>
                <div className="pr-10 bg-white flex flex-wrap justify-center gap-x-6 items-center md:flex hidden">
                    {isAuthorized ? <Logged /> : <Unlogged />}
                </div>
                <i className="bx bx-menu block text-5xl cursor-pointer lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}></i>
                <div className={`absolute xl:hidden top-24 left-0 w-full bg-white flex flex-col items-center gap-6 
                    text-lg transform transition-transform ${isMenuOpen ? "opacity-100" : "opacity-0"}`}
                    
                    style={{transition: "transform 0.3s ease, opacity 0.3s ease"}}>
                    <div className="max-sm:flex hidden ml-8 bg-white flex flex-wrap justify-center gap-x-6 items-center">
                        {isAuthorized ? <Logged /> : <Unlogged />}
                    </div>
                    <button className="list-none w-full text-center p-4 hover:text-blue" onClick={() => {
                            navigate('/');
                            setTimeout(() => {
                                layananRef.current?.scrollIntoView({
                                    behavior: "smooth"
                                })
                            }, 200);
                        
                        }}>
                        Program kami
                    </button>
                    <NavLink className="list-none w-full text-center p-4 hover:text-blue" to="/beasiswa">
                        Beasiswa
                    </NavLink>
                    <NavLink className="list-none w-full text-center p-4 hover:text-blue" to="/about">
                        Tentang kami
                    </NavLink>
                </div>
            </nav>
        </header>
    );
}