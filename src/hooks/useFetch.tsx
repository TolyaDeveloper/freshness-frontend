import { useState, useEffect, useCallback } from 'react'
import { AxiosError, AxiosRequestConfig } from 'axios'
import { $api } from '~/api'

const useFetch = <T,>(url: string) => {
  const [response, setResponse] = useState<T | undefined>(undefined)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<{
    message: string
    statusCode: number
  } | null>(null)
  const [options, setOptions] = useState<AxiosRequestConfig>({})

  const doFetch = useCallback((options: AxiosRequestConfig = {}) => {
    setOptions(options)
    setIsLoading(true)
  }, [])

  useEffect(() => {
    if (!isLoading) {
      return
    }

    const fetchData = async () => {
      try {
        const res = await $api(url, options)

        setResponse(res.data)
      } catch (err) {
        if (err instanceof AxiosError) {
          setError(err.response?.data)
        }
      }

      setIsLoading(false)
    }

    fetchData()
  }, [isLoading, options, url])

  return { response, error, isLoading, doFetch }
}

export { useFetch }
