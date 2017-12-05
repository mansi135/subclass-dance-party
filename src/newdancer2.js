var MakeNewDancer2 = function(top, left, timeBetweenSteps) {
  //this = Object.create(makeDancer.prototype)
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  MakeDancer.call(this, top, left, timeBetweenSteps);

};


MakeNewDancer2.prototype = Object.create(MakeDancer.prototype);
MakeNewDancer2.prototype.constructor = MakeNewDancer2;
MakeNewDancer2.prototype.step = function() {
    // call the old version of step at the beginning of any call to this new version of step
    //this.oldStep();this
    MakeDancer.prototype.step.call(this, this.timeBetweenSteps);
    this.$node.removeClass("dancer");
    this.$node.addClass("dancer2");
    this.$node.toggle();
  };