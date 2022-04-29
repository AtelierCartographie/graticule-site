<script>
    import Step from '$lib/step.svelte'

    const data = [
        {step: "Cadrer", icon: "crop",
         content: "Sélectionnez une région ou un pays dans une liste ou bien naviguez librement dans la carte"},
        {step: "Projeter", icon: "language",
         content: "Trouvez une projection cartographique adaptée à votre cadrage"},
        {step: "Personnaliser", icon: "layers",
         content: "Affichez des informations géographiques et changez le style de votre fond de carte"},
        {step: "Simplifier", icon: "timeline",
         content: "Ajustez le niveau de détail des tracés pour faciliter la lecture de la carte"},
        {step: "Télécharger", icon: "file_download",
         content: "Choisissez un format (png ou svg) et téléchargez votre fond de carte"},
    ]
</script>

<section id="steps">
    <!-- <h2>Votre fond de carte<br>en 5 étapes</h2> -->

    <div class="steps">
        {#each data as d}
            <Step icon={d.icon} step={d.step} content={d.content} />
        {/each}
    </div>
</section>


<style>
    section {
        background: var(--section-gradient);
        text-align: center;
        margin-left: auto;
        margin-right: auto;
        padding: 4rem;
    }
    .steps {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-around;
        align-items: flex-start;
        gap: 2rem;
        max-width: 1200px;
        margin-left: auto;
        margin-right: auto;
    }

    @media (max-width: 799px) {
        .steps { flex-wrap: wrap;}
    }
</style>