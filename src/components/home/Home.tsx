import BoatVideo from "./BoatVideo";
import HeroText from "./HeroText";
import MapImages from "./MapImages";
import Showcase from "./Showcase";

function Home() {
  const datenow = new Date(Date.now());
  const year: String = datenow.getFullYear();
  return (
    <>
      <HeroText />
      <MapImages />
      <BoatVideo />
      <Showcase />
      <footer className="">
        <hr />

        <p className="text-center py-3 text-gray-500 text-xs">
          dp3why `&copy; {year}, All rights reserved`
        </p>
      </footer>
    </>
  );
}

export default Home;
