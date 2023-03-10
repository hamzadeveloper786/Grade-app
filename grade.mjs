let enterYourPer = prompt("Enter your percentage:")

console.log(enterYourPer)

let valuea1 = ("100")

let valuea = ("70")

let valueb = ("60")

let valuec = ("50")

let valued = ("45")

let valuee = ("39")

if(enterYourPer >= valuea1){
    console.log("A1")
   alert("A1")
} else if(enterYourPer > valuea){
    console.log ("A")
    alert("A")
}else if(enterYourPer > valueb){
    console.log("B")
    alert("B")
}else if(enterYourPer > valuec){
    console.log("C")
    alert("C")
}else if(enterYourPer > valued){
    console.log("D")
    alert("D")
}else if(enterYourPer > valuee){
    console.log("E")
    alert("E")
}else if(enterYourPer >= 0){
    console.log("F");
    alert("F");
}else if(enterYourPer > 100){
    console.log("Invalid percentage please enter your percentage between 0 to 100")
    alert("Invalid percentage please enter your percentage between 0 to 100")
}else{
    console.log("Invalid percentage please enter your percentage between 0 to 100")
    alert("Invalid percentage please enter your percentage between 0 to 100")
}