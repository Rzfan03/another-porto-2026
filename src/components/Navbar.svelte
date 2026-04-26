<script>
    import { 
      Menu, 
      X,
      Moon,
      Sun
    } from 'lucide-svelte';
    import { slide } from 'svelte/transition';

    let isOpen = $state(false);

    const toggleMenu = () => {
        isOpen = !isOpen;
    };

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'Projects', href: '#projects' },
        { name: 'Work', href: '#work' },
        { name: 'Blog', href: '#blog' }
    ];
</script>

<nav class="flex justify-center items-center mt-4 px-4 sticky top-3 z-50">
    <div class="relative flex flex-col bg-white border border-zinc-200 rounded-xl w-full max-w-[720px] overflow-hidden transition-all duration-300">
        
        <div class="flex justify-between items-center py-2 px-4 w-full">
            <div>
                <span class="font-mono text-zinc-900 text-lg tracking-tight">Rzfan03</span>
            </div>

            <div class="hidden md:block group">
                <ul class="flex items-center gap-5">
                    {#each navLinks as link}
                        <a 
                            class="text-zinc-500 transition-colors hover:text-zinc-900 group-hover:text-zinc-400" 
                            href={link.href}
                        >
                            {link.name}
                        </a>
                    {/each}
                </ul>
            </div>

            <button 
                class="md:hidden p-2 text-zinc-600 hover:bg-zinc-100 border rounded-full border-zinc-200 transition-colors"
                onclick={toggleMenu}
                aria-label="Toggle Menu"
            >
                {#if isOpen}
                    <X size={24} />
                {:else}
                    <Menu size={24} />
                {/if}
            </button>
        </div>

        {#if isOpen}
            <div transition:slide={{ duration: 300 }} class="md:hidden border-t border-zinc-100">
                <ul class="flex flex-col p-4 gap-4">
                    {#each navLinks as link}
                        <a 
                            class="text-zinc-500 font-medium hover:text-zinc-900 transition-colors" 
                            href={link.href}
                            onclick={() => isOpen = false}
                        >
                            {link.name}
                        </a>
                    {/each}
                </ul>
            </div>
        {/if}
    </div>
</nav>