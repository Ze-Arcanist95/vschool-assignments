/*
1. Create a function that takes an array and give it a variable to store the highest number of it.
2. Loop through the array to grab each number inside of it.
3. Store the value of each number if higher than original variable.
4. Return the initial variable to log highest value.
*/    
    function largestofArray(arr) {
        let largestNum = 0;
        for(i = 0; i < arr.length; i++) { 
            if(arr[i] > largestNum) {
                largestNum = arr[i];
            }
        }
        return largestNum;
    };

/*
1. Create a function that takes an array and string as parameters.
2. Give it a variable to store like values. 
3. Loop through the array and compare each index to the string.
4. Store any matches in variable. Return array of like values.
*/
    function likeValues(arr, str) {
        let matched = [];
            for(i = 0; i < arr.length; i++) {
                if(arr[i].includes(str)) {
                    matched.push(arr[i]);
            }
        }
        return matched
    };

/* 
1. Create a function that takes two integers as parameters.
2. Check if both parameters are divisible.
3. Return true/false.
*/
    function isDivisible(num1, num2) {
        if(num1 % num2 === 0) {
            return true;
        } else {
            return false;
        }
    }