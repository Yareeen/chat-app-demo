import create from 'zustand';

// Zustand store'u oluşturuyoruz
const useStore = create((set) => ({
  username: '',
  setUsername: (name) => set({ username: name }), // Kullanıcı adını store'a atacak fonksiyon
}));

export { useStore };