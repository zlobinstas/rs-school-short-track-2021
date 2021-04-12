/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and l = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */

function removeKFromList(l, k) {
  const tmp = l;
  let current = tmp;
  let follow = current.next;
  while (current.next) {
    if (current.value === k) {
      current.value = follow.value;
      current.next = follow.next;
    }
    current = follow;
    follow = follow.next;
  }
  return tmp;
}

module.exports = removeKFromList;
