import React from 'react'

import Form from './Form';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ResumePreview from './ResumePreview';

const App = () => {
  return (
    <div>

      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Form/>}/>
        <Route path='/preview' element={<ResumePreview/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App;
