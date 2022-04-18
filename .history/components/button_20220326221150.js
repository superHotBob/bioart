export default function Button(props) {
    return (
        <button>{props.text}
        <styles jsx>
            {`
            color: ${props.color};
            width: ${props.width};
            background-color: ${props.background_color};
            border: 1px solid #c9c9c9;
          color: #fff;
          font-size: 18px;
            `}
        </styles>
        </button>
    )
}