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

    

}

//takes an array of strings and returns the longest one. 
function findLongestString(namesArray) {
   //remove special characters and spaces
    let regex = /[^a-z0-9]/gi;
    namesArray = namesArray.replace(regex, "");
  for (let i = 0; i < namesArray.length; i++) {
    let newName = namesArray[i];
    let newHeroesList = [];
     if (newName.length > lword.length) {
       lword = newName;
       newHeroesList.unshift(newName);
     } else {
      newHeroesList.shift(newName);
     }
  }

    return findLongestString();

}
