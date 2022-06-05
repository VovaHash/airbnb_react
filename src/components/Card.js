

export default function Card(props) {
  return (
    <section>
        <h4 className="card--image_overlay">SOLD OUT</h4>
        <img className="card--image" src={props.img} />
        <h5 className="card--text">{'\u2B50'} {props.rating} <span className="grey">({props.reviewCount}) • {props.country}</span></h5>
        <h5 className="card--text">{props.title}</h5>
        <h5 className="card--text"><b>From ${props.price}</b>/ person</h5>
    </section>
  );
}
