"use client";
import React from "react";
import { FormElement, FormElementInstance } from "./FormElements";

function FormSubmitComponent({
  formUrl,
  content,
}: {
  content: FormElementInstance[];
  formUrl: string;
}) {
  return <div className="flex justify-center h-full w-full items-center p-8">
    <div className="max-w-[620px] flex flex-col gap-4 flex-grow bg-background w-full p-8 overflow-y-auto border shadow-xl shadow-blue-700 rounded">
      {
        content.map((element) => {
          const FormEle = FormElement[element.type].formComponent;
          return <FormEle key={element.id} elementInstance={element}/>
        })
      }
    </div>
  </div>
}

export default FormSubmitComponent;
