import Header from "../header"
import Background from "../background_image"

const About = () => {

    return (
        <div >
            <div className="sticky z-50"><Header/></div>
            <Background/>
            
            <div className="flex flex-col justify-center text-white z-30 absolute  w-2/3 h-screen space-y-36">
                <div className="space-y-36 w-1/2 self-center">
                    <div className="self-center text-3xl">
                        Something About Me
                        <div className="text-sm">
                          
                        </div>
                    </div>
                    <div className="self-center text-3xl">
                        Something Else About Me
                        <div className="text-sm">
                           
                        </div>
                    </div>
                    <div className="self-center text-3xl">
                        Holy Cow... Is this a third thing about me?? Yes, yes it is. 
                        <div className="text-sm">
                           
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )


}

export default About