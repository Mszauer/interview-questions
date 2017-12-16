function BinaryTreeNode(node){
    this.value = value;
    this.left = null;
    this.right = null;
}

BinaryTreeNode.prototype.insertLeft = function(value){
    this.left = new BinaryTreeNode(value);
    return this.left;
}

BinaryTreeNode.prototype.insertRight = function(value){
    this.right = new BinaryTreeNode(value);
    return this.right;
}

function findLargest(root){
    let current = root;
    while (current) {
        if (!current.right) return current.value;
        current = current.right;
    }
}

function findSecondLargest(root){
    if (!root && (!root.left && !root.right)){
        throw new Error("Tree must have two nodes");
    }
    let crawler = root;

    while(crawler) {

        // case: current is largest and has a left subtree
        // 2nd largest is the largest in that subtree
        if (crawler.left && !crawler.right) {
            return findLargest(crawler.left);
        }

        // case: current is parent of largest, and largest has no children,
        // so current is 2nd largest
        if (crawler.right && !crawler.right.left && !crawler.right.right) {
            return current.value;
        }

        crawler = crawler.right;
    }
}

//O(n) time where n is the height of the BST and O(1) space
//O(lg n) time if tree is balanced