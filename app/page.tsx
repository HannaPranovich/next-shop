import {
  Container,
  Filters,
  ProductsGroupList,
  Title,
  TopBar,
} from "@/components/shared";

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
              <ProductsGroupList
                categoryName="Dresses"
                categoryId="categoryId-1"
                products={[
                  {
                    id: "Product-1",
                    name: "Product-1",
                    price: 12,
                    imageUrl: "",
                  },
                  {
                    id: "Product-2",
                    name: "Product-2",
                    price: 15,
                    imageUrl: "",
                  },
                  {
                    id: "Product-3",
                    name: "Product-3",
                    price: 8.4,
                    imageUrl: "",
                  },
                  {
                    id: "Product-4",
                    name: "Product-4",
                    price: 11,
                    imageUrl: "",
                  },
                  {
                    id: "Product-5",
                    name: "Product-5",
                    price: 20,
                    imageUrl: "",
                  },
                  {
                    id: "Product-6",
                    name: "Product-6",
                    price: 30,
                    imageUrl: " ",
                  },
                  {
                    id: "Product-7",
                    name: "Product-7",
                    price: 43,
                    imageUrl: "",
                  },
                  {
                    id: "Product-8",
                    name: "Product-8",
                    price: 26,
                    imageUrl: "",
                  },
                  {
                    id: "Product-9",
                    name: "Product-9",
                    price: 67,
                    imageUrl: "",
                  },
                  {
                    id: "Product-10",
                    name: "Product-10",
                    price: 11,
                    imageUrl: "",
                  },
                ]}
              />
              <ProductsGroupList
                categoryName="Top"
                categoryId="categoryId-2"
                products={[
                  {
                    id: "Product-12",
                    name: "Product-12",
                    price: 12,
                    imageUrl: "",
                  },
                  {
                    id: "Product-22",
                    name: "Product-22",
                    price: 15,
                    imageUrl: "",
                  },
                  {
                    id: "Product-32",
                    name: "Product-32",
                    price: 8.4,
                    imageUrl: "",
                  },
                  {
                    id: "Product-42",
                    name: "Product-42",
                    price: 11,
                    imageUrl: "",
                  },
                  {
                    id: "Product-52",
                    name: "Product-52",
                    price: 20,
                    imageUrl: "",
                  },
                  {
                    id: "Product-62",
                    name: "Product-62",
                    price: 30,
                    imageUrl: " ",
                  },
                  {
                    id: "Product-72",
                    name: "Product-72",
                    price: 43,
                    imageUrl: "",
                  },
                  {
                    id: "Product-82",
                    name: "Product-82",
                    price: 26,
                    imageUrl: "",
                  },
                  {
                    id: "Product-92",
                    name: "Product-92",
                    price: 67,
                    imageUrl: "",
                  },
                  {
                    id: "Product-102",
                    name: "Product-102",
                    price: 11,
                    imageUrl: "",
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
