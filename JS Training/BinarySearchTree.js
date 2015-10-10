function Node(data, parent) {
	this.data = data;
	this.parent = parent;
	this.left = null;
	this.right = null;
	return this;
};

function BinarySearchTree() {
	this.root = null;
};

BinarySearchTree.prototype.GetNode = function(data) {
	var node = this.root;
	var get = function(node) {
		if (data === node.data)
			return node;
		else if(data > node.data)
			return get(node.right);
		else return get(node.left);
	}
	return get(node);
}

BinarySearchTree.prototype.AddNode = function(data) {
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

BinarySearchTree.prototype.PrintMax = function() {
	var node = this.root;
	while(node.right != null)
		node = node.right;
	console.log("Max tree element: " + node.data);
};

BinarySearchTree.prototype.PrintMin = function() {
	var node = this.root;
	while(node.left != null)
		node = node.left;
	console.log("Min tree element: " + node.data);
};	

function extend(child, parent) {
	var Temp = function(){};
	Temp.prototype = parent.prototype;
	child.prototype = new Temp();
	child.prototype.constructor = child;
	child.superclass = parent.prototype;
	return child;
};

var NewBinarySearchTree = function() {
	BinarySearchTree.apply(this,arguments);
};



extend(NewBinarySearchTree, BinarySearchTree);

var tree = new NewBinarySearchTree(); //creating new tree
tree.AddNode(20,8,25,7,11,-8,3,9,10,0)
tree.PrintMax();
tree.PrintMin();