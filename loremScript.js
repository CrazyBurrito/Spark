var wordsArray = ["card","deck","set","play","game","people","time","creature","players","mana","lands","magic","pretty","opponent","mean","playing","jace","standard","probably","modern","draw","spell","format","win","bad","eldrazi","ability","cost","art","feel","hand","color","innistrad","makes","control","work","yeah","story","cast","top","love","guy","madness","fun","damage","look","block","thought","rules","event"];
var paragraphText = "";

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

$("#ipsum").hide();

$("#generate").click(function(){
    paragraphText = "";
    var numParagraphs = $("#numInput").val();
    
    if(numParagraphs > 99){
        $("#numInput").val(99);
        numParagraphs = 99;
    }
    else if(numParagraphs < 1){
        $("#numInput").val(1);
        numParagraphs = 1;
    }
    var paragraphLength = 0;
    var sentanceLength = 0;
    var index = 0;
    var cap = true;
    
    for(j=0; j<numParagraphs; j++){
        paragraphLength = (Math.floor((Math.random()*100)+90));
        sentanceLength = (Math.floor(Math.random()*10)+15);
        
        for(i=0; i<paragraphLength; i++){
            index = Math.floor(Math.random()*wordsArray.length);
            
            if(cap){
                paragraphText+= capitalizeFirstLetter(wordsArray[index]);
                cap = false;
            }
            else
                paragraphText+= wordsArray[index];
                
            if(i == sentanceLength && i != paragraphLength - 1){
                paragraphText+= "."
                sentanceLength = i + (Math.floor(Math.random()*10)+15)
                cap = true;
                }
            if(i != paragraphLength - 1)  
                paragraphText+= " ";
        }
        paragraphText+=".<br><br>";
        cap = true;
    }
        
    $("#ipsum").html(paragraphText);
    
    $("#ipsum").show();
    
});
