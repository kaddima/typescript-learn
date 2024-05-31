"use strict";
class Component {
    constructor(name) {
        this.name = name;
    }
}
// ITERATOR
class Frame {
    constructor(name, components) {
        this.name = name;
        this.components = components;
        this.pointer = 0;
    }
    next() {
        if (this.pointer < this.components.length) {
            return {
                done: false,
                value: this.components[this.pointer++]
            };
        }
        else {
            return {
                done: true,
                value: null
            };
        }
    }
}
//ITERABLE
class FrameIterable {
    constructor(name, components) {
        this.name = name;
        this.components = components;
    }
    [Symbol.iterator]() {
        let pointer = 0;
        let components = this.components;
        return {
            next() {
                if (pointer < components.length) {
                    return {
                        done: false,
                        value: components[pointer++]
                    };
                }
                else {
                    return {
                        done: true,
                        value: null
                    };
                }
            }
        };
    }
}
//ITERABLEITERATOR
class FrameIterableIterator {
    constructor(name, components) {
        this.name = name;
        this.components = components;
        this.pointer = 0;
    }
    next() {
        if (this.pointer < this.components.length) {
            return {
                done: false,
                value: this.components[this.pointer++]
            };
        }
        else {
            return {
                done: true,
                value: null
            };
        }
    }
    [Symbol.iterator]() {
        return this;
    }
}
