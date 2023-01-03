import React from 'react'
import File from './components/File'
import Folder from './components/Folder'

const App = () => {
  return (
    <div style={{ marginTop: '10px', marginLeft: '10px' }}>
      <Folder name='node_modules'>
        <Folder name='.bin' />
        <Folder name='@babel' />
        <Folder name='@jest' />
        <Folder name='@types' />
      </Folder>
      <Folder name='public'>
        <File name='index.html' />
      </Folder>
      <Folder name='src'>
        <Folder name='components'>
          <Folder name='Inputs'>
            <File name='TextField.jsx' />
            <File name='index.css' />
            <File name='Dropdown.jsx' />
          </Folder>
          <File name='Form.jsx' />
          <File name='Background_Video.mp4' />
        </Folder>
        <Folder name='Pages'>
          <File name='Home.jsx' />
        </Folder>
        <File name='App.jsx' />
        <File name='index.css' />
        <File name='index.js' />
      </Folder>
      <File name='.gitignore' />
      <File name='package.json' />
      <File name='Readme.md' />
    </div>
  )
}

export default App
