function BSTNode(value){
    this.value = value;
    this.left = null;
    this.right = null;
}

BSTNode.prototype.insertLeft = function(value){
    this.left = value;
    return this.left;
}

BSTNode.prototype.insertRight = function(value){
    this.right = value;
    return this.right;
}

//iteration
function isValidBST(root){
    //create stack holding node and upper/lower limits for value
    var nodeAndBoundsStack = [];
    nodeAndBoundsStack.push({node:root, lowerBound: -Infinity, upperBound: Infinity});

    //depth first traversal
    while(nodeAndBoundsStack.length){
        var nodeAndBounds = nodeAndBoundsStack.pop();
        var node = nodeAndBounds.node,
            lowerBound = nodeAndBounds.lowerBound,
            upperBound = nodeAndBounds.upperBound;

        //node value perimeter check
        if (node.value <= lowerBound || node.value >= upperBound){
            return false;
        }

        if(node.left){
            // this node must be less than the current node
            nodeAndBoundsStack.push({node:node.left, lowerBound: lowerBound, upperBound: node.value});
        }

        if(node.right){
            // this node must be greater than the current node
            nodeAndBoundsStack.push({node:node.right, lowerBound:node.value, upperBound:upperBound});
        }
    }
    return true;
}
//recursion
function isBST(root,lowerBound, upperBound){
    lowerBound = (typeof lowerBound !== 'undefined') ? lowerBound : -Infinity;
    upperBound = (typeof upperBound !== 'undefined') ? upperBound : Infinity;

    if(!root) return true;

    if(root.value >= upperBound || root.value <= lowerBound){
        return false;
    }

    return isBST(root.left, lowerBound, root.value) &&
           isBST(root.right, root.value, upperBound);
}

//O(n) runtime and space complexity