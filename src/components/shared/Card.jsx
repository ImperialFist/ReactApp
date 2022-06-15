import React from 'react'
import PropTypes from 'prop-types'

// Card - styled component - просто для добавления дублирующегося стиля

function Card({children, reverse}) {
  return (
    //это КЛАСС состояний - conditional class
    // <div className={`card ${reverse && 'reverse'}`}>
    //   {children}
    // </div>

    //Это СТИЛЬ состояний - conditional STYLE
    <div className="card" style={{backgroundColor: reverse ? 'rgba(0,0,0,0.4)' : '#fff', color: reverse ? '#fff' : '#000',}}>
        {children}
    </div>

  )
}

//текст по умолчанию
Card.defaultProps={
    reverse: true,
}
//проверка типов текста
Card.propTypes ={
    children: PropTypes.node.isRequired,
    reverse: PropTypes.bool,
}

export default Card
