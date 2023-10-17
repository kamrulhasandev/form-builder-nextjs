import React from "react";
import SidebarBtnElement from "./SidebarBtnElement";
import { FormElement } from "./FormElements";
import { Separator } from "./ui/separator";

function FormElementSidebar() {
  return (
    <div>
      <p className="text-sm text-foreground/70">Drag and drop elements</p>
      <Separator className="my-2" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 place-items-center">
        <p className="text-sm text-foreground col-span-1 md:col-span-2 my-2 place-self-start">Layout Elements</p>
        <SidebarBtnElement formElement={FormElement.TitleField} />
        <SidebarBtnElement formElement={FormElement.SubTitleField} />
        <SidebarBtnElement formElement={FormElement.ParagraphField} />
        <SidebarBtnElement formElement={FormElement.SeparatorField} />
        <SidebarBtnElement formElement={FormElement.SpacerField} />
        <p className="text-sm text-foreground col-span-1 md:col-span-2 my-2 place-self-start">Form Elements</p>
        <SidebarBtnElement formElement={FormElement.TextField} />
        <SidebarBtnElement formElement={FormElement.NumberField} />
        <SidebarBtnElement formElement={FormElement.TextAreaField} />
        <SidebarBtnElement formElement={FormElement.DateField} />
        <SidebarBtnElement formElement={FormElement.SelectField} />
        <SidebarBtnElement formElement={FormElement.CheckboxField} />
      </div>
    </div>
  );
}

export default FormElementSidebar;
