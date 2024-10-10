import {
  Container,
  Filters,
  ProductsGroupList,
  Title,
  TopBar,
} from "@/components/shared";

const mockedData = [
  {
    id: "1",
    name: "Product-1",
    price: 12,
    imageUrl: "/sneakers/sneakers-1.jpg",
  },
  {
    id: "2",
    name: "Product-2",
    price: 15,
    imageUrl: "/sneakers/sneakers-2.jpg",
  },
  {
    id: "3",
    name: "Product-3",
    price: 8.4,
    imageUrl: "/sneakers/sneakers-3.jpg",
  },
  {
    id: "4",
    name: "Product-4",
    price: 11,
    imageUrl: "/sneakers/sneakers-4.jpg",
  },
  {
    id: "5",
    name: "Product-5",
    price: 20,
    imageUrl: "/sneakers/sneakers-5.jpg",
  },
  {
    id: "6",
    name: "Product-6",
    price: 30,
    imageUrl: "/sneakers/sneakers-6.jpg",
  },
  {
    id: "7",
    name: "Product-7",
    price: 43,
    imageUrl: "/sneakers/sneakers-7.jpg",
  },
  {
    id: "8",
    name: "Product-8",
    price: 26,
    imageUrl: "/sneakers/sneakers-8.jpg",
  },
  {
    id: "9",
    name: "Product-9",
    price: 67,
    imageUrl: "/sneakers/sneakers-9.jpg",
  },
  {
    id: "10",
    name: "Product-10",
    price: 11,
    imageUrl: "/sneakers/sneakers-10.jpg",
  },
];

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="All products" size="lg" className="font-extrabold" />
      </Container>
      <TopBar />
      <Container className="pb-14 mt-10">
        <div className="flex gap-[60px]">
          <div className="w-[250px] ">
            <Filters />
          </div>
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupList products={mockedData} title="Products List" />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
