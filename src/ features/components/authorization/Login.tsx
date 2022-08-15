import Button from "../../../ ui-library/button/Button";
import {useDispatch, useSelector} from "react-redux";
import { login} from "../../ service/API/user";
import './authorization.css'
import {useForm} from "react-hook-form";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = async (data: any) => {
    dispatch<any>(login(data.email, data.phone, data.password));
  };

  const Error = useSelector((state: any) => state.user.error);
  const dispatch = useDispatch();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="authorization">
        <div className="authorization__header">Authorization</div>
        <input
          {...register("email", {
            required: true,
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: "",
            },
          })}
          type="email"
          placeholder="Email"
        />
        <div className="error">
          {errors?.email?.type === "required" && <p>Field cannot be empty</p>}
        </div>
        <div className="error">
          {errors?.email?.type === "pattern" && (
            <p>Enter a valid e-mail address ex:dddd@gmail.com</p>
          )}
        </div>
        <input
          {...register("phone", {
            required: true,
            pattern: {
              value: /\+7\d{3}\d{3}\d{2}\d{2}/ || /\+976\d{3}\d{3}\d{2}\d{2}/,
              message: "",
            },
          })}
          type="tel"
          placeholder="Phone number"
        />
        <div className="error">
          {errors?.phone?.type === "required" && <p>Field cannot be empty</p>}
        </div>
        <div className="error">
          {errors?.phone?.type === "pattern" && (
            <p>Phone format +7/+976 and and 10 digits after</p>
          )}
        </div>
        <input
          {...register("password", { required: true, minLength: 4 })}
          type="password"
          placeholder="Password"
        />
        <div className="error">
          {errors?.password?.type === "required" && (
            <p>Field cannot be empty</p>
          )}
        </div>
        <div className="error">
          {errors?.password?.type === "minLength" && (
            <p>Password length is at least 4 characters</p>
          )}
        </div>
        <Button>Login</Button>
        <p className="error">{Error}</p>
      </div>
    </form>
  );
};

export default Login;