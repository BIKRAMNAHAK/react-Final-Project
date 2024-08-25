
const initialState ={
    allproducts : [],
    order: [],
    addtocart : [],
    product : null

}

 function userReducer(state =initialState , action) {
    
    switch (action.type) {
       
            case 'VIEWPRODUCTS':
                return{
                    ...state,
                    allproducts:action.payload  
                }
            case 'PRODUCTINFO':
                const singlePro = state.allproducts.find((proinfo)=>proinfo.id === action.payload)
                return{
                    ...state,
                    product: singlePro
                }
            case 'VIEWORDERLIST':
                return{
                    ...state,
                    order:action.payload
                }

            case 'ADDTOCART':
                const singleData = state.allproducts.find((cartdata)=>cartdata.id === action.payload)
                    
                return{
                    ...state,
                    addtocart: singleData
                }
        default:
            return state ;
    }
}

export default userReducer