
import React, { useReducer } from "react";


const actionTypes = {
    error : 'ERROR',
    success : 'SUCCESS',
    save : 'SAVE', 
    sincronize : 'SINCRONIZE'
}

const reducer = (state, action) => {
    switch(action.type){
        case actionTypes.error : return {
            ...state,
            error : true
        };
        case actionTypes.success : return {
            ...state,
            error : false,
            loading : false,
            sincronizedItem : true,
            item : action.payload
        };
        case actionTypes.save : return {
            ...state,
            item : action.payload
        };
        case actionTypes.sincronize : return {
            ...state,
            sincronizedItem : false,
            loading : true,
        };
        default : return {
            ...state
        }
    }
}

function useLocalStorage(itemName, initialValue){

    const initialState = {
        sincronizedItem : false,
        error: false,
        loading: true,
        item : initialValue
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    const {sincronizedItem, error, loading, item} = state

    /* ACTION CREATORS */

    const onError = (error) => {
        dispatch({type: actionTypes.error, payload: error})
    }

    const onSuccess = (item) => {
        dispatch({type: actionTypes.success, payload: item})
    }

    const onSave = (item) => {
        dispatch({type: actionTypes.save, payload: item})
    }
    const onSincronize = () => {
        dispatch({type: actionTypes.sincronize})
    }


    React.useEffect(()=>{
        setTimeout(()=>{
            try {
            const localStorageItem = localStorage.getItem(itemName);
            let parsedItem;

            if(!localStorageItem){
                localStorage.setItem(itemName, JSON.stringify(initialValue));
                parsedItem = initialValue;
            }else{
                parsedItem = JSON.parse(localStorageItem)
            }

            onSuccess(parsedItem)

            } catch (error) {
            onError(error)
            }
        }, 1000)
    }, [sincronizedItem]);

    
    const saveItem = (newItem) =>{
    try {
        const stringfiedItem = JSON.stringify(newItem);
        localStorage.setItem(itemName, stringfiedItem)
        onSave(newItem)
    } catch (error) {
        onError(error)  
    }
    }

    const sincronizeItem = () => {
        onSincronize();
    };

    return{
    item, 
    saveItem,
    loading,
    error,
    sincronizeItem,
    };
}


export { useLocalStorage };