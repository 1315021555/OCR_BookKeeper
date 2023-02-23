export default{
	weekdayArr:["Sunday","Monday","Thuesday","Wednesday","Thursday","Friday","Saturday"],
	dayNumArr:[0,31,28,31,30,31,30,31,31,30,31,30,31],
	isLeapYear(y){
		if (y%4==0 && y%100!=0 || y%400==0){
			return true;
		}
		else{
			return false;
		}
	},

}