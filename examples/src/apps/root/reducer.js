import { Map } from 'immutable'

class reducer {
	setCurrentAppPath = (state, currentAppPath) => {
		return state.set('currentAppPath', currentAppPath)
	}
}

export default function creator(option) {
	return new reducer(option)
}

