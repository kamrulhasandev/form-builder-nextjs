import { TextFieldFormElement } from "./fields/TextField";

export type ElementsType = "TextField";

export type FormElement = {
     type: ElementsType
     construct: (id: string) => FormElementInstance

    designerBtnElement: {
        icon: React.ElementType;
        label: string;
    }

     designerComponent: React.FC;
     formComponent: React.FC;
     propertiesComponent: React.FC;
}

export type FormElementInstance = {
    id: string;
    type: ElementsType;
    extraAttributes?: Record<string, any>
}

type FormElementType = {
    [key in ElementsType] : FormElement
}
export const FormElement : FormElementType = {
    TextField: TextFieldFormElement
};

