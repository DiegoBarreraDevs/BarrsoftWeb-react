import React, {useState} from 'react';

export default function Contact(props) {

    const initialStateValues = {
        fullname: '',
        email:'',
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
        <div className="contactForm">
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
                    required
                    name="email"
                    onChange={handleInputChange}
                    value={values.email}
                />
                <textarea
                    name="message"
                    htmlFor="message"
                    className="input"
                    placeholder="Leave us your message!"
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
