import { useEffect, useState } from "react";

function ImageFader(props) {
    const { images } = props;

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => setIndex(index < images.length - 1 ? index + 1 : 0), 2500);

        return () => clearInterval(interval);
    }, [index, images.length]);

    return (
        <div className="relative">
            {images.map((image, loopIndex) => 
                <img src={image} key={loopIndex} alt="" className={
                    `rounded-md transition-all
                    ${loopIndex === 0 ? 'static' : 'absolute top-0 left-0' } 
                    ${loopIndex > index ? 'opacity-0' : 'opacity-100'}`
                } />
            )}
        </div>
    );
}

export default ImageFader;