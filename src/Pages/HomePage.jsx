import Nav from "../Components/Nav";
import Hero from "../Components/Hero";
import Service from "../Components/Service";
import Footer from "../Components/Footer";
import ShowMenu from "../Components/ShowMenu";
import Customers from "../Components/Customers";
import Getapp from "../Components/Getapp";



export default function HomePage() {
  return (
    <div className=" mx-auto px-4 py-3">
      <Nav />
      <Hero />
      <Service />
      <ShowMenu/>
      <Customers/>
      <Getapp/>
      <Footer/>
      
    </div>
  );
}
