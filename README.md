# My website

- [x] create _document file
- [x] pass brand colors to tailwind config
- [x] check best way for layout implementation without making a mess in Home
- [ ] pass global jsx style to separate layout file in common AND use to wrap _app or index
  Take a look at this: https://nextjs.org/blog/styling-next-with-styled-jsx
- [ ] create rest of the home page layout in figma.
- [ ] create the layout of the blog part in figma using the ideas below.
### IF needed...
```
<style global jsx>{`
    html,
    body,
    #__next {
      height: 100vh;
      overflow: hidden;
      margin: 0;
      padding: 0;
    }
`}</style>
```
## blog
For now the blog part of this idea will be like this:

### design
I think the design should be inspired in josh's website. The way he presents the articles is pretty good.
The actual article should be displayed in the center of the screen with information (like titles and subtitles)
being displayed in the sides. 
## Links
- [posts](https://github.com/renatorib/posts)
- [github-blog library](https://github.com/renatorib/github-blog)
- [josh's website](https://www.joshwcomeau.com/css/designing-shadows/)