import React, {useState} from 'react';

function Card4(props) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('')

    const [isNameValid, setIsNameValid] = useState(true);
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [isPhoneValid, setIsPhoneValid] = useState(true);

    const clickHandler = () => {
        if (isNameValid && isEmailValid && isPhoneValid){
            
        }
    }
}

export default Card4