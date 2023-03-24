<script>
	import './styles.css';
	import "../app.css";
	import Header from '../componets/+header.svelte';
</script>

<div class="app scroll-smooth">
	<Header></Header>
	<main>
		<slot />
	</main>
</div>
