import "./hero.scss";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__top">

      <h1 className="hero__title">
        "He lingered there, watching an eddy that turned and turned, until the
        stream absorbed it, and carried it on to the sea. -'Like me!'" -Dickens
      </h1>
      <p className="hero__text">
        Web Developer | JavaScript | React | Express
        <br/>Thinking about how tech can serve global good
      </p>
      </div>
      <p className="hero__photo">"Kekabeka Falls 2020" by Travis Martin</p>
    </section>
  );
}
