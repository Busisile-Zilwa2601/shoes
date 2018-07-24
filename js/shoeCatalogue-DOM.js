document.addEventListener('DOMContentLoaded', function(){
  //title
  var sourceTitle = document.querySelector('.title').innerHTML;
  var templateTitle = Handlebars.compile(sourceTitle);
  Handlebars.registerHelper('title', function(text){
    text = Handlebars.Utils.escapeExpression(text);
    return new Handlebars.SafeString('<h1>'+ text+ '</h1>');
  });
  document.getElementById('header').innerHTML = templateTitle();
  //the pictures
  var sourcePictures = document.querySelector('.pictures').innerHTML;
  var templatePictures = Handlebars.compile(sourcePictures);
  var imageData = templatePictures({images: [{image:'data/blackAddidas.jpeg', num : 'image1'},{image: 'data/BlackConverseAllStar.jpeg', num : 'image2'},
                                             {image:'data/blackJordan.jpg', num : 'image3'},{image: 'data/blackNike.jpg', num : 'image4'},{image:'data/blackPuma.jpeg', num : 'image5'},
                                             {image:'data/blueConverse.jpg', num : 'image6'},{image:'data/buleNike.jpeg', num : 'image7'},{image:'data/OrangeAddidas.jpeg', num : 'image8'},
                                             {image:'data/pinkAdidas.jpg', num : 'image9'},{image:'data/pinkConverseAllStar.jpeg', num : 'image10'},{image:'data/pinkNike.jpg', num : 'image11'},
                                             {image:'data/pinkPuma.jpg', num : 'image12'},{image:'data/redAdids.jpg', num : 'image13'},{image:'data/redJordan.jpg', num : 'image14'},
                                             {image:'data/redNike.jpg', num : 'image15'},{image:'data/redPuma.jpg', num : 'image16'},{image:'data/whiteAdidas.jpeg', num : 'image17'},
                                             {image:'data/whiteConverseAllStar.jpeg', num : 'image18'},{image:'data/whiteJordan.jpg', num : 'image19'},{image:'data/whiteNike.jpeg', num : 'image20'},
                                             {image:'data/whitePuma.jpeg', num : 'image21'}
                                           ]});
  document.querySelector('.image-slider-wrapper').innerHTML = imageData;
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

  //Size drop down
  var sourceSize = document.querySelector('.sizeFilter').innerHTML;
  var templateSize = Handlebars.compile(sourceSize);
  Handlebars.registerHelper('makeSize', function(name, options){
    var theList = options.fn();
    theList = theList.trim().split(',');
    var output = '';
    for(var val in theList){
      var item = theList[val].trim();
      output += '<option value = "'+item+'">'+item+ '</option>';
    }
    return output;
  });
  document.getElementById('theSize').innerHTML = templateSize();
  //make button
  var souceButton = document.querySelector('.makeButton').innerHTML;
  var templateButton = Handlebars.compile(souceButton);
  Handlebars.registerHelper('makeButton', function(name, options){
    var theList = options.fn();
    theList = theList.trim().split(',');
    var output = '';
    for(var val in theList){
      var item = theList[val].trim();
      output = '<button id = "search">'+item+'</button>';
    }
    return output;
  });
  document.querySelector('.buttonPlace').innerHTML = templateButton();
  console.log(document.getElementById('search'));
  //slide show
  var ul;
  var listItems;
  var imageWidth;
  var imageNumber;
  var currentImage = 0;
  function init(){
	   ul = document.getElementById('image_slider');
     listItems = ul.children;
	   imageNumber = listItems.length;
	   imageWidth = listItems[0].children[0].offsetWidth;
	   ul.style.width = parseInt(imageWidth*imageNumber)+'px';
	   slider(ul);
  }


 function slider(ul){
  animate({
		delay:17,
		duration:3000,
		delta:function(p){
			return Math.max(0, -1+2*p)
		},
		step:function(delta){
			ul.style.left = '-'+ parseInt(currentImage * imageWidth + delta *imageWidth)+ 'px';
		},
		callback:function(){
			currentImage++;
			if(currentImage < imageNumber - 1){
				slider(ul);
			}
			else{
				var leftPosition = (imageNumber-1)*imageWidth;
				setTimeout(function(){
					goBack(leftPosition)
				},2000);
				setTimeout(function(){ slider(ul)},4000);
			}
		}
	});
 }
 function goBack(leftPosition){
	currentImage = 0;
	var id = setInterval(function(){
		if(leftPosition >=0){
			ul.style.left = '-'+parseInt(leftPosition)+'px';
			leftPosition -=imageWidth/10 ;
		}
		else{
			clearInterval(id);
		}
	},17);
 }
 function animate(opts){
	var start = new Date();
	var id = setInterval(function(){
		var timePassed = new Date() - start;
		var progress = timePassed/opts.duration;
		if(progress > 1){
			progress = 1;
		}
		var delta = opts.delta(progress);
		opts.step(delta);
		if(progress == 1){
			clearInterval(id);
			opts.callback();
		}
	},opts.delay || 17);
 }
window.onload = init;
});
