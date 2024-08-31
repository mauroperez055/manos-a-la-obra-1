import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="principal-container" style={{ fontFamily: 'arial' }}>
      <div className="encabezado">
        <h1 style={{ fontSize: '20px', display:'flex', justifyContent:'center' }}>LISTA DE TAREAS DE MAURO</h1>
      </div>
      <div className="agregar-tarea">
        <input type="text" style={{ marginRight: '10px', height: '40 px', padding: '3px' }} />
        <button style={{ height: '40 px', padding: '3px 10px', borderRadius: '0' }}>ADD</button>
      </div>

      <div className="task-list" style={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
        <ul className='task-list-items' style={{ listStyleType: 'none', display:'flex', flexDirection:'column', padding:'0' }}>

            <div className="task" style={{ borderStyle: 'solid', borderWidth: 'thin', padding: '5px', margin: '5px', width:'30vh' }}>
              <li style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
                <div>
                  <input type="checkbox" style={{ marginRight: '10px' }} />
                  <span>Task N</span>
                </div>
                <img src='src/assets/img/delete.png' style={{ width: '20px' }}></img>
              </li>
            </div>

            <div className="task" style={{ borderStyle: 'solid', borderWidth: 'thin', padding: '5px', margin: '5px', width:'30vh' }}>
              <li style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
                <div>
                  <input type="checkbox" style={{ marginRight: '10px' }} />
                  <span>Task N-1</span>
                </div>
                <img src='src/assets/img/delete.png' style={{ width: '20px' }}></img>
              </li>
            </div>

            <div className="task" style={{ borderStyle: 'solid', borderWidth: 'thin', padding: '5px', margin: '5px', width:'30vh' }}>
              <li style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
                <div>
                  <input type="checkbox" style={{ marginRight: '10px' }} />
                  <span><s>Completed Task N-2</s></span>
                </div>
                <img src='src/assets/img/delete.png' style={{ width: '20px' }}></img>
              </li>
            </div>

            <div className="task" style={{ borderStyle: 'solid', borderWidth: 'thin', padding: '5px', margin: '5px', width:'30vh' }}>
              <li style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
                <div>
                  <input type="checkbox" style={{ marginRight: '10px' }} />
                  <span>Task K</span>
                </div>
                <img src='src/assets/img/delete.png' style={{ width: '20px' }}></img>
              </li>
            </div>

            <div className="task" style={{ borderStyle: 'solid', borderWidth: 'thin', padding: '5px', margin: '5px', width:'30vh' }}>
              <li style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
                <div>
                  <input type="checkbox" style={{ marginRight: '10px' }} />
                  <span>Task 2</span>
                </div>
                <img src='src/assets/img/delete.png' style={{ width: '20px' }}></img>
              </li>
            </div>

            <div className="task" style={{ borderStyle: 'solid', borderWidth: 'thin', padding: '5px', margin: '5px', width:'30vh' }}>
              <li style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
                <div>
                  <input type="checkbox" style={{ marginRight: '10px' }} />
                  <span><s>Completed Task 1</s></span>
                </div>
                <img src='src/assets/img/delete.png' style={{ width: '20px' }}></img>
              </li>
            </div>
        </ul>
      </div>
    </div>
  )
}

export default App
