const { exit } = require("process");
const fs = require("fs");

const itemsFile =
  "/Users/jochenbernard/Library/Caches/com.apple.findmy.fmipcore/Items.data";
const bikeFile = "/Users/jochenbernard/.bike.json";

const data = JSON.parse(fs.readFileSync(itemsFile, "utf8"));
const bikeData = JSON.parse(fs.readFileSync(bikeFile, "utf8"));

const bike = data.filter((item) => item.name === "Jochen’s Bike");

const timeStamp = bike[0].location.timeStamp;

if (bikeData.some((item) => item.timeStamp === timeStamp)) {
  console.log(timeStamp);
  exit();
}

const address = bike[0].address.formattedAddressLines.join("\n");

const latitude = bike[0].location.latitude;
const longitude = bike[0].location.longitude;

const horizontalAccuracy = bike[0].location.horizontalAccuracy;
const verticalAccuracy = bike[0].location.verticalAccuracy;

const floorLevel = bike[0].location.floorLevel;
const altitude = bike[0].location.altitude;

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
