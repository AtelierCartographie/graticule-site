<script>
    import Example from '$lib/example.svelte'

    import Image_1 from '$img/monde-interrompue-2-hemispheres.png?w=800;400&format=avif;webp;png&meta'
    import Image_1_Full from '$img/monde-interrompue-2-hemispheres.png?w=2400'
    import Image_2 from '$img/europe-capitales.png?w=800;400&format=avif;webp;png&meta'
    import Image_2_Full from '$img/europe-capitales.png?w=2400'
    import Image_3 from '$img/asie-physique.png?w=800;400&format=avif;webp;png&meta'
    import Image_3_Full from '$img/asie-physique.png?w=2400'
    import Image_4 from '$img/france-villes-250k.png?w=800;400&format=avif;webp;png&meta'
    import Image_4_Full from '$img/france-villes-250k.png?w=2400'


    

    const data = [
        {title: "Le monde en deux hémisphères", img: Image_1, imgLarge: Image_1_Full, description: "Exemple de fond de carte du monde en 2 hémisphères"},
        {title: "L'Europe avec les capitales", img: Image_2, imgLarge: Image_2_Full, description: "Exemple de fond de carte de l'Europe avec les capitales"},
        {title: "L'Asie physique", img: Image_3, imgLarge: Image_3_Full, description: "Exemple de fond de carte de l'Asie physique"},
        {title: "La France avec le relief et les grandes villes", img: Image_4, imgLarge: Image_4_Full, description: "Exemple de fond de carte de la France avec le relief et les grandes villes"},
    ]
</script>


<section id='examples'>
    <h2>Exemples<br>de réalisations</h2>

    <div class="examples">
        {#each data as data}
            <Example {data} />
        {/each}
    </div>
    
</section>

<style>
    section {
        background: var(--section-gradient);
        margin-left: auto;
        margin-right: auto;
        text-align: center;
    }
    .examples {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 3rem 1.5rem;
    }

    @media (max-width: 599px) {
        .examples { grid-template-columns: 1fr; }
    }
</style>