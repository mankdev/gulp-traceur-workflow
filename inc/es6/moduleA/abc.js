console.log('loaded moduleA/abc');

import {sayHi} from './index';

sayHi();

export function sayHello() {
	console.log('hello from abc');
}