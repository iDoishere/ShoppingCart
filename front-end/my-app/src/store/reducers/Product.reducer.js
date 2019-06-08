import * as TypeactionProduct from '../actionsProduct'
import * as TypeactionLogout from '../actions.Logout'

const initialState = {
    productsResult: [],
    products: [],
}
let tempArr = [];

function productsReducer(state = initialState, action) {

    switch (action.type) {
        case TypeactionProduct.FETCH_IMG:
            tempArr = [...action.Product];
            return {
                productsResult: action.Product,
                products: state.products,
            }
        case TypeactionProduct.PICK_PRODUCT:
            const listTemp = [...state.products];
            for (let i = 0; i <= listTemp.length; i++) {
                if (listTemp.length === 0) {
                    listTemp.push(action.product)
                    action.product.num++;
                    return {
                        productsResult: state.productsResult,
                        products: listTemp,
                    }
                }
                const a = listTemp.some(product => product.id === action.product.id)
                if (a) {
                    action.product.num++;
                } else {
                    listTemp.push(action.product)
                    action.product.num++;
                }
                return {
                    productsResult: state.productsResult,
                    products: listTemp,
                }
            }
        case TypeactionLogout.LOG_OUT:
            return {
                productsResult: [],
                products: []

            }
        case TypeactionProduct.RMV_PRODUCT:
            let arr = [...state.products];
            for (let i = 0; i < arr.length; i++) {
                if (arr[i].id === action.data.value.id) {
                    arr[i].num--;
                }
                if (action.data.value.num === 0) {
                    const filterProducts = arr.filter(product => product.id !== action.data.value.id);
                    return {
                        productsResult: state.productsResult,
                        products: filterProducts,
                    }
                }
            }
            return {
                productsResult: state.productsResult,
                products: arr,
            }
        case TypeactionProduct.SEARCH_PRODUCT:
            const filter = tempArr.filter(product => {
                return product.name.toLowerCase().includes(action.searchText)
            })
            return {
                productsResult: filter,
                products: state.products
            }
        case TypeactionProduct.SORT:
            for (let i = 0; i < tempArr.length; i++) {
                tempArr.sort(sortNumber);
            }
            return {
                productsResult: tempArr,
                products: state.products
            }
    }
    return state
}
function sortNumber(a, b) {
    return a.price - b.price;
}
export default productsReducer;