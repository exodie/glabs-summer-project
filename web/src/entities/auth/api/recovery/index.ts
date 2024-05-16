'use server'

export const recoveryAction = async (formData: FormData) => {
  const email = formData.get('email')

  console.log(email)
}
