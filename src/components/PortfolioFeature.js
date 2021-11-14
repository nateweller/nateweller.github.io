import { Link } from 'react-router-dom';

import BadgeList from './BadgeList';
import BrowserMockup from './BrowserMockup';
import Button from './Button';

function PortfolioFeature(props) {

    const {
        image = "",
        imageSide = "left",
        name = "Untitled Portfolio Item",
        badges = [],
        description = "",
        link = "",
        githubLink = "",
        className = "",
        url = ""
    } = props;

    const renderImageColumn = () => (
        <div className="flex-auto order-1 mb-4 md:flex-1 md:order-none md:mb-0">
            {(image
                ? <BrowserMockup url={url} darkMode={true}><img src={image} alt={name} key={image} className="w-full rounded-md" /></BrowserMockup>
                : <div className="border-8 border-gray-900 w-full h-96" />
            )}
        </div>
    );

    const renderContentColumn = () => (
        <div className="flex-auto order-2 md:flex-1 md:order-none">
            <div className="max-w-md">
                <h2 className="h2 mb-2">
                    {name}
                </h2>

                <BadgeList 
                    badges={badges} 
                    className="mb-2"
                />
                
                {(description &&
                    <p className="mb-6">
                        {description}
                    </p>
                )}

                {(link &&
                    <Button use={Link} to={link} className="mr-3">
                        View Project
                    </Button>
                )}

                {(githubLink && 
                    <Button use={"a"} href={githubLink}>
                        View Code
                    </Button>
                )}
            </div>
        </div>
    );

    return (
        <div className={`flex flex-wrap md:flex-nowrap md:items-center md:space-x-12 ${className}`}>
            {imageSide === "left" && renderImageColumn()}
            {renderContentColumn()}
            {imageSide !== "left" && renderImageColumn()}
        </div>
    );
}

export default PortfolioFeature;