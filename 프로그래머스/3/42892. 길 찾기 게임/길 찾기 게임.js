class TreeNode {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function solution(nodeinfo) {
    const nodesWithIndex = nodeinfo.map((node, index)=> [...node,index+1])
    nodesWithIndex.sort((a,b)=>{
        if(b[1]===a[1]){
            return a[0]-b[0]
        }
        return b[1]-a[1]
    })
    
    function buildTree(nodes) {
        if (nodes.length === 0) return null;
        const rootNode = nodes[0];

        const left = nodes.filter(n => n[0] < rootNode[0]);
        const right = nodes.filter(n => n[0] > rootNode[0]);

        return new TreeNode(
            rootNode[2], 
            buildTree(left),
            buildTree(right)
  );
}

    function preorder(node, result = []) {
  if (!node) return;
  result.push(node.value);
  preorder(node.left, result);
  preorder(node.right, result);
  return result;
}

function postorder(node, result = []) {
  if (!node) return;
  postorder(node.left, result);
  postorder(node.right, result);
  result.push(node.value);
  return result;
}

 const value = buildTree(nodesWithIndex)
    return [preorder(value),postorder(value)]
}

