import React from 'react'
import { toSlug } from '../../extensions/toSlug'
function Input({ label, ...restInput }) {

    return (
        <>
            {
                label
                &&
                <label htmlFor={toSlug(label)} style={{ display: `block`, marginBottom:`5px` }}>
                    {label}
                </label>
            }
            <input
                id={toSlug(label)}
                style={{
                    width: `100%`,
                    height: `40px`,
                    padding: `4px 8px`,
                    borderRadius: `4px`,
                    border: `1px solid #ccc`,

                }}
                onFocus={(e)=> {e.target.style.outline=`none`}}
                onBlur={e=> e.target.style.border=`1px solid #ccc`}
                {...restInput}
            />
        </>
    )
}

export default Input