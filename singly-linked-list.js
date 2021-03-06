class Node
{
  constructor(val)
  {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList
{
  constructor()
  {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }
  push(val)
  {
    let newNode = new Node(val);
    if(!(this.head)){
        this.head = newNode;
        this.tail = newNode;
    }
    else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop()
  {
      if(!this.head)
        return undefined;

      let current = this.head;
      let newTail = current;
      while (current.next)
      {
          newTail = current;
          current = current.next;
      }
      this.tail = newTail;
      this.tail.next = null;
      this.length--;

      if(this.length === 0)
      {
        this.head = null;
        this.tail = null;
      }
      return this;
  }
  shift()
  {
    if(!this.head)
      return undefined;

    let currHead = this.head;
    this.head = currHead.next;
    this.length--;
    if(this.length === 0)
      this.tail = null;
    return currHead;
  }
}
