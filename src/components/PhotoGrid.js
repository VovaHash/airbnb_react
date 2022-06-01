import Photos from "../images/photo-grid.png";

export default function PhotoGrid() {
  return (
    <section className="photogrid--wrapper">
      <img className="photogrid--photos" src={Photos} />
      <h1 className="photogrid--header">Online Experiences</h1>
      <p className="photogrid--text">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </section>
  );
}
