/* eslint-disable react/prop-types */
import { Marker, Popup } from "react-leaflet";
import { newIcon } from "../../Helpers/helps";

function MarkerMap(props) {
  const { lat, lng, label, addSelect } = props;
  const eventClick = () => {
    addSelect(props);
  };

  return (
    <Marker
      position={[lat, lng]}
      eventHandlers={{ click: eventClick }}
      icon={newIcon()}
    >
      <Popup>{label}</Popup>
    </Marker>
  );
}

export default MarkerMap;
