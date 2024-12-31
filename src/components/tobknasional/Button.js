import { useRouter } from "next/router";
import axios from "axios";
export const Button = ({ children, className }) => {
  const startDateTobk = new Date("2024-10-07").getTime();
  const endDateTobk = new Date("2024-11-07").getTime();
  const now = new Date().getTime();
  const periodTobk = now >= startDateTobk && now <= endDateTobk;
  const router = useRouter();
  const handleClick = async (page) => {
    try {
      const response = await axios.post(
        `https://ganeshaoperation.com/nodejs/click/${page}`,
        {}
      );

      if (response.status !== 200) {
        throw new Error("Gagal menambah klik");
      }

      // Redirect after successful response
      router.push("https://registrasi.ganeshaoperation.com/");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    periodTobk && (
      <button
        onClick={() => handleClick("tobk-2024")}
        className="text-sm lg:text-lg  bg-secondary hover:bg-yellow-500 active:scale-95 text-[#242424] font-bold py-2 px-4 rounded-xl mt-8"
      >
        {children}
      </button>
    )
  );
};
