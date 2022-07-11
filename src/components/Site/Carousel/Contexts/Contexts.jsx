import React from 'react'
const Contexts = React.createContext('')

function Provider({ children }) {
  const refRange = React.useRef();

    const [deg, setDeg] = React.useState(90)
    const value = {
        deg,
        setDeg,
        refRange
    }
    return (
            <Contexts.Provider value={value}>{children}</Contexts.Provider>
    )
}

export {Contexts,Provider}