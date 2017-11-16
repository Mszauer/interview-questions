function BinaryTreeNode(value){
    this.value = value;
    this.left = null;
    this.right = null;
}

BinaryTreeNode.prototype.insertLeft = function(value){
    this.left = BinaryTreeNode(value);
    return this.left;
};

BinaryTreeNode.prototype.insertRight = function(value){
    this.right = BinaryTreeNode(value);
    return this.right;
};

function isBalanced(root){
    if(!root){
        return true;
    }
    let depths = []; //return false if this value is greater than 1

    let nodes = [];
    nodes.push([root,0]);

    while (nodes.length){
        //pop a node from the top of our tree
        const nodePair = node.pop();
        const node = nodePair[0],
            depth = nodePair[1];

        //case: found a leaf
        if(!node.left && !node.right){
            //only care if it's a new depth
            if(depths.indexOf(depth) < 0){
                depths.push(depth);

                //two possibilities of unbalanced tree:
                //   1) more than 2 different leaf depths
                //   2) 2 leaf depths that are more than 1 apart
                if (depths.length > 2 ||
                    (depths.length === 2 && Math.abs(depths[0] - depths[1]) > 1) ){
                    return false;
                }
            }
        // case: not a leaf node
        } else {
            if(node.left){
                nodes.push([node.left, depth+1]);
            }
            if(node.right){
                nodes.push([node.right, depth+1]);
            }
        }
    }
    return true;
}