import {App} from '../es6/app.js';

console.log('loaded moduleA/index.js');
App.greet();

window.moduleA = function() {
    console.log('hi from moduleA/index.js');
};