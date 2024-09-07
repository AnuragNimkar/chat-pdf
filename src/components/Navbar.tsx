import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { Link } from 'react-router-dom';

const navigation = [
  { name: 'ChatPDF', to: '/', current: true },
  { name: 'Login', to: '/login', current: false },
  { name: 'Sign Up', to: '/signup', current: false },
  { name: 'AI PDF', to: '/aipdf', current: false },
];

function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(' ');
}

export default function Example() {
  return (
    <Disclosure as="nav" className="bg-white-800" style={{ borderBottom:"1px solid #9ca3af"}}>
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex items-center justify-start flex-1">
            <div className="flex-shrink-0">
              <img
                alt="Your Company"
                src=""
                className="h-8 w-auto"
              />
            </div>
          </div>

          <div className="hidden sm:flex sm:items-center sm:justify-end flex-1">
            <div className="flex space-x-10">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  aria-current={item.current ? 'page' : undefined}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-black-300 hover:bg-gray-700 hover:text-white',
                    'rounded-md px-3 py-2 text-sm font-medium',
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.to}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                'block rounded-md px-3 py-2 text-base font-medium',
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
