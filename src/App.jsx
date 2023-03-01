import Footer from './Footer';
function App(){
  const name = "Raul"
  return (
    <div>
      <h3>{name}'s hobbies list</h3>
      <ul>
        <li>Play video games</li>
        <li>Reading</li>
        <li>Play guitar</li>
      </ul>
      <hr />
      <Footer />    
      </div>
  )

}

export default App
