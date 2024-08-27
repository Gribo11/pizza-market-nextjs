import { Container, Filters, ProductCard, Title, TopBar } from "@/components/shared/index";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="All pizzas" />
      </Container>

      <TopBar />

      <Container className="mt-14 pb-14">
        <div className="flex gap-[60px]">
          <div className="w-[250px]">
            <Filters />
          </div>


        <div className="flex-1">
          <div className="flex flex-col gap-16">
            <ProductCard id={1} name='text' price={500} imageUrl="https://media.dodostatic.net/image/r:292x292/11EEFB595A197C24BA932A0AD1144AFB.jpg"/>
          </div>
        </div>

        </div>
      </Container>  
    </>
  );
}
