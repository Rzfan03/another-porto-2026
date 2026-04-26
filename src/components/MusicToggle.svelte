<script>
    import sound from '../lib/assets/sound.mp3';
    import { Volume2, VolumeX } from 'lucide-svelte';

    let audio = $state();
    let paused = $state(true);

    function togglePlay() {
        if (!audio) return;
        if (audio.paused) {
            audio.play().catch(() => {});
        } else {
            audio.pause();
        }
    }
</script>

<audio
    bind:this={audio}
    bind:paused={paused}
    src={sound}
    loop
></audio>

<div class="fixed bottom-6 right-6 z-[9999]">
    <button 
        type="button"
        onclick={togglePlay}
        class="flex h-12 w-12 items-center justify-center rounded-full bg-white text-black shadow-lg border border-gray-200 transition-all cursor-pointer active:scale-95"
    >
        {#if paused}
            <VolumeX size={24} />
        {:else}
            <Volume2 size={24} />
        {/if}
    </button>
</div>