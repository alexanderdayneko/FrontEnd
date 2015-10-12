function Node(data, parent) {
	this.data = data;
	this.parent = parent;
	this.left = null;
	this.right = null;
	return this;
};

function BinaryTree() {
	this.root = null;
};


BinaryTree.prototype.getNode = function(data) {
	var node = this.root;
	var get = function(node) {
		if(node === null) return null;
		if (data === node.data)
			return node;
		else if(data > node.data)
			return get(node.right);
		else return get(node.left);
	}
	return get(node);
};

BinaryTree.prototype.addNode = function(data) {
	for(var i = 0; i < arguments.length; i++) {
		if(this.root === null)
			this.root = new Node(arguments[i]);
		else {
			var data = arguments[i];
			(function addNode(currNode) {
				if(data < currNode.data) {
					if(currNode.left === null)
						currNode.left = new Node(data, currNode);
					else
						addNode(currNode.left);
				}
				else {
					if(currNode.right === null)
						currNode.right = new Node(data, currNode);
					else
						addNode(currNode.right)
				}
			})(this.root);
		}
	}
	return this;
};

BinaryTree.prototype.traverseInOrder = function() {
	function traverse(node){
		if(node.left !== null){
			traverse(node.left);
		}
		console.log(node.data)
		if(node.right !== null){
			traverse(node.right);
		}
	}
	traverse(this.root);
};

var NewBinaryTree = function() {
	BinaryTree.apply(this,arguments);
};

function extend(child, parent) {
	var Temp = function(){};
	Temp.prototype = parent.prototype;
	child.prototype = new Temp();
	child.prototype.constructor = child;
	child.superclass = parent.prototype;
	return child;
};

extend(NewBinaryTree, BinaryTree);

NewBinaryTree.prototype.deleteNode = function(data){
	var node = this.getNode(data);
	if(node !== null) {
		//for element without childs
		if(node.left === null && node.right === null){
			if(node.parent.left === node)
				node.parent.left = null;
				else
				node.parent.right = null;
		}
		//for element with two childs


		//for element without left child
		else if(node.left === null){
			if(node.parent.left === node)
				node.parent.left = node.right;
			else 
				node.parent.right = node.right;
		}
		//for element without right child
		else if(node.right === null){
		if(node.parent.left === node)
			node.parent.left = node.left;
		else 
			node.parent.right = node.left;
		}	
	}	
	return this;
};

var tree = new NewBinaryTree(); //creating new tree
tree.addNode(20,8,25,7,11,-8,3,9,10,0)
tree.traverseInOrder();

