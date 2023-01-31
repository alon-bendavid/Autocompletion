
let searchHandler = async (event) => {
  event.preventDefault();
  let searchText = event.target[0].value;

  let fetchBody = {keyWord: searchText};
  // response will send something like this: 'data.php?keyWord=booboo' (if searchText is 'booboo')
  // let response = await fetch('data.php', { method: 'GET', body : JSON.stringify(fetchBody)});
  let response = await fetch('data.php');
  let searchValue = await response.text();

  console.log('searchText = ', searchText);
  console.log('searchValue = ', searchValue);
};


function print(){
  data = search.value;
  console.log(data);
  fetch("index.php")
  .then(response => response.json())
  .then(data => {
    // Handle data
    console.log(data);
  })
  .catch(error => {
    // Handle error
    console.error(error);
  });
}


function searchByKey(key) {
  let data = [];

  

  return data;
}


const search = document.querySelector(".searchTxt");
// search.addEventListener("input" , print);

const searchForm = document.getElementById('searchForm');
searchForm.addEventListener('submit', searchHandler);
