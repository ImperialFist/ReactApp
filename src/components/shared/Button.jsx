import React from 'react'
import PropTypes from 'prop-types'
import { motion } from "framer-motion"


// version - класс с типом кнопки
function Button({children, version, type, isDisabled}) {
  return (
    <motion.div
    whileTap={{ scale: 0.8 }}>
      <button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
        {children}
      </button>
    </motion.div>
  )
}

Button.defaultProps = {
    version: 'primary',
    type: 'button',
    isDisabled: false,
}

//проверка типов текста
Button.propTypes={
    children: PropTypes.node.isRequired,
    version: PropTypes.string,
    type: PropTypes.string,
    isDisabled: PropTypes.bool,
}



export default Button
