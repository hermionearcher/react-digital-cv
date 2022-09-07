import React from 'react'

const Home = () => {
  return (
    <div id="container--main">

    <section id="wrapper--hero" className="section--page">
      <img id="profile-pic" alt="Profile" src="https://cdn.vox-cdn.com/thumbor/W--ap_tOYIcTHpub0JEgMMAvtWc=/0x0:6240x4160/1200x800/filters:focal(2621x1581:3619x2579)/cdn.vox-cdn.com/uploads/chorus_image/image/70852141/1395731906.0.jpg" />

      <div>
        <h1 id="user-name">Me...</h1>
        <p id="bio">JavaScript Software Developer <a href="https://www.agora.io/en/" target="_blank" rel="noreferrer">Yorkshire Water</a>, previously at <a href="https://www.udemy.com/user/dennis-ivanov-5/" target="_blank" rel="noreferrer">Atos</a> as a Angular developer.</p>
        <p id="email">👉 ha@email.com</p>
      </div>
    </section>

    <section className="section--page">

      <div id="socials--list">
        {/* <a href="https://youtube.com/c/dennisivy" target="_blank">Youtube</a> */}
        <a href="#my-work" >My Projects</a>
        <a href="https://www.linkedin.com/in/h-archer/" target="_blank">Linkedin</a>
        <a href="https://github.com/divanov11" target="_blank">Github</a>
        <a href="./assets/resume.pdf" target="_blank">Download my CV</a>
      </div>
    </section>
    
    <div className="line-break"></div>
    <section className="section--page">
      <h2>Skills & Qualifications</h2>
      <ul id="qualifications--list">
        <li>✔️ 7 Years experience with front & backend development</li>
        <li>✔️ Extensive knowledge in API & Database Design.</li>
        <li>✔️ Experienced content creator on YouTube & community leader </li>
        <li>✔️ 7 Years experience with running Adwords campaigns & SEO</li>
      </ul>
    </section>

    <section className="section--page">
      <h2>Tech stack</h2>

      <div id="wrapper--techstack__items">
        <div className="card--techstack"><span>React</span></div>
        <div className="card--techstack"><span>Angular</span></div>
        <div className="card--techstack"><span>Node JS</span></div>
        <div className="card--techstack"><span>MySQL</span></div>
      </div>
    </section>

    <section id="work-history-wrapper" className="section--page">
      <h2>Work History</h2>

      <div className="line-break"></div>
      <div className="card--work-history">
        <strong>🚧 JAVASCRIPT SOFTWARE DEVELOPER | <a href="https://www.agora.io/en/" target="_blank" rel="noreferrer"><span id="card--work--company">YORKSHIRE WATER</span></a></strong>
        <p>05/2022 - Present</p>
        <p>Worked on application modernisation and migration to web based solutions.</p>
        <ul>
          <li>Doubled Web SDK's monthly usage minutes from 15 million to 30 million minutes within my first 4 months</li>
          <li>Produced educational video content which resulted in 300k+ views on youtube</li>
          <li>Produced SEO campaigns and content to gain market share for related keywords.</li>
        </ul>
      </div>

      <div className="line-break"></div>
      <div className="card--work-history">
        <strong>🚧 ANGULAR DEVELOPER | <a href="https://www.agora.io/en/" target="_blank" rel="noreferrer"><span id="card--work--company">ATOS</span></a></strong>
        <p>09/21 - 05/22</p>
        <p>Produced content showcasing new tech, tutorials & interviews with top developers.</p>
        <ul>
          <li>166,000+ Youtube Subscribers</li>
          <li>30,000 course copies sold</li>
          <li>12+ Million views on Youtube</li>
          <li>Made regular contributions to Traversy Medias youtube channel (1.9m Subscribers)</li>
          <li>Tutorial videos included projects such as social networks, Ecommerce, real time video, stripe & paypal integrations and more </li>
        </ul>
      </div>

      <div className="line-break"></div>
      <div className="card--work-history">
        <strong>🚧 POWERAPPS DEVELOPER | <a href="https://www.agora.io/en/" target="_blank" rel="noreferrer"><span id="card--work--company">ATOS</span></a></strong>
        <p>09/20 - 09/21</p>
        <p>Designed and developed a laboratory management system. My system
          provided an interface for lab technicians and customers to view and
          track data from samples tested in the lab.</p>
        <ul>
          <li>Designed prototype & pitched original idea for new lab management system (LIMS)</li>
          <li>Built entire code base and brought version 1 of LIMS system to market as a solo developer</li>
          <li>Onboarded and trained customers (Webinars & Conferences)</li>
          <li>Managed a small team of developers in expansion of LIMS system</li>
        </ul>
      </div>

    </section>

    <section className="section--page" id="my-work">
      <h2>Projects & Accomplishments</h2>

      <div className="card--project">
        <a href="/project1"><span>🏆 </span>Built a Laboratory management system for forensics lab</a>
      </div>

      <div className="card--project">
        <a href="/project1" ><span>🏆 </span>Documentation website - Lead team to re-build docs for agora.io</a>
      </div>

      <div className="card--project">
        <a href="/project1" ><span>🏆 </span>Ecommerce platform using paypal and stripe API for payment integration</a>
      </div>

      <div className="card--project">
        <a href="/project1"><span>🏆 </span>Social Network - open source project</a>
      </div>

    </section>


  </div>
  )
}

export default Home