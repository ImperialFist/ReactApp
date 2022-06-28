import React from 'react'
import PropTypes from 'prop-types'



function Header({text, bgColor, textColor}) {
    const headerStyles = {
        backgroundColor: bgColor,
        color: textColor,
    }

  return (
    <header style={headerStyles}>
      <div className="container">
        <h1 className='header__title'>{text}</h1>
      </div>
    </header>
  )
}

//текст по умолчанию
Header.defaultProps = {
    text: 'Интерфейс отзывов',
    bgColor: 'rgba(0,0,0,0.4)',
    textColor: 'rgb(255,255,255)',
}
//проверка типов текста
Header.propTypes={
    text: PropTypes.string,
    bgColor: PropTypes.string,
    textColor: PropTypes.string,
}

export default Header
