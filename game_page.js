player1_name = localstorage.getitem("player1_name");
player2_name = localstorage.getitem("player2_name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerhtml = player1_name + ":";
document.getElementById("player2_name").innerhtml = player2_name + ":";

document.getElementById("player1_score").innerhtml = player1_score ;
document.getElementById("player2_score").innerhtml = player2_score ;

document.getElementById("player_question").innerhtml = "question turn - " + player1_name ;
document.getElementById("player_answer").innerhtml = "answer turn - " + player2_name ;

function send() {
get_word = documnet.getElementById("word").value;
word = get_word.tolowercase();
console.log("word in lowercase =" + word);

charAT1 = word.charAT1(1);
console.log(charAT1);

length_divide_2 = math.floor(word.length/2);
charAT1 = word.charAT1(length_divide_2);
console.log(charAT2);

length_minus_1 = word.length - 1;
charAT1 = word.charAT1(length_minus_1);
console.log(charAT3);

remove_charAT1 = word.replace(charAT1, "_");
remove_charAT2 = remove_charAT1(charAT2, "_");
remove_charAT3 = remove_charAT2(charAT3, "_");
console.log(remove_charAT3);

question_word = "<h4 id = word_display> Q."+ remove_charAT3+"</h4>";
input_box = "<br>answer : <input type = 'text' id = 'input_check_box'>";
check_button = "<br><br><button class='btn btn-info'onclick='check()'>check</button>";
row = question_word + input_box + check_button ;
document.getElementById("output").innerHTML = row;
document.getElementById("word").value = "";


}