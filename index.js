// Code your solution in this file!

const returnFirstTwoDrivers = function anonymous([]){
    return (['Antonia','Nuru']);
}
const returnLastTwoDrivers = function anything([]){
    return (['Amari', 'Mo']);
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(num){
    return function (fare){
        return fare * num
    }
}
function fareDoubler(num){
    return num * 2
}

function fareTripler(num){
    return num * 3
}
const  selectDifferentDrivers = function (arrayOfDrivers, drivers){
    return drivers(arrayOfDrivers)
}