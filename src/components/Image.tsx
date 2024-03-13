export interface ImageProps {
    src: string,
    alt?: string,
    wrapperClass?: string,
    onClick?: (e) => void
    [x: string]: any
}
export const Image = (props: ImageProps) => {
    return <div className={["img-container", props.wrapperClass].join(" ")} onClick={props.onClick}>
        <img src={props.src} alt={props?.alt || ""} />
    </div>
}