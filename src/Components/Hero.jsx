
export default function Hero() {
  return (
    <>

      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-red-600">
                Claim Best R on
              </h1>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Fast Food & Restaurants
              </h2>
              <p className="text-lg mb-8">
                Our job is to filling your tummy with delicious food and with
                fast and free delivery
              </p>
              <div className="flex space-x-4">
                <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-7 rounded-full">
                  Get Started
                </button>

                <div >
                <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-4 px-7 rounded-full">
                  Watch Video
                </button>
                </div>
              </div>
            </div>

            <div className="md:w-1/2 mt-8 md:mt-0">
              <img
                src="/images/image 46.png"
                alt="salad"
                width={500}
                height={500}
                className="rounded-xl"
              />
              <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 -translate-y-20">
                <div className="bg-gray-100 flex space-x-1 items-center py-2 px-5 rounded-full m-7">
                  <img className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
                    src="/images/Richard Watson.png"
                    alt="Bordered avatar"
                  />
                  <div />

                  <div>
                    <h3 className="text-lg font-bold text-gray-800">
                      Richard Watson
                    </h3>
                    <p className="text-sm text-gray-500">Food Coulier</p>
                  </div>

                  <div>
                    <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="41" height="41" rx="20.5" fill="#EB0029" />
                      <path d="M16.3778 12.3966L17.3666 12.0992C17.9083 11.9359 18.4909 11.9752 19.0057 12.2098C19.5206 12.4445 19.9324 12.8584 20.1645 13.3744L20.9287 15.0741C21.1283 15.518 21.1838 16.0131 21.0876 16.4901C20.9914 16.9671 20.7483 17.4021 20.3924 17.7339L19.1265 18.9142C19.0895 18.9487 19.0661 18.9953 19.0604 19.0455C19.0231 19.3819 19.2511 20.0369 19.7764 20.9477C20.1585 21.6095 20.5051 22.0747 20.7991 22.3348C21.0042 22.517 21.1169 22.5559 21.1651 22.5424L22.8683 22.0213C23.3334 21.879 23.8313 21.8859 24.2923 22.0409C24.7533 22.1958 25.1543 22.4912 25.439 22.8855L26.5244 24.3904C26.8545 24.848 27.0073 25.4099 26.9545 25.9716C26.9016 26.5334 26.6468 27.0569 26.2372 27.445L25.4865 28.1567C25.088 28.534 24.5987 28.8017 24.066 28.9337C23.5334 29.0657 22.9757 29.0575 22.4471 28.91C20.1136 28.2584 18.0216 26.2892 16.1473 23.0431C14.2705 19.7928 13.6122 16.9933 14.2189 14.6437C14.3554 14.1153 14.6258 13.6309 15.004 13.2373C15.3821 12.8438 15.8553 12.5542 16.3778 12.3966ZM16.7447 13.6142C16.4313 13.7087 16.1474 13.8822 15.9205 14.1182C15.6936 14.3541 15.5313 14.6446 15.4492 14.9615C14.9391 16.9374 15.5229 19.4192 17.248 22.4077C18.9706 25.3919 20.8254 27.1374 22.7895 27.6864C23.1065 27.7747 23.4409 27.7795 23.7603 27.7002C24.0797 27.6209 24.3731 27.4603 24.612 27.234L25.3636 26.5222C25.5498 26.3458 25.6657 26.1078 25.6897 25.8524C25.7137 25.5969 25.6442 25.3415 25.4941 25.1335L24.4095 23.6295C24.2801 23.45 24.0977 23.3156 23.888 23.2451C23.6783 23.1746 23.4518 23.1715 23.2402 23.2363L21.5329 23.7591C20.5415 24.054 19.6417 23.2567 18.6757 21.5832C18.025 20.4563 17.7217 19.5836 17.7971 18.9049C17.8369 18.5524 18.0004 18.227 18.2597 17.9847L19.5256 16.8044C19.6874 16.6536 19.798 16.4558 19.8418 16.239C19.8856 16.0221 19.8603 15.797 19.7696 15.5952L19.0053 13.8955C18.8999 13.6612 18.7128 13.4732 18.4789 13.3665C18.2451 13.2599 17.9805 13.2419 17.7344 13.316L16.7447 13.6142Z" fill="#F2F2F2" />
                    </svg>
                  </div>
                </div>
              </div>
         
            </div>
          </div>
          <div className="mt-16">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-2">Our Happy Customer</h3>
                <p className="text-gray-500">4.8 (12.5k Review)</p>
              </div>
              <div className="mt-4 md:mt-0">
                <img
                  src="/images/customer.jpg"
                  alt="customer"
                  width={100}
                  height={100}
                  className="rounded-full"
                />
              </div>
            </div>
          </div>
          <div className="mt-16">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mt-4 md:mt-0">
                <img
                  src="/images/italian pizza.jpeg"
                  alt="pizza"
                  width={150}
                  height={150}
                  className="rounded-xl"
                />
              </div>
              <div className="md:w-1/2">
                <h3 className="text-2xl font-bold mb-2 text-red-600">
                  Italian Pizza
                </h3>
                <p className="text-xl font-bold mb-2 text-gray-800">$7.49</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </>
  )
}
