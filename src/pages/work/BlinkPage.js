import Fade from "react-reveal";

function BlinkPage() {
    return (
        <div>
            <section className="pt-20 pb-28">
                <Fade>
                    <h1 className="h1 mb-1">
                        <span className="mr-4">
                            🍺
                        </span>                  
                        Highly critical transactions.
                    </h1>
                </Fade>
                <Fade delay={500}>
                    <p className="h2 ml-14">Event ticketing and payment technology for festivals and live events.</p>
                </Fade>
            </section>

            <section>
                <h2 className="h2 mb-4">The Highlights</h2>
                <p className="mb-4">
                    The CrowdBlink platform was comprised of two mobile apps (one 
                    for event attendees, and one for staff) and a web-based admin 
                    portal for event administration.
                </p>
                <p>
                    Ticketing, point of sale, access control, patron engagement.
                </p>
            </section>
        </div>
    );
}

export default BlinkPage;