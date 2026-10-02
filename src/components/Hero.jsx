function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-content">
        <p className="hero-label">
          SIMPLE LIVING, BETTER CHOICES
        </p>

        <h1>
          Find your everyday
          <br />
          essentials.
        </h1>

        <p className="hero-description">
          Thoughtfully selected products for
          your home, work, and everyday life.
        </p>

        <a href="#products" className="hero-button">
          Shop Collection
        </a>
      </div>

      <div className="hero-image">
        <img
          src="https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?w=1000"
          alt="Minimal lifestyle interior"
        />
      </div>

    </section>
  );
}

export default Hero;
