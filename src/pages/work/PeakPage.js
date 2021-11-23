import { Link } from "react-router-dom";
import Fade from "react-reveal";
import BrowserMockup from "../../components/BrowserMockup";
import Button from "../../components/Button";
import Container from "../../components/Container";
import gradingSystemControllerSnippet from "../../snippets/gradingSystemControllerSnippet";
import useDataStoreItemSnippet from "../../snippets/useDataStoreItemSnippet";


function PeakPage() {
    return (
      <>
        <Container>
            <section className="pt-20 pb-28 max-w-3xl">
              <Fade>
                <h1 className="h1 mb-1">
                  <img src="/assets/emoji/climber.png" alt="Rock Climber Emoji" className="inline-block align-top w-10 mr-4" />
                  Helping routesetters set routes.
                </h1>
              </Fade>
              <Fade delay={500}>
                <p className="h2 ml-14 mb-8">Peak is an app for indoor rock climbing gyms and their patrons.</p>
              </Fade>
              <Fade delay={1000}>
                <p className="ml-14 text-gray-600">
                  Indoor rock climbing gyms manage hundreds of routes across different disciplines, difficulty 
                  levels, and styles. Peak allows routesetters to digitize their setting process and collect 
                  feedback from their climbing community.
                </p>
              </Fade>
            </section>

            <section className="max-w-2xl mx-auto">
              <h2 className="h2 mb-4">
                Desktop... Mobile...
                Native... Web...
                Whatever.
              </h2>
              <p>
                Peak is built using <a href="https://capacitorjs.com/" target="_blank" rel="noreferrer">Capacitor</a>, 
                making it available on whatever platform best suites the user and their use case. 
                Browse the latest customer feedback at the front desk, organize your setting session 
                on a tablet, or update a climb with a mobile device. Frequent users can download the 
                app, while casual users can instantly access Peak simply using a web browser. 
              </p>
            </section>

            <section className="flex items-center space-x-12 my-24">

              <div className="w-4/6">
                <BrowserMockup language="javascript" darkMode={true}>
                  {useDataStoreItemSnippet}
                </BrowserMockup>
              </div>

              <div className="md:w-2/6">
                <h2 className="h2 mb-4">
                  Hooked Up
                </h2>
                <p className="mb-4">
                  The application structure is centered around custom React hooks. 
                  This allows individual screen components to focus solely on implementation details.
                </p>
                <Button use="a" href="https://github.com/nateweller/hooks" target="_blank" rel="norefferer">
                  View More on GitHub
                </Button>
              </div>

            </section>

            <section className="flex space-x-12 items-center my-24">
              <div className="md:w-2/6">
                <h2 className="h2 mb-4">
                  Powered by Laravel
                </h2>
                <p>
                  The application is powered by a PHP back-end written with Laravel 8. 
                  The server side defines the database structure and schemas, and translates 
                  business logic into a collection of simple API commands for the front-end 
                  application to consume.
                </p>
              </div>
              <div className="md:w-4/6">
                <BrowserMockup language="php" darkMode={ true }>
                  {gradingSystemControllerSnippet}
                </BrowserMockup>
              </div>
            </section>
        </Container>
        <nav className="bg-gray-900 p-4 text-center text-white">
          <Button dark use={Link} to="/">
            Take Me Home
          </Button>
        </nav>
      </>
    );
}

export default PeakPage;