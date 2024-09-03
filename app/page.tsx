import { Container, Filters, ProductCard, ProductListGroup, Title, TopBar } from "@/components/shared/index";

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
            <ProductListGroup title="Pizza" items={[{
              id:1,
              name:'Text',
              imageUrl:"https://media.dodostatic.net/image/r:292x292/11EEFB595A197C24BA932A0AD1144AFB.jpg",
              price:500,
              items:[{price:500}]
            },
            {
              id:2,
              name:'Text',
              imageUrl:"https://media.dodostatic.net/image/r:292x292/11EEFB595A197C24BA932A0AD1144AFB.jpg",
              price:500,
              items:[{price:500}]
            },
            {
              id:3,
              name:'Text',
              imageUrl:"https://media.dodostatic.net/image/r:292x292/11EEFB595A197C24BA932A0AD1144AFB.jpg",
              price:500,
              items:[{price:500}]
            },
            {
              id:4,
              name:'Text',
              imageUrl:"https://media.dodostatic.net/image/r:292x292/11EEFB595A197C24BA932A0AD1144AFB.jpg",
              price:500,
              items:[{price:500}]
            }]} categoryId={1}/>
             <ProductListGroup title="Combo" items={[{
              id:1,
              name:'Text',
              imageUrl:"https://media.dodostatic.net/image/r:292x292/11EEFB595A197C24BA932A0AD1144AFB.jpg",
              price:500,
              items:[{price:500}]
            },
            {
              id:2,
              name:'Text',
              imageUrl:"https://media.dodostatic.net/image/r:292x292/11EEFB595A197C24BA932A0AD1144AFB.jpg",
              price:500,
              items:[{price:500}]
            },
            {
              id:3,
              name:'Text',
              imageUrl:"https://media.dodostatic.net/image/r:292x292/11EEFB595A197C24BA932A0AD1144AFB.jpg",
              price:500,
              items:[{price:500}]
            },
            {
              id:4,
              name:'Text',
              imageUrl:"https://media.dodostatic.net/image/r:292x292/11EEFB595A197C24BA932A0AD1144AFB.jpg",
              price:500,
              items:[{price:500}]
            }]} categoryId={2}/>
          </div>
          
        </div>

        </div>
      </Container>  
    </>
  );
}
