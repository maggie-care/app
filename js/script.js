var maggiecare = {
	
	init: function(){
		
		maggiecare.account.the_account();
		
	},
		
	account: {
		
		acct: false,
		
		the_account: function(){
			
			var local_account = window.localStorage.getItem('account');
			
			if ( local_account === null || local_account.length === 0 ){
				
				return false;
				
			} else {
				
				 maggiecare.account.acct = JSON.parse( local_account );
				
			} // end if
			
		},
		
		set_local_account: function( acct ){
			
			window.localStorage.setItem( 'account' , JSON.stringify( acct ) );
			
			maggiecare.account.the_account();
			
		}, // end set_account
		
		create_account: function( data , redirect ){
			
			var url = 'http://sms.maggie.care/api/account/create.php';
			
			jQuery.get(
				url,
				data,
				function(response){
					
					maggiecare.account.set_local_account( response['settings'] );
					
					if ( redirect ){
						
						window.location = redirect;
						
					} // end if
					
				},
				'json'
			)
			
		}, // end create_account
		
		clear: function(){
			
			localStorage.clear();
			
			window.location = '/onboard/create-account.html';
			
		}, // end clear
		
	}, // end account
	
	users: {
			
		set_temp_user: function( data ){
			
			window.localStorage.setItem( 'temp_user' , data );
			
		}, // end temp_user
		
		get_temp_user: function(){
			
			return window.localStorage.getItem( 'temp_user' );
			
		} // end temp_user
		
	} // end users
	
} // end maggiecare

var page = {
	
	overlay: {
		
		hide: function(){
			
			jQuery('.overlay').delay(500).fadeOut( 500 , function(){ jQuery('body').removeClass('has-overlay'); })
			
		}, // end hide
		
	} // end overlay
	
} // end page

var user = function(){
	
	
	
}


