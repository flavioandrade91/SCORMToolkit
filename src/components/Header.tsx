import images from '../data/images';

interface HeaderProps {
  title: string;
}

export function Header({ title }: HeaderProps) {
  return (
    <header
      className="
       col-span-12
       font-roboto-condensed   
       w-full h-auto
       bg-cover
       bg-no-repeat
       bg-top
       mt-0
    ">
      <h1 className="text-red">dasdasdasd</h1>
    </header>
  );
}
