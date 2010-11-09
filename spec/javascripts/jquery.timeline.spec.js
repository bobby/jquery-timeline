describe("jquery.timeline", function() {
  var selector = "#timeline"
  var setupTimeline = function(){};
  var teardownTimeline = function(){};

  beforeEach(function() {
    teardownTimeline();
    setupTimeline();
  });
    
  describe("$().timeline", function() {
    it("should be a function on a jQuery object", function() {
      var timeline = $("#timeline");
      expect(timeline.timeline).toBeAFunction();
    });
  });
  
  describe("$().timelineFilterHighlight", function(){
    var selector = "#timeline-controls"

    var setupTimelineControls = function(){
      $("<div/>", {id: "content", html: "<div id='timeline-controls' />"}).appendTo("body");
      $(selector).timelineFilterHighlight();
    };
    var teardownTimelineControls = function(){
      $("#content").remove();
    };

    beforeEach(function() {
      teardownTimelineControls();
      setupTimelineControls();
    });
    
    afterEach(function(){
     teardownTimelineControls();
    });
  
    it("should be a function on a jQuery object", function() {
      expect($(selector).timelineFilterHighlight).toBeAFunction();
    });
    
    it("should add a form to the selected elements", function(){
      expect($("form")).not.toBeEmpty();
    });
    
    describe("form", function(){
      it("should have the class 'timeline-filter-highlight-controls'", function(){
        expect($("#timeline-controls > form.timeline-filter-highlight-controls")).not.toBeEmpty();
      });
    });
  });
});
