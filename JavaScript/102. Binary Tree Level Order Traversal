/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let level = 0
    let array = []
    
    function traverse (node, level) {
        if (!Array.isArray(array[level])) array[level] = []
        
        if (node.val !== null) array[level].push(node.val)
        
        if (node.left) traverse(node.left, level + 1)
        if (node.right) traverse(node.right, level + 1)
    
    }
    
    if (root) traverse(root, 0)
    return array
};
