import Resume from "./Resume";

function Home() {
  return (
    <div className="home-page">
      <h1>Aya Zayed</h1>
      {/* <h1>Front-end Developer</h1> */}
      <div class="cloak__wrapper">
        <div class="cloak__container">
          <div class="cloak"></div>
        </div>
      </div>
      <div className="button-container">
        <Resume />
      </div>
    </div>
  );
}

export default Home;
