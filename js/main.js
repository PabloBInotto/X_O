var act_level = 1;

var array = [0,1,2,3,4,5,6,7,8];
var fill = [0,1,2,3,4,5,6,7,8];
var un_fill;

var maq = [,,,,,,,,]
var hum = [,,,,,,,,]

function restart() {
    alert("Você Perdeu");
    location.reload();
}

function change_level(winner) {
     act_level = 2;
     var change = document.getElementsByClassName('play');
        for (var i = 0; i < change.length; ++i) {
            var item = change[i];  
            item.innerHTML = i;
            var element = document.getElementById('play'+i);
            element.classList.remove("uncleckable");
            maq = [,,,,,,,,]
            hum = [,,,,,,,,]
            array = [0,1,2,3,4,5,6,7,8];
            fill = [0,1,2,3,4,5,6,7,8];
            un_fill = [];
        }
        document.getElementById("p_level").value = "66";
        document.getElementById("level").innerHTML = "Nível: Médio";
}

function check(arr, user) {
    if (arr[0] && arr[1] && arr[2]) {
        if (user == 'Você') {
            alert("Você Ganhou");
            change_level('h');
        } else { restart();}
        console.log(user + ' Ganhou')
    } else if (arr[3] && arr[4] && arr[5]){
        if (user == 'Você') {
            alert("Você Ganhou");
            change_level('h');
        } else { restart();}
        console.log(user + ' Ganhou')
    } else if (arr[6] && arr[7] && arr[8]){
        if (user == 'Você') {
            alert("Você Ganhou");
            change_level('h');
        } else { restart();}
        console.log(user + ' Ganhou')
    } else if (arr[0] && arr[4] && arr[8]){
        if (user == 'Você') {
            alert("Você Ganhou");
            change_level('h');
        } else { restart();}
        console.log(user + ' Ganhou')
    } else if (arr[6] && arr[4] && arr[2]){
        if (user == 'Você') {
            alert("Você Ganhou");
            change_level('h');
        } else { restart();}
        console.log(user + ' Ganhou')
    } else if (arr[1] && arr[4] && arr[7]){
        if (user == 'Você') {
            alert("Você Ganhou");
            change_level('h');
        } else { restart();}
        console.log(user + ' Ganhou')
    } else if (arr[2] && arr[5] && arr[8]){
        if (user == 'Você') {
            alert("Você Ganhou");
            change_level('h');
        } else { restart();}
        console.log(user + ' Ganhou')
    } else if (arr[0] && arr[3] && arr[6]){
        if (user == 'Você') {
            alert("Você Ganhou");
            change_level('h');
        } else { restart();}
        console.log(user + ' Ganhou')
    } else {
        if (un_fill.length < 1) {
            change_level(2)
            console.log('Não houve ganhadores')
        }
    }  
}



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
        
        fill.splice(random, 1)
        
        maq.splice(random, 1 , random)

        console.log('no_used: ' + not_fill)
        un_fill = not_fill;
        check(maq, 'Computador');

        } else {
            console.log('O jogo acabou')
            change_level('h');
        }



    } else if (level === 2) {
       
        var nulos = maq.every(function (item) {
            return item === null;
        })

        if (nulos  ) {

            var random = not_fill[Math.floor(Math.random()*not_fill.length)];

            if (random != undefined) {
                console.log('Randon: ' + random);
            
            document.getElementById('play'+random).innerHTML = "O";
            
            var element = document.getElementById('play'+random);
            
            element.classList.add("uncleckable");

            array.splice(random, 1, 'O')
            
            fill.splice(random, 1)
            
            maq.splice(random, 1 , random)

            console.log('no_used: ' + not_fill)
            un_fill = not_fill;
            check(maq, 'Computador');

            }
            


        } else if (nulos === false) {
            

            function filled(i) {

                document.getElementById('play'+i).innerHTML = "O";
            
                var element = document.getElementById('play'+i);
                
                element.classList.add("uncleckable");

                array.splice(i, 1, 'O')
                
                fill.splice(i, 1)
                
                maq.splice(i, 1 , i)
                console.log('no_used: ' + not_fill)
                un_fill = not_fill;
                setTimeout(function(){ check(maq, 'Computador'); }, 1000); 
                    
            }

            function checks(m) {
                if (m[0] && m[1] && arr[2]) {
            }

            if (not_fill.length > 0) {
                filled(not_fill[Math.floor(Math.random()*not_fill.length)])
            } else {
                console.log('O jogo acabou com um empate')
                change_level('h');
            }
            
        }
        if (not_fill.length == 0) {
            console.log('O jogo acabou com um empate')
            change_level('h');
        }

  }
}
}

 function reply_click(clicked_id)

  {
    var not_fill = array.filter(function(item) {
        return isNaN(item) ? '': item;
    })

    if (not_fill.length == 0) {
        console.log('O jogo acabou com um empate')
        change_level('h');
    }

      document.getElementById(clicked_id).innerHTML = "X";
      var element = document.getElementById(clicked_id);
      element.classList.add("uncleckable");

      array.splice(clicked_id[4], 1, 'X')
      fill.splice(clicked_id[4], 1)
      hum.splice(clicked_id[4], 1 , clicked_id[4])
      //console.log(hum)
       console.log('Array: ' + array)
       console.log('no_used: ' + not_fill)
       un_fill = not_fill;
       check(hum, 'Você');
       setTimeout(function(){ machine(act_level) }, 2000);    
  }