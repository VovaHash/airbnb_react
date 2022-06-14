export default function Card(props) {
  let badgeText; // initially its undefined-false
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";s
  } else if (props.location == "Online") {
    badgeText = "ONLINE";
  }

  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img className="card--image" src={`./images/${props.coverImg}`} />
      <h5 className="card--text">
        {"\u2B50"} {props.stats.rating}{" "}
        <span className="grey">
          ({props.stats.reviewCount}) • {props.location}
        </span>
      </h5>
      <h5 className="card--text">{props.title}</h5>
      <h5 className="card--text">
        <b>From ${props.price}</b>/ person
      </h5>
    </div>
  );
}
