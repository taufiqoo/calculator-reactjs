export default function ButtonOperator({ id, text, onClick }) {
    return (
      <button className="operator" id={id} onClick={onClick}>
        {text}
      </button>
    );
  }