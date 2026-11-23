import FilterableList from "./components/FilterableList";

export default function Page() {
  return (
    <main className="site-shell">
      <header className="site-header">
        <a className="brand" href="/" aria-label="Mint and Mango home">
          <span className="brand-mark" aria-hidden="true">✳</span>
          <span>MINT <i>&</i> MANGO<span className="brand-dot">.</span></span>
        </a>
        <span className="header-note">THE EVERYDAY FOOD EDIT / 001</span>
      </header>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="hero-eyebrow">A LITTLE SOMETHING FOR EVERY CRAVING</p>
          <h1 id="hero-title">Good food.<br /><em>Found fast.</em></h1>
          <p>Six delicious picks, one simple search. Find exactly what you feel like eating, without scrolling endlessly.</p>
          <div className="hero-pill"><span aria-hidden="true">●</span> MADE FRESH, FOUND FASTER</div>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="hero-circle hero-circle-outer" />
          <div className="hero-circle hero-circle-inner" />
          <div className="hero-dish">✳</div>
          <div className="hero-art-caption">CURATED FOR THE CURIOUS</div>
        </div>
      </section>
      <FilterableList />
      <footer className="site-footer"><span>✳ MINT & MANGO</span><span>GOOD THINGS ARE ON THE MENU.</span><span>BUILT WITH NEXT.JS + TYPESCRIPT</span></footer>
    </main>
  );
}
