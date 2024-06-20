import Header from "../header"
import Background from "../background_image"
import Card from "../card"

const About = () => {

    return (
        <div>
            <div className="sticky z-50"><Header/></div>
            <Background/>
            <div className="flex flex-row w-full justify-center">
            <div className="absolute mt-28">
            <Card header="Page Under Development" body="***construction noises***"/>
            </div>
            </div>

        </div>

    )


}

export default About