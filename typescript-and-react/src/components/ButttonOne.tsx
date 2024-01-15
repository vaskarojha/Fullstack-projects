import React, {useState} from 'react'

interface ButtonOneProps {
    text :string;
    onClick?:() =>void
}

interface Book {
    name:string;
    price: number
}
// type props = {text: string}



const ButtonOne: React.FC<ButtonOneProps> = (props) =>{
    const {text, onClick} = props
    const [value, setValue] = useState<string>('')
    const [value1, setValue1] = useState<Book>({
        name: 'abc',
        price:5
    })

    const handleOnChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setValue(e.target.value)
    }

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        console.log(e)
    }

    return<>
    <form onSubmit={handleSubmit}>
    <input type="text" 
    onChange={handleOnChange}
    placeholder='Type something here....' />
    <h2>{value}</h2>
    <button type='submit'> Submit</button>
    </form>
    {/* <h2>{value}</h2>
    <br />
    <h1>{value>=5 && value1.name}</h1>
    <button onClick={()=>setValue(value+1)}>{text}</button>
    <button onClick={()=>setValue1({name:'def', price: 15})}>Change Book Name</button>
    {console.log(value)} */}
    </>
}
export default ButtonOne