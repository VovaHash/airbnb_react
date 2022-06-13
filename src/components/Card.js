

export default function Card(props) {
  
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT"
  } else if (props.location == "Online"){
    badgeText = "ONLINE"
  }
  
  return (
   
    <div className="card">
        { props.openSpots === 0 && <div className="card--badge">{badgeText}</div> }
        <img className="card--image" src={`./images/${props.img}`} />
        <h5 className="card--text">{'\u2B50'} {props.rating} <span className="grey">({props.reviewCount}) • {props.location}</span></h5>
        <h5 className="card--text">{props.title}</h5>
        <h5 className="card--text"><b>From ${props.price}</b>/ person</h5>
    </div>
  );
}
