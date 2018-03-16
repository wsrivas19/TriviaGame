
$("#start").on("click",function(){
    for(var i = 0; i<questions.length;i++){
        $("#subwrapper").append("<h2>"+ questions +"</h2>");
        for (var j =0; j <questions[i].answerslength; j++){
            $("#subwrapper").append("<input type = 'radio' name='question- "+i+" 'value=' "+questions[i].answers[j]+" '>"+questions[i].answers[j])}
    }

})

var questions = [{
    question:"Why is this not working?",
    choice:["FML", "WHY?"],
    rightAnswer:"FML"
}]