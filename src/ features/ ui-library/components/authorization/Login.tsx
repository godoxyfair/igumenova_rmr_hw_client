import React, {useEffect, useState} from 'react';
import Input from "../../ui/input/Input";
import Button from "../../ui/button/Button";
import {useDispatch, useSelector} from "react-redux";
import {getUserData, login} from "../../../../ service/API/user";
import './authorization.css'
import {useForm} from "react-hook-form";

const Login = () => {
    // const [email, setEmail] = useState("");
    // const [phone, setPhone] = useState("");
    // const [password, setPassword] = useState("");
    const {
        register,
        formState: {
            errors,
        },
        handleSubmit
    } = useForm({
         mode: 'onBlur'
    });

    const [postData, setPostData] = useState({
        email: '',
        phone: '',
        password: ''
    })
    //TODO как эту функцию синхронизировать с отправкаой формы на сервер в postData пусто при первом нажатии
    const onSubmit = (data:any) => {
        setPostData(data)
        return data
    }

    // useEffect(() => {
    //     console.log(postData)
    // },  );
    // useEffect(() => {
    //     setPostData(onSubmit);
    // }, [onSubmit] );

    const Error = useSelector((state: any) => state.user.error)
    const dispatch = useDispatch()
    return (
      <form onSubmit={handleSubmit( onSubmit)}>
        <div className="authorization">
          <div className="authorization__header">Authorization</div>
          <input
            {...register("email", {required: true})}
            // value={email}
            // setValue={setEmail}
            type="email"
            placeholder="Email"
          />
          <div>{errors?.email?.type === "required" && <p>Field cannot be empty</p>}</div>
          <input
              {...register("phone", {required: true})}
            // value={phone}
            // setValue={setPhone}
            type="text"
             placeholder="Phone number"
          />
          <div>{errors?.phone?.type === "required" && <p>Field cannot be empty</p>}</div>
          <input
              {...register("password", {required: true})}
            // value={password}
            // setValue={setPassword}
            type="password"
            placeholder="Password"
          />
          <div>{errors?.password?.type === "required" && <p>Field cannot be empty</p>}</div>
          {/*//TODO dispatch type Argument of type '(dispatch: Dispatch) => Promise ' is not assignable to parameter of type 'AnyAction'*/}
          <Button
              type="submit"
              onClick={() => dispatch<any>(login(postData.email, postData.phone, postData.password))}
          >
            Login
          </Button>
          <p className="error">{Error}</p>
        </div>
      </form>
    );
};

export default Login;