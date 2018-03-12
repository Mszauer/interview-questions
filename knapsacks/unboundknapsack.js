function maxDuffelBagValue(cakeTypes, weightCapacity) {

    // we make an array to hold the maximum possible value at every
    // duffel bag weight capacity from 0 to weightCapacity
    // starting each index with value 0
    var maxValuesAtCapacities = [];
    for (var i = 0; i <= weightCapacity; i++) {
        maxValuesAtCapacities[i] = 0;
    }

    for (var currentCapacity = 0; currentCapacity <= weightCapacity; currentCapacity++) {

        // set a variable to hold the max monetary value so far for currentCapacity
        var currentMaxValue = 0;

        // we use a for loop here instead of forEach because we return infinity
        // if we get a cakeType that weighs nothing and has a value. but forEach
        // loops always return undefined and you can't break out of them without
        // throwing an exception
        for (var j = 0; j < cakeTypes.length; j++) {
            var cakeType = cakeTypes[j];

            // if a cake weighs 0 and has a positive value the value of our duffel bag is infinite!
            if (cakeType.weight === 0 && cakeType.value !== 0) {
                return Infinity;
            }

            // if the current cake weighs as much or less than the current weight capacity
            // it's possible taking the cake would get a better value
            if (cakeType.weight <= currentCapacity) {

                // so we check: should we use the cake or not?
                // if we use the cake, the most kilograms we can include in addition to the cake
                // we're adding is the current capacity minus the cake's weight. we find the max
                // value at that integer capacity in our array maxValuesAtCapacities
                var maxValueUsingCake = cakeType.value + maxValuesAtCapacities[currentCapacity - cakeType.weight];

                // now we see if it's worth taking the cake. how does the
                // value with the cake compare to the currentMaxValue?
                currentMaxValue = Math.max(maxValueUsingCake, currentMaxValue);
            }
        }

        // add each capacity's max value to our array so we can use them
        // when calculating all the remaining capacities
        maxValuesAtCapacities[currentCapacity] = currentMaxValue;
    }

    return maxValuesAtCapacities[weightCapacity];
}

const cakeTypes = [
    {weight: 7, value: 160},
    {weight: 3, value: 90},
    {weight: 2, value: 15},
];

const capacity = 20;

maxDuffelBagValue(cakeTypes, capacity);
// returns 555 (6 of the middle type of cake and 1 of the last type of cake)

