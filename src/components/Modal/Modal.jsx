import React from 'react'
import ReactModal from 'react-modal'

// ReactModal.setAppElement('#__next')
function Modal({ children, ...restProps }) {
  return (
    <ReactModal
      {...restProps}
      preventScroll={true}
      style={{
        content: {
          borderRadius: '10px',
          padding: '1em 2em',
          top: '40%',
          height: 'fit-content',
        },
      }}
    >
      {children}
    </ReactModal>
  )
}

export default Modal
