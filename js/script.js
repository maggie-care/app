var maggiecare = {
	
	init: function(){
		
		maggiecare.account.set_account();
		
	},
		
	account: {
		
		acct: false,
		
		get_acct: function(){ return maggiecare.account.acct; },
		
		set_account: function(){
			
			local_acct = window.localStorage.getItem('account');
			
			if ( local_acct === null || local_acct.length === 0 ){
				
				return false;
				
			} else {
				
				return local_acct;
				
			} // end if
			
		}, // end set_account
		
		create_account: function( data ){
			
			var url = 'http://api.maggie.care/account/create/index.php';
			
			jQuery.post(
				url,
				data,
				function(response){
					alert(response);
				}
			)
			
		}
		
	} // end account
	
} // end maggiecare
maggiecare.init();









/*var mcare = function(){
	
	var self = this;
	
	this.account = function(){
		
		this.get_account = function(){
			
			var acct = window.localStorage.getItem('account');
			
			if ( acct === null || acct.length === 0 ){
				
				return false;
				
			} else {
				
				return acct;
				
			} // end if
			
		}
		
	}	
}
var maggiecare = new mcare();

var mcare_splash = function(){
}

var */

