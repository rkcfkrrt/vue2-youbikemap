import http from "./axios";

// 即時車位
export const availabilityNearByApi = (lat, lon, distanceInMeters) => {
  return http.get(
    `Bike/Availability/NearBy?%24spatialFilter=nearby%28${lat}%2C%20${lon}%2C%20${distanceInMeters}%29&%24format=JSON`
  );
};

// 租借站位
export const stationNearByApi = (lat, lon, distanceInMeters) => {
  return http.get(
    `Bike/Station/NearBy?%24spatialFilter=nearby%28${lat}%2C%20${lon}%2C%20${distanceInMeters}%29&%24format=JSON`
  );
};
