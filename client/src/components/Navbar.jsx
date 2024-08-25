import { NavLink, useLocation } from "react-router-dom";
import { useRef } from "react";
import { useScroll } from "./ScrollContext";
import React from 'react';

export default function Navbar() {
    const { layananRef, beasiswaRef } = useScroll();
    const location = useLocation();
    return (
        <header className="sticky top-0 z-[9999] bg-white">
            <nav className="flex shadow-xl justify-between rounded-b-xl h-24 pt-6 pl-5 ">
                <NavLink to="/">
                    <img alt="Eduplore" className="h-10 inline" src="../src/assets/eduplore(nama).png"></img>
                </NavLink>
                <div className="">
                    <button className="inline-flex items-center justify-center whitespace-nowrap text-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 
                    disabled:pointer-events-none disabled:opacity-50 h-9 rounded-md px-3" to="/create" onClick={() => {
                            layananRef.current?.scrollIntoView({
                                behavior: "smooth"
                            })
                        }}>
                        Program Kami
                    </button>
                    <button className="inline-flex items-center justify-center whitespace-nowrap text-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 
                    disabled:pointer-events-none disabled:opacity-50 h-9 rounded-md px-3" to="/create" onClick={() => {
                            beasiswaRef.current?.scrollIntoView({
                                behavior: "smooth"
                            })
                        }}>
                        Beasiswa
                    </button>
                    <NavLink className="inline-flex items-center justify-center whitespace-nowrap text-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 
                    disabled:pointer-events-none disabled:opacity-50 h-9 rounded-md px-3 " to="/create">
                        Tentang Kami
                    </NavLink>
                </div>
                <div className="pr-10">
                    <NavLink className="inline-flex items-center justify-center whitespace-nowrap text-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input hover:bg-slate-100 h-9 rounded-md px-3 text-black border-blue mr-6" to="/signup">
                        Daftar
                    </NavLink>
                    <NavLink className="inline-flex items-center justify-center whitespace-nowrap text-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-blue hover:bg-slate-100 h-9 rounded-md px-3 text-white border-blue" to="/login">
                        Masuk
                    </NavLink>
                </div>

            </nav>
        </header>
    );
}