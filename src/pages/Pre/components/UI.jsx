import { atom, useAtom } from "jotai";

export const pageAtom = atom(0);
export const pages = [
  {
    front: "cover",
    back: "preFoto(1)",
  },
];
for (let i = 2; i < 20 - 1; i += 2) {
  pages.push({
    front: `preFoto(${i % 20})`,
    back: `preFoto(${(i + 1) % 20})`,
  });
}

pages.push({
  front: "preFoto(60)",
  back: "back",
});

console.log(pages)

export const UI = () => {
  const [page, setPage] = useAtom(pageAtom);

  return (
    <>
      <main className=" pointer-events-none select-none z-10 fixed  inset-0  flex justify-between flex-col">
      <a
          className="pointer-events-auto mt-10 ml-10"
          href=""
      >
          <img className="w-20" src="./textures/logo.png" />
      </a>
      </main>

      <div className="fixed inset-0 flex items-center -rotate-2 select-none">
      <div className="relative">
          <div className="bg-white/0  animate-horizontal-scroll flex items-center gap-8 w-max px-8">
          </div>
      </div>
      </div>
    </>
  );
};
