import { MdOutlineRefresh } from "react-icons/md";
import { MdFullscreen } from "react-icons/md";
import { IoIosArrowBack, IoIosArrowForward  } from "react-icons/io";

const Home = () => {

    const links = [
        {
            id: 1,
            name: "Study",
            style: "text-blue font-bold border-b-2"
        },
        {
            id: 2,
            name: "Quiz",
        },
        {
            id: 3,
            name: "Test",
        },
        {
            id: 4,
            name: "Game",
        },
        {
            id: 4,
            name: "Others",
        },

    ];

    return (
        <div>
            <div className="mt-10 ml-2 lg:ml-60">
                <h4 className="textgrad text-[32px] lg:text-[32px] font-bold from-blue to-sky bg-gradient-to-r bg-clip-text text-transparent">Relations and Functions ( Mathematics )</h4>
            </div>
            <div>

                <ul className="flex justify-center mt-20 gap-x-10">
                    {
                        links.map(({ id, name, style }) => {
                            return (
                                <li key={id} className={`text-blacks text-lg cursor-pointer px-2 lg:px-4 py-1 hover:scale-105 duration-200 hover:text-gray-600 flex ${style}`}> {name}</li>
                            )
                        })
                    }
                </ul>

            </div>

                    <div className="flex flex-col justify-center">
            <div className="flex justify-center mt-10">
                <section class="bg-[linear-gradient(222.94deg,_#051A91_-4.31%,_#061C93_14.41%,_#2284F1_81.88%,_#1F80EB_103.81%)] w-96 h-80 lg:w-[712px] lg:h-[393.19px] rounded-3xl">
                    <div class="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
                        <figure class="max-w-screen-md mx-auto">
                            <div className="flex justify-between">
                                <img src="/vector.png" alt="" />
                                <img src="/frame.png" alt="" />
                            </div>
                            <blockquote className="mt-20">
                                <p class="text-2xl font-medium text-whites">9 + 6 + 7x - 2x - 3</p>
                            </blockquote>

                        </figure>
                    </div>
                </section>
            </div>
<div className="flex justify-center">
            <div className="flex justify-between w-96 h-80 lg:w-[712px] lg:h-[393.19px] mt-8">
                <span className="textgrad ml-8 font-light"><MdOutlineRefresh size={40}/></span>
                <div className="flex gap-4">
                    <button className="bg-gradient-to-r from-blue to-sky w-[60px] h-[60px] rounded-full text-whites pl-5 font-bold text-xl"><IoIosArrowBack/></button>
                    <p className="font-bold mt-4 text-lg">01/10</p>
                    <button className="bg-gradient-to-r from-blue to-sky w-[60px] h-[60px] rounded-full text-whites pl-5 font-bold text-xl"><IoIosArrowForward/></button>
                </div>
                <span className="textgrad mr-8 font-light"><MdFullscreen size={40}/></span>
            </div>
        </div>
        </div>
        </div>
    )
}

export default Home;
