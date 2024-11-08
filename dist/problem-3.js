"use strict";
{
    function countWordOccurrences(sentence, word) {
        const words = sentence.toLowerCase().trim().split(/\s+/);
        const occurences = words.filter(word => word === word.toLowerCase()).length;
        return occurences;
    }
    // Sample Input:
    const result = countWordOccurrences("I love typescript", "typescript");
    console.log(result);
    // Sample Output: 1;
}
