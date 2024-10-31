import PageFooter from './PageFooter';
import PageHeader from './PageHeader';

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen pt-16 font-serif bg-stone-100 selection:bg-primary-light selection:text-stone-50 selection:text-shadow-none">
      <PageHeader />
      <main>{children}</main>
      <PageFooter />
    </div>
  );
}

export default Layout;
