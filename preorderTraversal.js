/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
let three = new TreeNode(3,null, null)
let two = new TreeNode(2, three, null)
let root = new TreeNode(1,null,two)

var preorderTraversal = function (root) {
    let arr = []
    if (root) {
        arr.push(root.val)
        arr = [...arr, ...preorderTraversal(root.left)]
        arr = [...arr, ...preorderTraversal(root.right)]
    }
    return arr

};

console.log(preorderTraversal(root))