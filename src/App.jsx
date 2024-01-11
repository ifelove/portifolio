import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <nav>
          <div>
            <span className="logo">HiTech</span>
          </div>

          <ul className="navlinks">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>

            <li>Portfolio</li>
          </ul>
          <div className="contact">Contact Me</div>
        </nav>
        <section>
          <article className="main-article">
            <h4>Hi,I am Aweda Ifeoluwa</h4>
            <h1>And I am a Backend Engineer</h1>
            <p>
              I am software enginner with 3years experience.Expertise is web
              development and many more{" "}
            </p>
          </article>
          <div className='social-link'>
3
4
4
          </div>
          <main>
            <button>Contact me</button>
            <button>Download CV</button>
          </main>
        </section>
      </div>
    </>
  );
}

export default App
