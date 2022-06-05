
const intionState ={
    expenses: []
}

let nextId = 0
export const reducerFunc =(state=intionState, action)=>{
    switch (action.type) {
        case 'ADD':
            return {
                ...state,
                expenses: [
                    ...state.expenses,
                    {
                        title: action.title,
                        price: action.price,
                        date: action.date,
                        id: nextId++
                    }
                ]
            }
        case 'DELETE':
            return {
                ...state,
                expenses: state.expenses.filter((exp)=> exp.id !== action.id),
            }    
            
    
        default:
            return state;
    }
}