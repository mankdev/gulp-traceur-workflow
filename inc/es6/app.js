console.log('loaded app.js');

let App = function() {
    console.log('hi from app.js');
};

App.greet = function() {
	console.log('hi from Application');
};

export var App = App;