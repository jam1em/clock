$(document).ready(function(){
	
		var isBlue 		= false;
		var dt 				= new Date();
		var hh 				= dt.getHours();
		var mm 				= dt.getMinutes();
		var ss 				= dt.getSeconds();
		function clock(){
			
			setTimeout(function(){
				dt = new Date();
				hh = dt.getHours();
				mm = dt.getMinutes();
				ss = dt.getSeconds();

				if(ss < 10 ){
					ss = "0" + ss;
				}

				if( isBlue ){
					
					isBlue = false;
				}else{
					
					isBlue = true;
				}

				$("body").append("<div class='droplet'></div>");
					
					$("#ss").html( ss );
					$("#mm").html( mm );
					$("#hh").html( hh );


					
					clock();
			}, 1000);
		}
		clock();
});