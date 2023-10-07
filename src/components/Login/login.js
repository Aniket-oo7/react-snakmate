import { useState } from "react";
import { useRecoilState } from "recoil";
import { UserDetail } from "../../recoil/atom";
import { LoggedIn } from "../../recoil/atom";
import {BiUser,BiLockAlt} from 'react-icons/bi'
import Input from "../../molecules/customInput/input";
import Button from "../../molecules/customButton/button";
import style from './login.module.css'


function Login(){
const[email,setEmail] = useState("")
const[password,setPassword] = useState("")
const[userData,setUserData] = useRecoilState(UserDetail)
const[login,setLogin] = useRecoilState(LoggedIn)

console.log(userData)
function handleRegister(){

}

function handleLogin(e){
    e.preventDefault()
    let status = true
for(let i=0; i<userData.length;i++){
    if(email){
        if(userData[i].Email == email){
            status = false
            if(userData[i].Password == password){
                setLogin(true)
                alert("Login Sucessed")
                // navigate("/login")
            } else{
                alert("Ohh No, Password is incorrect")
            }
        }
    }
  }
if(status){
    alert("Ohh No,User Not Found")
}
}

    return(
        <div className={style.main}>
       
        <form className={style.form}>
        <h2 className={style.heading}>Login</h2>
            <section className={style.input}>
                <BiUser className={style.icon}/>
              <Input placeholder="Your email here..." className={style.field} onChange={(inputEmail)=>setEmail(inputEmail)}/>
            </section>
            <section className={style.input}>
                <BiLockAlt className={style.icon}/>
                <Input placeholder="Your password here..." className={style.field} onChange={(inputPassword)=>setPassword(inputPassword)} type="password"/>
            </section>
            <section className={style.btn}>
                <Button text="Login" className={style.btns} onClick={handleLogin}/>
                <Button text = "Register" className={style.btns} onClick={handleRegister}/>
            </section>
        </form>
    </div>
    )
}

export default Login;