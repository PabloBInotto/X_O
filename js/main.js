 var array = []
 

// var stander = [];

// function comb() {
//     var result = [];

//     for(var i=0;i<stander.length-1;i++){
//         for(var j=i+1;j<stander.length;j++){
//             for (let k = 0; k < stander.length; k++) {
//                 result.push(stander[i]+" "+stander[j]+ " "+stander[k]);
//             }
//         }
//     }

//     for(var i=0;i<result.length;i++){
//         var resultado = result[i].toString()
//         console.log(resultado)
//     }
//  }


//   function check() {
//     var result = [];

//     for(var i=0;i<array.length-1;i++){
//         for(var j=i+1;j<array.length;j++){
//             for (let k = 0; k < array.length; k++) {
//                 result.push(array[i]+" "+array[j]+ " "+array[k]);
//             }
//         }
//     }

//     for(var i=0;i<result.length;i++){
//         var resultado = result[i].toString()
//         switch (resultado) {

//             default:
       
//                 break;
//         }   
//     }
//  }


var maq = ['','','','','','','','','']
var hum = [,,,,,,,,]

function check(arr) {
    if (arr[0] && arr[1] && arr[2]) {
        console.log('ok')
    } else if (arr[3] && arr[4] && arr[5]){
        console.log('ok')
    } else if (arr[6] && arr[7] && arr[8]){
        console.log('ok')
    } else if (arr[0] && arr[4] && arr[8]){
        console.log('ok')
    } else if (arr[6] && arr[4] && arr[2]){
        console.log('ok')
    }
    
}


 function reply_click(clicked_id)
  {
      document.getElementById(clicked_id).innerHTML = "X";
      var element = document.getElementById(clicked_id);
      element.classList.add("uncleckable");
      array.push(clicked_id[4])

      hum.splice(clicked_id[4], 1 , clicked_id[4]    )
      console.log(hum)
       check(hum);
    //   comb()
  }
