import React from 'react'
import SidebarBtnElement from './SidebarBtnElement'
import { FormElement } from './FormElements'

function FormElementSidebar() {
  return (
    <div>
        Elements
      <SidebarBtnElement formElement={FormElement.TextField} />
    </div>
  )
}

export default FormElementSidebar