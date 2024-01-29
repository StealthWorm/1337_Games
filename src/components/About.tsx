import { useTranslation } from "react-i18next"

export function About() {
  const { t } = useTranslation()

  return (
    <div className="flex flex-col h-full w-full backdrop-blur-lg bg-green-primary/80  p-8 gap-4 overflow-hidden">
      <h3 className="flex uppercase text-3xl md:text-5xl text-green-primary-light justify-center font-jomhuria tracking-wider">
        {t('header:app.about')}
      </h3>

      <p>
        Um projeto Indie em desenvolvimento, a 1337 Games trabalha para resgatar a emoção dos clássicos JRPGs.
      </p>
      <strong>
        Este projeto sendo desenvolvido por apenas uma pessoa
      </strong>
    </div>
  )
}