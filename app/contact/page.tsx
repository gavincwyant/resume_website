import Header from "../header"
import Background from "../background_image"

const Contact = () => {

    return (
        <div >
            <div className="sticky z-50"><Header/></div>
            <Background/>
            
            <div className="flex flex-col justify-center text-white z-30 absolute  w-2/3 h-screen space-y-36">
                <div className="space-y-36 w-1/2 self-center">
                    <div className="self-center text-3xl">
                        YouTubeNoShorts 
                        <div className="text-sm">
                            - Python & OAuth
                        </div>
                    </div>
                    <div className="self-center text-3xl">
                        FG Website 
                        <div className="text-sm">
                            - Nextjs & Strapi
                        </div>
                    </div>
                    <div className="self-center text-3xl">
                        Workout Generator 
                        <div className="text-sm">
                            - Java
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )


}

export default Contact