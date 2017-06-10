import * as React from "react";

import platform from "../platform";

const cls = require("./Map.css");

declare const H: any;

type GeoCoordinate = {
  lat: number,
  lng: number,
};

class Map extends React.Component<undefined, undefined> {
  mapElement: HTMLElement;
  map: any;

  componentDidMount() {
    this.initMap();
  }

  initMap() {
    const defaultLayers = platform.createDefaultLayers();

    this.map = new H.Map(
      this.mapElement,
      defaultLayers.satellite.map,
      {
        zoom: 17.4,
        center: { lat: 52.514480, lng: 13.239491 }
      },
    );

    const mapEvents = new H.mapevents.MapEvents(this.map);

    const behavior = new H.mapevents.Behavior(mapEvents);
  }

  center(cords: GeoCoordinate) {
    this.map.setCenter({ lat: cords.lat, lng: cords.lng });
  }

  refMap = (mapElement: HTMLElement) => {
    this.mapElement = mapElement;
  };

  render() {
    return (
      <div className={cls.mapContainer} ref={this.refMap} />
    );
  }
}

export default Map;
