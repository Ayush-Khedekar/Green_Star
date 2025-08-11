import Footer from "./components/Footer/Footer";
import Navbar from "./components/NavBar/Navbar";
import Testimonials from "./components/Pages/Testimonials";
import Home from "./components/Pages/Home";
import Privacy_Policy from "./components/Pages/Privacy_Policy";
import Contact from "./components/Pages/Contact";
import About from "./components/Pages/About";
import Services from "./components/Pages/Services";
// import Photo from "./components/Gallery";
// import NewGallery from "./components/NewGallery";
import Gallery from "./components/Gallery";
// import InfiniteScrollCards from "./components/Pages/Moving_cards";

const App = () => {
  return (
    <div>
      <Navbar />
      <main>
        <section id="home">
          <Home />
        </section>
        <div className="bg-slate-100 h-4"></div>
        <section id="about">
          <About />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="gallery">
          <Gallery />
        </section>
        <Testimonials />
        <div className="bg-slate-100 h-4"></div>
        <section id="privacy-policy">
          <Privacy_Policy />
        </section>
        <div className="bg-slate-100 h-4"></div>

        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
      {/* <InfiniteScrollCards /> */}
      {/* <Navbar />
      <div className="bg-slate-100 h-4"></div>
      <Testimonials />
      <div className="bg-slate-100 h-4"></div>

      <Privacy_Policy />
      <div className="bg-slate-100 h-4"></div> */}

      {/* aakash */}

      {/* <Gallery /> */}
    </div>
  );
};

export default App;
