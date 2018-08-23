import { combineReducers } from 'redux'
import appReducer from './app/app_reducer'


// takes all your seperate reducers into one giant reducer
// each Redux action will flow through each middleware and then reach the reducers
// then it will go through each reducer
const rootReducer = combineReducers({
	app: appReducer,
})

export default rootReducer
