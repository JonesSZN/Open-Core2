import { Header } from "./sections/header";
import { Hero } from "./sections/hero";
import { Design } from "./sections/design";
import Reality from "./sections/reality";
import { Footer } from "./sections/footer";
import { Cards } from "./sections/Cards";

function App() {
  return (
    <div className="flex flex-col items-center">
      <Header />
      <Hero />
      <Design />
      <Cards />
      <Reality />
      <Footer />
    </div>
  );
}

export default App;
