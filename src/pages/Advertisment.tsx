import { images } from "../common/images"
import { Image } from "../components/Image"

export const Advertisment = (props: { type?: "verticalAd" | "horizontalAd" | "inTextAd" | "popupAd" }) => {
    const { type = "horizontalAd" } = props
 
    return <div className="ad-content">
        <Image src={images[type]} />
    </div>
}