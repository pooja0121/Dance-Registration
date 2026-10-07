import { useState } from "react";
import Registration from "./Registration";
import "./App.css";

function App() {
  const [showRegistration, setShowRegistration] = useState(false);
  if (showRegistration) {
    return (
      <Registration
        onBack={() => setShowRegistration(false)}
      />
    );
  }
  return (
    <div className="home-page">
      <nav className="navbar">

        <div className="logo">
          <span>💃</span>
          DanceFest
        </div>

        <div className="nav-links">

          <a href="#home">
            Home
          </a>

          <a href="#about">
            About
          </a>

          <a href="#categories">
            Categories
          </a>

          <a href="#contact">
            Contact
          </a>

          <button
            className="nav-register"
            onClick={() => setShowRegistration(true)}
          >
            Register Now
          </button>

        </div>

      </nav>


      

      <section className="hero" id="home">

        <div className="hero-content">

          <p className="event-label">
            STATE LEVEL DANCE COMPETITION
          </p>

          <h1>
            Let Your
            <span> Dance </span>
            Speak
          </h1>

          <p className="hero-description">
            Step onto the stage, showcase your talent,
            and compete with the best dancers across
            the state.
          </p>

          <div className="hero-buttons">

            <button
              className="primary-btn"
              onClick={() => setShowRegistration(true)}
            >
              Register Now →
            </button>

            <button
              className="secondary-btn"
              onClick={() =>
                document
                  .getElementById("categories")
                  .scrollIntoView({
                    behavior: "smooth"
                  })
              }
            >
              Explore Categories
            </button>

          </div>

        </div>


        

        <div className="hero-visual">

          <div className="dance-circle">
            💃
          </div>

          <div className="floating-card card-one">

            <span>🏆</span>

            <div>
              <strong>
                State Level
              </strong>

              <small>
                Competition
              </small>
            </div>

          </div>


          <div className="floating-card card-two">

            <span>🎵</span>

            <div>
              <strong>
                Multiple Styles
              </strong>

              <small>
                Show your talent
              </small>
            </div>

          </div>

        </div>

      </section>


      <section
        className="categories"
        id="categories"
      >

        <div className="section-heading">

          <p>
            WHO CAN PARTICIPATE?
          </p>

          <h2>
            Choose Your Category
          </h2>

        </div>


        <div className="category-container">

          {/* Kids */}

          <div className="category-card">

            <div className="category-icon">
              👧
            </div>

            <h3>
              Kids
            </h3>

            <p>
              A special platform for young dancers
              to showcase their creativity and talent.
            </p>

            <button
              onClick={() =>
                setShowRegistration(true)
              }
            >
              Register →
            </button>

          </div>


       

          <div className="category-card featured">

            <div className="category-icon">
              🕺
            </div>

            <h3>
              Teenagers
            </h3>

            <p>
              Bring your energy, passion and unique
              dance style to the competition.
            </p>

            <button
              onClick={() =>
                setShowRegistration(true)
              }
            >
              Register →
            </button>

          </div>


         

          <div className="category-card">

            <div className="category-icon">
              💃
            </div>

            <h3>
              Under 35
            </h3>

            <p>
              An opportunity for talented dancers
              to compete at the state level.
            </p>

            <button
              onClick={() =>
                setShowRegistration(true)
              }
            >
              Register →
            </button>

          </div>

        </div>

      </section>



      <section
        className="about"
        id="about"
      >

        <div>

          <p className="section-label">
            ABOUT THE EVENT
          </p>

          <h2>
            One Stage.
            <br />
            Unlimited Talent.
          </h2>

        </div>


        <p>
          DanceFest is a state-level dance competition
          created to provide dancers with a platform to
          showcase their talent, creativity and passion.
          Participants from different districts can take
          part and compete across multiple dance styles.
        </p>

      </section>


      <footer id="contact">

        <div className="logo">
          💃 DanceFest
        </div>

        <p>
          State Level Dance Competition
        </p>

        <p>
          © 2026 DanceFest. All rights reserved.
        </p>

      </footer>

    </div>
  );
}

export default App;