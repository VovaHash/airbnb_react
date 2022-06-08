

export default function Card(props) {

  return (
   
    <section className="card">
        {/* {!props.openSpots && <p className="card--image_overlay">SOLD OUT</p>} */}
        <img className="card--image" src={`./images/${props.img}`} />
        <h5 className="card--text">{'\u2B50'} {props.rating} <span className="grey">({props.reviewCount}) • {props.location}</span></h5>
        <h5 className="card--text">{props.title}</h5>
        <h5 className="card--text"><b>From ${props.price}</b>/ person</h5>
    </section>
  );
}
