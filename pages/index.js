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
import CartLink from "../components/CartLink"
import Slider from "../components/Slider"
import BasicCard from "../components/Card/BasicCards"

const Home = ({ inventoryData = [], categories: categoryData = [] }) => {
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
        <Slider />
        <div className="pt-10 pb-2 flex flex-col items-center">
          <h2 className="text-3xl mb-1">New Arrival 😍</h2>
          {/* <p className="text-gray-600 text-sm">
            Find the perfect piece or accessory to finish off your favorite room
            in the house.
          </p> */}
        </div>
        <div className="flex">
          <BasicCard
            title={"Rogue's Rise"}
            likes={3.5}
            price={299}
            mrp={599}
            image={
              "https://cdn.shopify.com/s/files/1/0535/3095/1834/products/51HyIzogZsL_360x.jpg?v=1613843062"
            }
          />
          <BasicCard
            title={"Rogue's Rise"}
            likes={3.5}
            price={299}
            mrp={599}
            image={
              "https://cdn.shopify.com/s/files/1/0535/3095/1834/products/nieuwe-fidget-speelgoed-popper-zintuigli_main-0_1_b7a198e1-72f2-4773-b6e3-f3bb6d70c43a_720x.jpg?v=1638200453"
            }
          />
          <BasicCard
            title={"Rogue's Rise"}
            likes={3.5}
            price={299}
            mrp={599}
            image={
              "https://cdn.shopify.com/s/files/1/0535/3095/1834/products/Rainbow-Popular-Peach-Heart-Squeeze-Bubble-Sensory-Toys-Adult-Children-Educational-Toys-Decompression-Toys-Logical-Thinking.jpg_q50_720x.jpg?v=1627728586"
            }
          />
          <BasicCard
            title={"Rogue's Rise"}
            likes={3.5}
            price={299}
            mrp={599}
            image={
              "https://cdn.shopify.com/s/files/1/0535/3095/1834/products/push-bubble-sensory-fidget-rainbow-autis_main-0_720x.jpg?v=1627728586"
            }
          />
        </div>
      </div>
      <div
        className="
        lg:my-8 lg:grid-cols-2
        grid-cols-1
        grid gap-4 my-4 
      "
      >
        <DisplayMedium
          imageSrc={categories[0].image}
          subtitle={`${categories[0].itemCount} items`}
          title={titleIfy(categories[0].name)}
          link={`/category/${slugify(categories[0].name)}`}
        />
        <DisplayMedium
          imageSrc={categories[1].image}
          subtitle={`${categories[1].itemCount} items`}
          title={titleIfy(categories[1].name)}
          link={`/category/${slugify(categories[1].name)}`}
        />
      </div>
      <div className="pt-10 pb-6 flex flex-col items-center">
        <h2 className="text-4xl mb-3">Trending Now</h2>
        <p className="text-gray-600 text-sm">
          Find the perfect piece or accessory to finish off your favorite room
          in the house.
        </p>
      </div>
      <div className="my-8 flex flex-col lg:flex-row justify-between">
        <DisplaySmall
          imageSrc={inventory[0].image}
          title={inventory[0].name}
          subtitle={inventory[0].categories[0]}
          link={`/product/${slugify(inventory[0].name)}`}
        />

        <DisplaySmall
          imageSrc={inventory[1].image}
          title={inventory[1].name}
          subtitle={inventory[1].categories[0]}
          link={`/product/${slugify(inventory[1].name)}`}
        />

        <DisplaySmall
          imageSrc={inventory[2].image}
          title={inventory[2].name}
          subtitle={inventory[2].categories[0]}
          link={`/product/${slugify(inventory[2].name)}`}
        />

        <DisplaySmall
          imageSrc={inventory[3].image}
          title={inventory[3].name}
          subtitle={inventory[3].categories[0]}
          link={`/product/${slugify(inventory[3].name)}`}
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
