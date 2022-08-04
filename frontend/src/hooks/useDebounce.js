import React from 'react'

function useDebounce(value, delay) {
    const [debounceValue, setDebounceValue] = React.useState("")
    React.useEffect(() => {
        const timer = setTimeout(() => {
            setDebounceValue(value)
        },delay)
        return ()=> clearTimeout(timer)
    }, [value])
    return debounceValue
}

export default useDebounce