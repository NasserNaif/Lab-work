import axios from 'axios'
import React, { useState } from 'react'


function Create() {
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: '',
        password: ""
    })

    const postFunc = () => {
        axios.post("https://6362424b7521369cd068e001.mockapi.io/store", {
            user
        }).then(res => {
            console.log(res)
        })
    }

    
    return (
        <div className='createDiv'>
            <input placeholder='first name' type={"text"} onChange={(e) => setUser((prev) => (
                {
                    ...prev,
                    firstName: e.target.value
                }
            ))} />
            <input placeholder='last name' type={"text"} onChange={(e) => setUser((prev) => (
                {
                    ...prev,
                    lastName: e.target.value
                }
            ))} />
            <input placeholder='email' type={"email"} onChange={(e) => setUser((prev) => (
                {
                    ...prev,
                    email: e.target.value
                }
            ))} /><input placeholder='password' type={"password"} onChange={(e) => setUser((prev) => (
                {
                    ...prev,
                    password: e.target.value
                }
            ))} />
            <br />
            <button onClick={postFunc}>Post</button>
        </div>
    )
}

export default Create