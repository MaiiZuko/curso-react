import React from 'react'
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
    switch(action.type) {
        case 'add2ToNumber':
            return {...state, number: state.number +2}
        default:
            //se não ele vai retornar o estado atual
            return state
    }
}
const UseReducer = (props) => {
    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />
        </div>
    )
}

export default UseReducer
