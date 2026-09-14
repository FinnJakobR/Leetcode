/*
 * @lc app=leetcode id=21 lang=javascript
 *
 * [21] Merge Two Sorted Lists
 */

// @lc code=start

// Definition for singly-linked list.
  

function ListNode(val, next) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
   
    if(!list2) return list1;
    if(!list1) return list2;

    let head1 = list1;

    while(head1) {

        const val = head1.val;

        let head2 = list2;
        let before = null;

        while(head2) {

            if(head2.val > val) break;
            
            before = head2;
            head2 = head2.next;
        }

        if(!before) {
            if(val <= head2.val) {
                list2 = new ListNode(val, list2);
            } else {
                list2.next = new ListNode(val, null);
            }
        } else {
            const temp = head2;
            before.next = new ListNode(val, temp);
        }

        head1 = head1.next;


    }


    return list2;
};


// var printVals = function(list) {

//     let head = list;

//     let str = "";

//     while(head) {

//         str += head.val;
//         head = head.next
//     }

//     console.log(str);
// }

//   printVals(
//     mergeTwoLists(
//          new ListNode(1, new ListNode(2, new ListNode(4))),
//          new ListNode(1, new ListNode(3, new ListNode(4)))
//     )
//   )

// printVals(mergeTwoLists(
//     new ListNode(2),
//     new ListNode(1)
// ));

// printVals(mergeTwoLists(
//     new ListNode(1, new ListNode(3, new ListNode(5))),
//     new ListNode(2, new ListNode(4, new ListNode(6)))
// ));

// printVals(mergeTwoLists(
//     null,
//     new ListNode(1, new ListNode(2, new ListNode(3)))
// ));

// // // console.log(mergeTwoLists(
// // //     new ListNode(1, new ListNode(2, new ListNode(3))),
// // //     null
// // // ));

// // // // console.log(mergeTwoLists(
// // // //     null,
// // // //     null
// // // // ));


// printVals(mergeTwoLists(
//     new ListNode(1, new ListNode(1, new ListNode(1))),
//     new ListNode(1, new ListNode(1, new ListNode(1)))
// ));

// printVals(mergeTwoLists(
//     new ListNode(-3, new ListNode(-1, new ListNode(2))),
//     new ListNode(-2, new ListNode(0, new ListNode(3)))
// ));


// @lc code=end

