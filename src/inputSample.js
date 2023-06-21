import React from 'react';
import { useState } from 'react';

function InputSample() {
    const [text,setText] = useState('');

    function onChange(e){
        setText(e.target.value);
    }
    function reset(){
        setText('');
    }
    return (
    <div>
        <br></br>
      <input onChange={onChange} value={text}/>
      <button onClick={reset}>초기화</button>
      <div>
        <b>값: {text}</b>
      </div>
    </div>
  );
}

export default InputSample;