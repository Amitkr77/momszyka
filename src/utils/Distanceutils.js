// export const RESTAURANT_COORDS = {
//   lat: 21.252689, // ← Replace with your restaurant's latitude
//   lng: 81.598683, // ← Replace with your restaurant's longitude
// };
// Restaurant location
export const RESTAURANT_COORDS = {
  lat: 25.619566,
  lng: 85.128768,
};

// Delivery settings
export const FREE_DELIVERY_LIMIT_KM = 1.5; // free delivery within 1.5 km (road distance)
export const DELIVERY_CHARGE = 30;

// Road factor to convert air distance → approx road distance
const ROAD_DISTANCE_FACTOR = 1.5;

// Convert degrees to radians
function toRad(deg) {
  return (deg * Math.PI) / 180;
}

// Haversine formula (air distance)
export function getDistanceKm(lat1, lng1, lat2, lng2) {
  const R = 6371; // Earth radius in km

  const dLat = toRad(lat2 - lat1);
  const dLng = toRad(lng2 - lng1);

  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLng / 2) ** 2;

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return R * c;
}

// Delivery calculation
export function getDeliveryInfo(userLat, userLng) {
  // Step 1: calculate air distance
  const airDistance = getDistanceKm(
    RESTAURANT_COORDS.lat,
    RESTAURANT_COORDS.lng,
    userLat,
    userLng,
  );

  // Step 2: convert to approximate road distance
  const roadDistance = airDistance * ROAD_DISTANCE_FACTOR;

  // Step 3: check free delivery
  const isFree = roadDistance <= FREE_DELIVERY_LIMIT_KM;

  return {
    distanceKm: Math.round(roadDistance * 100) / 100,
    deliveryCharge: isFree ? 0 : DELIVERY_CHARGE,
    isFree,
  };
}

// =======================
// TESTING SECTION
// =======================

console.log("Restaurant Location:", RESTAURANT_COORDS);
console.log("---- Delivery Tests ----");

const testLocations = [
  { name: "Very Close", lat: 25.62, lng: 85.129 },
  { name: "User Example", lat: 25.6157, lng: 85.1652 },
  { name: "Far Area", lat: 25.63, lng: 85.14 },
];

testLocations.forEach((location) => {
  const result = getDeliveryInfo(location.lat, location.lng);

  console.log(`
Location: ${location.name}
User Coordinates: ${location.lat}, ${location.lng}
Distance: ${result.distanceKm} km
Free Delivery: ${result.isFree}
Delivery Charge: ₹${result.deliveryCharge}
`);
});
