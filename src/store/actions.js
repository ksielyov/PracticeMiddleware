export const getData = () => {
    return async (dispatch, getState) => {
        const resp = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = await resp.json();

        console.log(data)

        if (data.id === 1)
            dispatch({type: 'PLUS'})
        else
            dispatch({type: 'MINUS'})

        // console.log(getState())
        // dispatch({type: 'MINUS'})
        // dispatch({type: 'MINUS'})
        // dispatch({type: 'MINUS'})
        // console.log(getState())
    }
}
