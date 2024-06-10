import { siteConfig } from '@/lib/config'
// import { useGlobal } from '@/lib/global'
// import Link from 'next/link'
import Image from 'next/image'
// import { useRouter } from 'next/router'
// import { useEffect, useState } from 'react'
import CONFIG from '../config'

/**
 * 版权声明
 * @returns
 */
export default function PostCopyright() {
  // const router = useRouter()
  // const [path, setPath] = useState(siteConfig('LINK') + router.asPath)
  // useEffect(() => {
  //   setPath(window.location.href)
  // })

  // const { locale } = useGlobal()

  if (!siteConfig('HEO_ARTICLE_COPYRIGHT', null, CONFIG)) {
    return <></>
  }

  return (
    <section className='dark:text-gray-300 mt-6 mx-1 '>
      <div className="mt-5 mb-10 bg-gray-100 rounded p-3 px-5 flex flex-col md:flex-row justify-between">
        <div className="w-6/12 hidden md:flex flex-col justify-between">
          <div>
            <p className="text-gray-800 dark:text-gray-100">作者：{siteConfig.author}</p>
            <p className="text-gray-500 dark:text-gray-400 mt-1 text-sm">{siteConfig.authorDesc}</p>
          </div>
          <p className="text-gray-500 dark:text-gray-400 mt-1 text-sm italic">欢迎订阅公众号，获得及时推送，如果觉得文章有用，不妨给博主一些赞赏 👉</p>
        </div>
        <div>
          <Image
            className="mx-auto mb-2"
            src="https://assets.innomad.io/wechat-pub.png"
            width={150}
            height={150}
            alt={`给${siteConfig.author}打赏`}
          />
          <p className="text-center text-gray-500 dark:text-gray-400 text-sm">
            订阅微信公众号
          </p>
        </div>
        <div className="mt-4 md:mt-0">
          <Image
            className="mx-auto mb-2"
            src="https://assets.innomad.io/appreciate-qr.png"
            width={150}
            height={150}
            alt={`给${siteConfig.author}打赏`}
          />
          <p className="text-center text-gray-500 dark:text-gray-400 text-sm">
            使用微信扫码赞助此文
          </p>
        </div>
      </div>
    </section>
  )
}
