import ContactUs from "./components/Contact";
import Demo from "./components/Demo";
import Footer from "./components/Footer";
import Getstarted from "./components/Getstarted";
import Learn from "./components/Learn";
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
          <Learn />
          <ContactUs />
        </div>
        <Footer />
      </main>
    </>
  );
};

export default App;
