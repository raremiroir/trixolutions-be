<script lang='ts'>
  // IMPORT TYPES
	import type { CookiePreferences } from '$src/lib/types/core';

  // IMPORT UTILS
  import { Button, Checkbox, Link, List, ListItem, Text } from '$comp';
  import { cookiePrefs } from '$lib/stores';

  // IMPORT I18N
  import LL, { locale } from '$i18n/i18n-svelte';
	import { RowWrap } from '../Forms/FormUtils';

	import { fade, slide } from 'svelte/transition';
	import Icon from '@iconify/svelte';

  export let isset = false;
  
  let expanded = isset ? false : true;
  $: expanded;
  
  const submitGDPR = async () => {
    expanded = false;
    
    await fetch('/api/cookie-prefs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify($cookiePrefs)
      })
      .then(res => {
        if (!res.ok) {
          throw new Error(res.statusText);
        } else {
          return res.json()
        }
      }).catch(err => {
        console.error(err);
      });
  }

  const declineAll = () => {
    $cookiePrefs.functional = true;
    $cookiePrefs.experience = false;
    submitGDPR();
  }

  const acceptAll = () => {
    $cookiePrefs.functional = true;
    $cookiePrefs.experience = true;
    submitGDPR();
  }

  const transition = "transition-all duration-200 ease-in-out"

  const btnGhost = {
    textNormalize: true,
    color: 'ghost',
    flat: true,
    size: 'md',
  }
  const btnOutline = {
    textNormalize: true,
    color: 'primary',
    outlined: true,
    flat: true,
    size: 'md',
  }
  const btnDefault = {
    textNormalize: true,
    color: 'primary',
    size: 'md',
  }

  let moreInfo = false;
  $: moreInfo;
  const toggleInfo = () => {
    moreInfo = !moreInfo;
  }
</script>

{#if !expanded}
  <div 
    in:fade={{ duration: 200, delay: 200 }}
    out:fade={{ duration: 200 }}
    role="button"
    title="{$LL.cookies_prefs.btns.settings()}"
    class="
        opacity-30 hover:opacity-60 
        fixed w-8 h-8
        { transition }
        rounded-full shadow-md
        z-99 left-5 bottom-5 group
        bg-primary-d1 hover:bg-primary-d3
        select-none cursor-pointer
        flex items-center justify-center
        " 
    on:click={() => expanded = true} 
    on:keydown={() => expanded = true}>
    <Icon
        icon="material-symbols:privacy-tip-outline-rounded"
        class="text-gray-50 group-hover:text-gray-100 h-5 w-5 { transition }"
    />
  </div>
{/if}


{#if expanded}
  <div 
    in:fade={{ duration: 200 }}
    out:fade={{ duration: 200, delay: 200 }}
    class='
      z-99 fixed bottom-8
      bg-white/70 hover:bg-white/90
      backdrop-blur-md
      { transition }
      left-1/2 -translate-x-1/2
      p-4 flex flex-col gap-6
      rounded-lg shadow-lg shadow-black/40
      w-3/4 lg:w-2/5'>
      <div class="flex w-full justify-between items-start">
        <span class="font-bold text-2xl text-primary-d2 border-b-2 border-primary-d2 w-fit pb-1">
          {$LL.cookies_prefs.title()}
        </span>
        <div 
          on:click={() => acceptAll()}
          on:keydown={() => acceptAll()} 
          class="{transition} bg-error opacity-30 hover:opacity-50 cursor-pointer rounded-full">
          <Icon
            icon="material-symbols:close-rounded"
            class="text-white h-4 w-4 m-auto"
          />
        </div>
      </div>

      {#if moreInfo}
        <div transition:slide>
          <Text>{@html $LL.cookies_prefs.text_more()}</Text>
          <List>
            <ListItem transp small>
              <span class="font-bold">{$LL.cookies_prefs.types[0].label()}</span>: {@html $LL.cookies_prefs.types[0].text()}
            </ListItem>
            <ListItem transp small>
              <span class="font-bold">{$LL.cookies_prefs.types[1].label()}</span>: {@html $LL.cookies_prefs.types[1].text()}
            </ListItem>
          </List>
          <Link
            href="/{$locale}/{$LL.nav.others.privacy_policy.slug()}"
            linkStyle="underline" size="sm"
            class="text-primary-d2 hover:text-primary-d1"
            ariaLabel={$LL.cookies_prefs.btns.view_policy()}
            >{$LL.cookies_prefs.btns.view_policy()}</Link>
        </div>
      {/if}

      {#if !moreInfo}
        <div transition:slide={{delay: 100}}><Text>{@html $LL.cookies_prefs.text()}</Text></div>
      {/if}

      <form class="flex flex-col items-start justify-center w-full gap-4">
        <div class="flex items-center justify-start gap-4">
            <Checkbox size="sm" disabled
              name='functional' bind:checked={$cookiePrefs.functional}>
              {$LL.cookies_prefs.types[0].label()}
            </Checkbox>
            <Checkbox size="sm"
              name='experience' bind:checked={$cookiePrefs.experience}>
              {$LL.cookies_prefs.types[1].label()}
            </Checkbox>
        </div>

        <div class="flex items-center justify-between w-full">
          <!-- More info -->
          <div 
            on:click={() => toggleInfo()}
            on:keydown={() => toggleInfo()}>
            <Button {...btnGhost}
              ariaLabel="{$LL.cookies_prefs.btns.more_info_tip()}" icon="material-symbols:info-outline-rounded">
              {#if moreInfo}
                {$LL.cookies_prefs.btns.less_info()}
              {:else}
                {$LL.cookies_prefs.btns.more_info()}
              {/if}
            </Button>
          </div>
    
          <div class="flex items-center gap-4">
            <!-- Decline -->
            <div 
              on:click={() => declineAll()}
              on:keydown={() => declineAll()}>
              <Button {...btnGhost}
                type="submit"
                ariaLabel="{$LL.cookies_prefs.btns.decline_tip()}" icon="ic:round-close">
              {$LL.cookies_prefs.btns.decline()}
              </Button>
            </div>
            <!-- Continue -->
            <div 
              on:click={() => submitGDPR()}
              on:keydown={() => submitGDPR()}>
              <Button {...btnOutline}
                type="submit"
                ariaLabel="{$LL.cookies_prefs.btns.save_tip()}" icon="ic:round-login">
                {$LL.cookies_prefs.btns.save()}
              </Button>
            </div>
            <!-- Accept -->
            <div
              on:click={() => acceptAll()}
              on:keydown={() => acceptAll()}>
              <Button {...btnDefault}
                type="submit"
                ariaLabel="{$LL.cookies_prefs.btns.accept_tip()}" icon="ic:round-check">
                <span class="ml-1">{$LL.cookies_prefs.btns.accept()}</span>
              </Button>
            </div>
          </div>
    
        </div>
      </form>

  </div>
{/if}