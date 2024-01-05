import { NewArticle } from "./NewArticle"

export const NewContainer = () => {
  return (
    <aside className="bg-VeryDarkBlue text-OffWhite py-[12px] px-[20px]">
        <h1 className="text-SoftOrange text-3xl font-bold">Sagrada Familia</h1>
        <NewArticle
            title='Excursión a Montserrat'
            text= 'Viaje en autocar con salida desde la plaza Cataluña'
        />
        <NewArticle
            title='Reunión en discoteca Versalles'
            text= 'Después de la discoteca, cena en restaurante Palafel'
        />
        <NewArticle
            title='La fiesta de la Sagrada Familia en Basakato'
            text= 'Se celebra el último viernes del año'
        />
            
    </aside>
  )
}
