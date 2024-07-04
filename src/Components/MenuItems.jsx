
export default function MenuItems() {
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
    // Tambahkan menu lainnya sesuai kebutuhan
  ];

  return (
    <div className=" border border-spacing-2 border-gray-300 py-10 px-10 rounded-2xl  bg-gray-200 mb-12 mt-12 ml-12 mr-12">
      <div className="flex justify-center">
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
  )
}