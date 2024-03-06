import React, { useReducer } from 'react'
import PageTitle from '../../components/layout/PageTitle'

const initialState = {
    cart: [],
    products: [],
    user: null,
    number: 0
}

//o objetivo da função reducer é pegar o estado atual e pra cada ação q acontece vai evoluir o estado, alterando um atributo
function reducer(state, action) {
    //toda ação tem pelo menos o atributo tipo
    switch (action.type) {
        case 'add2ToNumber':
            return { ...state, number: state.number + 2 }
        case 'numberMulti7':
            return { ...state, number: state.number * 7 }
        case 'numberDiv25':
            return { ...state, number: state.number / 25 }
        case 'login':
            return { ...state, user: { name: action.payload } }
        default:
            //se não ele vai retornar o estado atual
            return state
    }
}
const UseReducer = (props) => {
    //passa a função que vai evoluir o estado
    //dispatch disparando uma ação
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />
            <div className="center"></div>
            {state.user ?
                <span className="text">{state.user.name}</span>
                : <span className="text">Sem Usuário</span>
            }
            <span className="text"></span>
            <span className="text">{state.number}</span>
            <div>
                <button className="btn"
                    onClick={() => dispatch({ type: 'login', payload: 'Maria' })}>Login</button>
                <button className="btn"
                    onClick={() => dispatch({ type: 'add2ToNumber' })}>+2</button>
                <button className="btn"
                    onClick={() => dispatch({ type: 'numberMulti7' })}>*7</button>
            </div>
        </div>
    )
}

export default UseReducer
