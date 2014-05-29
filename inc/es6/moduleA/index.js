module app from '../app';

console.log('loaded moduleA/index.js');
app.App.greet();

sayHello();


window.moduleA = function() {
    console.log('hi from moduleA/index.js');
};

export function sayHi() {
	console.log('hi from moduleA/index.js');
}