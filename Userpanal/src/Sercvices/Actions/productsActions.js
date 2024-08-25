import { collection, doc, getDocs, setDoc } from "firebase/firestore";
import { db } from "../../../configfirebase";


const viewProducts = (viewPro)=>{
    return{
        type: 'VIEWPRODUCTS',
        payload : viewPro
    }
}


const productsinfo =(proInfo) =>{
    return{
        type: 'PRODUCTINFO',
        payload : proInfo
    }
}

export const AddToCartAction =(addtocartPro)=>{
    return{
        type: 'ADDTOCART',
        payload : addtocartPro
    }
}


export const getProductsAsync = () => {
    return async (dispatch) => {
        try {
            const querySnapshot = await getDocs(collection(db, 'products'));
            let proData = [];

            querySnapshot.forEach((doc) => {
                proData = [...proData, doc.data()];
            });

            dispatch(viewProducts(proData));
        } catch (err) {
            console.log("Error fetching documents: ", err);
        }
    };
};

export const productInfoAsync = (info) => {
    return async (dispatch) => {
        try {
            dispatch(productsinfo(info))
            console.log("action id", info);
        } catch (err) {
            console.log("error", err);
        }
    }
}

export const addUserOrderAsync =(userOrder) =>{
    console.log("userOrder",userOrder);
    
    return async (dispatch) => {
        try{
            await setDoc(doc(db, 'UserOrder', `${userOrder.id}`), userOrder);
        }catch(err){
            console.log("can not gat data",err);
            
        }
    }
}

