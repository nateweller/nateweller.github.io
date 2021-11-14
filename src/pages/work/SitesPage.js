import Fade from "react-reveal";
import BrowserMockup from "../../components/BrowserMockup";

function SitesPage() {
    return (
        <div>
            <section className="mt-20 mb-28">
                <Fade>
                    <h1 className="h1 mb-2">
                        <span className="mr-4">
                            🚀
                        </span>                  
                        100+ custom themes and plugins in production.
                    </h1>
                </Fade>
                <Fade delay={500}>
                    <p className="h2 ml-14">Over a decade of website design and development.</p>
                </Fade>
            </section>

            <section className="max-w-2xl mx-auto mt-28 mb-16">
                <h2 className="h2 mb-4">Nate Weller Design and Development</h2>
                <p className="mb-4">
                    I landed my first client in 2009, and launched their website in exchange for a whopping $100. 
                    They recommended a second customer my way, who knew a third, and so on. Soon after, 
                    I had formalized my business via a sole proprietership and was funding my way through 
                    post-secondary by developing WordPress sites. As my connections and experience grew, 
                    I started working with digital marketing agencies and other professionals in the space. 
                    Sometimes it feels like my entire career is just one big snowball effect of that 
                    first $100 website.
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
                    <p className="mb-4">
                        The Gutenberg editor has introduced a new world of possibilities in the realm
                        of theme design and modularization of site components. Instead of strict template
                        files and limited layout options, theme development now revolves around reusable 
                        blocks. When this is fully taken advantage of, the editor becomes an incredible 
                        page building tool.
                    </p>
                </div>
            </section>

            <section className="md:flex md:space-x-8 md:items-center">
                <div className="md:flex-1">
                    <h2 className="h2 mb-4">Automate It Away</h2>
                    <p className="mb-4">
                        While every website is unique, the basic structures are often the same. 
                        I use Node.js to write code-generating CLIs to automate the process of 
                        setting up new projects and generate registration functions for
                        custom blocks.
                    </p>
                    <p className="mb-4">
                        While working as a Senior Web Developer at Habit, I created "Habot", 
                        a CLI for generating custom component code. My intention with this tool 
                        was not only to automate away the time spent writing out long registration 
                        logic, but also to educate the user on the available options and settings 
                        surrounding the components that the tool was generating.
                    </p>
                    <p className="">
                        With a question/answer interface, Habot includes snippets of relevant 
                        documentation for each configuration question and always lists out 
                        all available inputs for multiple-choice questions. In this way, the 
                        developer learns the ins and outs of the block registration process 
                        without having to dig through the documentation or manually write 
                        out the code.
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