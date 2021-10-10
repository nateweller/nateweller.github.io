function Button(props) {

    const {
        children,
        className = "",
        use: Use = "button",
        to
    } = props;

    const conditionalProps = {
        to
    };

    return (
        <Use 
            className={`
                inline-flex items-center px-4 py-2 border-2 border-gray-900 
                bg-white text-sm font-medium shadow-sm text-gray-900 
                focus:outline-none focus:ring-2 focus:ring-offset focus:ring-gray-900
                transform hover:scale-105 hover:shadow-md transition-all
                ${className}
            `}
            {...conditionalProps}
        >
            {children}
        </Use>
    );
}

export default Button;