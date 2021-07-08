import PageFooter from './PageFooter';
import PageHeader from './PageHeader';

function Layout({ children }) {
  return (
    <div className="bg-gray-100 font-serif min-h-screen pt-16 flex flex-col">
      <PageHeader />
      <main role="main">{children}</main>
      <PageFooter />
    </div>
  );
}

export default Layout;
