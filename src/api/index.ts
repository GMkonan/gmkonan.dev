import fs from 'fs'
import { serialize } from 'next-mdx-remote/serialize'
import matter from 'gray-matter';
import prism from "remark-prism";

const getPosts = () => fs.readdirSync('./posts')

const getPostsData = () => {
    
    const articlesRaw = getPosts()
    
    const frontmatter = articlesRaw.map((articleRaw: any) => {
        const post = fs.readFileSync(`./posts/${articleRaw}`)
        const article:any = matter(post)  
        console.log(article)  
        return ({
            title: article.data.title,
            type: article.data.type,
            slug: article.data.slug,
            description: article.data.description,
            content: article.content,
        })
    })
    return frontmatter
}

const getPostsBySlug = async (params:any) => {
    const post = fs.readFileSync(`./posts/${params.slug}.mdx`)
    const article:any = matter(post)
    const mdxSource = await serialize(article.content, {mdxOptions: {remarkPlugins: [prism]}})
    return mdxSource
}

export {
    getPosts,
    getPostsBySlug,
    getPostsData
}