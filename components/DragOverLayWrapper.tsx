import { Active, DragOverlay, useDndMonitor } from '@dnd-kit/core'
import React, { useState } from 'react'
import { SidebarBtnElementDragOverlay } from './SidebarBtnElement'
import { ElementsType, FormElement } from './FormElements'

function DragOverLayWrapper() {
    const [draggedItem, setDraggedItem] = useState<Active | null>(null);
  
    useDndMonitor({
      onDragStart: (event) => {
        setDraggedItem(event.active);
      },
      onDragCancel: () => {
        setDraggedItem(null);
      },
      onDragEnd: () => {
        setDraggedItem(null);
      },
    });
  
    if (!draggedItem) return null;
  
    let node = <div>No drag overlay</div>;
    const isSidebarBtnElement = draggedItem.data?.current?.isDesignerBtnElement;
  
    if (isSidebarBtnElement) {
      const type = draggedItem.data?.current?.type as ElementsType;
      node = <SidebarBtnElementDragOverlay formElement={FormElement[type]} />;
    }

  return <DragOverlay>{node}</DragOverlay>
}

export default DragOverLayWrapper