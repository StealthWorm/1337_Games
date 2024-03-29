import { Money } from "@phosphor-icons/react"
import { useTranslation } from "react-i18next"

export function About() {
  const { t } = useTranslation()

  return (
    <div className="relative flex flex-col whitespace-pre-line h-full w-full bg-gunmetal/90 backdrop-blur-lg gap-4 overflow-hidden items-center justify-start">
      <h3 className="flex uppercase text-3xl md:p-8 md:text-5xl text-green-primary-light justify-center font-jomhuria tracking-wider">
        {t('header:app.about')}
      </h3>
      <div className="flex flex-col justify-between w-full h-full">
        <div className="flex flex-col lg:grid md:grid-cols-2 md:space-y-0 max-h-[16rem] overflow-auto space-y-6 scrollbar-thin">
          <div className="space-y-2 lg:border-r-2 border-pigment-green/30 px-10">
            <strong
              className="text-xl font-extrabold text-amber-300 tracking-wider underline underline-offset-4"
            >
              {t('about:title_project')}
            </strong>
            <p className="flex-wrap leading-7 text-wrap">{t('about:description_project')}</p>
          </div>

          <div className="space-y-2 px-10 lg:border-l-2 border-pigment-green/30">
            <strong className="text-xl font-bold text-amber-300 tracking-wider">{t('about:title_author')}</strong>
            <p className="flex-wrap leading-7 text-wrap">{t('about:description_author')}</p>
          </div>
        </div>
        <div className='flex w-full flex-col md:flex-row gap-6 font-jomhuria bg-green-primary-dark/50 py-8 px-auto px-4 items-center justify-between md:justify-center border-t border-b border-warning'>
          <span className="tracking-wide text-2xl md:text-4xl text-center w-full md:w-[60%]">
            {t('footer:app.donation.description')}
          </span>
          <a href="https://nubank.com.br/pagar/3wy6e/aJdlSZf8Mh" target="_blank" className='flex w-full md:w-[40%] hover:animate-none animate-pulse gap-6 justify-center items-center p-4 text-green-secondary-dark rounded-md bg-warning hover:brightness-150 hover:shadow-custom transition-all duration-200'>
            <strong className='flex uppercase font-jomhuria tracking-widest text-xl md:text-4xl pt-2'>
              {t('footer:app.donation.title')}
            </strong>
            <Money size={40} weight='bold' />
          </a>
        </div>
      </div>
    </div >
  )
}