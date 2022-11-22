import { useState } from "react";
import SignUpStep1 from "components/RegisterStep1/RegisterStep1";
import SignUpStep2 from "components/RegisterStep2/RegisterStep2";

export default function SignUp() {
    const [isNext, setIsNext] = useState(true)
    const [step1, setStep1] = useState({})

    const register = (data) => {
        console.log(data);
        setIsNext(false)
        setStep1(data)
    }

    return (
        <>
            {isNext ? <SignUpStep1 onSubmit={register} /> : <SignUpStep2 data={step1} />}
        </>
    )

}