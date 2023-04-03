<script>
	import './styles.css';
	import "../app.css";
	import Header from '../layouts/+header.svelte';
	import Footer from '../layouts/+footer.svelte';
</script>

<div class="app scroll-smooth">
	<Header></Header>
	<main class="pb-4">
		<slot />
	</main>
	<Footer/>
</div>
