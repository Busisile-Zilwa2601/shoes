document.addEventListener('DOMContentLoaded', function(){
  var handlerShoe = shoeCatalogue();
  var colorBtn = document.getElementById('shoeColor');
  var brandBtn = document.getElementById('shoeBrand');
  var sizeBtn = document.getElementById('shoeSize');
  var collactor = [];
  //fill the list;
  function colorSelector(theColor){
    if(theColor === colorBtn.options[colorBtn.selectedIndex].value){
      collactor = handlerShoe.filterByColor(theColor, collactor);
    }
    return collactor;
  }
  function brandSelector(theBrand){
    if(theBrand === brandBtn.options[brandBtn.selectedIndex].value){
      collactor = handlerShoe.filterByBrand(theBrand, collactor);
    }
    return collactor;
  }
  function sizeSelector(theSize){
    if(theSize === parseInt(sizeBtn.options[sizeBtn.selectedIndex].value)){
      collactor = handlerShoe.filterBySize(theSize, collactor);
    }
    return collactor;
  }
  //on change
  function changeOnColor(){
    if(colorBtn.options[colorBtn.selectedIndex].value === 'White'){
      console.log(colorSelector(colorBtn.options[colorBtn.selectedIndex].value));
    }
    else if(colorBtn.options[colorBtn.selectedIndex].value === 'Black'){
      console.log(colorSelector(colorBtn.options[colorBtn.selectedIndex].value));
    }
    else if(colorBtn.options[colorBtn.selectedIndex].value === 'Pink'){
      console.log(colorSelector(colorBtn.options[colorBtn.selectedIndex].value));
    }
    else if(colorBtn.options[colorBtn.selectedIndex].value === 'Blue'){
      console.log(colorSelector(colorBtn.options[colorBtn.selectedIndex].value));
    }
    else if(colorBtn.options[colorBtn.selectedIndex].value === 'Orange'){
      console.log(colorSelector(colorBtn.options[colorBtn.selectedIndex].value));
    }
    else if(colorBtn.options[colorBtn.selectedIndex].value === 'Red'){
      console.log(colorSelector(colorBtn.options[colorBtn.selectedIndex].value));
    }
  }
  colorBtn.addEventListener('change', changeOnColor);

  function changeOnBrand(){
    if(brandBtn.options[brandBtn.selectedIndex].value === 'Nike'){
      console.log(brandSelector(brandBtn.options[brandBtn.selectedIndex].value));
    }
    else if(brandBtn.options[brandBtn.selectedIndex].value === 'Adidas'){
      console.log(brandSelector(brandBtn.options[brandBtn.selectedIndex].value));
    }
    else if(brandBtn.options[brandBtn.selectedIndex].value === 'Puma'){
      console.log(brandSelector(brandBtn.options[brandBtn.selectedIndex].value));
    }
    else if(brandBtn.options[brandBtn.selectedIndex].value === 'Jordan'){
      console.log(brandSelector(brandBtn.options[brandBtn.selectedIndex].value));
    }
    else if(brandBtn.options[brandBtn.selectedIndex].value === 'Converse'){
      console.log(brandSelector(brandBtn.options[brandBtn.selectedIndex].value));
    }
  }
  brandBtn.addEventListener('change', changeOnBrand);

  function changeOnSize(){
    console.log(true);
    if(parseInt(sizeBtn.options[sizeBtn.selectedIndex].value) === 1){console.log(sizeSelector(parseInt(sizeBtn.options[sizeBtn.selectedIndex].value)));}
    else if(parseInt(sizeBtn.options[sizeBtn.selectedIndex].value) === 2){console.log(sizeSelector(parseInt(sizeBtn.options[sizeBtn.selectedIndex].value)));}
    else if(parseInt(sizeBtn.options[sizeBtn.selectedIndex].value) === 3){console.log(sizeSelector(parseInt(sizeBtn.options[sizeBtn.selectedIndex].value)));}
    else if(parseInt(sizeBtn.options[sizeBtn.selectedIndex].value) === 4){console.log(sizeSelector(parseInt(sizeBtn.options[sizeBtn.selectedIndex].value)));}
    else if(parseInt(sizeBtn.options[sizeBtn.selectedIndex].value) === 5){console.log(sizeSelector(parseInt(sizeBtn.options[sizeBtn.selectedIndex].value)));}
    else if(parseInt(sizeBtn.options[sizeBtn.selectedIndex].value) === 6){console.log(sizeSelector(parseInt(sizeBtn.options[sizeBtn.selectedIndex].value)));}
    else if(parseInt(sizeBtn.options[sizeBtn.selectedIndex].value) === 7){console.log(sizeSelector(parseInt(sizeBtn.options[sizeBtn.selectedIndex].value)));}
    else if(parseInt(sizeBtn.options[sizeBtn.selectedIndex].value) === 8){console.log(sizeSelector(parseInt(sizeBtn.options[sizeBtn.selectedIndex].value)));}
    else if(parseInt(sizeBtn.options[sizeBtn.selectedIndex].value) === 9){console.log(sizeSelector(parseInt(sizeBtn.options[sizeBtn.selectedIndex].value)));}
    else if(parseInt(sizeBtn.options[sizeBtn.selectedIndex].value) === 10){console.log(sizeSelector(parseInt(sizeBtn.options[sizeBtn.selectedIndex].value)));}
  }
  sizeBtn.addEventListener('change', changeOnSize);
});
