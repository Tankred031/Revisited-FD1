const maxPoints = 120;
const passingPoints = 70;
const samPoints = 84;
let alexPoints = 45;
const jessiePoints = 99;
let didAlexPass = false;


let samPointsDisplay = "Sam earned " + samPoints + " points out of " + maxPoints;
console.log(samPointsDisplay);
let alexPointsDisplay = "Alex earned " + alexPoints + " points out of " + maxPoints;
console.log(alexPointsDisplay);
let jessiePointsDisplay = "Jessie earned " + jessiePoints + " points out of " + maxPoints;
console.log(jessiePointsDisplay);

const samPercentage = (samPoints / maxPoints) * 100;
const samPercentDisplay = "Sam scored " + samPercentage + "%.";
console.log(samPercentDisplay);

const alexPercentage = (alexPoints / maxPoints) * 100;
const alexPercentDisplay = "Alex scored " + alexPercentage + "%.";
console.log(alexPercentDisplay);

const jessiePercentage = (jessiePoints / maxPoints) * 100;
const jessiePercentDisplay = "Jessie scored " + jessiePercentage + "%.";
console.log(jessiePercentDisplay);

let samMissedPoints = (maxPoints - samPoints);
let alexMissedPoints = (maxPoints - alexPoints);
let jessieMissedPoints = (maxPoints - jessiePoints);
let samMissedPointsDisplay = "Sam missed " + samMissedPoints + "point(s)."; 
console.log(samMissedPointsDisplay);
let alexMissedPointsDisplay = "Alex missed " + alexMissedPoints + "point(s)."; 
console.log(alexMissedPointsDisplay);
let jessieMissedPointsDisplay = "Jessie missed " + jessieMissedPoints + "point(s)."; 
console.log(jessieMissedPointsDisplay);

alexPoints = 75;
didAlexPass = !didAlexPass;

const alexPointsUpdated = "Alex failed initially but did extra credit. Their new score is " + alexPoints + " points out of " + maxPoints;
console.log(alexPointsUpdated);


classAveragePoints = (samPoints + alexPoints + jessiePoints) / 3;
classAveragePercent = (classAveragePoints / maxPoints) * 100;
let classAvgDisplay = classAveragePoints + classAveragePercent.toFixed(2);
console.log(classAvgDisplay);

const listItemArray = document.querySelectorAll("li");
listItemArray[0].innerHTML = "Raw Points:";
listItemArray[4].innerHTML = "Percentages:";
listItemArray[8].innerHTML = "Missed Points:";
listItemArray[12].innerHTML = "Final Notes:";