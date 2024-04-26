
const Navbar = () => {
    const links = [
        {
            id: 1,
            name: "Home",
        },
        {
            id: 2,
            name: "Flashcard",
        },
        {
            id: 3,
            name: "Contact",
        },
        {
            id: 4,
            name: "FAQ",
        },

    ];

    return (

        <div className="flex justify-around mt-[27px]">
            <div className="">
                <img className="ml-2" src="/logo1.png" alt="" />
            </div>

            <ul className="flex ">
                {
                    links.map(({ id, name }) => {
                        return (
                            <li key={id} className="text-blacks cursor-pointer px-2 lg:px-4 py-1 hover:scale-105 duration-200 hover:text-gray-600 flex text-[18px]"> {name}</li>
                        )
                    })
                }

<button type="button" className="mr-2 ml-2 bg-gradient-to-r from-blue to-sky text-whites font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2">Login</button>
            </ul>




        </div>
    )
}

export default Navbar;
