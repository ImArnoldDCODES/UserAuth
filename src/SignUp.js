import React, { useRef, useState, useEffect } from 'react'
import { AiOutlineClose, AiOutlineCheck } from 'react-icons/ai'

export default function SignUp() {

  const USER_REGEX = /^[a-zA-z][a-zA-Z0-9-_]{3,23}$/;
  const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}/;

  const userRef = useRef()
  const errRef = useRef()

  const [user, setUser] = useState('')
  const [validName, setValidName] = useState(false);

  const [pwd, setPwd] = useState('')
  const [validPwd, setValidPwd] = useState(false);


  useEffect(() => {
    userRef.current.focus()
  }, [])

  useEffect(() => {
    setValidName(USER_REGEX.test(user))
  }, [user])

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd))
  }, [pwd])


  return (
    <div className='items-center mt-20 mx-20'>
      <h1 className='py-3 text-xl'>Sign In </h1>

      <section className='bg-teal-500 h-[60vh]'>
        <form className='items-center flex flex-col'>
          <label className={'text-xl py-2 text-white flex items-center'} htmlFor='username'>
            Username

            <span className={validName ? 'block' : 'hidden'}>
              <AiOutlineCheck />
            </span>


            <span className={validName || !user ? 'hidden' : 'block'}>
              <AiOutlineClose />
            </span>
          </label>
          <input
            type="Text"
            id="username"
            ref={userRef}
            autoComplete="off"
            onChange={(e) => setUser(e.target.value)}
            aria-invalid={validName ? "false" : "true"}
            aria-describedby="aria-note"
          />

          <p id="aria-note" className={user && !validName ? 'text-center pt-2 block' : 'hidden'}>
            4 to 24 characters.<br />
            Must begin with a letter.<br />
            Letters, numbers, underscores, hyphens allowed.
          </p>

          <label className={'text-xl py-2 text-white flex items-center'} htmlFor='password'>
            Paswword

            <span className={validPwd ? 'block' : 'hidden'}>
              <AiOutlineCheck />
            </span>


            <span className={validPwd || !pwd ? 'hidden' : 'block'}>
              <AiOutlineClose />
            </span>
          </label>
          <input
            type="password"
            id="password"
            ref={userRef}
            autoComplete="off"
            required
            onChange={(e) => setPwd(e.target.value)}
            aria-invalid={validPwd ? "false" : "true"}
            aria-describedby="aria-note-pass"
          />

          <p id="aria-note-pass" className={pwd && !validPwd ? 'text-center pt-2 block' : 'hidden'}>
            8 to 24 characters.<br />
            Must include uppercase and lowercase letters, a number and a special character.<br />
            Allowed special characters:
            <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
          </p>
        </form>
      </section>
    </div>
  )
}
