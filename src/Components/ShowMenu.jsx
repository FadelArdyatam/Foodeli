

const Pizzas = [
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

const Burgers = [
    {
        id: 1,
        name: "Mac And Cheese",
        price: 5.5,
        image: "images/burger-1[1].png",  
    },
    {
        id: 2,
        name: "Cheese Burger",
        price: 4.5,
        image: "images/burger-2[1].png",
    },
    {
        id: 3,
        name: "Beef Burger",
        price: 6.5,
        image: "images/burger-3[1].png",
    },
    {
        id: 4,
        name: "Cheese Burger",
        price: 4.5,
        image: "images/burger-4[1].png",
        }
]

const Cupcakes = [
    {
        id: 1,
        name: "Cupcake",
        price: 3.5,
        image: "images/cupcake-1[1].png",
    },
    {
        id: 2,
        name: "Cupcake",
        price: 3.5,
        image: "images/cupcake-2[1].png",
    },
    {
        id: 3,
        name: "Cupcake",
        price: 3.5,
        image: "images/cupcake-3[1].png",
    },
    {
        id: 4,
        name: "Cupcake",
        price: 3.5,
        image: "images/cupcake-4[1].png",
    }
]

const Ramens = [
    {
        id: 1,
        name: "Ramen",
        price: 3.5,
        image: "images/ramen-1[1].png",
    },
    {
        id: 2,
        name: "Ramen",
        price: 3.5,
        image: "images/ramen-2[1].png",
    },
    {
        id: 3,
        name: "Ramen",
        price: 3.5,
        image: "images/ramen-3[1].png",
    },
    {
        id: 4,
        name: "Ramen",
        price: 3.5,
        image: "images/ramen-4[1].png",
    }
]

const ShowMenu = () => {
    return (
        <div className='px-4 py-3 mx-auto justify-center content-center m-11'>
            <div className='container bg-white pl-6'>
                <div className='px-4 py-3'>
                    <p className=' font-bold text-red-500 mb-1'>OUR MENU</p>
                    <p className=' text-3xl text-bold '>Menu That Always <br /> Makes Youe Fall In Love </p>
                </div>

                <div className='px-4 m-3'>
                    <div className='flex gap-3 items-center text-black hover:b'>
                        <button className="flex items-center bg-red-500 text-white font-semibold py-3 px-10 rounded-2xl my-2">
                            <span className="bg-white rounded-full p-1">
                                <img src="https://twemoji.maxcdn.com/v/latest/72x72/1f355.png" alt="Pizza" className="w-6 h-6" />
                            </span>
                            <span className="ml-3">Pizza</span>
                        </button>

                        <div className="flex space-x-11 items-center">
                            <button className="flex items-center text-black hover:bg-red-500 hover:rounded-full hover:text-white font-poppins font-semibold py-3 px-10 rounded-lg my-2">
                                <span className="p-1">
                                    <img src="images/burger.png" alt="Burger" className="w-6 h-6" />
                                </span>
                                <span className="ml-3">Burger</span>
                            </button>

                            <button className="flex items-center text-black hover:bg-red-500 hover:rounded-full hover:text-white font-poppins font-semibold py-3 px-10 rounded-lg my-2">
                                <span className=" p-1">
                                    <img src="images/Cupcake.png" alt="Cupcake" className="w-6 h-6" />
                                </span>
                                <span className="ml-3">Cupcake</span>
                            </button>

                            <button className="flex items-center text-black hover:bg-red-500 hover:rounded-full hover:text-white font-poppins font-semibold py-3 px-10 rounded-lg my-2">
                                <span className=" p-1">
                                    <img src="images/Ramen.png" alt="Ramen" className="w-6 h-6" />
                                </span>
                                <span className="ml-3">Ramen</span>
                            </button>
                        </div>
                    </div>
                    <div>
                        <div className="flex">
                        </div>
                    </div>
                    
                    
                    <div className="mt-10">
                        <div className="flex px-4 justify-center">
                            <div className=" flex gap-8 flex-wrap ">
                                {Pizzas.map((item) => (
                                    <div key={item.id} className=" card-menu border text-center py-10 px-10 rounded-2xl font-thin">
                                        <img src={item.image} alt="" />
                                        <h1>{item.name}</h1>
                                        {/* INII NAMANYA MAPPING */}
                                        <p>${item.price}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="hidden">
                        <div className="flex px-4 justify-center">
                            <div className=" flex gap-8 flex-wrap ">
                                {Burgers.map((item) => (
                                    <div key={item.id} className=" card-menu border text-center py-10 px-10 rounded-2xl font-thin">
                                        <img src={item.image} alt="" />
                                        <h1>{item.name}</h1>
                                        {/* INII NAMANYA MAPPING */}
                                        <p>${item.price}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="hidden">
                        <div className="flex px-4 justify-center">
                            <div className=" flex gap-8 flex-wrap ">
                                {Cupcakes.map((item) => (
                                    <div key={item.id} className=" card-menu border text-center py-10 px-10 rounded-2xl font-thin">
                                        <img src={item.image} alt="" />
                                        <h1>{item.name}</h1>
                                        {/* INII NAMANYA MAPPING */}
                                        <p>${item.price}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="hidden">
                        <div className="flex px-4 justify-center">
                            <div className=" flex gap-8 flex-wrap ">
                                {Ramens.map((item) => (
                                    <div key={item.id} className=" card-menu border text-center py-10 px-10 rounded-2xl font-thin">
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