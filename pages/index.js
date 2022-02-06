import Head from "next/head"
import {
  Center,
  Footer,
  Tag,
  Showcase,
  DisplaySmall,
  DisplayMedium,
} from "../components"
import { titleIfy, slugify } from "../utils/helpers"
import { fetchInventory } from "../utils/inventoryProvider"
import { products } from "../utils/product"
import CartLink from "../components/CartLink"
import Slider from "../components/Slider"
import ProductCollection from "../components/ProductCollection"
import { useState } from "react"

const Home = ({ inventoryData = [], categories: categoryData = [] }) => {
  const [bannerImgs, setBannerImgs] = useState([])
  const [collProducts, setCollProducts] = useState(products)
  const inventory = inventoryData.slice(0, 4)
  const categories = categoryData.slice(0, 2)
  return (
    <>
      <CartLink />
      <div className="container">
        <Head>
          <title>Jamstack ECommerce</title>
          <meta
            name="description"
            content="Jamstack ECommerce Next provides a way to quickly get up and running with a fully configurable ECommerce site using Next.js."
          />
          <meta property="og:title" content="Jamstack ECommerce" key="title" />
        </Head>
        <Slider bannerImgs={bannerImgs} />
        <ProductCollection
          collTitle={"New Arrival 😍"}
          collSubTitle={"Find the perfect piece or accessory to Gift."}
          collProducts={collProducts}
        />
        <ProductCollection
          collTitle={"Best Seller From Giftastic"}
          // collSubTitle={"Find the perfect piece or accessory to Gift."}
          collProducts={collProducts}
        />
        <ProductCollection
          collTitle={"Collection list"}
          collSubTitle={"Find the perfect piece or accessory to Gift."}
          collProducts={collProducts}
        />
      </div>
    </>
  )
}

export async function getStaticProps() {
  const inventory = await fetchInventory()

  const inventoryCategorized = inventory.reduce((acc, next) => {
    const categories = next.categories
    categories.forEach((c) => {
      const index = acc.findIndex((item) => item.name === c)
      if (index !== -1) {
        const item = acc[index]
        item.itemCount = item.itemCount + 1
        acc[index] = item
      } else {
        const item = {
          name: c,
          image: next.image,
          itemCount: 1,
        }
        acc.push(item)
      }
    })
    return acc
  }, [])

  return {
    props: {
      inventoryData: inventory,
      categories: inventoryCategorized,
    },
  }
}

export default Home
