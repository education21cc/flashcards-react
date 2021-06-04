interface Props {
  right: () => void
  left: () => void
}
const CardButtons = ({
  right,
  left,
}: Props) => {

  return (
    <>
    <button onClick={left}>L</button>
    <button onClick={right}>R</button>
    </>
  );
}

export default CardButtons;