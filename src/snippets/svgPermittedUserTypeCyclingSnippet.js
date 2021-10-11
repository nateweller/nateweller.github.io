const svgPermittedUserTypeCyclingSnippet = 
`function SVGPermittedUserTypeCycling(props) {

    const {
      width = 80,
      x = 0,
      y = 0,
      isRestricted = false
    } = props;

    const aspectRatio = 1;

    return (
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 175.79 175.79"
            width={ width } 
            height={ width * aspectRatio } 
            x={ x } 
            y={ y }
        >
            <path d="M168.2,0H7.6A7.6,7.6,0,0,0,0,7.6H0V168.19a7.6,7.6,0,0,0,7.6,7.6H168.2a7.61,7.61,0,0,0,7.59-7.6V7.6A7.59,7.59,0,0,0,168.21,0h0" fill="#fff"/>
            <path d="M88.2,8.17A80.17,80.17,0,1,1,8,88.29,80.14,80.14,0,0,1,88.2,8.17Z" fill={ isRestricted ? '#d9261c' : '#009140' } fillRule="evenodd"/>
            <path d="M88.2,20.22A68.12,68.12,0,1,1,20,88.29,68.13,68.13,0,0,1,88.2,20.22Z" fill="#fff" fillRule="evenodd"/>
            <path d="M52.41,90c12.4,0,22.42,9.85,22.42,21.81s-10,21.81-22.42,21.81-22.34-9.76-22.34-21.81S40.09,90,52.41,90Z" fill="#1f1a17" fillRule="evenodd"/>
            <path d="M52.41,94.27c9.93,0,18,7.91,18,17.5s-8.1,17.5-18,17.5a17.5,17.5,0,1,1,0-35Z" fill="#fff" fillRule="evenodd"/>
            <path d="M52.32,109.05c-6.6,1.93,1.58,8.44,2.46,2.11A42.26,42.26,0,0,0,67.45,92.51l21.28,23.4c.18,2.46.62,3.78,2.82,4.13l1.31,5.36-.88-.08-.17,2.2,5.28.26.17-2.2-1.84-.09-1.15-6.77,28.94-4.66c4.57.26,4.66-3.34,1.85-4.75L106.32,85.39l.7-3.08c1.94-1.32,5.9-2.47,6.34-3.17,1.4-3.08-.09-2.81-2.2-2.64a98.56,98.56,0,0,1-16,1.06c-1.32.53-.7,1.58.79,2.28a29.72,29.72,0,0,0,6.78,2.2l-.36,1.5L71.05,83,73,77.91c.79-1.58,1.32-2.64-1-3.52a1.63,1.63,0,0,1,1-2.55l8,.44.26-3.08-9.5-.53c-1,.18-1.4.8-2,1.32l-2.29,1.85c-.88,2.2.44,2.38.88,2.55,1.41,1.41.62,1.85.27,3.61L61.29,97.44a73.81,73.81,0,0,1-4.49,7.3Z" fill="#1f1a17" fillRule="evenodd"/>
            <path d="M124.79,90a22.54,22.54,0,0,0-15.52,6.17L112,99.6a17.7,17.7,0,1,1,12.78,29.67A17.69,17.69,0,0,1,107,112.61l-4.47.7a22.15,22.15,0,0,0,22.28,20.27c12.31,0,22.43-9.76,22.43-21.81S137.1,90,124.79,90Z" fill="#1f1a17" fillRule="evenodd"/>
            <path d="M107,112.61l13.59-2.16L112,99.6a17.27,17.27,0,0,0-5.07,12.17C106.94,112.05,107,112.33,107,112.61Z" fill="#fff" fillRule="evenodd"/>
            <path d="M109.27,96.13l-4.8-6.08-8.88,24.36,6.92-1.1c0-.51-.06-1-.06-1.54A21.52,21.52,0,0,1,109.27,96.13Z" fill="#fff" fillRule="evenodd"/>
            <polygon points="70.17 86.88 69.2 88.64 89.87 111.07 89.96 108.87 88.38 108.69 88.64 106.58 92.78 106.76 92.78 108.96 91.9 109.05 91.81 111.07 92.78 110.89 101.13 87.5 70.17 86.88" fill="#fff" fillRule="evenodd"/>
            <path d="M80.55,85.74l8.8,20.14c3.16,4.84,11.43,2,8.7-4.31L91,85.74l-1.41-3.52,18.21-7.48c4.48-2.2,6-2.2,4.66-7.21l-4.14-21c-1.67-7.39-6.94-9.41-13.28-3.25L74.39,63c-4,3.6.88,10,5.55,6.24L93.57,56.62l5.1,11-17,7.3c-4.31,2.2-3.69,4.75-2.11,8.79Z" fill="#1f1a17" fillRule="evenodd"/>
            <path d="M97.79,24.43a7.08,7.08,0,0,1,5.89,7.83A6.93,6.93,0,0,1,90,30.33,7,7,0,0,1,97.79,24.43Z" fill="#1f1a17" fillRule="evenodd"/>
            { isRestricted && <rect x="17.28" y="83.04" width="143.4" height="12.94" transform="translate(89.36 -36.7) rotate(45)" fill="#d9261c"/> }
        </svg>
    )
}

export default SVGPermittedUserTypeCycling;`;

export default svgPermittedUserTypeCyclingSnippet;