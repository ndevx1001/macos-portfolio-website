import { Navbar, Welcome, Dock } from '#components/import.js'
import gsap from 'gsap';
import { Resume, Safari, TerminalWindow } from "#windows/import"

import { Draggable } from 'gsap/Draggable';
gsap.registerPlugin(Draggable)


const App = () => {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />
      <TerminalWindow />
      <Safari />
      <Resume />
    </main>
  )
}

export default App