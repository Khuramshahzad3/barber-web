import "./CardsDataStyles.css";

function CardsData(props) {
  return (
    <>
      <div className="pcards">
        <div className="pimage">
          <img alt="image" src={props.image} />
        </div>
        <h4 className="font-bold">{props.heading}</h4>
        <p>{props.text}</p>
      </div>
    </>
  );
}
export default CardsData;
