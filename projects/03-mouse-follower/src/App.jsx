import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [enabled, setEnabled] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    console.log('effect', { enabled });
    
    // TRACKING DEL MOUSE
    const handleMove = (event) => {
      const { clientX, clientY } = event;
      console.log('handleMove', { clientX, clientY});
      setPosition({ x: clientX, y: clientY });
    }
    // Only track if enabled == true
    if (enabled) {
      window.addEventListener('pointermove', handleMove);
    }
    
    // cleanup
    return () => {
      window.removeEventListener('pointermove', handleMove)
    }
  }, [enabled])

  return (
    <main>
      <div style={{
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        border: '1px solid #fff',
        borderRadius: '50%',
        opacity: '0.8',
        pointerEvents: 'none',
        left: -25,
        top: -25,
        width: 50,
        height: 50,
      transform: `translate(${position.x}px, ${position.y}px)`
      }} 
      />
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? 'Desactivar' : 'Activar'} seguir puntero
      </button>
    </main>
 
  )
}

export default App
