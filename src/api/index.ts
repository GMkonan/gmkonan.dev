import fs from 'fs'
import { serialize } from 'next-mdx-remote/serialize'
import matter from 'gray-matter'
import prism from 'remark-prism'
import axios from 'axios'
import { Params } from 'next/dist/server/router'
import { ParsedUrlQuery } from 'querystring'

const getPosts = () => fs.readdirSync('./posts')
// make some better type system here
interface Article {
    content?: string
    data: {
        title?: string
        type?: string
        slug?: string
        description?: string
        publishedOn?: Date
    }
}

const getPostsDataDeprecated = () => {
    const articlesRaw = getPosts()

    const frontmatter = articlesRaw.map((articleRaw: any) => {
        const post = fs.readFileSync(`./posts/${articleRaw}`)
        const article = matter(post)
        return {
            title: article.data.title,
            type: article.data.type,
            slug: article.data.slug,
            description: article.data.description,
            publishedOn: article.data.publishedOn,
            content: article.content,
        }
    })
    return frontmatter
}

const getPostsBySlugdeprecated = async (params: any) => {
    const post = fs.readFileSync(`./posts/${params.slug}.mdx`)
    const article: any = matter(post)
    const mdxSource = await serialize(article.content) //mdxOptions with prism was substituted by prism-react-renderer
    const metadata = {
        title: article.data.title,
        type: article.data.type,
        slug: article.data.slug,
        description: article.data.description,
    }

    return {
        mdxSource,
        metadata,
    }
}

const getPostsBySlug = async (slug: string) => {
    const articleRaw = await axios
        .get(
            `https://api.github.com/repos/gmkonan/mostly-useless-guide/contents/articles/finished/${slug}`,
            {}
        )
        .then((res) => {
            // if(res.data.content) return
            let s = Buffer.from(res.data.content, 'base64')
            //console.log(s.toString())
            return s
        })

    const article = matter(articleRaw)
    //if (!article.data) return

    const metadata = {
        title: article.data.title,
        type: article.data.type,
        slug: article.data.slug,
        description: article.data.description,
        publishedOn: article.data.publishedOn,
        content: article.content,
    }
    const mdxSource = await serialize(article.content)
    return {
        mdxSource,
        metadata,
    }
}

const getPostsData = async () => {
    const articles = await axios
        .get(
            'https://api.github.com/repos/gmkonan/mostly-useless-guide/contents/articles/finished',
            {}
        )
        .then(async (res) => {
            return await res.data.map(async (mdData) => {
                //if (!mdData.content) return
                const article = await getPostsBySlug(mdData.name)
                return {
                    title: article.metadata.title,
                    type: article.metadata.type,
                    slug: article.metadata.slug,
                    description: article.metadata.description,
                    publishedOn: article.metadata.publishedOn,
                    content: article.mdxSource,
                }
            })
        })
    return articles
}

const getRecentPostsData = async () => {
    const articles = await getPostsData()
    return articles.sort((article, b) => b.publishedOn - article.publishedOn)
}

export { getPosts, getPostsBySlug, getPostsData, getRecentPostsData }
