function getPermutations(string) {
    //base case for recursion
    if (string.length <= 1) {
        return new Set(string);
    }

    //get permutations of string except last character
    var allCharsExceptLast = string.slice(0,-1);
    var lastChar = string[string.length-1];

    //recursive call to get more permutations
    var allPermutationsOfCharExceptLast = getPermutations(allCharsExceptLast);

    //create new set to hold all unique permutations
    var permutations = new Set();

    //loop through all permutations
    allPermutationsOfCharExceptLast.forEach(function(permutationOfAllCharsExceptLast){
        for (var position = 0; position < allCharsExceptLast.length; position++){
            //insert last character into every spot in the permutation
            var permutation = permutationOfAllCharsExceptLast.slice(0,position) + lastChar + permutationOfAllCharsExceptLast.slice(position);

            permutations.add(permutation);
        }
    });

    return permutations;
}