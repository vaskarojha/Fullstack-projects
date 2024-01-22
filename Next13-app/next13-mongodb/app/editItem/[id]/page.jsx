export default function EditItem(){
    return <form className="flex flex-col gap-3">
        <h3 className="mx-auto font-bold text-2xl">Edit item:</h3>
        <input className="border border-slate-500 px-8 py-2" type="text" placeholder="Title" />
        <input className="border border-slate-500 px-8 py-2" type="textarea" placeholder="Description" />
        <button className="bg-green-800 py-3 text-white font-bold w-1/2 mx-auto" >Add Topic</button>
    </form>
}