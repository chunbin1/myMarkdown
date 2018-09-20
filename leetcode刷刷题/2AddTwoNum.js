var addTwoNumbers = function(l1, l2) {
  let list = new ListNode(0);
  let result = list;
  let sum,
    carry = 0;
  while (l1 || l2 || carry > 0) {
    //当l1 或 l2 或有进位存在的时候，加法计算就没有结束
    sum = 0;
    if (l1 !== null) {
      sum += l1.val;
      l1 = l1.next;
    }
    if (l2 !== null) {
      sum += l2.val;
      l2 = l2.next;
    }
    sum += carry;
    list.next = new ListNode(sum % 10);
    carry = parseInt(sum / 10);
    list = list.next;
  }
  return result.next;
};
