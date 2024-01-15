import React from 'react'

const Skill = () => {
  return (
    <section>
      <h1 className="heading">My Skill</h1>

      <main className="skill-container">
        <main className="technical-container">
          <h1 className="heading">Technical Skill</h1>
          <article className="skill-main">
            <span className="icon">Icon</span>
            <div className="info">
              <span>HTML</span>
            </div>
            <div className="progress-line html">
              <span></span>
            </div>
          </article>

          <article className="skill-main">
            <span className="icon">Icon</span>
            <div className="info">
              <span>CSS</span>
            </div>
            <div className="progress-line css">
              <span></span>
            </div>
          </article>
          <article className="skill-main">
            <span className="icon">Icon</span>
            <div className="info">
              <span>JAVASCRIPT</span>
            </div>
            <div className="progress-line javascript">
              <span></span>
            </div>
          </article>
          <article className="skill-main">
            <span className="icon">Icon</span>
            <div className="info">
              <span>JAVA</span>
            </div>
            <div className="progress-line java">
              <span></span>
            </div>
          </article>
          <article className="skill-main">
            <span className="icon">Icon</span>
            <div className="info">
              <span>PYTHON</span>
            </div>
            <div className="progress-line python">
              <span></span>
            </div>
          </article>
          <article className="skill-main">
            <span className="icon">Icon</span>
            <div className="info">
              <span>REACT</span>
            </div>
            <div className="progress-line react">
              <span></span>
            </div>
          </article>
          <article className="skill-main">
            <span className="icon">Icon</span>
            <div className="info">
              <span>NODE.JS</span>
            </div>
            <div className="progress-line node">
              <span></span>
            </div>
          </article>
        </main>

        <div className="professional-skill-container">
          <h1 className="heading">Professional Skill</h1>

          <div className="radial-bars">
            <div className="radial-bar">
              <div className="svg-info">
                <div className="percentage">90%</div>
                <div className="text">Creativity</div>
              </div>
              <svg x={0} y={0} viewBox="0 0 200 200">
                <circle
                  className="progress-bar"
                  cx={50}
                  cy={50}
                  r={40}
                ></circle>
                <circle className="path path1" cx={50} cy={50} r={40}></circle>
              </svg>
            </div>
            <div className="radial-bar">
              <div className="svg-info">
                <div className="percentage">90%</div>
                <div className="text">Team Work</div>
              </div>
              <svg x={0} y={0} viewBox="0 0 200 200">
                <circle
                  className="progress-bar"
                  cx={50}
                  cy={50}
                  r={40}
                ></circle>
                <circle className="path path2" cx={50} cy={50} r={40}></circle>
              </svg>
            </div>
            <div className="radial-bar">
              <div className="svg-info">
                <div className="percentage">90%</div>
                <div className="text">Time Management</div>
              </div>
              <svg x={0} y={0} viewBox="0 0 200 200">
                <circle
                  className="progress-bar"
                  cx={50}
                  cy={50}
                  r={40}
                ></circle>
                <circle className="path path3" cx={50} cy={50} r={40}></circle>
              </svg>
            </div>
            <div className="radial-bar">
              <div className="svg-info">
                <div className="percentage">90%</div>
                <div className="text">Problem Solving</div>
              </div>
              <svg x={0} y={0} viewBox="0 0 200 200">
                <circle
                  className="progress-bar"
                  cx={50}
                  cy={50}
                  r={40}
                ></circle>
                <circle className="path path4" cx={50} cy={50} r={40}></circle>
              </svg>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}

export default Skill
