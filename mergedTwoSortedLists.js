/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
class ListNode {
    constructor(val = 0, next = null) {
      this.val = val;
      this.next = next;
    }
  }
  
  function mergeTwoLists(list1, list2) {
    // Create a dummy node to store the head of the merged list
    let dummy = new ListNode();
    let curr = dummy;
  
    // Iterate over both lists and compare the values at each node
    while (list1 && list2) {
      if (list1.val < list2.val) {
        curr.next = list1;
        list1 = list1.next;
      } else {
        curr.next = list2;
        list2 = list2.next;
      }
      curr = curr.next;
    }
  
  
    // Append the remaining nodes from list1 or list2
    curr.next = list1 || list2;
  
    return dummy.next;
  }