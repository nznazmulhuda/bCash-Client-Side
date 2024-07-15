import { Link, useNavigate } from "react-router-dom";
import Title from "../../Components/Shared/Title";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

function Login() {
    const navigate = useNavigate();
    const { setUser } = useContext(AuthContext);
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();
    const onSubmit = (data) => {
        // Submit the form data to the server
        axios
            .post("/login", data)
            .then((res) => {
                if (!res.data.accountActive) {
                    toast.error("Your account is not activated!");
                } else if (res.data.accountBlock) {
                    toast.error("Your account is Block!");
                } else if (res.data.accountActive) {
                    toast.success("Login successful!");
                    setUser(res.data);
                    navigate("/");
                }
            })
            .catch((e) => toast.error(e.response.data.message));

        reset();
    };
    return (
        <>
            <div>
                <Title title="Secure Login" />

                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex flex-col gap-2 md:gap-4 border border-primary rounded-xl p-4 md:p-6 lg:p-10 "
                >
                    <h2 className="text-2xl font-bold text-primary text-center">
                        Login
                    </h2>

                    <div className="w-full">
                        <label className="block text-xs md:text-sm font-medium text-gray-600 mb-1 ml-2">
                            Phone number or Email address:
                        </label>

                        <input
                            className="w-full outline-none border border-secondary py-2 px-3 rounded-lg hover:border-hover focus:border-primary transition-all ease-in text-xs md:text-sm shadow-md"
                            type="text"
                            placeholder="Phone number or email"
                            {...register("numOrMail", { required: true })}
                        />
                        {errors.numOrMail && (
                            <p className="text-red-500 text-xs md:text-sm ml-3 mt-1">
                                Phone number or Email is required.
                            </p>
                        )}
                    </div>

                    <div className="w-full">
                        <label className="block text-xs md:text-sm font-medium text-gray-600 mb-1 ml-2">
                            Pin:
                            <span className="text-xs text-primary ml-1 font-normal">
                                (max 5 digit)
                            </span>
                        </label>

                        <input
                            className="w-full outline-none border border-secondary py-2 px-3 rounded-lg hover:border-hover focus:border-primary transition-all ease-in text-xs md:text-sm shadow-md"
                            type="number"
                            placeholder="Pin"
                            {...register("pin", {
                                required: true,
                                maxLength: 5,
                            })}
                        />
                        {errors.pin && (
                            <p className="text-red-500 text-xs md:text-sm ml-3 mt-1">
                                Pin is required.
                            </p>
                        )}
                    </div>

                    <hr />

                    <button
                        type="submit"
                        className="bg-primary w-4/12 mx-auto py-2 rounded-md text-gray-200 font-bold text-sm md:text-lg hover:bg-[#c3096fdc] transition-all ease-in"
                    >
                        Login
                    </button>

                    <Link
                        to={"/register"}
                        className="text-center hover:text-primary transition-all ease-in lg:w-3/12 mx-auto"
                    >
                        Do not have an account yet?
                    </Link>
                </form>
            </div>
        </>
    );
}

export default Login;
