import Header from "../header"
import Background from "../background_image"

const Contact = () => {

    return (
        <div >
            <div className="sticky z-50"><Header/></div>
            <Background/>
            
            <div className="">
                <div className="flex flex-row justify-center space-x-4 py-8  absolute w-full h-3/4 mt-28">
                    <div>
                        <form name="contact" method="POST" data-netlify="true">
                            <div className="flex flex-row justify-center text-center space-x-4 pb-8">
                                <div className="w-full">
                                    <input className="appearance-none w-full bg-gray-200 pl-2 rounded-sm focus:bg-white" placeholder="first name"></input>
                                </div>
                            </div>
                            <div className="flex flex-row justify-center text-center space-x-4 pb-8">
                                <div className="w-full">
                                    <input className="appearance-none w-full bg-gray-200 pl-2 rounded-sm focus:bg-white" placeholder="last name"></input>
                                </div>
                            </div>
                            <div className="flex flex-row justify-center text-center space-x-4 pb-8">
                                <div className="w-full">
                                    <input className="appearance-none w-full bg-gray-200 pl-2 rounded-sm focus:bg-white" placeholder="email"></input>
                                </div>
                            </div>
                            <div className="flex flex-row justify-center text-center space-x-4 pb-8">
                                <div className="w-full">
                                    <input className="appearance-none w-full bg-gray-200 pl-2 rounded-sm focus:bg-white" placeholder="message"></input>
                                </div>
                            </div> 

                            <button type="submit" className="bg-white rounded-sm text-gray-400">Submit</button>

                        </form>
                    </div>
                </div>
            </div>

        </div>

    )


}

export default Contact