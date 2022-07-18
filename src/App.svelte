<script>
	import { Router, Route, link } from "svelte-navigator";
	import Home from "./components/Home.svelte";

	export let name;
	let show='';
	let isShow='';
	function greeting()
	{
		show = show=='show' ? '' : 'show';
	}
	function menuKanan()
	{
		isShow = isShow=='show' ? '' : 'show';
	}
</script>

<div class="container-fluid ">

	<nav class="navbar navbar-expand-lg navbar-dark bg-danger">
		<div class="container-fluid">
			<a class="navbar-brand" href="/">Backoffice</a>
			<button
				class="navbar-toggler"
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span class="navbar-toggler-icon" />
			</button>
			<div class="collapse navbar-collapse" id="navbarSupportedContent">
				<ul class="navbar-nav me-auto mb-2 mb-lg-0">
					<li class="nav-item">
						<a class="nav-link active" aria-current="page" href="/"
							><i class="fa fa-home fa-lg"></i></a
						>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="/about" use:link>Tentang</a>
					</li>
					<li class="nav-item dropdown">
						<a
							class="nav-link dropdown-toggle"
							href="/"
							id="navbarDropdown"
							role="button"
							data-bs-toggle="dropdown"
							aria-expanded="false"
							on:click|preventDefault="{greeting}"
						>
							Dropdown
						</a>
						<ul
							class="dropdown-menu {show}"
							aria-labelledby="navbarDropdown"
						>
							<li on:click|preventDefault="{show=false}">
								<a class="dropdown-item" href="/article" use:link>Article</a>
							</li>
							<li>
								<a class="dropdown-item" href="/card" use:link
									>Card</a
								>
							</li>
							<li><hr class="dropdown-divider" /></li>
							<li>
								<a class="dropdown-item" href="/"
									>Something else here</a
								>
							</li>
						</ul>
					</li>
					<li class="nav-item">
						<a
							class="nav-link disabled"
							href="/"
							tabindex="-1"
							aria-disabled="true"
							
							>Disabled</a>						
					</li>
				</ul>
				<form class="d-flex">
					<input
						class="form-control me-2"
						type="search"
						placeholder="Search"
						aria-label="Search"
					/>
					<button class="btn btn-outline-success" type="submit"
						>Search</button
					>
				</form>
				<ul class="navbar-nav  me-0 mb-2 mb-lg-0">
					<li class="nav-item dropdown">
						<a
							class="nav-link dropdown-toggle"
							href="/"
							id="navbarDropdown"
							role="button"
							data-bs-toggle="dropdown"
							aria-expanded="false"
							on:click|preventDefault="{menuKanan}"
						>
							Selamat Datang Pengguna
						</a>
						<ul
							class="dropdown-menu {isShow}"
							aria-labelledby="navbarDropdown"
						>
							<li>
								<a class="dropdown-item" href="/" >Action</a>
							</li>
							<li>
								<a class="dropdown-item" href="/"
									>Another action</a
								>
							</li>
							<li><hr class="dropdown-divider" /></li>
							<li>
								<a class="dropdown-item" href="/"
									>Something else here</a
								>
							</li>
						</ul>
					</li>
				</ul>
			</div>
		</div>
	</nav>
</div>

<div class="container">
	
	<Router>	
	<Route path="about" component="{Home}">
		<h3>Tentang</h3>
		<p>Cerita tentang page ini</p>
	</Route>

	<Route path="/card"> 
		<h3>Kartu</h3>
	</Route>
	<Route path="/article">
		<h3>Artikel</h3>
		<p>Artikel hari ini ini</p>
	</Route>
	<Route path="/profile">
		<h3>Profile</h3>
		<p>Selamat datang di halaman profile</p>
	</Route>

	<h1>Hello {name}</h1>
</Router>
</div>

<style>
	@import url("https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css");
</style>
