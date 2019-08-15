import { createStore } from 'redux';



const initalState = {
	lista: {},
	listaExibir: {},
	busca: 0,
	listaBusca: [],
	total: 0,
	menu: 0
}

function lista(state = initalState, action) {
	if(action.type === 'listar') {
		return {...state, listaExibir: action.lista }
	}

	if(action.type === 'dados') {
		return {...state, lista: action.lista }
	}

	if(action.type === 'busca') {
		if(action.busca === 0 ) {
			return {...state, busca: action.busca }
		} else {
			return {...state, listaBusca: action.lista, busca: action.busca }
		}
	}

	if(action.type === 'exibir') {
		return { ...state, menu: action.exibir }
	}

	return state
}

const store = createStore(lista);

export default store;