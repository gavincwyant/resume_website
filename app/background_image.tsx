import Image from "next/image"
import background from "./website_background.jpg"


const Background = () => {
    return (
        <main>
            <Image alt="background" src={background} className="w-screen h-screen fixed"></Image>
        </main>
    )
}

export default Background