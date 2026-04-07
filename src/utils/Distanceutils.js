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
export const DELIVERY_CHARGE = 30; // for 1.5–5 km
export const LONG_DISTANCE_CHARGE = 50; // for 5–9 km

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

  // Step 3: round distance
  const finalDistance = Math.round(roadDistance * 100) / 100;

  let deliveryCharge = 0;
  let isFree = false;
  let isServiceable = true;
  let message = "";


  // Step 4: pricing logic (UPDATED)
  if (finalDistance <= 1.5) {
    deliveryCharge = 0;
    isFree = true;
    message = "Free Delivery 🎉";
  } else if (finalDistance <= 5) {
    deliveryCharge = DELIVERY_CHARGE;
    message = "Standard Delivery 🚚";
  } else if (finalDistance <= 9) {
    deliveryCharge = LONG_DISTANCE_CHARGE;
    message = "Long Distance Delivery 🛵";
  } else {
    isServiceable = false;
    message = "Not Deliverable ❌";
  }

  return {
    distanceKm: finalDistance,
    deliveryCharge,
    isFree,
    isServiceable,
    message,
  };
}

// =======================
// TESTING SECTION
// =======================

// console.log("Restaurant Location:", RESTAURANT_COORDS);
// console.log("------ DELIVERY TESTS ------");

// const testLocations = [
//   { name: "Very Close (<1.5km)", lat: 25.62, lng: 85.129 },
//   { name: "Within 5km", lat: 25.6176, lng: 85.1451 },
//   { name: "Within 9km", lat: 25.6475, lng: 85.0820 },
//   { name: "Too Far (>9km)", lat: 25.55, lng: 85.3 },
// ];

// testLocations.forEach((location) => {
//   const result = getDeliveryInfo(location.lat, location.lng);

//   console.log(`
// 📍 Location: ${location.name}
// Coordinates: ${location.lat}, ${location.lng}
// Distance: ${result.distanceKm} km
// Message: ${result.message}
// Free Delivery: ${result.isFree}
// Serviceable: ${result.isServiceable}
// Delivery Charge: ₹${result.deliveryCharge}
// -----------------------------------
//   `);
// });
