

import { ExerciseList } from "./components/exerciseList";
import { MotivationalMessage } from "./components/MotivacionalMessage" 
import { Welcome } from "./components/welcome"        

function App() {

  return (
    <>
    <Welcome/>
      <ExerciseList />
      
      <main>

       
       
        <MotivationalMessage message="Trate o corpo rigorosamente para que ele não seja desobediente a mente" author="~Sêneca" />
        <MotivationalMessage message="Nunca e tarde para ser quem você poderia ter sido." author="~EU" />

      </main>
       </>

  );
}

export default App
