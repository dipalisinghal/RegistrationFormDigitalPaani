import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import RegistrationForm from './RegistrationForm/RegistrationForm'
import DisplayData from './DisplayData/DisplayData';

const getData = () => {
    const LSdata = localStorage.getItem("digitalPaaniUser");
    if (LSdata) {
        return JSON.parse(LSdata);
    }
    else {
        return []
    }
}

 function App() {

    const [values, setValues] = useState({
        fullname: "",
        email: "",
        contact: "",
        shortBio: "",
    });

    const inputs = [
        {
            id: 1,
            name: "fullname",
            type: "text",
            placeholder: "Full Name",
            errorMessage:
                "Full Name should be not be empty",
            label: "Full Name",
            required: true,
        },
        {
            id: 2,
            name: "email",
            type: "email",
            placeholder: "Email",
            errorMessage: "It should be a valid email address!",
            label: "Email",
            required: true,
        },
        {
            id: 3,
            name: "contact",
            type: "text",
            placeholder: "Phone number",
            errorMessage:
                "Length should be 10 with 0 to 9 didgits and shouldn't include any character or special character!",
            label: "Contact",
            pattern: "^[0-9]{10}$",
            required: true,
        },
        {
            id: 4,
            name: "shortBio",
            type: "text",
            placeholder: "Type your short bio",
            errorMessage:
                "Short Bio should be 8-20 characters ",
            label: "Short Bio",
            required: true,
        },

    ];
    const [allEntry, setAllEntry] = useState(getData());
    const handleSubmit = (e) => {
        e.preventDefault();
        const newEntry = { id: new Date().toString().substring(0,25), fullname: values.fullname, email: values.email, contact: values.contact, shortBio: values.shortBio }  
            setAllEntry([...allEntry, newEntry]);
            setValues({
                fullname: "",
                email: "",
                contact: "",
                shortBio: "",
            })
          

    }
    useEffect(() => {
        localStorage.setItem("digitalPaaniUser", JSON.stringify(allEntry))
        
    }, [allEntry])
   

   

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    return (
        <>
            <div className="App">

                <form onSubmit={handleSubmit}>
                    <h1>Register</h1>
                    {inputs.map((input) => (
                        <RegistrationForm
                            key={input.id}
                            {...input}
                            value={values[input.name]}
                            onChange={onChange}
                        />
                    ))}
                    <button>Submit</button>
                    
                </form>

            </div>
           


            <DisplayData allEntry={allEntry} />
        </>
    );
}

export default App;