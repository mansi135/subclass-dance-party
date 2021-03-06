// Creates and returns a new dancer object that can step
var MakeDancer = function(top, left, timeBetweenSteps) {

  ///var dancer = {};
  //new object is now this
  //this = Object.create(makeDancer.prototype);
  
  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');

  // this.step = function() {
  //   // the basic dancer doesn't do anything interesting at all on each step,
  //   // it just schedules the next step
  //   setTimeout(this.step, timeBetweenSteps);
  // };
  
  this.wait = timeBetweenSteps;

 
  this.step();


  // this.setPosition = function(top, left) {
  //   // Use css top and left properties to position our <span> tag
  //   // where it belongs on the page. See http://api.jquery.com/css/
  //   //
  //   var styleSettings = {
  //     top: top,
  //     left: left
  //   };
  //   this.$node.css(styleSettings);
  // };

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  this.setPosition(top, left);

  //return dancer;
};

MakeDancer.prototype.step = function(time) {
    // the basic dancer doesn't do anything interesting at all on each step,
    // it just schedules the next step
    var that = this;
    setTimeout(this.step.bind(that), this.wait);
  };
//timeBetweenSteps into time

MakeDancer.prototype.setPosition = function(top, left) {
    // Use css top and left properties to position our <span> tag
    // where it belongs on the page. See http://api.jquery.com/css/
    //
    var styleSettings = {
      top: top,
      left: left
    };
    // console.log(this);
    // console.log($node);
   
    this.$node.css(styleSettings);
  };