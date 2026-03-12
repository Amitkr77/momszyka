// export const RESTAURANT_COORDS = {
//   lat: 21.252689, // ← Replace with your restaurant's latitude
//   lng: 81.598683, // ← Replace with your restaurant's longitude
// };
export const RESTAURANT_COORDS = {
  lat: 25.619668, // ← Replace with your restaurant's latitude
  lng: 81.128477, // ← Replace with your restaurant's longitude
};

// To this (accounts for road detours):
export const DELIVERY_RADIUS_KM = 1.1;
export const DELIVERY_CHARGE = 30;

export function getDistanceKm(lat1, lng1, lat2, lng2) {
  const R = 6371; // Earth radius in km
  const dLat = toRad(lat2 - lat1);
  const dLng = toRad(lng2 - lng1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLng / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function toRad(deg) {
  return (deg * Math.PI) / 180;
}

export function getDeliveryInfo(userLat, userLng) {
  const distanceKm = getDistanceKm(
    RESTAURANT_COORDS.lat,
    RESTAURANT_COORDS.lng,
    userLat,
    userLng,
  );
  const isFree = distanceKm <= DELIVERY_RADIUS_KM;
  return {
    distanceKm: Math.round(distanceKm * 100) / 100,
    deliveryCharge: isFree ? 0 : DELIVERY_CHARGE,
    isFree,
  };
}
