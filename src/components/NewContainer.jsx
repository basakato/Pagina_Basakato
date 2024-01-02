import { NewArticle } from "./NewArticle"

export const NewContainer = () => {
  return (
    <aside className="bg-VeryDarkBlue text-OffWhite py-[28px] px-[20px]">
        <h1 className="text-SoftOrange text-4xl font-bold">Nuevo</h1>
        <NewArticle
            title='Excursión a Montserrat'
            text= 'Viaje en autocar con salida desde la plaza Cataluña'
        />
        <NewArticle
            title='Reunión en discoteca Versalles'
            text= 'Después de la discoteca, cena en restaurante Palafel'
        />
        <NewArticle
            title='Charla sobre la cultura de Guinea Equatorial'
            text= 'Me parece que esta actividad será un tostón'
        />
            
    </aside>
  )
}
