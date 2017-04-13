function slist(){
  this.head = null
  this.runner = this.head;
  this.addFront = function(){
    var newnode = new node(var)
    newnode.next = this.head;
    this.head = newnode;
  }
  this.addBack = function(){
    while(this.runner.next != null){
      this.runner = this.runner.next;
    }
    var newnode = new node(var)
    this.runner.next = newnode;
  }
  this.addFront = function(){
    var newnode = new node(var)
    newnode.next = this.head;
    this.head = newnode;
  }
}

function node(val){
  this.value = val;
  this.next = null;
}
