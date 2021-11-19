import Fade from "react-reveal/Fade";
import Container from "../../components/Container";
import svgPermittedUserTypeCyclingSnippet from "../../snippets/svgPermittedUserTypeCyclingSnippet";
import BrowserMockup from "../../components/BrowserMockup";
import ImageFader from "../../components/ImageFader";

function TrailsPage() {
    return (
        <Container>
            <section className="mt-20 mb-28 max-w-2xl">
              <Fade>
                <h1 className="h1 mb-4">
                  <span className="mr-3">🚧</span> Making sense of making signs.
                </h1>
              </Fade>
              <Fade delay={500}>
                <p className="h2 md:ml-14">
                  The BC Trails Signage Generator allows anyone to create a print-ready, 
                  standards-compliant sign graphic.
                </p>
              </Fade>
            </section>

            <section className="max-w-2xl mx-auto mt-28 mb-16">
                <h2 className="h2 mb-4">The Problem</h2>
                <p className="mb-16">
                  Recreation Sites and Trails BC (RSTBC) works with a multitude of stakeholders 
                  across the province surrounding the production of trail signs.
                
                  Creating these signs with traditional graphic design software, and then manually 
                  validating that they meet the standardized formatting, was a lengthy 
                  and sometimes error-prone process.
                </p>

                <div className="mb-16">
                  <BrowserMockup darkMode={true}>
                    <ImageFader 
                      images={[
                        "/trails-1.jpg", 
                        "/trails-2.jpg",
                        "/trails-3.jpg",
                        "/trails-4.jpg",
                        "/trails-5.jpg",
                        "/trails-6.jpg",
                        "/trails-7.jpg",
                        "/trails-8.jpg",
                        "/trails-9.jpg"
                      ]} 
                    />
                  </BrowserMockup>
                </div>

                <h2 className="h2 mb-4">The Solution</h2>
                <p className="mb-4">
                  A web application that collects information from the user regarding
                  the specifications of their required sign, and generates a print-ready
                  SVG file based on their input.
                </p>
                <p>
                  This application removes the skill barrier to design these signs, and
                  simultaniously ensures that the end result is standards compliant.
                </p>
            </section>

            <section className="my-16 max-w-2xl mx-auto lg:flex lg:space-x-12 lg:my-24 lg:max-w-none">
              <div className="mb-16 lg:flex-1 lg:mb-0">
                <h2 className="h2 mb-4">Questionnaire-Style</h2>
                <p>
                  The application determines the sign specification by running the user
                  through a short questionnaire. This simple interface ensures that 
                  all required data is input while also making it as simple as possible 
                  for the user.
                </p>
              </div>

              <div className="mb-16 lg:flex-1 lg:mb-0">
                <h2 className="h2 mb-4">Live Preview</h2>
                <p>
                  Thanks to the reactive nature of the application framework, and 
                  use of the web-friendly SVG format, a live preview can be shown as 
                  the user answers each question.
                </p>
              </div>

              <div className="lg:flex-1">
                <h2 className="h2 mb-4">Highly Compatible Output</h2>
                <p>
                  All iconography and assorted sign components were simplified down to
                  the most basic paths and shapes possible. This ensures compatibilty 
                  with the wide array of software used at print shops across the province. 
                </p>
              </div>

            </section>


            <section className="max-w-2xl mx-auto mt-24 mb-16">
            
              <div className="text-xs mb-16">
                <BrowserMockup darkMode={true} language="javascript" url="SVGPermittedUserTypeCycling.js">
                  {svgPermittedUserTypeCyclingSnippet}
                </BrowserMockup>
                <p className="mt-2">
                  Each individual icon was converted into a simple functional component.
                </p>
              </div>

              <h2 className="h2 mb-4">
                The Implementation
              </h2>
              <p>
                This web application was built with React and Redux. The state-based 
                render cycle of React was perfect for this application - as the user 
                enters their sign specification, an SVG is generated live on the screen 
                via JSX. When the sign is complete, the generated SVG can be downloaded 
                and sent to a print shop.
              </p>
            </section>

            <section className="max-w-2xl mx-auto my-16">
              <h2 className="h2 mb-4">
                The Results
              </h2>
              <p className="mb-4">
                The finished application provides a simple, yet powerful tool for 
                generating trail signage files without any technical knowledge, 
                access to expensive graphic design software, or the need to 
                manually reference any specifications.
              </p>
              <p>
                The resulting SVG files are highly compatible with the wide variety
                of vector-based software used at print shops across the province, 
                and are gaurunteed to meet the standards of RSTBC.
              </p>
            </section>
            
        </Container>
    );
}

export default TrailsPage;