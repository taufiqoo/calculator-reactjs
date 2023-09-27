export default function ButtonNumber({ id, text, onClick }) {
  return (
    <button className="number" id={id} onClick={onClick}>
      {text}
    </button>
  );
}