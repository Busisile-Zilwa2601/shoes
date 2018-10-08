document.addEventListener('DOMContentLoaded', function () {
  var handlerShoe = shoeCatalogue();
  //menuBar
  var sourceBar = document.querySelector('.menuBar').innerHTML;
  var templateBar = Handlebars.compile(sourceBar);
  var dataTable = templateBar({shoes: handlerShoe.getBrands()});
  document.getElementById('menu').innerHTML = dataTable;
  
  //modal data
  var sourceModal = document.querySelector('.modalShoe').innerHTML;
  var templateModal = Handlebars.compile(sourceModal);
  var dataModal = templateModal({shoes :handlerShoe.filterByBrand()});
  document.getElementById('modals').innerHTML = dataModal;

  
  //variables
  var colorBtn = document.getElementById('shoeColor');
  var brandBtn = document.getElementById('shoeBrand');
  var sizeBtn = document.getElementById('shoeSize');
  var searchBtn = document.getElementById('search');
  var menuBtn = document.querySelector('.click-span');
  var collactor = [];
  var sourceResultsOne = document.querySelector('.screen-message-one').innerHTML;
  var sourceResultsTwo = document.querySelector('.screen-message-two').innerHTML;

  //fill the list;
  function selectedItems() {
    let theColor = changeOnColor();
    let theBrand = changeOnBrand();
    let theSize = changeOnSize();
    collactor = handlerShoe.filter(theColor, parseInt(theSize), theBrand);
    if (collactor.length > 0) {
      var templateResults = Handlebars.compile(sourceResultsOne);
      var data = templateResults({
        results: [{brand :collactor[0].brand, in_stock:collactor[0].in_stock}]
      });
      document.querySelector('.display-results').innerHTML = data;
    } else {
      var templateResults = Handlebars.compile(sourceResultsTwo);
      var data = templateResults({
        results: [{
          brand: theBrand,
          size: theSize
        }],
        size: theSize
      });
      document.querySelector('.display-results').innerHTML = data;
    }
  }
  searchBtn.addEventListener('click', selectedItems);



  function changeOnColor() {
    return colorBtn.options[colorBtn.selectedIndex].value;
  }
  colorBtn.addEventListener('change', changeOnColor);

  function changeOnBrand() {
    return brandBtn.options[brandBtn.selectedIndex].value;
  }
  brandBtn.addEventListener('change', changeOnBrand);

  function changeOnSize() {
    return sizeBtn.options[sizeBtn.selectedIndex].value;
  }
  sizeBtn.addEventListener('change', changeOnSize);

  window.addEventListener('load', function () {
    document.getElementById('menuBox').style.visibility = 'hidden';
  });
  
  menuBtn.addEventListener('click', function () {
    if (document.getElementById('menuBox').style.visibility == 'hidden') {
      document.getElementById('menuBox').style.visibility = 'visible';
    } else {
      document.getElementById('menuBox').style.visibility = 'hidden';
    }
  });
  //add to cart
  document.querySelector('.addCart').addEventListener('click', function(){
    let tempStock = handlerShoe.addToCart(collactor);
    console.log(tempStock);
  }); 
  document.querySelector('.fa-cart-arrow-down').addEventListener('click', function(){
    var sourceModal = document.querySelector('.addedToCart').innerHTML;
    var templateModal = Handlebars.compile(sourceModal);
    var dataModal = templateModal({theBusket :handlerShoe.returnBusket()});
    document.getElementById('modal-busket').innerHTML = dataModal;
  });
});