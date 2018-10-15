document.addEventListener('DOMContentLoaded', function(){
  //color filter
  var sourceFilterColor = document.querySelector('.colorFilter').innerHTML;
  var templateFilterColor = Handlebars.compile(sourceFilterColor);
  Handlebars.registerHelper('makeColor', function(name, options){
    var theList = options.fn();
    theList = theList.trim().split('\n');
    var output = '';
    for(var val in theList){
      var item = theList[val].trim();
      output += '<option value = "'+item+'">'+item+ '</option>';
    }
    return output;
  });
  document.getElementById('theColors').innerHTML = templateFilterColor();
  //The brand drop down
  var sourceFilterBrand = document.querySelector('.brandFilter').innerHTML;
  var templateFilterBrand = Handlebars.compile(sourceFilterBrand);
  Handlebars.registerHelper('makeBrand', function(name, options){
    var theList = options.fn();
    theList = theList.trim().split('\n');
    var output = '';
    for(var val in theList){
      var item = theList[val].trim();
      output += '<option value = "'+item+'">'+item+ '</option>';
    }
    return output;
  });
  document.getElementById('theBrands').innerHTML = templateFilterBrand();
  //make button
  var souceButton = document.querySelector('.makeButton').innerHTML;
  var templateButton = Handlebars.compile(souceButton);
  Handlebars.registerHelper('makeButton', function(name, options){
    var theList = options.fn();
    theList = theList.trim().split(',');
    var output = '';
    for(var val in theList){
      var item = theList[val].trim();
      output = '<button id = "search" class="btn btn-primary">'+item+'</button>';
    }
    return output;
  });
  document.querySelector('.buttonPlace').innerHTML = templateButton();
  
  //slide show
//   var ul;
//   var listItems;
//   var imageWidth;
//   var imageNumber;
//   var currentImage = 0;
//   function init(){
// 	   ul = document.getElementById('image_slider');
//      listItems = ul.children;
// 	   imageNumber = listItems.length;
// 	   imageWidth = listItems[0].children[0].offsetWidth;
// 	   ul.style.width = parseInt(imageWidth*imageNumber)+'px';
// 	   slider(ul);
//   }

//  function slider(ul){
//   animate({
// 		delay:17,
// 		duration:3000,
// 		delta:function(p){
// 			return Math.max(0, -1+2*p)
// 		},
// 		step:function(delta){
//       if(currentImage < imageNumber){
//         ul.style.left = '-'+ parseInt(currentImage * imageWidth + delta *imageWidth)+ 'px';
//       }else{
//         ul.style.right = '+'+ parseInt(imageWidth + delta *imageWidth)+ 'px';
//       }
// 		},
// 		callback:function(){
// 			currentImage++;
// 			if(currentImage < imageNumber - 1){
// 				slider(ul);
// 			}
// 			else{
//         currentImage = 0;
//         slider(ul);
// 			}
// 		}
// 	});
//  }
//  function animate(opts){
// 	var start = new Date();
// 	var id = setInterval(function(){
// 		var timePassed = new Date() - start;
// 		var progress = timePassed/opts.duration;
// 		if(progress > 1){
// 			progress = 1;
// 		}
// 		var delta = opts.delta(progress);
// 		opts.step(delta);
// 		if(progress == 1){
// 			clearInterval(id);
// 			opts.callback();
// 		}
// 	},opts.delay || 17);
//  }
// window.onload = init;
});
