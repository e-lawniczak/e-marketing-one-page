import { images } from "../common/images"
import { Image } from "../components/Image"

export const Advertisment = (props: { type?: "verticalAd" | "horizontalAd" | "inTextAd" | "popupAd" | "noAd" }) => {
    const { type = "horizontalAd" } = props

    return <div className="ad-content">
        {type != "noAd" &&
            <Image src={images[type]} />
        }
    </div>
}