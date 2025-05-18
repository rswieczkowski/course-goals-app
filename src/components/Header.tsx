import { PropsWithChildren } from 'react';

type HeaderProps = PropsWithChildren<{
  image: {
    src: string;
    alt: string;
  };
}>;

function Header({ image, children }: HeaderProps) {
  return (
    <div>
      <header>
        <img {...image} />

        {children}
      </header>
    </div>
  );
}

export default Header;
