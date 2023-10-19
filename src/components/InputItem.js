import React from 'react'

function InputItem({labelFor, labelName, placeholder}) {
  return (
    <div className="input-item">
      <label htmlFor={labelFor}>
        <h3>{labelName}</h3>
      </label>
      <input type="text" placeholder={placeholder} />
    </div>
  );
}

export default InputItem