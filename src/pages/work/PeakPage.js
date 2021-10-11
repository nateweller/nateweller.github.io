import Fade from "react-reveal";
import BrowserMockup from "../../components/BrowserMockup";
import gradingSystemControllerSnippet from "../../snippets/gradingSystemControllerSnippet";
import useDataStoreItemSnippet from "../../snippets/useDataStoreItemSnippet";

function PeakPage() {
    return (
        <div>
            <section className="pt-20 pb-28">
              <Fade>
                <h1 className="h1 mb-1">
                  <span className="mr-3">🧗</span> Helping routesetters set routes.
                </h1>
              </Fade>
              <Fade delay={500}>
                <p className="h2 ml-14">Peak is an app for indoor rock climbing gyms and their patrons.</p>
              </Fade>
            </section>

            <section>
              <h2 className="h2 mb-4">
                Desktop... Mobile... Native... Web... Whatever.
              </h2>
              <p>
                Peak is built using <a href="https://capacitorjs.com/" target="_blank">Capacitor</a>, 
                making it available on whatever platform best suites the user. Access your gym's 
                routes via an internet browser, or install the application on your phone or computer.
              </p>
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
                <p>
                  The application structure is centered around custom React hooks. 
                  This allows individual screen components to focus solely on implementation details.
                </p>
              </div>

            </section>

            <section>
              <h2 className="h2 mb-4">
                Tailwind
              </h2>
            </section>

            <section>
              <h2 className="h2 mb-4">
                Laravel API
              </h2>

              <BrowserMockup language="php" darkMode={ true }>
                {gradingSystemControllerSnippet}
              </BrowserMockup>
            </section>
        </div>
    );
}

export default PeakPage;