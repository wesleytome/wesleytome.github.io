export const SiteFooter = () => {
  return (
    <footer className="border-t border-border bg-background py-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-6 text-sm text-muted-foreground text-center">
        <p>© {new Date().getFullYear()} Wesley Tomé. Transforming businesses through technology for 25 years.</p>
      </div>
    </footer>
  );
};
