document.addEventListener('DOMContentLoaded', function(){
  var handlerShoe = shoeCatalogue();
  var colorBtn = document.getElementById('shoeColor');
  var brandBtn = document.getElementById('shoeBrand');
  var sizeBtn = document.getElementById('shoeSize');
  var searchBtn = document.getElementById('search');
  var collactor = [];
  var sourceResults = document.querySelector('.screen-message').innerHTML;
  var templateResults = Handlebars.compile(sourceResults);

  //fill the list;
  function selectedItems(){
    let theColor = changeOnColor();
    let theBrand = changeOnBrand();
    let theSize = changeOnSize();
    collactor =  handlerShoe.filter(theColor ,parseInt(theSize), theBrand);
    console.log(collactor);
    if(collactor.length > 0){
      var data = templateResults({results: collactor});
      document.querySelector('.display-results').innerHTML = data;
    }
    else{
      document.querySelector('.display-results').innerHTML = 'Theres no stock available';
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
