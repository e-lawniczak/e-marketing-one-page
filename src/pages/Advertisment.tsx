import { images } from "../common/images"
import { Image } from "../components/Image"

export const Advertisment = (props) =>{
    return <div className="ad-content">
        <Image src={images.skyScraper} />
    </div>
}