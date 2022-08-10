import React, {useState} from 'react';
import Input from "../../ui/input/Input";
import Button from "../../ui/button/Button";
import {useDispatch} from "react-redux";
import {login} from "../../../../ service/API/user";
import {Formik} from "formik";
import * as yup from 'yup'

const Login = () => {
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')


    const validationsSchema = yup.object().shape({
        email: yup.string().required('You need write!')

    })
    const dispatch = useDispatch()
    return (
        <>
            <Formik initialValues={{
                email: '',
                phone: '',
                password: ''
            }}
                    validateOnBlur
                    onSubmit={(values) => (console.log(values))}
                    validationSchema={validationsSchema}
            >
                {({values, errors, touched,handleChange,handleBlur,isValid,handleSubmit, dirty}) => (
                    <div className="authorization">
                        <div className="authorization__header">Authorization</div>
                        <Input
                            name={"email"}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={email}
                            required
                            setValue={setEmail}
                            type="email"
                            placeholder="Email"
                        />

                        {touched.email && errors.email && <div style={{color: 'black'}}>{errors.email}</div>}
                        <Input
                            name={"phone"}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={phone}
                            setValue={setPhone}
                            type="text"
                            placeholder="Phone number"
                        />
                        {touched.phone && errors.phone && <p style={{color: 'black'}}>{errors.phone}</p>}
                        <Input
                            name={"password"}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={password}
                            setValue={setPassword}
                            type="password"
                            placeholder="Password"
                        />
                        {touched.password && errors.password && <p style={{color: 'black'}}>{errors.password}</p>}
                        {/*//TODO dispatch type Argument of type '(dispatch: Dispatch) => Promise ' is not assignable to parameter of type 'AnyAction'*/}
                        <Button disabled={!isValid && !dirty} onClick={() => dispatch<any>(login(email,phone, password))}>Login</Button>
                    </div>
                )}
            </Formik>

        </>
    );
};

export default Login;