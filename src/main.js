import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'DEVELOPER',
		isOpen: true,
	}
});

export default app;