//Displaying welcome message based on time of day

const hours = new Date().getHours() // get the current hour

const isMorning = hours >= 4 && hours < 12 // is it morning?
const isAfternoon = hours >= 12 && hours < 17 // is it afternoon?
const isEvening = hours >= 17 || hours < 4 // is it evening?

//Determining the time of day and correlating message
let wMessage = "";

if(isMorning){
    wMessage = "Good Morning!"
} 
    else if(isAfternoon){
    wMessage = "Good Afternoon!"
}
    else if(isEvening){
        wMessage = "Good Evening!"
    }
//Attaching it to the welcome class in dive element in HTML
document.querySelector('#welcome').textContent = wMessage;