import PropTypes from 'prop-types'
import React from 'react'
import './Dropdown.css'

export default function Dropdown({ textLabel, name, data }) {
  if (!data[0]) {
    return ''
  }
  return (
    <div className="select-wrapper">
      <label htmlFor={name}>{textLabel}</label>
      <select className={name} id={name} name={name}>
        {data[0].value
          ? data.map((val) => (
              <option value={val.value} key={val.value}>
                {val.name}
              </option>
            ))
          : data.map((val) => (
              <option value={val.name} key={val.name}>
                {val.name}
              </option>
            ))}
      </select>
    </div>
  )
}

Dropdown.propTypes = {
  textLabel: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])).isRequired,
}
