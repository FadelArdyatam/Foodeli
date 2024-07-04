
export default function Nav() {// mengirim keluar
  return (
    <>
      <nav className="to-gray-500">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between cursor-pointer">
          <div className="flex items-center">
            <a href=""></a>
            <img
              src="/images/Foodeli Logo.png"
              alt="Foodeli Logo"
              className="w-16 h-16"
            />
            <span className="text-2xl font-bold text-black-500 ml-4">Foodeli</span>
          </div>
          <div className="flex space-x-11">
            <a href="/" className="hover:text-red-500 font-poppins font-semibold">Home</a>
            <a href="/" className="hover:text-red-500 font-poppins font-semibold">Services</a>
            <a href="/Menu" className="hover:text-red-500 font-poppins font-semibold">Menu</a>
            <a href="/" className="hover:text-red-500 font-poppins font-semibold">Contact</a>
          </div>
          <div className="flex space-x-4">
            <a href="/" className="hover:text-red-500 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 024 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </a>
            <button
              className="bg-red-500 hover:bg-red-1000 w-28 items-center text-white font-bold py-2 px-4 rounded-full cursor-pointer ">Login</button>
          </div>
        </div>
      </nav>

    </>
  )
}

