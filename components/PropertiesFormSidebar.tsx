import React from "react";
import useDesigner from "./hooks/useDesigner";
import { FormElement } from "./FormElements";

function PropertiesFormSidebar() {
  const { selectedElement } = useDesigner();
  if (!selectedElement) return null;
  const PropertiesForm = FormElement[selectedElement.type].formComponent;
  return <PropertiesForm />;
}

export default PropertiesFormSidebar;
