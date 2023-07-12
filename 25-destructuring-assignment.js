var voxel = {x: 3.6,y: 7.4,z: 6.54};
//this is the old way
var x = voxel.x;
var y = voxel.y;
var z = voxel.z;

//this is destructuring
const {x:a, y:b, z:c} = voxel

//example 2
const AVG_TEMPERATURES = {
    today: 77.5,
    tomorrow: 79
};
function getTempOfTomorrow(avgTemperatures){
    "use strict";
    const {tomorrow: tempOfTomorrow} = avgTemperatures;
    return tempOfTomorrow;
}
console.log(getTempOfTomorrow(AVG_TEMPERATURES));

//example 3
const LOCAL_FORECAST = {
    today: {min: 72, max: 83},
    tomorrow: {min:73.3, max: 84.6}
};
function getMaxOfTomorrow(forecast){
    "use strict";
    const {tomorrow: {max: maxTempOfTomorrow}} = forecast;
    return maxTempOfTomorrow;
}
console.log(getMaxOfTomorrow(LOCAL_FORECAST));
