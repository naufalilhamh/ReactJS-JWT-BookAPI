import React, { useRef } from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";
import { useForm } from "react-hook-form";

const Inputan = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const password = useRef({});
  password.current = watch("password", "");
  const onSubmit = data => {
    console.log(data);
  }; // watch input value by passing the name of it

  return (
    <div className="container">
      <div className="cardregis">
        <div className="title">Register Form</div>
        <hr />
        <form className="px-2" onSubmit={e => e.preventDefault()}>
          <div className="form-group">
            <Label>Name</Label>
            <input
              className="form-control"
              type="text"
              name="fullname"
              placeholder="Masukkan Nama"
              ref={register({
                required: "Harus Diisi",
                minLength: {
                  value: 5,
                  message: "Kurang Dari 5 Karakter"
                }
              })}
            />
            {errors.fullname && <span>{errors.fullname.message}</span>}
          </div>
          <div className="form-group">
            <Label>Email</Label>
            <input
              type="text"
              className="form-control"
              name="email"
              placeholder="Masukkan Email"
              ref={register({
                required: "Harus Diisi",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Bukan Email!"
                }
              })}
            />
            {errors.email && <span>{errors.email.message}</span>}
          </div>
          <div className="form-group">
            <Label>Password</Label>
            <input
              type="password"
              className="form-control"
              name="password"
              placeholder="Masukkan Password"
              ref={register({
                required: "Harus Diisi",
                minLength: {
                  value: 8,
                  message: "Kurang Dari 8 Karakter"
                }
              })}
            />
            {errors.password && <span>{errors.password.message}</span>}
          </div>
          <div className="form-group">
            <Label>Konfirm Password</Label>
            <input
              type="password"
              className="form-control"
              name="konfirmpassword"
              placeholder="Masukkan Kembali Password"
              ref={register({
                required: "Harus Diisi",
                validate: value =>
                  value === password.current || "Password Ga Sama"
              })}
            />
            {errors.konfirmpassword && (
              <span>{errors.konfirmpassword.message}</span>
            )}
          </div>
          <hr />
          <input
            className="btn btn-primary"
            type="submit"
            onClick={handleSubmit(onSubmit)}
          />
        </form>
      </div>
    </div>
  );
};
export default Inputan;
