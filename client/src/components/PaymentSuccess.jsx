import { useNavigate } from 'react-router-dom';

function PaymentSuccess() {
    const navigate = useNavigate();
    return (
        <div className='w-full h-full flex flex-col items-center bg-white justify-start pt-10'>
            <h1 className="font-semibold text-center text-3xl tracking">
                PENDAFTARAN <br /> BERHASIL!
            </h1>
            <img src="../src/assets/checkmark.svg" alt="checkmark" className="my-8" />
            <p className='font-medium text-center text-xl'>
                Silakan tunggu pesan verifikasi yang kami kirimkan pada Email Anda.
            </p>
            <p className='text-blue my-4'>
                Pastikan Email yang Anda daftarkan pada Eduplore <span className='font-semibold'>sudah benar</span>.
            </p>
            <button className="transition bg-orange rounded-xl p-4 my-2 shadow-lg text-white font-bold text-3xl tracking-widest hover:bg-orange-80 hover:scale-110"
                onClick={() => navigate('/')}
            >
                Mengerti
            </button>
        </div>
    );
}

export default PaymentSuccess