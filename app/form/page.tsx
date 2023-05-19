'use client'

import Input from '@/components/Form/Input'
import {v4 as uuidV4} from 'uuid'
import { useState } from 'react'

import styles from './form.module.css'

interface FormValues {
  fullName: string;
  email: string;
  phoneNumber: string;
  companyName: string;
  message: string;
}

export default function Form() {
  const [formValues, setFormValues] = useState<FormValues>({
    fullName: "",
    email: "",
    phoneNumber: "",
    companyName: "",
    message: ""
  })

  const inputs = [
    {
      id: "1",
      name: "fullName",
      type: "text",
      placeholder: "Ex: Gustavo Almeida",
      label: "Nome",
      errorMessage: "O nome deve ter entre 3-16 caracteres e não deve incluir caracteres especiais.",
      pattern: "^[A-Za-z ]{3,16}$",
      required: true
    },
    {
      id: "2",
      name: "email",
      type: "email",
      placeholder: "Ex: nome.sobrenome@thealmeida.online",
      label: "Email",
      errorMessage: "Deve ser um email válido.",
      required: true
    },
    {
      id: "3",
      name: "phoneNumber",
      type: "text",
      placeholder: "Ex: (44) 91234-5678",
      label: "Telefone/Whatsapp",
      errorMessage: "O telefone deve ter entre 10-21 caracteres. Lembre-se de adicionar o DDD, ex: 44 9 9977-6655",
      pattern: "^[0-9\-\+() ]{10,25}$",
      required: true
    },
    {
      id: "4",
      name: "companyName",
      type: "text",
      placeholder: "Ex: GalileoSoft",
      label: "Nome da Empresa",
      errorMessage: "O nome da empresa deve ter entre 3-16 caracteres."
    },
    {
      id: "5",
      name: "message",
      type: "text",
      placeholder: "Ex: Gostaria de saber mais sobre como vocês trabalham",
      label: "Mensagem"
    },
  ]

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault()
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({...formValues, [e.target.name]: e.target.value})
  }
  
  
  return (
    <main className={styles.formContainer}>
      <h1>Simple form using custom Inputs with validation and mask:</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        {
          inputs.map((input) => (
            <Input 
              key={input.id}
              {...input}
              value={formValues[input.name as keyof FormValues]}
              onChange={onChange}
            />
          ))
        }
        <button type="submit">Enviar</button>
      </form>
    </main>
  )
}
