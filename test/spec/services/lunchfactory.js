'use strict';

describe('Service: lunchFactory', function () {

  // load the service's module
  beforeEach(module('angularApp'));

  // instantiate service
  var lunchFactory;
  beforeEach(inject(function (_lunchFactory_) {
    lunchFactory = _lunchFactory_;
  }));

  it('should do something', function () {
    expect(!!lunchFactory).toBe(true);
  });

});
