// Individual Box Class

function Box() {
  this.element = document.createElement("div"); 

  this.posX; 
  this.posY; 
  this.movePosX = 1;
  this.movePosY = 1; 

  var that = this;

  this.addClass = function(className) {
    that.element.className = className;
  }


  this.setInitialPos = function() {
    this.posX = Math.floor((Math.random() * 850) + 1);
    this.posY = Math.floor((Math.random() * 450) + 1);

    that.element.style.left = that.posX + 'px';
    that.element.style.top = that.posY + 'px';
  }

  this.appendTo = function(parentElement) {
    parentElement.appendChild(that.element);
  }

}
