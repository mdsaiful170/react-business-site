import Carusole from "./components/page/Carusole";
import Chillsbay from "./components/page/Chillsbay";
import Header from "./components/page/Header";
import Hero from "./components/page/Hero";
import Lagos from "./components/page/Lagos";
import Mood from "./components/page/Mood";

function App() {
  return (
    <>
      <main>
        <Header />
        <div>
          <Hero />
          <Mood />
          <Lagos />
          <Chillsbay />
          <Carusole />
        </div>
      </main>
    </>
  );
}

export default App;
