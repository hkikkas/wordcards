var wordApp = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
		
		// hide the loading message
		$.mobile.loading().hide();
		
		// add handlers
        $('#current_word').on( "swipeleft", wordApp.swipeHandlerLeft );
		$('#current_word').on( "swiperight", wordApp.swipeHandlerRight );
    },
	
	// receive the swipe events
	swipeHandlerLeft: function( event ) {
		$('#current_word').hide();
	},
	
	swipeHandlerRight: function( event ) {
		$('#current_word').fadeOut(2000); // slow fade out
	}
};

// initialize the word app
wordApp.initialize();
//wordApp.onDeviceReady();