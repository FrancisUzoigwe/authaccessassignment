// import { useState } from "react";
// import InputEmoji from "react-input-emoji";
// import { useAutoAnimate } from "@formkit/auto-animate/react";


// const Createscreen = () => {

//   const [items, setItems] = useState([0, 1, 2]);
//   const [parent, enableAnimations] = useAutoAnimate();
//   const add = () => setItems([...items, items.length]);

//   const [text, setText] = useState("");
//   function handleOnEnter(text: any) {
//     console.log("enter", text);
//   }

//   return (
//     <div className="w-full h-[100vh] flex items-center justify-center" ref={parent}>
//      <div>
//        <InputEmoji
//         value={text}
//         onChange={setText}
//         cleanOnEnter
//         onEnter={handleOnEnter}
//         placeholder="Type a message"
//       />
//       <div ref={parent}>
//     {items.map(
//       item => (<div key={item} className="w-[200px] h-[150px] rounded-[10px] bg-purple-500"></div>)
//     )}
//   </div>
//   <button onClick={add}>Add number</button>
//   <button onClick={() => enableAnimations(false)}>Disable</button>
//      </div>
//     </div>
//   );
// };

// export default Createscreen;

// import React from 'react'

const Createscreen = () => {
  return (
    <div>Createscreen</div>
  )
}

export default Createscreen
