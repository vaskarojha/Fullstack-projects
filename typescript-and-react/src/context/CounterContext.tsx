import React, {createContext, useState, useContext} from 'react'


interface CounterProviderProps{
    children: React.ReactNode;
}

interface CounterContextValue {
    value: number;
    setCount: (num:number) =>void
}

const CounterContext = createContext<CounterContextValue | number>(0)

export const useCounter = ()=>{
    return useContext(CounterContext)
}

export const CounterProvider :React.FC = (props)=>{
    const [count, setCount]  = useState<number>(0)
    return (
        <CounterContext.Provider value ={{
            value: count,
            setCount
        }}>

        </CounterContext.Provider>
    )
}

