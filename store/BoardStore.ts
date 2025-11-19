import { getTodosGroupByColumn } from '@/lib/getTodosGroupByColumn';
import { create } from 'zustand'
interface BoardState {
  board: Board;
  getBoard: () => void
}

const useBoardStore = create<BoardState>((set) =>({
   board: {
    columns: new Map<TypedColumn, Column>(),
  },
  getBoard: async () => {
    const board = await getTodosGroupByColumn();
    set({board})

  }
}))