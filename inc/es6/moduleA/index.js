module app from '../app';

console.log('loaded moduleA/index.js');
app.App.greet();


window.moduleA = function() {
    console.log('hi from moduleA/index.js');
};

export var mainProp = 'mnprp';

export function sayHi() {
	console.log('hi from moduleA/index.js');
}