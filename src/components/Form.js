import React, { useState } from 'react';

function Form(props) {
  // useState is always change value / 状態が変化する関数
  // name is value / it's a '' from useState('') or [] if useState([]), setName is Function to change state / 状態を変更するための関数
  const [name, setName] = useState('');

  // near the top of the `Form` component
  function handleChange(e) {
    // e is event, e.target.value is <input id="new-todo-input" value={name}
    setName(e.target.value);
  }
  function handleSubmit(e) {
    console.log('form "add" submit OK');
    //  e.preventDefault() e is event, preventDefault() is to stop rerendering
    e.preventDefault();
    props.addTask(name);
    setName('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg">
          What needs to be done?
        </label>
      </h2>
      <input
        type="text"
        id="new-todo-input"
        className="input input__lg"
        name="text"
        autoComplete="off"
        value={name}
        onChange={handleChange}
      />
      <button type="submit" className="btn btn__primary btn__lg">
        Add
      </button>
    </form>
  );
}

export default Form;
