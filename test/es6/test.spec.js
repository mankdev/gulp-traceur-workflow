import {App} from '../../inc/es6/app';

describe('qweqwe', function() {



	it('should working', function() {
		expect(true).toBe(true);
	});

    it('should working with app', function() {
        expect(App.prp).toBe('prep');
        console.log(App);
    })
});