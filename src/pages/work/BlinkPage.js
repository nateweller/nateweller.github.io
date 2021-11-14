import Fade from "react-reveal";

function BlinkPage() {
    return (
        <div>
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
                <h2 className="h2 mb-4">The Story</h2>
                <p className="mb-4">
                    I spent two and a half years helping CrowdBlink build and deploy their 
                    event ticketing and cashless payments platform. As their first employee,
                    I worked directly with the CTO and other executives to develop software
                    that would run in the high demand, high stake environments that make 
                    up the live event industry.
                </p>
                <p className="mb-4">
                    During my time at CrowdBlink, I had the opportunity to contribute to every 
                    aspect of the company and product. I might write new database structures and API commands in the morning, 
                    and then integrate the new features into our cross-platform mobile apps in the afternoon. I created 
                    interactive demos and marketing materials, lead a team of interns and junior developers, attended 
                    client meetings and sales calls, and worked on-site at events where we deployed our technology.
                </p>
            </section>

            <section className="max-w-2xl mx-auto my-16">
                <h2 className="h2 mb-4">The Tech</h2>
                <p className="mb-4">
                    The CrowdBlink platform aims to provide live events with technology 
                    to power all aspects of ticketing, payment, and customer engagement 
                    with encrypted QR and RFID technologies. Patrons can use their mobile 
                    device or RFID wristband to access, interact with, and purchase from 
                    the event.
                </p>
                <p className="mb-4">
                    The CrowdBlink platform was comprised of two mobile apps (one 
                    for event attendees, and one for staff), a web-based admin 
                    portal for event administration, and a central server powering 
                    it all.
                </p>
            </section>

            <section className="max-w-2xl mx-auto my-16">
                <h2 className="h2 mb-4">The Results</h2>
                <p className="mb-4">
                    When I joined CrowdBlink, we were deploying our technology at small theatre festivals and local pop-up events. 
                    We would go on to scale up our platform and power numerous large-scale events such as Taste of Edmonton 
                    and K-Days, and our software processed tens of millions of dollars in transactions and ticket sales for tens 
                    of thousands of users.
                </p>
                <p className="mb-4">
                    CrowdBlink was eventually acquired by a Toronto-based company in late 2019.
                </p>
            </section>

        </div>
    );
}

export default BlinkPage;