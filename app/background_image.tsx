import Image from "next/image"
import background from "../public/website_background.jpg"


const Background = () => {
    return (
        <main>
            <Image alt="background" src={background} className="w-screen h-screen fixed" priority></Image>
        </main>
    )
}

export default Background