<script>
    import "@fontsource/fira-code/latin-700.css"
    import "@fontsource/open-sans/latin-400.css"
    import "@fontsource/open-sans/latin-400-italic.css"
    import "@fontsource/open-sans/latin-700.css"
    import "@fontsource/open-sans/latin-700-italic.css"
    import "@fontsource/material-icons"

    import '../global.css'

    import Nav from '$lib/nav.svelte'
    import Footer from '$lib/footer.svelte'
</script>

<header>
    <Nav />
</header>

<slot></slot>

<Footer />

<style>
    
</style>