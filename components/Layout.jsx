import PageFooter from './PageFooter';
import PageHeader from './PageHeader';

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen pt-16 font-serif bg-gray-100 selection:bg-primary-light selection:text-gray-50">
      <PageHeader />
      <main>{children}</main>
      <PageFooter />
    </div>
  );
}

export default Layout;
