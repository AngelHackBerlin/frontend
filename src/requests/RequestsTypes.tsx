import { GeoCoordinate } from "../map/Map/Map";
export type RequestType = "health" | "security" | "tech";

export type RequestPayload = {
  id: number,
  type: RequestType,
  date: Date,
  comment: string,
  cords: GeoCoordinate,
};
