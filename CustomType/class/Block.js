"use strict";
class Block {
    //readonly nonce: number;
    // readonly hash: string;
    constructor(index, previousHash, timestamp, data) {
        this.index = index;
        this.previousHash = previousHash;
        this.timestamp = timestamp;
        this.data = data;
        //const {nonce,hash} = this.mine();
        //this.nonce = nonce;
        // this.hash = hash;
    }
}
