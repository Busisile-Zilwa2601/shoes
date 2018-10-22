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
  //-------------------------------------------------------------------------------
  //create searched shoe
  let sourceSearched = document.querySelector('.searchedShoe').innerHTML;
  let templateSearched = Handlebars.compile(sourceSearched);
  //-------------------------------------------------------------------------------
  //fill the list on menu box;
  function selectedItems() {
    let theColor = changeOnColor();
    let theBrand = changeOnBrand();
    //-------------------------------------------------------------------------------
    collactor = handlerShoe.filter(theColor, null, theBrand);
    if (collactor.length > 0) {
      let dataSearched = templateSearched({
        found: collactor
      });
      document.getElementById('all-data').innerHTML = '';
      document.getElementById('all-data').innerHTML = dataSearched;
    } else {
      let dataSearched = templateSearched({
        text: 'Out of stock'
      });
      document.getElementById('all-data').innerHTML = '';
      document.getElementById('all-data').innerHTML = dataSearched;
    }
    document.getElementById('menuBox').style.visibility = 'hidden';
  }
  searchBtn.addEventListener('click', selectedItems);
  //Drop down of color on the Menu
  function changeOnColor() {
    if(colorBtn.options[colorBtn.selectedIndex].value == 'Select Color'){
      colorBtn.options[colorBtn.selectedIndex].value = '';
    }
    return colorBtn.options[colorBtn.selectedIndex].value;
  }
  colorBtn.addEventListener('change', changeOnColor);
  //Drop down for brand search on the menu
  function changeOnBrand() {
    if(brandBtn.options[brandBtn.selectedIndex].value == 'Select Brand'){
      brandBtn.options[brandBtn.selectedIndex].value = '';
    }
    return brandBtn.options[brandBtn.selectedIndex].value;
  }
  brandBtn.addEventListener('change', changeOnBrand);
  //Window must load with menu hidden
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
  //-----------------------------------------------------------------------------
  //add to cart
  //-----------------------------------------------------------------------------
  //Adding to basket whatever that is searched from the menu
  window.addMyBusket = function addMyBusket(){
    let dropDown = document.getElementById('sizeDropDown');
    let size = dropDown.options[dropDown.selectedIndex].value;
    let qty = document.querySelectorAll('input[name = "qty"]:checked');
    if (size === "select size" || size === '') {
      alert('Please Select size');
    } else {
      let qtyValue = 0;
      for(let i=0; i< qty.length; i++){
        qtyValue += parseInt(qty[i].value);
      }
      let stockReturn = handlerShoe.addToCart(collactor, size, qtyValue);
      collactor[0].in_stock = stockReturn;
      let dataSearched = templateSearched({
        found: collactor
      });
      document.getElementById('all-data').innerHTML = '';
      document.getElementById('all-data').innerHTML = dataSearched;
    }
  }
  //-------------------------------------------------------------------------------
  //View the items added on the busket
  document.querySelector('.fa-cart-arrow-down').addEventListener('click', function () {
    var sourceModal = document.querySelector('.addedToCart').innerHTML;
    var templateModal = Handlebars.compile(sourceModal);
    var dataModal = templateModal({
      theBusket: handlerShoe.returnBusket()
    });
    document.getElementById('modal-busket').innerHTML = dataModal;
  });
  //-------------------------------------------------------------------------------
  //Quick view Modal
  let sourceQuickView = document.querySelector('.shoe-quick-view').innerHTML;
  let templateQuickView = Handlebars.compile(sourceQuickView);
  let dataQuickView = templateQuickView({
    shoes: handlerShoe.filter('', null, '')
  });
  document.getElementById('display-results').innerHTML = dataQuickView;
  //------------------------------------------------------------------------------
  //data in the modals
  $(document).ready(function(){
    let temp = handlerShoe.filter('',null,'');
    for(let i = 0; i < temp.length; i++){
      $('#'+temp[i].id+'').on('show.bs.modal', function(){
        let modal = $(this);
        modal.find('.modal-body button').click(function(){
          let size = modal.find('.modal-body select').val();
          let brand = modal.find('.modal-body span').text();
          let color = modal.find('.modal-color').text();
          if(temp[i].in_stock > 0 && size != 'select size'){
            console.log('pass stock');
            let finalTemp = [{
              color: color,
              brand: brand,
              price: 1000,
              name : temp[i].name,
              size: size,
              image: temp[i].image,
              id: temp[i].id,
              in_stock: temp[i].in_stock
            }];
            console.log(finalTemp);
            let stk = handlerShoe.addToCart(finalTemp, size, 1);
            console.log(stk);
          }
        });
      })
    }
  })
  
});