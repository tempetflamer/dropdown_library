# Dropdown
A simple dropdown library of React components created for Openclassroom project 14 of "Application developer - JavaScript React".

## Installation

Run the following command:`npm i dropdown`

## Basic Dropdown

### textLabel

> `string`

Pass the label text.

### name

> `string`

Pass the name that will be used in htmlFor on label element and in id & name on select.

### data

> `arrayOf(object)`

Pass an array of items to initialize the dropdown.

### Component

```jsx
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
```

## Usage

```jsx
import * as React from 'react'
import {render} from 'react-dom'
import Dropdown from 'dropdown'

const departments = [
    {
        name: 'Sales'
    },
    {
        name: 'Marketing'
    },
    {
        name: 'Engineering'
    },
    {
        name: 'Human Resources'
    },
    {
        name: 'Legal'
    }
]

render(
<Dropdown textLabel="Department" name="department" data={departments} />,
  document.getElementById('root'),
)
```