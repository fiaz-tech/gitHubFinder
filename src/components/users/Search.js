import React, { useState, useContext } from 'react';

import githubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';

const Search = () => {

  const GithubContext = useContext(githubContext);
  const alertContext = useContext(AlertContext);
  
  const [text, setText] = useState('');

  const onChange = (e) => setText( e.target.value)

  const onSubmit = (e) => {
    e.preventDefault();

    if(text === '') {
      alertContext.setAlert('Please enter something', 'light')
    } else {
      GithubContext.searchUsers(text);
      setText('');
    }

  }

    return (
      <div>

        <form onSubmit={onSubmit} className='form'>
          <input type='text' name='text' placeholder='Search Users.....' 
          value={text}  onChange={onChange}/>
          <input type="submit" className='btn btn-dark btn-block' />
        </form>

        {GithubContext.users.length > 0 && (
          <button className="btn btn-block btn-light"
          onClick={GithubContext.clearUsers} >Clear</button>
        )}

      </div>
    )
}

export default Search