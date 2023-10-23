import React from 'react'
import * as Icons from './Icons'


function Experience({showInput, setShowInput}) {
  return (
    <>
      <div className="interface items-center justify-center">
        <button className="text-base text-white bg-cyan-600 flex-initial hover:bg-cyan-500 px-5 interface-button">
          <Icons.Add size={"lg"} />
          Experience
        </button>
      </div>
    </>
  );
}

export default Experience