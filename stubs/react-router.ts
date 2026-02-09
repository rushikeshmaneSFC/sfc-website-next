// Minimal React Router stubs for build-time compatibility in Next.js.
// These are temporary and will be removed once routing is fully migrated.

export const useNavigate = () => {
  return (..._args: any[]) => {};
};

export const useLocation = () => {
  return { pathname: "" } as any;
};

export const Outlet = (_props: any) => null;

