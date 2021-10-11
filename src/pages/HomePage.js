import Fade from "react-reveal/Fade";

import BadgeList from "../components/BadgeList";
import PortfolioFeature from "../components/PortfolioFeature";

function HomePage() {
    return (
        <div>
            <section className="pt-20 pb-28">
              <Fade>
                <h1 className="h1 mb-1">
                  <span className="mr-3">👋</span> Hi! I'm Nate.
                </h1>
              </Fade>
              <Fade delay={500}>
                <p className="h2 ml-14">I build websites and applications.</p>
              </Fade>
            </section>

            <Fade delay={1000} duration={1500}>
              <section className="pb-24">
                <div className="md:flex -mx-4">
                  <div className="md:flex-1 px-4">
                    <h2 className="uppercase font-bold text-sm mb-4">Front-End</h2>
                    <p className="text-xl leading-relaxed">
                      I build SPAs and cross-platform apps with React. Recently I've been 
                      using Tailwind CSS, but also love writing custom styles with SCSS and BEM.
                    </p>
                  </div>
                  <div className="md:flex-1 px-4">
                    <h2 className="uppercase font-bold text-sm mb-4">Back-End</h2>
                    <p className="text-xl leading-relaxed">
                      I've used PHP to create 100s of bespoke WordPress themes and plugins, 
                      write REST APIs and server-side logic for large applications, and 
                      used frameworks such as Laravel.
                    </p>
                  </div>
                  <div className="md:flex-1 px-4">
                    <h2 className="uppercase font-bold text-sm mb-4">Tooling</h2>
                    <p className="text-xl leading-relaxed">
                      I use Node.js to write custom CLI tools for code generation and transpiling,
                      and am well versed in the package management ecosystem.
                    </p>
                  </div>
                </div>
              </section>
            </Fade>

            <Fade delay={1000}>
              <section className="pb-24">
                <div className="md:flex -mx-4">
                  <div className="md:flex-1 px-4">
                    <h2 className="h2 mb-2">Languages</h2>
                    <BadgeList badges={["PHP", "Javascript", "HTML", "CSS"]} />
                  </div>
                  <div className="md:flex-1 px-4">
                    <h2 className="h2 mb-2">Frameworks</h2>
                    <BadgeList badges={["React", "Redux", "Laravel", "WordPress", "Sass", "Tailwind", "Bootstrap"]} />
                  </div>
                  <div className="md:flex-1 px-4">
                    <h2 className="h2 mb-2">Tooling</h2>
                    <BadgeList badges={["VS Code", "NPM", "Yarn", "Composer", "PostCSS", "BrowserSync"]} />
                  </div>
                </div>
              </section>
            </Fade>

            <section>

              <PortfolioFeature
                image="/peak.jpg"
                name="Peak Setter"
                badges={[ "React", "Redux", "Capacitor", "Tailwind", "Laravel"]}
                description="A cross-platform web and mobile application to help rock climbing gyms connect with their patrons."
                link="/work/peak"
                githubLink="https://github.com/nateweller"
                className="mb-24"
              />

              <PortfolioFeature
                image="bc-trails.jpg"
                imageSide="right"
                name="BC Trails Signage Application"
                badges={[ "React", "Redux", "SVG", "Tailwind"]}
                description="A web application that automates the process of designing trail signs, and generates print-ready vector files for Recreation Sites and Trails BC."
                link="/work/trails"
                className="mb-24"
              />

              <PortfolioFeature
                image="crowdblink.jpg"
                name="CrowdBlink"
                badges={[ "PHP", "Javascript", "React", "Cordova"]}
                description="Event management platform providing ticketing, access control, point of sale, analytics, and patron engagement."
                link="/work/blink"
                className="mb-24"
              />

              <PortfolioFeature
                image="project-forest.jpg"
                imageSide="right"
                name="WordPress Development"
                badges={[ "WordPress", "PHP", "SCSS", "Bootstrap", "Javascript", "jQuery"]}
                description="I've built 100s of custom WordPress themes and plugins over the years."
                link="/work/sites"
                className="mb-24"
              />

            </section>
        </div>
    );
}

export default HomePage;