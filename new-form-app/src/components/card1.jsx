import React, {useState} from 'react';

function Card1(props) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('')

    const [isNameValid, setIsNameValid] = useState(true);
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [isPhoneValid, setIsPhoneValid] = useState(true);

    // const onClick = () => {
    //   if (isNameValid && isEmailValid && isPhoneValid){
        
    //   }
    // }

  return (
    <div className="card1" id="card1">
        <h1>Personal Info</h1>
        <h4>Please provide your name, email and phone number</h4>
        <label>Name</label> <br></br>
        <input id='name' type='text' placeholder='e.g. Stephen King'></input><br></br>
        <label>Email</label> <br></br>
        <input id='email' type='text' placeholder='e.g. stephenking@loren.com'></input><br></br>
        <label>Phone Number</label> <br></br>
        <input id='phone' type='text' placeholder='e.g. 4901231231321'></input><br></br>
    </div>
  )
}

export default Card1