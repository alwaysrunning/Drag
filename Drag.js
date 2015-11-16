function Drag(id){
	var self = this;
	this.oDiv = document.getElementById(id)
	this.disX = 0
	this.disY = 0

	this.oDiv.onmousedown = function(ev){
		self.fnDown(ev)
	}
}

Drag.prototype.fnDown = function(e){
   var e = e || window.event, self = this;
   this.disX = e.clientX-this.oDiv.offsetLeft
   this.disY = e.clientY-this.oDiv.offsetTop
   document.onmousemove = function(){
   	 self.fnMove()
   }
   document.onmouseup = function(){
   	self.fnUp()
   }
}

Drag.prototype.fnMove = function(e){
   var e = e || window.event, self = this;
   this.oDiv.style.left =  e.clientX - this.disX + 'px'
   this.oDiv.style.top =  e.clientY - this.disY + 'px'
}

Drag.prototype.fnUp = function(){
   document.onmousemove = null
   document.onmouseup = null	
}