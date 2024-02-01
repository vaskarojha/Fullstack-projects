
export default function UserProfile({params}:any){
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py2">
            <h1>Profile</h1>
            <hr />
            <p className="text-2xl">User Profile Page {params.idd}</p>
            <p></p>
        </div>
    )
}