"use client"

import { useFormStatus } from "react-dom";

export default function SubmitButton({className = '', placeholder = ''}) {
    const {pending} = useFormStatus()

    return <input type="submit" className={className} value={pending ? "Loading..." : placeholder}/>
}