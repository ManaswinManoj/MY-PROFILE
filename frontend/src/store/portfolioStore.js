import { create } from 'zustand';

const usePortfolioStore = create((set) => ({
  // Selected profile from "Who's Watching?" screen
  selectedProfile: null,
  setSelectedProfile: (profile) => set({ selectedProfile: profile }),
  
  // My List - saved items
  myList: [],
  addToMyList: (item) => set((state) => ({
    myList: state.myList.some(i => i.id === item.id) 
      ? state.myList 
      : [...state.myList, item]
  })),
  removeFromMyList: (itemId) => set((state) => ({
    myList: state.myList.filter(i => i.id !== itemId)
  })),
  isInMyList: (itemId) => false, // This will be computed in components
  
  // Search state
  isSearchOpen: false,
  setSearchOpen: (isOpen) => set({ isSearchOpen: isOpen }),
  searchQuery: '',
  setSearchQuery: (query) => set({ searchQuery: query }),
  
  // Active nav item
  activeNav: 'home',
  setActiveNav: (navId) => set({ activeNav: navId }),
  
  // Modal state
  selectedProject: null,
  setSelectedProject: (project) => set({ selectedProject: project }),
  
  // Profile menu open state
  isProfileMenuOpen: false,
  setProfileMenuOpen: (isOpen) => set({ isProfileMenuOpen: isOpen }),
  
  // Loading state
  isLoading: false,
  setLoading: (isLoading) => set({ isLoading })
}));

export default usePortfolioStore;
