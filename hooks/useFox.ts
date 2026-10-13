import { create } from 'zustand'

interface FoxStates {
    toggleHamb: boolean,
    setToggleHamb: () => void
}

export const useFox = create<FoxStates>((set) => ({
    toggleHamb: false,
    setToggleHamb: () => set((state) => ({ toggleHamb: !state.toggleHamb })),
}))

