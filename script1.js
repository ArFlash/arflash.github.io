let player_1 = localStorage.getItem("player_1");
let player_2 = localStorage.getItem("player_2");
document.getElementById('player_1').innerHTML = player_1 + " : X";
document.getElementById('player_2').innerHTML = player_2 + " : O";
let player = 0;
const option = [25];
    
function game(){
    
    var btn = event.target.id;
    switch (btn) {
        case 'btn_1':
            player % 2 == 0 ? option[0] = 'X' : option[0] = 'O';
            document.getElementsByClassName('input_btn')[0].innerHTML = "<b>" + option[0] + "</b>";
            player % 2 == 0 ? document.getElementById(btn).setAttribute('id', 'id_X') : document.getElementById(btn).setAttribute('id', 'id_O');
            player += 1;
            break;

        case 'btn_2':
            player % 2 == 0 ? option[1] = 'X' : option[1] = 'O';
            document.getElementsByClassName('input_btn')[1].innerHTML = "<b>" + option[1] + "</b>";
            player % 2 == 0 ? document.getElementById(btn).setAttribute('id', 'id_X') : document.getElementById(btn).setAttribute('id', 'id_O');
            player += 1;
            break;

        case 'btn_3':
            player % 2 == 0 ? option[2] = 'X' : option[2] = 'O';
            document.getElementsByClassName('input_btn')[2].innerHTML = "<b>" + option[2] + "</b>";
            player % 2 == 0 ? document.getElementById(btn).setAttribute('id', 'id_X') : document.getElementById(btn).setAttribute('id', 'id_O');
            player += 1;
            break;

        case 'btn_4':
            player % 2 == 0 ? option[3] = 'X' : option[3] = 'O';
            document.getElementsByClassName('input_btn')[3].innerHTML = "<b>" + option[3] + "</b>";
            player % 2 == 0 ? document.getElementById(btn).setAttribute('id', 'id_X') : document.getElementById(btn).setAttribute('id', 'id_O');
            player += 1;
            break;

        case 'btn_5':
            player % 2 == 0 ? option[4] = 'X' : option[4] = 'O';
            document.getElementsByClassName('input_btn')[4].innerHTML = "<b>" + option[4] + "</b>";
            player % 2 == 0 ? document.getElementById(btn).setAttribute('id', 'id_X') : document.getElementById(btn).setAttribute('id', 'id_O');
            player += 1;
            break;

        case 'btn_6':
            player % 2 == 0 ? option[5] = 'X' : option[5] = 'O';
            document.getElementsByClassName('input_btn')[5].innerHTML = "<b>" + option[5] + "</b>";
            player % 2 == 0 ? document.getElementById(btn).setAttribute('id', 'id_X') : document.getElementById(btn).setAttribute('id', 'id_O');
            player += 1;
            break;

        case 'btn_7':
            player % 2 == 0 ? option[6] = 'X' : option[6] = 'O';
            document.getElementsByClassName('input_btn')[6].innerHTML = "<b>" + option[6] + "</b>";
            player % 2 == 0 ? document.getElementById(btn).setAttribute('id', 'id_X') : document.getElementById(btn).setAttribute('id', 'id_O');
            player += 1;
            break;

        case 'btn_8':
            player % 2 == 0 ? option[7] = 'X' : option[7] = 'O';
            document.getElementsByClassName('input_btn')[7].innerHTML = "<b>" + option[7] + "</b>";
            player % 2 == 0 ? document.getElementById(btn).setAttribute('id', 'id_X') : document.getElementById(btn).setAttribute('id', 'id_O');
            player += 1;
            break;

        case 'btn_9':
            player % 2 == 0 ? option[8] = 'X' : option[8] = 'O';
            document.getElementsByClassName('input_btn')[8].innerHTML = "<b>" + option[8] + "</b>";
            player % 2 == 0 ? document.getElementById(btn).setAttribute('id', 'id_X') : document.getElementById(btn).setAttribute('id', 'id_O');
            player += 1;
            break;
        case 'btn_10':
            player % 2 == 0 ? option[9] = 'X' : option[9] = 'O';
            document.getElementsByClassName('input_btn')[9].innerHTML = "<b>" + option[9] + "</b>";
            player % 2 == 0 ? document.getElementById(btn).setAttribute('id', 'id_X') : document.getElementById(btn).setAttribute('id', 'id_O');
            player += 1;
            break;
        case 'btn_11':
            player % 2 == 0 ? option[10] = 'X' : option[10] = 'O';
            document.getElementsByClassName('input_btn')[10].innerHTML = "<b>" + option[10] + "</b>";
            player % 2 == 0 ? document.getElementById(btn).setAttribute('id', 'id_X') : document.getElementById(btn).setAttribute('id', 'id_O');
            player += 1;
            break;
        case 'btn_12':
            player % 2 == 0 ? option[11] = 'X' : option[11] = 'O';
            document.getElementsByClassName('input_btn')[11].innerHTML = "<b>" + option[11] + "</b>";
            player % 2 == 0 ? document.getElementById(btn).setAttribute('id', 'id_X') : document.getElementById(btn).setAttribute('id', 'id_O');
            player += 1;
            break;
        case 'btn_13':
            player % 2 == 0 ? option[12] = 'X' : option[12] = 'O';
            document.getElementsByClassName('input_btn')[12].innerHTML = "<b>" + option[12] + "</b>";
            player % 2 == 0 ? document.getElementById(btn).setAttribute('id', 'id_X') : document.getElementById(btn).setAttribute('id', 'id_O');
            player += 1;
            break;
        case 'btn_14':
            player % 2 == 0 ? option[13] = 'X' : option[13] = 'O';
            document.getElementsByClassName('input_btn')[13].innerHTML = "<b>" + option[13] + "</b>";
            player % 2 == 0 ? document.getElementById(btn).setAttribute('id', 'id_X') : document.getElementById(btn).setAttribute('id', 'id_O');
            player += 1;
            break;
        case 'btn_15':
            player % 2 == 0 ? option[14] = 'X' : option[14] = 'O';
            document.getElementsByClassName('input_btn')[14].innerHTML = "<b>" + option[14] + "</b>";
            player % 2 == 0 ? document.getElementById(btn).setAttribute('id', 'id_X') : document.getElementById(btn).setAttribute('id', 'id_O');
            player += 1;
            break;
        case 'btn_16':
            player % 2 == 0 ? option[15] = 'X' : option[15] = 'O';
            document.getElementsByClassName('input_btn')[15].innerHTML = "<b>" + option[15] + "</b>";
            player % 2 == 0 ? document.getElementById(btn).setAttribute('id', 'id_X') : document.getElementById(btn).setAttribute('id', 'id_O');
            player += 1;
            break;
        case 'btn_17':
            player % 2 == 0 ? option[16] = 'X' : option[16] = 'O';
            document.getElementsByClassName('input_btn')[16].innerHTML = "<b>" + option[16] + "</b>";
            player % 2 == 0 ? document.getElementById(btn).setAttribute('id', 'id_X') : document.getElementById(btn).setAttribute('id', 'id_O');
            player += 1;
            break;
        case 'btn_18':
            player % 2 == 0 ? option[17] = 'X' : option[17] = 'O';
            document.getElementsByClassName('input_btn')[17].innerHTML = "<b>" + option[17] + "</b>";
            player % 2 == 0 ? document.getElementById(btn).setAttribute('id', 'id_X') : document.getElementById(btn).setAttribute('id', 'id_O');
            player += 1;
            break;
        case 'btn_19':
            player % 2 == 0 ? option[18] = 'X' : option[18] = 'O';
            document.getElementsByClassName('input_btn')[18].innerHTML = "<b>" + option[18] + "</b>";
            player % 2 == 0 ? document.getElementById(btn).setAttribute('id', 'id_X') : document.getElementById(btn).setAttribute('id', 'id_O');
            player += 1;
            break;
        case 'btn_20':
            player % 2 == 0 ? option[19] = 'X' : option[19] = 'O';
            document.getElementsByClassName('input_btn')[19].innerHTML = "<b>" + option[19] + "</b>";
            player % 2 == 0 ? document.getElementById(btn).setAttribute('id', 'id_X') : document.getElementById(btn).setAttribute('id', 'id_O');
            player += 1;
            break;
        case 'btn_21':
            player % 2 == 0 ? option[20] = 'X' : option[20] = 'O';
            document.getElementsByClassName('input_btn')[20].innerHTML = "<b>" + option[20] + "</b>";
            player % 2 == 0 ? document.getElementById(btn).setAttribute('id', 'id_X') : document.getElementById(btn).setAttribute('id', 'id_O');
            player += 1;
            break;
        case 'btn_22':
            player % 2 == 0 ? option[21] = 'X' : option[21] = 'O';
            document.getElementsByClassName('input_btn')[21].innerHTML = "<b>" + option[21] + "</b>";
            player % 2 == 0 ? document.getElementById(btn).setAttribute('id', 'id_X') : document.getElementById(btn).setAttribute('id', 'id_O');
            player += 1;
            break;
        case 'btn_23':
            player % 2 == 0 ? option[22] = 'X' : option[22] = 'O';
            document.getElementsByClassName('input_btn')[22].innerHTML = "<b>" + option[22] + "</b>";
            player % 2 == 0 ? document.getElementById(btn).setAttribute('id', 'id_X') : document.getElementById(btn).setAttribute('id', 'id_O');
            player += 1;
            break;
        case 'btn_24':
            player % 2 == 0 ? option[23] = 'X' : option[23] = 'O';
            document.getElementsByClassName('input_btn')[23].innerHTML = "<b>" + option[23] + "</b>";
            player % 2 == 0 ? document.getElementById(btn).setAttribute('id', 'id_X') : document.getElementById(btn).setAttribute('id', 'id_O');
            player += 1;
            break;
        case 'btn_25':
            player % 2 == 0 ? option[24] = 'X' : option[24] = 'O';
            document.getElementsByClassName('input_btn')[24].innerHTML = "<b>" + option[24] + "</b>";
            player % 2 == 0 ? document.getElementById(btn).setAttribute('id', 'id_X') : document.getElementById(btn).setAttribute('id', 'id_O');
            player += 1;
            break;
    }
    
    if(
    option[0]=='X'&&option[0]==option[1]&&option[1]==option[2]||
    option[1]=='X'&&option[1]==option[2]&&option[2]==option[3]||
    option[2]=='X'&&option[2]==option[3]&&option[3]==option[4]||
    option[5]=='X'&&option[5]==option[6]&&option[6]==option[7]||
    option[6]=='X'&&option[6]==option[7]&&option[7]==option[8]||
    option[7]=='X'&&option[7]==option[8]&&option[8]==option[9]||
    option[10]=='X'&&option[10]==option[11]&&option[11]==option[12]||
    option[11]=='X'&&option[11]==option[12]&&option[12]==option[13]||
    option[12]=='X'&&option[12]==option[13]&&option[13]==option[14]||
    option[15]=='X'&&option[15]==option[16]&&option[16]==option[17]||
    option[17]=='X'&&option[17]==option[18]&&option[18]==option[19]||
    option[20]=='X'&&option[20]==option[21]&&option[21]==option[22]||
    option[21]=='X'&&option[21]==option[22]&&option[22]==option[23]||
    option[22]=='X'&&option[22]==option[23]&&option[23]==option[24]||
    option[0]=='X'&&option[0]==option[5]&&option[5]==option[10]||
    option[5]=='X'&&option[5]==option[10]&&option[10]==option[15]||
    option[10]=='X'&&option[10]==option[15]&&option[15]==option[20]||
    option[1]=='X'&&option[1]==option[6]&&option[6]==option[11]||
    option[6]=='X'&&option[6]==option[11]&&option[11]==option[16]||
    option[11]=='X'&&option[11]==option[16]&&option[16]==option[21]||
    option[2]=='X'&&option[2]==option[7]&&option[7]==option[12]||
    option[7]=='X'&&option[7]==option[12]&&option[12]==option[17]||
    option[12]=='X'&&option[12]==option[17]&&option[17]==option[22]||
    option[3]=='X'&&option[3]==option[8]&&option[8]==option[13]||
    option[8]=='X'&&option[8]==option[13]&&option[13]==option[18]||
    option[13]=='X'&&option[13]==option[18]&&option[18]==option[23]||
    option[4]=='X'&&option[4]==option[9]&&option[9]==option[14]||
    option[9]=='X'&&option[9]==option[14]&&option[14]==option[19]||
    option[14]=='X'&&option[14]==option[19]&&option[19]==option[24]||
    option[0]=='X'&&option[0]==option[6]&&option[6]==option[12]||
    option[6]=='X'&&option[6]==option[12]&&option[12]==option[18]||
    option[12]=='X'&&option[12]==option[18]&&option[18]==option[24]||
    option[4]=='X'&&option[4]==option[8]&&option[8]==option[12]||
    option[8]=='X'&&option[8]==option[12]&&option[12]==option[16]||
    option[12]=='X'&&option[12]==option[16]&&option[16]==option[20]||
    option[1]=='X'&&option[1]==option[7]&&option[7]==option[13]||
    option[7]=='X'&&option[7]==option[13]&&option[13]==option[19]||
    option[5]=='X'&&option[5]==option[11]&&option[11]==option[17]||
    option[11]=='X'&&option[11]==option[17]&&option[17]==option[23]||
    option[3]=='X'&&option[3]==option[7]&&option[7]==option[11]||
    option[7]=='X'&&option[7]==option[11]&&option[11]==option[15]||
    option[9]=='X'&&option[9]==option[13]&&option[13]==option[17]||
    option[13]=='X'&&option[13]==option[17]&&option[17]==option[21]||
    option[2]=='X'&&option[2]==option[6]&&option[6]==option[10]||
    option[2]=='X'&&option[2]==option[8]&&option[8]==option[14]||
    option[10]=='X'&&option[10]==option[16]&&option[16]==option[22]||
    option[22]=='X'&&option[22]==option[18]&&option[18]==option[14]
    )
    {window.alert(player_1 + " won");window.location.reload();}

    else if(
        option[0]=='O'&&option[0]==option[1]&&option[1]==option[2]||
        option[1]=='O'&&option[1]==option[2]&&option[2]==option[3]||
        option[2]=='O'&&option[2]==option[3]&&option[3]==option[4]||
        option[5]=='O'&&option[5]==option[6]&&option[6]==option[7]||
        option[6]=='O'&&option[6]==option[7]&&option[7]==option[8]||
        option[7]=='O'&&option[7]==option[8]&&option[8]==option[9]||
        option[10]=='O'&&option[10]==option[11]&&option[11]==option[12]||
        option[11]=='O'&&option[11]==option[12]&&option[12]==option[13]||
        option[12]=='O'&&option[12]==option[13]&&option[13]==option[14]||
        option[15]=='O'&&option[15]==option[16]&&option[16]==option[17]||
        option[17]=='O'&&option[17]==option[18]&&option[18]==option[19]||
        option[20]=='O'&&option[20]==option[21]&&option[21]==option[22]||
        option[21]=='O'&&option[21]==option[22]&&option[22]==option[23]||
        option[22]=='O'&&option[22]==option[23]&&option[23]==option[24]||
        option[0]=='O'&&option[0]==option[5]&&option[5]==option[10]||
        option[5]=='O'&&option[5]==option[10]&&option[10]==option[15]||
        option[10]=='O'&&option[10]==option[15]&&option[15]==option[20]||
        option[1]=='O'&&option[1]==option[6]&&option[6]==option[11]||
        option[6]=='O'&&option[6]==option[11]&&option[11]==option[16]||
        option[11]=='O'&&option[11]==option[16]&&option[16]==option[21]||
        option[2]=='O'&&option[2]==option[7]&&option[7]==option[12]||
        option[7]=='O'&&option[7]==option[12]&&option[12]==option[17]||
        option[12]=='O'&&option[12]==option[17]&&option[17]==option[22]||
        option[3]=='O'&&option[3]==option[8]&&option[8]==option[13]||
        option[8]=='O'&&option[8]==option[13]&&option[13]==option[18]||
        option[13]=='O'&&option[13]==option[18]&&option[18]==option[23]||
        option[4]=='O'&&option[4]==option[9]&&option[9]==option[14]||
        option[9]=='O'&&option[9]==option[14]&&option[14]==option[19]||
        option[14]=='O'&&option[14]==option[19]&&option[19]==option[24]||
        option[0]=='O'&&option[0]==option[6]&&option[6]==option[12]||
        option[6]=='O'&&option[6]==option[12]&&option[12]==option[18]||
        option[12]=='O'&&option[12]==option[18]&&option[18]==option[24]||
        option[4]=='O'&&option[4]==option[8]&&option[8]==option[12]||
        option[8]=='O'&&option[8]==option[12]&&option[12]==option[16]||
        option[12]=='O'&&option[12]==option[16]&&option[16]==option[20]||
        option[1]=='O'&&option[1]==option[7]&&option[7]==option[13]||
        option[7]=='O'&&option[7]==option[13]&&option[13]==option[19]||
        option[5]=='O'&&option[5]==option[11]&&option[11]==option[17]||
        option[11]=='O'&&option[11]==option[17]&&option[17]==option[23]||
        option[3]=='O'&&option[3]==option[7]&&option[7]==option[11]||
        option[7]=='O'&&option[7]==option[11]&&option[11]==option[15]||
        option[9]=='O'&&option[9]==option[13]&&option[13]==option[17]||
        option[13]=='O'&&option[13]==option[17]&&option[17]==option[21]||
        option[2]=='O'&&option[2]==option[6]&&option[6]==option[10]||
        option[2]=='O'&&option[2]==option[8]&&option[8]==option[14]||
        option[10]=='O'&&option[10]==option[16]&&option[16]==option[22]||
        option[22]=='O'&&option[22]==option[18]&&option[18]==option[14]
    )
    {alert(player_2 + " won");window.location.reload();}

    else if(player == 25){alert('Game Tie');window.location.reload();}
}