import { useEffect, useState } from "react"

import  { youtubeHomeData } from "../lib/axios"

export default function useYoutubeHome(url:string){

    const [data,setData] = useState<any>(null)
    const [error,setError] = useState(null)
    const [loading,setLoading] = useState(false)

    useEffect(() => {
        (
            async function(){
                try{
                    setLoading(true)
                    const response = await youtubeHomeData.get(url)
                    setData(response.data)
                }catch(err:any){
                    setError(err)
                }finally{
                    setLoading(false)
                }
            }
        )()
    }, [url])

    return { data, error, loading }

}