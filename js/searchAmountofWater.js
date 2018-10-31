'use strict';

function searchAmountOfWater(array) {
    let left = [];
    let right = [];
    let leftMax = 0;
    let rightMax = 0;
    for (let i = 0, j = array.length - 1; i < array.length, j >= 0; i++, j--) {
        left[i] = leftMax;
        leftMax = Math.max(leftMax, array[i]);
        right[j] = rightMax;
        rightMax = Math.max(rightMax, array[j]);
    }
    let amountOfWater = 0;
    for (let i = 0; i < array.length; i++) {
        let water = Math.min(left[i], right[i]) - array[i];
        if (water > 0) {
            amountOfWater = amountOfWater + water;
        }
        else {
            amountOfWater = amountOfWater + 0;
        }
    }
    return amountOfWater;
}
