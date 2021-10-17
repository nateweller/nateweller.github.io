import { useState } from "react";
import Fade from "react-reveal/Fade";

import BadgeList from "../components/BadgeList";
import Button from "../components/Button";
import Dialog from "../components/Dialog";
import PortfolioFeature from "../components/PortfolioFeature";

function HomePage() {

  const [showLanguagesDialog, setShowLanguagesDialog] = useState(false);

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
          <div className="md:flex md:space-x-12">
            <div className="md:flex-1">
              <h2 className="uppercase font-bold text-sm mb-4">Front-End</h2>
              <p className="text-lg leading-relaxed">
                I create web and mobile applications with 
                modern Javascript. My go-to framework is 
                React paired with Redux, and recently I have 
                been using Tailwind CSS more and more. 
                That said, I still love writing custom styles with 
                SCSS and BEM.
              </p>
            </div>
            <div className="md:flex-1">
              <h2 className="uppercase font-bold text-sm mb-4">Back-End</h2>
              <p className="text-lg leading-relaxed">
                I've been writing PHP my entire career, creating bespoke WordPress 
                themes and plugins, working on REST APIs and server-side logic for 
                large applications, and using eloquent back-end frameworks such as Laravel.
              </p>
            </div>
            <div className="md:flex-1">
              <h2 className="uppercase font-bold text-sm mb-4">Tooling</h2>
              <p className="text-lg leading-relaxed">
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
              <h2 className="uppercase font-bold text-sm mb-4">Languages</h2>
              <BadgeList 
                badges={[
                  "PHP", 
                  "Javascript", 
                  "HTML", 
                  "CSS", 
                  { label: "*", onClick: () => { setShowLanguagesDialog(true) } }
                ]} 
                />
            </div>
            <div className="md:flex-1 px-4">
              <h2 className="uppercase font-bold text-sm mb-4">Frameworks</h2>
              <BadgeList badges={["React", "Redux", "Laravel", "WordPress", "Sass", "Tailwind", "Bootstrap"]} />
            </div>
            <div className="md:flex-1 px-4">
              <h2 className="uppercase font-bold text-sm mb-4">Tooling</h2>
              <BadgeList badges={["VS Code", "NPM", "Yarn", "Composer", "PostCSS", "BrowserSync", "Git"]} />
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
          className="mb-24"
        />

        <PortfolioFeature
          image="bc-trails.jpg"
          imageSide="right"
          name="BC Trails Signage Application"
          badges={[ "React", "Redux", "Tailwind", "SVG"]}
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

      <Dialog isOpen={showLanguagesDialog} setIsOpen={setShowLanguagesDialog}>
        <p className="mb-4">
          I only like to shine a spotlight on the languages that I have used to 
          deploy a significant amount of production-proven code; languages that I
          could confidently build something with at a moment's notice.
        </p>

        <p className="mb-4">
          I've tried out a plethora of different languages over the years, 
          including Node.js, Python, C#, Java, and Swift. I'm most interested 
          in trying out Ruby or Go next.
        </p>

        <Button onClick={() => setShowLanguagesDialog(false)}>
          Ok
        </Button>
      </Dialog>
            
    </div>
  );
}

export default HomePage;