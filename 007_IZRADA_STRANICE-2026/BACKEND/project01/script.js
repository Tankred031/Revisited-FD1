const isDay = true;
const isLightOn = !isDay;

console.log("Daytime?");
console.log(isDay);

console.log("Lights on?");
console.log(isLightOn);

let batteryLevel = 50;

console.log("Battery level?");
console.log(batteryLevel + "%");

let isWorking = isLightOn === true + batteryLevel > 0;

console.log("Everything working?");
console.log(isWorking);


