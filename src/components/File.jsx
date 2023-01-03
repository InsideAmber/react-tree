import React, { useState, useRef, useEffect } from 'react'

const File = (props) => {
  const { name } = props
  const fileExtensions = name.split('.')[1]
  const inputRef = useRef(null)
  const [inputVisible, setInputVisible] = useState(false)
  const [text, setText] = useState(name)

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
    </div>
  )
}

export default File
