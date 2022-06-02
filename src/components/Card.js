import CardImage from "../images/cardimage.png";

export default function Card() {
  return (
    <section>
        <h4 className="card--image_overlay">SOLD OUT</h4>
        <img className="card--image" src={CardImage} />
        <h5 className="card--text">{'\u2B50'} 5.0  USA</h5>
        <h5 className="card--text">Life lessons with Katie Zaferes</h5>
        <h5 className="card--text"><b>From $136</b>/ person</h5>
    </section>
  );
}
