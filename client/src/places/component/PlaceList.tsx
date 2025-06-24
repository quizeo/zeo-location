import "./PlaceList.css";
import Card from "../../shared/component/UIElements/Card";
import PlaceItem from "./PlaceItem";

interface PlaceListProps {
  items: any[];
}

const PlaceList = (props: PlaceListProps) => {
  if (props.items.length === 0) {
    return (
      <div className="center">
        <Card
          className="place-list "
          style={{ background: "#fff", padding: "2rem" }}
        >
          <h2>No places found. Maybe create one? </h2>
          <button>Share Place</button>
        </Card>
      </div>
    );
  }

  return (
    <ul className="place-list">
      {props.items.map((place) => (
        <PlaceItem
          key={place.id}
          id={place.id}
          image={place.imageUrl}
          description={place.description}
          address={place.address}
          creatorId={place.creator}
          coordinates={place.location}
          title={place.title}
        />
      ))}
    </ul>
  );
};

export default PlaceList;
