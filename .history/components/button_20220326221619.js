export default function Button(props) {
    return (
        <button>{props.text}
        <style jsx>{`
            button {

           
            color: ${props.color};
            width: ${props.width};
            background: ${props.background};
            border: 1px solid #c9c9c9;
            font-size: 18px;
            border-radius: 20px;
            height: 44px;
          
          }
            `}</style>
        </button>
    )
}