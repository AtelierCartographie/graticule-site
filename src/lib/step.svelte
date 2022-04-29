<script>
    export let
        icon = "crop",
        step = "Étape",
        content = "Description de l'étape"
</script>


<div class="step">
    <span class="material-icons">{icon}</span>

    <p><b>{step}</b></p>
    <p>{content}</p>
</div>

<style>
    .step { max-width: 10rem; }
    span {
        background-color: var(--accent-color);
        border-radius: 2em;
        padding: 1rem;
        color: white;
        font-size: 34px;
    }

    @media (max-width: 360px) {
        .step {max-width: none;}
    }
</style>