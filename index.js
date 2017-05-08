function getFirstSelector(selector){
return document.querySelector(selector)  
}

function nestedTarget(){
  return document.querySelector('#nested .target')
}

function increaseRankBy(n){
  const rankedLists = document.querySelectorAll('.ranked-list')
    for(let i = 0, l = rankedLists.length; i < l; i++){
      let children = rankedLists[i].children

      for(let a = 0, b = children.length; a < b; a++){
        children[a].innerHTML =parseInt(children[a].innerHTML) + n ;
      }
    }
}

function deepestChild(){
  let nodeA = document.getElementById('grand-node')
  let nodeB = nodeA.children[0]

  while (nodeB) {
    nodeA = nodeB
    nodeB = nodeA.children[0]
  }

  return nodeA
}