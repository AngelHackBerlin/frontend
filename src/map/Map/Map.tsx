import * as React from "react";
import axios from "axios";

import platform from "../platform";
import geometryToPoints from "./geometryToPoints";

const cls = require("./Map.css");

declare const H: any;

const POLYGONS: any[] = [];

export type GeoCoordinate = {
  lat: number,
  lng: number,
};

class Map extends React.Component<undefined, undefined> {
  mapElement: HTMLElement;
  map: any;

  componentDidMount() {
    this.initMap();

    setTimeout(() => {
      // this.locate({ lng: 13.237903988942804, lat: 52.51466842619339 }); // Sector A
      // this.locate({ lng: 13.237813023189318, lat: 52.514784322743076 }); // Sector B
      // this.locate({ lng: 13.237938657602626, lat: 52.514849786798294 }); // Sector C
      // this.locate({ lng: 13.238015897130765, lat: 52.514930476880785 }); // Sector D
      // this.locate({ lng: 13.241572404820204, lat: 52.514765729398796 }); // Sector Z
    }, 3000);
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

    this.map.addEventListener("tap", this.handleTap);

    const behavior = new H.mapevents.Behavior(mapEvents);
  }

  handleTap = (e: any) => {
    const { viewportX, viewportY } = e.currentPointer;
    const cords = this.map.screenToGeo(viewportX, viewportY);
    console.log(`${cords.lng} ${cords.lat}`);
  };

  center(cords: GeoCoordinate) {
    this.map.setCenter({ lat: cords.lat, lng: cords.lng });
  }

  locate(cords: GeoCoordinate) {
    if (!cords) {
      console.log("No cords on this request");
      return;
    }

    POLYGONS.forEach((polygon) => {
      this.map.removeObject(polygon);
    });

    POLYGONS.length = 0;

    const { lat, lng } = cords;
    axios.get(`https://gfe.cit.api.here.com/2/search/proximity.json?app_id=${process.env.HERE_APP_ID}&app_code=${process.env.HERE_APP_CODE}&layer_ids=4711&key_attribute=NAME&proximity=${lat},${lng}`)
      .then((response) => {
        const data = response.data.geometries[0];

        if (data) {
          const strip = new H.geo.Strip();

          geometryToPoints(data).forEach((point: GeoCoordinate) => {
            strip.pushPoint(point);
          });

          const polygon = new H.map.Polygon(
            strip, { style: { lineWidth: 1, fillColor: "#FF0000", strokeColor: "#000" }}
          );

          POLYGONS.push(polygon);

          this.map.addObject(polygon);
        } else {
          alert("No results");
        }

      })
      .catch((e) => {
        alert("Requesting geometries failed");
        console.error(e);
      });
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
