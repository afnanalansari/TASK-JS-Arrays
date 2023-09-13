/**

- isArrayLengthOdd(numbers):
- receives array `numbers`
- returns true if array has an odd number of elements
- returns false otherwise
- 
- e.g.
- isArrayLengthOdd([1, 2, 3]) -> true
- isArrayLengthOdd([1, 2, 3, 4]) -> flase
*/
function isArrayLengthOdd(numbers) {
   
    if (numbers.length%2 === 0){
        return false;
    }else{
        return true;
    }
    }
    
   
    console.log(isArrayLengthOdd([1, 2, 3, 4]));
    
    /**
    
    - isArrayLengthEven(numbers):
    - receives array `numbers`
    - returns true if array has an even number of elements
    - returns false otherwise
    - 
    - e.g.
    - isArrayLengthEven([1, 2, 3]) -> false
    - isArrayLengthEven([1, 2, 3, 4]) -> true
    */

    function isArrayLengthEven(numbers) {
   
        if (numbers.length%2 === 0){
            return true;
        }else{
            return flase;
        }
        }

        console.log(isArrayLengthEven([1, 2, 3, 4]));
    
    /**
    
    - addLailaToArray(instructors):
    - receives array `instructors`
    - returns a new array that's a copy of array `instructors` with additional string "Laila"
    - 
    - e.g.
    - addLailaToArray(["Mshary", "Hasan"]) -> ["Mshary", "Hasan", "Laila"]
    */
    function addLailaToArray(instructors) {
        instructors.push("Laila");
        return instructors;
    }
    console.log(addLailaToArray(["Mshary", "Hasan"]));
    
    /**
    
    - eliminateTeam(teams):
    - receives array `teams`
    - removes the last element from the array and return it
    - 
    - e.g.
    - eliminateTeam(["Brazil", "Germany", "Italy"]) -> "Italy"
    */
    function eliminateTeam(teams) {
        teams.pop();
        return teams;
    }

    console.log(eliminateTeam(["Brazil", "Germany", "Italy"]));
    
    /**
    
    - secondHalfOfArrayIfItIsEven(fruits):
    - receives array `fruits`
    - returns a new arra" that"s the second half of the original array if it has an even number of elements
    - returns an empty array if it has an odd number of elements
    - 
    - e.g.
    - secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi"]) -> ["banana", "kiwi"]
    - secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi", "blueberry"]) -> []
    🌶️🌶️🌶️
    */
    function secondHalfOfArrayIfItIsEven(fruits) {
        
        if (fruits.length%2 === 0){ //if even
            return fruits.slice(fruits.length/2, fruits.length);
        }else{ //empty array
            fruits.splice(0, fruits.length); //*ITS NOT WORKING? yes beacuse I was sending it before the splice did what it had to do 
            return fruits;
        }
    }

    console.log(secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi", "blueberry"]));
    
    /**
    
    - youGottaCalmDown(shout):
    - receives a string `shout`
    - returns the string `shout` with at most one exclamation mark (!) at the end.
    - 
    - e.g.
    - youGottaCalmDown("HI!!!!!!!!!!") -> "HI!"
    - youGottaCalmDown("Taylor Schwifting!!!!!!!!!!!") -> "Taylor Shwifting!"
    - youGottaCalmDown("Hellooooo") -> "Hellooooo"
    - 
    - Hint:
    - Use number method .indexOf()
    - Use string method .slice()
    🌶️🌶️🌶️
    */
    function youGottaCalmDown(shout) {
        let shoutArray = shout.split(''); // THIS DOES NOT MUTATE THE VARIABLE (split does not mutate it but splice does)
        let index = -1;

        if(shout.includes('!')){
            index = shout.indexOf('!'); //returns the first !
            // let newString = shout.slice(0, index+1);
            shoutArray.splice(index+1,shout.length);
            return shoutArray.join(''); //converts array to string and commas are eliminated 
        }else {
            return shout;
        }
    }

    console.log(youGottaCalmDown('Hi'));