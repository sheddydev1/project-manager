"use client"
import { useEffect } from 'react';
import { DragDropContext, Droppable } from '@hello-pangea/dnd';
import { getTodosGroupByColumn } from '@/lib/getTodosGroupByColumn';

function Board() {
  useEffect(() => {
   getTodosGroupByColumn();
  }, [])
  

   
  return (
  
    <div>Hello jjsj</div>
        // <DragDropContext>
        //     <Droppable droppableId='board' direction='horizontal' type='column'>
              
        //       {(provided) => <div></div>}

        //     </Droppable>
        // </DragDropContext>
   
  )
}

export default Board