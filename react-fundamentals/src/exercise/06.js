// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const [username, setUsername] = React.useState('')
  const usernameInputRef = React.useRef()
  // 🐨 add a submit event handler here (`handleSubmit`).
  // 💰 Make sure to accept the `event` as an argument and call
  function handleSubmit(event) {
    // `event.preventDefault()` to prevent the default behavior of form submit
    // events (which refreshes the page).
    event.preventDefault()

    // 🐨 get the value from the username input (using whichever method
    // you prefer from the options mentioned in the instructions)
    // 💰 For example: event.target.elements[0].value
    // const userInput = event.target.usernameInput.value

    // 🐨 Call `onSubmitUsername` with the value of the input
    onSubmitUsername(username)
  }

  function handleChange(event) {
    const {value} = event.target
    setUsername(value.toLowerCase())
  }

  // 🐨 add the onSubmit handler to the <form> below

  return (
    <form onSubmit={handleSubmit} onChange={handleChange}>
      <div>
        {/* 🐨 make sure to associate the label to the input. */}
        {/* to do so, set the value of 'htmlFor' prop of the label to the id of input */}
        <label htmlFor="usernameInput">Username:</label>
        <input
          ref={usernameInputRef}
          id="usernameInput"
          type="text"
          value={username}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
