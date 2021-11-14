import { useState } from "react";
import Fade from "react-reveal/Fade";

import BadgeList from "../components/BadgeList";
import BrowserMockup from "../components/BrowserMockup";
import Button from "../components/Button";
import Dialog from "../components/Dialog";
import PortfolioFeature from "../components/PortfolioFeature";
import buttonSnippet from "../snippets/buttonSnippet";

import leetcodeSnippet from "../snippets/leetcodeSnippet";
import useDataStoreItemSnippet from "../snippets/useDataStoreItemSnippet";

function HomePage() {

  const [showLanguagesDialog, setShowLanguagesDialog] = useState(false);

  return (
    <div>
      <section className="pt-20 pb-28">
        <Fade up>
          <h1 className="h1 mb-1">
            <span className="mr-3">👋</span> Hi! I'm Nate.
          </h1>
        </Fade>
        <Fade up delay={500}>
          <p className="h2 ml-14">I build websites and applications.</p>
        </Fade>
      </section>

      <Fade delay={1000} duration={1500}>
        <section className="pb-12 md:pb-24">
          <div className="md:flex md:space-x-12">
            <div className="mb-12 md:flex-1 md:mb-0">
              <h2 className="uppercase font-bold text-sm mb-4">Front-End</h2>
              <p className="text-lg leading-relaxed">
                I create web and mobile applications with 
                modern Javascript, React, and Redux. I use
                utility-first styling frameworks such as 
                Tailwind CSS, or roll my own custom styles 
                with SCSS and BEM.
              </p>
            </div>
            <div className="mb-12 md:flex-1 md:mb-0">
              <h2 className="uppercase font-bold text-sm mb-4">Back-End</h2>
              <p className="text-lg leading-relaxed">
                I've been writing PHP for over 8 years, creating bespoke WordPress 
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
          <div className="md:flex md:space-x-12">
            <div className="mb-12 md:flex-1 md:mb-0">
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
            <div className="mb-12 md:flex-1 md:mb-0">
              <h2 className="uppercase font-bold text-sm mb-4">Frameworks</h2>
              <BadgeList badges={["React", "Redux", "Laravel", "WordPress", "Sass", "Tailwind", "Bootstrap"]} />
            </div>
            <div className="md:flex-1">
              <h2 className="uppercase font-bold text-sm mb-4">Tooling</h2>
              <BadgeList badges={["VS Code", "NPM", "Yarn", "Composer", "PostCSS", "BrowserSync", "Git"]} />
            </div>
          </div>
        </section>
      </Fade>

      <Fade duration={1000}>
        <section>

          <PortfolioFeature
            image="bc-trails.jpg"
            imageSide="left"
            name="BC Trails Signage Application"
            badges={[ "React", "Redux", "Tailwind", "SVG"]}
            description="A web application that automates the process of designing trail signs, and generates print-ready vector files for Recreation Sites and Trails BC."
            link="/work/trails"
            className="mb-24"
          />

          <PortfolioFeature
            image="crowdblink.jpg"
            imageSide="right"
            name="CrowdBlink"
            badges={[ "PHP", "Javascript", "React", "Cordova"]}
            description="I spent two and a half years at CrowdBlink, building an event management platform providing ticketing, access control, point of sale, analytics, and patron engagement."
            link="/work/blink"
            className="mb-24"
          />

          <PortfolioFeature
            image="project-forest.jpg"
            imageSide="left"
            name="WordPress Development"
            badges={[ "WordPress", "PHP", "SCSS", "Bootstrap", "Javascript", "jQuery"]}
            description="Since 2009, I've built and deployed over 100 custom WordPress themes and plugins. Today, I build modern WordPress sites with the new Gutenberg editor and latest PHP features."
            link="/work/sites"
            className="mb-24"
          />

          <PortfolioFeature
            image="/peak.jpg"
            imageSide="right"
            name="Peak Setter (WIP)"
            badges={[ "React", "Redux", "Capacitor", "Tailwind", "Laravel"]}
            description="A cross-platform web and mobile application to help rock climbing gyms connect with their patrons."
            link="/work/peak"
            className="mb-24"
          />

        </section>
      </Fade>

      <section className="mb-24">
        <div className="flex flex-wrap md:flex-nowrap md:items-center">
          <div className="flex-auto order-1 md:flex-1 md:order-none md:w-1/2">
            <BrowserMockup language="javascript" darkMode={true} url="useDataStoreItem.js">
              {useDataStoreItemSnippet}
            </BrowserMockup>
          </div>
          <div className="flex-auto order-2 md:flex-1 md:order-none md:pl-12">
            <div className="max-w-md">
                <h2 className="h2 mb-2">
                  React Hooks
                </h2>
                <p className="mb-4">
                  I use React Hooks to abstract stateful application architecture 
                  from implementation details.
                </p>
                <Button use="a" href="https://github.com/nateweller/hooks">
                  View My Hooks
                </Button>
              </div>
            </div>
        </div>
      </section>

      <section className="mb-24">
        <div className="flex flex-wrap md:flex-nowrap md:items-center">
          <div className="flex-auto order-2 md:flex-1 md:order-none md:pl-12">
            <div className="max-w-md">
                <h2 className="h2 mb-2">
                  React Components
                </h2>
                <p className="mb-4">
                  I write highly reusable components that are easy to implement and extend. 
                  Developing custom UI systems and component libraries is one of my favourite things to do.
                </p>
                <Button use="a" href="https://github.com/nateweller/components">
                  View My Components
                </Button>
              </div>
            </div>
            <div className="flex-auto order-1 md:flex-1 md:order-none md:w-1/2">
              <BrowserMockup language="javascript" darkMode={true} url="Button.js">
                {buttonSnippet}
              </BrowserMockup>
            </div>
        </div>
      </section>

      <section className="mb-24">
        <div className="flex flex-wrap md:flex-nowrap md:items-center">
          <div className="flex-auto order-1 md:flex-1 md:order-none md:w-1/2">
            <BrowserMockup language="javascript" darkMode={true} url="3Sum.js">
              {leetcodeSnippet}
            </BrowserMockup>
          </div>
          <div className="flex-auto order-2 md:flex-1 md:order-none md:pl-12">
            <div className="max-w-md">
                <h2 className="h2 mb-2">
                  LeetCode Solutions
                </h2>
                <p className="mb-4">
                  I enjoy practicing algorithms and data manipulation by solving 
                  LeetCode problems. It is great way to keep sharp, and often a 
                  means to learning new ways to approach and solve logical problems.
                </p>
                <Button use="a" href="https://github.com/nateweller/leetcode">
                  View My Solutions
                </Button>
              </div>
            </div>
        </div>
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