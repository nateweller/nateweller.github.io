import Badge from "./Badge";

function BadgeList({ badges, className = "" }) {
    if (! badges || ! badges.length) return null;

    return (
        <div className={className}>
            { badges.map((badge, loopIndex) => <Badge className="mr-2 mb-2" key={loopIndex}>{badge}</Badge>)}
        </div>
    );
}

export default BadgeList;