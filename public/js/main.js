// Define variables
var socket = io();  
var act_level = 1;
var array = [0,1,2,3,4,5,6,7,8];
var fill = [0,1,2,3,4,5,6,7,8];
var un_fill;
var winner
var maq = [,,,,,,,,]
var hum = [,,,,,,,,]
var played = [,,,,,,,,]

// Restart function
function restart(m) {
    socket.emit('new_play', {best: winner, played: array});
    alert(m);
    location.reload();
}

// print data on console function

function print() {
    console.log(array)
    console.log(maq)
    console.log(hum) 
}


// Change level function
function change_(l, p, t) {
    var data = {best: winner, played: array}
    socket.emit('new_play', {best: winner, played: array});
    act_level = l;
    console.log('################# ' + act_level)
     var change = document.getElementsByClassName('play');

        for (var i = 0; i < change.length; ++i) {
            var item = change[i];  
             item.innerHTML = '';
            var element = document.getElementById('play'+i);
            element.classList.remove("uncleckable");
            winner = ''
            maq = [,,,,,,,,]
            hum = [,,,,,,,,]
            played = [,,,,,,,,]
            array = [0,1,2,3,4,5,6,7,8];
            fill = [0,1,2,3,4,5,6,7,8];
            un_fill = [];
            
        }

        document.getElementById("p_level").value =  p;
        document.getElementById("level").innerHTML = "Nível:" + "'" + t + "'";
}

// Change level options
function change_level(winner) {
    if (act_level == 1) {
        change_(2, 66, 'Médio')
        console.log('#############    level 1 to level 2 #################')
        socket.emit('Change_Level', 'Nível médio');
    } else if (act_level == 2) {
        change_(3, 100, 'Difícil')
        console.log('#############    level 2 to level 3 #################')
        socket.emit('Change_Level', 'Nível difícil');
    } else {
        console.log('#############    keeping level 3 #################')
        socket.emit('Change_Level', 'Nível difícil');
        change_(3, 100, 'Difícil')
    }  
}

// not winner function
function not_winner(){
    if (act_level == 1) {
        console.log('Não houve ganhador')
        restart('Não houve ganhador');
        socket.emit('Not_Winner', 'Não houve ganhador - L1');
    }  else {
        alert("Não houve ganhador");
        change_level(2)
        socket.emit('Not_Winner', 'Não houve ganhador - L2');
    }
}


// check if winner function
function check(arr, user, p) {
    console.log('################# ' + act_level)
    if (arr[0] == p && arr[1] == p && arr[2]== p ) { // line 1
        if (user == 'Você') {
            alert("Você Ganhou"); winner = 1;
            change_level('h');
        } else { restart(user + ' Computador Ganhou'); winner = 0;}
        console.log(user + ' Computador Ganhou')
    } else if (arr[3] == p  && arr[4] == p  && arr[5] == p ){ // line 2
        if (user == 'Você') {
            alert("Você Ganhou"); winner = 1;
            change_level('h');
        } else { restart(user + ' Computador Ganhou'); winner = 0;}
        console.log(user + ' Computador Ganhou')
    } else if (arr[6] == p  && arr[7] == p  && arr[8] == p ){ // line 3
        if (user == 'Você') {
            alert("Você Ganhou"); winner = 1;
            change_level('h');
        } else { restart(user + ' Computador Ganhou'); winner = 0;}
        console.log(user + ' Computador Ganhou')
    } else if (arr[0] == p  && arr[4]  == p && arr[8] == p ){ // diagonal 1
        if (user == 'Você') {
            alert("Você Ganhou"); winner = 1;
            change_level('h');
        } else { restart(user + ' Computador Ganhou'); winner = 0;}
        console.log(user + ' Computador Ganhou')
    } else if (arr[6]  == p && arr[4] == p  && arr[2] == p ){ // diagonals 2
        if (user == 'Você') {
            alert("Você Ganhou"); winner = 1;
            change_level('h');
        } else { restart(user + ' Computador Ganhou'); winner = 0;}
        console.log(user + ' Computador Ganhou')
    } else if (arr[0] == p  && arr[3] == p  && arr[6] == p ){ // col 1
        if (user == 'Você') {
            alert("Você Ganhou"); winner = 1;
            change_level('h');
        } else { restart(user + ' Computador Ganhou'); winner = 0;}
        console.log(user + ' Computador Ganhou')
    } else if (arr[1]  == p && arr[4]  == p && arr[7] == p) { // col 2
        if (user == 'Você') {
            alert("Você Ganhou"); winner = 1;
            change_level('h');
        } else { restart(user + ' Computador Ganhou'); winner = 0;}
        console.log(user + ' Computador Ganhou')
    } else if (arr[2] == p  && arr[5] == p  && arr[8] == p ){
        if (user == 'Você') {
            alert("Você Ganhou"); winner = 1;
            change_level('h');
        } else { restart(user + ' Computador Ganhou'); winner = 0;}
        console.log(user + ' ComputadorComputador Ganhou')  
    } else {
        var not_fill = array.filter(function(item) {
            return isNaN(item) ? '': item;
        })
        console.log('un_fill ' + un_fill)
        if (not_fill.length == 0) {
            not_winner(2)
        }
    }  
    print()
}

// concat results function
function conc(m, h, u) {
    console.log('played ', played)
    for (let i = 0; i < played.length; i++) {
        const element = played[i];
        if (played[i] == undefined) {
            console.log(i + ' = undefined')
        }
        
    }

}


// Computer fill function
function filled(i) {

    var not_fill = array.filter(function(item) {
        return isNaN(item) ? item : '';
    })

    document.getElementById('play'+ i).innerHTML = "O";

    var element = document.getElementById('play'+i);
    
    element.classList.add("uncleckable");

    array.splice(i, 1, 'O')
    
    fill.splice(i, 1)
    played.splice(i, 1 , 'O')
    maq.splice(i, 1 , i)
    console.log('no_used: ' + not_fill)
    conc(maq, hum, 'O');
    un_fill = not_fill;
    setTimeout(function(){ check(array, 0, 'O'); }, 500); 
    if (not_fill.length == 0) {
        not_winner(2)
    }
}

// Machine player function
function machine(level) {
    //console.log(no_used)

    var not_fill = array.filter(function(item) {
        return isNaN(item) ? '': item;
    })

    if (level === 1) {
        
        var random = not_fill[Math.floor(Math.random()*not_fill.length)];

        if (random != undefined) {
            console.log('Randon: ' + random);
        
        document.getElementById('play'+random).innerHTML = "O";
        
        var element = document.getElementById('play'+random);
        
        element.classList.add("uncleckable");

        array.splice(random, 1, 'O')
        played.splice(random, 1 , 'O')
        fill.splice(random, 1)
        
        maq.splice(random, 1 , random)

        un_fill = not_fill;
        check(array, 0, 'O');

        } else {
            not_winner(2);
        }

        print()

    } else if (level === 2) {          
            
            // level 2 --> find machine opportunities to play and winner

            // Check first line
            if (array[0] == 'O' && array[1] == 'O' && array[2]  == 2) {
                filled(2)
            } else if (array[0] == 0 && array[1] == 'O' && array[2]  == 'O') {
                filled(0)
            } else if (array[0] == 'O' && array[1] == 1 && array[2]  == 'O') {
                filled(1)
            }  

            // ###############  Check diagonals ###################
            
             // Check first diagonal
             else if (array[0] == 'O' && array[4] == 'O' && array[8]  == 8) {
                filled(8)
            } else if (array[0] == 'O' && array[4] == 4 && array[8]  == 'O') {
                filled(4)
            } else if (array[0] == 0 && array[4] == 'O' && array[8]  == 'O') {
                filled(0)
            } 
            
            
            //check second diagonal
            else if (array[2] == 'O' && array[4] == 'O' && array[6]  == 6) {
                filled(6)
            } else if (array[2] == 'O' && array[4] == 4 && array[6]  == 'O')  {
                filled(4)
            } else if (array[2] == 2 && array[4] == 'O' && array[6]  == 'O')  {
                filled(2)
            } 
            
            
            //check second line
            else if (array[3] == 'O' && array[4] == 'O' && array[5]  == 5) {
                filled(5)
            } else if (array[3] == 'O' && array[4] == 4 && array[5]  == 'O') {
                filled(4)
            } else if (array[3] == 3 && array[4] == 'O' && array[5]  == 'O') {
                filled(3)
            } 


            //check third line
            else if (array[6] == 'O' && array[7] == 'O' && array[8]  == 8) {
                filled(8)
            } else if (array[6] == 'O' && array[7] == 7 && array[8]  == 'O') {
                filled(7)
            } else if (array[6] == 6 && array[7] == 'O' && array[8]  == 'O') {
                filled(6)
            } 


            // ###############  Check columns ###################
            
             // Check first col
             else if (array[0] == 'O' && array[3] == 'O' && array[6]  == 6) {
                filled(6)
            } else if (array[0] == 'O' && array[3] == 3 && array[6]  == 'O') {
                filled(3)
            } else if (array[0] == 0 && array[3] == 'O' && array[6]  == 'O') {
                filled(0)
            } 
            
            
            //check second line
            else if (array[1] == 'O' && array[4] == 'O' && array[7]  == 7) {
                filled(7)
            } else if (array[1] == 'O' && array[4] == 4 && array[7]  == 'O')  {
                filled(4)
            } else if (array[1] == 1 && array[4] == 'O' && array[7]  == 'O')  {
                filled(1)
            } 


            //check third col
            else if (array[2] == 'O' && array[5] == 'O' && array[8]  == 8) {
                filled(8)
            } else if (array[2] == 'O' && array[5] == 5 && array[8]  == 'O') {
                filled(5)
            } else if (array[2] == 2 && array[5] == 'O' && array[8]  == 'O') {
                filled(2)
            } 

            
            else {

                if (not_fill.length == 1) {
                    
                    console.log('not_fill.length ' + not_fill.length)
                    for (let i = 0; i < not_fill.length; i++) {

                        document.getElementById('play'+not_fill[i]).innerHTML = "O";
                    
                    var element = document.getElementById('play'+not_fill[i]);
                    
                    element.classList.add("uncleckable");

                    array.splice(not_fill[i], 1, 'O')
                    played.splice(not_fill[i], 1 , 'O')
                    fill.splice(not_fill[i], 1)
                    
                    maq.splice(not_fill[i], 1 , not_fill[i])
                    
                    
                    un_fill = not_fill[i];
                    check(array, 0, 'O');
                    conc(maq, hum, 'O');               
                    }
                } else {
                    var random = not_fill[Math.floor(Math.random()*not_fill.length)];

                if (random != undefined) {
                    
                
                    document.getElementById('play'+random).innerHTML = "O";
                    
                    var element = document.getElementById('play'+random);
                    
                    element.classList.add("uncleckable");

                    array.splice(random, 1, 'O')
                    played.splice(random, 1 , 'O')
                    fill.splice(random, 1)
                    
                    maq.splice(random, 1 , random)
                    
                    
                    un_fill = not_fill;
                    check(array, 0, 'O');
                    conc(maq, hum, 'O');

                }
                }
                
            }

            print()
            conc(maq, hum, 'O');

    } else if (level === 3) {
            
            // level 3 --> find machine opportunities to play and winner

            // Check first line
            if (array[0] == 'O' && array[1] == 'O' && array[2]  == 2) {
                filled(2)
            } else if (array[0] == 0 && array[1] == 'O' && array[2]  == 'O') {
                filled(0)
            } else if (array[0] == 'O' && array[1] == 1 && array[2]  == 'O') {
                filled(1)
            } 
            
            
            //check second line
            else if (array[3] == 'O' && array[4] == 'O' && array[5]  == 5) {
                filled(5)
            } else if (array[3] == 'O' && array[4] == 4 && array[5]  == 'O') {
                filled(4)
            } else if (array[3] == 3 && array[4] == 'O' && array[5]  == 'O') {
                filled(3)
            } 


            //check third line
            else if (array[6] == 'O' && array[7] == 'O' && array[8]  == 8) {
                filled(8)
            } else if (array[6] == 'O' && array[7] == 7 && array[8]  == 'O') {
                filled(7)
            } else if (array[6] == 6 && array[7] == 'O' && array[8]  == 'O') {
                filled(6)
            } 


            // ###############  Check columns ###################
            
             // Check first col
             else if (array[0] == 'O' && array[3] == 'O' && array[6]  == 6) {
                filled(6)
            } else if (array[0] == 'O' && array[3] == 3 && array[6]  == 'O') {
                filled(3)
            } else if (array[0] == 0 && array[3] == 'O' && array[6]  == 'O') {
                filled(0)
            } 
            
            
            //check second line
            else if (array[1] == 'O' && array[4] == 'O' && array[7]  == 7) {
                filled(7)
            } else if (array[1] == 'O' && array[4] == 4 && array[7]  == 'O')  {
                filled(4)
            } else if (array[1] == 1 && array[4] == 'O' && array[7]  == 'O')  {
                filled(1)
            } 


            //check third line
            else if (array[2] == 'O' && array[5] == 'O' && array[8]  == 8) {
                filled(8)
            } else if (array[2] == 'O' && array[5] == 5 && array[8]  == 'O') {
                filled(5)
            } else if (array[2] == 2 && array[5] == 'O' && array[8]  == 'O') {
                filled(2)
            } 


            // ###############  Check diagonals ###################
            
             // Check first diagonal
             else if (array[0] == 'O' && array[4] == 'O' && array[8]  == 8) {
                filled(8)
            } else if (array[0] == 'O' && array[4] == 4 && array[8]  == 'O') {
                filled(4)
            } else if (array[0] == 0 && array[4] == 'O' && array[8]  == 'O') {
                filled(0)
            } 
            
            
            //check second diagonal
            else if (array[2] == 'O' && array[4] == 'O' && array[6]  == 6) {
                filled(6)
            } else if (array[2] == 'O' && array[4] == 4 && array[6]  == 'O')  {
                filled(4)
            } else if (array[2] == 2 && array[4] == 'O' && array[6]  == 'O')  {
                filled(2)
            } 


            // level 3 --> find machine opportunities to play and defence

            // Check first line
            if (array[0] == 'X' && array[1] == 'X' && array[2]  == 2) {
                filled(2)
            } else if (array[0] == 0 && array[1] == 'X' && array[2]  == 'X') {
                filled(0)
            } else if (array[0] == 'X' && array[1] == 1 && array[2]  == 'X') {
                filled(1)
            } 
            
            
            //check secXnd line
            else if (array[3] == 'X' && array[4] == 'X' && array[5]  == 5) {
                filled(5)
            } else if (array[3] == 'X' && array[4] == 4 && array[5]  == 'X') {
                filled(4)
            } else if (array[3] == 3 && array[4] == 'X' && array[5]  == 'X') {
                filled(3)
            } 


            //check third line
            else if (array[6] == 'X' && array[7] == 'X' && array[8]  == 8) {
                filled(8)
            } else if (array[6] == 'X' && array[7] == 7 && array[8]  == 'X') {
                filled(7)
            } else if (array[6] == 6 && array[7] == 'X' && array[8]  == 'X') {
                filled(6)
            } 


            // ###############  Check cXlumns ###################
            
             // Check first cXl
             else if (array[0] == 'X' && array[3] == 'X' && array[6]  == 6) {
                filled(6)
            } else if (array[0] == 'X' && array[3] == 3 && array[6]  == 'X') {
                filled(3)
            } else if (array[0] == 0 && array[3] == 'X' && array[6]  == 'X') {
                filled(0)
            } 
            
            
            //check secXnd line
            else if (array[1] == 'X' && array[4] == 'X' && array[7]  == 7) {
                filled(7)
            } else if (array[1] == 'X' && array[4] == 4 && array[7]  == 'X')  {
                filled(4)
            } else if (array[1] == 1 && array[4] == 'X' && array[7]  == 'X')  {
                filled(1)
            } 


            //check third line
            else if (array[2] == 'X' && array[5] == 'X' && array[8]  == 8) {
                filled(8)
            } else if (array[2] == 'X' && array[5] == 5 && array[8]  == 'X') {
                filled(5)
            } else if (array[2] == 2 && array[5] == 'X' && array[8]  == 'X') {
                filled(2)
            } 


            // ###############  Check diagXnals ###################
            
             // Check first diagXnal
             else if (array[0] == 'X' && array[4] == 'X' && array[8]  == 8) {
                filled(8)
            } else if (array[0] == 'X' && array[4] == 4 && array[8]  == 'X') {
                filled(4)
            } else if (array[0] == 0 && array[4] == 'X' && array[8]  == 'X') {
                filled(0)
            } 
            
            
            //check secXnd diagXnal
            else if (array[2] == 'X' && array[4] == 'X' && array[6]  == 6) {
                filled(6)
            } else if (array[2] == 'X' && array[4] == 4 && array[6]  == 'X')  {
                filled(4)
            } else if (array[2] == 2 && array[4] == 'X' && array[6]  == 'X')  {
                filled(2)
            }
            
            else {
                if (not_fill.length == 1) {

                    console.log('not_fill.length ' + not_fill.length)
                    for (let i = 0; i < not_fill.length; i++) {

                        document.getElementById('play'+not_fill[i]).innerHTML = "O";
                    
                    var element = document.getElementById('play'+not_fill[i]);
                    
                    element.classList.add("uncleckable");

                    array.splice(not_fill[i], 1, 'O')
                    played.splice(not_fill[i], 1 , 'O')
                    fill.splice(not_fill[i], 1)
                    
                    maq.splice(not_fill[i], 1 , not_fill[i])
                    
                    
                    un_fill = not_fill[i];
                    check(array, 0, 'O');
                    conc(maq, hum, 'O');               
                    }
                } else {
                    var random = not_fill[Math.floor(Math.random()*not_fill.length)];

                if (random != undefined) {
                    
                
                    document.getElementById('play'+random).innerHTML = "O";
                    
                    var element = document.getElementById('play'+random);
                    
                    element.classList.add("uncleckable");

                    array.splice(random, 1, 'O')
                    played.splice(random, 1 , 'O')
                    fill.splice(random, 1)
                    
                    maq.splice(random, 1 , random)
                    
                    
                    un_fill = not_fill;
                    check(array, 0, 'O');
                    conc(maq, hum, 'O');

                }
                }
                
            }

        
    print()
    conc(maq, hum, 'O');
    }
}


// human player function
    function human(clicked_id)

  {
    var not_fill = array.filter(function(item) {
        return isNaN(item) ? '': item;
    })

    if (not_fill.length == 0) {
        not_winner(2);
    }

      document.getElementById(clicked_id).innerHTML = "X";
      var element = document.getElementById(clicked_id);
      element.classList.add("uncleckable");

      array.splice(clicked_id[4], 1, 'X')
      fill.splice(clicked_id[4], 1)
      hum.splice(clicked_id[4], 1 , clicked_id[4])
      played.splice(clicked_id[4], 1 , 'X')
       un_fill = not_fill;
       check(array, 'Você', 'X');
       conc(maq, hum, 'X');
       setTimeout(function(){ machine(act_level) }, 500);    
  }


 