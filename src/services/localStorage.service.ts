import { FRESHNESS } from '~/constants/common'

class LocalStorageService {
  static get(key: string) {
    if (typeof window !== 'undefined') {
      const localStorageData = localStorage.getItem(FRESHNESS)

      if (!localStorageData) {
        return null
      }

      return JSON.parse(localStorageData)[key]
    }
  }

  static set(key: string, value: unknown) {
    if (typeof window !== 'undefined') {
      let localStorageData = JSON.parse(
        localStorage.getItem(FRESHNESS) as string
      )

      if (!localStorageData) {
        localStorageData = {}
      }

      localStorageData[key] = value
      localStorage.setItem(FRESHNESS, JSON.stringify(localStorageData))
    }
  }

  static remove(key: string) {
    if (typeof window !== 'undefined') {
      const localStorageData = JSON.parse(
        localStorage.getItem(FRESHNESS) as string
      )

      if (localStorageData) {
        delete localStorageData[key]

        localStorage.setItem(FRESHNESS, JSON.stringify(localStorageData))
      }
    }
  }
}

export { LocalStorageService }
