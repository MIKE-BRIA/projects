import Demo from "./components/Demo";
import Getstarted from "./components/Getstarted";
import Nav from "./components/Nav";
import Pricing from "./components/Pricing";
import Testimonial from "./components/Testimonial";

const App = () => {
  return (
    <>
      <main>
        <Nav />
        <div className="mt-2">
          <Demo />
          <Getstarted />
          <Testimonial />
          <Pricing />
        </div>
      </main>
    </>
  );
};

export default App;
