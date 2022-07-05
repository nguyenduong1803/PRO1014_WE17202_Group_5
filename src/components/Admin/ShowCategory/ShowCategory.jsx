import * as React from 'react';

export default function SelectSmall() {
    const [age, setAge] = React.useState('');

    const handleChange = (e) => {
        setAge(e.target.value);
    };

    return (
        <select class="form-select" aria-label="Default select example" onChange={(e)=>handleChange(e)}>
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
        </select>
    );
}
