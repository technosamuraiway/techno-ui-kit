const LANG_KEY = 'lang'

export const languageLocalStorage = {
  /* проверка <typeof window !== 'undefined'> делает код безопасным для использования с SSR */

  get: (): null | string => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem(LANG_KEY)
    }

    return null
  },

  getInitialValue: (defaultValue: string): string => {
    const valueFromLocalStorage = languageLocalStorage.get()

    if (valueFromLocalStorage) {
      return valueFromLocalStorage
    }

    languageLocalStorage.set(defaultValue)

    return defaultValue
  },

  set: (value: string): void => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(LANG_KEY, value)
    }
  },
}
