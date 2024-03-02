import { Envelope, MapPin, Phone } from "@phosphor-icons/react"
import { useTranslation } from "react-i18next"
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const ClaimContactFormSchema = z.object({
  name: z.string(),
  email: z.string().email("Informe um e-mail válido"),
  subject: z.string().min(3, { message: "O assunto precisa ter pelo menos 10 caracteres" }),
  message: z.string().min(10, { message: "O corpo do email precisa ter pelo menos 10 caracteres" })
})

type ClaimContactFormData = z.infer<typeof ClaimContactFormSchema>

export function Contact() {
  const { t } = useTranslation()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ClaimContactFormData>({
    resolver: zodResolver(ClaimContactFormSchema),
  })

  function handleSendMail(data: ClaimContactFormData) {
    window.location.href = `mailto:leandro.nunes19xl@gmail.com?subject=${data.subject}&body=${encodeURIComponent(`Hi, my name is ${data.name} and my email is ${data.email}.\n${data.message}`)}`;
  }

  return (
    <div className="relative flex flex-col h-full w-full bg-gunmetal/90 backdrop-blur-lg md:p-8 gap-4 overflow-hidden items-center justify-start">
      <h3 className="flex uppercase text-3xl md:text-5xl text-green-primary-light justify-center font-jomhuria tracking-wider">
        {t('header:app.contact')}
      </h3>

      <div className="flex flex-col md:w-max mx-4 w-full space-y-4">
        <div className='flex md:flex-row flex-col items-center justify-between mx-4 gap-6'>
          <div className='flex items-center gap-2'>
            <Phone size={30} className='text-amber-300 animate-pulse' />
            <p className='text-md w-full'>+55 (81) 985632622</p>
          </div>
          <div className='flex items-center gap-2'>
            <Envelope size={30} className='text-amber-300 animate-pulse' />
            <p className='text-md w-full'>leandro.nunes19xl@gmail.com</p>
          </div>
          <div className='flex items-center gap-2'>
            <MapPin size={30} className='text-amber-300 animate-pulse' />
            <p className='text-md w-full'>Recife, Pernambuco, Brasil </p>
          </div>
        </div>

        <form onSubmit={handleSubmit(handleSendMail)} autoComplete="off" className='flex flex-col gap-6 md:w-fit mx-4 md:mx-auto'>
          <div className='flex flex-col md:flex-row gap-4'>
            <div className='flex flex-col md:flex-row'>
              <input
                id="name"
                {...register('name')}
                placeholder='Type your Name'
                type='text'
                className='contactInput'
              />
            </div>
            <div className='flex flex-col'>
              <input
                id="email"
                {...register('email')}
                placeholder='Type your Email'
                type='email'
                className='contactInput'
              />
              {errors.email && <p className="errorMessage">{errors.email.message}</p>}
            </div>
          </div>

          <div className='flex flex-col h-10'>
            <input
              id="subject"
              {...register('subject')}
              placeholder='Email subject'
              type='text'
              className='contactInput'
            />
            {errors.subject && <p className="errorMessage">{errors.subject.message}</p>}
          </div>
          <div className='flex flex-col'>
            <textarea
              id="message"
              {...register('message')}
              placeholder='Type your Message'
              className='contactInput'
            />
            {errors.message && <p className="errorMessage">{errors.message.message}</p>}
          </div>

          <button className='bg-emerald-500 py-4 px-10 rounded-md text-white font-bold text-lg tracking-widest uppercase hover:brightness-150 hover:shadow-custom transition-all duration-200' type='submit'>
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}