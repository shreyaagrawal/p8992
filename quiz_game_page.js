player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");
console.log(player1_name);
console.log(player2_name);

player1_score =4;
player2_score =0;

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : " ;


document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Question Turn: " +player1_name;
document.getElementById("player_anwser").innerHTML = "Answer Turn: "+player2_name;


function send(){

    var number1 = Number(document.getElementById("number1").value);
    var number2 = Number(document.getElementById("number2").value);
    result_answer = number1 * number2;
    console.log(result_answer);

    question_line = "<h4>" + number1 +" X " + number2 +"</h4>";
    input_line = "<br>Answer: <input type='text' id='input_player_answer'>";
    button_check = "<br><button onclick='check()' id='again_margin' >Check</button>"
    row=question_line+input_line+button_check;

    document.getElementById('output').innerHTML = row;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
}

question_turn = "player1";
answer_turn = "player2";

function check(){
    player_answer = document.getElementById("input_player_answer").value;
    if(player_answer == result_answer){
        if(answer_turn== "player1"){
            player1_score = player1_score +1;
            document.getElementById("player1_score").innerHTML =player1_score;
        }
        else{
            player2_score = player2_score +1;
            document.getElementById("player2_score").innerHTML =player2_score;

        }
    }
    if(question_turn == "player1"){
        question_turn ="player2";
        document.getElementById("player_question").innerHTML = "Question Turn : "+player2_name; 
    }
    else{
        question_turn ="player1";
        document.getElementById("player_question").innerHTML = "Question Turn : "+player1_name; 
    }
    if(answer_turn == "player1"){
        answer_turn ="player2";
        document.getElementById("player_anwser").innerHTML = "Answer Turn : "+player2_name; 
    }
    else{
        answer_turn ="player1";
        document.getElementById("player_anwser").innerHTML = "Answer Turn : "+player1_name; 
    }
    document.getElementById('output').innerHTML = "";
}