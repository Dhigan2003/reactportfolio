export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Dhigan</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Full Stack</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
          Motivated and detail-oriented recent graduate with a degree in ComputerScience,
            <br /> seeking a position as a FullStack Web Developer.
          </p>
        </div>
        <div className="btn-class">
        <a className="btn-a" href="./Dhigan_Resume1.pdf" download="resume"><button className="btn btn-primary" >Resume</button>
        </a>
        <a className="btn-a" href="https://www.linkedin.com/in/dhigan-s-82a4832b0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank"><button className="btn btn-primary btn-linkedin" >Linked In</button>
        </a>
        </div>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero.png" alt="Hero Section"/>
      </div>
    </section>
  );
}
