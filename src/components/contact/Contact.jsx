import { useRef, useEffect } from 'react';
import IMask from 'imask';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';

import Title from "../UI/Title";

import dots from '../../assets/icons/dots.svg';
import home from '../../assets/icons/home.svg';
import phone from '../../assets/icons/phone.svg';
import email from '../../assets/icons/email.svg';

import '../../styles/contact.scss';

let bot = {
    TOKEN: "6255101956:AAGuXx-0gapcz1q3nPL9ZN6oCd0TQlcci9c",
    chatID: "-921924311"
}


const Contact = () => {

    const inputNameRef = useRef(null);
    const inputEmailRef = useRef(null);
    const inputPhoneRef = useRef(null);
    const inputMessageRef = useRef(null);

    const handleSubmit  = (e) => {
        e.preventDefault();

        fetch(`https://api.telegram.org/bot${bot.TOKEN}/sendMessage?chat_id=${bot.chatID}&text=${'Name: ' + inputNameRef.current.value + '%0A' +
                                                                                                'Email: ' + inputEmailRef.current.value + '%0A' +
                                                                                                'Phone: ' + inputPhoneRef.current.value + '%0A' +
                                                                                                'Message: ' + inputMessageRef.current.value

        }`, {
            method: "POST"
        })
        .then(success => {
            inputNameRef.current.value = "";
            inputEmailRef.current.value = "";
            inputPhoneRef.current.value = "";
            inputMessageRef.current.value = "";
            toast.success('The message has been sent!');
        }, error => {
            toast.error('The message was not sent!');
        })
    }

    useEffect(() => {
        const phoneMask = IMask(inputPhoneRef.current, {
        mask: '+{38}(000)000-00-00',
        });

        return () => {
        phoneMask.destroy();
        };
    }, []);

    return (
        <section className="contact">
            <div className="container">
                <Title title={`ЗВ'ЯЖІТЬСЯ З НАМИ`}/>
            </div>

            <div className="contact__wrapper">
                <div className="contact__information">
                    <div className="contact__title">
                        Зверніться до нас
                    </div>
                    
                    <div className="contact__subtitle">
                    Якщо у вас виникли питання щодо цін на наші послуги або будь-які інші питання, будь ласка, заповніть форму. Наші фахівці оперативно дадуть відповідь на ваші запитання та нададуть детальну інформацію.
                    </div>

                    <div className="contact__icons">
                        <div className="contact__icon">
                            <div className="contact__icon-img">
                                <img src={home} alt="home" />
                            </div>

                            <div className="contact__text">
                                <div className="contact__icon-title">
                                    Наше розташування
                                </div>
                                <div className="contact__icon-subtitle">
                                    1234 Oak Street, New Forest City
                                </div>
                            </div>
                        </div>

                        <div className="contact__icon">
                            <div className="contact__icon-img">
                                <img src={phone} alt="phone" />
                            </div>
                            <div className="contact__text">
                                <div className="contact__icon-title">
                                    Телефон
                                </div>
                                <div className="contact__icon-subtitle">
                                    <a href="tel:+15551234567">+1 (555) 123-4567</a>
                                </div>
                            </div>
                        </div>

                        <div className="contact__icon">
                            <div className="contact__icon-img">
                                <img src={email} alt="email" />
                            </div>
                            <div className="contact__text">
                                <div className="contact__icon-title">
                                    Емейл
                                </div>
                                <div className="contact__icon-subtitle">
                                    <a href="mailto:teslawiz@gmail.com">teslawiz@gmail.com</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>

                <div className="contact__form">
                    <img src={dots} className="contact__form-img-top" alt="dots" />
                    <img src={dots} className="contact__form-img-bottom" alt="dots" />
                    <form onSubmit={handleSubmit} className="contact__form-wrapper">
                        <input ref={inputNameRef} placeholder="Ваше Ім'я" type="text" id="name" name="name" required/>

                        <input ref={inputEmailRef} placeholder="Ваш Email" type="email" id="email" name="email" required/>

                        <input ref={inputPhoneRef} placeholder="Ваш Телефон" type="tel" id="phone" name="phone" required/>

                        <textarea ref={inputMessageRef} placeholder="Повідомлення" id="message" name="message" rows="5" required></textarea>

                        <motion.button whileTap={{scale: 1.1}} className="contact__btn">
                            Відправити повідомлення
                        </motion.button>
                    </form>
                </div>
            </div>

        </section>
    )
}

export default Contact;