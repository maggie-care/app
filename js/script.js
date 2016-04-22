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
			
		}
		
	} // end account
	
} // end maggiecare

var page = {
	
	overlay: {
		
		hide: function(){
			
			jQuery('.overlay').delay(500).fadeOut( 500 , function(){ jQuery('body').removeClass('has-overlay'); })
			
		}, // end hide
		
	} // end overlay
	
} // end page


