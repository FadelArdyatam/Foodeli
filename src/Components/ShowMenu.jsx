import React from 'react'

const menuItems = [
    {
        id: 1,
        name: "California Pizza",
        price: 7.5,
        image: "images/pizza-1[1].png",
    },
    {
        id: 2,
        name: "Margherita Pizza",
        price: 6.5,
        image: "images/pizza-2[1].png",
    },
    {
        id: 3,
        name: "Pepperoni Pizza",
        price: 8.0,
        image: "images/pizza-3[1].png",
    },
    {
        id: 4,
        name: "California Pizza",
        price: 7.5,
        image: "images/pizza-4[1].png",
    },
]

const ShowMenu = () => {
    return (
        <div className=''>
            <div className='container mx-auto px-4 py-2 bg-white content-center'>
                <div className=' bg-white'>
                    <p className=' font-bold text-red-500 mb-1'>OUR MENU</p>
                    <p className=' text-3xl text-bold '>Menu That Always <br /> Makes Youe Fall In Love </p>
                </div>

                <div className='px-1 mt-2'>
                    <div className='flex gap-3'>
                        <button className="flex items-center bg-red-500 text-white font-semibold py-3 px-10 rounded-2xl my-2">
                            <span className="bg-white rounded-full p-1">
                                <img src="https://twemoji.maxcdn.com/v/latest/72x72/1f355.png" alt="Pizza" className="w-6 h-6" />
                            </span>
                            <span className="ml-3">Pizza</span>
                        </button>
                        <div className="flex space-x-11 items-center">
                            <button className="flex items-center text-black hover:text-red-500 font-poppins font-semibold py-3 px-10 rounded-lg my-2">
                                <span className=" p-1">
                                    <img src=" public/images/Burger.png" alt="Pizza" className="w-6 h-6" />
                                </span>
                                <span className="ml-3">Burger</span>
                            </button>

                            <button className="flex items-center text-black hover:text-red-500 font-poppins font-semibold py-3 px-10 rounded-lg my-2">
                                <span className=" p-1">
                                    <img src="public/images/Cupcake.png" alt="Pizza" className="w-6 h-6" />
                                </span>
                                <span className="ml-3">Cupcake</span>
                            </button>

                            <button className="flex items-center text-black hover:text-red-500 font-poppins font-semibold py-3 px-10 rounded-lg my-2">
                                <span className=" p-1">
                                    <img src="public/images/Ramen.png" alt="Pizza" className="w-6 h-6" />
                                </span>
                                <span className="ml-3">Ramen</span>
                            </button>
                        </div>
                    </div>

                    <div>
                        <div className="flex">
                            <div className="flex gap-8 flex-wrap justify-center">
                                {menuItems.map((item) => (
                                    <div key={item.id} className="card-menu border border-gray-300 text-center py-10 px-10 rounded-2xl font-thin">
                                        <img src={item.image} alt="" />
                                        <h1>{item.name}</h1>
                                        {/* INII NAMANYA MAPPING */}
                                        <p>${item.price}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ShowMenu