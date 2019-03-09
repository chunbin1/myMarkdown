function Node(data){
  this.data = data
  this.next = null;
}

class List {
  length = 0
  constructor() {
    this.head = new Node('head');
  }

  // 头部插入节点
  insertHead(newData) {
    let newNode = new Node(newData);
    if(this.length===0){
      this.head.next  = newNode;
      this.length+=1;     
    }
    newNode.next = this.head.next;
    this.head.next= newNode
  }

  add(){
    this.length+=1
  }

  print(){
    let curNode = this.head
    while(curNode.next){
      debugger
      console.log(curNode.next.data);
      curNode = curNode.next
    }
  }
}

let list = new List()
list.insertHead('data')
list.insertHead('data2')
list.print()

