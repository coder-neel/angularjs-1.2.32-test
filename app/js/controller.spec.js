'use strict';

describe('PhoneListController',function(){
    beforeEach(module('phonecatApp'));
    
    it('should create a `phones` model with 3 phones',inject(function(){
        var scope = {};
        var ctrl = $controller('PhoneListController', {$scope, scope});

        expect(scope.phone.length).toBe(3);

    }));
});