import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

import RegistrationForm from './RegistrationForm/RegistrationForm'
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
    const [allEntry, setAllEntry] = useState([]);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (values) {
            const newEntry = { id: new Date().getTime().toString(), fullname: values.fullname, email: values.email, contact: values.contact, shortBio: values.shortBio }
            localStorage.setItem("digitalPaaniUser", JSON.stringify([...allEntry, newEntry]))
            setAllEntry([...allEntry, newEntry]);

        }

    }


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

            {allEntry.length === 0 ?
                (<h4 className="NoUser">No Registered User</h4>) :
                (
                    < div className="tabledata">
                        <table>
                            <tr className="ui">
                                <th>Full Name</th>
                                <th>Email</th>
                                <th>Contact</th>
                                <th>Bio</th>
                                <th>DateTime</th>
                            </tr>
                            {
                                allEntry.map((item) => {
                                    return (
                                        <tr classname="ui" style={{ color: "black" }} key={item.id}>
                                            <td>{item.fullname}</td>
                                            <td>{item.email}</td>
                                            <td>{item.contact}</td>
                                            <td>{item.shortBio}</td>
                                            <td>{item.id}</td>
                                            <hr />
                                        </tr>



                                    )
                                })
                            }
                        </table>
                    </div>
                )

            }

        </>
    );
}

export default App;