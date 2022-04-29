<script>
    import Link from '$lib/link.svelte'
    import Logo from '$img/logo-Atelier-white.svg'

    import { page } from '$app/stores'
    $: path = $page.routeId == "" ?  "./" : "../"
</script>

<footer>
    <div class="logo">
        <a rel="external" href="https://www.sciencespo.fr/cartographie/" title="Sciences Po - Atelier de cartographie">
            <img src={Logo} alt="Logo de Sciences Po - Atelier de cartographie">
        </a>
    </div>
    <ol>
        <li><a href={`${path}#steps`}>Étapes</a></li>
        <li><a href={`${path}#examples`}>Exemples</a></li>
        <li><a href={`${path}#faq`}>FAQ</a></li>
        <!-- <li><a href={`${path}#contact`}>Contact</a></li> -->
        <li><a href={`${path}mentions-legales/`}>Mentions légales</a></li>
        <li>
            <Link rel="external"
                  href="https://github.com/AtelierCartographie/graticule"
                  className="outlined colored anim"
                  --color="white"
                  --bg-color="black"
                  icon={{name: "trending_flat", position: "end"}}>
                  Github
            </Link>
        </li>
    </ol>
</footer>

<style>
    footer {
        height: calc(var(--nav-h) * 2);
        padding-bottom: 1.5rem;
        display: flex;
        align-items: flex-end;
        background-color: var(--dark-grey);
    }
    .logo { 
        text-align: center;
        width: calc(16rem + 2rem);
    }
    .logo a {
        all: inherit;
        cursor: pointer;
    }
    img {
        width: 180px;
        height: 54px;
    }
    ol {
        list-style-type: none;
        padding: 0;
        margin: 0;
        width: 100%;
        display: flex;
        align-items: baseline;
        justify-content: flex-end;
    }
    li {
        padding: .3rem .7rem;
    }
    a {
        display: block;
        text-decoration: none;
        color: var(--light-grey);
    }

    @media (max-width: 799px) {
        footer {
            height: initial;
            align-items: flex-start;
            padding-top: 1.5rem;
        }
        ol { 
            flex-direction: column;
            align-items: flex-end;
            gap: .5rem;
            padding-right: 1rem;
        }
    }
</style>