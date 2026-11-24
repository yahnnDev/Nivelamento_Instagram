// #region AUXILIAR FUNCTIONS
function MenuItem({ item }) {
  return (
    <button
      type="button"
      aria-label={item.label}
      className="flex h-12 w-full shrink-0 cursor-pointer items-center rounded-lg px-3 text-left transition-colors hover:bg-zinc-100"
    >
      <span className="flex w-10 shrink-0 items-center justify-center">
        {item.icon}
      </span>

      <span className="ml-3 whitespace-nowrap opacity-0 transition-opacity group-hover:opacity-100 group-focus-within:opacity-100">
        {item.label}
      </span>
    </button>
  );
}
// #endregion

export default function SidebarNavigation({
  brandIcon,
  items,
  createItem,
  moreItem,
}) {
  return (
    <nav
      aria-label="Navegação principal"
      className="group sticky top-0 flex h-screen w-[72px] flex-col overflow-x-hidden bg-white py-6 transition-[width] duration-200 hover:w-[240px] focus-within:w-[240px]"
    >
      <a
        href="/"
        aria-label="Instagram - página inicial"
        className="mb-28 flex h-12 shrink-0 items-center px-3"
      >
        <span className="flex w-10 shrink-0 items-center justify-center">
          {brandIcon}
        </span>
      </a>

      <div className="flex flex-col gap-3">
        {items.map((item) => (
          <MenuItem key={item.id} item={item} />
        ))}
      </div>

      <div className="mt-14">
        <MenuItem item={createItem} />
      </div>

      <div className="mt-auto">
        <MenuItem item={moreItem} />
      </div>
    </nav>
  );
}
