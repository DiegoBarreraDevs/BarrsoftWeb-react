import React, {useState} from 'react';

export default function Form (props) {

    const initialStateValues = {
        fullname: '',
        email:'',
        service: '',
        message: ''
    }

    const [values, setValues] = useState(initialStateValues);

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setValues({...values, [name]: value})
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.addUser(values);
        setValues({...initialStateValues})
        alert('Your data was sended succesfully')
    }

    return (
        <div className="checkoutForm">
            <form onSubmit={handleSubmit} className="form">
                <input
                    type="text"
                    className="input"
                    placeholder="Write your name"
                    name="fullname"
                    onChange={handleInputChange}
                    value={values.fullname}
                />
                <input
                    type="email"
                    className="input"
                    placeholder="example@email.com"
                    name="email"
                    required
                    onChange={handleInputChange}
                    value={values.email}
                />
                <select
                    name="service"
                    onChange={handleInputChange}
                    value={values.service}
                    className="checkoutSelect"
                >
                    <option className="checkoutOption" defaultValue value="">Select your service</option>
                    <option className="checkoutOption" value=""></option>
                    <option className="checkoutOption" value="NFT">NFT</option>
                    <option className="checkoutOption" value="Tokens">Tokens</option>
                    <option className="checkoutOption" value="Dapps">DApps</option>
                    <option className="checkoutOption" value="Smart Contract">Smart Contract</option>
                    <option className="checkoutOption" value="Crypto Payments">Crypto Payments</option>
                    <option className="checkoutOption" value="Crypto web">Crypto Web Pages</option>
                </select>
                <textarea
                    name="message"
                    htmlFor="message"
                    className="input"
                    placeholder="Leave us a message with the specifications of your project"
                    maxLength="300"
                    onChange={handleInputChange}
                    value={values.message}
                ></textarea>

                <input type="submit" name="enviar" value="Send" />

                {/* <button className='btnForm'>
                    save
                </button> */}

            </form>
        </div>
    );
}
