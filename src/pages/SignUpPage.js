import useToggleValue from "../hooks/useToggleValue";
import LayoutAuthentication from "../layout/LayoutAuthentication";
import FormGroup from "../components/common/FormGroup";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Label } from "../components/label";
import { Input } from "../components/input";
import { IconEyeToggle } from "../components/icons";
import { Checkbox } from "../components/checkbox";
import { Button, ButtonGoogle } from "../components/button";

const schema = yup.object({
  name: yup.string().required("This field is required"),
  email: yup.string().email("").required("This field is required"),
  password: yup
    .string()
    .required("This field is required")
    .min(8, "Password must be 8 character"),
});

const SignUpPage = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    model: "onSubmit",
  });
  const { value: acptTerm, handleToggleValue: toggleAcptTerm } =
    useToggleValue();
  const { value: showPassword, handleToggleValue: handleToggleIconEye } =
    useToggleValue();

  const handleSignUp = (values) => {
    console.log(values);
  };
  return (
    <LayoutAuthentication heading="Sign Up">
      <p className="mb-6 text-xs font-normal text-center lg:text-sm text-text3 lg:mb-8">
        Already have a account?{" "}
        <Link to="/sign-in" className="font-medium underline text-primary">
          Sign In
        </Link>
      </p>
      <ButtonGoogle text="Sign up with Google"></ButtonGoogle>
      <p className="mb-4 text-xs font-normal text-center lg:text-sm lg:mb-8 text-text2 dark:text-white">
        Or sign up with email
      </p>
      <form onSubmit={handleSubmit(handleSignUp)}>
        <FormGroup>
          <Label htmlFor="name">Fullname *</Label>
          <Input
            control={control}
            name="name"
            error={errors.name?.message}
            placeholder="John Smith"
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Email *</Label>
          <Input
            control={control}
            name="email"
            type="email"
            placeholder="example@gmail.com"
            error={errors.email?.message}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Password *</Label>
          <Input
            control={control}
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="Create a password"
            error={errors.password?.message}
          >
            <IconEyeToggle
              open={showPassword}
              onClick={handleToggleIconEye}
            ></IconEyeToggle>
          </Input>
        </FormGroup>
        <div className="flex items-start mb-5 gap-x-5">
          <Checkbox name="term" checked={acptTerm} onClick={toggleAcptTerm}>
            <p className="flex-1 text-xs lg:text-sm text-text2 select-none dark:text-text3">
              I agree to the{" "}
              <span className="underline text-secondary">Terms of Use</span> and
              have read and understand the{" "}
              <span className="underline text-secondary">Privacy policy</span>
            </p>
          </Checkbox>
        </div>
        <Button type="submit" className="w-full bg-primary">
          Create my account
        </Button>
      </form>
    </LayoutAuthentication>
  );
};

export default SignUpPage;
