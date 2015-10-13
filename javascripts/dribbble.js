/**
 * Load Dribbble shots
 *
 * This script users Dribbble's API
 * to fetch the latest shots
 * from a specialied Dribbble user
 */
 
 // What user are we using?
 // 
 var dribbbleUsername='jimniels';
 var html='';

 // Load the shots via Dribbble's API

$.getJSON("http://api.dribbble.com/players/"+dribbbleUsername+"/shots?callback=?",function(data){
	// Do somthing with the result here
	// how many shots we're displaying on the page
	var numberOfShots=10;

	// Loop over the results, generating the HTML for each <li> item
	// 
	for (var i =0; i <numberOfShots; i++) {
		html +='<li>';
		html +='<a href="'+data.shots[i].url+'">';
		html +='<img src="'+data.shots[i].image_url+'" alt="'+data.shots[i].title+'" />';
		html +='</a>';
		html +='</li>';
	};
})