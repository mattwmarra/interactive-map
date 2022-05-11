import { useState } from 'react';
import states from './states.json';

export const StateList = () => {
   const stateArray: string[] = Object.keys(states).sort();
   const [selectedState, setSelectedState] = useState<Element>();

   const findState = (stateID: string) => {
      const selectedStateNode = document.querySelector(`#${stateID}`);
      if (selectedStateNode != null) {
         setSelectedState(selectedStateNode);
      }
      selectedStateNode?.classList.add('active');
   };

   const deselectState = () => {
      selectedState?.classList.remove('active');
      const emptyElement = document.createElement('div');
      setSelectedState(emptyElement);
   };

   return (
      <section>
         <h2>Locations</h2>
         <ul className='state-list'>
            {stateArray.map((item: string, index: number) => {
               return (
                  <li key={index}>
                     <button onMouseDown={() => findState(item)} onMouseUp={deselectState}>
                        {states[item]}
                     </button>
                  </li>
               );
            })}
         </ul>
      </section>
   );
};
