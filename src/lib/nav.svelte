<script>
    import Link from '$lib/link.svelte'

    import { page } from '$app/stores'
    $: path = $page.routeId == "" ?  "./" : "../"

    let isOpen = false
    $: icon = isOpen ? "close" : "menu"
</script>

<nav id="topbar">
    <h1><a href={path}>Graticule</a></h1>

    <ol class="desktop fontTitle"
        class:open={isOpen}
        on:click={() => isOpen = !isOpen}>
        <li><a href={`${path}#steps`}>Étapes</a></li>
        <li><a href={`${path}#examples`}>Exemples</a></li>
        <li><a href={`${path}#faq`}>FAQ</a></li>
        <!-- <li><a href={`${path}#contact`}>Contact</a></li> -->
        <li>
            <Link rel="external" href={`${path}app/`} className="outlined anim" icon={{name: "trending_flat", position: "end"}}>
                Commencer
            </Link>
        </li>
    </ol>

    <button
		aria-label="Toggle menu"
		aria-expanded={isOpen.toString()}
		class="menu-toggle"
		on:click={() => (isOpen = !isOpen)}
	>
        <span class="material-icons">{icon}</span>
	</button>
</nav>

<style>
    #topbar {
        top: 0;
        height: var(--nav-h);
        display: flex;
        align-items: center;
        background-color: white;
        box-shadow: 0 4px 4px rgb(0 0 0 / 6%);
        border-bottom: 1px solid #ccc;
        z-index: 10;
    }
    ol {
        list-style-type: none;
        padding: 0;
        width: 100%;
        display: flex;
        align-items: baseline;
        justify-content: flex-end;
        gap: 1rem;
        margin: 0 1rem;
    }
    h1 { 
        font-size: 24px;
        text-align: center;
        width: calc(16rem + 2rem);
    }
    h1 a {
        all: inherit;
        cursor: pointer;
    }
    li {
        font-size: 1rem;
        font-weight: bold;
        padding: .3rem .7rem;
    }
    a {
        display: block;
        text-decoration: none;
        color: var(--dark-grey);
    }

    button { display: none; }

    @media (max-width: 799px) {
        #topbar { justify-content: space-between; }
        ol { display: none; }
        button {
            display: block;
            margin-right: 1rem;
            background: none;
            border: none;
        }
        button:hover { color: var(--accent-color); }
        ol.open {
            background-color: rgba(255,255,255,.8);
            backdrop-filter: grayscale(.5) blur(3px);
            display: flex;
            flex-direction: column;
            position: absolute;
            top: var(--nav-h);
            margin: 0;
            padding: 2rem 0 2rem 3.7rem;
        }
    }
</style>