import React, { useEffect } from "react";
import Lenis from "lenis";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Services from "./components/Services";
import Loyalty from "./components/Loyalty";
import Gallery from "./components/Gallery";
import Visit from "./components/Visit";
import Footer from "./components/Footer";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-screen items-center justify-center bg-ink p-8 text-center">
          <p className="font-display text-3xl tracking-wide text-snow">
            Something went wrong — please refresh the page.
          </p>
        </div>
      );
    }
    return this.props.children;
  }
}

const App = () => {
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.11, smoothWheel: true });
    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    const onClick = (e) => {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;
      const el = document.querySelector(a.hash);
      if (!el) return;
      e.preventDefault();
      lenis.scrollTo(el, { offset: -70 });
    };
    document.addEventListener("click", onClick);
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      document.removeEventListener("click", onClick);
    };
  }, []);

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-ink">
        <Nav />
        <main>
          <Hero />
          <Marquee />
          <Services />
          <Loyalty />
          <About />
          <Gallery />
          <Visit />
        </main>
        <Footer />
      </div>
    </ErrorBoundary>
  );
};

export default App;
