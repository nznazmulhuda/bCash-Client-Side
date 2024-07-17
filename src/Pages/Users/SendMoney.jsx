import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";

function SendMoney() {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();
    const onSubmit = (data) => {
        if (
            data.recNumOrMail !== user.email &&
            data.recNumOrMail !== user.number
        ) {
            const date = new Date();
            // convert amount string to number.
            data.amount = data.amount * 1;
            data.senderMail = user.email;
            data.senderNumber = user.number;
            data.senderRole = user.role;
            data.dateTime = date.toLocaleString();

            // when amount is gether than or equal 100 then add 5 tk.
            if (data.amount >= 100) {
                data.amount = data.amount + 5;
            }

            // when the transferd amount less than or equal account balance.
            if (data.amount <= user.totalMoney) {
                // validate the pin
                axios
                    .post("/pinValidate", data)
                    .then((res) => {
                        if (res.data.success) {
                            delete data.pin;
                            // when the pin is validate.
                            axios
                                .post("/sendMoney", data)
                                .then((res) => {
                                    if (res.data.insertedId) {
                                        // when the money transfered success
                                        toast.success("Success!");
                                        navigate("/history");
                                        reset();
                                    } else {
                                        toast.error(
                                            "Somthing wrong! try again.",
                                        );
                                    }
                                })
                                .catch((e) => {
                                    toast.error(e.response.data.message);
                                    reset();
                                });
                        } else {
                            // when the pin is invalid
                            toast.error("Invalid pin!");
                        }
                    })
                    .catch((e) => console.error(e));
            }

            // when the transfer amount gether than account balance.
            if (data.amount > user.totalMoney) {
                toast.error("Insuficient balance!");
                reset();
            }
        } else {
            toast.error("Same user!");
        }
    };
    return (
        <>
            <div>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex flex-col gap-2 md:gap-4 border border-primary rounded-xl p-4 md:p-6 lg:p-10 "
                >
                    <h2 className="text-2xl font-bold text-primary text-center">
                        Send Money
                    </h2>

                    <div className="w-full">
                        <label className="block text-xs md:text-sm font-medium text-gray-600 mb-1 ml-2">
                            Reciver Number or Email:
                        </label>

                        <input
                            className="w-full outline-none border border-secondary py-2 px-3 rounded-lg hover:border-hover focus:border-primary transition-all ease-in text-xs md:text-sm shadow-md"
                            type="text"
                            placeholder="Reciver number or email"
                            {...register("recNumOrMail", { required: true })}
                        />
                        {errors.recNumOrMail && (
                            <p className="text-red-500 text-xs md:text-sm ml-3 mt-1">
                                Number or mail is required.
                            </p>
                        )}
                    </div>

                    <div className="w-full">
                        <label className="block text-xs md:text-sm font-medium text-gray-600 mb-1 ml-2">
                            Amount:
                        </label>

                        <input
                            className="w-full outline-none border border-secondary py-2 px-3 rounded-lg hover:border-hover focus:border-primary transition-all ease-in text-xs md:text-sm shadow-md"
                            type="number"
                            placeholder="Amount"
                            {...register("amount", { required: true })}
                        />
                        {errors.amount && (
                            <p className="text-red-500 text-xs md:text-sm ml-3 mt-1">
                                Amount is required.
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
                        Send Money
                    </button>
                </form>
            </div>
        </>
    );
}

export default SendMoney;
