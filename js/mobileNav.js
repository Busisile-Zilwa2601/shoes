let paused = false;
let counter = 1;

$('#image'+counter).click();
//moving backwarks
$('#backwards').click(function(){
    counter -= 1;
    if(counter < 1){
        counter = lengthOfImageList;
    }
    $('#image'+counter).click();
});
//moving forward
$('#fowards').click(function(){
    counter += 1;
    if(counter > lengthOfImageList){
        coounter = 1;
    }
    $('#image'+counter).click();
});