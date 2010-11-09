beforeEach(function() {
  this.addMatchers({
    toBeAFunction: function() {
      return $.isFunction(this.actual);
    },
    
    toBeEmpty: function() {
      return this.actual.length == 0;
    }
  })
});
