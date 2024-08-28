import { NavLink } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="py-20 pl-20 bg-white shadow-xl z-50">
            <div className="flex justify-start items-center h-24 py-3 pl-5">
                <img src="../src/assets/eduplore(nama).png" className="h-16 w-auto inline mr-48"></img>
                <p className="inline-flex items-center justify-center h-9 rounded-md px-3">Media informasi dan partner persiapan beasiswa untuk masa depanmu.</p>
            </div>
            <div className="h-0.5 bg-blue mr-10">

            </div>
            <div className="flex justify-start pt-20 gap-x-48 pl-5">
                <div> {/* Hubungi kami */}
                    <h3 className="font-bold text-xl">Hubungi Kami</h3>
                    <div className="flex justify-start pt-6">
                        <img src="../src/assets/Phone.png" className="mr-4 size-9"></img>
                        <p>022-2500935</p>
                    </div>
                    <div className="flex justify-start pt-6">
                        <img src="../src/assets/Whatsapp.png" className="mr-4 size-9"></img>
                        <p>0812345678910</p>
                    </div>
                    <div className="flex justify-start pt-6">
                        <img src="../src/assets/Gmail Logo.png" className="mr-4 sizs-9"></img>
                        <p>eduplore.kelompok8@gmail.com</p>
                    </div>
                    <div className="flex justify-start pt-6">
                        <img src="../src/assets/Address.png" className="mr-4 size-9"></img>
                        <div className="grid grid-cols-1">
                            <p>Jl. Ganesa No.10</p>
                            <p>Lb. Siliwangi, Kecamatan Coblong</p>
                            <p>Kota Bandung, Jawa Barat 40132</p>
                        </div>
                    </div>
                </div>
                <div> {/* Media sosial */}
                    <h3 className="font-bold text-xl">Media Sosial</h3>
                    <div className="grid grid-cols-3 pt-6">
                        <img src="../src/assets/instagram.png" className="mr-4 sizs-9"></img>
                        <img src="../src/assets/youtube.png" className="mr-4 sizs-9"></img>
                        <img src="../src/assets/Facebook.png" className="mr-4 sizs-9"></img>
                    </div>
                </div>

            </div>
        </footer>
    );

}