import css from "./Header.module.css"
function Header() {
    return (
        <header className={css.header}>
            <nav class="navbar navbar-expand-lg" >
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#">
                            <img src="logo.png"/>
                        </a>

                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <a className={css.escrita_h} class="nav-link" aria-current="page" href="#">Início</a>
                                </li>
                                <li class="nav-item">
                                    <a className={css.escrita_h} class="nav-link" aria-current="page" href="#">Produtos</a>
                                </li>
                                <li class="nav-item">
                                    <a className={css.escrita_h} class="nav-link" aria-current="page" href="#">Contato</a>
                                </li>
                                <li class="nav-item">
                                    <a className={css.escrita_h} class="nav-link" aria-current="page" href="#"><i className="fa-solid fa-cart-shopping"></i></a>
                                </li>
                                <li className="nav-item">
                                    <a className={css.escrita_h} className="nav-link" aria-current="page" href="#"><i class="fa-solid fa-heart"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
        </header>
    )
}

export default Header