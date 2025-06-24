import { useParams } from "react-router-dom";
import PlaceList from "../component/PlaceList";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Empire State Building",
    desciption: "One of the most famous skyscrapers in the world.",
    imageUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AC9h4noQiRVYk2B__RezumTT1QhZpbELkkvPtQ7_xTiJu7u90oB21EjI54q6MJcVGFFE3XgezazEAKDwPZaz-9riEnHm2SqRBebidi5XokEi9TX6WbODGSVWubxgoDnwTK7mxmYW-HaD=s1360-w1360-h1020",
    address: "20 W 34th St, New York, NY 10001, USA",
    location: {
      lat: 40.748817,
      lng: -73.985428,
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "Statue of Liberty",
    desciption: "A colossal neoclassical sculpture on Liberty Island.",
    imageUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nr8MALgIbjS4GHi68rhx5qDp6qU37MfErVmNE2wC_kwOrNASUDP3GqCjx9pVJGEOVw8ABfLg6c0WeOmciO8E9d4oMtmIKwF1xUTXC7hawHRnGjueSNmKpVM0mjXn9HYtKC3U7Rb=s1360-w1360-h1020",
    address: "Liberty Island, New York, NY 10004, USA",
    location: {
      lat: 40.689247,
      lng: -74.044502,
    },
    creator: "u2",
  },
  {
    id: "p3",
    title: "Central Park",
    desciption: "A large public park in New York City.",
    imageUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqiW2d1SO7VLnhoZ0i5IWuzhBn09zmx2umhG6mSuFtFMxXcXcGo91PGdUkDONVCHYPIjJ2G1kau4EryYYXSZZYnH8PTkJ6ypHMLxUJDAfS4G8boq6aCG1LhrI5RBgfvkBLLo5HGZA=s1360-w1360-h1020",
    address: "New York, NY, USA",
    location: {
      lat: 40.785091,
      lng: -73.968285,
    },
    creator: "u3",
  },
];
const UserPlaces = () => {
  const { userId } = useParams();
  const loadedPlaces = DUMMY_PLACES.filter((place) => place.creator === userId);

  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
