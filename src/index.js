import React from 'react'
import ReactDOM from 'react-dom/client'
import Dropdown from './lib/components/Dropdown'
import { states } from './data'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <div style={{ marginBottom: '0.5rem', fontWeight: 'bold' }}> An example: </div>
        <Dropdown textLabel="State" name="state" data={states} />
    </React.StrictMode>
)