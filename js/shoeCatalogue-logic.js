function shoeCatalogue(){
  var shoes = [
    {color : 'Pink',
     brand : 'Nike',
     price : 750,
     size : [1,2,3,4,5],
     in_stock: 5},
    {color : 'Pink',
     brand : 'Adidas',
     price : 600,
     size : [1,2,3,4,5],
     in_stock: 19},
    {color : 'Pink',
      brand : 'Converse',
      price : 399,
      size : [1,2,3,4,5],
      in_stock: 11},
    {color : 'Pink',
      brand : 'Puma',
      price : 799,
      size : [1,2,3,4,5],
      in_stock: 10},
    {color : 'White',
      brand : 'Nike',
      price : 999,
      size : [4,5,6,7,8,9,10],
      in_stock: 10},
    {color : 'White',
      brand : 'Adidas',
      price : 899,
      size : [2,4,5,6,7,8,9,10],
      in_stock: 22},
    {color : 'White',
      brand : 'Jordan',
      price : 1500,
      size : [7,8,9,10],
      in_stock: 4},
    {color : 'White',
      brand : 'Converse',
      price : 599,
      size : [5,6,7,8],
      in_stock: 10},
    {color : 'White',
      brand : 'Puma',
      price : 799,
      size : [4,5,6,9],
      in_stock: 11},
    {color : 'Black',
      brand : 'Nike',
      price : 1000,
      size : [7,8],
      in_stock: 15},
    {color : 'Black',
      brand : 'Adidas',
      price : 799,
      size : [3,6,7],
      in_stock: 10},
    {color : 'Black',
      brand : 'Jordan',
      price : 800,
      size : [7,8,9],
      in_stock: 5},
    {color : 'Black',
      brand : 'Converse',
      price : 500,
      size : [1,2,3,8],
      in_stock: 3},
    {color : 'Black',
      brand : 'Puma',
      price : 789,
      size : [6,7,8,9],
      in_stock: 14},
    {color : 'Blue',
      brand : 'Nike',
      price : 999,
      size : [3,6,8],
      in_stock: 18},
    {color : 'Blue',
      brand : 'Converse',
      price : 599,
      size : [2,4,6],
      in_stock: 9},
    {color : 'Orange',
      brand : 'Adidas',
      price : 499,
      size : [1,2],
      in_stock: 11},
    {color : 'Red',
      brand : 'Adidas',
      price : 799,
      size : [3,4],
      in_stock: 10},
    {color : 'Red',
      brand : 'Nike',
      price : 849,
      size : [3,4],
      in_stock: 20},
    {color : 'Red',
      brand : 'Jordan',
      price : 1000,
      size : [3,4],
      in_stock: 5},
    {color : 'Red',
      brand : 'Puma',
      price : 799,
      size : [3,4],
      in_stock: 15},
  ];
  var currentStock = 0;
  var busket = [];
  var checkSize = function(value, list){
    for(var i = 0; i < list.length; i++){
      if(value === list[i]){
        return value;
      }
    }
  }
  function addNewShoe(newColor, newBrand, newSize, newPrice, newStack){
      var present = false;
        shoes.forEach(function(thisList){
          if((newColor === thisList.color)&&(newBrand === thisList.brand )){
            if(newSize !== checkSize(newSize, thisList['size'])){
              thisList['size'].push(newSize);
              //
              present = true;
            }
            else{
              present = true;
            }
            thisList.in_stock += newStack;
              console.log(thisList);
          }
        });
      if(!present){
        shoes.push({color: newColor,
                               brand: newBrand,
                               price: newPrice,
                               size: [newSize],
                               in_stock: newStack
                             });
        console.log(shoes[shoes.length-1]);
      }
      return present;
  }
  function addToCart(listReturned){
    if(listReturned.length === 1){
      var myBrand = listReturned[0].brand;
      var myColor = listReturned[0].color;
      var myStock = listReturned[0].in_stock;
      var sizeList = []
      for(var i = 0; i < (listReturned[0].size).length; i++){
        sizeList.push((listReturned[0].size)[i]);
      }
      var pos = 0;
      for(var i = 0; i < shoes.length; i++){
        if((myBrand === shoes[i].brand)&&(myColor === shoes[i].color) ){
          myStock -= 1;
          pos = i;
          busket.push({color:myColor, brand:myBrand, price:listReturned[0].price, size:sizeList, in_stock:myStock});
        }
      }
    }
  }
  function checkOutAll(){
    var list = returnBusket();
    if(list.length != 0){
        for(var i = 0; i < list.length; i++){
          for(var j = 0; j < shoes.length; j++){
            if((list[i].color === shoe[j].color)&&(list[i].brand === shoes[j].brand )&&(list[i].size === shoes[j].size )){
              shoes[j].in_stock = list[i].in_stock;
            }
          }
        }
    }
  }
  function selectionCheckOut(){

  }
  function cancelAll(listReturned){
    var currentList = returnBusket();


  }
  function filter(color, size, brand){
    var returnList = [];
    shoes.forEach(function(thisList){
      if((color === thisList.color || color === '' )&&(brand === thisList.brand || brand === '' )&&(size === checkSize(size, thisList['size']) || size === null) ){
          returnList.push(thisList);
      }
    });
    return returnList;
  }
  function returnBusket(){
    return busket;
  }
  return{
    shoes,
    checkSize,
    cancel,
    filter,
    addToCart,
    addNewShoe,
    returnBusket
  }

}
