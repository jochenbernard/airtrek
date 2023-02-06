const fs = require("fs");

const bikeFile = "/Users/jochenbernard/.bike.json";

const bikeData = JSON.parse(fs.readFileSync(bikeFile, "utf8"));

console.log(
  bikeData
    .map(
      ({ latitude, longitude, timeStamp, address }) =>
        `${latitude},${longitude},red,marker,"[${new Date(
          timeStamp
        )}] ${address}"`
    )
    .join("\n")
);
