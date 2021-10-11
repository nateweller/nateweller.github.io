import Fade from "react-reveal";
import BrowserMockup from "../../components/BrowserMockup";

function SitesPage() {
    return (
        <div>
            <section className="pt-20 pb-28">
                <Fade>
                    <h1 className="h1 mb-1">
                        <span className="mr-4">
                            🚀
                        </span>                  
                        100+ custom themes and plugins in production.
                    </h1>
                </Fade>
                <Fade delay={500}>
                    <p className="h2 ml-14">WordPress themes and plugins, oh my!</p>
                </Fade>
            </section>

            <section>
                <h2 className="h2 mb-4">Nate Weller Design and Development</h2>
                <p className="mb-4">
                    As soon as I learned HTML and CSS in 2009, I began to advertise my
                    services as a web developer on local classifieds sites. I sold my 
                    first site for $100, and then soon found a second customer. Then a third, 
                    a fourth, and so on, until eventually I had a local business license and was 
                    sending out invoices with GST numbers on the bottom.
                </p>
                <p>
                    Freelance web development has been a central part of my career from the very beginning. 
                </p>
            </section>

            <section className="md:flex md:space-x-8 md:items-center my-24">
                <div className="md:flex-1">
                    <BrowserMockup darkMode={true}>
                        <iframe 
                            width="560" 
                            height="315" 
                            src="https://www.youtube.com/embed/LtUyoASP0Wk?controls=0&amp;showinfo=0&amp;modestbranding=1&amp;autohide=1" 
                            title="Video: Custom Gutenberg Block Demo" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen
                            className="w-full h-auto"
                            style={{ aspectRatio: '1.83' }}
                        />
                    </BrowserMockup>
                </div>
                <div className="md:flex-1">
                    <h2 className="h2 mb-4">Modern WordPress Development</h2>
                    <p>
                        Block-based themes and whatever
                    </p>
                </div>
            </section>

            <section className="flex">
                <div className="md:flex-1">
                    <h2 className="h2 mb-4">Automation Nation</h2>
                    <p>
                        While every website is unique, the basic structures are often the same. 
                        I use Node.js to write code-generating CLIs to automate the process of 
                        setting up new projects and generate registration functions for
                        custom blocks.
                    </p>
                </div>
                <div className="md:flex-1">
                    <BrowserMockup darkMode={true}>
                        <img src="/habot.jpg" alt="Node.js CLI Demo" />
                    </BrowserMockup>
                </div>
            </section>
        </div>
    );
}

export default SitesPage;