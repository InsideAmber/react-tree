import React, { useState } from 'react'

const App = () => {
  return (
    <div>
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

const Folder = (props) => {
  const [isOpen, setIsOpen] = useState(false)
  const direction = isOpen ? 'down' : 'right'
  const folderType = isOpen ? 'folder open' : 'folder'

  const handleClick = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div>
      <span onClick={handleClick} style={{ cursor: 'pointer' }}>
        <i className={`${folderType} icon blue`}></i>
        <i className={`caret icon ${direction}`}></i>
      </span>
      {props.name}

      <div style={{ marginLeft: '17px' }}>{isOpen ? props.children : null}</div>
    </div>
  )
}

const File = (props) => {
  const { name } = props
  const fileExtensions = name.split('.')[1]
  const fileIcons = {
    mp4: 'headphones',
    jpeg: 'file image',
    png: 'file image outline',
    jsx: 'react',
    css: 'css3',
    gitignore: 'github',
    json: 'js',
    js: 'js',
    md: 'info circle',
    html: 'html5',
  }
  return (
    <div>
      <i className={`${fileIcons[fileExtensions]} icon`}></i>
      {name}
    </div>
  )
}

export default App
