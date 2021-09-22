/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    let paths = []
    
    function traverse (node, path) {
        if (node.val) path += node.val
       
        if (node.left && node.right) {
            path += '->'
            traverse(node.left, path)
            traverse(node.right, path)
        }
        else if (node.left ) {
            path += '->'
            traverse(node.left, path)
        } else if (node.right) {
            path += '->'
            traverse(node.right, path)
        }
    
         if (!node.left && !node.right) paths.push(path)
    }
    if (root) traverse(root, "")
    return paths
};
