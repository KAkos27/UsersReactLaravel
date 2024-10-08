import { useRef } from "react";

const NewUser = ({ onSubmit }) => {
    const nameRef = useRef();
    const emailRef = useRef();

    return (
        <form className="new-user">
            <label>Name</label>
            <input ref={nameRef} type="text" />
            <label>Email</label>
            <input ref={emailRef} type="text" />
            <input
                type="submit"
                onClick={(event) =>
                    onSubmit(event, {
                        name: nameRef.current.value,
                        email: emailRef.current.value,
                    })
                }
            />
        </form>
    );
};

export default NewUser;
