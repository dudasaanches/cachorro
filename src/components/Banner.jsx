import css from "./Banner.module.css"
function Banner() {
    return (
        <main>
            <img className={css.banner} src="banner.png"/>
        </main>
    )
}

export default Banner