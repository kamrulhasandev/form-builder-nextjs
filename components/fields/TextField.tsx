'use client'

import { MdTextFields } from "react-icons/md";
import { ElementsType, FormElement } from "../FormElements"

const type: ElementsType = "TextField";
export const TextFieldFormElement: FormElement = {
    type,
    construct: (id: string) =>({
        id, 
        type, 
        extraAttributes: {
            label: 'Text field',
            helperText: 'Helper Text',
            required: false,
            placeHolder: 'Value here'
        }
    }),
    designerBtnElement: {
        icon: MdTextFields,
        label: 'Text field'
    },
    designerComponent: () => <div>Designer component</div>,
    formComponent: () => <div>Form component</div>,
    propertiesComponent: () => <div>Properties component</div>
}