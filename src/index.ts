import nodeHtmlToImage from 'node-html-to-image'

import getGraph from './fetch/getGraph'

import makeBanner from './makeBanner'

import updateProfileBanner from './updateProfile'

import { username, title, from } from './env'

const main = async () => {
  if (!username) throw Error('Cannot read "USERNAME" environment variable')

  const document = await getGraph(username, from)
  const html = makeBanner(document, title)

  const output = await nodeHtmlToImage({ html })

  if (!(output instanceof Buffer))
    throw Error('Generated image type is not Buffer')

  await updateProfileBanner(output)
}

main().catch((e) => console.error(e))
