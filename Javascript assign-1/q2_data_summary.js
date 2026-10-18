const userName = "Pranav Tiwari";
const userAge = 21;
const isActive = true;
const hobbies = ["coding", "music", "cricket"];
const profile = { city: "Delhi", country: "India" };
const middleName = null;
let phoneNumber;

function getType(value) {
  if (Array.isArray(value)) return "array";
  if (value === null) return "null";
  return typeof value;
}

console.table([
  { label: "userName", value: userName, type: getType(userName) },
  { label: "userAge", value: userAge, type: getType(userAge) },
  { label: "isActive", value: isActive, type: getType(isActive) },
  { label: "hobbies", value: JSON.stringify(hobbies), type: getType(hobbies) },
  { label: "profile", value: JSON.stringify(profile), type: getType(profile) },
  { label: "middleName", value: String(middleName), type: getType(middleName) },
  { label: "phoneNumber", value: String(phoneNumber), type: getType(phoneNumber) },
]);
