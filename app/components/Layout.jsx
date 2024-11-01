import PageFooter from './PageFooter';
import PageHeader from '../../components/PageHeader';

function Layout({ children }) {
  return (
    <div className="selection:text-shadow-none flex min-h-screen flex-col bg-stone-100 pt-16 font-serif selection:bg-primary-light selection:text-stone-50">
      <PageHeader />
      <main>{children}</main>
      <PageFooter />
    </div>
  );
}

export default Layout;
