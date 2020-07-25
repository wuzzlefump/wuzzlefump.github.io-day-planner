$(document).ready(function(){




const h = moment().format('HH')
const d = moment().format('MMMM Do YYYY')
console.log(d.toString())
$('#currentDay').text(d.toString())

var plannerHour = {
    hour:[$("#noon"),$("#one"),$("#two"),$("#three"),$("#four"),$("#five"),$("#six"),$("#seven"),$("#eight")],
    Value:[12,13,14,15,16,17,18,19,20]
     }

// need to log and save data from input boxes
var planner = {
Noon: $("#noon").val(),
one: $("#one").val(),
Two: $("#two").val(),
three: $("#three").val(),
four:$("#four").val(),
five:$("#five").val(),
six:$("#six").val(),
seven: $("#seven").val(),
eight: $("#eight").val()
}


render();
colorcheck();


function update (){


    planner = {
        Noon: $("#noon").val(),
        one: $("#one").val(),
        Two: $("#two").val(),
        three: $("#three").val(),
        four:$("#four").val(),
        five:$("#five").val(),
        six:$("#six").val(),
        seven: $("#seven").val(),
        eight: $("#eight").val()
        }
        
}

function save (){
update();
localStorage.setItem("planner", JSON.stringify(planner))

}

$(".saveBtn").click(function(){
event.preventDefault();
save();



})

function render(){
    
    var savedPlanner = JSON.parse(localStorage.getItem("planner"));
   
    console.log(savedPlanner)

    $("#noon").val(savedPlanner.Noon);
    $("#one").val(savedPlanner.one);
    $("#two").val(savedPlanner.Two);
    $("#three").val(savedPlanner.three);
    $("#four").val(savedPlanner.four);
    $("#five").val(savedPlanner.five);
    $("#six").val(savedPlanner.six);
    $("#seven").val(savedPlanner.seven);
    $("#eight").val(savedPlanner.eight);
  
}


// need to track date and time









// need to change color of box when time has passed


    function colorcheck(){
     var  hi = parseInt(h)

        for(var i = 0; i< plannerHour.hour.length;i++){

            if( hi > plannerHour.Value[i]){

                plannerHour.hour[i].css("background-color", "gray");


            } else if (hi<plannerHour.Value[i]){
                plannerHour.hour[i].css("background-color", "lightgreen");

            } else if (hi == plannerHour[i]){
                plannerHour.hour[i].css("background-color", "white");

            }

        }






    }
})
