function Badge({ children, className = "" }) {
    return (
        <div 
            className={
                `inline-flex items-center px-2.5 py-0.5 rounded-full
                text-sm font-semibold bg-white border-2 border-gray-900
                ${className}`
            }
        >
            { children }
        </div>
    )
}

export default Badge;