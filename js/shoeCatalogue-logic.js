function shoeCatalogue(){
  var shoes = [
    {color : 'Pink',
     brand : 'Nike',
     price : 750,
     size : [1,2,3,4,5],
     image:'data/pinkNike.jpg',
     id: 'image11',
     in_stock: 5},
    {color : 'Pink',
     brand : 'Adidas',
     price : 600,
     size : [1,2,3,4,5],
     image:'data/pinkAdidas.jpg',
     id:'image9',
     in_stock: 19},
    {color : 'Pink',
      brand : 'Converse',
      price : 399,
      size : [1,2,3,4,5],
      image:'data/pinkConverseAllStar.jpeg',
      id:'image10',
      in_stock: 11},
    {color : 'Pink',
      brand : 'Puma',
      price : 799,
      size : [1,2,3,4,5],
      image:'data/pinkPuma.jpg',
      id: 'image12',
      in_stock: 10},
    {color : 'White',
      brand : 'Nike',
      price : 999,
      size : [4,5,6,7,8,9,10],
      image:'data/whiteNike.jpeg',
      id: 'image20',
      in_stock: 10},
    {color : 'White',
      brand : 'Adidas',
      price : 899,
      size : [2,4,5,6,7,8,9,10],
      image:'data/whiteAdidas.jpeg',
      id: 'image17',
      in_stock: 22},
    {color : 'White',
      brand : 'Jordan',
      price : 1500,
      size : [7,8,9,10],
      image:'data/whiteJordan.jpg',
      id: 'image19',
      in_stock: 4},
    {color : 'White',
      brand : 'Converse',
      price : 599,
      size : [5,6,7,8],
      image:'data/whiteConverseAllStar.jpeg',
      id: 'image18',
      in_stock: 10},
    {color : 'White',
      brand : 'Puma',
      price : 799,
      size : [4,5,6,9],
      image:'data/whitePuma.jpeg',
      id: 'image21',
      in_stock: 11},
    {color : 'Black',
      brand : 'Nike',
      price : 1000,
      size : [7,8],
      image: 'data/blackNike.jpg',
      id: 'image4',
      in_stock: 15},
    {color : 'Black',
      brand : 'Adidas',
      price : 799,
      size : [3,6,7],
      image:'data/blackAddidas.jpeg',
      id: 'image1',
      in_stock: 10},
    {color : 'Black',
      brand : 'Jordan',
      price : 800,
      size : [7,8,9],
      image:'data/blackJordan.jpg',
      id: 'image3',
      in_stock: 5},
    {color : 'Black',
      brand : 'Converse',
      price : 500,
      size : [1,2,3,8],
      image: 'data/BlackConverseAllStar.jpeg',
      id: 'image2',
      in_stock: 3},
    {color : 'Black',
      brand : 'Puma',
      price : 789,
      size : [6,7,8,9],
      image:'data/blackPuma.jpeg',
      id: 'image5',
      in_stock: 14},
    {color : 'Blue',
      brand : 'Nike',
      price : 999,
      size : [3,6,8],
      image:'data/buleNike.jpeg',
      id:'image7',
      in_stock: 18},
    {color : 'Blue',
      brand : 'Converse',
      price : 599,
      size : [2,4,6],
      image:'data/blueConverse.jpg',
      id:'image6',
      in_stock: 9},
    {color : 'Orange',
      brand : 'Adidas',
      price : 499,
      size : [1,2],
      image:'data/OrangeAddidas.jpeg',
      id:'image8',
      in_stock: 11},
    {color : 'Red',
      brand : 'Nike',
      price : 849,
      size : [3,4],
      image:'data/redNike.jpg',
      id: 'image15',
      in_stock: 20},
    {color : 'Red',
      brand : 'Jordan',
      price : 1000,
      size : [3,4],
      image:'data/redJordan.jpg',
      id: 'image14',
      in_stock: 5},
    {color : 'Red',
      brand : 'Adidas',
      price : 799,
      size : [3,4],
      image:'data/redAdids.jpg',
      id: 'image13',
      in_stock: 10},
    {color : 'Red',
      brand : 'Puma',
      price : 799,
      size : [3,4],
      image:'data/redPuma.jpg',
      id: 'image16',
      in_stock: 15},
  ];
  //return all brands on shoes
  function getBrands(){
    var myBrand = [{brand: shoes[0].brand}];
    for(let i = 1; i < shoes.length; i++){
      myBrand.push({brand:shoes[i].brand});
    }
    for(let i = 0; i < myBrand.length-1; i++){
      for(let j= 1; j < getLength(myBrand); j++){
        if(myBrand[i].brand === myBrand[j].brand){
          myBrand.splice(j,1);
        }
      }
    }
    return myBrand;
  }
  function filterByBrand(){
    let myBrand = getBrands();
    for(let i = 0; i< myBrand.length; i++){
      myBrand[i].list = filter('',null, myBrand[i].brand);
    }
    return myBrand;
  }

  function getLength(arr){
    return arr.length;
  }
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
              // console.log(thisList);
          }
        });
      if(!present){
        shoes.push({color: newColor,
                               brand: newBrand,
                               price: newPrice,
                               size: [newSize],
                               in_stock: newStack
                             });
        // console.log(shoes[shoes.length-1]);
      }
      return present;
  }
  function addToCart(shoe, sizeSelected){
    if(shoe.length != 0){
      for(var i = 0; i < shoes.length; i++){
        if((shoe[0].brand === shoes[i].brand)&&(shoe[0].color === shoes[i].color) ){
          if(shoe[0].in_stock > 0){
            shoe[0].in_stock -= 1;
            busket.push({color:shoe[0].color, brand:shoe[0].brand, price:shoe[0].price, image:shoe[0].image, size:sizeSelected});
          }
        }
      }
      return shoe[0].in_stock;
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
  // function selectionCheckOut(){
  //
  // }
  // function cancelAll(listReturned){
  //   var currentList = returnBusket();
  //
  //
  // }
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
    filter,
    addToCart,
    addNewShoe,
    returnBusket,
    checkOutAll,
    getBrands,
    filterByBrand
  }

}
