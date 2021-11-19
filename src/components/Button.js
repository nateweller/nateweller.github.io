function Button(props) {

    const {
        children,
        className = "",
        use: Use = "button",
        to,
        onClick,
        href,
        target,
        rel,
        dark
    } = props;

    const conditionalProps = {
        to,
        onClick,
        href,
        target,
        rel
    };

    const themeClassName = dark !== undefined ? "bg-dark text-white border-white focus:ring-white" : "bg-white text-gray-900 border-gray-900 focus:ring-gray-900";

    return (
        <Use 
            className={`
                inline-flex items-center px-4 py-2 border-2 
                text-sm font-medium shadow-sm
                focus:outline-none focus:ring-2 focus:ring-offset
                transform hover:scale-105 hover:shadow-md transition-all 
                ${themeClassName}
                ${className}
            `}
            {...conditionalProps}
        >
            {children}
        </Use>
    );
}

export default Button;