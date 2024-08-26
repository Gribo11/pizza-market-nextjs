import { Container, Filters, Title, TopBar } from "@/components/shared/index";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="All pizzas" />
      </Container>
      <TopBar />
      <Container className="pb-14">
        <div className="flex gap-[60px]">
          <div className="w-[250px]">
            <Filters />
          </div>
        </div>

        <div className="flex-1">
          <div className="flex flex-col gap-16"></div>
        </div>
      </Container>
    </>
  );
}
