// Code your solution in this file!
const returnFirstTwoDrivers = function(array1){
    return array1.slice(0,2);
 }

 const returnLastTwoDrivers = function(array1){
    return array1.slice(2,4);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier){
    return function(fare){
       return fare * multiplier;
    }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(array1,selectingDrivers){
    return selectingDrivers(array1)
    
}
