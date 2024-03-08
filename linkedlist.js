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

    prepend(value)
    {
        const newNode = new Node(value);
        if(!this.head)
            this.head = newNode;
        else
        {
            newNode.nextNode = this.head;
            this.head = newNode;
        }

        this.length++;
        
    }

    contains(value)
    {
        if(!this.head)
            return false;
        else
        {
            let currentNode = this.head;
            while(currentNode){
                if(currentNode.element === value)
                    return true;
                currentNode = currentNode.nextNode;
            }

            return false;
        }
    }

    find(value)
    {
        if(!this.head)
            return null;
        else
        {
            let currentNode = this.head;
            let i = 0;
            while(currentNode){
                if(currentNode.element === value)
                    return i;
                
                currentNode = currentNode.nextNode;
                i++;
            }

            return null;
        }
    }

    toString()
    {
        let to_string_format = '';
        if(!this.head)
        {
            return to_string_format;
        }
        else
        {
            let currentNode = this.head;
            while(currentNode){
                to_string_format += `(${currentNode.element}) -> `;
                currentNode = currentNode.nextNode;
            }
            to_string_format += ' null';
        }

        return to_string_format;
    }

    insertAt(value, index)
    {
        const newNode = new Node(value);
        if(!this.head)
            this.head = newNode;
        else if(index == 0)
        {
            this.prepend(value);
        }
        else if(index > this.length - 1)
        {
            this.append(value);
        }
        else
        {
            let currentNode = this.head;
            let prevNode = null;
            let i = 1;
            while(i <= index)
            {
                prevNode = currentNode;
                currentNode = currentNode.nextNode;
                i++;
            }

            newNode.nextNode = prevNode.nextNode;
            prevNode.nextNode = newNode;

        }

        this.length++;
    }

}

const list = new LinkedList();

list.append(1);
list.append(2);
list.append(3);
list.print();
console.log('\n');
list.prepend(0);
list.print();
console.log(list.contains(1));
console.log(list.contains(200));
console.log(list.contains(400));
console.log(list.contains(0));
console.log(list.find(2));
console.log(list.toString());
list.insertAt(-1, 0);
console.log(list.toString());
list.insertAt(-2, 100);
console.log(list.toString());
list.insertAt(1003928323, 3);
console.log(list.toString());