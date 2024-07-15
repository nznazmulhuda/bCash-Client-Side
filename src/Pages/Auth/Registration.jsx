import { Link, useNavigate } from "react-router-dom";
import Title from "../../Components/Shared/Title";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import axios from "axios";

function Registration() {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();
    const onSubmit = (data) => {
        data.role = data.role.toLowerCase();

        // Submit the form data to the server
        axios
            .post(`/register`, data)
            .then(() => {
                toast.success("Registration successful!");
                navigate("/login");
            })
            .catch((e) => toast.error(e.message));

        reset();
    };
    return (
        <>
            <div>
                <Title title="Registration" />

                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex flex-col gap-2 md:gap-4 border border-primary rounded-xl p-4 md:p-6 lg:p-10 "
                >
                    <h2 className="text-2xl font-bold text-primary text-center">
                        Create an account
                    </h2>

                    <div className="w-full">
                        <label className="block text-xs md:text-sm font-medium text-gray-600 mb-1 ml-2">
                            Full Name:
                        </label>

                        <input
                            className="w-full outline-none border border-secondary py-2 px-3 rounded-lg hover:border-hover focus:border-primary transition-all ease-in text-xs md:text-sm shadow-md"
                            type="text"
                            placeholder="Enter your full name"
                            {...register("name", { required: true })}
                        />
                        {errors.name && (
                            <p className="text-red-500 text-xs md:text-sm ml-3 mt-1">
                                Name is required.
                            </p>
                        )}
                    </div>

                    <div className="w-full">
                        <label className="block text-xs md:text-sm font-medium text-gray-600 mb-1 ml-2">
                            Email:
                        </label>

                        <input
                            className="w-full outline-none border border-secondary py-2 px-3 rounded-lg hover:border-hover focus:border-primary transition-all ease-in text-xs md:text-sm shadow-md"
                            type="email"
                            placeholder="Enter your email address"
                            {...register("email", { required: true })}
                        />
                        {errors.email && (
                            <p className="text-red-500 text-xs md:text-sm ml-3 mt-1">
                                Email is required.
                            </p>
                        )}
                    </div>

                    <div className="w-full">
                        <label className="block text-xs md:text-sm font-medium text-gray-600 mb-1 ml-2">
                            Phone Number:
                        </label>

                        <input
                            className="w-full outline-none border border-secondary py-2 px-3 rounded-lg hover:border-hover focus:border-primary transition-all ease-in text-xs md:text-sm shadow-md"
                            type="number"
                            placeholder="Enter your phone number"
                            {...register("number", { required: true })}
                        />
                        {errors.number && (
                            <p className="text-red-500 text-xs md:text-sm ml-3 mt-1">
                                Number is required.
                            </p>
                        )}
                    </div>

                    <div className="w-full">
                        <label className="block text-xs md:text-sm font-medium text-gray-600 mb-1 ml-2">
                            Account Type:{" "}
                            <span className="text-xs text-primary ml-1 font-normal">
                                (Normal/Agent)
                            </span>
                        </label>

                        <input
                            className="w-full outline-none border border-secondary py-2 px-3 rounded-lg hover:border-hover focus:border-primary transition-all ease-in text-xs md:text-sm shadow-md"
                            type="text"
                            placeholder="Enter your account type"
                            {...register("role", { required: true })}
                        />
                        {errors.role && (
                            <p className="text-red-500 text-xs md:text-sm ml-3 mt-1">
                                Account type is required.
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
                            placeholder="Enter your pin"
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
                        Register
                    </button>

                    <Link
                        to={"/login"}
                        className="text-center hover:text-primary transition-all ease-in lg:w-3/12 mx-auto"
                    >
                        Already have an account?
                    </Link>
                </form>
            </div>
        </>
    );
}

export default Registration;
