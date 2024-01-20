import { useTranslation } from "react-i18next"

export function Contact() {
  const { t } = useTranslation()

  return (
    <div className="flex flex-col w-full h-full bg-green-primary/90 backdrop-blur-lg p-8 gap-4">
      <h3 className="flex uppercase text-3xl md:text-5xl text-green-primary-light justify-center font-jomhuria tracking-wider">
        {t('header:app.contact')}
      </h3>
    </div>
  )
}