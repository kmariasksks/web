import { Form, Formik } from 'formik';
import { useField } from 'formik';
import * as Yup from 'yup';
import FormError from '../../components/formError/formError';
import { useNavigate, NavLink } from 'react-router-dom';
import { clearCart } from '../../redux/actions';
import { useDispatch } from 'react-redux';

import './checkout.css';

const CustomTextInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <>
            <label htmlFor={props.id || props.name}>{label}</label>
            <input className="text-input" {...field} {...props} />
            <FormError touched={meta.touched} error={meta.error} />
        </>
    )
}

function Checkout() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    return (
        <section>
            <div className='checkout__title'>
            <h2 className='checkout__title'>Checkout</h2>
            </div>

            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    phoneNumber: '',
                    adress: '',
                    email: '',
                }}
                validationSchema={Yup.object({
                    firstName: Yup.string()
                        .min(2, 'Your name should consist at least 2 characters')
                        .max(15, 'Your name must not exceed 15 characters')
                        // .matches(/^[A-Z]*$/, 'Your name must start with an upper letter')
                        .required('Required'),
                    lastName: Yup.string()
                        .min(2, 'Your last name should consist at least 2 characters')
                        .max(20, 'Your last name must not exceed 20 characters')
                        // .matches(/b[A-Z][a-z]*\b/, 'Your last name must start with an upper letter')
                        .required('Required'),
                    phoneNumber: Yup.string()
                        .matches(/^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/, 'Invalid phone number')
                        .required('Required'),
                    adress: Yup.string()
                        .min(10, 'Your adress should consist at least 10 characters')
                        .required('Required'),
                    email: Yup.string()
                        .matches(/^(([^<>()\[\]\\.,;:\s@"]+(.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/, 'Your email is invalid')
                        .required('Required'),
                })}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        resetForm();
                        setSubmitting(false);
                        navigate('/Success');
                    }, 1000)
                }
                }
            >
                {props => (
                    <Form>
                        <div className='checkout__inputs'>
                            <CustomTextInput className='checkout__input' label='First Name' name='firstName' type='text' placeholder='Maria' />
                            <CustomTextInput className='checkout__input' label='Last Name' name='lastName' type='text' placeholder='Kulish' />
                            <CustomTextInput className='checkout__input' label='Phone Number' name='phoneNumber' type='text' placeholder='+380 . . . . . . . . .' />
                            <CustomTextInput className='checkout__input' label='Adress' name='adress' type='text' placeholder='456 Oceanfront Drive Coastal Town, FL' />
                            <CustomTextInput className='checkout__input' label='Email' name='email' type='text' placeholder='example@gmail.com' />
                        </div>
                        <div className='buttons'>
                            <NavLink className="go-back__button3" exact to={`/Cart`}>
                                Go Back
                            </NavLink>
                            <button type='submit' className='submit__button'>
                                {props.isSubmitting ? 'Loading' : 'Submit'}
                            </button>
                        </div>

                    </Form>
                )}

            </Formik>

        </section>

    )
}

export default Checkout;



