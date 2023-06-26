# Dropdown
A simple dropdown library of React components created for Openclassroom project 14 of "Application developer - JavaScript React".

## Installation

Run the following command:`npm i custom_dropdown_comp`

## Basic Dropdown

### textLabel

> `string`

Pass the label text.

### name

> `string`

Pass the name that will be used in htmlFor on label element and in id & name on select.

### data

> `arrayOf(object)`

Pass an array of items to initialize the dropdown. The array contains name (required) and value (optional).

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
```

## Usage

> [CodeSandbox - Try it out in the browser](https://codesandbox.io/s/custom-dropdown-comp-n6cgxt)


```jsx
import * as React from 'react'
import {render} from 'react-dom'
import Dropdown from 'custom_dropdown_comp'

const states = [
    {
        name: "Alabama",
        value: "AL"
    },
    {
        name: "Alaska",
        value: "AK"
    },
    {
        name: "American Samoa",
        value: "AS"
    },
    {
        name: "Arizona",
        value: "AZ"
    },
    {
        name: "Arkansas",
        value: "AR"
    },
    {
        name: "California",
        value: "CA"
    },
    {
        name: "Colorado",
        value: "CO"
    },
    {
        name: "Connecticut",
        value: "CT"
    }
]

render(
<Dropdown textLabel="States" name="states" data={states} />,
  document.getElementById('root'),
)
```