import React from 'react'
import { useState } from 'react'
import { useRef } from 'react'

const CustomSubmissionForm = () => {
    const inputRef1 = useRef(null)
    const inputRef2 = useRef(null)
    const [err, setErr] =useState("")

    function handleSubmit(e){
        e.preventDefault()
        const formData ={
            feild1 : inputRef1.current.value,
            feild2 : inputRef2.current.value
        }

        if(formData.feild1 == ""){
            setErr("feild1 cannot be empty")
            return;

        }

    }
    return (
        <div>
            <h2>CustomSubmissionForm</h2>
            <form onSubmit={handleSubmit}>
                <input ref={inputRef1} type="text" />
                <input ref={inputRef2} type="text" />
                {err && <p>{err}</p>}
                <button type='submit'>Submit</button>

            </form>
        </div>
    )
}

export default CustomSubmissionForm