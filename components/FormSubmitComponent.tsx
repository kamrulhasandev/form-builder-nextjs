"use client";
import React, { useCallback, useRef } from "react";
import { FormElement, FormElementInstance } from "./FormElements";
import { Button } from "./ui/button";
import { HiCursorClick } from "react-icons/hi";

function FormSubmitComponent({
  formUrl,
  content,
}: {
  content: FormElementInstance[];
  formUrl: string;
}) {
  const formValues = useRef<{ [key: string]: string }>({});

  const submitValue = useCallback((key: string, value: string) => {
    formValues.current[key] = value;
  }, []);

  const submitForm = () => {
    console.log("FormValues", formValues.current);
  };

  return (
    <div className="flex justify-center h-full w-full items-center p-8">
      <div className="max-w-[620px] flex flex-col gap-4 flex-grow bg-background w-full p-8 overflow-y-auto border shadow-xl shadow-blue-700 rounded">
        {content.map((element) => {
          const FormEle = FormElement[element.type].formComponent;
          return (
            <FormEle
              key={element.id}
              elementInstance={element}
              submitValue={submitValue}
            />
          );
        })}
        <Button
          onClick={() => {
            submitForm();
          }}
          className="mt-8"
        >
          <HiCursorClick className="mr-2" />
          Submit
        </Button>
      </div>
    </div>
  );
}

export default FormSubmitComponent;
