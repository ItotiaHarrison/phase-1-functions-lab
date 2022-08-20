// Code your solution in this file!
const Headquarters = 42

function distanceFromHqInBlocks(pickUp) {
    const distanceInBlocks = Math.abs(pickUp - Headquarters)
    return distanceInBlocks
}

function distanceFromHqInFeet(pickUp) {
    let distanceInBlocks = distanceFromHqInBlocks(pickUp)
    return distanceInBlocks * 264
}

function distanceTravelledInFeet(start, destination) {
    const distanceTravelled = Math.abs(start - destination)
    return distanceTravelled * 264
}

function calculatesFarePrice(start, destination) {
    let distanceInFeet = distanceTravelledInFeet(start, destination)
    if (distanceInFeet < 400) {
        return 0
    } else if (distanceInFeet > 400 && distanceInFeet < 2000) {
        return (distanceInFeet - 400) * 0.02
    }
    else if (distanceInFeet > 2000 && distanceInFeet < 2500) {
        return  25
    }
    else {
        return 'cannot travel that far'
    }
}