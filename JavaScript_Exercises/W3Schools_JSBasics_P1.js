var tDate = new Date();
var daylist = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
function amPM (hour){
	
	if(hour<12){
		return tDate.getHours()+" AM";
	}
	else{
		return tDate.getHours()-12+" PM";  
	  }
};

console.log("Today's date is: "+daylist[tDate.getDay()]+".");
console.log("Current time is: "+amPM(tDate.getHours)+" : "+tDate.getMinutes()+" : "+tDate.getSeconds());