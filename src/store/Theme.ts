import create from 'zustand'
import { persist } from "zustand/middleware"

const getInitialColorMode = () => {
    const persistedColorPreference = window.localStorage.getItem('color-mode');
    const hasPersistedPreference = typeof persistedColorPreference === 'string';
    // If the user has explicitly chosen light or dark,
    // let's use it. Otherwise, this value will be null.
    if (hasPersistedPreference) {
      return persistedColorPreference;
    }
    // If they haven't been explicit, let's check the media
    // query
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    
    const hasMediaQueryPreference = typeof mql.matches === 'boolean';
    if (hasMediaQueryPreference) {
      return mql.matches ? 'dark' : 'light';
    }
    // If they are using a browser/OS that doesn't support
    // color themes, let's default to 'light'.
    return 'light';
  }

export const useTheme = create(persist(
  (set:any, get) => ({
    theme: 'light', //get this using getInitialColorMode function return
    ChangeTheme: () => set(state => ({ theme: state.theme == 'dark' ? 'light' : 'dark'}))
  }),
  {
    name: "color-mode", // unique name
  }
))