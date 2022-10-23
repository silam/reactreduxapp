
// All actions go here

// function to ditpatch an action
export const depositMoney = (amount) => {
    return(dispatch=>{
        dispatch(
            {
                type: "DEPOSIT",
                payload: amount
            }
        )
    })
}

export const withdrawMoney = (amount) => {
    return ( dispatch => {
        dispatch({
            type: "WITHDRAW",
            payload: amount
        })
    }
        
    )
}