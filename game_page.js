player1_name = localStorage.getItem("Player_1");
player2_name = localStorage.getItem("Player_2");
document.getElementById("player1_name").innerHTML=player1_name+": ";
document.getElementById("player2_name").innerHTML=player2_name+": ";
player1_score = 0;
player2_score = 0;
document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;
document.getElementById("player_question").innerHTML = "question turn : "+ player1_name;
document.getElementById("player_answer").innerHTML = "answer turn : "+ player2_name;
question_turn = "player1";
answer_turn = "player2";

function send(){
    get_word = document.getElementById("word").value;
    word = get_word.toLowerCase();
    console.log(word);

    C1 = word.charAt(1);
    C3 = word.charAt(word.length - 1);
    x = Math.floor(word.length / 2);
    C2 = word.charAt(x);
    
    console.log(C1);
    console.log(C2);
    console.log(C3);

    R1 = word.replace(C1,"_");
    console.log(R1);
    R2 = R1.replace(C2,"_");
    console.log(R2);
    R3 = R2.replace(C3,"_");
    console.log(R3);

    question_word = "<h4 id='word_display'> Q . "+R3 +"</h4>" ;
    input = "<br>Answer : <input type='text' id='input_check_box'>";
    button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_word + input + button ;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";
}
function check(){
    get_answer = document.getElementById("input_check_box").value;
    answer = get_answer.toLowerCase();

    if (answer == word){
        if(answer_turn == "player1"){
            player1_score = player1_score +1;
            document.getElementById("player1_score").innerHTML = player1_score;
        }
        else{
            player2_score = player2_score +1;
            document.getElementById("player2_score").innerHTML = player2_score;
        }
    }
    if (question_turn == "player1"){
        question_turn = "player2";
        document.getElementById("player_question").innerHTML = "question turn : "+ player2_name;
    }
    else{
        question_turn = "player1";
        document.getElementById("player_question").innerHTML = "question turn : "+ player1_name;
    }
    if (answer_turn == "player1"){
        answer_turn = "player2";
        document.getElementById("player_answer").innerHTML = "answer turn : "+ player2_name;
    }
    else{
        answer_turn = "player1";
        document.getElementById("player_answer").innerHTML = "answer turn : "+ player1_name;
    }
    document.getElementById("output").innerHTML = "";
}