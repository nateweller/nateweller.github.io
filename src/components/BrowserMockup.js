function BrowserMockup(props) {
    const { 
        children,
        url = "",
        darkMode = false
    } = props;

    return (
        <div className={`border-4 rounded-lg shadow-sm ${(darkMode ? "bg-gray-800 border-gray-800" : "bg-gray-200 border-gray-200")}`}>
            <div className="flex items-center h-8 border-b-4 border-gray-800">
                <div className="flex w-1/4 items-center pl-1">
                    <div className={`h-3 w-3 mr-2 rounded-full ${darkMode ? "bg-gray-600" : "bg-gray-300"}`} />
                    <div className={`h-3 w-3 mr-2 rounded-full ${darkMode ? "bg-gray-600" : "bg-gray-300"}`} />
                    <div className={`h-3 w-3 rounded-full ${darkMode ? "bg-gray-600" : "bg-gray-300"}`} />
                </div>
                <div className="w-1/2">
                    <div className={`flex items-center rounded-lg w-full h-6 text-xs pl-2 text-gray-400 ${darkMode ? "bg-gray-600 text-gray-900" : "bg-gray-300"}`}>
                        {url}
                    </div>
                </div>
                <div className="w-1/4" />
            </div>
            {children}
        </div>
    );
} 

export default BrowserMockup;