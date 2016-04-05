
$(".spoiler").hide();


$("#spoilerButton").click(function(){
    if($(".spoiler").css("display") == "none"){
        showSpoiler();
    }
    else{
        hideSpoiler();
    }
});

function showSpoiler(){
    $(".spoiler").show();
    //~ $("#spoilerButton").animate({"opacity":"0"},1000,function(){$("#spoilerButton").html("Hide");});
    //~ $("#spoilerButton").animate({"opacity":"1"},1000);
}

function hideSpoiler(){
    $(".spoiler").hide();
    //~ $("#spoilerButton").animate({"opacity":"0"},1000, function(){$("#spoilerButton").html("Show");});
    //~ $("#spoilerButton").animate({"opacity":"1"},1000);
}

/*var x =1;
console.log(x);
var x = "a string";
console.log(x);
var x = null;
console.log(x);


var myArray = [1, "two", "3"];
console.log(myArray);
console.log(myArray[0]);
myArray[1] = "element 1";
console.log(myArray);
console.log(myArray.length);

var user = {
    
        whoa:{dude:'sweet'}
};
console.log(user);

for(var i=1; i<=100; i++){
    
    console.log(i);
}

function addTwoNumbers(a, b){
    
    return a + b;
};

console.log(addTwoNumbers(1,2));
*/
