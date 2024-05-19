import { useEffect, useState } from "react"

const useFetch = (fetchUrl:string) => {
  const [data,setData] = useState()

  useEffect(()=>{
    const fetchData = async () => {
        const jsonData = await fetch(fetchUrl)
        const data = await jsonData.json()

        setData(data)
    }

    fetchData()
  },[fetchUrl])

return data


}

export default useFetch