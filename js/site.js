const marvelHeroes = [
  "Ant-Man",
  "Black Panther",
  "Black Widow",
  "Captain America",
  "Doctor Strange",
  "Hawkeye",
  "Hulk",
  "Iron Man",
  "Luke Cage",
  "Moon Knight",
  "Ms. Marvel",
  "Scarlet Witch",
  "Spider-Man",
  "Thor",
  "Wasp"
]
//driver function used for display and passing values.
function findHero() {
  
    //implement the function findLongestString that returns the longest word.
    let lword = findLongestString(marvelHeroes);

    //used for display. 
   document.getElementById("results").innerHTML = lword;
//displays rest of names in the array
 document.getElementById("nameList").innerHTML = marvelHeroes.join(" | ");
   
  }

//takes an array of strings and returns the longest one. 
function findLongestString(namesArray) {
  //declare variable
  let lString = "";
 
  for (let index = 0; index < namesArray.length; index++) {
    if (namesArray[index].length > lString.length) {
      lString = namesArray[index];
      
    }
    
  } return lString;
}
