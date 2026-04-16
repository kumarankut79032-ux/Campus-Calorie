alert("Welcome" + " your calorie tracker is ready to use - just select the date and write what you ate and click submit" );
let savedResult = (localStorage.getItem("result") );

//console.log(savedResult);
window.onload = ()=>{
    checkStorage();
    checkList();
    getDailyhistory();
    // loadResult() ;
    // let savedResult = localStorage.getItem("result") ;
   ;}
   console.log(savedResult);
const date = document.getElementById("date");
const food = document.getElementById("food-item");
const time =document.getElementById("time");
const calories=document.getElementById("totalcalories");
const clickdate = document.getElementById("clickdate");
const clickfood = document.getElementById("clickfood");
const id1 = document.getElementById("id1");
const kahanalist = document.getElementById("food-list");
const suggestion= document.getElementById ("suggestion");
const dailyHistory = document.getElementById("Daily-History");
const reset = document.getElementById("reset");
const localStoragedisplay = document.getElementById("localStorage");

localStoragedisplay.innerHTML= "Saved Result: " + savedResult ;// previous store  required calories
console.log(calories);
let totalDailyCalories =0;
let cal ;
let activeDate="" ;
clickdate.onclick = ()=>{
    
    dailyHistory.innerHTML += "<br>" + "Your Calories on this date : " + activeDate + " " + totalDailyCalories + "<br>";
    localStorage.setItem("currentHistory", dailyHistory.innerHTML);
   // kahanalist.innerHTML += "Your Calories on this date :"+date.value+ "=" +totalDailyCalories+"<br>";
    console.log("select date");
    let datevalue = date.value ;
    
    kahanalist.innerHTML += "<br>" + "Date : " + datevalue +"<br>";
    totalDailyCalories =0;
    // clickdate.innerHTML="Selected Date";
}

clickfood.onclick = () => {
    // if(activeDate === "") {
       activeDate = date.value ;
    // }
    console.log("write what you ate");
    
    let foodvalue = food.value ;
    foodvalue = food.value.toLowerCase();
    //innerHTML= food.value ;
    if (food.value==="samosa"){
        cal =50;
        totalDailyCalories+= cal ;
    }
    // --- CATEGORY 1: INDIAN SNACKS ---
 else if (foodvalue === "samosa") {
    cal = 250; // A real samosa is usually 250, not 50!
    totalDailyCalories += cal;
} else if (foodvalue === "pakora") {
    cal = 75; totalDailyCalories += cal;
} else if (foodvalue === "pani puri") {
    cal = 150; totalDailyCalories += cal;
} else if (foodvalue === "dhokla") {
    cal = 160; totalDailyCalories += cal;
} else if (foodvalue === "jalebi") {
    cal = 150; totalDailyCalories += cal;
} else if (foodvalue === "kachori") {
    cal = 190; totalDailyCalories += cal;
} else if (foodvalue === "bhel puri") {
    cal = 180; totalDailyCalories += cal;
} else if (foodvalue === "vada pav") {
    cal = 300; totalDailyCalories += cal;
} else if (foodvalue === "sev puri") {
    cal = 200; totalDailyCalories += cal;
} else if (foodvalue === "namkeen") {
    cal = 150; totalDailyCalories += cal;

// --- CATEGORY 2: INDIAN BREAKFAST ---
} else if (foodvalue === "poha") {
    cal = 180; totalDailyCalories += cal;
} else if (foodvalue === "upma") {
    cal = 200; totalDailyCalories += cal;
} else if (foodvalue === "idli") {
    cal = 40; totalDailyCalories += cal;
} else if (foodvalue === "paratha") {
    cal = 250; totalDailyCalories += cal;
} else if (foodvalue === "chole bhature") {
    cal = 450; totalDailyCalories += cal;
} else if (foodvalue === "dosa") {
    cal = 120; totalDailyCalories += cal;
} else if (foodvalue === "thepla") {
    cal = 150; totalDailyCalories += cal;
} else if (foodvalue === "puri sabzi") {
    cal = 350; totalDailyCalories += cal;
} else if (foodvalue === "pongal") {
    cal = 210; totalDailyCalories += cal;
} else if (foodvalue === "uttapam") {
    cal = 200; totalDailyCalories += cal;

// --- CATEGORY 3: INDIAN LUNCH ---
} else if (foodvalue === "rice") {
    cal = 130; totalDailyCalories += cal;
} else if (foodvalue === "roti") {
    cal = 80; totalDailyCalories += cal;
} else if (foodvalue === "dal makhani") {
    cal = 150; totalDailyCalories += cal;
} else if (foodvalue === "paneer butter masala") {
    cal = 350; totalDailyCalories += cal;
} else if (foodvalue === "chana masala") {
    cal = 250; totalDailyCalories += cal;
} else if (foodvalue === "rajma") {
    cal = 260; totalDailyCalories += cal;
} else if (foodvalue === "aloo gobi") {
    cal = 150; totalDailyCalories += cal;
} else if (foodvalue === "bhindi masala") {
    cal = 130; totalDailyCalories += cal;
} else if (foodvalue === "chicken curry") {
    cal = 380; totalDailyCalories += cal;
} else if (foodvalue === "fish curry") {
    cal = 320; totalDailyCalories += cal;

// --- CATEGORY 4 & 5: DINNER & EXTRA ITEMS ---
} else if (foodvalue === "biryani") {
    cal = 450; totalDailyCalories += cal;
} else if (foodvalue === "khichdi") {
    cal = 250; totalDailyCalories += cal;
} else if (foodvalue === "egg") {
    cal = 75 ; totalDailyCalories += cal;
} else if (foodvalue === "mixed veg") {
    cal = 180; totalDailyCalories += cal;
} else if (foodvalue === "baingan bharta") {
    cal = 160; totalDailyCalories += cal;
} else if (foodvalue === "kofta") {
    cal = 300; totalDailyCalories += cal;
} else if (foodvalue === "naan") {
    cal = 260; totalDailyCalories += cal;
} else if (foodvalue === "tandoori chicken") {
    cal = 220; totalDailyCalories += cal;
} else if (foodvalue === "kadai paneer") {
    cal = 320; totalDailyCalories += cal;
} else if (foodvalue === "dal tadka") {
    cal = 180; totalDailyCalories += cal;
} else if (foodvalue === "jeera rice") {
    cal = 140; totalDailyCalories += cal;
} else if (foodvalue==="chicken"){
    cal=300; totalDailyCalories += cal ;
} else if (foodvalue === "rosgulla") {
    cal = 110; totalDailyCalories += cal;
} else if (foodvalue === "papad") {
    cal = 45; totalDailyCalories += cal;
} else if (foodvalue === "fried mirchi") {
    cal = 40; totalDailyCalories += cal;
} else if (foodvalue === "green chutney") {
    cal = 12; totalDailyCalories += cal;
} else if (foodvalue === "tamarind chutney") {
    cal = 45; totalDailyCalories += cal;
} else if (foodvalue === "mixed salad") {
    cal = 30; totalDailyCalories += cal;}
     else if (foodvalue === "chole bhature") {
    cal = 525; totalDailyCalories += cal;
} else if (foodvalue === "tea" || foodvalue === "chai") {
    cal = 75; totalDailyCalories += cal;
} else if (foodvalue === "mix dal") {
    cal = 165; totalDailyCalories += cal;
} else if (foodvalue === "kadai paneer") {
    cal = 300; totalDailyCalories += cal;
} else if (foodvalue === "vada pav") {
    cal = 275; totalDailyCalories += cal;
} else if (foodvalue === "maggi") {
    cal = 310; totalDailyCalories += cal;
} else if (foodvalue === "kela kofta") {
    cal = 225; totalDailyCalories += cal;
} else if (foodvalue === "aloo baingan") {
    cal = 135; totalDailyCalories += cal;
} else if (foodvalue === "aloo gravy") {
    cal = 175; totalDailyCalories += cal;
} else if (foodvalue === "sahjan sarso") {
    cal = 145; totalDailyCalories += cal;
} else if (foodvalue === "sambhar") {
    cal = 110; totalDailyCalories += cal;
} else if (foodvalue === "bari") {
    cal = 125; totalDailyCalories += cal;
} // --- CATEGORY: FRUITS ---
 else if (foodvalue === "apple") {
    cal = 52; totalDailyCalories += cal;
} else if (foodvalue === "orange" || foodvalue === "santara") {
    cal = 47; totalDailyCalories += cal;
} else if (foodvalue === "banana" || foodvalue === "kela") {
    cal = 89; totalDailyCalories += cal;
} else if (foodvalue === "grapes" || foodvalue === "angoor") {
    cal = 67; totalDailyCalories += cal;
} else if (foodvalue === "watermelon" || foodvalue === "tarbooj") {
    cal = 30; totalDailyCalories += cal;
} else if (foodvalue === "mango" || foodvalue === "aam") {
    cal = 60; totalDailyCalories += cal;
} else if (foodvalue === "pineapple") {
    cal = 50; totalDailyCalories += cal;
} else if (foodvalue === "anar" || foodvalue === "pomegranate") {
    cal = 83; totalDailyCalories += cal;
} else if (foodvalue === "jackfruit" || foodvalue === "kathal") {
    cal = 95; totalDailyCalories += cal;
} else if (foodvalue === "papaya" || foodvalue === "papita") {
    cal = 43; totalDailyCalories += cal;
} else if (foodvalue === "strawberry") {
    cal = 33; totalDailyCalories += cal;
} else if (foodvalue === "guava" || foodvalue === "amrood") {
    cal = 68; totalDailyCalories += cal;
} else if (foodvalue === "litchi" || foodvalue === "lychee") {
    cal = 66; totalDailyCalories += cal;
} else if (foodvalue === "blueberry") {
    cal = 57; totalDailyCalories += cal;
} else if (foodvalue === "apricot" || foodvalue === "khubani") {
    cal = 48; totalDailyCalories += cal;}
    // --- CATEGORY: SABJIS & BHUJYA ---
else if (foodvalue === "aloo sabji") {
    cal = 175; totalDailyCalories += cal;
} else if (foodvalue === "soybean sabji") {
    cal = 200; totalDailyCalories += cal;
} else if (foodvalue === "aloo kathal") {
    cal = 205; totalDailyCalories += cal;
} else if (foodvalue === "kabuli chana") {
    cal = 225; totalDailyCalories += cal;
} else if (foodvalue === "aloo matar sabji" || foodvalue === "aloo matar") {
    cal = 180; totalDailyCalories += cal;
} else if (foodvalue === "aloo parbal bhujya" || foodvalue === "parbal bhujya") {
    cal = 165; totalDailyCalories += cal;
} else if (foodvalue === "aloo bhindi sarso" || foodvalue === "bhindi sarso") {
    cal = 160; totalDailyCalories += cal;
} else if (foodvalue === "aloo chana sabji" || foodvalue === "aloo chana") {
    cal = 200; totalDailyCalories += cal;
} else if (foodvalue === "piyaje sabji" || foodvalue === "onion sabji") {
    cal = 115; totalDailyCalories += cal;
} else if (foodvalue === "masala chokha" || foodvalue === "chokha") {
    cal = 115; totalDailyCalories += cal;}
else {
    // If they type something we don't know
    cal = 0;
    alert("Food item not found! Try Samosa, Roti, or Biryani.");
}
if (totalDailyCalories >= (savedResult)){
        suggestion.innerText = "You are above Maintainence calories - to maintain , you should add more protein and subtract carbohydrate";
    } else {
        suggestion.innerText="You are going good - just add more proteins" ;
    } 
    //localStorage.setItem("currentTotal" , totalDailyCalories);
    //else if(food.value==="roti"){
      //  cal =120;
       // totalDailyCalories+=cal;
    //}
    kahanalist.innerHTML += "item : " + foodvalue +" = " + cal +"<br>";
    let finalmsg = totalDailyCalories; 
    
    calories.value = finalmsg;
    localStorage.setItem("currentTotal", totalDailyCalories);
    localStorage.setItem("current list", kahanalist.innerHTML);
    
}
function checkStorage() {
    
    let savedData = localStorage.getItem("currentTotal");
    if (savedData !== null) {
        
        totalDailyCalories = Number(savedData);
        calories.value = "your cal = " + totalDailyCalories;
        totalDailyCalories = 0 ;
    }
}
function checkList () {
    let savedlist = localStorage.getItem("current list");
    if (savedlist !== null){
        kahanalist.innerHTML = savedlist ;
       // kahanalist.value = "your list = " + savedlist ;
    } 
}
function getDailyhistory(){
    let history= localStorage.getItem("currentHistory");
    if (history !== null){
        dailyHistory.innerHTML = history ;
    }

}
reset.onclick = ()=>{
    localStorage.clear();
    dailyHistory.innerHTML = "";
     kahanalist.innerHTML = "";
              calories.value = "your cal = 0";



}

// function resetHistory(){
//     let reset = localStorage.clear();
//      if (reset){
//         
//      }
// }




calories.onclick  = ()=>{
    console.log("your Calories");
}





// alert("Welcome" + " your calorie tracker is ready to use - just select the date and write what you ate and click submit" );
// window.onload = ()=>{
//     checkStorage();
//     checkList()
//     getDailyhistory()
//    ;}
// const date = document.getElementById("date");
// const food = document.getElementById("food-item");
// const time =document.getElementById("time");
// const calories=document.getElementById("totalcalories");
// const clickdate = document.getElementById("clickdate");
// const clickfood = document.getElementById("clickfood");
// const id1 = document.getElementById("id1");
// const kahanalist = document.getElementById("food-list");
// const suggestion= document.getElementById ("suggestion");
// const dailyHistory = document.getElementById("Daily-History");
// const reset = document.getElementById("reset");

// console.log(calories);
// let totalDailyCalories =0;
// let cal ;
// let activeDate = 0 ;
// clickdate.onclick = ()=>{
//     dailyHistory.innerHTML += "<br>" + "Your Calories on this date : " + activeDate + " " + totalDailyCalories + "<br>";
//     localStorage.setItem("currentHistory", dailyHistory.innerHTML);
//    // kahanalist.innerHTML += "Your Calories on this date :"+date.value+ "=" +totalDailyCalories+"<br>";
//     console.log("select date");
//     let datevalue = date.value ;
    
//     kahanalist.innerHTML += "<br>" + "Date : " + datevalue +"<br>";
//     // totalDailyCalories =0;
//     clickdate.innerHTML="Selected Date";
    

    
// }

// clickfood.onclick = () => {
//     activeDate = date.value;
//     console.log("write what you ate");
    
//     let foodvalue = food.value ;
//     foodvalue = food.value.toLowerCase();
//     //innerHTML= food.value ;
//     if (food.value==="samosa"){
//         cal =50;
//         totalDailyCalories+= cal ;
//     }
//     // --- CATEGORY 1: INDIAN SNACKS ---
//  else if (foodvalue === "samosa") {
//     cal = 250; // A real samosa is usually 250, not 50!
//     totalDailyCalories += cal;
// } else if (foodvalue === "pakora") {
//     cal = 75; totalDailyCalories += cal;
// } else if (foodvalue === "pani puri") {
//     cal = 150; totalDailyCalories += cal;
// } else if (foodvalue === "dhokla") {
//     cal = 160; totalDailyCalories += cal;
// } else if (foodvalue === "jalebi") {
//     cal = 150; totalDailyCalories += cal;
// } else if (foodvalue === "kachori") {
//     cal = 190; totalDailyCalories += cal;
// } else if (foodvalue === "bhel puri") {
//     cal = 180; totalDailyCalories += cal;
// } else if (foodvalue === "vada pav") {
//     cal = 300; totalDailyCalories += cal;
// } else if (foodvalue === "sev puri") {
//     cal = 200; totalDailyCalories += cal;
// } else if (foodvalue === "namkeen") {
//     cal = 150; totalDailyCalories += cal;

// // --- CATEGORY 2: INDIAN BREAKFAST ---
// } else if (foodvalue === "poha") {
//     cal = 180; totalDailyCalories += cal;
// } else if (foodvalue === "upma") {
//     cal = 200; totalDailyCalories += cal;
// } else if (foodvalue === "idli") {
//     cal = 40; totalDailyCalories += cal;
// } else if (foodvalue === "paratha") {
//     cal = 250; totalDailyCalories += cal;
// } else if (foodvalue === "chole bhature") {
//     cal = 450; totalDailyCalories += cal;
// } else if (foodvalue === "dosa") {
//     cal = 120; totalDailyCalories += cal;
// } else if (foodvalue === "thepla") {
//     cal = 150; totalDailyCalories += cal;
// } else if (foodvalue === "puri sabzi") {
//     cal = 350; totalDailyCalories += cal;
// } else if (foodvalue === "pongal") {
//     cal = 210; totalDailyCalories += cal;
// } else if (foodvalue === "uttapam") {
//     cal = 200; totalDailyCalories += cal;

// // --- CATEGORY 3: INDIAN LUNCH ---
// } else if (foodvalue === "rice") {
//     cal = 130; totalDailyCalories += cal;
// } else if (foodvalue === "roti") {
//     cal = 80; totalDailyCalories += cal;
// } else if (foodvalue === "dal makhani") {
//     cal = 150; totalDailyCalories += cal;
// } else if (foodvalue === "paneer butter masala") {
//     cal = 350; totalDailyCalories += cal;
// } else if (foodvalue === "chana masala") {
//     cal = 250; totalDailyCalories += cal;
// } else if (foodvalue === "rajma") {
//     cal = 260; totalDailyCalories += cal;
// } else if (foodvalue === "aloo gobi") {
//     cal = 150; totalDailyCalories += cal;
// } else if (foodvalue === "bhindi masala") {
//     cal = 130; totalDailyCalories += cal;
// } else if (foodvalue === "chicken curry") {
//     cal = 380; totalDailyCalories += cal;
// } else if (foodvalue === "fish curry") {
//     cal = 320; totalDailyCalories += cal;

// // --- CATEGORY 4 & 5: DINNER & EXTRA ITEMS ---
// } else if (foodvalue === "biryani") {
//     cal = 450; totalDailyCalories += cal;
// } else if (foodvalue === "khichdi") {
//     cal = 250; totalDailyCalories += cal;
// } else if (foodvalue === "egg curry") {
//     cal = 210; totalDailyCalories += cal;
// } else if (foodvalue === "mixed veg") {
//     cal = 180; totalDailyCalories += cal;
// } else if (foodvalue === "baingan bharta") {
//     cal = 160; totalDailyCalories += cal;
// } else if (foodvalue === "kofta") {
//     cal = 300; totalDailyCalories += cal;
// } else if (foodvalue === "naan") {
//     cal = 260; totalDailyCalories += cal;
// } else if (foodvalue === "tandoori chicken") {
//     cal = 220; totalDailyCalories += cal;
// } else if (foodvalue === "kadai paneer") {
//     cal = 320; totalDailyCalories += cal;
// } else if (foodvalue === "dal tadka") {
//     cal = 180; totalDailyCalories += cal;
// } else if (foodvalue === "jeera rice") {
//     cal = 140; totalDailyCalories += cal;
// } else if (foodvalue==="chicken"){
//     cal=300; totalDailyCalories += cal ;
// }else {
//     // If they type something we don't know
//     cal = 0;
//     alert("Food item not found! Try Samosa, Roti, or Biryani.");
// }
// if (totalDailyCalories >= 2000){
//         suggestion.innerText = "You are above Maintainence calories - to maintain , you should add more protein and subtract carbohydrate";
//     } else {
//         suggestion.innerText="You are going good - just add more proteins" ;
//     } 
//     //localStorage.setItem("currentTotal" , totalDailyCalories);
//     //else if(food.value==="roti"){
//       //  cal =120;
//        // totalDailyCalories+=cal;
//     //}
//     kahanalist.innerHTML += "item : " + foodvalue +" = " + cal +"<br>";
//     let finalmsg = "your cal = "+ totalDailyCalories; 
    
//     calories.value = finalmsg;
//     localStorage.setItem("currentTotal", totalDailyCalories);
//     localStorage.setItem("current list", kahanalist.innerHTML);
    
// }
// function checkStorage() {
//     // 1. Look in the filing cabinet for our key
//     let savedData = localStorage.getItem("currentTotal");

//     // 2. If the cabinet isn't empty (it's not null)
//     if (savedData !== null) {
//         // 3. Load the saved number into our math variable
//         // We use Number() because storage only saves text strings
//         totalDailyCalories = Number(savedData);

//         // 4. Update the UI so the user sees their previous total immediately
//         calories.value = "your cal = " + totalDailyCalories;
//     }
// }
// function checkList () {
//     let savedlist = localStorage.getItem("current list");
//     if (savedlist !== null){
//         kahanalist.innerHTML = savedlist ;
//        // kahanalist.value = "your list = " + savedlist ;
//     } 
// }
// function getDailyhistory(){
//     let history= localStorage.getItem("currentHistory");
//     if (history !== null){
//         dailyHistory.innerHTML = history ;
//     }

// }
// reset.onclick = ()=>{
//     localStorage.clear();
//     dailyHistory.innerHTML = "";
//      kahanalist.innerHTML = "";
//               calories.value = "your cal = 0";



// }

// // function resetHistory(){
// //     let reset = localStorage.clear();
// //      if (reset){
// //         
// //      }
// // }




// calories.onclick  = ()=>{
//     console.log("your Calories");
// }




