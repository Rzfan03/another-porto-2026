<script>
    import { GetGithubData } from '$lib/github';
    import Navbar from '../components/Navbar.svelte';
    let githubPromise = GetGithubData();
    import { Mail } from 'lucide-svelte';
    import LogoGithub from "carbon-icons-svelte/lib/LogoGithub.svelte";
    import LogoInstagram from "carbon-icons-svelte/lib/LogoInstagram.svelte";
    import LogoFigma from "carbon-icons-svelte/lib/LogoFigma.svelte";
    import LogoReact from "carbon-icons-svelte/lib/LogoReact.svelte";
    import Icon from "@iconify/svelte";
    import bg from '../lib/assets/bg.gif'
    import sabalong from '../lib/assets/sabalong.png'
    import samalang from '../lib/assets/samalang.png'
    import around from '../lib/assets/aroundworld.png'
    import Footer from '../components/Footer.svelte';
    import MusicToggle from '../components/MusicToggle.svelte';
</script>

<div id="home" class="min-h-screen bg-white transition-colors duration-300">
    <Navbar />
    <MusicToggle/>
    
    <main class="w-full mt-5 max-w-2xl mx-auto pt-3 px-6">
        <!-- profile section -->
        <section>
            <div class="flex justify-center flex-col">
                {#await githubPromise}
                    <div class="animate-pulse mb-90">
                        <div class="h-36 bg-zinc-200 rounded-md w-full"></div>
                        <div class="w-full p-2 flex gap-4 flex-col relative -top-12">
                            <div class="flex items-center gap-5 max-md:gap-2">
                                <div class="rounded-full w-28 h-28 border-6 border-white bg-zinc-200"></div>
                                <div class="flex flex-col gap-2 mt-12">
                                    <div class="h-5 bg-zinc-200 rounded w-24"></div>
                                    <div class="h-4 bg-zinc-100 rounded w-32"></div>
                                    <div class="h-3 bg-zinc-100 rounded w-48"></div>
                                </div>
                            </div>
                            <div class="mt-3 space-y-2">
                                <div class="h-4 bg-zinc-200 rounded w-full"></div>
                                <div class="h-4 bg-zinc-200 rounded w-full"></div>
                                <div class="h-4 bg-zinc-200 rounded w-3/4"></div>
                            </div>
                            <div class="flex flex-col gap-3 mt-2">
                                <div class="h-3 bg-zinc-100 rounded w-40"></div>
                                <div class="h-3 bg-zinc-100 rounded w-32"></div>
                                <div class="h-3 bg-zinc-100 rounded w-36"></div>
                            </div>
                        </div>
                    </div>
                {:then data}
                <img class="object-cover h-36 rounded-md" src={bg} alt="bg"/>
                  <div class="w-full p-2 flex gap-4 flex-col relative -top-12">
                     <div class="flex items-center gap-5 max-md:gap-2">
                         <img class="rounded-full w-27 border-6 border-white" src={data.avatar_url || "https://avatars.githubusercontent.com/u/177092123?v=4"} alt="avatar"/>
                         <div class="flex flex-col gap-1 mt-12">
                            <div class="flex flex-col">
                                <p class="text-zinc-800 font-medium text-md">@Rzfan03</p>
                            </div>
                             <span class="text-xs text-zinc-500">Web Developer & Software Engineer</span>
                         </div>
                     </div>
                          <div class="mt-3">
                              <p class="text-sm text-zinc-600">
                                  Hi, I'm Rizqy Fajrul Syabani, a 16-year-old Software Engineer from Indonesia with a deep passion for building scalable systems and solving complex technical challenges.
                                  <br/>
                                  <br/>
                                  Ever since I started diving into the world of programming, I have been fascinated by the logic behind robust software and how code can be used to create efficient solutions. I am currently studying at SMKN 1 Sumbawa Besar, where I am sharpening my skills in algorithm design, system architecture, and full-stack development.
                                  <br/>
                                  <br/>
                                  Alongside my studies, I dedicate my time to exploring various backend technologies, optimizing performance, and learning the best practices of modern software engineering to build reliable and impactful applications.
                              </p>
                          </div>
                      <div class="flex flex-col gap-2">
                          <a class="flex items-center gap-2 text-xs text-zinc-500 cursor-pointer hover:underline" href="mailto:fajrulsyaban47@gmail.com"><Mail size={20} className="text-zinc-800"/>FajrulSyaban47@gmail.com</a>
                          <a class="flex items-center gap-2 text-xs text-zinc-500 cursor-pointer hover:underline" href="https://github.com/Rzfan03"><LogoGithub size={20} className="text-zinc-800"/>@Rzfan03</a>
                          <a class="flex items-center gap-2 text-xs text-zinc-500 cursor-pointer hover:underline" href="https://www.instagram.com/rzfan03/"><LogoInstagram size={20} className="text-zinc-800"/>@Rzfan03</a>
                      </div>
                  </div>
                {:catch error}
                <p class="text-shadow-red-600 flex justify-center items-center">Failed to Fetch Data!</p>
                {/await}
            </div>
        </section>
        <!-- end profile section -->
        
        <!-- skill section -->
        <section>
            <div class="border-t p-2 border-zinc-200/60">
                <p class="mt-4 text-lg font-medium">Skills</p>
                <div class="flex flex-col gap-6">
                    <p class="text-sm mt-4 text-zinc-600 flex flex-wrap items-center gap-2">
                        <span class="w-full sm:w-auto">Design Tools :</span>
                        <span class="flex items-center gap-2"><LogoFigma/> Figma</span>
                    </p>
                    <p class="text-sm text-zinc-600 flex flex-wrap items-center gap-x-3 gap-y-2">
                        <span class="w-full sm:w-auto">Development :</span>
                        <span class="flex items-center gap-2"><LogoReact/> React</span>
                        <span class="flex items-center gap-1"><Icon icon="lineicons:tailwindcss" class="text-xl"/> TailwindCSS</span>
                        <span class="flex items-center gap-1"><Icon icon="lineicons:svelte" class="text-xl"/> Svelte</span>
                        <span class="flex items-center gap-1"><Icon icon="lineicons:astro" class="text-xl"/> Astro</span>
                        <span class="flex items-center gap-1"><Icon icon="ri:nextjs-fill" class="text-xl"/> NextJS</span>
                    </p>
                    <p class="text-sm text-zinc-600 flex flex-wrap items-center gap-x-3 gap-y-2">
                        <span class="w-full sm:w-auto">Collaboration :</span>
                        <span class="flex items-center gap-1"><Icon icon="lineicons:github" class="text-xl"/> GitHub</span>
                        <span class="flex items-center gap-1"><Icon icon="lineicons:figma" class="text-xl"/> Figma</span>
                    </p>
                    <p class="text-sm text-zinc-600 flex flex-wrap items-center gap-2">
                        <span class="w-full sm:w-auto">Specialization :</span>
                        <span class="text-zinc-800 font-medium">Software Engineer</span>
                        <span class="text-zinc-400 hidden sm:inline">/</span>
                        <span class="text-zinc-800 font-medium">Web Developer</span>
                    </p>
                    <p class="text-sm text-zinc-600 flex flex-wrap items-center gap-2">
                        <span class="w-full sm:w-auto">Soft Skill :</span>
                        <span class="text-zinc-700">Deep-Focus</span>
                        <span class="text-zinc-700">Problem-Solving</span>
                        <span class="text-zinc-700">Self-Motivation</span>
                    </p>
                </div>
            </div>
        </section>
        <!-- end skills section -->
        
        <!-- project section -->
        <section id="projects">
            <div class="mt-12 border-t p-2 border-zinc-200/60">
                <p class="mt-4 text-lg font-medium">Projects</p>
                <!-- card 1 -->
               <div class="flex mt-8 overflow-hidden h-fit rounded-xl border border-zinc-300">
                   <img class="object-cover w-56 max-md:hidden" src={sabalong} alt="sabalong"/>
                   <div class="flex flex-col gap-2 p-6">
                       <a href="https://sabalong-ui.vercel.app/" class="text-lg font-medium underline cursor-pointer">SabalongUI</a>
                       <span class="text-wrap max-w-md text-sm text-zinc-600">
                           Sabalong UI is a collection of high-performance components desig...
                       </span>
                   </div>
               </div>
               
               <!-- card 2 -->
               <div class="flex mt-8 overflow-hidden h-fit rounded-xl border border-zinc-300">
                   <img class="object-cover w-56 max-md:hidden" src={samalang} alt="samalang"/>
                   <div class="flex flex-col gap-2 p-6">
                       <a id="projects" href="https://samalang.netlify.app/" class="text-lg font-medium underline cursor-pointer">SamaLang</a>
                       <span class="text-wrap max-w-md text-sm text-zinc-600">
                           Blending Lua's speed with the unique Samawa dialect. Lightw...
                       </span>
                   </div>
               </div>
               
               <!-- card 3 -->
               <div class="flex mt-8 overflow-hidden h-fit rounded-xl border border-zinc-300">
                   <img class="object-cover w-56 max-md:hidden" src={around} alt="around-world"/>
                   <div class="flex flex-col gap-2 p-6">
                       <a id="projects" href="https://aroundworldtravel.netlify.app/" class="text-lg font-medium underline cursor-pointer">AroundWorld</a>
                       <span class="text-wrap max-w-md text-sm text-zinc-600">
                           AroundWorld is the trusted community for modern luxury travellers.
                           F...
                       </span>
                   </div>
               </div>
            </div>
            <div class="flex mt-3 text-zinc-600 text-sm justify-center items-center">
                <a href="https://github.com/Rzfan03?tab=repositories">View More -></a>
            </div>
        </section>
        <!-- end project section -->
        
        <!-- education section -->
        <section>
            <div class="mt-12 border-t p-2 border-zinc-200/60">
                <p class="mt-4 text-lg font-medium">Education</p>
                <div class="flex flex-col gap-4 mt-6">
                   <div class="flex flex-col">
                       <p class="font-medium text-zinc-700">2024 - Present</p>
                       <span class="text-zinc-600">
                            Software Engineering
                       </span>
                       <span class="text-zinc-400">
                            SMKN 1 SUMBAWA BESAR
                       </span>
                   </div>
                </div>
            </div>
        </section>
        <!-- end education section -->
        
        <!-- blog section -->
        <section id="blog">
            <div class="mt-12 border-t p-2 border-zinc-200/60">
                <p class="mt-4 text-lg font-medium">Blog</p>
                <div class="flex flex-col gap-4 mt-6">
                   <a class="mt-2" href="https://blog-rzfan03.netlify.app/blog/editor-kesayangan-saya">
                       <p>8 Maret 2026</p>
                       <p class="font-medium underline">'Helix!' Code Editor Kesayangan saya</p>
                       <span class=" text-zinc-500">
                           Helix adalah code editor berbasis terminal mirip seperti vim, nvim dan kakoune. Kenapa saya mengunakan helix? ka...
                       </span>
                   </a>
                   <a class="mt-4" href="https://blog-rzfan03.netlify.app/blog/apa-itu-sabalongui">
                       <p>10 Februari 2026</p>
                       <p class="font-medium underline">Apa itu Sabalong UI?</p>
                       <span class=" text-zinc-500">
                           Singkat nya sabalong-ui adalah ui library yang saya buat khusus untuk react dan di khu...
                       </span>
                   </a>
                   <a class="mt-4" href="https://blog-rzfan03.netlify.app/blog/tools-yang-saya-gunakan-di-2026">
                       <p>9 Februari 2026</p>
                       <p class="font-medium underline">Tools yang saya gunakan di 2026</p>
                       <span class=" text-zinc-500">
                          Ini dia beberapa tools yang saya gunakan untuk development sehari-hari
                       </span>
                   </a>
                </div>
            </div>
            <div class="flex mt-4 text-zinc-600 text-sm justify-center items-center">
                <a href="https://blog-rzfan03.netlify.app/">View More -></a>
            </div>
        </section>
        <!-- end blog section -->
        <Footer/>
    </main>
</div>