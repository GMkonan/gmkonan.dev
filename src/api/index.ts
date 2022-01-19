import fs from 'fs'
import { serialize } from 'next-mdx-remote/serialize'
import matter from 'gray-matter';
import prism from "remark-prism";

const getPosts = () => fs.readdirSync('./posts')

interface Article {
    content?: string,
    data: {
    title?: string,
    type?: string,
    slug?: string,
    description?: string,
    publishedOn?: Date,
    }
}

const getPostsData = () => {
    
    const articlesRaw = getPosts()
    
    const frontmatter = articlesRaw.map((articleRaw: any) => {
        const post = fs.readFileSync(`./posts/${articleRaw}`)
        const article = matter(post)  
        return ({
            title: article.data.title,
            type: article.data.type,
            slug: article.data.slug,
            description: article.data.description,
            publishedOn: article.data.publishedOn,
            content: article.content,
        })
    })
    return frontmatter
}

const getRecentPostsData = () => {
    const articles = getPostsData()
    
    return articles.sort((article, b) => b.publishedOn - article.publishedOn)

}

const getPostsBySlug = async (params:any) => {
    const post = fs.readFileSync(`./posts/${params.slug}.mdx`)
    const article:any = matter(post)
    const mdxSource = await serialize(article.content) //mdxOptions with prism was substituted by prism-react-renderer
    const metadata = {
        title: article.data.title,
        type: article.data.type,
        slug: article.data.slug,
        description: article.data.description,
    }

    return {
        mdxSource,
        metadata
    }
}

export {
    getPosts,
    getPostsBySlug,
    getPostsData,
    getRecentPostsData,
}