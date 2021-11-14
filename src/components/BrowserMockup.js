import { useState } from "react";
import Jello from "react-reveal/Jello";
import Fade from "react-reveal/Fade";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

function BrowserMockup(props) {
    const { 
        children,
        url = "",
        darkMode = false,
        language = null,
        key = ""
    } = props;

    const [wiggle, setWiggle] = useState(false);

    const renderChildren = () => {
        if (! language) return children;

        return (
            <div className="max-h-96 overflow-auto text-xs">
                <SyntaxHighlighter language={language} style={atomOneDark} customStyle={{ backgroundColor: '#1f2937' }}>
                    {children}
                </SyntaxHighlighter>
            </div> 
        );
    }

    return (
        <DragDropContext onDragEnd={() => {}}>
            <Droppable droppableId={`droppable-${key}`}>
                {(provided, snapshot) => (
                    <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                    >
                        <Draggable key={key} draggableId={`draggable-${key}`} index={0}>
                            {(provided, snapshot) => (
                                <div
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    
                                >
                                    <Fade up distance="100px">
                                        <Jello spy={wiggle} duration={1500}>
                                            <div className={`border-4 rounded-lg shadow-sm ${(darkMode ? "bg-gray-800 border-gray-800" : "bg-gray-200 border-gray-200")}`}>
                                                <div {...provided.dragHandleProps} className={`flex items-center h-8 border-b-4 ${(darkMode ? "border-gray-800" : "border-gray-200")}`}>
                                                    <div className="flex w-1/4 items-center pl-1">
                                                        <div 
                                                            onClick={() => setWiggle(!wiggle)}
                                                            className={
                                                                `h-3 w-3 mr-2 rounded-full hover:bg-red-500 cursor-pointer 
                                                                ${darkMode ? "bg-gray-600" : "bg-gray-300"}`
                                                            } 
                                                        />
                                                        <div 
                                                            onClick={() => setWiggle(!wiggle)} 
                                                            className={
                                                                `h-3 w-3 mr-2 rounded-full hover:bg-yellow-300 cursor-pointer 
                                                                ${darkMode ? "bg-gray-600" : "bg-gray-300"}`
                                                            }
                                                        />
                                                        <div 
                                                            onClick={() => setWiggle(!wiggle)}
                                                            className={
                                                                `h-3 w-3 rounded-full hover:bg-green-500 cursor-pointer 
                                                                ${darkMode ? "bg-gray-600" : "bg-gray-300"}`
                                                            } 
                                                        />
                                                    </div>
                                                    <div className="w-1/2">
                                                        {(language === null) && (
                                                            <div className={`flex items-center rounded-lg w-full h-6 text-xs pl-2 text-gray-400 ${darkMode ? "bg-gray-600 text-gray-900" : "bg-gray-300"}`}>
                                                                {url}
                                                            </div>
                                                        )}
                                                        {(language && url) && <span className="block text-center text-xs text-gray-500">{url}</span>}
                                                    </div>
                                                    <div className="w-1/4" />
                                                </div>
                                                {renderChildren()}
                                            </div>
                                        </Jello>
                                    </Fade>
                                </div>
                            )}
                        </Draggable>
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    );
} 

export default BrowserMockup;