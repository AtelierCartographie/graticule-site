<script>
    import Faq from "./faq.svelte"

    // export let type = "fill" // [fill, outline, link]

    // let props = {
    // href: [$$restProps.href],
	// class:[$$restProps.class]
	// }

    export let 
        rel = null,
        href,
        className,
        download = null,
        icon = {name: null, position: 'start'}
</script>


    <a {rel} {href} class={className} download={download}>
        {#if icon.name && icon.position == 'start'}
        <span class="material-icons">{icon.name}</span>
        {/if}

        <slot />

        {#if icon.name && icon.position == 'end'}
        <span class="material-icons">{icon.name}</span>
        {/if}
    </a>

<style>
    a {
        text-decoration: none;
        text-align: left;
        border-radius: 2em;
        padding: .4rem 1rem;
    }
    .small { font-size: var(--text-small); }
    .medium { font-size: var(--text-medium); }
    .large { font-size: var(--text-large); }

    .filled {
        background-color: var(--accent-color);
        color: white;
        padding: .6rem 1.2rem;
    }
    .outlined {
        color: var(--accent-color);
        border: 1px solid var(--accent-color);
    }
    .linked {
        color: var(--accent-color);
    }
    .colored { 
        color: var(--color);
        border: 1px solid var(--color);
    }

    .filled:hover {
        opacity: .9;
    }
    .outlined:hover {
        background-color: var(--accent-color-light);
    }
    .colored:hover {
        background-color: transparent;
    }
    .anim:hover > .material-icons { 
        animation-duration: .5s;
        animation-name: toTheRight;
        animation-iteration-count: infinite;
        animation-direction: alternate;
    }
    @keyframes toTheRight { to { transform: translate(30%,0); } }
</style>