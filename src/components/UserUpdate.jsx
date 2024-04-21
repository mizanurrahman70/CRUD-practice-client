import { useLoaderData } from "react-router-dom";


const UserUpdate = () => {
    const userData=useLoaderData()
    const btnHandle=e=>{
        e.preventDefault()
        const form=e.target
        const name=form.name.value 
        const email=form.email.value 
        const user= {name,email}
        console.log(user)
        fetch(`http://localhost:5000/users/${userData._id}`,{
            method:"PUT",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount>0){
                alert('update sucessfull')
            }
        })
    }
    return (
        <div>
            <h1>Update Your Information</h1>
            <form onSubmit={btnHandle}>
                <input type="text" name="name" defaultValue={userData.name} /><br />
                <input type="email" name="email" id=""  defaultValue={userData.email}/><br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default UserUpdate;