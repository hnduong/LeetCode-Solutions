/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var LN;
    if(l1.next === null || l2.next === null){
        if(l1.val !== null && l2.val !== null){
            LN = new ListNode((l1.val + l2.val) % 10);
        }else if(l1.val === null){
            LN = new ListNode(l2.val % 10);
        }else if(l2.val === null){
            LN = new ListNode(l1.val % 10);
        }
        if(l1.next !== null && l2.next !== null){
            LN.next = new ListNode(l1.next, l2.next);
        }
        else if(l1.next !== null){
            if(l1.val + l2.val > 9){
                var LT = l1.next;
                LT.val+=1;
                l1.next = LT;
            }
            LN.next = addTwoNumbers(l1.next, new ListNode(0));
        }
        else if(l2.next !== null){
            if(l1.val + l2.val > 9){
                LT = l2.next;
                LT.val+=1;
                l2.next = LT;
            }
            LN.next = addTwoNumbers(new ListNode(0), l2.next);
        }else if(l1.next === null && l2.next === null){
            if(l1.val + l2.val > 9){
                LN.next = new ListNode(1);
            }
        }
    }
    if(l1.next !== null && l2.next !== null){
        if(l1.val + l2.val > 9){
            LT = l1.next;
            LT.val+=1;
            l1.next = LT;
        }
        LN = new ListNode((l1.val + l2.val) % 10);
        LN.next = addTwoNumbers(l1.next, l2.next);
    }
    return LN;
};