const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
module.exports = class BinarySearchTree {

  constructor(){
    this.treeRoot = null;
  }

  root() {
    return this.treeRoot;
  }

  add(data) {
    function addValue(node, data){
      if(!node){
        return new Node(data)
      }

      if(node.data === data){
        return node
      }

      if(data < node.data){
        node.left = addValue(node.left,data)
      } else {
        node.right = addValue(node.right, data)
      }
      return node
    }
    this.treeRoot = addValue(this.treeRoot, data);
  }

  has(data) {
    function searchValue(node, data){
      if(!node){
        return false;
      }
      if(node.data === data){
        return true;
      }
      return data < node.data ? 
      searchValue(node.left, data) :
      searchValue(node.right, data);
    }
    return searchValue(this.treeRoot, data);
  } 
  

  find(data) {
    function searchValue(node, data){
      if(!node){
        return null
      }
      if(node.data === data){
        return node;
      }
      return data < node.data ? 
      searchValue(node.left, data) :
      searchValue(node.right, data);
    }
    return searchValue(this.treeRoot, data);
  }

  remove(data) {
    this.treeRoot = removeValue(this.treeRoot, data);

    function removeValue(node, data){
      if(!node){
        return null;
      }
      if(data < node.data){
        node.left = removeValue(node.left, data)
        return node;
      } else if (data > node.data){
        node.right = removeValue(node.right, data)
        return node;
      } else {
        if(!node.left && !node.right){
          return null;
        }
        if(!node.left){
          node = node.right;
          return node;
        }
        if(!node.right){
          node = node.left;
          return node;
        }
        let minRight = node.right;
        while(minRight.left){
          minRight = minRight.left;
        }
        node.data = minRight.data;
        node.right = removeValue(node.right,minRight.data);
        return node;
      }
    }
  }

  min() {
    if(!this.treeRoot){
      return;
    }

    let node = this.treeRoot;
    while(node.left){
      node = node.left;
    }

    return node.data;
  }

  max() {
    if(!this.treeRoot){
      return;
    }

    let node = this.treeRoot;
    while(node.right){
      node = node.right;
    }

    return node.data;
  }

}