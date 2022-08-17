import Button from "../../ ui-library/button/Button";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../ service/API/userAPI";
import "./authorization.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormInputsDTO } from "./authorizationDTO";
import { schema } from "../validation/schemaValidation";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormInputsDTO>({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormInputsDTO) => {
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
          })}
          type="email"
          placeholder="Email"
        />
        <div className="error">{errors?.email?.message}</div>
        <input
          {...register("phone", {
            required: true,
          })}
          type="tel"
          placeholder="Phone number"
        />
        <div className="error">{errors?.phone?.message}</div>
        <input
          {...register("password", { required: true })}
          type="password"
          placeholder="Password"
        />
        <div className="error">{errors?.password?.message}</div>
        <Button>Login</Button>
        <p className="error">{Error}</p>
      </div>
    </form>
  );
};

export default Login;
