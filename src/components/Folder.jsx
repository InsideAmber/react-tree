import React, { useState, useRef, useEffect } from 'react'

const Folder = (props) => {
  const [isOpen, setIsOpen] = useState(false)
  const inputRef = useRef(null)
  const [inputVisible, setInputVisible] = useState(false)
  const [text, setText] = useState(props.name)
  const direction = isOpen ? 'down' : 'right'
  const folderType = isOpen ? 'folder open' : 'folder'

  function onClickOutSide(e) {
    // Check if user is clicking outside of <input>
    if (inputRef.current && !inputRef.current.contains(e.target)) {
      setInputVisible(false) // Disable text input
    }
  }

  useEffect(() => {
    // Handle outside clicks on mounted state
    if (inputVisible) {
      document.addEventListener('mousedown', onClickOutSide)
    }

    // This is a necessary step to "dismount" unnecessary events when we destroy the component
    return () => {
      document.removeEventListener('mousedown', onClickOutSide)
    }
  })

  const handleClick = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div>
      <span onClick={handleClick} style={{ cursor: 'pointer' }}>
        <i className={`${folderType} icon blue`}></i>
        <i className={`caret icon ${direction}`}></i>
      </span>
      {inputVisible ? (
        <input
          ref={inputRef} // Set the Ref
          value={text} // Now input value uses local state
          onChange={(e) => {
            setText(e.target.value)
          }}
        />
      ) : (
        <span onClick={() => setInputVisible(true)}>{text}</span>
      )}

      <div style={{ marginLeft: '17px' }}>{isOpen ? props.children : null}</div>
    </div>
  )
}

export default Folder
