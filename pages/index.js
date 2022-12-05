import Link from "next/link"

const index = () => { 
  return (
      <div>
          <h1>This is home page</h1>
          <ul>
              <li>
                  <Link href="/portfolio">Portfolio</Link>
              </li>
              <li>
                  <Link href="clients">ClientPage</Link>
              </li>
          </ul>
    </div>
  )
}

export default index