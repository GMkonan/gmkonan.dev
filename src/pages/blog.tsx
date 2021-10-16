import tw, { css } from 'twin.macro';
import { NextPage } from "next";
import Layout from "src/common/layouts/layout";


const Blog: NextPage = () => {

    return(
        <Layout>
            <div tw="flex flex-col justify-center" css={[`width: 800px; margin: 0 auto;`]}>
                <section css={['width: fit-content; margin-top: 150px;']}>
                    <h1>Title</h1>
                </section>
                <section tw="flex">
                    <article css={['width: 400px; height: 250px;']}>
                        stuff
                    </article>
                    <article css={['width: 400px; height: 250px;']}>
                        stuff
                    </article>
                    <article css={['width: 400px; height: 250px;']}>
                        stuff
                    </article>
                    <article css={['width: 400px; height: 250px;']}>
                        stuff
                    </article>
                </section>
            </div>
        </Layout>
    );
}

export default Blog;