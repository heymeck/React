import Hello from './hello'


function App() {
  let username="HeyMeck is the User.";
  return (
      <>
      <Hello/>
      {/* here username is an evaluated  expression or final expression */}
      <h2>Hello React with Vite || Hemant. {username}</h2>
      </>
  )
}

export default App
