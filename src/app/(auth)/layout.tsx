interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div>{children}</div>
    </div>
  );
};

export default Layout;
