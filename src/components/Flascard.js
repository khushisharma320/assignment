import { FaPlus } from "react-icons/fa6";

const Flascard = () => {
  return (
    <div className="flex mt-[-240px] justify-around">
      <img width={200} src="./logo2.png" alt="" />
      <div className="flex mt-7">
      <button className="bg-gradient-to-r from-blue to-sky w-[60px] h-[60px] rounded-full text-whites pl-5 font-bold text-xl"><FaPlus/></button>
      <p className="textgrad font-bold mt-2 ml-2 text-[28px]">Create Flashcard</p>
      </div>
    </div>
  )
}

export default Flascard;
