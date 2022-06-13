

export default function Card(props) {
  
  let badgeText;
  if (props.item.openSpots === 0) {
    badgeText = "SOLD OUT"
  } else if (props.item.location == "Online"){
    badgeText = "ONLINE"
  }

  return (
   
    <div className="card">
        { badgeText && <div className="card--badge">{badgeText}</div> }
        <img className="card--image" src={`./images/${props.item.coverImg}`} />
        <h5 className="card--text">{'\u2B50'} {props.item.stats.rating} <span className="grey">({props.item.stats.reviewCount}) • {props.item.location}</span></h5>
        <h5 className="card--text">{props.item.title}</h5>
        <h5 className="card--text"><b>From ${props.item.price}</b>/ person</h5>
    </div>
  );
}
