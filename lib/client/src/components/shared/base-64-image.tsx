export interface Base64ImageProps {
    src: string
}

export const Base64Image = (props: Base64ImageProps): JSX.Element => {
    const { src } = props

    const styles: React.CSSProperties = {
        height: "60px",
    }

    return (
        <img src={src} style={styles}/>
    )
}
