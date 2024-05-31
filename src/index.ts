class Component{
    constructor(public name:string){}
}

// ITERATOR

class Frame implements Iterator<Component>{

    private pointer = 0

    constructor(public name:string, public components:Component[]){}

    public next(): IteratorResult<Component> {
        if(this.pointer < this.components.length){

            return {
                done:false,
                value:this.components[this.pointer++]
            }
        }else{
            return {
                done:true,
                value:null
            }
        }
    }
}

//ITERABLE
class FrameIterable implements Iterable<Component>{

    constructor(public name:string, public components:Component[]){}

    [Symbol.iterator](){
        let pointer = 0;
        let components = this.components

        return {
            next(): IteratorResult<Component> {
                if(pointer <components.length){
        
                    return {
                        done:false,
                        value:components[pointer++]
                    }
                }else{
                    return {
                        done:true,
                        value:null
                    }
                }
            }
        }
    }
}

//ITERABLEITERATOR

class FrameIterableIterator implements IterableIterator<Component>{

    private pointer = 0

    constructor(public name:string, public components:Component[]){}

    public next(): IteratorResult<Component> {
        if(this.pointer < this.components.length){

            return {
                done:false,
                value:this.components[this.pointer++]
            }
        }else{
            return {
                done:true,
                value:null
            }
        }
    }

    [Symbol.iterator]():IterableIterator<Component>{
        return this
    }
}
