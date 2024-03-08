class Node{
    constructor(element){
        this.element = element;
        this.nextNode = null;
    }
}

class LinkedList{
    
    constructor(){
        this.head = null;
        this.length = 0;
    }

    append(value)
    {
        const newNode = new Node(value);
        if(!this.head){
            this.head = newNode;
        }
        else
        {
            let currentNode = this.head;
            while(currentNode.nextNode){
                currentNode = currentNode.nextNode;
            }

            currentNode.nextNode = newNode;
        }

        this.length++;
    }

    print()
    {
        if(!this.head)
            console.log('list is empty');
        else
        {
            let currentNode = this.head;
            while(currentNode){
                console.log(currentNode.element);
                currentNode = currentNode.nextNode;
            }
        }
    }

    size(){
        return this.length;
    }

    head(){
        return this.head;
    }

    tail(){
        let currentNode = head;
        while(currentNode)
            currentNode = currentNode.nextNode;

        return currentNode;
    }

}

const list = new LinkedList();

list.append(1);
list.append(2);
list.append(3);
console.log(list);
list.print();