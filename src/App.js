import './App.css';
import {useFetch} from './hooks/useFetch.js'
import React from 'react'

const App = () => {
  let url=''
  let { response, error, isLoading } = useFetch(url);
  return (
    <div>
      
    </div>
  )
}

export default App


