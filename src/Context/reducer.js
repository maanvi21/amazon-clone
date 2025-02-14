export const initialState ={
    basket:[],
    user: null
}

//selector 
export const getBasketTotal=(basket) =>
    basket?.reduce((amount,item)=> item.price+amount, 0);

const reducer=(state,action) => {
    console.log(action);
    switch(action.type){

        case 'ADD_TO_BASKET': 
        return { ...state, 
        basket: [...state.basket,action.item]
    };
    case 'REMOVE_FROM_BASKET':
        return{
            ...state, 
        basket: [...state.basket.filter(item => item.id !== action.id)]
        };
        case "SET_USER":
      return {
        ...state,
        user: action.user
      }

    defaut :
    return state;

    }
};
export default reducer;