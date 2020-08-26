import { UPDATE_PRODUCTS,UPDATE_PRODUCT_DESCRIPTION,ADD_NEW_PRODUCT,INCREASE_QUANTITY,DECREASE_QUANTITY,DELETE_PRODUCT,SORT_PRODUCTS} from '../actions/actionTypes';
import update from 'react-addons-update';
const defaultData={
    list:[]
}
export default function products(state =defaultData, action) {
    switch (action.type) {
        case UPDATE_PRODUCTS:
            return {
                ...state,
                list:action.products
            }
        case ADD_NEW_PRODUCT:
            return {
                ...state,
                list:[action.product,...state.list]
            }
        case UPDATE_PRODUCT_DESCRIPTION:
            return update(state, { 
                list: { 
                  [action.index]: {
                    description:{$set:action.product.product.description}
                  }
                }
              });    
        case INCREASE_QUANTITY:
            return update(state, { 
                list: { 
                    [action.index]: {
                    quantity:{$set:action.product.quantity}
                    }
                }
            });   
        case DECREASE_QUANTITY:
            return update(state, { 
                list: { 
                    [action.index]: {
                        quantity:{$set:action.product.quantity}
                    }
                }
            });                     
        case DELETE_PRODUCT:
            return {
                ...state,
                list:state.list.filter(item=>item.id!==action.product.product.id)
            }
        case SORT_PRODUCTS:
        return {
            ...state,
                list:action.products
        }
        default:
            return state;
    }

}