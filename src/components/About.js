import Header from "./Header";
import Face from "../../src/img/ai-face.png";

function About() {
  return (
    <>
      <main className="about-page">
        <Header text={'ABOUT'} />
        <div className="content">
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem expedita voluptates necessitatibus voluptate animi suscipit impedit sed quos. Eligendi consectetur aliquid veniam nobis tempore. At molestiae beatae perspiciatis enim! Iure.</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem expedita voluptates necessitatibus voluptate animi suscipit impedit sed quos. Eligendi consectetur aliquid veniam nobis tempore. At molestiae beatae perspiciatis enim! Iure.</p>
          <img src={Face} alt="Aya Zayed's picture" />
        </div>
      </main >
    </>
  );
}

export default About;
