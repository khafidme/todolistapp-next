import React from 'react'

const Header = ({ headerTitle }) => {
  return (
    <div>
      <h4 className="text-lg font-bold">{headerTitle}</h4>
    </div>
  )
}

export default Header