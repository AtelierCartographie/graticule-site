<script>
    import { page } from '$app/stores'
    $: path = $page.routeId == "" ?  "./" : "../"

    import Link from '$lib/link.svelte'

    import webp_2x from '$img/laptop_1600.webp'
    import webp_1x from '$img/laptop_800.webp'
    import png from '$img/laptop_1600.gif?w=1600;800&format=png'

    const png_2x = png[0],
          png_1x = png[1]
</script>


<section id="hero-banner">
    <h1>Votre fond de carte<br>en 5 étapes</h1>

    <p>
        <Link rel="external" href={`${path}app/`} className="filled big">
            Créer votre fond de carte
        </Link>
    </p>
    

    <picture>
        <source type="image/webp"
                srcset={`${webp_2x} 2x, ${webp_1x} 1x`} />

        <source type="image/png"
                srcset={`${png_2x} 2x, ${png_1x} 1x`} />

        <img src={png_1x} alt="Graticule illustration" width="1600" height="900"/>
    </picture>
    
</section>

<style>
    section {
        max-width: 900px;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
    }

    /* Bonne pratique : https://css-tricks.com/barebones-css-for-fluid-images/ */
    img {
        margin-top: 3rem;
        max-width: 100%;
    }
    img[width] { width: auto; /* Defer to max-width */ }
    img[width][height] { height: auto; /* Preserve aspect ratio */ }
</style>