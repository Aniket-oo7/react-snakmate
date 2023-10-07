import { useState } from "react";
import { useRecoilState } from "recoil";
import { UserDetail } from "../../recoil/atom";
import style from './register.module.css'
import Button from "../../molecules/customButton/button";
import Input from "../../molecules/customInput/input";
import{
  validateName,
  validateLastName,
  validatePassword,
  validateEmail,
  validatePhoneNumber,
} from '../../helper/helper'

function Register(){
  const [firstName,setFirstName] = useState("")
  const [lastName,setlastName] = useState("")
  const [email,setEmail] = useState("")
  const [phoneNumber,setPhoneNumber] = useState("")
  const [password,setPassword] = useState("")
  const [address,setAddress] = useState("")
  const [landmark,setLandmark] = useState("")
  const [FirstnameMessage, setFirstNameMessage] = useState("");
  const [LastnameMessage, setLastNameMessage] = useState("");
  const [EmailMessage, setEmailMessage] = useState("");
  const [PasswordMessage, setPasswordMessage] = useState("");
  const [AddressMessage, setAddressMessage] = useState("");
  const [LandmarkMessage, setLandmarkMessage] = useState("");
  const [PhoneNumberMessage, setPhoneNumberMessage] = useState("");
  const [userData,setUserData] = useRecoilState(UserDetail)

 function handleClick(e){
  e.preventDefault()
  if(
    firstName &&
    lastName &&
    email &&
    phoneNumber &&
    password &&
    address &&
    landmark 
    ){
     let status = true;

     if(!validateName(firstName)){
      setFirstNameMessage("Invalid first name! Your first name must only contain alphabets and should be less than or equal to 20 characters")
     status = false     
     } else{
    setFirstNameMessage("")
     }

      if(!validateLastName(lastName)){
        setLastNameMessage("Invalid last name! Your last name must only contain alphabets and should be less than or equal to 20 characters")
      status = false
      } else{
        setLastNameMessage("")
      }
      
      if(!validatePhoneNumber){
        setPhoneNumberMessage("Invalid Phone Number")
        status = false
      } else {
        setPhoneNumberMessage("")
      }

      if(!validateEmail){
        setEmailMessage("Invalid Email")
        status = false
      } else{
        setEmailMessage("")
      }

      if(!validatePassword){
        setPasswordMessage("Invalid Password")
        status = false
      } else{
        setPasswordMessage("")
      }

      if(status){
        setUserData([...userData,
          {
            Email: email,
            FirstName: firstName,
            LastName: lastName,
            PhoneNumber: phoneNumber,
            Password: password,
            Landmark : landmark,
            Address: address,
          }
          ])
          alert("Registerd Sucessfully")
        console.log(userData)
      }


    } else {
      alert("Please fill all the details")
    }
 }

    
    return(
        <div className={style.main}>
        <form className={style.form}>
          <h2 className={style.heading}>Register</h2>
          <section className={style.input}>
            <Input
              placeholder="Firstname"
              className={style.field}
              value={firstName}
              onChange={(inputFName) => {
                setFirstName(inputFName);
              }}
            />
          </section>
          <span className={style.message}> {FirstnameMessage} </span>
          <section className={style.input}>
            <Input
              placeholder="Lastname"
              className={style.field}
              value={lastName}
              onChange={(inputLName) => {
                setlastName(inputLName);
              }}

              // export default function Input(props){
              //   return(
              //       <input placeholder={props.placeholder} 
              //        onChange={(e)=>props.onChange(e.target.value.trim())} 
              //        value={props.value} 
              //        className={props.className} 
              //        type={props.type}/>
              //   )
              //   }


            />
          </section>
          <span className={style.message}>{LastnameMessage} </span>
          <section className={style.input}>
            <Input
              placeholder="Email"
              className={style.field}
              value={email}
              onChange={(inputEmail) => {
                setEmail(inputEmail);
              }}
            />
          </section>
          <span className={style.message}>{EmailMessage}</span>
          <section className={style.input}>
            <Input
              placeholder="Phone Number"
              type="number"
              className={style.field}
              value={phoneNumber}
              onChange={(inputNumber) => {
                setPhoneNumber(inputNumber);
              }}
            />
          </section>
          <span className={style.message}>{PhoneNumberMessage}</span>
          <section className={style.input}>
            <Input
              placeholder="Password"
              type="password"
              className={style.field}
              value={password}
              onChange={(inputPassword) => {
                setPassword(inputPassword);
              }}
            />
          </section>
          <span className={style.message}>{PasswordMessage}</span>
          <section className={style.input}>
            <Input
              placeholder="Complete Address"
              className={style.field}
              value={address}
              onChange={(inputAddress) => {
                setAddress(inputAddress);
              }}
            />
          </section>
          <span className={style.message}>{AddressMessage}</span>
          <section className={style.input}>
            <Input
              placeholder="Nearby Landmark"
              className={style.field}
              value={landmark}
              onChange={(inputLandmark) => {
                setLandmark(inputLandmark);
              }}
            />
          </section>
          <span className={style.message}>{LandmarkMessage}</span>
          <section className={style.btn}>
            <Button
              text="Register"
              onClick={handleClick}
              className={style.btns}
            />
          </section>
        </form>
      </div>
    )
            } 

export default Register;