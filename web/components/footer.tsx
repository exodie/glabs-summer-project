import { Link } from "@nextui-org/link";
import packageJson from '@/package.json'

export const Footer = () => {
  return (
    <footer className="w-full flex items-center justify-center py-3">
      <span className="text-default-600">Создано&nbsp;</span>
      <Link
        isExternal
        className="flex items-center gap-1 text-current"
        href="https://github.com/exodie"
      >
        <p className="text-primary">@exodie</p>
      </Link>
      <span>&nbsp;&&nbsp;</span>
      <Link
        isExternal
        className="flex items-center gap-1 text-current"
        href="https://github.com/bracerr"
      >
        <p className="text-primary">@Bracerr</p>
      </Link>

      <span>&nbsp;v: {packageJson.version}</span>
    </footer>
  );
};
