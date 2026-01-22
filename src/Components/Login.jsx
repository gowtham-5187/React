import React, { useState } from 'react'

export default function Login() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [address, setAddress] = useState('')
  const [mobile, setMobile] = useState()
  function handleRegister(e) {
    e.preventDefault()
    // console.log(e)
    let newUser = { name, email, password, address, mobile }
    console.log(newUser)
    setName("")
    setEmail("")
    setPassword("")
    setAddress("")
    setMobile("")

  }
  return (
    <div className='container mt-4'>
      <div className="row">
        <form onSubmit={handleRegister} className='col-12 col-md-6'>
          <h2>Login</h2>
         
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" name='password' value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div>
          <button type="submit" className="btn btn-primary">Login</button>
          </div>
        </form>
      </div>



    </div>
  )
}