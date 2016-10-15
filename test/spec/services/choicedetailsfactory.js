'use strict';

describe('Service: choiceDetailsFactory', function () {

  // load the service's module
  beforeEach(module('angularApp'));

  // instantiate service
  var choiceDetailsFactory;
  beforeEach(inject(function (_choiceDetailsFactory_) {
    choiceDetailsFactory = _choiceDetailsFactory_;
  }));

  it('should do something', function () {
    expect(!!choiceDetailsFactory).toBe(true);
  });

});
