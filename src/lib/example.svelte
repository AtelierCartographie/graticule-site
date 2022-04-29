<script>
    import Link from '$lib/link.svelte'

    export let data = {}

    // D'après https://github.com/sveltejs/sites/blob/master/packages/site-kit/src/lib/components/Hero.svelte
    const groupBy = (items, key) => items.reduce(
		(result, item) => ({
			...result,
			[item[key]]: [
				...(result[item[key]] || []),
				item,
			],
		}), 
		{},
	)

    // Regrouper les images par format
    data.img = Object.values( groupBy(data.img, 'format') )
    // [
    //     [
    //         {"format": "avif",  "width": 1600, ...},
    //         {"format": "avif", "width": 800, ...},
    //         {"format": "avif", "width": 400, ...}
    //     ],
    //     [
    //         {"format": "webp", "width": 1600, ...},
    //         ...
    //     ],
    //     [   ...]
    // ]

    let fullScreen = false

    const isEscape = e => {
        if (fullScreen && e.keyCode == 27) fullScreen = !fullScreen
    }
    
</script>

<div>
    <picture>
        {#each data.img as d}
            <source type={`image/${d[0].format}`}
                    srcset={d.map(img => `${img.src} ${img.width === 400 ? '1x' : '2x'}`).join(', ')} />

            {#if d[0].format === 'png'}
                <img on:click={() => fullScreen = !fullScreen} src={d[0].src} width="800" height="572" alt={data.description} />
            {/if}
        {/each}
    </picture>

    <p><b>{data.title}</b></p>

    <Link href={data.imgLarge}
          className="outlined small"
          icon={{name: "file_download", position: "start"}}
          download={data.title}>
        Télécharger
    </Link>
</div>

<svelte:window on:keyup={isEscape}/>
{#if fullScreen}
    <div id='fullScreen' on:click={() => fullScreen = !fullScreen} >
        <img class="large" src={data.imgLarge} width="2400" height="1716" alt={data.description} />
    </div>
{/if}

<style>
    /* Bonne pratique : https://css-tricks.com/barebones-css-for-fluid-images/ */
    img {
        max-width: 100%;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.1));
    }
    img[width] { width: auto; /* Defer to max-width */ }
    img[width][height] { height: auto; /* Preserve aspect ratio */ }

    img:hover { cursor: zoom-in; }
    img.large:hover { cursor: zoom-out; }

    #fullScreen {
        position: fixed;
        top: 0px;
        left: 0px;
        height: 100vh;
        padding: 3rem;
        z-index: 99;
        background-color: rgba(255,255,255,.8);
        backdrop-filter: grayscale(.5) blur(3px);
    }
</style>