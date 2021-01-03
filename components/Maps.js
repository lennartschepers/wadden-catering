import { Component } from "react";

class Map extends Component {
  render() {
    return (
      <div className="w-full content-auto bg-gray-50">
        <iframe
          width="100%"
          height="450"
          frameborder="0"
          scrolling="no"
          src="https://maps.google.com/maps?width=100%25&amp;height=350&amp;hl=en&amp;q=+(RestaurantHetRaadselVandeWadden)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
      </div>
    );
  }
}

export default Map;
