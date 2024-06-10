import Link from 'next/link'
import { siteConfig } from '@/lib/config'
// import SocialButton from './SocialButton'

const Footer = ({ title }) => {
  const LINKS = [
    {
      name: '关于',
      href: '/about'
    },
    {
      name: '友链',
      href: '/links'
    },
    {
      name: '赞助',
      // icon: <HeartIcon className="w-5 h-5 inline-block mb-1 group-hover:text-red-500" />,
      href: '/sponsors'
    },
    {
      name: '免责',
      href: '/disclaimer'
    }
  ]

  const d = new Date()
  const currentYear = d.getFullYear()
  const since = siteConfig('SINCE')
  const copyrightDate =
    parseInt(since) < currentYear ? since + '-' + currentYear : currentYear

  return (
    <footer className='mt-8 relative flex-shrink-0 bg-gray-100 dark:bg-[#1a191d] justify-center text-center m-auto w-full leading-6  text-gray-600 dark:text-gray-100 text-sm'>
        <div>
          <ul className="flex flex-row justify-center items-center my-4">
            {LINKS.map((item) => (
              <li key={item.name} className="mx-4 group">
                <Link
                  href={item.href}
                  className="hover:text-gray-600 dark:hover:text-gray-300"
                >
                  {item.icon && item.icon}
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="my-4 leading-6 text-xs">
          <div className="flex align-baseline justify-center flex-wrap">
            <p className="mr-4">
              &copy; {siteConfig.author} {copyrightDate}
            </p>
            <p>
              本站原创内容基于
              <a href="http://creativecommons.org/licenses/by-nc-nd/4.0/?ref=chooser-v1" target="_blank"
                rel="license noopener noreferrer" className="hover:underline" >
                CC BY-NC-ND 4.0
              </a>
              共享
            </p>
          </div>
        </div>
    </footer>
  )
}

export default Footer
