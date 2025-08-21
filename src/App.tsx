

import { MotivationalMessage } from "./components/MotivacionalMessage" 
import { Welcome } from "./components/welcome"        

function App() {

  return (
    <>
    <Welcome/>
      
      <main>
       
        <MotivationalMessage message="Trate o corpo rigorosamente para que ele não seja desobediente à mente" author="~Sêneca" />
        <MotivationalMessage message="Nunca é tarde para ser quem você poderia ter sido." author="~EU" />

      </main>
       </>

  );
}

export default App
