function Adduser(){
    P2 = document.getElementById("player2_name_input").value;
    P1 = document.getElementById("player1_name_input").value;

    localStorage.setItem("Player_1",P1);
    localStorage.setItem("Player_2",P2);
    window.location = "game_page.html";
}