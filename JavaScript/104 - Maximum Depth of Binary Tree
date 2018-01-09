/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    let depth = 0
    
    function traverse (node, level) {
        if (level > depth) depth = level
        if (node.left) traverse(node.left, level + 1)
        if (node.right) traverse(node.right, level + 1)
    }
    
    if (root) {
        depth = 1
        traverse(root, depth)
    }
    return depth
};
