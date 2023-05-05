import { BreadCrumbs } from './Breadcrumbs';

export const PageHeader = ({ title, description, links }) => {
  return (
    <div className="page-header">
      <h2>{title}</h2>
      <p>{description}</p>
      {links && <BreadCrumbs links={links} />}
    </div>
  );
};
