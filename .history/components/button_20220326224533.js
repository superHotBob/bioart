export default function Button(props) {
  return (
    <button type={props.type}>
      {props.text}
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
        button:hover {
          color: ${props.color_hover};
          background: ${props.background_hover};
        }
        button:last-of-type {
            float: right;
        }
      `}</style>
    </button>
  );
}
