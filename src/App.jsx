import { Navbar, Welcome, Dock } from '#components/import.js';
import gsap from 'gsap';
import { Finder, ImageWindow, Resume, Safari, TerminalWindow, TextWindow } from "#windows/import";

import { Draggable } from 'gsap/Draggable';
gsap.registerPlugin(Draggable);


const App = () => {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />
      <TerminalWindow />
      <Safari />
      <Resume />
      <Finder />
      <TextWindow />
      <ImageWindow />
    </main>
  )
}

export default App