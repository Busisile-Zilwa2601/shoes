describe('The Shoe Catalogue function', function(){
  describe('Filtering', function(){
    it('It should return a list of object(s) with all the shoes', function(){
      var myShoes = shoeCatalogue();
      assert.deepEqual(myShoes.filter('', null, ''),
      [{color:"Pink",brand:"Nike",price:750,size:[1,2,3,4,5],in_stock:5},
      {color:"Pink",brand:"Adidas",price:600,size:[1,2,3,4,5],in_stock:19},
      {color:"Pink",brand:"Converse",price:399,size:[1,2,3,4,5],in_stock:11},
      {color:"Pink",brand:"Puma",price:799,size:[1,2,3,4,5],in_stock:10},
      {color:"White",brand:"Nike",price:999,size:[4,5,6,7,8,9,10],in_stock:10},
      {color:"White",brand:"Adidas",price:899,size:[2,4,5,6,7,8,9,10],in_stock:22},
      {color:"White",brand:"Jordan",price:1500,size:[7,8,9,10],in_stock:4},
      {color:"White",brand:"Converse",price:599,size:[5,6,7,8],in_stock:10},
      {color:"White",brand:"Puma",price:799,size:[4,5,6,9],in_stock:11},
      {color:"Black",brand:"Nike",price:1000,size:[7,8],in_stock:15},
      {color:"Black",brand:"Adidas",price:799,size:[3,6,7],in_stock:10},
      {color:"Black",brand:"Jordan",price:800,size:[7,8,9],in_stock:5},
      {color:"Black",brand:"Converse",price:500,size:[1,2,3,8],in_stock:3},
      {color:"Black",brand:"Puma",price:789,size:[6,7,8,9],in_stock:14},
      {color:"Blue",brand:"Nike",price:999,size:[3,6,8],in_stock:18},
      {color:"Blue",brand:"Converse",price:599,size:[2,4,6],in_stock:9},
      {color:"Orange",brand:"Adidas",price:499,size:[1,2],in_stock:11},
      {color:"Red",brand:"Adidas",price:799,size:[3,4],in_stock:10},
      {color:"Red",brand:"Nike",price:849,size:[3,4],in_stock:20},
      {color:"Red",brand:"Jordan",price:1000,size:[3,4],in_stock:5},
      {color:"Red",brand:"Puma",price:799,size:[3,4],in_stock:15}] );
    });
    it("it should return a list of object(s) with all the Pink shoes", function(){
        var pinkShoes = shoeCatalogue();
        assert.deepEqual(pinkShoes.filter('Pink', null, ''),
        [{color :"Pink", brand :"Nike", price :750, size :[1,2,3,4,5], in_stock :5},
        { color :"Pink", brand :"Adidas", price :600, size :[1,2,3,4,5], in_stock :19},
        {color :"Pink", brand :"Converse", price :399, size :[1,2,3,4,5], in_stock :11},
        { color :"Pink", brand :"Puma", price :799, size :[1,2,3,4,5], in_stock :10}]);
    });
    it("It should return a list of object(s) with all the brand:Nike shoes", function(){
      var myShoe = shoeCatalogue();
      assert.deepEqual(myShoe.filter('', null, 'Nike'),
      [{color: "Pink", brand: "Nike", price: 750 , size:[1,2,3,4,5], in_stock: 5},
      {color: "White", brand: "Nike", price: 999, size: [4,5,6,7,8,9,10], in_stock: 10},
      {color: "Black", brand: "Nike", price: 1000, size: [7,8], in_stock: 15},
      {color: "Blue" ,brand: "Nike", price: 999, size: [3,6,8], in_stock: 18},
      {color: "Red", brand: "Nike", price: 849, size: [3,4], in_stock: 20}]);
    });
    it('It shoud return a list of object(s) with all the shoes with size: 10', function(){
      var myShoe = shoeCatalogue();
      assert.deepEqual(myShoe.filter('', 10, ''),
      [{color :"White", brand:"Nike", price: 999, size: [4,5,6,7,8,9,10], in_stock: 10},
      {color :"White", brand :"Adidas", price: 899, size: [2,4,5,6,7,8,9,10], in_stock :22},
      {color :"White", brand: "Jordan", price :1500, size: [7,8,9,10], in_stock: 4}]);
    });
    it("it should return a list of object(s) with all the color: Pink, brand: Nike shoes", function(){
      var myShoe = shoeCatalogue();
      assert.deepEqual(myShoe.filter('Pink', null, 'Nike'), [{color :"Pink", brand :"Nike", price :750, size :[1,2,3,4,5], in_stock: 5}]);
    });
    it('It should return a list of object(s) with color: Red, size: 3, brand: Nike ', function(){
      var myShoe = shoeCatalogue();
      assert.deepEqual(myShoe.filter('Red', 3,'Nike' ),
      [{color: "Red", brand: "Nike", price: 849, size: [3,4], in_stock: 20}]);
    });
    describe('Add, Checkout and Cancel', function(){
      it('If the shoe existance is false, It should return false and add the new shoe', function(){
          var myShoe = shoeCatalogue();
          assert.deepEqual(myShoe.addNewShoe('Blue', 'Adidas', 3, 500, 5), false);
      });
      it('If the shoe existance is true, It should return true and increment shoes stock', function(){
        var myShoe = shoeCatalogue();
        assert.deepEqual(myShoe.addNewShoe('Red', 'Nike', 5, 500, 2), true);
      });
      it('It should return a list of object(s) with each object\'s key \"in_stock\" decreased by one', function(){
        var myShoe = shoeCatalogue();
        myShoe.addToCart(myShoe.filter('White', 5, 'Nike'));
        myShoe.addToCart(myShoe.filter('Red', 3, 'Nike'));
        myShoe.addToCart(myShoe.filter('White', 8, 'Jordan'));
        assert.deepEqual(myShoe.returnBusket(),
        [{color:"White",brand:"Nike",price:999,size:[4,5,6,7,8,9,10],in_stock:9},
         {color:"Red",brand:"Nike",price:849,size:[3,4],in_stock:19},
         {color:"White",brand:"Jordan",price:1500,size:[7,8,9,10],in_stock:3}]);
      });
    });
  });
});
