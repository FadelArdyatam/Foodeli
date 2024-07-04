import Nav from "../Components/Nav";
import MenuItems from "../Components/MenuItems";
export default function Menu() {
  return (
    <>
      <Nav />
      <nav className="to-gray-500">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between cursor-pointer">
          <button className="flex items-center bg-red-500 text-white font-semibold py-3 px-10 rounded-full">
            <span className="bg-white rounded-full p-1">
              <img src="https://twemoji.maxcdn.com/v/latest/72x72/1f355.png" alt="Pizza" className="w-6 h-6" />
            </span>
            <span className="ml-3">Pizza</span>
          </button>

          <div className="flex space-x-11">
            <a href="/" className="hover:text-red-500 font-poppins font-semibold">Home</a>
            <a href="/" className="hover:text-red-500 font-poppins font-semibold">Burger</a>
            <a href="/Menu" className="hover:text-red-500 font-poppins font-semibold">Cup</a>
            <a href="/" className="hover:text-red-500 font-poppins font-semibold">Contact</a>
          </div>
          <div className="flex space-x-4">
            <a href="/" className="hover:text-red-500">
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
            <a href="/" className="hover:text-red-500">LB</a>
            <button
              className="bg-red-500 hover:bg-red-1000 w-28 text-white font-bold py-2 px-4 rounded-full cursor-pointer ">Login</button>
          </div>
        </div>
      </nav>
      <MenuItems />
    </>
  )
}
