const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

const totalBatteries = batteryBatches.reduce(function (total, batches) {
  return batches + total;
});
// Create a new variable called totalBatteries, which holds the sum of all of the battery amounts in the batteryBatches array. (Note that the batteryBatches variable has been provided for you in index.js.) Naturally, you should use reduce() for this!

// const doubledAndSummedFromTen = [1, 2, 3].reduce(function(accumulator, element){ return element * 2 + accumulator}, 10)
