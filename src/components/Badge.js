function Badge(props) {

    const {
        children = null,
        className = "",
        onClick = null
    } = props;

    return (
        <div 
            className={
                `inline-flex items-center px-2.5 py-0.5 rounded-full
                text-sm font-semibold bg-white border-2 border-gray-900                 
                ${onClick ? 'transition-all hover:bg-gray-900 hover:text-white cursor-pointer' : ''}
                ${className}`
            }
            onClick={onClick}
        >
            { children }
        </div>
    )
}

export default Badge;