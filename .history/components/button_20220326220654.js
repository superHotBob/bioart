export default function Button(props) {
    return (
        <button>{props.text}
        <styles jsx>
            {`
            color: ${props.color};
            width: ${props.width};
            background-color: ${props.background-color};
            `}
        </styles>
        </button>
    )
}