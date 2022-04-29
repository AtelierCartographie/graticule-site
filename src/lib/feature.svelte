<script>
    import { page } from '$app/stores'
    $: path = $page.routeId == "" ?  "./" : "../"

    import Link from '$lib/link.svelte'

    import webp_2x from '$img/projections_900.webp'
    import webp_1x from '$img/projections_450.webp'
    import png from '$img/projections_900.gif?w=900;450&format=png'

    const png_2x = png[0],
          png_1x = png[1]

    // Pour une gestion plus complète de vite-imageTools avec un tag Picture voir :
    // https://github.com/sveltejs/sites/blob/master/packages/site-kit/src/lib/components/Hero.svelte
</script>

<section>
    <h3>Jouez avec les projections</h3>
    <div class="grid">
        <picture>
            <source type="image/webp"
                    srcset={`${webp_2x} 2x, ${webp_1x} 1x`} />
    
            <source type="image/png"
                    srcset={`${png_2x} 2x, ${png_1x} 1x`} />
    
            <img src={png_1x} width="900" height="675" alt="Illustration de la fonctionnalité des projections" />
        </picture>
    
        <div class="content">
            
            <p>Visualisez le monde différement grâce aux projections proposées et modifiez leurs paramètres pour comprendre leur fonctionnement.
                <br>
                Utiliser par exemple l’indicateur de Tissot pour repérer plus facilement les déformations liées aux projections.</p>
            <Link rel="external" href={`${path}app/`} className="outlined anim" icon={{name: "trending_flat", position: "end"}}>
                Essayer maintenant
            </Link>
        </div>
    </div>
</section>


<style>
    section {
        background: white;
    }
    h3 { text-align: center; }
    .grid {
        display: grid;
        grid-template-columns: 2fr 2fr;
        gap: 1rem;
    }
    /* picture {
        background: var(--section-gradient);
        border-radius: 20em;
        padding: 2rem;
        text-align: center;
        margin-right: 1rem;
    } */
    
    /* Bonne pratique : https://css-tricks.com/barebones-css-for-fluid-images/ */
    img { 
        max-width: 100%;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.2));
    }
    img[width] { width: auto; /* Defer to max-width */ }
    img[width][height] { height: auto; /* Preserve aspect ratio */ }

    .content { padding: .5rem 1rem; }
    p { margin-bottom: 3rem; }

    @media (max-width: 799px) {
        section { grid-template-columns: 2fr 3fr; }
    }
    @media (max-width: 599px) {
        section { margin: 1rem 4rem; }
        .grid { display: block; }
    }

    
</style>