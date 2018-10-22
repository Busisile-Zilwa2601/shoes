function shoeCatalogue() {
  //------------------------------------------------------------------------------
  // Data
  var shoes = [{
      color: 'Pink',
      brand: 'Nike',
      price: 2199.95,
      name: 'Epic Reack Flynit',
      size: [1, 2, 3, 4, 5],
      image: 'data/pinkNike.jpg',
      id: 'image11',
      in_stock: 5
    },
    {
      color: 'Pink',
      brand: 'Adidas',
      price: 600,
      name : 'Adidas Pink 1',
      size: [1, 2, 3, 4, 5],
      image: 'data/pinkAdidas.jpg',
      id: 'image9',
      in_stock: 19
    },
    {
      color: 'Pink',
      brand: 'Converse',
      price: 799,
      name: '1 Star OX',
      size: [1, 2, 3, 4, 5],
      image: 'data/pinkConverseAllStar.jpg',
      id: 'image10',
      in_stock: 11
    },
    {
      color: 'Pink',
      brand: 'Puma',
      price: 799,
      name : 'Puma Pink 1',
      size: [1, 2, 3, 4, 5],
      image: 'data/pinkPuma.jpg',
      id: 'image12',
      in_stock: 10
    },
    {
      color: 'White',
      brand: 'Nike',
      price: 999.95,
      name: 'SB Zoom Blazer Low',
      size: [4, 5, 6, 7, 8, 9, 10],
      image: 'data/whiteNike.jpg',
      id: 'image20',
      in_stock: 10
    },
    {
      color: 'White',
      brand: 'Adidas',
      price: 899,
      name : 'Adidas White 2',
      size: [2, 4, 5, 6, 7, 8, 9, 10],
      image: 'data/whiteAdidas.jpeg',
      id: 'image17',
      in_stock: 22
    },
    {
      color: 'White',
      brand: 'Jordan',
      price: 1500,
      name: 'Jordan White 1',
      size: [7, 8, 9, 10],
      image: 'data/whiteJordan.jpg',
      id: 'image19',
      in_stock: 4
    },
    {
      color: 'White',
      brand: 'Converse',
      price: 599,
      name: 'Unisex Shoe',
      size: [5, 6, 7, 8],
      image: 'data/whiteConverseAllStar.jpg',
      id: 'image18',
      in_stock: 10
    },
    {
      color: 'White',
      brand: 'Puma',
      price: 799,
      name : 'Puma White 2',
      size: [4, 5, 6, 9],
      image: 'data/whitePuma.jpeg',
      id: 'image21',
      in_stock: 11
    },
    {
      color: 'Black',
      brand: 'Nike',
      price: 1399.95,
      name: 'Air Max 90',
      size: [7, 8],
      image: 'data/blackNike.jpg',
      id: 'image4',
      in_stock: 15
    },
    {
      color: 'Black',
      brand: 'Adidas',
      price: 799,
      name: 'adidas Black 3',
      size: [3, 6, 7],
      image: 'data/blackAddidas.jpeg',
      id: 'image1',
      in_stock: 10
    },
    {
      color: 'Black',
      brand: 'Jordan',
      price: 800,
      name : 'Jordan Black 2',
      size: [7, 8, 9],
      image: 'data/blackJordan.jpg',
      id: 'image3',
      in_stock: 5
    },
    {
      color: 'Black',
      brand: 'Converse',
      price: 599.95,
      name: 'Unsex shoe',
      size: [1, 2, 3, 8],
      image: 'data/blackConverseAllStar.jpg',
      id: 'image2',
      in_stock: 3
    },
    {
      color: 'Black',
      brand: 'Puma',
      price: 789,
      name : 'Puma Black 2',
      size: [6, 7, 8, 9],
      image: 'data/blackPuma.jpeg',
      id: 'image5',
      in_stock: 14
    },
    {
      color: 'Blue',
      brand: 'Nike',
      price: 2349.95,
      name: 'Air Max 1 OG iD',
      size: [3, 6, 8],
      image: 'data/blueNike.png',
      id: 'image7',
      in_stock: 18
    },
    {
      color: 'Blue',
      brand: 'Converse',
      price: 799,
      name: 'All Star-HI',
      size: [2, 4, 6],
      image: 'data/blueConverse.jpg',
      id: 'image6',
      in_stock: 9
    },
    {
      color: 'Orange',
      brand: 'Adidas',
      price: 499,
      name : 'Adidas Orange 4',
      size: [1, 2],
      image: 'data/OrangeAddidas.jpeg',
      id: 'image8',
      in_stock: 11
    },
    {
      color: 'Red',
      brand: 'Nike',
      price: 1599.00,
      name: 'Train Speed 4',
      size: [3, 4],
      image: 'data/redNike.jpg',
      id: 'image15',
      in_stock: 20
    },
    {
      color: 'Red',
      brand: 'Jordan',
      price: 1000,
      name : 'Jordan Red 3',
      size: [3, 4],
      image: 'data/redJordan.jpg',
      id: 'image14',
      in_stock: 5
    },
    {
      color: 'Red',
      brand: 'Adidas',
      price: 799,
      name: 'Adidas Red 5',
      size: [3, 4],
      image: 'data/redAdids.jpg',
      id: 'image13',
      in_stock: 10
    },
    {
      color: 'Red',
      brand: 'Puma',
      price: 799,
      name : 'Puma Red 3',
      size: [3, 4],
      image: 'data/redPuma.jpg',
      id: 'image16',
      in_stock: 15
    },
  ];
  //------------------------------------------------------------------------
  //return all brands on shoes
  function getBrands() {
    var myBrand = [{
      brand: shoes[0].brand
    }];
    for (let i = 1; i < shoes.length; i++) {
      myBrand.push({
        brand: shoes[i].brand
      });
    }
    for (let i = 0; i < myBrand.length - 1; i++) {
      for (let j = 1; j < getLength(myBrand); j++) {
        if (myBrand[i].brand === myBrand[j].brand) {
          myBrand.splice(j, 1);
        }
      }
    }
    return myBrand;
  }
  //-------------------------------------------------------------------------
  function filterByBrand() {
    let myBrand = getBrands();
    for (let i = 0; i < myBrand.length; i++) {
      myBrand[i].list = filter('', null, myBrand[i].brand);
    }
    return myBrand;
  }
  //--------------------------------------------------------------------------
  function getLength(arr) {
    return arr.length;
  }
  var currentStock = 0;
  var busket = [];
  var checkSize = function (value, list) {
    for (var i = 0; i < list.length; i++) {
      if (value === list[i]) {
        return value;
      }
    }
  }
  //----------------------------------------------------------------------------
  function addNewShoe(newColor, newBrand, newSize, newPrice, newStack) {
    var present = false;
    shoes.forEach(function (thisList) {
      if ((newColor === thisList.color) && (newBrand === thisList.brand)) {
        if (newSize !== checkSize(newSize, thisList['size'])) {
          thisList['size'].push(newSize);
          //
          present = true;
        } else {
          present = true;
        }
        thisList.in_stock += newStack;
        // console.log(thisList);
      }
    });
    if (!present) {
      shoes.push({
        color: newColor,
        brand: newBrand,
        price: newPrice,
        size: [newSize],
        in_stock: newStack
      });
    }
    return present;
  }
  //-----------------------------------------------------------------------------------
  let pos = 0;
  function isPresent(value, list){
    let present = false;
    for(let i =0; i< list.length; i++){
      if(value[0].color === list[i].color &&
         value[0].brand === list[i].brand &&
         value[0].image === list[i].image){
           pos = i;
           present = true;
      }
    }
    return present;
  }
  //------------------------------------------------------------------------------------
  function addToCart(shoe, sizeSelected, qty) {
    if(qty === 0 || qty === undefined){
      qty = 1;
    }
    let list = returnBusket();
    if (shoe.length != 0 && list.length != 0) {
      if (shoe[0].in_stock - qty > 0) {
          if (isPresent(shoe, list)) {
            list[pos].qauntity += qty;
            (list[pos].size).push(sizeSelected);
            console.log(list[pos].size);
            shoe[0].in_stock -= qty;
          } else {
            shoe[0].qauntity = qty;
            shoe[0].in_stock -= qty;
            busket.push({
              color: shoe[0].color,
              brand: shoe[0].brand,
              price: shoe[0].price,
              image: shoe[0].image,
              qauntity: shoe[0].qauntity,
              size: [sizeSelected]
            });
          }
        
        return shoe[0].in_stock;
      }

    } else if (shoe.length != 0 && list.length == 0) {
      if (shoe[0].in_stock > 0) {
        shoe[0].qauntity = qty;
        shoe[0].in_stock -= qty;
        busket.push({
          color: shoe[0].color,
          brand: shoe[0].brand,
          price: shoe[0].price,
          image: shoe[0].image,
          qauntity: shoe[0].qauntity,
          size: [sizeSelected]
        });
      }
      return shoe[0].in_stock;
    }
  }
  //------------------------------------------------------------
  function checkOutAll() {
    var list = returnBusket();
    if (list.length != 0) {
      for (var i = 0; i < list.length; i++) {
        for (var j = 0; j < shoes.length; j++) {
          if (
              (list[i].color === shoe[j].color) && 
              (list[i].brand === shoes[j].brand) && 
              (list[i].size === shoes[j].size)
            ) {
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
  //----------------------------------------------------------------------------------
  function filter(color, size, brand) {
    var returnList = [];
    shoes.forEach(function (thisList) {
      if (
          (color === thisList.color || color === '') && 
          (brand === thisList.brand || brand === '') && 
          (size === checkSize(size, thisList['size']) || size === null)
        ) {
        returnList.push(thisList);
      }
    });
    return returnList;
  }

  function returnBusket() {
    return busket;
  }
  return {
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