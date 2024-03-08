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

    getHead(){
        return this.head;
    }

    tail(){
        let currentNode = this.head;
        while(currentNode)
            currentNode = currentNode.nextNode;

        return currentNode;
    }

    at(index)
    {
        if(index >= this.length || !this.head){
            return null;
        }
        else
        {
            let currentNode = this.head;
            let i = 0;
            while(i < index){
                currentNode = currentNode.nextNode;
                i++;
            }

            return currentNode;
        }
    }

    pop()
    {
        if(!this.head){
            return "There is nothing to pop";
        }
        else
        {
            let currentNode = this.head;
            let prevNode = null;
            while(currentNode.nextNode)
            {
                prevNode = currentNode;
                currentNode = currentNode.nextNode;
            } 

            if(prevNode === null)
                this.head = null;
            else
                prevNode.nextNode = null;

            this.length--;
        }
    }

    

}

const list = new LinkedList();

list.append(1);
list.append(2);
list.append(3);
list.print();
list.pop();
list.print();
list.pop();
list.pop();
list.pop();
list.print();
console.log(list.getHead());
console.log(list.size());
list.pop();
console.log(list.size());
console.log(list.at(0));
list.append(1);
list.append(2);
console.log(list.at(1));