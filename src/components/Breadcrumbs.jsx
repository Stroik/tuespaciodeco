import Link from 'next/link';

export const BreadCrumbs = ({ links }) => {
  return (
    <div className="breadcrumbs">
      <ol>
        {links.map((link, index) => (
          <li key={index}>
            <Link href={link.href}>{link.title}</Link>
          </li>
        ))}
      </ol>
    </div>
  );
};
