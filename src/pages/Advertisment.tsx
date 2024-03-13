import { images } from "../common/images"
import { Image } from "../components/Image"

export const Advertisement = (props: { isFixed?: boolean, type?: "main" | "verticalAd" | "horizontalAd" | "inTextAd" | "popupAd" | "noAd" }) => {
    const { type = "horizontalAd", isFixed = false } = props

    return <div className={["ad-content", isFixed ? "fixed" : ""].join(" ")}>
        {type != "noAd" &&
            <Image src={images[type]} />
        }
    </div>
}