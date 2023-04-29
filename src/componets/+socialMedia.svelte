<script lang="ts">
    import type { SocialMedia } from '../lib/socialMedia'

    export let social: SocialMedia;
</script>

<a href={social.link} title={social.name} class="transition hover:-translate-y-1 hover:scale-105">
    <svg class="fill-slate-600 w-6 h-6">
        {@html social.icon}
    </svg>
</a>