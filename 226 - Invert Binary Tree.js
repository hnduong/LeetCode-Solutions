/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    
    function traverse (node) {
        
        if (node.right && node.left) {
            let temp = node.right
            node.right = node.left
            node.left = temp
            traverse(node.right)
            traverse(node.left)
        } else if (node.right && !node.left) {
            let temp = node.left
            node.left = node.right
            node.right = temp
            traverse(node.left)
        } else if (node.left && !node.right) {
              let temp = node.right
            node.right = node.left
            node.left = temp
            traverse(node.right)
        }

    }
    if (root) traverse(root)
    return root
};
