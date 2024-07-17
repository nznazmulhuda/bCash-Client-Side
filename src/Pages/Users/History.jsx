import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import axios from "axios";

function History() {
    const { user } = useContext(AuthContext);
    const [datas, setDatas] = useState([]);

    // data fetchig from server
    useEffect(() => {
        const email = user.email;
        const number = user.number;
        const data = { email, number };
        axios
            .post("/transiction", data)
            .then((res) => {
                setDatas(res.data);
                console.log(res.data);
            })
            .catch((e) => console.error(e));
    }, [user]);

    return (
        <div className="space-y-4">
            {datas.map((data) => (
                <div
                    key={data._id}
                    className="flex items-center justify-between border-4 border-primary rounded-lg py-2 px-4 flex-col-reverse md:flex-row"
                >
                    {user.email === data.senderMail ||
                    user.number === data.senderNumber ? (
                        <>
                            <div className="space-y-2">
                                <h1 className="md:text-2xl font-bold">
                                    Receiver number or mail:{" "}
                                    <span className="text-primary">
                                        {data.recNumOrMail}
                                    </span>
                                </h1>

                                <h1 className="md:text-2xl font-bold">
                                    Date:
                                    <span className="text-primary">
                                        {` ${data.dateTime}`}
                                    </span>
                                </h1>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="space-y-2">
                                <h1 className="md:text-2xl font-bold">
                                    Sender number:{" "}
                                    <span className="text-primary">
                                        {data.senderNumber}
                                    </span>
                                </h1>

                                <h1 className="md:text-2xl font-bold">
                                    Date:
                                    <span className="text-primary">
                                        {` ${data.dateTime}`}
                                    </span>
                                </h1>
                            </div>
                        </>
                    )}

                    <div className="space-y-2 flex flex-col items-center mb-4 md:items-end">
                        <h1 className="text-2xl md:text-3xl font-bold">
                            <span
                                className={`${
                                    user.email === data.senderMail ||
                                    user.number === data.senderNumber
                                        ? "text-red-500 line-through"
                                        : "text-green-500"
                                }`}
                            >
                                {data.amount >= 100
                                    ? data.amount - 5
                                    : data.amount}
                                ৳
                            </span>

                            {(user.email === data.senderMail ||
                                user.number === data.senderNumber) &&
                                data.amount >= 100 && (
                                    <span className="text-red-500 text-xs md:text-sm">
                                        {" "}
                                        +5৳
                                    </span>
                                )}
                        </h1>

                        <button className="border border-primary py-1 px-4 rounded text-sm md:text-lg font-bold bg-primary text-white transition-all ease-in">
                            {user.email === data.senderMail ||
                            user.number === data.senderNumber
                                ? "Send"
                                : "Recieved"}
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default History;
