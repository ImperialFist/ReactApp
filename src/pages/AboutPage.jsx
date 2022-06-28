import React from 'react'
import Card from '../components/shared/Card'
import { Link } from "react-router-dom";

function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h1>О проекте</h1>
        <p>Программа выполена на React для сбора отзывов</p>
        <p>Version: 1.0.0.</p>
        <p>
            <Link to='/'>К домашней странице</Link>
        </p>
      </div>
    </Card>

  )
}

export default AboutPage
