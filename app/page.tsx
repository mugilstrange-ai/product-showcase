import Greeting from "./components/Greeting";
import ProductCard from "./components/ProductCard";

export default function Page() {
  return (
    <main className="store">
      <header className="site-header">
        <a href="#home" className="brand" aria-label="Orbit Supply, home">
          <span className="brand-icon" aria-hidden="true">✳</span>
          <span>ORBIT<span className="brand-light">SUPPLY</span></span>
        </a>
        <span className="header-edition">THE DAILY EDIT / NO. 01</span>
        <span className="header-availability"><span aria-hidden="true">●</span> INDEPENDENT GOODS</span>
      </header>
      <section className="hero" id="home">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-line" /> FORM MEETS FUNCTION</p>
          <h1>Good gear.<br /><em>Better days.</em></h1>
          <p className="hero-subtitle">
            Considered objects for creative minds, curious routines,
            and everything that happens between.
          </p>
          <Greeting name="Explorer" />
        </div>
        <div className="hero-sculpture" aria-hidden="true">
          <div className="sculpture-ring" />
          <span>✳</span>
          <p>DESIGNED FOR THE EVERYDAY</p>
        </div>
      </section>
      <section className="collection" aria-labelledby="collection-title">
        <div className="section-header">
          <div>
            <p className="eyebrow">01 / SELECTED PIECES</p>
            <h2 id="collection-title">The current <em>rotation.</em></h2>
          </div>
          <span className="item-count">02 ITEMS IN THE EDIT</span>
        </div>
        <div className="cards">
          <ProductCard title="Studio Keyboard" price={49} inStock={true} />
          <ProductCard title="Everyday Mouse" price={25} inStock={false} />
        </div>
      </section>
      <footer className="footer">
        <span>✳ ORBIT SUPPLY</span>
        <span>SMALL COLLECTION. BIG IDEAS.</span>
        <span>BUILT WITH NEXT.JS + TYPED PROPS</span>
      </footer>
    </main>
  );
}
