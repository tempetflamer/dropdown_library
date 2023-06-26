import PropTypes from 'prop-types'
import React from 'react'
import './Dropdown.scss'

export default function Dropdown({ textLabel, name, data }) {
  if (!data[0]) {
    return ''
  }
  return (
    <div className="select-wrapper">
      <label htmlFor={name}>{textLabel}</label>
      <select className={name} id={name} name={name}>
        {data.map((val) => (
              <option value={data[0].value ? val.value : val.name} key={data[0].value ? val.value : val.name}>
                {val.name}
              </option>
            ))
        }
      </select>
    </div>
  )
}

Dropdown.propTypes = {
  textLabel: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])).isRequired,
}
