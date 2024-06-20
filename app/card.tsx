import React from "react"

// @ts-ignore
const Card = ({header , body}) => {

    return (
        <div className="flex flex-col justify-center items-center py-8 w-full h-2/3">
            <div className="text-white text-4xl pb-4 font-bold"> {header} </div>
                <div className="bg-blue-900 shadow-2xl shadow-blue-300 p-6 rounded-2xl w-full min-w-[300px] text-white">{body}</div>

        </div>
        
    )
}

export default Card