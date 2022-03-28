export default function Button(props) {
    return (
        <button>{props.text}
        <style jsx>{`
            button {

           
            color: ${props.color};
            width: ${props.width};
            background-color: ${props.background_color};
            border: 1px solid #c9c9c9;
         
          font-size: 18px; 
          }
            `}</style>
        </button>
    )
}