// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

	'facebookAuth' : {
		'clientID' 		: '235440583538207', // your App ID
		'clientSecret' 	: '10b3e02b9ea495c8c06903f743c23d5e', // your App Secret
		'callbackURL' 	: 'http://localhost:3000/auth/facebook/callback'
	},

	'twitterAuth' : {
		'consumerKey' 		: 'HZWffSbsxZ7f0ynw7EIdlGEPG',
		'consumerSecret' 	: 'PmA9y90a5XWOiWzbSinjfDoYlk86W2gPr45ykSFpP43pu7vifx',
		'callbackURL' 		: 'http://localhost:3000/auth/twitter/callback'
	},

	'googleAuth' : {
		'clientID' 		: 'your-secret-clientID-here',
		'clientSecret' 	: 'your-client-secret-here',
		'callbackURL' 	: 'http://localhost:8080/auth/google/callback'
	}

};
