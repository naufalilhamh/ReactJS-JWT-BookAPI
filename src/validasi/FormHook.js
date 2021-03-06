import React from "react";
import { useForm } from "react-hook-form";

const Form = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => {
    console.log(data);
  };
  console.log(watch("example")); // watch input value by passing the name of it
  return (
    // "handleSubmit" will validate your inputs before invoking "onSubmit"
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function
       */}
      <input
        name="example"
        defaultValue="test"
        ref={register({ required: true })}
      />
      {/* include validation with required or other standard HTML validation r
ules */}
      <input name="exampleRequired" ref={register({ required: true })} />
      {/* errors will return when field validation fails */}
      {errors.exampleRequired && <span>This field is required</span>}
      <input type="submit" />
    </form>
  );
};
export default Form;
