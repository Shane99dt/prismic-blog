import * as prismic from '@prismicio/client'

// Fill in your repository name
export const repositoryName = 'prismic-blog-dt'

export const client = prismic.createClient(repositoryName, {
  // If your repository is private, add an access token
  accessToken: 'MC5ZejdLSGhBQUFDa0FiNzE2.KX1FMArvv73vv73vv73vv73vv73vv71M77-977-9Vu-_ve-_vQMK77-977-9Su-_ve-_ve-_vV8obBfvv70477-9',

  routes: [
    {
      type: 'article',
      path: '/',
    },
  ],
})