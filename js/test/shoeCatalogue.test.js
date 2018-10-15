describe('The Shoe Catalogue function', function(){
  describe('Filtering', function(){
    it('It should return a list of object(s) with all the shoes', function(){
      var myShoes = shoeCatalogue();
      assert.deepEqual(myShoes.filter('', null, ''),
      [ {"color":"Pink","brand":"Nike","price":750,"size":[1,2,3,4,5],"image":"data/pinkNike.jpg","id":"image11","in_stock":5},
        {"color":"Pink","brand":"Adidas","price":600,"size":[1,2,3,4,5],"image":"data/pinkAdidas.jpg","id":"image9","in_stock":19},
        {"color":"Pink","brand":"Converse","price":399,"size":[1,2,3,4,5],"image":"data/pinkConverseAllStar.jpeg","id":"image10","in_stock":11},
        {"color":"Pink","brand":"Puma","price":799,"size":[1,2,3,4,5],"image":"data/pinkPuma.jpg","id":"image12","in_stock":10},
        {"color":"White","brand":"Nike","price":999,"size":[4,5,6,7,8,9,10],"image":"data/whiteNike.jpeg","id":"image20","in_stock":10},
        {"color":"White","brand":"Adidas","price":899,"size":[2,4,5,6,7,8,9,10],"image":"data/whiteAdidas.jpeg","id":"image17","in_stock":22},
        {"color":"White","brand":"Jordan","price":1500,"size":[7,8,9,10],"image":"data/whiteJordan.jpg","id":"image19","in_stock":4},
        {"color":"White","brand":"Converse","price":599,"size":[5,6,7,8],"image":"data/whiteConverseAllStar.jpeg","id":"image18","in_stock":10},
        {"color":"White","brand":"Puma","price":799,"size":[4,5,6,9],"image":"data/whitePuma.jpeg","id":"image21","in_stock":11},
        {"color":"Black","brand":"Nike","price":1000,"size":[7,8],"image":"data/blackNike.jpg","id":"image4","in_stock":15},
        {"color":"Black","brand":"Adidas","price":799,"size":[3,6,7],"image":"data/blackAddidas.jpeg","id":"image1","in_stock":10},
        {"color":"Black","brand":"Jordan","price":800,"size":[7,8,9],"image":"data/blackJordan.jpg","id":"image3","in_stock":5},
        {"color":"Black","brand":"Converse","price":500,"size":[1,2,3,8],"image":"data/BlackConverseAllStar.jpeg","id":"image2","in_stock":3},
        {"color":"Black","brand":"Puma","price":789,"size":[6,7,8,9],"image":"data/blackPuma.jpeg","id":"image5","in_stock":14},
        {"color":"Blue","brand":"Nike","price":999,"size":[3,6,8],"image":"data/buleNike.jpeg","id":"image7","in_stock":18},
        {"color":"Blue","brand":"Converse","price":599,"size":[2,4,6],"image":"data/blueConverse.jpg","id":"image6","in_stock":9},
        {"color":"Orange","brand":"Adidas","price":499,"size":[1,2],"image":"data/OrangeAddidas.jpeg","id":"image8","in_stock":11},
        {"color":"Red","brand":"Nike","price":849,"size":[3,4],"image":"data/redNike.jpg","id":"image15","in_stock":20},
        {"color":"Red","brand":"Jordan","price":1000,"size":[3,4],"image":"data/redJordan.jpg","id":"image14","in_stock":5},
        {"color":"Red","brand":"Adidas","price":799,"size":[3,4],"image":"data/redAdids.jpg","id":"image13","in_stock":10},
        {"color":"Red","brand":"Puma","price":799,"size":[3,4],"image":"data/redPuma.jpg","id":"image16","in_stock":15}]);
    });
    it("it should return a list of object(s) with all the Pink shoes", function(){
        var pinkShoes = shoeCatalogue();
        assert.deepEqual(pinkShoes.filter('Pink', null, ''),
        [
          {"color":"Pink","brand":"Nike","price":750,"size":[1,2,3,4,5],"image":"data/pinkNike.jpg","id":"image11","in_stock":5},
          {"color":"Pink","brand":"Adidas","price":600,"size":[1,2,3,4,5],"image":"data/pinkAdidas.jpg","id":"image9","in_stock":19},
          {"color":"Pink","brand":"Converse","price":399,"size":[1,2,3,4,5],"image":"data/pinkConverseAllStar.jpeg","id":"image10","in_stock":11},
          {"color":"Pink","brand":"Puma","price":799,"size":[1,2,3,4,5],"image":"data/pinkPuma.jpg","id":"image12","in_stock":10}]);
    });
    it("It should return a list of object(s) with all the brand:Nike shoes", function(){
      var myShoe = shoeCatalogue();
      assert.deepEqual(myShoe.filter('', null, 'Nike'),
      [
        {"color":"Pink","brand":"Nike","price":750,"size":[1,2,3,4,5],"image":"data/pinkNike.jpg","id":"image11","in_stock":5},
        {"color":"White","brand":"Nike","price":999,"size":[4,5,6,7,8,9,10],"image":"data/whiteNike.jpeg","id":"image20","in_stock":10},
        {"color":"Black","brand":"Nike","price":1000,"size":[7,8],"image":"data/blackNike.jpg","id":"image4","in_stock":15},
        {"color":"Blue","brand":"Nike","price":999,"size":[3,6,8],"image":"data/buleNike.jpeg","id":"image7","in_stock":18},
        {"color":"Red","brand":"Nike","price":849,"size":[3,4],"image":"data/redNike.jpg","id":"image15","in_stock":20}]);
    });
    it('It shoud return a list of object(s) with all the shoes with size: 10', function(){
      var myShoe = shoeCatalogue();
      assert.deepEqual(myShoe.filter('', 10, ''),
      [
        {"color":"White","brand":"Nike","price":999,"size":[4,5,6,7,8,9,10],"image":"data/whiteNike.jpeg","id":"image20","in_stock":10},
        {"color":"White","brand":"Adidas","price":899,"size":[2,4,5,6,7,8,9,10],"image":"data/whiteAdidas.jpeg","id":"image17","in_stock":22},
        {"color":"White","brand":"Jordan","price":1500,"size":[7,8,9,10],"image":"data/whiteJordan.jpg","id":"image19","in_stock":4}]);
    });
    it("it should return a list of object(s) with all the color: Pink, brand: Nike shoes", function(){
      var myShoe = shoeCatalogue();
      assert.deepEqual(myShoe.filter('Pink', null, 'Nike'), 
      [{"color":"Pink","brand":"Nike","price":750,"size":[1,2,3,4,5],"image":"data/pinkNike.jpg","id":"image11","in_stock":5}]);
    });
    it('It should return a list of object(s) with color: Red, size: 3, brand: Nike ', function(){
      var myShoe = shoeCatalogue();
      assert.deepEqual(myShoe.filter('Red', 3,'Nike' ),
      [{"color":"Red","brand":"Nike","price":849,"size":[3,4],"image":"data/redNike.jpg","id":"image15","in_stock":20}]);
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
        myShoe.addToCart(myShoe.filter('White', null, 'Nike'), 5);
        myShoe.addToCart(myShoe.filter('Red', null, 'Nike'), 3);
        myShoe.addToCart(myShoe.filter('White', null, 'Jordan'), 8);
        console.log(JSON.stringify(myShoe.returnBusket()));
        assert.deepEqual(myShoe.returnBusket(),
        [
          {"color":"White","brand":"Nike","price":999,"image":"data/whiteNike.jpeg","size":5},
          {"color":"Red","brand":"Nike","price":849,"image":"data/redNike.jpg","size":3},
          {"color":"White","brand":"Jordan","price":1500,"image":"data/whiteJordan.jpg","size":8}]);
      });
    });
  });
});
