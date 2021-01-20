let myNumber =10

if ( myNumber !== 'Number'){
   console.log ('This is not a number')
}else if (myNumber%3 == 0) {
    console.log('Gen');
}else if (myNumber%5 == 0) {
    console.log('Buzz')
}else if (myNumber%3 == 0 && myNumber%5 == 0);{
    console.log('GenBuzz ')
}
    console.log(myNumber) 


    
  let Store = 'Shoes'
    switch (Store) {
	case "Shoes":
		console.log("The price of the Shoes is $50");
		break;
	case "Jeans":
		console.log("The price of the Jeans is $25");
		break;
	
	case "Hat":
		console.log("The price of the Hat is $12");
		break;
	case "Socks":
		console.log("The price of the Socks is $2");
		break;
	default:
		console.log("This Store is not available");
}
    
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
  
console.log(getRandomInt(50, 100));
   