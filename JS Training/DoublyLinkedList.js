function Node(data) {
	this.data = data;
	this.prev = null;
	this.next = null;
};

function List() {
	this.head = null;
	this.tail = null;
	this.count = 0;
};

List.prototype.head = function() {
	return this.head;
}

List.prototype.tail = function() {
	return this.tail;
}

List.prototype.addHead = function(data) {
	var newNode = new Node(data);
	if(this.head === null) {
		this.head = this.tail = newNode;
	}
	else {
		this.head.prev = newNode;
		var temp = this.head;
		this.head = newNode;
		this.head.next = temp;
	}
	
	this.count++;
	return this;
}

List.prototype.addTail = function(data) {
	var newNode = new Node(data);
	if(this.head === null) {
		this.head = this.tail = newNode;
	}
	else {
		this.tail.next = newNode;
		var temp = this.tail;
		this.tail = newNode;
		this.tail.prev = temp;
	}
	this.count++;
	return this;
}


List.prototype.append = function (data) {
	this.addTail(data);
	return this;
}
List.prototype.deleteAt = function(index){
	var currNode = this.at(index);
	if(currNode !== null){		
		if(currNode.prev !== null && currNode.next !== null) {
			currNode.next.prev = currNode.prev;
			currNode.prev.next = currNode.next;
		}
		else if(currNode.next !== null) {
			currNode.next.prev = null;
			this.head = currNode.next;
		}
		else {
			currNode.prev.next = null;
			this.tail = currNode.prev;
		}
		this.count--;
	}
	return this;
}

List.prototype.at = function(index){
	if(index < 0 || index >= this.count)
		throw new RangeError('Index must be between 0 and ' + this.count);
	else {
		var currNode = this.head;
		for(var i = 0; i < index; i++)
			currNode = currNode.next;
		return currNode;
	}
}

List.prototype.insertAt = function(index, data) {
	var currNode = this.at(index);
	var newNode = new Node(data);
	if(currNode !== null){
		if(currNode.prev === null)
			this.addHead(data);
		if(currNode.next === null)
			this.addTail(data);
		if(currNode.prev !== null && currNode.next !== null){
			currNode.prev.next = newNode;
			newNode.prev = currNode.prev;
			newNode.next = currNode;
			currNode.prev = newNode;
		}
	}
	this.count++;
	return this;
}

List.prototype.reverse = function() {
    var currNode = this.head;
    var temp;
    while (currNode) {
        temp = currNode.prev;
        currNode.prev = currNode.next;
        currNode.next = temp;
        currNode = currNode.prev;
    }
    temp = this.head;
    this.head = this.tail;
    this.tail = temp;
    return this;
};

List.prototype.each = function(func) {
    var currNode = this.head;
    while (currNode) {
        func(currNode);
        currNode = currNode.next;
    }
    return this;
};

List.prototype.indexOf = function(data){
  var currNode = this.head;
  while(currNode) {
    if(currNode.data === data)
      return currNode;
    else currNode = currNode.next;
  }
  return null;
};

List.prototype.printList = function(){
	var currNode = this.head;
	while(currNode){
		console.log(currNode.data)
		currNode = currNode.next;
	}
};

var list = new List();

list.append(0);
list.append(1).append(2).append(3).append(4);
list.append(5);
list.append(6);
list.append(7);
console.log("Deleting 5th:");
list.deleteAt(5);
list.printList();
console.log("Deleting 4th:");
list.deleteAt(4);
list.printList();
console.log("Inserting at 4:");
list.insertAt(4, 10);
list.printList();

console.log("Reversed list:");
list.reverse();
list.printList();