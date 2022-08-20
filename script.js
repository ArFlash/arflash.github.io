var player_1 = prompt("Player 1 Enter Your Name: ", "Player 1");document.getElementById('player_1').innerHTML = player_1 + " : X"
    var player_2 = prompt("Player 2 Enter Your Name: ", "Player 2");document.getElementById('player_2').innerHTML = player_2 + " : O"
    var player = 0;
    const option = [9];
    
    function game(){
        
        var btn = event.target.id;
        switch(btn){
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
                document.getElementsByClassName('input_btn')[3].innerHTML =  "<b>" + option[3] + "</b>";
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
        }
        
        if(
        option[0]=='X'&&option[0]==option[1]&&option[1]==option[2]||
        option[3]=='X'&&option[3]==option[4]&&option[4]==option[5]||
        option[6]=='X'&&option[6]==option[7]&&option[7]==option[8]||
        option[0]=='X'&&option[0]==option[3]&&option[3]==option[6]||
        option[1]=='X'&&option[1]==option[4]&&option[4]==option[7]||
        option[2]=='X'&&option[2]==option[5]&&option[5]==option[8]||
        option[0]=='X'&&option[0]==option[4]&&option[4]==option[8]||
        option[2]=='X'&&option[2]==option[4]&&option[4]==option[6]
        )
        {alert(player_1 + " won");window.location.reload();}

        else if(
        option[0]=='O'&&option[0]==option[1]&&option[1]==option[2]||
        option[3]=='O'&&option[3]==option[4]&&option[4]==option[5]||
        option[6]=='O'&&option[6]==option[7]&&option[7]==option[8]||
        option[0]=='O'&&option[0]==option[3]&&option[3]==option[6]||
        option[1]=='O'&&option[1]==option[4]&&option[4]==option[7]||
        option[2]=='O'&&option[2]==option[5]&&option[5]==option[8]||
        option[0]=='O'&&option[0]==option[4]&&option[4]==option[8]||
        option[2]=='O'&&option[2]==option[4]&&option[4]==option[6]
        )
        {alert(player_2 + " won");window.location.reload();}

        else if(player == 9){alert('Game Tie');window.location.reload();}
    }