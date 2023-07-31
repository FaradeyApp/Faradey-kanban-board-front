import { CreateBoard } from '@/enitities/admin';
import { BoardsManagementStore } from '@/stores/admin';
import { createBoard as createBoardApi } from '@/shared/api/admin';

export function createBoard(boardManagementStore: BoardsManagementStore) {
  const openCreateModal = () => {
    boardManagementStore.openCreateBoardModal();
  };

  const createNewBoard = async (data: CreateBoard) => {
    await createBoardApi(data);
  };

  const closeCreateModal = () => {
    boardManagementStore.closeCreateBoardModal();
  };

  return {
    openCreateModal,
    createNewBoard,
    closeCreateModal,
  };
}
