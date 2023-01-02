import React, { useState } from 'react'

const App = () => {
  return (
    <div>
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
    </div>
  )
}

const Folder = (props) => {
  const [isOpen, setIsOpen] = useState(false)
  const direction = isOpen ? 'down' : 'right'

  const handleClick = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div>
      <span onClick={handleClick} style={{ cursor: 'pointer' }}>
        <i className='folder icon blue'></i>
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
  }
  return (
    <div>
      <i className={`${fileIcons[fileExtensions]} icon`}></i>
      {name}
    </div>
  )
}

export default App
