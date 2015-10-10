function Node(data, parent) {
	this.data = data;
	this.parent = parent;
	this.left = null;
	this.right = null;
	return this;
}

function BinarySearchTree() {
	this.root = null;
}

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
