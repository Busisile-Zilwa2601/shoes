document.addEventListener('DOMContentLoaded', function(){
  var handlerShoe = shoeCatalogue();
  var colorBtn = document.getElementById('shoeColor');
  var brandBtn = document.getElementById('shoeBrand');
  var sizeBtn = document.getElementById('shoeSize');
  var searchBtn = document.getElementById('search');
  var collactor = [];
  var sourceResultsOne = document.querySelector('.screen-message-one').innerHTML;
  var sourceResultsTwo = document.querySelector('.screen-message-two').innerHTML;
  
  //fill the list;
  function selectedItems(){
    let theColor = changeOnColor();
    let theBrand = changeOnBrand();
    let theSize = changeOnSize();
    collactor =  handlerShoe.filter(theColor ,parseInt(theSize), theBrand);
    console.log(collactor);
    if(collactor.length > 0){
      var templateResults = Handlebars.compile(sourceResultsOne);
      var data = templateResults({results: collactor});
      document.querySelector('.display-results').innerHTML = data;
    }
    else{
      var templateResults = Handlebars.compile(sourceResultsTwo);
      var data = templateResults({results: [{brand: theBrand, size: theSize}], size : theSize});
      document.querySelector('.display-results').innerHTML = data;
    }
  }
  searchBtn.addEventListener('click', selectedItems);
  function changeOnColor(){
    return colorBtn.options[colorBtn.selectedIndex].value;
  }
  colorBtn.addEventListener('change', changeOnColor);

  function changeOnBrand(){
    return brandBtn.options[brandBtn.selectedIndex].value;
  }
  brandBtn.addEventListener('change', changeOnBrand);

  function changeOnSize(){
    return sizeBtn.options[sizeBtn.selectedIndex].value;
  }
  sizeBtn.addEventListener('change', changeOnSize);
});
