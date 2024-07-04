export default function Footer() {
  return (
    // CONTAINER FOOTER FOODELI
    <div className="flex justify-center">
      <div className="container flex justify-between w-full p-16">
        {/* FOODELI */}
        <div className="foodeli w-56  ">
          <div className="foodeli flex items-center text-center gap-3">
            <img
              src="../public/images/Foodeli Logo.png"
              className="w-5"
              alt=""
            />
            <h1 className="text-black solid font-bold "> Foodeli</h1>
          </div>
          <div className="description py-6">
            Our job is to filling your tummy with delicious food and with fast
            and free delivery.
          </div>

          <div className="socialLogo flex gap-4">
            <img
              src="../public/images/icons_instagram.png"
              className=""
              alt=""
            />
            <img src="../public/images/icons_facebook.png" alt="" />
            <img src="../public/images/icons_twitter.png" alt="" />
          </div>
        </div>

        {/* ABOUT */}
        <div className="about ">
          <div>
            <h1 className="text-black solid font-bold">About</h1>
          </div>
          <div>
            <ul>
              <li>
                <a href="_blank">About Us</a>
              </li>
              <li>
                <a href="_blank">Features</a>
              </li>
              <li>
                <a href="_blank">News</a>
              </li>
              <li>
                <a href="_blank">Menu</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Company */}
        <div className="company ">
          <h1 className=" text-black solid font-bold">Company</h1>
          <div>
            <ul>
              <li>
                <a href="_blank">Why Foodeli.?</a>
              </li>
              <li>
                <a href="_blank">Partner With Us</a>
              </li>
              <li>
                <a href="_blank">FAQ</a>
              </li>
              <li>
                <a href="_blank">Blog</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Support */}
        <div className="Support  ">
          <div>
            <h1 className="text-black solid font-bold">Support</h1>
          </div>
          <div>
            <div>
              <ul>
                <li>
                  <a href="_blank">Account</a>
                </li>
                <li>
                  <a href="_blank">Support Center</a>
                </li>
                <li>
                  <a href="_blank">Feedback</a>
                </li>
                <li>
                  <a href="_blank">Contact Us</a>
                </li>
                <li>
                  <a href="_blank">Accessibility</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Get In touch */}
        <div className="getInTouch  ">
          <div>
            <h1 className="text-black solid font-bold">Get In Touch</h1>
          </div>
          <ul>
            <li>
              <a href="_blank">Question or feedback.?</a>
            </li>
            <li>
              <a href="_blank">We'd love to hear from you</a>
            </li>
          </ul>
          <a href="" className="p-6">
            <div className="email border-2 px-2 py-3 rounded-full justify-between flex ">
              <h1>Email Address</h1>
              <img src="../public/images/carbon_send.png" alt="" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
