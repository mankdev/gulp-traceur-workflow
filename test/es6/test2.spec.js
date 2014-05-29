module indexA from '../../inc/es6/moduleA/index';

describe('qweqwe', function() {

    it('should working with app', function() {
        expect(indexA.mainProp).toBe('mnprp');
    })
});