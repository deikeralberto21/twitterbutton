import React from 'react'
import ReactDOM from 'react-dom/client'
import {CardInfo} from './App.jsx'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <>
    <CardInfo username="deikeralberto21" following={false} fullName="Deiker"/>
    <CardInfo username="elisandrotrespiernas" following={true} fullName="Elisandro"/>
    <CardInfo username="nate" following={false} fullName="juan"/>
  </>
)