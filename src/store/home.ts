import { getCards } from "@/services/home";
import { create } from "zustand";

export interface Card {
  id: string;
  name: string;
  owner: { login: string };
  stargazers: { totalCount: number };
  description: string;
}
export interface State {
  cards: Card[];
  favorites: Card[];
  searchTerm: string;
  fetchCards: (x: string) => void;
  setFavorite: (x: Card) => void;
  reorderFavorites: (x: string, y: number) => void;
  removeFavorite: (x: string) => void;
  setSearchTerm: (x: string) => void;
}

const useHomeStore = create<State>((set) => ({
  cards: [],
  favorites: [],
  searchTerm: "",
  fetchCards: async (queryString: string) => {
    try {
      const cards = await getCards(queryString);
      set({ cards });
    } catch (error) {
      set({ cards: [] });
    }
  },
  setFavorite: (card) =>
    set((state) => ({ favorites: [...state.favorites, card] })),
  reorderFavorites: (draggedCardId, targetIndex) =>
    set((state) => {
      const { favorites } = state;

      const draggedCard = favorites.find((card) => card.id === draggedCardId);
      if (!draggedCard) return { favorites };

      const updatedFavorites = [...favorites];
      updatedFavorites.splice(
        favorites.findIndex((card) => card.id === draggedCardId),
        1
      );

      updatedFavorites.splice(targetIndex, 0, draggedCard);

      return { favorites: updatedFavorites };
    }),
  removeFavorite: (id) =>
    set((state) => {
      console.log(id);
      console.log(state.favorites);
      return {
        favorites: state.favorites.filter((favorite) => favorite.id !== id),
      };
    }),
  setSearchTerm: (searchTerm: string) => set({ searchTerm }),
}));

export default useHomeStore;
