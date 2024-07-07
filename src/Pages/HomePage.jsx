import Nav from "../Components/Nav";
import Hero from "../Components/Hero";
import Service from "../Components/Service";
import Footer from "../Components/Footer";
import ShowMenu from "../Components/ShowMenu";
import Customers from "../Components/Customers";



export default function HomePage() {
  return (
    <>
      <Nav />
      <Hero />
      <Service />
      <ShowMenu/>
      <Customers/>
      <Footer/>
    </>
  );
}
