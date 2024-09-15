import { NavLink } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="py-10 bg-white shadow-xl z-50">
            <div className="flex flex-col md:flex-row justify-start items-start md:items-center h-auto md:h-24 py-3 px-5 md:px-20">
                {/* Logo and Description */}
                <img 
                    src="../src/assets/eduplore(nama).png" 
                    className="h-16 w-auto mb-4 md:mb-0 md:mr-8"
                    alt="Eduplore Logo"
                />
                <p className="inline-flex items-center justify-center text-sm text-center md:text-left h-9 rounded-md">
                    Media informasi dan partner persiapan beasiswa untuk masa depanmu.
                </p>
            </div>

            {/* Separator Line */}
            <div className="h-0.5 bg-blue mx-5 md:mx-20 my-5 md:my-10"></div>

            {/* Contact and Social Media Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8 md:gap-y-0 px-5 md:px-20">
                {/* Hubungi Kami Section */}
                <div>
                    <h3 className="font-bold text-xl mb-4">Hubungi Kami</h3>
                    <div className="flex items-start py-2">
                        <img src="../src/assets/Phone.png" alt="Phone" className="mr-4 h-6 w-6" />
                        <p>022-2500935</p>
                    </div>
                    <div className="flex items-start py-2">
                        <img src="../src/assets/Whatsapp.png" alt="Whatsapp" className="mr-4 h-6 w-6" />
                        <p>0812345678910</p>
                    </div>
                    <div className="flex items-start py-2">
                        <img src="../src/assets/Gmail Logo.png" alt="Email" className="mr-4 h-6 w-6" />
                        <p className="break-words">eduplore.kelompok8@gmail.com</p>
                    </div>
                    <div className="flex items-start py-2">
                        <img src="../src/assets/Address.png" alt="Address" className="mr-4 h-6 w-6" />
                        <div className="grid grid-cols-1">
                            <p>Jl. Ganesa No.10</p>
                            <p>Lb. Siliwangi, Kecamatan Coblong</p>
                            <p>Kota Bandung, Jawa Barat 40132</p>
                        </div>
                    </div>
                </div>

                {/* Media Sosial Section */}
                <div>
                    <h3 className="font-bold text-xl mb-4">Media Sosial</h3>
                    <div className="flex gap-4">
                        <img src="../src/assets/instagram.png" alt="Instagram" className="h-8 w-8" />
                        <img src="../src/assets/youtube.png" alt="YouTube" className="h-8 w-8" />
                        <img src="../src/assets/Facebook.png" alt="Facebook" className="h-8 w-8" />
                    </div>
                </div>
            </div>
        </footer>
    );
}
