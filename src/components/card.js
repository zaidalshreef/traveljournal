export default function Card(props) {
  return (
    <div className="card">
      <div className="card-image">
        <img src={props.imageUrl} alt={props.title} />
      </div>
      <div className="card-content">
        <div className="card-location">
          <img className="map-icon" src="../map.png" alt="location" />
          <span className="country-name">{props.location}</span>
          <a href={props.googleMapsUrl} className="country-location" target="_blank" rel="noreferrer">
            View on Google Maps
          </a>
        </div>
        <div className="card-title">
          <h1>{props.title}</h1>
        </div>
        <div className="card-date">
          <span className="start-date">{props.startDate} - </span>
          <span className="end-date">{props.endDate}</span>
        </div>
        <div className="card-description">
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
}
