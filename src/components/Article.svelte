<script>
    import urlSlug from "url-slug";
    import { format } from "timeago.js";
    import { blogs } from "../models/blogs";
    import NotFound from "../components/NotFound.svelte";

    export let params = {};
    let article;

    blogs.forEach((blog, index) => {
      if (params.title === urlSlug(blog.title)) {
        article = blog;
      }
    });
</script>

{#if article}
    <div>
        <h1>{article.title}</h1>
        <p>Published: {format(article.publishDate)}</p>
        <img src={article.image} alt="img">
        <p>{article.content}</p>
    </div>
{:else}
    <NotFound/>
{/if}

<style>
    img {
      max-width: 100%;
    }

    p {
      text-align: justify;
    }
</style>