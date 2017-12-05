var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
 

  //this = Object.create(makeDancer.prototype)
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  //debugger;
  // this.step = function() {
  //   debugger;
  //   // call the old version of step at the beginning of any call to this new version of step
  //   oldStep();
  //   // toggle() is a jQuery method to show/hide the <span> tag.
  //   // See http://api.jquery.com/category/effects/ for this and
  //   // other effects you can use on a jQuery-wrapped html tag.
  //   this.$node.toggle();
  // };
  


  //this.oldStep = MakeDancer.prototype.step;
  MakeDancer.call(this, top, left, timeBetweenSteps);


  

  //return blinkyDancer;
};

makeBlinkyDancer.prototype = Object.create(MakeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;
makeBlinkyDancer.prototype.step = function() {
    // call the old version of step at the beginning of any call to this new version of step
    //this.oldStep();this
    MakeDancer.prototype.step.call(this, this.timeBetweenSteps);
   
    this.$node.toggle();
  };

