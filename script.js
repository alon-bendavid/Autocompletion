
let getJsonByKey = async (key) => {
  // create an empty array as result
  let result = [];
  // fetch the php data using the given 'key' as keyword
  let response = await fetch('data.php?keyWord=' + key);

  // if the response is ok / no errors
  if (response.ok) {
    // update the result with the json data
    result = await response.json();
  }
  

  console.log('key = ', key);
  console.log('result = ', result);
  
  // return the result 
  // the result will be empty if no response was found
  return result;

};

// create a displayResult function that accepts only one argument (i.e. obj)
let displayResult = (obj) => {
  // remove all list items or children of '<ul id="result">' element
  results.innerHTML = '';

  console.log("obj => ", obj);

  // for each item in the given obj
  obj.forEach((item) => {
    console.log('item is ', item);
    // create a '<li>' element
    let li = document.createElement('li');
    // add the name of this item as text into the new '<li>' element
    li.textContent = item.name;
    // insert this new '<li>' element into the '<ul id="result">' element
    results.appendChild(li);
  });
};

/**
 * NOTE: This function is executed only 
 * when the search button is clicked
 */
let searchHandler = async (event) => {
  // stop the form from refreshing
  event.preventDefault();
  // get the value from search input as key
  // NOTE: event.target[0] is the same as querySelector('.searchText');
  let key = event.target[0].value;
  // use this key and our own 'getJsonByKey()' function to get the json object 
  // example :
  //    key = 'le'
  //    jsonObj = [{"id":"1","name":"Three Valleys","km":"600"}...]
  let jsonObj = await getJsonByKey(key);
  // display the result in our html
  displayResult(jsonObj);  

  console.log(jsonObj);
};


/**
 * NOTE: This function is executed whenever the user 
 * enters a character or letter in the search input
 */
async function print(){
  // get the value from search input as key
  // NOTE: 'search' was selected by its class name ('searchTxt') outside this function 
  key = search.value;
  console.log(key);
  // use this key and our own 'getJsonByKey()' function to get the json object 
  // example :
  //    key = 'le'
  //    jsonObj = [{"id":"1","name":"Three Valleys","km":"600"}...]
  let jsonObj = await getJsonByKey(key);
  // display the result in our html
  displayResult(jsonObj);

  console.log(jsonObj);

  
}


const search = document.querySelector(".searchTxt");
const searchForm = document.getElementById('searchForm');
const results = document.getElementById('results');

search.addEventListener("input" , print);
searchForm.addEventListener('submit', searchHandler);
