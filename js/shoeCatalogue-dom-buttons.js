document.addEventListener('DOMContentLoaded', function () {
  var handlerShoe = shoeCatalogue();
  //-------------------------------------------------------------------------
  //menuBar
  var sourceBar = document.querySelector('.menuBar').innerHTML;
  var templateBar = Handlebars.compile(sourceBar);
  var dataTable = templateBar({
    shoes: handlerShoe.getBrands()
  });
  document.getElementById('menu').innerHTML = dataTable;
  //-------------------------------------------------------------------------
  //Display all the shoes on the database on window load
  let sourceAllShoes = document.querySelector('.all-shoes').innerHTML;
  let templateAllShoes = Handlebars.compile(sourceAllShoes);
  window.addEventListener('load', function () {
    let dataAll = templateAllShoes({
      shoes: handlerShoe.filter('', null, '')
    });
    document.getElementById('all-data').innerHTML = dataAll;
  });
  //------------------------------------------------------------------------
  //Display all shoes of selected brand
  let items = document.querySelectorAll('.clickable');
  for (let i = 0; i < items.length; i++) {
    items[i].addEventListener('click', function () {
      let $this = $(this),
        $chk = $this.find('input:radio'),
        checked = $chk.is(':checked');
      $chk.prop('checked', !checked);
      $this.toggleClass('checked', !checked);
      let radioBtnChecked = document.querySelector('input[name="brandName"]:checked');
      if (radioBtnChecked) {
        let brandValue = radioBtnChecked.value;
        let dataOfBrand = templateAllShoes({
          shoes: handlerShoe.filter('', null, brandValue)
        });
        document.getElementById('all-data').innerHTML = '';
        document.getElementById('all-data').innerHTML = dataOfBrand;
      }
    });
  }
  //-------------------------------------------------------------------------------------------
  //variables
  var colorBtn = document.getElementById('shoeColor');
  var brandBtn = document.getElementById('shoeBrand');
  var sizeBtn = document.getElementById('shoeSize');
  var searchBtn = document.getElementById('search');
  var menuBtn = document.querySelector('.click-span');
  var collactor = [];
  var sourceResultsOne = document.querySelector('.screen-message-one').innerHTML;
  var sourceResultsTwo = document.querySelector('.screen-message-two').innerHTML;
  //-------------------------------------------------------------------------------
  //fill the list on menu box;
  function selectedItems() {
    let theColor = changeOnColor();
    let theBrand = changeOnBrand();
    // let theSize = changeOnSize();
    //-------------------------------------------------------------------------------
    //create a modal for search shoe
    let sourceModalSearch = document.querySelector('.searchedShoe').innerHTML;
    let templateModalSearch = Handlebars.compile(sourceModalSearch);
    //-------------------------------------------------------------------------------
    collactor = handlerShoe.filter(theColor, null, theBrand);
    if (collactor.length > 0) {
      let dataModalSearch = templateModalSearch({
        found: collactor
      });
      document.getElementById('modal-search').innerHTML = dataModalSearch;
    } else {
      let dataModalSearch = templateModalSearch({text: 'Out of stock'});
      document.getElementById('modal-search').innerHTML = dataModalSearch;
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
  window.addMyBusket = function addMyBusket(event){
    let itemsListSize = [];
    $('.size-class').click(function(){
      var $this = $(this), $chk = $this.find('input:checkbox'), checked = $chk.is(':checked'); 
      $chk.prop('checked', !checked);
      $this.toggleClass('checked', !checked);
      if($chk.is(':checked')){
        console.log('checkbox pressed...')
        console.log($chk.value);
        itemsListSize.push($chk.val());
      }
    });
    tempStock = handlerShoe.addToCart(collactor);
    
  }
  document.querySelector('.fa-cart-arrow-down').addEventListener('click', function () {
    var sourceModal = document.querySelector('.addedToCart').innerHTML;
    var templateModal = Handlebars.compile(sourceModal);
    var dataModal = templateModal({
      theBusket: handlerShoe.returnBusket()
    });
    document.getElementById('modal-busket').innerHTML = dataModal;
  });
});