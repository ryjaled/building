(function() {

	document.addEventListener('deviceready', onDeviceReady.bind(this), false);
	var pictureSource;
	var destinationType;
	function onDeviceReady() {
		pictureSource = navigator.camera.PictureSourceType;
		destinationType = navigator.camera.DestinationType;

		document.getElementById("capturePhoto").onclick = function() {
			//alert("here");
			navigator.camera.getPicture(onPhotoDataSuccess, onFail, {
				quality : 50,

				destinationType : destinationType.DATA_URL
			});
		}



	};

	function onPhotoDataSuccess(imageData) {

		var smallImage = document.getElementById('smallImage');

		smallImage.style.display = 'block';

		smallImage.src = "data:image/jpeg;base64," + imageData;

	}

	function onFail(message) {

		alert('Failed because: ' + message);

	}




//barcode scanner

	document.addEventListener('deviceready', onDeviceReady.bind(this), false);
	function onDeviceReady() {


		document.getElementById("barcodeScanner").onclick = function(){
			//alert("here");
			cordova.plugins.barcodeScanner.scan(
		 function (result) {
				 alert("We got a barcode\n" +
							 "Result: " + result.text + "\n" +
							 "Format: " + result.format + "\n" +
							 "Cancelled: " + result.cancelled);
		 },
		 function (error) {
				 alert("Scanning failed: " + error);
		 },
		 {
				 "preferFrontCamera" : true, // iOS and Android
				 "showFlipCameraButton" : true, // iOS and Android
				 "prompt" : "Place a barcode inside the scan area", // supported on Android only
				 "formats" : "QR_CODE,PDF_417", // default: all but PDF_417 and RSS_EXPANDED
				 "orientation" : "landscape" // Android only (portrait|landscape), default unset so it rotates with the device
		 }
	);



	}
	};





	function showLocation(position) {
	            var latitude = position.coords.latitude;
	            var longitude = position.coords.longitude;
	            alert("Latitude : " + latitude + " Longitude: " + longitude);
	         }

	         function errorHandler(err) {
	            if(err.code == 1) {
	               alert("Error: Access is denied!");
	            }

	            else if( err.code == 2) {
	               alert("Error: Position is unavailable!");
	            }
	         }

	         function getLocation(){

	            if(navigator.geolocation){
	               // timeout at 60000 milliseconds (60 seconds)
	               var options = {timeout:60000};
	               navigator.geolocation.getCurrentPosition(showLocation, errorHandler, options);
	            }

	            else{
	               alert("Sorry, browser does not support geolocation!");
	            }
	         }

})();
