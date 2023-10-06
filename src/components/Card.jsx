import css from "./Card.module.css"
function Card() {
    return (
        <main>
            <h1>Os mais vendidos</h1>
            <div className={css.grid}>
                <div className={css.card}>
                    <img className={css.img} src="ração.png"/>
                    <h6>Ração Premier Golden Formula Cães Adultos Frango e Arroz Mini Bits 15kg</h6>
                    <p>R$150,21</p>
                    <button type="button" className="btn btn-outline-primary">Ver mais</button>
                </div>
                <div className={css.card}>
                    <img className={css.img} src="royal.png"/>
                    <h6>Ração Royal Canin Mini Adult para Cães Adultos de Raças Pequenas com 10 Meses ou mais de Idade 10kg</h6>
                    <p>R$ 382,41</p>
                    <button type="button" className="btn btn-outline-primary">Ver mais</button>
                </div>
            </div>
        </main>
    )
}

export default Card