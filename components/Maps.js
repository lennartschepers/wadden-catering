import { Component } from "react";

class Map extends Component {
  render() {
    return (
      <div className="w-full content-auto bg-gray-50">
        <iframe
          width="100%"
          height="450"
          frameBorder="0"
          src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJKfHS4d2vyUcR1D55ceCWlf8&key=AIzaSyBtq41T_LBVMPXqJpFGjyOibYumah1-6ZY"
        ></iframe>
      </div>
    );
  }
}

export default Map;
