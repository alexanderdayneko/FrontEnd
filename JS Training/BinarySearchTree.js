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