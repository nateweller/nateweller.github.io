import Badge from "./Badge";

function BadgeList({ badges, className = "" }) {
    if (! badges || ! badges.length) return null;

    return (
        <div className={className}>
            { badges.map((badge, loopIndex) => {

                if (typeof badge === "string") {
                    return <Badge className="mr-2 mb-3" key={loopIndex}>{badge}</Badge>;
                }
                
                if (typeof badge === "object") {
                    return <Badge className="mr-2 mb-3" key={loopIndex} onClick={badge.onClick}>{badge.label}</Badge>;
                }

                return null;
            }) }
        </div>
    );
}

export default BadgeList;