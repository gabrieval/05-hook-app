
export const todoReducer = (state = [], action)=>{
switch (action.type){
    case 'add':

    return [...state, action.payload];

    case 'delete':
        return state.filter( todo => todo.id !== action.payload ); //123123
        case 'toggle':
            return state.map( todo =>{
                if (todo.id === action.payload){
                    return {
                        ...todo,
                        done: !todo.done
                    }
                }else{
                    return todo;
                }

            })
            //el barre c/u de los elementos del state y debe retornar un valor funcion o CB dentro de los () y va a tener 
            //c/u de los elementos de ese state

    default:
        return state;

        
}
}