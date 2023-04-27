import { useState, useEffect, useRef } from 'react'

export default function useAxios(configRequest) {
    const { axiosInstance, method, url, othersConfig = {} } = configRequest

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const effectRun = useRef(false)

    useEffect(() => {
        const controller = new AbortController()

        const fetchData = async () => {
            try {
                const res = await axiosInstance[method.toLowerCase()](url, {
                    ...othersConfig,
                    signal: controller.signal
                })
                console.log(res.data.results)
                setData(res.data.results)
            } catch (err) {
                console.log(err)
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }

        if (effectRun.current) {
            fetchData()
        }
      
        return () => {
            controller.abort()
            effectRun.current = true
        }

    }, [])

    return [data, loading, error]
}