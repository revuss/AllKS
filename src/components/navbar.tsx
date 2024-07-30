import ThemeButton from "./themeButton";

export function Navbar() {
  return (
    <>
      <nav className="mx-10 my-10 inline-flex w-full justify-between border-2">
        <div>
          <span>Logo</span>
        </div>

        <div>
          <ThemeButton />
        </div>
      </nav>
    </>
  );
}
