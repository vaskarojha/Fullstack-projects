import useSWR from "swr";
import fetcher from "@/lib/featcher"

const useMovie =()=>{
    const {data, error, isLoading} = useSWR(id? '/api/movie/${id}':null, fetcher, {
        revalidateIfStale:false,
        revalidateOnFocus:false,
        revalidateOnReconnect:false
    })
}