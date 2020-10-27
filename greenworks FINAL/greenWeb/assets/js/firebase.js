//retrieve data from firebase - davina

src="https://www.gstatic.com/firebasejs/7.14.2/firebase.js"

	// Your web app's Firebase configuration
var firebaseConfig = {
	apiKey: "AIzaSyC4PLpYWOdmCP3EjINVNWW33SCmNzU9AFA",
	authDomain: "greenworks-database.firebaseapp.com",
	databaseURL: "https://greenworks-database.firebaseio.com",
	projectId: "greenworks-database",
	storageBucket: "greenworks-database.appspot.com",
	messagingSenderId: "756125957979",
	appId: "1:756125957979:web:e79a6ea30383f01ca3247e",
	measurementId: "G-QBW1K6YT43"
	};
		
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
		

function getdata(resinNumIn) {
	resinnum = resinNumIn;

	//firebase data retrieval function - path to the data
	//.once will get all your data in one time
	
	firebase.database().ref('resinNum/'+resinnum).once('value').then(function(snapshot){
		var num = snapshot.val().recyclingNum;
		var abbrev = snapshot.val().abbreviation;
		var name = snapshot.val().polymerName;
		var material = snapshot.val().production;
		var use = snapshot.val().uses;
		var recycle = snapshot.val().recycling;
		var alternative = snapshot.val().alternatives;
	
		//data is stored in variables
		//show them in html
		
		document.getElementById("num").innerHTML = num;
		document.getElementById("abbrev").innerHTML = abbrev;
		document.getElementById("name").innerHTML = name;
		document.getElementById("material").innerHTML = material;
		document.getElementById("use").innerHTML = use;
		document.getElementById("recycle").innerHTML = recycle;
		document.getElementById("alternative").innerHTML = alternative;
	})
};
