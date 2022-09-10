import React, { createContext, useReducer } from "react";

type contextType = {
    countryInfo? : countryInfoType
    dispatch? : React.Dispatch<actionType>
}

export const CountryInfoContext = createContext<contextType>({})

type countryInfoType = {
    api : string
    map : string
}
type actionType = {
    type : "set"
    value : countryInfoType
}

const reducerFunc:React.Reducer<countryInfoType, actionType> = (state, action) => {
    switch (action.type){
        case "set":
            return action.value 
        default:
            return state
    }
}

type Props = {
    children : React.ReactNode
}

export const CountryInfoProvider = (props:Props) => {
    const { children } = props
    const [ countryInfo, dispatch ] = useReducer(reducerFunc, {api:'world', map:''})
    return (
        <CountryInfoContext.Provider value={{countryInfo, dispatch}}>
            {children}
        </CountryInfoContext.Provider>
    )
}
