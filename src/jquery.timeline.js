(function( $ ) {
  $.fn.timeline = function(){};

  $.fn.timelineFilterHighlight = function(timeline, options){
    console.log("%o.timelineFilterHighlight called!", this);
    options = options || {};
    var filterCount = options['filter-count'] || 1;

    var form = $("<form/>", {
      class: "timeline-filter-highlight-controls"
    });
    
    $("<div/>", {
      text: "Filters",
      class: "label"
    }).appendTo(form);
    var filters = $("<ul/>", {
      class: "timeline-filter-controls"
    }).appendTo(form);
    $("<button/>", {
      text: "Filter"
    }).appendTo(form);

    for (var i=0;i<options['filter-count'];i++) {
      $("<input>", {
        
      }).wrap("li").appendTo(filters);
    }

    $("<div/>", {
      text: "Highlights",
      class: "label"
    }).appendTo(form);
    var highlights = $("<ul/>", {
      class: "timeline-highlight-controls"
    }).appendTo(form);
    $("<button/>", {
      text: "Highlight"
    }).appendTo(form);

    return this;
  };
})(jQuery);
