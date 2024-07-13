import { useState, useCallback, useEffect} from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [nums, setNums] = useState(false);
  const [specCharater, setSpecCharacter] = useState(false);
  const [Password, setPassword] = useState('');

  const generatorPassword = useCallback(()=>{
    let pass ='';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if (specCharater) str += '!@#$%^&*()_=+?><~';
    if(nums) str += '0123456789';

    for(let i=0; i<length; i++){
      const char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);

  },[length,specCharater, nums])

  useEffect(() =>{
    generatorPassword()
  },[length,specCharater,nums])

  return (
    <>
      <div className='header'>Password Generator</div>
      <div className='gen-inputs'>
        <input type='text'className='text-input' placeholder='Password'value={Password}></input>
        <button className='copy-button'
        onClick={() =>{
          window.navigator.clipboard.writeText(Password)
        }}>Copy</button>
      </div>

      <div className='gen-input-2'>
        
        <label htmlFor='Length'>Length: {length}</label>
        <input type='range' className='length'
        min={8}
        max={18}
        value={length}
        onChange={(e) => setLength(e.target.value)}
        ></input>

        <label>Special Characters</label>
        <input type='checkbox' className='spec-characters'
        defaultChecked = {specCharater}
        onChange={() =>{
          setSpecCharacter((prev) => !prev)
        }}
        ></input>

        <label>Numbers</label>
        <input type='checkbox' className='nums'
        defaultChecked = {nums}
        onChange={() =>{
          setNums((prev) => !prev)
        }}
        ></input>


      </div>
    </>
    
  )
}

export default App
