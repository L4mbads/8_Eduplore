import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { useScroll } from "./ScrollContext";
import { useState, useEffect } from "react";

export default function Navbar() {
    const { layananRef } = useScroll();
    const [isAuthorized, setIsAuthorized] = useState(false);
    const [userName, setUserName] = useState("");
    const [userId, setUserId] = useState("");
    const navigate = useNavigate();
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);

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
    }, [location.pathname]);

    async function onLogout() {
        await fetch("http://localhost:5050/auth/logout", {
            method: "POST",
            credentials: "include",
        });
        navigate('/');
        window.location.reload();
        return;
    }

    const Unlogged = () => (
        <div className="pr-10 bg-white flex justify-center gap-x-6">
            <NavLink className="pt-1 text-md font-medium border border-input hover:bg-gray h-9 rounded-md px-3 text-black border-blue" to="/signup">
                Daftar
            </NavLink>
            <NavLink className="pt-1 text-md font-medium bg-blue h-9 rounded-md px-3 text-white border-blue hover:bg-blue-80" to="/login">
                Masuk
            </NavLink>
        </div>
    );

    
    const Logged = () => {
        const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    
        const toggleDropdown = () => {
            setIsDropdownOpen(!isDropdownOpen);
        };
    
        return (
            <div className="relative flex flex-col justify-start items-center">
                {/* Buttons for Logout and Profile */}
                {isDropdownOpen && (
                    <>
                        <button
                            className="transition-all absolute bg-blue-80 w-full max-w-xs h-11 pt-4 rounded-b-xl translate-y-[62px] flex items-center justify-center text-white"
                            onClick={onLogout}
                        >
                            Logout
                        </button>
                        <button
                            className="transition-all absolute bg-blue w-full max-w-xs h-12 pt-4 rounded-b-xl translate-y-[34px] flex items-center justify-center text-white"
                            onClick={() => navigate(`/user/${userId}`)}
                        >
                            Profile
                        </button>
                    </>
                )}
    
                {/* Clickable Name and Avatar */}
                <div
                    className="relative bg-gray px-4 py-2 rounded-full flex gap-x-2 items-center justify-center cursor-pointer"
                    onClick={toggleDropdown} // Add onClick to toggle dropdown
                >
                    <div className="transition-all ease-in-out duration-500 text-blue font-semibold group-hover:text-blue-80">
                        {userName}
                    </div>
                    <img src="../src/assets/avatar.svg" alt="" className="size-10" />
                </div>
            </div>
        );
    };
    

    return (
        <header className="sticky top-0 z-[9999] bg-white">
            <nav className="flex justify-between items-center shadow-xl rounded-b-xl h-24 px-5">
                <NavLink to="/">
                    <img alt="Eduplore" className="h-10" src="../src/assets/eduplore(nama).png" />
                </NavLink>

                {/* Menu Links for Large Screens */}
                <div className="hidden lg:flex gap-x-10 items-center text-base">
                    <button className="text-md font-semibold hover:text-blue" onClick={() => {
                        navigate('/');
                        setTimeout(() => layananRef.current?.scrollIntoView({ behavior: "smooth" }), 200);
                    }}>
                        Program Kami
                    </button>
                    <NavLink className="text-md font-semibold hover:text-blue" to="/beasiswa">
                        Beasiswa
                    </NavLink>
                    <NavLink className="text-md font-semibold hover:text-blue" to="/about">
                        Tentang Kami
                    </NavLink>
                </div>

                {/* Login/Register or User Profile */}
                <div className="hidden md:flex items-center gap-x-6">
                    {isAuthorized ? <Logged /> : <Unlogged />}
                </div>

                {/* Hamburger Menu for Small Screens */}
                <i className="bx bx-menu block text-5xl cursor-pointer lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}></i>

                {/* Mobile Menu */}
                <div className={`absolute top-24 left-0 w-full bg-white flex flex-col items-center gap-6 text-lg transform ${isMenuOpen ? "translate-y-0 opacity-100 visible" : "-translate-y-full opacity-0 invisible"} transition-all duration-300 ease-in-out`}>
                    <div className="ml-8 flex flex-col items-center md:hidden">
                        {isAuthorized ? <Logged /> : <Unlogged />}
                    </div>
                    <button className="p-4 hover:text-blue" onClick={() => {
                        navigate('/');
                        setTimeout(() => layananRef.current?.scrollIntoView({ behavior: "smooth" }), 200);
                    }}>
                        Program Kami
                    </button>
                    <NavLink className="p-4 hover:text-blue" to="/beasiswa">
                        Beasiswa
                    </NavLink>
                    <NavLink className="p-4 hover:text-blue" to="/about">
                        Tentang Kami
                    </NavLink>
                </div>
            </nav>
        </header>
    );
}
