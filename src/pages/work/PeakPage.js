import Fade from "react-reveal";
import BrowserMockup from "../../components/BrowserMockup";
import Button from "../../components/Button";
import gradingSystemControllerSnippet from "../../snippets/gradingSystemControllerSnippet";
import useDataStoreItemSnippet from "../../snippets/useDataStoreItemSnippet";

function PeakPage() {
    return (
        <div>
            <section className="pt-20 pb-28 max-w-3xl">
              <Fade>
                <h1 className="h1 mb-1">
                  <span className="mr-3">🧗</span> Helping routesetters set routes.
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

            <section className="flex">
              <div className="w-2/6">
                <h2 className="h2 mb-4">
                  Desktop... Mobile... <br />
                  Native... Web... <br />
                  Whatever.
                </h2>
                <p>
                  Peak is built using <a href="https://capacitorjs.com/" target="_blank" rel="noreferrer">Capacitor</a>, 
                  making it available on whatever platform best suites the user and their use case. 
                  Browse the latest customer feedback at the front desk, organize your setting session 
                  on a tablet, or update a climb with a mobile device. Frequent users can download the 
                  app, while casual users can instantly access Peak simply using a web browser. 
                </p>
              </div>
              <div className="w-4/6">
              </div>
            </section>

            <section className="flex items-center space-x-6 my-16">

              <div className="md:flex-1 w-4/6">
                <BrowserMockup language="javascript" darkMode={true}>
                  {useDataStoreItemSnippet}
                </BrowserMockup>
              </div>

              <div className="md:flex-1 md:w-2/6">
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

            <section>
              <h2 className="h2 mb-4">
                Tailwind
              </h2>
            </section>

            <section className="flex">
              <div className="md:w-2/6">
                <h2 className="h2 mb-4">
                  Laravel API
                </h2>
              </div>
              <div className="md:w-4/6">
                <BrowserMockup language="php" darkMode={ true }>
                  {gradingSystemControllerSnippet}
                </BrowserMockup>
              </div>
            </section>
        </div>
    );
}

export default PeakPage;