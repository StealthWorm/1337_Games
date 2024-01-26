import { Money } from "@phosphor-icons/react"
import { useTranslation } from "react-i18next"

export function Contact() {
  const { t } = useTranslation()

  return (
    <div className="flex flex-col h-full w-full bg-green-primary/90 backdrop-blur-lg bg-green-primary gap-4">
      <h3 className="p-8 flex uppercase text-3xl md:text-5xl text-green-primary-light justify-center font-jomhuria tracking-wider">
        {t('header:app.contact')}
      </h3>
      <div className="flex flex-col flex-1 w-full">
        <div className="p-8 h-full">
          conteudo de contato
        </div>

        <div className='flex flex-col md:flex-row gap-6 font-jomhuria bg-green-primary-dark py-10 px-4 items-center justify-between md:justify-center border-t border-b border-warning'>
          <span className="tracking-wide text-2xl md:text-4xl text-center">
            {t('footer:app.donation.description')}
          </span>
          <a href="https://nubank.com.br/pagar/3wy6e/aJdlSZf8Mh" target="_blank" className='flex hover:animate-none animate-pulse gap-6 justify-between items-center p-4 text-green-secondary-dark rounded-md bg-warning hover:brightness-150 hover:shadow-custom transition-all duration-200'>
            <strong className='flex uppercase font-jomhuria tracking-widest text-xl md:text-4xl pt-2'>
              {t('footer:app.donation.title')}
            </strong>
            <Money size={40} weight='bold' />
          </a>
        </div>
      </div>
    </div>
  )
}