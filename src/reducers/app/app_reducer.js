import {
  CHANGE_LANGUAGE,
} from '../../actions/action_types'

const INITIAL_STATE = {
  selected_language: 'en',
}

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
    case CHANGE_LANGUAGE:
      return {
        ...state,
        selected_language: action.payload,
      }
		default:
			return {
				...state
			}
	}
}
