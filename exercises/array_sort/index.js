// 1) Sort an array from smallest number to largest

    function leastToGreatest(arr) {
        return arr.sort((a, b) => a > b);
    }

    console.log(leastToGreatest([1, 3, 5, 2, 90, 20]));

// 2) Sort an array from largest number to smallest

    function greatestToLeast(arr) {
        return arr.sort((a, b) => a < b);
    }
    
    console.log(greatestToLeast([1, 3, 5, 2, 90, 20]));

// 3) Sort an array from shortest string to longest

    function lengthSort(arr) {
        return arr.sort((a, b) => a.length > b.length);
    }
    
    console.log(lengthSort(["dog", "wolf", "by", "family", "eaten"]));