import Image from "next/image";
import Search from "../../../public/photos/svg/Color.svg";

export default function CustomInput() {
  return (
    <div className="w-[291px] h-[75px]">
      <div className="w-full h-full grid grid-cols-2 items-center bg-white rounded-2xl shadow-input-box">
        <input
          type="text"
          className="px-4 text-lg bg-transparent focus:outline-none placeholder:text-[#232A43] placeholder:text-lg"
          placeholder="Caută rapid!"
        />
        <button className="w-12 h-12 bg-[#6C759D] flex justify-center items-center rounded-[10px] ml-auto mr-5">
          <Image width={18} height={18} src={Search} alt="Search-icon" />
        </button>
      </div>
    </div>
  );
}
