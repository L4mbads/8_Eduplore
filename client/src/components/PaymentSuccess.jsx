import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function PaymentSuccess() {
  const navigate = useNavigate();
  const [doAnimate, setDoAnimate] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setDoAnimate(true);
    }, 200);
  }, []);
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-white">
      <div className=" flex flex-col h-fit items-center justify-start">
        <h1 className="font-semibold text-center text-3xl tracking">
          PENDAFTARAN <br /> BERHASIL!
        </h1>
        <img
          src="/assets/checkmark.svg"
          alt="checkmark"
          className={`my-8 transition-all duration-500 ${
            doAnimate ? "scale-100" : "scale-0"
          }`}
        />
        <div className="w-96">
          <p className="font-medium text-center text-xl">
            Silakan tunggu pesan verifikasi yang kami kirimkan pada Email Anda.
          </p>
        </div>
        <p className="text-blue my-8">
          Pastikan Email yang Anda daftarkan pada Eduplore{" "}
          <span className="font-semibold">sudah benar</span>.
        </p>
        <button
          className="transition bg-orange rounded-xl py-4 px-14 shadow-lg text-white font-bold text-3xl tracking-wide hover:bg-orange-80 hover:scale-110"
          onClick={() => navigate("/")}
        >
          Mengerti
        </button>
      </div>
    </div>
  );
}

export default PaymentSuccess;
