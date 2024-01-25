import EditItem from "@/components/EditItem";

const getItemById = async(id)=>{
    try{
        const response = await fetch(`http://localhost:3000/api/item/${id}`, {
            cache:"no-store"
        })

        if(!response.ok){
            throw new Error("Failed to fetch data!!")
        }
        return response.json()
    }catch(err){
        console.log("Error on fetching data!!")
    }
    
}
export default async function EditItemPage({params}){
    const {id} = params;
    const {item}= await getItemById(id)
    const {title, description}= item
    return <EditItem id= {id} title = {title} description = {description}/>
}
