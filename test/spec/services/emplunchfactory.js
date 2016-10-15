'use strict';

describe('Service: empLunchFactory', function () {

  // load the service's module
  beforeEach(module('angularApp'));

  // instantiate service
  var empLunchFactory;
  beforeEach(inject(function (_empLunchFactory_) {
    empLunchFactory = _empLunchFactory_;
  }));

  it('should do something', function () {
    expect(!!empLunchFactory).toBe(true);
  });

});
