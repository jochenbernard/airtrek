const { exit } = require("process");
const fs = require("fs");

const itemsFile =
  "/Users/jochenbernard/Library/Caches/com.apple.findmy.fmipcore/Items.data";
const bikeFile = "/Users/jochenbernard/.bike.json";

const data = JSON.parse(fs.readFileSync(itemsFile, "utf8"));
const bikeData = JSON.parse(fs.readFileSync(bikeFile, "utf8"));

const bike = data.filter((item) => item.name === "Jochen’s Bike")[0];

const timeStamp = bike.location.timeStamp;

if (bikeData.some((item) => item.timeStamp === timeStamp)) {
  console.log(timeStamp);
  exit();
}

const address = bike.address?.formattedAddressLines.join("\n");

const latitude = bike.location.latitude;
const longitude = bike.location.longitude;

const horizontalAccuracy = bike.location.horizontalAccuracy;
const verticalAccuracy = bike.location.verticalAccuracy;

const floorLevel = bike.location.floorLevel;
const altitude = bike.location.altitude;

const location = {
  timeStamp,
  address,
  latitude,
  longitude,
  horizontalAccuracy,
  verticalAccuracy,
  floorLevel,
  altitude,
};

console.log(location);

bikeData.push(location);

fs.writeFileSync(bikeFile, JSON.stringify(bikeData, null, 2));
