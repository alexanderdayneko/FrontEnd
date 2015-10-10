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
			(function addNode(currNode){
				if(data < currNode.data){
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

BinarySearchTree.prototype.GetMax = function() {
	var node = this.root;
	while(node.right != null)
		node = node.right;
	console.log("Max tree element: " + node.data);
}

BinarySearchTree.prototype.GetMin = function() {
	var node = this.root;
	while(node.left != null)
		node = node.left;
	console.log("Min tree element: " + node.data);
}	
var tree = new BinarySearchTree();
tree.AddNode(20,8,25,7,11,3,9,10)
tree.GetMax();
tree.GetMin();