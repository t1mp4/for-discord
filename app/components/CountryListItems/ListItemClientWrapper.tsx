'use client';

// https://beta.nextjs.org/docs/rendering/server-and-client-components#importing-server-components-into-client-components

const ListItemClientWrapper = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default ListItemClientWrapper;
