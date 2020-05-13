class InMemoryFriends {
    constructor() {
        this.list = [];
    }
 
    add(name) {
        this.list.push(name);
    }
 
    getAll() {
        return this.list;
    }
}

module.exports = InMemoryFriends;