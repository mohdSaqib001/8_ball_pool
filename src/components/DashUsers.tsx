import { useEffect, useState } from "react";
import { DataTable } from "./data-table";
import { columns } from "@/lib/UserColumn";
import { useSelector } from "react-redux";

const DashUsers = () => {
    const {token} = useSelector(state => state.user.currentUser)
    const [data,setData] = useState([]);
    useEffect(()=>{
        async function fetchUsers() {
            const response = await fetch(`${import.meta.env.VITE_LOCAL_URL}/api/admin/getUsers?page=${2}?${20}?sort=${''}`,{
                method:'GET',
                headers:{
                    'Authorization':`Bearer ${token}`,
                    'Content-Type':'application/json'
                }
            })
            const data = await response.json();
            if(response.ok){
                setData(data.data.users);
            }else{
                console.log(data.message);
                
            }
        }
        fetchUsers();
    },[token])
  return (
    <div className="min-w-full flex flex-col">
      <div>
        <h1>All Users</h1>
        <h3>We're Surprised To Have You Join Our Vibrant Comunity.</h3>
      </div>
      <div className="min-w-max py-10">
      <DataTable columns={columns} data={data}/>
    </div>
    </div>
  );
};

export default DashUsers;
