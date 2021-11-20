import { Link } from "react-router-dom";
import Fade from "react-reveal";
import Container from "../../components/Container";
import Button from "../../components/Button";

function BlinkPage() {
    return (
        <>
            <Container>
                <section className="mt-28 mb-28">
                    <Fade>
                        <h1 className="h1 mb-1">
                            <span className="mr-4">
                                🍺
                            </span>                  
                            Highly critical transactions.
                        </h1>
                    </Fade>
                    <Fade delay={500}>
                        <p className="h2 md:ml-14">Event ticketing and cashless payment technology for festivals, concerts, and live events.</p>
                    </Fade>
                </section>

                <section className="max-w-2xl mx-auto my-16">
                    <img src="/concert.jpg" alt="" className="w-full h-60 md:h-96 object-cover rounded-md mb-8" />
                    <h2 className="h2 mb-4">The Story</h2>
                    <p className="mb-4">
                        I spent two and a half years helping CrowdBlink build and deploy their 
                        event ticketing and cashless payments platform. As their first employee,
                        I worked directly with the CTO to develop software that would run in the 
                        high demand, high stake environments that make up the live event industry.
                    </p>
                    <p className="mb-4">
                        During my time at CrowdBlink, I had the opportunity to contribute to every 
                        aspect of the company and product. 
                        The majority of my time was spent on the full-stack development of the platform, adding 
                        new features and refactoring existing code. This included 
                        designing the optimal database schemas to support these features, then writing  
                        the related MVC components on the server side and implementing those in API commands, 
                        and then finally creating the user interfaces for interacting with these features 
                        via the platform's web portal and mobile applications.
                    </p>
                    <p className="mb-4">
                        I also  created interactive demos for marketing purposes, lead a team of interns and junior developers, attended 
                        client meetings and sales calls, and worked on-site at events where we deployed our technology. 
                    </p>
                </section>

                <section className="max-w-2xl mx-auto my-16">
                    <img src="/taste-of-edmonton.jpg" alt="" className="w-full h-60 md:h-96 object-cover rounded-md mb-8" />
                    <h2 className="h2 mb-4">The Tech</h2>
                    <p className="mb-4">
                        The CrowdBlink platform aims to provide live events with technology 
                        to power all aspects of ticketing, payment, and customer engagement 
                        via encrypted QR and RFID technologies. Patrons can use their 
                        mobile device or RFID wristband to access, interact with, and purchase from 
                        the events that they attend.
                    </p>
                    <p className="mb-4">
                        The CrowdBlink platform was comprised of two mobile apps (one 
                        for event attendees, and one for staff and vendors), a web-based admin 
                        portal for event administration, and a central server powering 
                        it all.
                    </p>
                    <p>
                        CrowdBlink's applications weren't just built for phones; we used a variety 
                        of devices to fully integrate into the event space. We ran our software on 
                        dual-screen Android kiosks and
                        {' '}
                        <a 
                            className="link" 
                            href="https://www.ingenico.ca/smart-terminals/payment-terminals/telium-tetra-terminals/desk-5000.html" 
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            directly on payment terminals
                        </a>
                        . We integrated with an assortment of external hardware, such as receipt 
                        and ticket printers, cash boxes, and QR/RFID scanners.
                    </p>
                </section>

                <section className="max-w-2xl mx-auto my-16">
                    <h2 className="h2 mb-4">The Results</h2>
                    <p className="mb-4">
                        When I joined CrowdBlink, we were deploying our technology at small theatre festivals and local pop-up events. 
                        Over the next two years, we would go on to scale up our platform and power numerous large-scale events such as 
                        {' '}
                        <a className="link" href="https://tasteofedm.ca/" target="_blank" rel="noopener noreferrer">
                            Taste of Edmonton
                        </a> 
                        {' '}
                        and 
                        {' '}
                        <a className="link" href="https://k-days.com/" target="_blank" rel="noopener noreferrer">
                            K-Days
                        </a>
                        , and our software processed tens of millions of dollars in transactions and ticket sales for tens 
                        of thousands of users.
                    </p>
                    <p className="mb-4">
                        CrowdBlink was eventually acquired by a Toronto-based company in late 2019.
                    </p>
                </section>

            </Container>

            <nav className="bg-gray-900 p-4 text-center text-white">
                <Button dark use={Link} to="/work/sites">
                    Next Up: WordPress Development
                </Button>
            </nav>
        </>
    );
}

export default BlinkPage;