'use server'

import { redirect } from "next/navigation"

export default async function register(prevState: any, formData: FormData) {
    process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0'
    const {message} = await checkFormValidity(prevState, formData)
    if (message !== "") {
      return {message: message}
    }

    const firstName = formData.get("firstName")
    const lastName = formData.get("lastName")
    const age = formData.get("age")
    const gender = formData.get("gender")
    const email = formData.get("email")
    const password = formData.get("password")
    
    const apiUrl = process.env.API_URL || ""
    const url = `${apiUrl}/auth/register`
    console.log(url)
    const res = await fetch(url, {
      method: "POST",
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        age: age,
        gender: gender,
        email: email,
        password: password
      }),
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY": "d05cbcd8c5080212e6f1f54a989492be300b82110f08c40eac8ccb54f0654669"
      },
    })

    if (res.status === 201){
      redirect('/')
    }
    
    return { message: '' }
  }

  async function checkFormValidity(prevState: any, formData: FormData) {
    const password = formData.get("password")
    const retypePassword = formData.get("confirmPassword")
    if (retypePassword !== password) {
      return { message: "Mot de Passe non identique" }
    }
    return { message: "" }
  }