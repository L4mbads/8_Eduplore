import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { backendAPI } from "./constants/backendAPI";

const options = [
  [
    { label: "PILIH BEASISWA", value: "" },
    {
      label: "Beasiswa Lembaga Pengelola Dana Pendidikan Kemenkeu 2025",
      value: "Beasiswa Lembaga Pengelola Dana Pendidikan Kemenkeu 2025",
    },
    {
      label: "Beasiswa Unggulan Kemendikbudristek 2024",
      value: "Beasiswa Unggulan Kemendikbudristek 2024",
    },
    {
      label: "Beasiswa Pendidikan Indonesia Kemendikbudristek",
      value: "Beasiswa Pendidikan Indonesia Kemendikbudristek",
    },
  ],
  [
    { label: "PILIH BATCH", value: 0 },
    { label: "BATCH 1", value: 1 },
    { label: "BATCH 2", value: 2 },
  ],
];

export default function SuperCamp() {
  const [packet, setPacket] = useState({
    name: "",
    email: "",
    mentorId: "",
    mentor: "",
    beasiswa: "",
    batch: "",
    index: 1,
  });
  const [mentorList, setMentorList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    async function getMentorList() {
      const response = await fetch(`${backendAPI}/user-management/mentor`);
      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        console.error(message);
        return;
      }
      const records = await response.json();
      setMentorList(records);
    }
    getMentorList();
    return;
  }, [navigate]);

  // These methods will update the state properties.
  function updatePacket(value) {
    return setPacket((prev) => {
      return { ...prev, ...value };
    });
  }

  async function onDaftar(e) {
    e.preventDefault();
    setIsLoading(true);
    try {
      if (!packet.beasiswa || packet.batch == 0) {
        setErrorMessage("Pastikan sudah memilih beasiswa dan batch!");
        return;
      }

      const authorized = await fetch(`${backendAPI}/auth/`, {
        method: "GET",
        credentials: "include",
      });
      if (!authorized.ok) {
        navigate("/login");
        return;
      }

      const user = await authorized.json();

      const response = await fetch(
        `${backendAPI}/user-management/user/${user._id}`,
        {
          method: "GET",
          credentials: "include",
        }
      );
      if (!response.ok) {
        return;
      }

      const userData = await response.json();
      packet.name = await userData.name;
      packet.email = await userData.email;

      const req = { ...packet };

      // if we are adding a new record we will POST to /record.
      const request = await fetch(`${backendAPI}/email-sender/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
      });

      if (!request.ok) {
        setErrorMessage("Maaf terjadi kesalahan. Ulangi beberapa saat lagi.");
        return;
      }

      navigate("/payment");
    } catch (error) {
      console.error("A problem occurred with your fetch operation: ", error);
    } finally {
      setIsLoading(false);
    }
  }
  const Select = ({ value, options, onChange }) => {
    return (
      <select
        value={value}
        onChange={onChange}
        className={`mb-2 pr-3 w-full text-2xl font-bold focus:ring-0 focus:ring-offset-0
                ${value != options[0].value ? "text-blue" : "text-black"}`}
      >
        {options.map((option) => (
          <option
            value={option.value}
            className={`text-2xl font-bold ${
              option.value != "" ? "text-blue" : ""
            }`}
          >
            {option.label}
          </option>
        ))}
      </select>
    );
  };

  return (
    <div className="relative flex flex-col w-full items-start bg-gradient-to-b from-blue to-transparent from-30% to-65% min-h-screen pb-16">
      <img
        src="/assets/super_bg.svg"
        className="absolute right-0 -top-24 object-none z-0"
      />
      <div className="flex flex-row items-center px-16 py-10 ">
        <img src="/assets/arrow2.svg" alt="" className="size-6 mr-4 hidden" />
        <div className="flex flex-row items-center px-4 sm:px-6 md:px-16 py-10 absolute left-0">
          <img src="/assets/arrow2.svg" alt="" className="size-6 mr-4" />
          <button
            className="transition-all text-white font-semibold tracking-wide hover:translate-x-2 hover:scale-125"
            type="button"
            onClick={() => navigate(-1)}
          >
            Kembali
          </button>
        </div>
      </div>
      <div className="flex flex-col w-full justify-center md:justify-start items-center md:items-start px-40 mb-16 ">
        <h1 className=" text-white font-bold tracking-wide text-5xl max-sm:text-3xl">
          SUPERCAMP
        </h1>
        <h3 className="bg-green text-black font-semibold mt-4 px-2 py-1 rounded-xl whitespace-nowrap">
          Rating: 4.7
        </h3>
      </div>
      <div className="flex flex-col gap-y-12 w-full md:px-36 px-2 z-10">
        <div className="grow bg-white rounded-xl p-10 md:pr-36 shadow-lg">
          <h2 className="text-2xl font-bold pb-4">DESKRIPSI</h2>
          <p className="text-xl">
            Rangkaian kelas intensif mulai dari persiapan berkas hingga tahap
            wawancara pada beasiswa tertentu
          </p>
        </div>
        <div className="grow bg-white rounded-xl p-10 shadow-lg">
          <Select
            options={options[0]}
            value={packet.beasiswa}
            onChange={(e) => updatePacket({ beasiswa: e.target.value })}
          />
        </div>
        <div className="grow bg-white rounded-xl p-10 shadow-lg">
          <Select
            options={options[1]}
            value={packet.batch}
            onChange={(e) => updatePacket({ batch: e.target.value })}
          />
        </div>
        <h3 className="text-center text-xl font-bold text-red">
          {errorMessage}
        </h3>
        <button
          className="transition grow bg-orange rounded-xl p-4 shadow-lg text-white font-bold text-3xl tracking-widest hover:bg-orange-80 hover:scale-110"
          onClick={onDaftar}
        >
          DAFTAR
          <div
            className={`inline-block ${
              isLoading ? "" : "hidden"
            } h-8 w-8 mx-6 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white`}
            role="status"
          />
        </button>
      </div>
    </div>
  );
}
