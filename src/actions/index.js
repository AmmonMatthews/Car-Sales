export const BUY_ITEM = "BUY_ITEM"
export const REMOVE = "REMOVE"

export const buyItem = item => {
    // dipsatch an action here to add an item
    return{
        type: BUY_ITEM,
        payload: item
    }

  };

export const removeItem = item => {

    return{
        type: REMOVE,
        payload: item
    }
}