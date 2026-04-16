   const msex = document.getElementById("m");
   const fsex = document.getElementById("f");    
   const agein = document.getElementById("age");
   // const ageclick = document.getElementById("ageclick");
   const weightin = document.getElementById("weight");
   // const weightclick = document.getElementById("weightclick");
   const heightin = document.getElementById("height");
   // const heightclick = document.getElementById("heightclick");
   const submit = document.getElementById("submit"); 
   const result = document.getElementById("result");
   const la = document.getElementById("la");
   const a = document.getElementById("a");
   const ma = document.getElementById("ma");
   const va = document.getElementById("va");
 


submit.onclick = () => {
   console.log("submit button clicked");
   var inputage= Number(agein.value);
   var inputweight= Number(weightin.value);
   var inputheight= Number(heightin.value)  ;
    var inputla = Number(la.value) ;
   
   let bmr=0;
    if (msex.checked) {
       let cal = 66.47 + (13.75 * inputweight) + (5.003 * inputheight) - (6.755 * inputage);
        bmr+= cal  ;
    } 
    else {
      (fsex.checked)
       let cal = 655.1 + (9.563 * inputweight) + (1.850 * inputheight) - (4.676 * inputage);
       bmr+= cal ;
      }
       
    
    
    // // document.getElementById("result").innerHTML =
    //     "Your BMR is: " + bmr.toFixed(2) + "<br>" +-
    //     "Your Daily Calorie need is: " + Math.round(bmr * activity) + " kcal";};
    result.innerHTML =  + bmr.toFixed(2) + "<br>" ;
    let currentResut = 0 ;
       if(la.checked){
         result.innerHTML += "Your daily calorie need is: " + (bmr * 1.2) + " kcal";
         currentResut += (bmr * 1.2) ;
       }
       else if (a.checked){
         result.innerHTML += "Your daily calorie need is: " + (bmr * 1.375) + " kcal";
         currentResut += (bmr * 1.375) ;  
       }
       else if (ma.checked){
         result.innerHTML += "Your daily calorie need is: " + (bmr * 1.55) + " kcal";
         currentResut += (bmr * 1.55) ;
       }
       else 
          {
         result.innerHTML += "Your daily calorie need is: " + (bmr * 1.9) + " kcal";
         currentResut += (bmr * 1.9) ;
       }
       console.log (currentResut);
      localStorage.setItem("result", currentResut);

 
}
// function loadResut (){
//   const savedResult = localStorage.setItem("result");
//   if (savedResult) {
//     result.innerHTML = savedResult;
//   }
// }


 