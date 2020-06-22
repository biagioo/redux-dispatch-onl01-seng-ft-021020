let state = {count: 0};
let action = {type: 'INCREASE_COUNT'}

function changeState(state, action){
    switch (action.type) {
      case 'INCREASE_COUNT':
        return {count: state.count + 1}
      default:
        return state;
    }
  }
 
function dispatch(action){
  state = changeState(state, action)
  return state
}
 
function render(){
  document.body.innerText = state.count
}

const times = x => f => {
  if (x > 0) {
    f()
    times (x - 1) (f)
  }
}

times(100)(()=> dispatch(action))
 
render()


