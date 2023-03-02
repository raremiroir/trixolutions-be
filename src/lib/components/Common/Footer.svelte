<script>
   import { Image, Logo } from "$src/lib/components";

   import { Link } from "$comp";
	import Icon from "@iconify/svelte";

   // Import i18n
   import LL, { locale } from "$i18n/i18n-svelte";
	import { titleCase } from "$utils";
	import BackToTop from "./BackToTop.svelte";


   $: socialMediaItems = [
      {
         title: 'LinkedIn',
         link: 'https://be.linkedin.com/company/trixolutions---business-training-consulting-&-recruitment',
         icon: 'mdi:linkedin'
      },
      {
         title: 'Facebook',
         link: 'https://www.facebook.com/people/trixolutions/100065334466305/?paipv=0&eav=AfbqMx7WZnqAY8xcvRH0Tvk6dBmrc7pFxDTz04b7dmxtHEyidCzPCHvVtNz6U8Yh4C4&_rdr',
         icon: 'ri:facebook-box-fill'
      }
   ]
   $: footerColItems = [
      {
         title: titleCase($LL.base.btn.about_trixo()),
         items: [
            {
               title: $LL.nav.about.title(),
               link: $LL.nav.about.slug()
            },
            {
               title: $LL.nav.contact.title(),
               link: $LL.nav.contact.slug()
            },
         ]
      },
      {
         title: titleCase($LL.base.footer.open_workshops()),
         items: [
            {
               title: $LL.nav.open_sessions.items.info_sessions.title(),
               link: $LL.nav.open_sessions.items.info_sessions.slug()
            },
            {
               title: $LL.nav.open_sessions.items.hybrid_traject.title(),
               link: $LL.nav.open_sessions.items.hybrid_traject.slug()
            },
            {
               title: $LL.nav.open_sessions.items.deepdive.title(),
               link: $LL.nav.open_sessions.items.deepdive.slug()
            },
         ]
      },
      {
         title: titleCase($LL.base.footer.more_about_us()),
         items: [
            {
               title: $LL.nav.others.job_offers.title(),
               link: $LL.nav.others.job_offers.slug()
            },
            {
               title: $LL.nav.others.terms_conditions.title(),
               link: $LL.nav.others.terms_conditions.slug()
            },
            {
               title: $LL.nav.others.terms_kmo.title(),
               link: $LL.nav.others.terms_kmo.slug()
            },
            {
               title: $LL.nav.others.privacy_policy.title(),
               link: $LL.nav.others.privacy_policy.slug()
            },
         ]
      },
   ]
   $: footerColItems;

   let partnersImages = [
      {
         alt: 'mbti',
         src: 'partners/mbti.png',
      },
      {
         alt: 'discovery insights',
         src: 'partners/discovery-insights.png',
      },
      {
         alt: 'working genius certified',
         src: 'partners/working-genius-certified.webp',
      },
      {
         alt: 'capa pro member',
         src: 'partners/capa-pro.png',
      },
      {
         alt: 'dics',
         src: 'partners/dics.png',
      },
      {
         alt: 'kmo portfolio',
         src: 'partners/kmo-portfolio.png',
      }
      
   ]
</script>

<BackToTop />

<!-- Footer -->
<footer class="px-4 bg-gray-700 text-gray-100">
	<div class="container w-5/6 flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">

		<div class="lg:w-1/4 xl:w-1/5">
			<a rel="noopener noreferrer" href="/" class="flex justify-center space-x-3 lg:justify-start">
				<Logo color="fill-gray-100/80" xcolor="fill-gray-300/80"/>
			</a>
		</div>

		<div class="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-3/4 xl:w-4/5 sm:grid-cols-4">
         <div class="space-y-3">
				<div class="uppercase dark:text-gray-50">{$LL.base.footer.social_media()}</div>
				<div class="flex justify-start space-x-3 !mb-6">
               {#each socialMediaItems as item}
                  <Link
                     color="text-gray-100/80"
                     rel="noopener noreferrer" target="_blank"
                     title={item.title} ariaLabel={item.title} 
                     href={item.link} class="flex items-center">
                     <Icon icon={item.icon} class="w-8 h-8 fill-gray-100/80" />
                  </Link>
               {/each}
				</div>
            <Link
               color="text-gray-100/80"
               target="_blank"
               title={$LL.base.footer.other_site()}
               ariaLabel={$LL.base.footer.other_site()} 
               href="https://trixolutions.nl">
               {$LL.base.footer.other_site()}
            </Link>
			</div>
         {#each footerColItems as col_item}
            <div class="space-y-3">
               <h3 class="tracking-wide uppercase dark:text-gray-50">{col_item.title}</h3>
               <ul class="space-y-1">
                  {#each col_item.items as item}
                     <li>
                        <Link
                           color="text-gray-100/80"
                           rel="noopener noreferrer"
                           title={item.title} ariaLabel={item.title} 
                           href="/{$locale}/{item.link}">
                           {String(item.title)}
                        </Link>
                     </li>
                  {/each}
               </ul>
            </div>
         {/each}
		</div>
	</div>
   <div class="w-5/6 mx-auto py-4 flex flex-row justify-between border-b border-gray-600">

      {#each partnersImages as item}
         <Image 
            src={item.src}
            alt={item.alt}
            class="group"
            imgClass="
               w-auto h-full 
               max-h-24 mx-auto
               transition-all duration-200 ease-in-out 
               opacity-70 group-hover:opacity-100"
         />
      {/each}

   </div>
	<div class="py-6 text-sm text-center dark:text-gray-400">
      <Link
         href="https://mistmedia.be/{$locale}"
         title="{$LL.base.btn.go_to()} Mist Media Website"
         ariaLabel="{$LL.base.btn.go_to()} Mist Media Website" 
         color="text-gray-300/80" 
         target="_blank">
         © Trixolutions.be 2023 - {$LL.base.footer.creator()}
      </Link>
   </div>
</footer>